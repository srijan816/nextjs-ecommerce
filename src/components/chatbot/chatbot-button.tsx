'use client';

import { useEffect } from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import { useChatbotStore } from '../../lib/store/chatbot-store';

export default function ChatbotButton() {
  const { isOpen, setIsOpen, unreadMessages } = useChatbotStore();

  // Handle keyboard shortcut (Cmd/Ctrl + /)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === '/') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setIsOpen]);

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-200 ease-in-out flex items-center justify-center"
      aria-label="Open customer support chat"
    >
      <FiMessageCircle className="w-6 h-6" />
      {unreadMessages > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
          {unreadMessages}
        </span>
      )}
    </button>
  );
}
