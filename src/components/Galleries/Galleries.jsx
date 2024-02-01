import React, { memo, useState } from "react";
import styled from "styled-components";
import { galleries } from "../../assets/mockData";
import { COLOR } from "../../assets/styles";
import { Select } from "../common/Select/Select";
import { GalleryItem } from "../GalleryItem/GalleryItem";
import { createPortal } from "react-dom";
import { useImagePreview } from "../../hooks";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 0 40px 0;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 40px 20px 0 0;

  @media screen and (max-width: 871px) {
    flex-direction: column;
    justify-content: center;
    margin: 0;
    gap: 20px;
  }
`;

const GalleriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
    background: ${COLOR.grey100};
    border-radius: 10px;
  }

  @media screen and (max-width: 440px) {
    padding: 5px;
  }
`;

const Title = styled.h2`
  width: 100%;
  margin: 0 0 0 70px;
  font-size: 45px;

  @media screen and (max-width: 871px) {
    margin: 30px 0 0 0;
    text-align: center;
  }
`;

const SelectWrapper = styled.div`
  margin-right: 51px;
  @media screen and (max-width: 871px) {
    margin: 0;
  }
`;

export const Galleries = memo(() => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { displayImagePreview, onImagePreviewClick } = useImagePreview();

  const getSelectedCategory = (value) => {
    setSelectedCategory(value);
  };

  const renderImages = (arr) => {
    return arr.map((el) => (
      <GalleryItem key={el.id} callback={onImagePreviewClick} src={el.url} />
    ));
  };

  return (
    <Container>
      <HeaderWrapper>
        <Title>Наши работы</Title>
        <SelectWrapper>
          <Select
            options={[
              { id: 1, title: "Ремонт жилых комнат" },
              { id: 2, title: "Ремонт ванных комнат" },
              { id: 3, title: "Барельеф" },
              { id: 4, title: "Все работы" },
            ]}
            getSelectedOption={getSelectedCategory}
          />
        </SelectWrapper>
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
      {createPortal(displayImagePreview(), document.body)}
    </Container>
  );
});
