interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Product 1",
    price: "100",
    description: "Description 1",
  },
  {
    id: "2",
    name: "Product 2",
    price: "200",
    description: "Description 2",
  },
  {
    id: "3",
    name: "Product 3",
    price: "300",
    description: "Description 3",
  },
  {
    id: "4",
    name: "Product 4",
    price: "400",
    description: "Description 4",
  },
  {
    id: "5",
    name: "Product 5",
    price: "500",
    description: "Description 5",
  },
];

export const getProducts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return products;
};
