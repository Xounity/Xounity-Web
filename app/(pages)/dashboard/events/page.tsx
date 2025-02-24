"use client";
import Sidebar from "@/app/components/Sidebar";
import Loading from "@/app/loading";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { HiOutlineTrash, HiPencilAlt } from "react-icons/hi";
const url = process.env.NEXT_PUBLIC_ROOT_URL + "/api/events";

interface EventProps {
  _id: string;
  href: string;
  imgSrc: string;
  title: string;
  description: string;
}

const events = () => {
  const [data, setData] = useState<EventProps[]>([]);
  const router = useRouter();

  const fetchData = async (url: string) => {
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

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleDelete = async (id: string) => {
    const confirmed = confirm("Are you sure?")

    try {
      if(confirmed){
      const res = await fetch(`/api/events?id=${id}`, {
        method: "DELETE"
      });
  
      if(res.ok){
        fetchData(url);
        router.refresh();
      }
    }
    } catch (error: any) {
      console.log(error.message);
    }
  }
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
                    href="/dashboard/events/add-event"
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
                      <td>Title</td>
                      <td>Image</td>
                      <td>Link</td>
                      <td>Description</td>
                      <td>Actions</td>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.title}</td>
                          <td>
                            <Image
                              src={item.imgSrc}
                              alt=""
                              width={100}
                              height={100}
                            />
                          </td>
                          <td>{item.href}</td>
                          <td>{item.description}</td>
                          <td>
                            <button className="text-blue-600 mr-2">
                              <HiPencilAlt size={20} />
                            </button>
                            <button onClick={ () => handleDelete(item._id) } className="text-red-600">
                              <HiOutlineTrash size={20} />
                            </button>
                          </td>
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

export default events;
