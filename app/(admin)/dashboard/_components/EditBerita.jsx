export default function EditBerita() {
  return (
    <form>
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
        >
          <option>Pilih kategori...</option>
          <option value="Pekalongan">Pekalongan</option>
          <option value="Batang">Batang</option>
          <option value="Kajen">Kajen</option>
          <option value="Kendal">Kendal</option>
        </select>
      </div>
      <div className="my-4">
        <label
          htmlFor="isi_berita"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Isi Berita
        </label>
        <textarea
          id="isi_berita"
          rows="4"
          className="block p-2.5 w-full h-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Tulis berita disini..."
        />
      </div>
      <div className="my-4">
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="file_input"
        >
          Upload Gambar
        </label>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
          type="file"
          accept="image/*"
        />
      </div>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Upload Berita
      </button>

      {/* {formError && <p className="error">{formError}</p>} */}
    </form>
  );
}
