import styled from "styled-components";
import { colors, styles } from "../../Utils/defaultStyles";

export const CardContainer = styled.article<any>`
  padding: 0.5rem;
  background-color: #fff;
  opacity: ${({ isDragging }) => (isDragging ? 0 : 1)};
  border-radius: 3px;
  box-shadow: ${styles.boxShadow};
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${colors.hoverBackground};
  }
`;

export const CardContent = styled.span`
  font-size: 14px;
`;
