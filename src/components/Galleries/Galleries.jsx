import React, { useState } from "react";
import styled from "styled-components";
import { galleries } from "../../assets/mockData";
import { COLOR } from "../../assets/styles";
import { Select } from "../common/Select/Select";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 97%;
  height: 95%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px 20px 0 0;
`;

const GalleriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  gap: 20px;
  overflow-y: auto;
  /* width */
  &::-webkit-scrollbar {
    width: 10px;
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${COLOR.orange200};
    border-radius: 10px;
  }
`;

const ImageWrapper = styled.div`
  width: 330px;
  height: 330px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.8s ease;

  &:hover {
    transition: transform 0.8s ease;
    transform: scale(1.5);
  }
`;

const Title = styled.h1`
  margin: 0 0 0 20px;
  font-size: 40px;
`;

export const Galleries = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const getSelectedCategory = (value) => {
    setSelectedCategory(value);
  };

  const renderImages = (arr) => {
    return arr.map((el, index) => (
      <ImageWrapper key={el.id} data-id={index}>
        <Image src={el.url} alt="bas-relief" />
      </ImageWrapper>
    ));
  };

  return (
    <Container>
      <HeaderWrapper>
        <Title>Наши работы</Title>
        <Select
          options={[
            { id: 1, title: "Ремонт жилых комнат" },
            { id: 2, title: "Ремонт ванных комнат" },
            { id: 3, title: "Барельеф" },
            { id: 4, title: "Все работы" },
          ]}
          isPlaceholderExist={true}
          isLabelExist={true}
          placeholder={"Выбрать категорию"}
          label={"Категория"}
          getSelectedOption={getSelectedCategory}
        />
      </HeaderWrapper>
      <GalleriesWrapper>
        {selectedCategory?.title === "Барельеф" &&
          renderImages(galleries.basReliefs)}
        {selectedCategory?.title === "Ремонт жилых комнат" &&
          renderImages(galleries.repairs)}
        {selectedCategory?.title === "Ремонт ванных комнат" &&
          renderImages(galleries.bathRepairs)}
        {!selectedCategory || selectedCategory?.title === "Все работы"
          ? renderImages([
              ...galleries.basReliefs,
              ...galleries.bathRepairs,
              ...galleries.repairs,
            ])
          : null}
      </GalleriesWrapper>
    </Container>
  );
};
