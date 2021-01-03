import styled from 'styled-components';

export const Tab = styled.div`
  user-select: none;
  font-size: 1.1em;
  cursor: pointer;
  padding: 5px 10px;
  font-weight: 600;
  color: ${({ theme, mode, active }) => {
    if (active && mode === 'primary') {
      return 'hsl(0,0%,100%)';
    } else if (active && mode === 'secondary') {
      return theme.borderus;
    }
    return 'hsl(0,1%,80%)';
  }};
  border-bottom: 3px solid
    ${({ theme, mode, active }) => {
      if (active && mode === 'primary') {
        return 'white';
      } else if (active && mode === 'secondary') {
        return theme.borderus;
      }
      return 'transparent';
    }};
`;
