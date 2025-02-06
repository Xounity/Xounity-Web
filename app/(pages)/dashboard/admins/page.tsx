"use client";
import Sidebar from "@/app/components/Sidebar";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const url = process.env.NEXT_PUBLIC_ROOT_URL + "/api/team";

interface AdminProps {
  name: string;
  image: string;
  description: string;
  title: string;
  linkedinSrc: string;
  githubSrc: string;
  instaSrc: string;
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
          <div className="border border-solid border-xounity-orange rounded-md p-4 overflow-x-scroll">
            <div className="flex justify-between">
              <div>Admins</div>
              <div>
                <Link
                  href="/dashboard/admins/add-admin"
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
                    <td>Title</td>
                    <td>Description</td>
                    <td>LinkedIn</td>
                    <td>Github</td>
                    <td>Insta</td>
                    <td>Update User</td>
                    <td>Delete User</td>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => {
                    return (
                    
                        <tr key={index}>
                          <td>{index}</td>
                          <td>{item.name}</td>
                          <td>{item.title}</td>
                          <td>{item.description}</td>
                          <td>{item.linkedinSrc}</td>
                          <td>{item.githubSrc}</td>
                          <td>{item.instaSrc}</td>
                          <td>
                            <button className="bg-blue-500 py-1 p-4 rounded-full">
                              Edit
                            </button>
                          </td>
                          <td>
                            <button className="bg-red-600 py-1 p-4 rounded-full">
                              Delete
                            </button>
                          </td>
                        </tr>
                  
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default admins;
