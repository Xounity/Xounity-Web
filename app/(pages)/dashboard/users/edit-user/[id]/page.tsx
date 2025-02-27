"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

interface UserProps {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
}

interface Params {
  [key: string]: string;
}

const EditUserPage = () => {
  const [data, setData] = useState<UserProps[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { id } = useParams<Params>();
  console.log(data);

    useEffect(() => {
      const fetchData = async (url: string) => {
        try {
          const response = await fetch(url, {
            cache: "no-store"
          });
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
          const result = await response.json();
          setData(result);
          setName(result[0]?.name);
          setEmail(result[0]?.email);
          setRole(result[0]?.role);
          
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };

      fetchData(`/api/users/${id}`);
    }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append ("role", role);
    formData.append("password", password);
    formData.append("id", id);

    const res = await fetch("/api/users", {
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
              Edit User
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
              Update the user
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto reveal">
            <form
              onSubmit={handleSubmit}
            >
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm">
                      Full Name
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
                    <label htmlFor="email" className="leading-7 text-sm">
                      Email
                    </label>
                    <input
                      autoComplete="true"
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-xounity-orange focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="role" className="leading-7 text-sm">
                      Role
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      required
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-xounity-orange focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="password" className="leading-7 text-sm">
                      Change Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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

export default EditUserPage;
