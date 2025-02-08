"use client";
import Sidebar from "@/app/components/Sidebar";
import Loading from "@/app/loading";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const url = process.env.NEXT_PUBLIC_ROOT_URL + "/api/users";

interface AdminProps {
  name: string;
  email: string;
  password: string;
  role: string;
}

const admins = () => {
  const [data, setData] = useState<AdminProps[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
        //console.log(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <section className="w-full h-screen mt-8 mb-4">
        <div className="mx-auto gap-2 px-4 mt-28 h-screen grid grid-flow-row grid-cols-1 md:grid-cols-[200px,1fr]">
          <Sidebar />
          {data.length > 0 ? (
            <div className="overflow-auto p-4">
              <div className="flex justify-between">
                <div>Admins</div>
                <div>
                  <Link
                    href="/dashboard/users/add-admin"
                    className="bg-xounity-orange p-2 rounded-md"
                  >
                    Add Admin
                  </Link>
                </div>
              </div>
              <div className="mt-8">
                <table className="w-full text-center">
                  <thead>
                    <tr className="font-bold">
                      <td>Id</td>
                      <td>Name</td>
                      <td>Role</td>
                      <td>Email</td>
                      <td>Password</td>
                    </tr>
                  </thead>
                  <tbody>
                    {data.filter((item) => item.role === "admin").map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index}</td>
                          <td>{item.name}</td>
                          <td>{item.role}</td>
                          <td>{item.email}</td>
                          <td>{item.password}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </section>
    </>
  );
};

export default admins;
