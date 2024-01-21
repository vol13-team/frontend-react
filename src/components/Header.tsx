import styled from "styled-components";
import Nav from "./Nav";
import { theme } from "./thme";

const Header = () => {
  return (
    <SHeader>
      <SContainer>
        <STitle>Article Park</STitle>
        <SFlex>
          {/* {false ? ( */}
          <>
            <img src='/icon.svg' height={45} width={45} alt='アイコン' />
          </>
          {/* ) : ( */}
          <>
            <SLoginButton>ログイン</SLoginButton>
            <SPaddingLeft>
              <SSignUpButton>新規登録</SSignUpButton>
            </SPaddingLeft>
          </>
          {/* )} */}
        </SFlex>
      </SContainer>
      <Nav />
    </SHeader>
  );
};

const SHeader = styled.header`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ddd;
`;

const SContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding-top: 16px;
  margin: 0 auto;
`;

const STitle = styled.h1`
  color: #fff;
  background-color: ${theme.primaryColor};
  padding: 10px 12px;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 6px;
`;

const SLoginButton = styled.button`
  border: 2px solid ${theme.primaryColor};
  outline: none;
  border-radius: 6px;
  padding: 6px 12px;
  color: ${theme.primaryColor};
  font-weight: bold;
  font-size: 0.9rem;
  background-color: #fff;
`;

const SSignUpButton = styled.button`
  border: 2px solid ${theme.primaryColor};
  outline: none;
  border-radius: 6px;
  padding: 6px 12px;
  background-color: ${theme.primaryColor};
  font-weight: bold;
  font-size: 0.9rem;
  color: #fff;
`;

const SPaddingLeft = styled.div`
  padding-left: 8px;
`;

const SFlex = styled.div`
  display: flex;
  align-items: center;
`;

export default Header;
