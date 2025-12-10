import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatMessage } from '../types';
import { sendMessageToAI, startChat } from '../services/geminiService';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    startChat().then(() => {
        setMessages([
            {
                role: 'model',
                text: "Hi! I'm your guide. Ask me to navigate (e.g., 'take the quiz', 'open student dashboard') or pick a quick action below.",
            },
        ]);
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleNavigation = (text: string) => {
    const lowerCaseText = text.toLowerCase();
    if (lowerCaseText.includes('quiz')) {
      navigate('/quiz');
    } else if (lowerCaseText.includes('student')) {
      navigate('/student');
    } else if (lowerCaseText.includes('parent')) {
      navigate('/parent');
    } else if (lowerCaseText.includes('teacher')) {
      navigate('/teacher');
    } else if (lowerCaseText.includes('careers')) {
      navigate('/careers');
    } else if (lowerCaseText.includes('paths')) {
      navigate('/paths');
    }
  };

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    handleNavigation(input);

    try {
      const response = await sendMessageToAI(input, messages);
      const modelMessage: ChatMessage = { role: 'model', text: response };
      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: ChatMessage = { role: 'model', text: 'Sorry, I encountered an error. Please try again.' };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const quickActions = ["Take the Quiz", "Student Dashboard", "Parent Dashboard", "Teacher Dashboard"];

  const handleQuickAction = (action: string) => {
    setInput(action);
    // Mimic sending after a short delay to allow state update
    setTimeout(() => document.getElementById('send-button')?.click(), 100);
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-50 bg-marg-accent text-white px-5 py-3 rounded-full shadow-lg flex items-center justify-center hover:bg-marg-accent/90 focus:outline-none focus:ring-2 focus:ring-marg-accent focus:ring-opacity-50 transition-transform hover:scale-110 font-tech uppercase text-lg tracking-widest"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        chatbot
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-5 w-full max-w-sm h-[70vh] bg-white rounded-xl shadow-2xl flex flex-col transition-all duration-300 ease-out transform scale-100 origin-bottom-right">
          <div className="p-4 bg-marg-bg-light rounded-t-xl border-b border-gray-200 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg text-marg-primary">MARG AI</h3>
              <p className="text-sm text-marg-text-secondary">Ask for help or choose an action</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600" aria-label="Close chat">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} mb-3`}>
                <div className={`rounded-lg px-4 py-2 max-w-xs lg:max-w-sm ${msg.role === 'user' ? 'bg-marg-accent text-white' : 'bg-marg-secondary/20 text-marg-text-primary'}`}>
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-3">
                 <div className="rounded-lg px-4 py-2 bg-marg-secondary/20 text-marg-text-primary">
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-marg-secondary rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-marg-secondary rounded-full animate-bounce delay-75"></div>
                        <div className="w-2 h-2 bg-marg-secondary rounded-full animate-bounce delay-150"></div>
                    </div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-xl">
             <div className="grid grid-cols-2 gap-2 mb-2">
                {quickActions.map(action => (
                    <button key={action} onClick={() => handleQuickAction(action)} className="text-xs text-center bg-gray-100 text-marg-text-secondary p-2 rounded-md hover:bg-gray-200 transition-colors">
                        {action}
                    </button>
                ))}
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-marg-accent focus:outline-none"
              />
              <button id="send-button" onClick={handleSend} className="bg-marg-accent text-white px-4 py-2 rounded-md font-semibold hover:opacity-90 transition-opacity disabled:opacity-50" disabled={isLoading}>
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
