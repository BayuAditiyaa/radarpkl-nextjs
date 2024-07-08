// "use client";

// import { useEffect, useState } from "react";
import Body from "../Body";
import supabase from "@/app/config/supabaseConfig";

// const ITEMS_PER_PAGE = 6; // Number of items per page

export default async function PagePekalongan() {
  const { data } = await supabase
    .from("data-berita")
    .select()
    .range(0, 24)
    .eq("Kategori", "Bisnis")
    .order("id", { ascending: false });
  // const [data, setData] = useState(null);
  // const [page, setPage] = useState(1);

  // useEffect(() => {
  //   getData();
  // }, [page]);

  // async function getData() {
  //   const from = (page - 1) * ITEMS_PER_PAGE;
  //   const to = page * ITEMS_PER_PAGE - 1;
  //   const { data } = await supabase
  //     .from("data-berita")
  //     .select()
  //     .range(from, to)
  //     .eq("Kategori", "Bisnis")
  //     .order("id", { ascending: false });
  //   setData(data);
  // }

  // const handleNext = () => {
  //   setPage(page + 1);
  // };

  // const handlePrevious = () => {
  //   if (page > 1) {
  //     setPage(page - 1);
  //   }
  // };
  return (
    <>
      <Body
        title="Bisnis"
        data={data}
        // setPage={setPage}
        // page={page}
        // getData={getData}
        // handleNext={handleNext}
        // handlePrevious={handlePrevious}
      />
    </>
  );
}
