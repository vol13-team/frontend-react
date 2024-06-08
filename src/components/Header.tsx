import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import { SignedIn, SignedOut, SignInButton, UserButton, useAuth } from "@clerk/clerk-react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const Header: React.FC = () => {
  const { isSignedIn } = useAuth();

  return (
    <>
      <Bg>
        <Logo>ロゴ入れる？</Logo>
        <Navigate>
          <SigninDiv>
            <SignedOut>
              <SignIn />
            </SignedOut>
            <SignedIn>
              <User />
            </SignedIn>
          </SigninDiv>
          {(isSignedIn ?? false) && (
            <Link to="mypage">
              <AccountIcon fontSize="large" />
            </Link>
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
    background-color: #D9D9D9;
    position: fixed;
    top: 0;
    margin: 0 0 100px 0;
    width: 100%;
    height: 4rem;
    margin-bottom: 1rem;
    z-index: 100;`;

const Logo = styled.h1`
    font-size: 2rem;
    margin: 0 0 0 80px;
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
