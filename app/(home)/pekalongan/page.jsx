// "use client";

// import { useEffect, useState } from "react";
import supabase from "@/app/config/supabaseConfig";
import BodyCategory from "../_components/BodyCategory";

// const pageSize = 20; // Number of items per page

export default async function PagePekalongan() {
  const { data } = await supabase
    .from("data-berita")
    .select()
    .range(0, 24)
    .eq("Kategori", "Pekalongan")
    .order("id", { ascending: false });
  // const [data, setData] = useState([]);
  // // const [loading, setLoading] = useState(true);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);

  // useEffect(() => {
  //   getData();
  // }, [currentPage]);

  // async function getData() {
  //   const { data, count } = await supabase
  //     .from("data-berita")
  //     .select("*", { count: "exact" })
  //     .range((currentPage - 1) * pageSize, currentPage * pageSize - 1)
  //     .eq("Kategori", "Pekalongan")
  //     .order("id", { ascending: false });
  //   setData(data || []);
  //   setTotalPages(Math.ceil(count / pageSize));
  // }

  // const handlePageChange = (page) => {
  //   if (page < 1 || page > totalPages) return;
  //   console.log("test");
  //   setCurrentPage(page);
  // };

  return (
    <>
      <BodyCategory
        title="Pekalongan"
        data={data}
        // total={totalPages}
        // current={currentPage}
        // onPageChange={handlePageChange}
      />
    </>
  );
}
