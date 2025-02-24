"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const addMemberPage = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imageSrc, setImageSrc] = useState("/images/no-profile.jpg");
  const [file, setFile] = useState<File>();
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [instaLink, setInstaLink] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleFileSubmit = async (e: any) => {
    e.preventDefault();
    const fileData = new FormData();
    if(file){
      fileData.set("file", file);
    }

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: fileData
      });

      console.log(res);
      setImageSrc(`/images/${file?.name}`);

    } catch (error: any) {
      console.log(error.message);
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("title", title);
    formData.append("description", `By ${description}`);
    formData.append("image", imageSrc);
    formData.append("linkedinSrc", linkedinLink);
    formData.append("instaSrc", instaLink);
    formData.append("githubSrc", githubLink);

    const res = await fetch("/api/team", {
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
              Add Member
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
              Create new member
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto reveal">
            <form
              method="post"
              action={`${process.env.NEXT_PUBLIC_ROOT_URL}/api/team`}
              onSubmit={handleSubmit}
            >
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
                      className="rounded-full w-28 h-28 aspect-square cursor-pointer"
                      onClick={() => fileInputRef.current?.click()}
                      src={imageSrc}
                      alt=""
                      width={100}
                      height={100}
                    />
                    <button type="submit" onClick={handleFileSubmit} className="mt-2 py-1 p-3 bg-xounity-orange rounded-full">Upload</button>
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm">
                      Name
                    </label>
                    <input
                      autoComplete="true"
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-xounity-orange focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
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
                <div className="p-2 w-1/3">
                  <div className="relative">
                    <label htmlFor="linkedinLink" className="leading-7 text-sm">
                      LinkedIn Link
                    </label>
                    <input
                      autoComplete="true"
                      type="text"
                      id="linkedinLink"
                      name="linkedinLink"
                      value={linkedinLink}
                      onChange={(e) => setLinkedinLink(e.target.value)}
                      required
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-xounity-orange focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/3">
                  <div className="relative">
                    <label htmlFor="githubLink" className="leading-7 text-sm">
                      Github Link
                    </label>
                    <input
                      autoComplete="true"
                      type="text"
                      id="githubLink"
                      name="githubLink"
                      value={githubLink}
                      onChange={(e) => setGithubLink(e.target.value)}
                      required
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-xounity-orange focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/3">
                  <div className="relative">
                    <label htmlFor="instaLink" className="leading-7 text-sm">
                      Insta Link
                    </label>
                    <input
                      autoComplete="true"
                      type="text"
                      id="instaLink"
                      name="instaLink"
                      value={instaLink}
                      onChange={(e) => setInstaLink(e.target.value)}
                      required
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-xounity-orange focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="description" className="leading-7 text-sm">
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
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

export default addMemberPage;
