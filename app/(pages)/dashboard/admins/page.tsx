"use client";
import Sidebar from "@/app/components/Sidebar";
import Loading from "@/app/loading";
import checkError from "@/helper/helper";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { HiOutlineTrash, HiPencilAlt } from "react-icons/hi";
const url = process.env.NEXT_PUBLIC_ROOT_URL + "/api/users";

interface AdminProps {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
}

const Admins = () => {
  const [data, setData] = useState<AdminProps[]>([]);
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

    if (confirmed) {
      try {
        const res = await fetch(`/api/users?id=${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          fetchData(url);
          router.refresh();
        }
      } catch (error: unknown) {
        const message = checkError(error);
        console.log(message);
      }
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
                      <td>Name</td>
                      <td>Role</td>
                      <td>Email</td>
                      <td>Actions</td>
                    </tr>
                  </thead>
                  <tbody>
                    {data
                      .filter((item) => item.role === "admin")
                      .map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.role}</td>
                            <td>{item.email}</td>
                            <td>
                              <button className="text-blue-600 mr-2">
                                <Link
                                  href={`/dashboard/admins/edit-admin/${item._id}`}
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

export default Admins;
