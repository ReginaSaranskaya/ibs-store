import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3006",
});

export async function getItemsList() {
  const { data } = await instance.get("/items");

  return data;
}

export async function getItem(id = 1) {
  const { data } = await instance.get(`/items/${id}`);

  return data;
}
