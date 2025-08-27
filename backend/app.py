# app.py
import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from langchain_google_genai import ChatGoogleGenerativeAI, GoogleGenerativeAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain.chains import StuffDocumentsChain
from langchain.prompts import PromptTemplate
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
from langchain.chains.llm import LLMChain

load_dotenv()

# ------------------------------
# API key for Gemini
# ------------------------------
import google.generativeai as genai
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

# ------------------------------
# FastAPI setup
# ------------------------------
app = FastAPI()

origins = [
    "http://localhost:5173",  # React local
    "https://varungowdar.vercel.app"  # production
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ------------------------------
# Request body schema
# ------------------------------
class QueryRequest(BaseModel):
    user_question: str

# ------------------------------
# Conversational chain setup
# ------------------------------
def get_conversational_chain():
    prompt_template = """
You are a friendly AI assistant chatting about Varun Gowda R.
- Use simple, clear, and slightly formal language.
- For general or casual questions (like greetings, jokes, or “how are you”), respond briefly and politely.
- For questions specifically about Varun (projects, skills, background, experiences), provide detailed yet to the point answers without general and specific things.
- If you do not know something, politely redirect the conversation to Varun's skills, projects, or experiences.
- Use a light touch of emojis to keep conversation friendly, but not too many.

Context:
{context}

User Question:
{question}

Answer:
"""
    model = ChatGoogleGenerativeAI(model="gemini-2.5-flash-lite", temperature=0.4)
    prompt = PromptTemplate(template=prompt_template, input_variables=["context", "question"])

    # StuffDocumentsChain replaces deprecated load_qa_chain
    chain = StuffDocumentsChain(
        llm_chain=LLMChain(llm=model, prompt=prompt),
        document_variable_name="context"
    )

    return chain
# ------------------------------
# API endpoint
# ------------------------------
@app.post("/ask/")
async def ask_question(request: QueryRequest):
    try:
        # Load FAISS DB
        embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
        db = FAISS.load_local("faiss_index", embeddings, allow_dangerous_deserialization=True)
        print("FAISS database loaded successfully!")
        # Similarity search
        docs = db.similarity_search(request.user_question)
        print(f"Retrieved {len(docs)} relevant documents.")
        # RAG chain
        chain = get_conversational_chain()
        response = chain({"input_documents": docs, "question": request.user_question}, return_only_outputs=True)
        print("Response generated.")
        return {"answer": response["output_text"]}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
