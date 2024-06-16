import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href={"/"}
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="Logo RadarPekalonganBiru.png"
              className="h-8"
              alt="Radar Pekalongan Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              RADAR PEKALONGAN
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link
                href={"/Tentang-kami"}
                className="hover:underline me-4 md:me-6"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                href={"Privacy-policy"}
                className="hover:underline me-4 md:me-6"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href={"/Redaksi"} className="hover:underline me-4 md:me-6">
                Redaksi
              </Link>
            </li>
            <li>
              <Link href={"/kontak"} className="hover:underline">
                Kontak
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link href={"/"} className="hover:underline">
            RADAR PEKALONGAN™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}