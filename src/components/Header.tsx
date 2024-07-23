import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export const Header: React.FC = () => {
  const [token, setToken] = useState<string | undefined>(undefined);

  useEffect(() => {
    setToken(Cookies.get("__session"));
  }, [token]);

  return (
    <>
      <Bg>
        <Logo>
          {/* <img src="src/assets/images/logo.png" alt="ロゴ画像" width={"100px"} /> */}
          Article Park
        </Logo>
        <Navigate>
          {token === undefined ? (
            <SigninDiv>
              <SignedOut>
                <SignIn />
              </SignedOut>
              <SignedIn>
                <User />
              </SignedIn>
            </SigninDiv>
          ) : (
            <>
              <SigninDiv>
                <SignedOut>
                  <SignIn />
                </SignedOut>
                <SignedIn>
                  <User />
                </SignedIn>
              </SigninDiv>
              <Link to="mypage">
                <AccountIcon fontSize="large" />
              </Link>
            </>
          )}
        </Navigate>
      </Bg>
      <Outlet />
    </>
  );
};

const AccountIcon = styled(AccountCircleIcon)`
    margin: 0 40px 0 0px;`;

const Bg = styled.header`
// メインカラー
    background-color: #F58181;
    position: fixed;
    top: 0;
    margin:0 0 40px 0;
    width: 100%;
    height: 4rem;
    margin-bottom: 1rem;
    z-index: 100;`;

const Logo = styled.h1`
    font-size: 2rem;
    margin: 10px 0 0 80px;
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    color:white;
    `;

const Navigate = styled.nav`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 5px;
  right: 0;
  align-items: center;
  padding: 1rem 0;
  top: 0;
`;

const SigninDiv = styled.div`
    margin: auto 40px auto 0;`;

const SignIn = styled(SignInButton)`
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: white;
    `;

const User = styled(UserButton)`
    padding: 4rem;
  `;
