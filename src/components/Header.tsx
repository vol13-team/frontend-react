import { Outlet, Link } from "react-router-dom";
import "../assets/css/Header.css";
import dummyIcon from "../assets/images/image.png";
import styled from "styled-components";

const Header: React.FC = () => {
  const Bg = styled.div`
    background-color: #D9D9D9;
    position: fixed;
    top: 0;
    margin:0 0 40px 0;
    width: 100%;
    height: 4rem;
    margin-bottom: 1rem;`;

  const Logo = styled.h1`
    font-size: 2rem;
    margin: 0 0 0 80px;
    `;
  return (
    <>
      <Bg className="title">
        <Logo>ロゴ入れる？</Logo>

        <nav className="navigation">
          <Link to="/mypage">
            <img src={dummyIcon} alt="icon" className="img" />
          </Link>

          {/* <Link to="/" className="linknav">
            Home
          </Link>
          <Link to="/about" className="linknav">
            About
          </Link>
          <Link to="/contact" className="linknav">
            Contact
          </Link> */}
        </nav>
      </Bg>
      <Outlet />
    </>
  );
};

export default Header;
