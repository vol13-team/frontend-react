import styled from "styled-components";

import { theme } from "./thme";

interface SListProps {
  isSelect: boolean;
}
const Nav = () => {
  const Links = [
    { id: 1, href: "/", label: "ホーム" },
    { id: 2, href: "/article", label: "ピックアップ記事" },
  ];
  return (
    <SUL>
      {Links.map((link) => (
        <SLink href={link.href}>
          {/* isSelect={isActive(link.href)} */}
          <SList key={link.id} isSelect={false}>
            {link.label}
          </SList>
        </SLink>
      ))}
    </SUL>
  );
};

const SList = styled.li.withConfig({
  shouldForwardProp: (prop) => prop !== "isSelect",
})<SListProps>`
  padding: 16px;
  height: 56px;
  cursor: pointer;
  transition: all 0.2s;
  opacity: 0.7;
  ${(props) =>
    props.isSelect ? `border-bottom: 4px solid ${theme.primaryColor}` : ""};
  ${(props) => (props.isSelect ? `opacity: 1` : "")};
  &:hover {
    opacity: 1;
  }
`;

const SUL = styled.ul`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  list-style: none;
`;

const SLink = styled.link`
  color: #333;
  text-decoration: none;
  font-weight: bold;
`;

export default Nav;
