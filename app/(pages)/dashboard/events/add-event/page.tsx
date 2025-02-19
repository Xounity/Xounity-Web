"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const addEventPage = () => {
  const [watchLink, setwatchLink] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("watchLink", watchLink);
    formData.append("href", watchLink);
    formData.append("description", `By ${description}`);
    formData.append("imgSrc", "/images/furqan.webp");

    const res = await fetch("/api/events", {
      method: "POST",
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
              Add Event
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
              Create new event
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto reveal">
            <form
              method="post"
              action={`${process.env.NEXT_PUBLIC_ROOT_URL}/api/events`}
              onSubmit={handleSubmit}
            >
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
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
                      Link
                    </label>
                    <input
                      autoComplete="true"
                      type="text"
                      id="watchLink"
                      name="watchLink"
                      value={watchLink}
                      onChange={(e) => setwatchLink(e.target.value)}
                      required
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-xounity-orange focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
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
                    Create
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

export default addEventPage;
