'use client';

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type Message = {
  role: 'user' | 'assistant';
  content: string;
};

type ChatbotState = {
  isOpen: boolean;
  messages: Message[];
  unreadMessages: number;
  isLoading: boolean;
  setIsOpen: (isOpen: boolean) => void;
  addMessage: (message: Message) => void;
  setUnreadMessages: (count: number) => void;
  incrementUnreadMessages: () => void;
  setIsLoading: (isLoading: boolean) => void;
  clearMessages: () => void;
};

// Create a store with browser-safe persistence
export const useChatbotStore = create<ChatbotState>()(
  persist(
    (set) => ({
      isOpen: false,
      messages: [],
      unreadMessages: 0,
      isLoading: false,
      setIsOpen: (isOpen) => set((state) => ({ 
        isOpen, 
        unreadMessages: isOpen ? 0 : state.unreadMessages 
      })),
      addMessage: (message) => 
        set((state) => {
          console.log('Adding message to store:', message);
          console.log('Current messages:', state.messages);
          return { 
            messages: [...state.messages, message],
            unreadMessages: state.isOpen 
              ? 0 
              : message.role === 'assistant' 
                ? state.unreadMessages + 1 
                : state.unreadMessages
          };
        }),
      setUnreadMessages: (count) => set({ unreadMessages: count }),
      incrementUnreadMessages: () => 
        set((state) => ({ unreadMessages: state.unreadMessages + 1 })),
      setIsLoading: (isLoading) => set({ isLoading }),
      clearMessages: () => set({ messages: [] }),
    }),
    {
      name: 'chatbot-storage',
      storage: createJSONStorage(() => {
        // Only use localStorage in the browser
        if (typeof window !== 'undefined') {
          return localStorage;
        }
        // Return a dummy storage for SSR
        return {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {},
        };
      }),
    }
  )
);
