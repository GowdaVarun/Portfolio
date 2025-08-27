import os
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_community.vectorstores import FAISS
from dotenv import load_dotenv

load_dotenv()

# Load your portfolio text
with open("./data/info.txt", "r", encoding="utf-8") as f:
    texts = [line.strip() for line in f if line.strip()]

# ------------------------------
# Initialize Gemini embeddings
# ------------------------------
# This object internally calls the Gemini embeddings API
embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")

# Generate FAISS vector DB from texts
db = FAISS.from_texts(texts, embeddings)

# Save the FAISS DB locally
db.save_local("faiss_index")

print("✅ FAISS database created successfully using Gemini embeddings!")
