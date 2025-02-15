"use client";
import Sidebar from "@/app/components/Sidebar";
import React, { useEffect, useState } from "react";
import Loading from "@/app/loading";
const url = process.env.NEXT_PUBLIC_ROOT_URL + "/api/users";

interface UserProps {
  name: string;
  email: string;
  password: string;
  role: string;
}

interface EventProps {
  href: string;
  imgSrc: string;
  title: string;
  description: string;
}

const DashboardPage = () => {
  const [Userdata, setUserData] = useState<UserProps[]>([]);
  const [Eventdata, setEventData] = useState<EventProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setUserData(result);
        //console.log(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/events");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setEventData(result);
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
          <div className="overflow-y-auto p-4">
            <div className="flex justify-between">
              <div>Analytics</div>
            </div>
            {Userdata.length > 0 ? (
              <div className="mt-8">
                <table className="w-full text-center">
                  <thead>
                    <tr className="font-bold">
                      <td>Users</td>
                      <td>Admins</td>
                      <td>Events</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{Userdata.filter((item) => item.role === "admin" ).length}</td>
                      <td>{Userdata.filter((item) => item.role === "user" ).length}</td>
                      <td>{Eventdata.length}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
