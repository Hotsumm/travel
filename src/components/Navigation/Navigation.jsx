import React from 'react';
import styled from 'styled-components';
import NavSideBar from './NavSideBar';
import NavSearchBar from './NavSearchBar';
import NavProfileBar from './NavProfileBar';
import { Link } from 'react-router-dom';

const NavContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: fixed;
  color: white;
`;

const NavWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 0px 60px;
  align-items: center;
  background: ${(props) => (props.show ? ' white' : 'transparent')};
`;

const TitleContainer = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  padding: 20px 0;
  justify-content: flex-start;
  font-size: 30px;
  font-weight: 700;
  color: ${(props) => (props.show ? 'black' : 'white')};
`;

const SearchContainer = styled.div`
  width: 33%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
`;

const ProfileContainer = styled.div`
  width: 33%;
  display: flex;
  padding: 20px 0;
  justify-content: flex-end;
`;

const Navigation = ({ show }) => {
  return (
    <>
      <NavContainer>
        <NavWrap show={show}>
          <TitleContainer show={show}>
            <Link to="/">Travel</Link>
          </TitleContainer>
          <SearchContainer show={show}>
            <NavSearchBar />
          </SearchContainer>
          <ProfileContainer show={show}>
            <NavProfileBar />
          </ProfileContainer>
        </NavWrap>
        <NavSideBar />
      </NavContainer>
    </>
  );
};

export default Navigation;