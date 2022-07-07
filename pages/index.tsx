import type { NextPage } from "next";
import { useEffect } from "react";
import { erc725GetData } from "../services/erc725";

const Home: NextPage = () => {
  useEffect(() => {
    const fetchProfile = async () => {
      const data = await erc725GetData(
        "0xEFc1305Fd867AFe2c5fC3A6846335e8ad4C702b5"
      );

      console.log(data);
    };

    fetchProfile();
  });

  return <div>Check if it works</div>;
};

export default Home;
