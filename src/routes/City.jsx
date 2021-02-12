import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation/Navigation';
import { cityArray } from '../utils/cityArray';
import CityPost from '../components/City/CityPost';

const CityContainer = styled.div`
  width: 100%;
  padding-top: 80px;
`;

const CityHeader = styled.div`
  width: 100%;
  padding: 60px 0px 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CityImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 30px 0;
`;

const CityName = styled.div`
  color: black;
  font-size: 40px;
  font-weight: 700;
`;

const City = ({ match, city }) => {
  const cityName = match.params.cityName;
  const thisCityObj = cityArray.filter((city) => city.name === cityName);
  const cityImgUrl = thisCityObj[0].imgUrl;

  return (
    <>
      <Navigation show={true} sideBar={false}></Navigation>
      <CityContainer>
        <CityHeader>
          <CityName>{cityName} 둘러보기</CityName>
          <CityImg src={cityImgUrl}></CityImg>
        </CityHeader>
        <CityPost />
      </CityContainer>
    </>
  );
};

export default City;