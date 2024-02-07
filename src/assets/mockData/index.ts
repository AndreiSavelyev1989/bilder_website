import {
  birds,
  service1,
  service2,
  service3,
  service4,
  service5,
  service6,
  basRelief1,
  basRelief2,
  basRelief3,
  basRelief4,
  repair1,
  repair2,
  repair3,
  repair4,
  repair5,
  repair6,
  repair7,
  repair8,
  repair9,
  bathRepair1,
  bathRepair2,
  bathRepair3,
  bathRepair4,
  bathRepair5,
  bathRepair6,
  bathRepair7,
  bathRepair8,
  commentOwner1,
  commentOwner2,
  commentOwner3,
} from "../images";
import { v4 as uuidv4 } from "uuid";

export type ServiceType = {
  id: string;
  title: string;
  src: string;
  services: { id: number; title: string }[];
};

export const services: ServiceType[] = [
  {
    id: uuidv4(),
    title: "Ремонт квартир",
    src: service1,
    services: [
      { id: 1, title: "Устройство наливных полов" },
      { id: 2, title: "Электромонтажные работы" },
      { id: 3, title: "Оклейка стен обоями" },
      { id: 4, title: "Монтаж дверей" },
      { id: 5, title: "Укладка ламината и линолеума" },
      { id: 6, title: "Монтаж потолков" },
      { id: 7, title: "Дизайн-проект и 3D-визуализция" },
    ],
  },
  {
    id: uuidv4(),
    title: "Ремонт домов и коттеджей",
    src: service2,
    services: [
      { id: 1, title: "Отделка фасада дома" },
      { id: 2, title: "Устройство наливных полов" },
      { id: 3, title: "Электромонтажные работы" },
      { id: 4, title: "Монтаж потолков" },
      { id: 5, title: "Укладка керамической плитки" },
      { id: 6, title: "Утепление стен и фасада дома" },
    ],
  },
  {
    id: uuidv4(),
    title: "Ремонт офисов",
    src: service3,
    services: [
      { id: 1, title: "Дизайн проект и 3D визуализация" },
      { id: 2, title: "Нанесение декоративной штукатурки" },
      { id: 3, title: "Монтаж потолков" },
      { id: 4, title: "Обшивка стен панелями" },
      { id: 5, title: "Укладка плитки на пол" },
      { id: 6, title: "Укладка ламината" },
      { id: 7, title: "Укладка паркета" },
    ],
  },
  {
    id: uuidv4(),
    title: "Ремонт ванных комнат",
    src: service4,
    services: [
      { id: 1, title: "Укладка керамической плитки" },
      { id: 2, title: "Установка душевых кабин" },
      { id: 3, title: "Установка сантехники" },
      { id: 4, title: "Монтаж светильников" },
      { id: 5, title: "Установка ванн" },
      { id: 6, title: "Монтаж труб" },
      { id: 7, title: "Гидроизоляция помещения" },
    ],
  },
  {
    id: uuidv4(),
    title: "Капитальный ремонт",
    src: service5,
    services: [
      { id: 1, title: "Кровля" },
      { id: 2, title: "Фасад" },
      { id: 3, title: "Инженерные системы" },
      { id: 4, title: "Места общего пользования" },
      { id: 5, title: "Соответствие стандартам" },
      { id: 6, title: "Положительные отзывы" },
      { id: 7, title: "Официальность" },
      { id: 8, title: "Гарантия" },
    ],
  },
  {
    id: uuidv4(),
    title: "Ремонт квартир",
    src: service6,
    services: [
      { id: 1, title: "Внутренняя отделка" },
      { id: 2, title: "Пластиковые и деревянные панели" },
      { id: 3, title: "Кафель и плитка" },
      { id: 4, title: "Лакокрасочные покрытия" },
      { id: 5, title: "Каменные плиты" },
      { id: 6, title: "Устойчивость" },
      { id: 7, title: "Гарантии" },
    ],
  },
];

export type GalleryItemType = {
  id: string;
  url: string;
  caption?: string;
};

