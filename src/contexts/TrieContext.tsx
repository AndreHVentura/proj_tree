
// Contexto para gerenciar a Trie globalmente

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { TrieService } from '../services/TrieService';
import { TrieNode, Trie } from '../types/index';

const TrieContext = createContext<Trie | undefined>(undefined);

interface TrieProviderProps {
  children: ReactNode;
}

export const TrieProvider: React.FC<TrieProviderProps> = ({ children }) => {
  const [trie] = useState(new Trie()); // Cria uma nova instância da Trie

  useEffect(() => {
    trie.insert("Banco", "Instituição financeira que oferece serviços como contas, empréstimos e investimentos.");
    trie.insert("Banca", "Equipe de pessoas para avaliar algo.");
  }, [trie]);

  return (
    <TrieContext.Provider value={trie}>
      {children}
    </TrieContext.Provider>
  );
};

export const useTrie = (): Trie => {
  const context = useContext(TrieContext);
  if (!context) {
    throw new Error("useTrie must be used within a TrieProvider");
  }
  return context;
};