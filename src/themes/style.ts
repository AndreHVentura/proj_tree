// src/theme/theme.ts
import styled from 'styled-components';

// Container principal da página
export const Container = styled.div`
  font-family: ${(props) => props.theme.fonts.main}; /* Usando a fonte do tema */
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background}; /* Usando a cor de fundo do tema */
  box-sizing: border-box;
`;

// Container do campo de busca
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  position: relative;
  margin-bottom: 5px;
`;

// Input de busca
export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid ${(props) => props.theme.colors.border}; /* Usando a cor de borda do tema */
  border-radius: 15px;
  padding-right: 40px;
  box-sizing: border-box;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary}; /* Usando a cor primária do tema */
    outline: none;
  }
`;

// Sugestões de autocompletar
interface SuggestionsProps {
  show: boolean;
}

export const Suggestions = styled.div<SuggestionsProps>`
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.border}; /* Usando a cor de borda do tema */
  border-radius: 15px;
  max-height: 200px;
  overflow-y: auto;
  width: 50%;
  display: ${(props) => (props.show ? 'block' : 'none')};/* Exibe as sugestões quando 'show' for true */

  .suggestion-item {
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: ${(props) => props.theme.colors.suggestionHover}; /* Usando a cor de hover do tema */
    }
  }
`;
