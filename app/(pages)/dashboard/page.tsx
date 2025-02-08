import Sidebar from "@/app/components/Sidebar";
import React from "react";

const DashboardPage = () => {
  return (
    <>
      <section className="w-full h-screen mt-8 mb-4">
        <div className="mx-auto gap-2 px-4 mt-28 h-screen grid grid-flow-row grid-cols-1 md:grid-cols-[200px,1fr]">
          <Sidebar />
          <div className="overflow-y-auto p-4">
            <div className="flex justify-between">
              <div>Analytics</div>
            </div>
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
                    <td>106</td>
                    <td>2</td>
                    <td>3</td>
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

export default DashboardPage;
