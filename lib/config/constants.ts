import axios from "axios";

export const omdbApiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY as string;

export const dummyJsonUrl = axios.create({ baseURL: "https://dummyjson.com" });
export const omdbUrl = axios.create({ baseURL: `http://www.omdbapi.com` });
