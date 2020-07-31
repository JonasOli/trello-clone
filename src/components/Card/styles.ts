import styled from "styled-components";

export const CardContainer = styled.article<any>`
  padding: 1rem;
  background-color: #fff;
  opacity: ${({ isDragging }) => (isDragging ? 0 : 1)};
  border-radius: 3px;
  box-shadow: 1px 1px 1px 0.3px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;
