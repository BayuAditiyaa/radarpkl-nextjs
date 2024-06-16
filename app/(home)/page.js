"use client";
import { Suspense, useEffect, useState } from "react";
import Body from "./Body";
import supabase from "../config/supabaseConfig";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { data } = await supabase.from("data-berita").select();
    setData(data);
  }

  console.log(data);

  return (
    <>
      <Body data={data} />
    </>
  );
}