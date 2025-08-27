import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from "react-markdown";

const Chatbot = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Hi! How can I help you today?' }
    ]);
    const [input, setInput] = useState('');
    const chatEndRef = useRef(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = input;
        setMessages(msgs => [...msgs, { sender: 'user', text: userMessage }]);
        setInput('');

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/ask/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_question: userMessage })
            });

            const data = await response.json();

            setMessages(msgs => [
                ...msgs,
                { sender: 'bot', text: data.answer || "Oops! Something went wrong 😅" }
            ]);
        } catch (error) {
            console.error('Error sending message:', error);
            setMessages(msgs => [
                ...msgs,
                { sender: 'bot', text: "Sorry! I couldn't reach the server 😢" }
            ]);
        }
    };

    return (
        <>
            {!open && (
                <button
                    className="fixed bottom-6 right-2 md:right-6 w-12 h-12 md:w-14 md:h-14 z-[1001] bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-cyan-400 border-none rounded-full text-2xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => setOpen(true)}
                >
                    💬
                </button>
            )}
            {open && (
                <div className="fixed bottom-6 right-2 md:right-6 w-11/12 md:w-96 shadow-2xl rounded-xl bg-gradient-to-b from-gray-900 via-slate-900 to-black border border-gray-700 z-[1000] font-inherit">
                    <div className="px-4 py-3 border-b border-gray-600 bg-gradient-to-r from-slate-800 to-slate-700 text-gray-300 rounded-t-xl font-semibold text-base flex items-center justify-between">
                        <span>Chatbot</span>
                        <button
                            className="bg-none border-none text-gray-300 hover:text-cyan-400 text-xl cursor-pointer transition-colors duration-200"
                            onClick={() => setOpen(false)}
                            aria-label="Close"
                        >
                            ×
                        </button>
                    </div>
                    <div className="p-4 min-h-[200px] max-h-80 md:max-h-96 overflow-y-auto bg-gradient-to-b from-gray-900 via-slate-900 to-black">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex mb-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <span
                                    className={`px-3 py-2 rounded-lg inline-block max-w-[90%] md:max-w-[80%] text-sm break-words whitespace-pre-wrap
                                    ${msg.sender === 'user'
                                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-right'
                                        : 'bg-gradient-to-r from-slate-700 to-slate-600 text-gray-300 text-left'
                                    }
                                    shadow-md`}
                                >
                                    {msg.sender === "user" ? msg.text : <ReactMarkdown>{msg.text}</ReactMarkdown>}
                                </span>
                            </div>
                        ))}
                        <div ref={chatEndRef} />
                    </div>
                    <div className="flex border-t border-gray-600 bg-gradient-to-r from-gray-900 to-slate-900 rounded-b-xl p-3">
                        <input
                            className="flex-1 px-3 py-2 rounded-md border border-gray-600 bg-gray-800 text-gray-300 text-base mr-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent placeholder-gray-500"
                            type="text"
                            placeholder="Type your message..."
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && handleSend()}
                        />
                        <button
                            className="px-4 py-2 rounded-md border-none bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold cursor-pointer transition-all duration-200 shadow-md hover:shadow-lg"
                            onClick={handleSend}
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;
