"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Layout from '@/components/AdminDashboard/Layout';

const Tasks = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Add password authentication

    setLoading(true);
    try {
      //Add login authentication

      console.log("Registration successful");
      toast.success("Registration successful");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false); // Ensure that loading is set to false even in case of an error
    }
  };

  return (
    <Layout>
      <h1 className='font-bold text-2xl mb-2'>Tasks</h1>
      <div className="flex justify-center">
      <div className="bg-white xs:p-5 xr:p-8 rounded-xl shadow-lg ">
        <h2 className="text-lg font-semibold text-center text-color text-[#004A50] mb-3">
            Add New Task
        </h2>

        {loading ? (
          <p className="text-center">Adding Tasks...</p>
          
        ) : (
          <div>
            <form name="task" onSubmit={handleSubmit} className="xs:space-y-6 xr:space-y-5">

              <p className="xs:text-[13px] xr:text-xs">Task Name
                <input
                  type="text"
                  placeholder="Enter Task Name"
                  id="text"
                  name="text"
                  autoComplete="text"
                  required
                  className="w-full px-3 py-2 rounded-lg border focus:ring focus:ring-[#1f7882]"
                />
              </p>

              <p className="xs:text-[13px] xr:text-xs">Task Category
                <input
                  type="text"
                  placeholder="Quest or Mission"
                  id="task category"
                  name="task category"
                  required
                  className="w-full px-3 py-2 rounded-lg border focus:ring focus:ring-[#1f7882]"
                />
              </p>

              <p className="xs:text-[13px] xr:text-xs">Task Reward
                <input
                  type="text"
                  placeholder="Task Reward (xp)"
                  id="task-reward"
                  name="task-reward"
                  required
                  className="w-full px-3 py-2 rounded-lg border focus:ring focus:ring-[#1f7882]"
                />
              </p>
              <p className="xs:text-[13px] xr:text-xs">Task Description
                <input
                  type="text"
                  placeholder="Task Description"
                  id="task-description"
                  name="task-description"
                  required
                  className="w-full px-3 py-2 rounded-lg border focus:ring focus:ring-[#1f7882]"
                />
              </p>
              <p className="xs:text-[13px] xr:text-xs">Task URL
                <input
                  type="url"
                  placeholder="Task URL"
                  id="task-URL"
                  name="task-URL"
                  required
                  className="w-full px-3 py-2 rounded-lg border focus:ring focus:ring-[#1f7882]"
                />
              </p>
              <p className="xs:text-[13px] xr:text-xs">Task Icon (Optional)
                <input
                  type="file"
                  accept="image"
                  placeholder="Task Icon (xp)"
                  id="task-icon"
                  name="task-icon"
                  className="w-[150px] px-3 py-2 rounded-lg border focus:ring focus:ring-[#1f7882]"
                />
              </p>

              <div className="justify-center items-center mb-6">
                <button
                  type="submit"
                  className="w-full py-2 text-white bg-[#1f7882] rounded-lg hover:bg-[#004A50] xs:text-sm xr:text-sm">
                  Add Task
                </button>
              </div>
            </form>
            </div>
        )}
      </div>
    </div>
    </Layout>
  )
}

export default Tasks;