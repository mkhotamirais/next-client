import React from "react";
import { getData } from "./action";
import Image from "next/image";

export default async function Youtube() {
  const data = await getData();
  const item = data?.item?.[0];
  const profileImg = item?.snippet?.thumbnails?.default?.url;

  return (
    <div>
      <h2 className="h2">Youtube</h2>
      <Image src={profileImg} alt="profile" width={100} height={100} />
    </div>
  );
}
