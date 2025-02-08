"use client";
import Sidebar from "@/app/components/Sidebar";
import Loading from "@/app/loading";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const url = process.env.NEXT_PUBLIC_ROOT_URL + "/api/events";

interface EventProps {
  href: string;
  imgSrc: string;
  title: string;
  description: string;
}

const events = () => {
  const [data, setData] = useState<EventProps[]>([]);
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
                <div>Events</div>
                <div>
                  <Link
                    href="/dashboard/users/add-event"
                    className="bg-xounity-orange p-2 rounded-md"
                  >
                    Add Event
                  </Link>
                </div>
              </div>
              <div className="mt-8">
                <table className="w-full text-center">
                  <thead>
                    <tr className="font-bold">
                      <td>Id</td>
                      <td>Title</td>
                      <td>Image</td>
                      <td>Link</td>
                      <td>Description</td>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index}</td>
                          <td>{item.title}</td>
                          <td><Image src={item.imgSrc} alt="" width={100} height={100} /></td>
                          <td>{item.href}</td>
                          <td>{item.description}</td>
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
  )
}

export default events