"use client";

import { useState } from "react";
import SidebarDashboard from "../_components/SidebarDashboard";
import supabase from "@/app/config/supabaseConfig";
// import QuilEditor from "../_components/QuilEditor";
import dynamic from "next/dynamic";

export default function TulisPage() {
  const [Judul, setJudul] = useState("");
  const [Kategori, setKategori] = useState("");
  const [Isi_Berita, setIsiBerita] = useState("");
  const [ImageURL, setImageUrl] = useState("");
  const [formError, setFormError] = useState(null);
  const [tags, setTags] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log([Judul, Isi_Berita, ImageURL, Kategori]);
    if (!Judul || !Isi_Berita || !ImageURL || !Kategori) {
      setFormError("Please fill in all the fields correctly.");
      return;
    }

    const { data, error } = await supabase
      .from("data-berita")
      .insert([
        {
          Isi_Berita,
          Judul,
          ImageURL,
          Kategori,
          tags,
          deskripsi,
          author,
        },
      ])
      .select();

    if (error) {
      console.log(error);
      setFormError("Please fill in all the fields correctly.");
    }
    if (data) {
      console.log(data);
      alert("Success adding data");
      if (typeof window !== "undefined") {
        window.location.replace("/dashboard/listkonten");
      }
    }
  };

  const handleFilesUpload = async (e) => {
    const image = e.target.files[0];

    const { data, error } = await supabase.storage
      .from("news-image")
      .upload(`/${image.name}`, image, {
        cacheControl: "3600",
        upsert: false,
      });

    const { publicURL } = await supabase.storage
      .from("news-image")
      .getPublicUrl(`/${image.name}`);

    console.log(publicURL);

    if (data || publicURL) {
      setImageUrl(
        `https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/${image.name}`
      );
    }

    if (error) {
      console.log(error);
    }

    //  (formData = { ...formData, image_url: publicURL })
  };

  const DynamicComponentWithNoSSR = dynamic(
    () => import("../_components/QuilEditor"),
    { ssr: false }
  );

  return (
    <>
      <div className="h-screen w-full overflow-auto flex">
        <SidebarDashboard />
        <div className="w-5/6 h-screen p-10">
          <form onSubmit={handleSubmit} className="h-full">
            <div className="my-4">
              <label
                htmlFor="judul"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Judul
              </label>
              <input
                type="text"
                id="judul"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={Judul}
                onChange={(e) => setJudul(e.target.value)}
              />
            </div>
            <div className="my-4">
              <label
                htmlFor="kategori"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Kategori
              </label>
              <select
                id="kategori"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={Kategori}
                onChange={(e) => setKategori(e.target.value)}
              >
                <option>Pilih kategori...</option>
                <option value="Pekalongan">Pekalongan</option>
                <option value="Kecantikan">Kecantikan</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Otomotif">Otomotif</option>
                <option value="Kajen">Kajen</option>
                <option value="Batang">Batang</option>
                <option value="Kendal">Kendal</option>
                <option value="Bisnis">Bisnis</option>
                <option value="Pendidikan">Pendidikan</option>
                <option value="Nasional">Nasional</option>
                <option value="Nasional">Jateng</option>
                <option value="Lain-Lain">Lain-lain</option>
              </select>
            </div>
            <div className="my-4">
              <label
                htmlFor="isi_berita"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Isi Berita
              </label>
              <DynamicComponentWithNoSSR
                value={Isi_Berita}
                setChangeText={(e) => setIsiBerita(e)}
              />
              {/* <textarea
                id="isi_berita"
                rows="4"
                className="block p-2.5 w-full h-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tulis berita disini..."
                value={Isi_Berita}
                onChange={(e) => setIsiBerita(e.target.value)}
              /> */}
            </div>
            <div className="my-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="file_input"
              >
                Upload Gambar Thumbnail
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
                accept="image/*"
                onChange={(e) => handleFilesUpload(e)}
              />
            </div>

            <div className="my-4">
              <label
                htmlFor="tags"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tags
              </label>
              <input
                type="text"
                id="tags"
                placeholder="Pisahkan dengan koma Ex: Hiburan, Olahraga"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </div>

            <div className="my-4">
              <label
                htmlFor="deskripsi"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Deskripsi
              </label>
              <textarea
                type="text"
                id="deskripsi"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
              ></textarea>
            </div>

            <div className="my-4">
              <label
                htmlFor="author"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Author
              </label>
              <input
                type="text"
                id="author"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>

            <button
              type=""
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Upload Berita
            </button>

            {formError && <p className="error">{formError}</p>}
          </form>
        </div>
      </div>
    </>
  );
}
