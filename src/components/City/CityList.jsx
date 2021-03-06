import React from 'react';
import styled from 'styled-components';
import { FiMapPin } from 'react-icons/fi';
import { cityArray } from '../../utils/cityArray';
import { Link } from 'react-router-dom';

const CityListContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 50px 80px;
  margin-top: 250px;
  z-index: 2;
`;

const CityListHeader = styled.div`
  width: 100%;
`;

const CityMenu = styled.ul`
  display: flex;
  cursor: default;
  justify-content: flex-start;
  align-items: center;
`;

const Menu = styled.li`
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  background: white;
  border-radius: 3px 3px 0 0;
  padding: 10px 20px;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  svg {
    margin-right: 5px;
  }
`;

const CityListWrap = styled.ul`
  display: grid;
  background: white;
  grid-template-columns: repeat(6, 1fr);
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  gap: 25px;
  padding: 40px 30px;
  border-radius: 0 3px 3px 3px;
  border-top: 1px solid #ababab80;
  opacity: 0.9;
`;

const City = styled.li`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  cursor: pointer;
`;

const CityName = styled.h3`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  font-size: 16px;
  color: black;
  border: 1px solid #ababab80;
  border-radius: 3px;
  :hover {
    background: #16a085;
    color: white;
  }
`;

const CityList = () => {
  return (
    <CityListContainer>
      <CityListHeader>
        <CityMenu>
          <Menu>
            <FiMapPin size={'20'} />
            <span>도시</span>
          </Menu>
        </CityMenu>
      </CityListHeader>
      <CityListWrap>
        {cityArray.map((city, index) => (
          <Link key={index} to={`/city/${city.name}`}>
            <City>
              <CityName>{city.name}</CityName>
            </City>
          </Link>
        ))}
      </CityListWrap>
    </CityListContainer>
  );
};

export default CityList;
