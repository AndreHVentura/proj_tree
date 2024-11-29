
// Tipos para a Trie e seus métodos

// Definição da classe TrieNode
export class TrieNode {
  children: { [key: string]: TrieNode };
  isEndOfWord: boolean;
  definition: string;

  constructor() {
    this.children = {};
    this.isEndOfWord = false;
    this.definition = '';
  }
}

// Definição da classe Trie
export class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode(); // Criando um novo TrieNode como root
  }

  insert(word: string, definition: string = ''): void {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
    node.definition = definition;
  }

  search(word: string): boolean {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  startsWith(prefix: string): { word: string; definition: string }[] {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return [];
      }
      node = node.children[char];
    }
    return this.collectWords(node, prefix);
  }

  private collectWords(node: TrieNode, prefix: string): { word: string; definition: string }[] {
    let words: { word: string; definition: string }[] = [];
    if (node.isEndOfWord) {
      words.push({ word: prefix, definition: node.definition });
    }
    for (let char in node.children) {
      words = words.concat(this.collectWords(node.children[char], prefix + char));
    }
    return words;
  }

  printTree(): void {
    const treeStructure = this.getTreeStructure(this.root);
    console.log(JSON.stringify(treeStructure, null, 2));
  }

  private getTreeStructure(node: TrieNode): { v: string; children: { v: string; children: any[]; definition: string }[]; definition: string } {
    const result: { v: string; children: { v: string; children: any[]; definition: string }[]; definition: string } = {
      v: '',
      children: [],
      definition: ''
    };
  
    for (let char in node.children) {
      const childNode = node.children[char];
      const childStructure = {
        v: char,
        children: this.getTreeStructure(childNode).children, // Recursão para capturar os filhos
        definition: childNode.isEndOfWord ? childNode.definition : '',
      };
      result.children.push(childStructure); // Agora o tipo de result.children está correto
    }
  
    return result;
  }
}
