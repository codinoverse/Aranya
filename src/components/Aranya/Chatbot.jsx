import React, { useState } from 'react';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm your plant care assistant. Ask me anything about plants, care tips, or help finding the perfect plant for your space!",
      isUser: false
    }
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setInput('');
      setTimeout(() => {
        const responses = [
          "That's a great question! For that plant, I'd recommend watering once a week and placing it in bright, indirect light.",
          "Based on your description, it sounds like you might have a Monstera! They love humidity and filtered sunlight.",
          "For beginners, I'd suggest starting with a Snake Plant or Pothos - they're very forgiving!",
          "Make sure to check the soil moisture before watering. Most plants prefer to dry out slightly between waterings."
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        setMessages(prev => [...prev, { text: randomResponse, isUser: false }]);
      }, 1000);
    }
  };

  return (
    <div id="chatbot" className="fixed bottom-6 right-6 z-50">
      <div
        id="chatbot-toggle"
        className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition"
        onClick={toggleChat}
      >
        <i className="fas fa-robot text-2xl text-white"></i>
      </div>
      <div id="chatbot-window" className={`${isOpen ? '' : 'hidden'} absolute bottom-20 right-0 w-80 h-96 bg-white rounded-2xl shadow-2xl border`}>
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <i className="fas fa-robot text-white text-xl"></i>
              <span className="text-white font-semibold">Plant Assistant</span>
            </div>
            <button id="close-chat" className="text-white hover:text-gray-200" onClick={toggleChat}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div id="chat-messages" className="p-4 h-64 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`${msg.isUser ? 'bg-green-100 ml-8' : 'bg-gray-100 mr-8'} rounded-lg p-3 mb-3`}>
              <p className="text-sm text-gray-700">{msg.text}</p>
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <input
              id="chat-input"
              type="text"
              placeholder="Ask about plants..."
              className="flex-1 px-3 py-2 border rounded-full outline-none focus:border-green-500"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && sendMessage()}
            />
            <button
              id="send-message"
              className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
              onClick={sendMessage}
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;