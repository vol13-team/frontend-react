import { Outlet, Link } from "react-router-dom";
import "../assets/css/Header.css";
import dummyIcon from "../assets/images/image.png";
import styled from "styled-components";

const Header: React.FC = () => {
  const Bg = styled.div`
    background-color: #D9D9D9;`;
  return (
    <>
      <Bg className="title">
        <h1 className="logo">ロゴ入れる？</h1>

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
