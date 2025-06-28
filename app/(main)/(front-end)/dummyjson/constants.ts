import axios from "axios";

export const dummyJsonUrl = axios.create({ baseURL: "https://dummyjson.com" });
