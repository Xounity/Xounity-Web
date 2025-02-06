import React from "react";
import Sidebar from "@/app/components/Sidebar";
import Link from "next/link";

const users = () => {
  return (
    <>
      <section className="w-full h-screen mt-8 mb-4">
        <div className="mx-auto gap-2 px-4 mt-28 h-screen grid grid-flow-row grid-cols-1 md:grid-cols-[200px,1fr]">
          <Sidebar />
          <div className="border border-solid border-xounity-orange rounded-md p-4">
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
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Password</td>
                    <td>Update User</td>
                    <td>Delete User</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Muhaddis</td>
                    <td>it@gmail.com</td>
                    <td>hellohibyebye</td>
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default users;