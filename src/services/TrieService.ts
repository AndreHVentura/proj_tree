
// Lógica relacionada ao Trie (inserção, busca, etc.)

import { TrieNode, Trie } from '../types/index';

export class TrieService {
  trie: Trie;

  constructor() {
    this.trie = new Trie();
    this.insertInitialWords();
  }

  insertInitialWords() {
    // Inserindo palavras e suas definições
    this.trie.insert("Banco", "Instituição financeira que oferece serviços como contas, empréstimos e investimentos.");
    this.trie.insert("Banca", "Equipe de pessoas para avaliar algo.");
  }

  insert(word: string, definition: string = ""): void {
    this.trie.insert(word, definition);
  }

  search(word: string): boolean {
    return this.trie.search(word);
  }

  startsWith(prefix: string): { word: string, definition: string }[] {
    return this.trie.startsWith(prefix);
  }

  printTree(): void {
    this.trie.printTree();
  }
}