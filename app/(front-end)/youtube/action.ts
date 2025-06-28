import { AxiosError } from "axios";
import axios from "axios";

const url = "https://www.googleapis.com/youtube/v3/channels";
const apiKey = process.env.API_KEY_NEXT as string;
const channelId = "UCkXmLjEr95LVtGuIm3l2dPg";

export const getData = async () => {
  try {
    const res = await axios.get(url, {
      params: { key: apiKey, id: channelId, part: "snippet" },
    });
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error);
    }
  }
};
