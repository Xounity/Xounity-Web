"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import Link from "next/link";
import Loading from "@/app/loading";
import { HiOutlineTrash, HiPencilAlt } from "react-icons/hi";
import { useRouter } from "next/navigation";
const url = process.env.NEXT_PUBLIC_ROOT_URL + "/api/users";

interface UserProps {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
}

const users = () => {
  const [data, setData] = useState<UserProps[]>([]);
  const router = useRouter();

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
      const res = await fetch(`/api/users?id=${id}`, {
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
                <div>Users</div>
                <div>
                  <Link
                    href="/dashboard/users/add-user"
                    className="bg-xounity-orange p-2 rounded-md"
                  >
                    Add User
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
                      <td>Password</td>
                      <td>Actions</td>
                    </tr>
                  </thead>
                  <tbody>
                    {data
                      .filter((item) => item.role === "user")
                      .map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.role}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            <td>
                              <button className="text-blue-600 mr-2">
                                <Link href={`/dashboard/users/edit-user/${item._id}`}><HiPencilAlt size={20} /></Link>
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

export default users;
