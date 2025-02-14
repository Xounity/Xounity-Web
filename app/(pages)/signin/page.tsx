"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res:any = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res.ok) {
      setError("");
      router.push('/');
    } else {
      setError(res.error);
    }
  };

  return (
    <>
      <section id="contact" className="bg-transparent body-font relative mt-8">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
              Sign In
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
              Login to your account
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto reveal">
            <form method="post" onSubmit={handleSubmit}>
              <div className="flex flex-wrap -m-2">
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
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-xounity-orange focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="password" className="leading-7 text-sm">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      required
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
                    SignIn
                  </button>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                  <p>
                    Don't have an Account?{" "}
                    <Link
                      className="underline text-xounity-orange"
                      href="/signup"
                    >
                      Signup
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
