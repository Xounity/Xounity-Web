"use client";
import React, { useState, useRef, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import checkError from "@/helper/helper";

interface EventProps {
  _id: string;
  href: string;
  imgSrc: string;
  title: string;
  description: string;
  watchLink: string;
}

interface Params {
  [key: string]: string;
}

const EditEventPage = () => {
  const [data, setData] = useState<EventProps[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imgSrc, setImgSrc] = useState("/images/no-profile.jpg");
  const [file, setFile] = useState<File>();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [watchLink, setWatchLink] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { id } = useParams<Params>();
  console.log(data);

  useEffect(() => {
    const fetchData = async (url: string) => {
      try {
        const response = await fetch(url, {
          cache: "no-store",
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
        setImgSrc(result[0]?.imgSrc);
        setTitle(result[0]?.title);
        setDescription(result[0]?.description.split("By ").join(""));
        setWatchLink(result[0]?.watchLink);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData(`/api/events/${id}`);
  }, [id]);

  const handleFileSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const fileData = new FormData();
    if (file) {
      fileData.set("file", file);
    }

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: fileData,
      });

      console.log(res);
      setImgSrc(`/images/${file?.name}`);
    } catch (error: unknown) {
      const message = checkError(error);
      console.log(message);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", id);
    formData.append("title", title);
    formData.append("description", `By ${description}`);
    formData.append("imgSrc", imgSrc);
    formData.append("watchLink", watchLink);
    formData.append("href", watchLink);

    const res = await fetch("/api/events", {
      method: "PUT",
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      setError("");
      console.log(data);
      router.back();
    } else {
      setError(data.message);
    }
  };

  return (
    <>
      <section id="contact" className="bg-transparent body-font relative mt-8">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
              Edit Event
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
              Update the event
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto reveal">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap -m-2">
                <div className="flex items-center justify-center w-full overflow-hidden">
                  <input
                    ref={fileInputRef}
                    onChange={(e) => {
                      setFile(e.target.files?.[0]);
                    }}
                    type="file"
                    className="hidden"
                  />
                  <div className="text-center">
                    <label htmlFor="image">Image</label>
                    <Image
                      className="w-32 h-32 aspect-square cursor-pointer"
                      onClick={() => fileInputRef.current?.click()}
                      src={imgSrc}
                      alt=""
                      width={100}
                      height={100}
                    />
                    <button
                      type="submit"
                      onClick={handleFileSubmit}
                      className="mt-2 py-1 p-3 bg-xounity-orange rounded-full"
                    >
                      Upload
                    </button>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="title" className="leading-7 text-sm">
                      Title
                    </label>
                    <input
                      autoComplete="true"
                      type="text"
                      id="title"
                      name="title"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-xounity-orange focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="watchLink" className="leading-7 text-sm">
                      Watch Link
                    </label>
                    <input
                      autoComplete="true"
                      type="text"
                      id="watchLink"
                      name="watchLink"
                      value={watchLink}
                      onChange={(e) => setWatchLink(e.target.value)}
                      required
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-xounity-orange focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="description" className="leading-7 text-sm">
                      Speaker
                    </label>
                    <input
                      id="description"
                      name="description"
                      type="text"
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-xounity-orange focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="block p-2 border border-red-600 rounded-md text-center mx-auto w-fit empty:hidden">
                  {error}
                </div>
                <div className="p-2 w-full">
                  <button className="send-btn flex mx-auto border-solid border-2 border-xounity-orange py-2 px-8 focus:outline-none rounded text-lg hover:bg-xounity-orange transition duration-300">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditEventPage;
