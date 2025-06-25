import React from "react";
import { jsonPlaceholderUrl as url } from "../constants";
import axios from "axios";
import { IJPPost } from "../types";

export default async function Jsonplaceholder() {
  const data = await axios.get(`${url}/posts`);

  return (
    <div>
      <h2 className="h2">Jsonplaceholder</h2>
      <div>
        <h3 className="h3">Posts List</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-2">
          {data.data.map((item: IJPPost, i: number) => (
            <div key={i} className="border rounded p-2">
              <h4 className="text-sm">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
