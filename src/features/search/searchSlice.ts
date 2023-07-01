import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SearchState } from "./types";

const initialState: SearchState = {
  categories: [
    {
      id: 1,
      nom: "Cup",
      description: "Test description ftsn",
    },
    {
      id: 2,
      nom: "T-Shirt",
      description: "Test description ftsn",
    },
  ],
  influencys: [
    {
      id: 1,
      nom: "Agrad",
      description: "Test description ftsn",
    },
    {
      id: 2,
      nom: "Skaiz",
      description: "Test description ftsn",
    },
  ],
  products: [
    {
      id: 1,
      nom: "Mug noire",
      description:
        "Le mug noir, abordant fièrement la marque d'Agrad, ajoute une touche de style à votre moment de dégustation de boissons chaudes.",
      image: require("_images/mug.jpg"),
      prix: 20000.0,
      categorie: 1,
      user: 2,
      number: 12,
      is_finished: false,
    },
    {
      id: 2,
      nom: "Mug cristal",
      description:
        "Le mug cristal, orné du logo de Mahaleo, incarne l'élégance et le charme. Savourez vos boissons chaudes préférées avec ce mug.",
      image: require("_images/cup.jpg"),
      prix: 15000.0,
      categorie: 2,
      user: 1,
      number: 12,
      is_finished: false,
    },
    {
      id: 3,
      nom: "Casque",
      description:
        "Le casque audio est un compagnon de musique idéal pour profiter de vos morceaux préférés avec une qualité sonore exceptionnelle.",
      image: require("_images/casque_jaune.jpg"),
      prix: 80000.0,
      categorie: 1,
      user: 1,
      number: 12,
      is_finished: false,
    },
    {
      id: 4,
      nom: "Nike rose",
      description:
        "Les chaussures Nike roses avec la marque d' Antso Bommartin ajoutent une touche de style et de féminité à votre tenue sportive.",
      image: require("_images/nike_rose.jpg"),
      prix: 40000.0,
      categorie: 2,
      user: 2,
      number: 12,
      is_finished: false,
    },
    {
      id: 5,
      nom: "Nike standard",
      description:
        "Les chaussures Nike standard sont un choix polyvalent et intemporel, en plus avec la marque de Bob Tobias le dur vous ne regretterez pas.",
      image: require("_images/nike.jpg"),
      prix: 40000.0,
      categorie: 2,
      user: 2,
      number: 12,
      is_finished: false,
    },
    {
      id: 6,
      nom: "Pull Noir",
      description:
        "Notre Pull Noir, créé avec en collaboration de Mr Sayda, est à la fois tendance et original.",
      image: require("_images/pull_black.jpg"),
      prix: 50000.0,
      categorie: 2,
      user: 2,
      number: 12,
      is_finished: false,
    },
  ],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setGoodies: (state, action: PayloadAction<object[]>) => {
      state.categories = [...state.categories, action.payload];
    },
    setInfluencys: (state, action: PayloadAction<object[]>) => {
      state.influencys = [...state.influencys, action.payload];
    },
    setProducts: (state, action: PayloadAction<object[]>) => {
      state.products = [...state.products, action.payload];
    },
  },
});

export const { setGoodies } = searchSlice.actions;

export default searchSlice.reducer;
