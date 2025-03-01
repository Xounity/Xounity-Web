"use client";
import Sidebar from "@/app/components/Sidebar";
import Loading from "@/app/loading";
import checkError from "@/helper/helper";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineTrash, HiPencilAlt } from "react-icons/hi";
const url = process.env.NEXT_PUBLIC_ROOT_URL + "/api/team";

interface TeamProps {
  _id: string;
  name: string;
  image: string;
  description: string;
  title: string;
  linkedinSrc: string;
  githubSrc: string;
  instaSrc: string;
}

const Team = () => {
  const [data, setData] = useState<TeamProps[]>([]);
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
    const confirmed = confirm("Are you sure?");

    try {
      if (confirmed) {
        const res = await fetch(`/api/team?id=${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          fetchData(url);
          router.refresh();
        }
      }
    } catch (error: unknown) {
      const message = checkError(error);
      console.log(message);
    }
  };
  return (
    <>
      <section className="w-full h-screen mt-8 mb-4">
        <div className="mx-auto gap-2 px-4 mt-28 h-screen grid grid-flow-row grid-cols-1 md:grid-cols-[200px,1fr]">
          <Sidebar />
          {data.length > 0 ? (
            <div className="overflow-auto p-4">
              <div className="flex justify-between">
                <div>Team</div>
                <div>
                  <Link
                    href="/dashboard/team/add-member"
                    className="bg-xounity-orange p-2 rounded-md"
                  >
                    Add Member
                  </Link>
                </div>
              </div>
              <div className="mt-8">
                <table className="w-full text-center">
                  <thead>
                    <tr className="font-bold">
                      <td>Image</td>
                      <td>Name</td>
                      <td>Title</td>
                      <td>Description</td>
                      <td>Socials</td>
                      <td>Actions</td>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <Image
                              className="rounded-full aspect-square"
                              src={item.image}
                              alt=""
                              width={50}
                              height={50}
                            />
                          </td>
                          <td>{item.name}</td>
                          <td>{item.title}</td>
                          <td>{item.description}</td>
                          <td>
                            <div className="flex gap-2 items-center justify-center">
                              <button>
                                <Link
                                  className="text-blue-400 text-center hover:text-blue-300"
                                  href={item.linkedinSrc}
                                >
                                  <FaLinkedin size={20} />
                                </Link>
                              </button>
                              <button>
                                <Link
                                  className="text-blue-500 text-center hover:text-blue-400"
                                  href={item.githubSrc}
                                >
                                  <FaGithub size={20} />
                                </Link>
                              </button>
                              <button>
                                <Link
                                  className="text-red-500 text-center hover:text-red-400"
                                  href={item.instaSrc}
                                >
                                  <FaInstagram size={20} />
                                </Link>
                              </button>
                            </div>
                          </td>
                          <td>
                            <button className="text-blue-600 mr-2">
                              <Link
                                href={`/dashboard/team/edit-member/${item._id}`}
                              >
                                <HiPencilAlt size={20} />
                              </Link>
                            </button>
                            <button
                              onClick={() => handleDelete(item._id)}
                              className="text-red-600"
                            >
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

export default Team;
