
// Componente para a interação com o Trie

import React, { useState } from 'react';
import { useTrie } from '../contexts/TrieContext';

const TrieComponent: React.FC = () => {
  const [query, setQuery] = useState('');
  const trie = useTrie();
  const [suggestions, setSuggestions] = useState<{ word: string, definition: string }[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.trim();
    setQuery(query);

    if (query) {
      const suggestions = trie.startsWith(query); // Buscar sugestões
      setSuggestions(suggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div>
      <input
        id="search"
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Digite uma palavra..."
      />
      <div id="suggestions">
        {suggestions.map((suggestion, index) => (
          <div key={index} className="suggestion-item">
            <strong>{suggestion.word}</strong>: {suggestion.definition}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrieComponent;