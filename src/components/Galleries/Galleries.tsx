import { useState } from "react";
import { GalleryItemType, galleries } from "../../assets/mockData";
import { Select } from "../common/Select/Select";
import { GalleryItem } from "../GalleryItem/GalleryItem";
import { createPortal } from "react-dom";
import {
  Container,
  GalleriesWrapper,
  HeaderWrapper,
  SelectWrapper,
  Title,
} from "./GalleriesStyles";
import { useImagePreview } from "../../assets/hooks";

export const Galleries = () => {
  const [selectedCategory, setSelectedCategory] = useState<{
    id: number;
    title: string;
  } | null>(null);
  const { displayImagePreview, onImagePreviewClick } = useImagePreview();

  const getSelectedCategory = (value: { id: number; title: string }) => {
    setSelectedCategory(value);
  };

  const renderImages = (arr: GalleryItemType[]) => {
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
};
