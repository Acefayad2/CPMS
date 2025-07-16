"use client";
import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function CustomerSupportBubble() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Inject Botpress scripts only when chat is opened
      if (!document.getElementById('bp-webchat-script')) {
        const script1 = document.createElement('script');
        script1.src = 'https://cdn.botpress.cloud/webchat/v3.2/inject.js';
        script1.defer = true;
        script1.id = 'bp-webchat-script';
        document.body.appendChild(script1);
      }
      if (!document.getElementById('bp-webchat-custom-script')) {
        const script2 = document.createElement('script');
        script2.src = 'https://files.bpcontent.cloud/2025/07/16/08/20250716084418-W1PK5CL9.js';
        script2.defer = true;
        script2.id = 'bp-webchat-custom-script';
        document.body.appendChild(script2);
      }
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Interface (no custom frame, just open Botpress widget) */}
      {isOpen && (
        <div className="mb-4 w-80 h-16 bg-white rounded-lg shadow-lg border border-gray-200 flex items-center justify-between p-4">
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