type GalleriesType = {
  basReliefs: GalleryItemType[];
  repairs: GalleryItemType[];
  bathRepairs: GalleryItemType[];
  works: GalleryItemType[];
};

export const galleries: GalleriesType = {
  basReliefs: [
    {
      id: uuidv4(),
      url: basRelief1,
    },
    {
      id: uuidv4(),
      url: basRelief2,
    },
    {
      id: uuidv4(),
      url: basRelief3,
    },
    {
      id: uuidv4(),
      url: basRelief4,
    },
    {
      id: uuidv4(),
      url: birds,
    },
  ],
  repairs: [
    {
      id: uuidv4(),
      url: repair1,
    },
    {
      id: uuidv4(),
      url: repair2,
    },
    {
      id: uuidv4(),
      url: repair3,
    },
    {
      id: uuidv4(),
      url: repair4,
    },
    {
      id: uuidv4(),
      url: repair5,
    },
    {
      id: uuidv4(),
      url: repair6,
    },
    {
      id: uuidv4(),
      url: repair7,
    },
    {
      id: uuidv4(),
      url: repair8,
    },
    {
      id: uuidv4(),
      url: repair9,
    },
  ],
  bathRepairs: [
    {
      id: uuidv4(),
      url: bathRepair1,
    },
    {
      id: uuidv4(),
      url: bathRepair2,
    },
    {
      id: uuidv4(),
      url: bathRepair3,
    },
    {
      id: uuidv4(),
      url: bathRepair4,
    },
    {
      id: uuidv4(),
      url: bathRepair5,
    },
    {
      id: uuidv4(),
      url: bathRepair6,
    },
    {
      id: uuidv4(),
      url: bathRepair7,
    },
    {
      id: uuidv4(),
      url: bathRepair8,
    },
  ],
  works: [
    {
      id: uuidv4(),
      url: repair1,
      caption: "Some text",
    },
    {
      id: uuidv4(),
      url: repair2,
      caption: "Some text",
    },
    {
      id: uuidv4(),
      url: repair6,
      caption: "Some text",
    },
  ],
};

export type SliderCommentType = {
  id: string;
  url: string;
  caption: string;
  background: string;
};

export const sliderComments: SliderCommentType[] = [
  {
    id: uuidv4(),
    url: commentOwner1,
    caption: "Some text",
    background: "white",
  },
  {
    id: uuidv4(),
    url: commentOwner2,
    caption: "Some text",
    background: "white",
  },
  {
    id: uuidv4(),
    url: commentOwner3,
    caption: "Some text",
    background: "white",
  },
];

export const comments = [
  {
    id: uuidv4(),
    url: commentOwner1,
    caption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    background: "white",
    name: "Jhon",
  },
  {
    id: uuidv4(),
    url: commentOwner2,
    caption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    background: "white",
    name: "Alice",
  },
  {
    id: uuidv4(),
    url: commentOwner3,
    caption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    background: "white",
    name: "Peter",
  },
  {
    id: uuidv4(),
    url: commentOwner3,
    caption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    background: "white",
    name: "Sindy",
  },
  {
    id: uuidv4(),
    url: commentOwner3,
    caption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    background: "white",
    name: "Jhon",
  },
  {
    id: uuidv4(),
    url: commentOwner3,
    caption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    background: "white",
    name: "Jhon",
  },
  {
    id: uuidv4(),
    url: commentOwner3,
    caption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    background: "white",
    name: "Jhon",
  },
  {
    id: uuidv4(),
    url: commentOwner3,
    caption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    background: "white",
    name: "Jhon",
  },
  {
    id: uuidv4(),
    url: commentOwner3,
    caption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    background: "white",
    name: "Jhon",
  },
  {
    id: uuidv4(),
    url: commentOwner3,
    caption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    background: "white",
    name: "Jhon Smith",
  },
  {
    id: uuidv4(),
    url: commentOwner3,
    caption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    background: "white",
    name: "Jhon",
  },
  {
    id: uuidv4(),
    url: commentOwner3,
    caption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    background: "white",
    name: "Jhon",
  },
];
