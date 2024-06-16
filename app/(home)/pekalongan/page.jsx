"use client";

import { useEffect, useState } from "react";
import Body from "../Body";
import supabase from "@/app/config/supabaseConfig";

export default function PagePekalongan() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { data } = await supabase
      .from("data-berita")
      .select()
      .eq("Kategori", "Pekalongan");
    setData(data);
  }
  return (
    <>
      <Body title="Pekalongan" data={data} />
    </>
  );
}