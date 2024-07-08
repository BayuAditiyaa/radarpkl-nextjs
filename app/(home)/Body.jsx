"use client";

import Image from "next/image";
import Link from "next/link";
import ContentLoader from "./_components/ContentLoader";
// import Pagination from "./components/Pagination";
import Carousel from "./_components/Carousel";
import BannerIklan from "./_components/BannerIklan";
import CatatanDisway from "./_components/CatatanDisway";
import Terpopuler from "./_components/Terpopuler";
import VideoSection from "./_components/VideoSection";
import NetworkSection from "./_components/NetworkSection";
import Terkini from "./_components/Terkini";
import Carousel2 from "./_components/Carousel2";
import Carousel3 from "./_components/Carousel3";
import Carousel4 from "./_components/Carousel4";

export default function Body({
  title,
  data,
  // setPage,
  // page,
  // getData,
  // handleNext,
  // handlePrevious,
}) {
  return (
    <>
      {data ? (
        <div>
          <div className="container md:mx-auto">
            {/* banner 1 */}
            <div className="h-60 m-5 bg-gray-100 flex items-center justify-center">
              <div className="w-full bg-white border-b"></div>
            </div>
            {/* banner 2 */}
            <div className="h-60 m-5 bg-gray-100 flex items-center justify-center">
              <div className="w-full bg-white border-b"></div>
            </div>
            <div className="flex justify-center p-5 sm:flex-col">
              <div>
                {/* <Carousel items={data} /> */}
                {/* <Carousel3 /> */}
                <Carousel4 data={data?.slice(0, 4)} />
                <div className="h-full ">
                  <h1 className="text-lg font-bold">{`${
                    title ? title : "Berita Terkini"
                  }`}</h1>
                  {data?.slice(0, 5)?.map((data) => (
                    <div className="flex p-4 sm:py-4" key={data.id}>
                      <Image
                        quality={30}
                        width={150}
                        height={150}
                        src={data.ImageURL ? data.ImageURL : ""}
                        alt=""
                        className="min-w-40 sm:min-w-28 pr-4 "
                      />
                      <div className="flex-col min-w-40 sm:min-w-28 h-fit">
                        <Link
                          href={`/post/${data.id}`}
                          className="font-semibold "
                        >
                          {data.Judul}
                        </Link>
                        <span className="flex items-center">
                          <p className="sm:text-xs text-white uppercase font-bold bg-red-500 w-fit p-2 rounded-lg">
                            {data.Kategori}
                          </p>
                          <p className="font-bold text-sm">
                            {data.created_at.substring(0, 10)}
                          </p>
                        </span>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-center w-full md:p-4">
                    <BannerIklan src={"/BANNER_DPRD_KOTA.webp"} />
                  </div>
                  <div>
                    <div className="h-full ">
                      {data?.slice(6, 10)?.map((data) => (
                        <div className="flex p-4 sm:py-4" key={data.id}>
                          <Image
                            quality={30}
                            width={150}
                            height={150}
                            src={data.ImageURL ? data.ImageURL : ""}
                            alt=""
                            className="min-w-40 sm:min-w-28 pr-4 "
                          />
                          <div className="flex-col min-w-40 sm:min-w-28 h-fit">
                            <Link
                              href={`/post/${data.id}`}
                              className="font-semibold "
                            >
                              {data.Judul}
                            </Link>
                            <span className="flex items-center">
                              <p className="sm:text-xs text-white uppercase font-bold bg-red-500 w-fit p-2 rounded-lg">
                                {data.Kategori}
                              </p>
                              <p className="font-bold text-sm">
                                {data.created_at.substring(0, 10)}
                              </p>
                            </span>
                          </div>
                        </div>
                      ))}
                      <div className="flex justify-center w-full md:p-4">
                        <BannerIklan src={"/BANNER_BATANG.webp"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-full md:w-1/3">
                <div>
                  <div></div>
                </div>
                <CatatanDisway />
                <Terpopuler data={data} />
                <Terkini data={data} />
              </div>
            </div>
            <VideoSection title={"VIDEO"} />
            <div className="flex justify-center p-5 sm:flex-col">
              <div>
                <div className="h-full ">
                  {data?.slice(11, 15)?.map((data) => (
                    <div className="flex p-4 sm:py-4" key={data.id}>
                      <Image
                        quality={30}
                        width={150}
                        height={150}
                        src={data.ImageURL ? data.ImageURL : ""}
                        alt=""
                        className="min-w-40 sm:min-w-28 pr-4 "
                      />
                      <div className="flex-col min-w-40 sm:min-w-28 h-fit">
                        <Link
                          href={`/post/${data.id}`}
                          className="font-semibold "
                        >
                          {data.Judul}
                        </Link>
                        <span className="flex items-center">
                          <p className="sm:text-xs text-white uppercase font-bold bg-red-500 w-fit p-2 rounded-lg">
                            {data.Kategori}
                          </p>
                          <p className="font-bold text-sm">
                            {data.created_at.substring(0, 10)}
                          </p>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full h-full md:w-1/3">
                <div>
                  <h2 className="text-lg font-bold">Pilihan</h2>
                  {data?.slice(0, 4)?.map((data, index) => (
                    <ul
                      className=" text-black p-4 flex cursor-pointer bg-white"
                      key={data.id}
                    >
                      {index + 1}
                      <Link href={`/post/${data.id}`}>
                        <li className="mx-2">{data.Judul}</li>
                      </Link>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
            {/* VIDEO */}
            <NetworkSection title={"NETWORK"} />
            <div className="container flex justify-center p-5 sm:flex-col">
              <div>
                <div className="h-full ">
                  {data?.slice(16, 20)?.map((data) => (
                    <div className="flex p-4 sm:py-4" key={data.id}>
                      <Image
                        quality={30}
                        width={150}
                        height={150}
                        src={data.ImageURL ? data.ImageURL : ""}
                        alt=""
                        className="min-w-40 sm:min-w-28 pr-4 "
                      />
                      <div className="flex-col min-w-40 sm:min-w-28 h-fit">
                        <Link
                          href={`/post/${data.id}`}
                          className="font-semibold "
                        >
                          {data.Judul}
                        </Link>
                        <span className="flex items-center">
                          <p className="sm:text-xs text-white uppercase font-bold bg-red-500 w-fit p-2 rounded-lg">
                            {data.Kategori}
                          </p>
                          <p className="font-bold text-sm">
                            {data.created_at.substring(0, 10)}
                          </p>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full h-full md:w-1/3"></div>
            </div>
            <div className="container md:mx-auto">
              <div className=" flex justify-between">
                <h2 className="font-semibold">Foto</h2>
                <h2 className="font-semibold">Lihat Semua</h2>
              </div>
              <div className="container mx-auto p-6 bg-black"></div>
            </div>
            <div className="container flex justify-center p-5 sm:flex-col">
              <div>
                <div className="h-full ">
                  {data?.slice(21, 24)?.map((data) => (
                    <div className="flex p-4 sm:py-4" key={data.id}>
                      <Image
                        quality={30}
                        width={150}
                        height={150}
                        src={data.ImageURL ? data.ImageURL : ""}
                        alt=""
                        className="min-w-40 sm:min-w-28 pr-4 "
                      />
                      <div className="flex-col min-w-40 sm:min-w-28 h-fit">
                        <Link
                          href={`/post/${data.id}`}
                          className="font-semibold "
                        >
                          {data.Judul}
                        </Link>
                        <span className="flex items-center">
                          <p className="sm:text-xs text-white uppercase font-bold bg-red-500 w-fit p-2 rounded-lg">
                            {data.Kategori}
                          </p>
                          <p className="font-bold text-sm">
                            {data.created_at.substring(0, 10)}
                          </p>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full h-full md:w-1/3"></div>
            </div>

            {/* <Pagination
              setPage={setPage}
              page={page}
              getData={getData}
              handleNext={handleNext}
              handlePrevious={handlePrevious}

              // lenght={currentPost?.lenght}
            /> */}
          </div>
        </div>
      ) : (
        <ContentLoader />
      )}
    </>
  );
}
