import axios from "axios";
import { IItem } from "./types";

export const instance = axios.create({
  baseURL: "http://localhost:3006",
});

export async function getItemsList() {
  const { data } = await instance.get<IItem[]>("/items");

  return data;
}

export async function getItem(id: string) {
  const { data } = await instance.get<IItem>(`/items/${id}`);

  return data;
}
