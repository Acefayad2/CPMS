"use client";
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function CustomerSupportBubble() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Interface */}
      {isOpen && (
        <div className="mb-4 w-80 h-96 bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50 rounded-t-lg">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-gray-800">Customer Support</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-gray-200 rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          
          {/* Chat Area */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="bg-blue-50 p-3 rounded-lg mb-3">
              <p className="text-sm text-gray-700">
                Hi! How can we help you today? Our team is here to assist you with any questions about our services.
              </p>
            </div>
            
            {/* Placeholder for embedded chat */}
            <div className="text-center text-gray-500 text-sm py-8">
              <MessageCircle className="w-8 h-8 mx-auto mb-2 text-gray-300" />
              <p>Chat widget will be embedded here</p>
            </div>
          </div>
          
          {/* Input Area */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled
              />
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                disabled
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Support Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
        aria-label="Customer Support"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
} 