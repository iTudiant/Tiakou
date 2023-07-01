/*Slice*/

export type PublishState = {
  carts: Cart[];
};

export type Cart = {
  id: number;
  quantity: number;
  prixUnity: number;
};
