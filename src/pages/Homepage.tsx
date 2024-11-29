import React, { useState } from "react";
import { useTrie } from "../contexts/TrieContext";
import {
  Container,
  SearchContainer,
  SearchInput,
  Suggestions,
} from "../themes/style";

const Homepage: React.FC = () => {
  const [query, setQuery] = useState("");
  const trie = useTrie();
  const [suggestions, setSuggestions] = useState<
    { word: string; definition: string }[]
  >([]);

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
    <Container>
      <h1>Sistema de Busca com Trie</h1>
      <SearchContainer>
        <SearchInput
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Digite para buscar..."
        />
      </SearchContainer>
      <Suggestions show={suggestions.length > 0}>
        {suggestions.map((suggestion, index) => (
          <div key={index} className="suggestion-item">
            <strong>{suggestion.word}</strong>: {suggestion.definition}
          </div>
        ))}
      </Suggestions>
    </Container>
  );
};

export default Homepage;
