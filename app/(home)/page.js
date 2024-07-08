// "use client";
// import { Suspense, useEffect, useState } from "react";
import Body from "./Body";
import supabase from "../config/supabaseConfig";

// const ITEMS_PER_PAGE = 24; // Number of items per page

// export const revalidate = 60; // seconds

export default async function Home() {
  const { data } = await supabase
    .from("data-berita")
    .select()
    .range(0, 24)
    .order("id", { ascending: false });

  // const [dataBerita, setData] = useState(null);
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
  //     .order("id", { ascending: false });
  //   setData(data);
  // }

  return (
    <>
      <Body
        data={data}
        // setPage={setPage}
        // page={page}
      />
    </>
  );
}

// export async function getStaticProps() {
//   const { data } = await supabase.from("data-berita").select("*");
//   console.log(data);
//   return {
//     props: {
//       data: data,
//     },
//   };
// }

// async function getData() {
//   const { data } = await supabase.from("data-berita").select("*");
//   console.log(data);
//   if (!data.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return JSON.stringify(data);
// }
