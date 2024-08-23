"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Layout from '@/components/AdminDashboard/Layout';

const Tasks = () => {
  const [confirm, setConfirm] = useState("");
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
      <h1 className='font-bold text-2xl'>Tasks</h1>

      <div className="flex justify-center items-center min-h-screen xs:p-5 xr:p-7">
      <div className="bg-white w-full max-w-md xs:p-7 xr:p-8 rounded-xl shadow-lg">
        <div className="flex items-center mb-5">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <p className="ml-2 text-base text-color">Back</p>
            </div>
          </Link>
        </div>
        <h2 className="text-xl font-bold text-center text-color text-[#1f7882] mb-8">
          Sign Up
        </h2>

        {loading ? (
          <p className="text-center">Signing Up...</p>
        ) : (
          <div>
            <form name="task" onSubmit={handleSubmit} className="xs:space-y-6 xr:space-y-5">

              <p className="xs:text-[13px] xr:text-sm">Email
                <input
                  type="email"
                  placeholder="E-mail Address"
                  id="text"
                  name="text"
                  autoComplete="text"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border focus:ring focus:ring-[#1f7882]"
                />
              </p>

              <p className="xs:text-[13px] xr:text-sm">Password
                <input
                  type="password"
                  placeholder="Create Password"
                  id="password"
                  name="password"
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border focus:ring focus:ring-[#1f7882]"
                />
              </p>

              <p className="xs:text-[13px] xr:text-sm">Confirm Password
                <input
                  type="password"
                  placeholder="Confirm Password"
                  id="confirm-password"
                  name="confirm-password"
                  autoComplete="new-password"
                  onChange={(e) => setConfirm(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border focus:ring focus:ring-[#1f7882]"
                />
              </p>

              <div className="justify-center items-center mb-6">
                <button
                  type="submit"
                  className="w-full py-3 text-white bg-[#1f7882] rounded-lg hover:bg-[#004A50] xs:text-sm xr:text-lg">
                  Create Account
                </button>
              </div>
            </form>

            <div className="justify-center items-center mt-5">
              <p className="font-normal text-sm">
                Have an Account already?{" "}
                <span className="text-color">
                  <Link href="/alterim/admin/sign-in">
                    <button type="button"
                    className="font-semibold">Login</button>
                  </Link>
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
    </Layout>
  )
}

export default Tasks;