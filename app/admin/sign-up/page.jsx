"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { backArrow } from "@/public/assets/images";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
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
    <div className="flex justify-center items-center min-h-screen xs:p-5 xr:p-7">
      <div className="bg-white w-full max-w-md xs:p-7 xr:p-8 rounded-xl shadow-lg">
        <div className="flex items-center mb-5">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <Image src={backArrow} alt="back arrow" className="w-6 h-6" />
              <p className="ml-2 text-sm text-color">Back</p>
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
            <form onSubmit={handleSubmit} className="xs:space-y-6 xr:space-y-5">

              <p className="xs:text-[12.5px] xr:text-[13px]">Email
                <input
                  type="email"
                  placeholder="E-mail Address"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg border focus:ring focus:ring-[#1f7882]"
                />
              </p>

              <p className="xs:text-[12.5px] xr:text-[13px]">Password
                <input
                  type="password"
                  placeholder="Create Password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg border focus:ring focus:ring-[#1f7882]"
                />
              </p>

              <p className="xs:text-[12.5px] xr:text-[13px]">Confirm Password
                <input
                  type="password"
                  placeholder="Confirm Password"
                  id="confirm-password"
                  name="confirm-password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg border focus:ring focus:ring-[#1f7882]"
                />
              </p>

              <div className="justify-center items-center mb-6">
                <button
                  type="submit"
                  className="w-full py-2 text-white bg-[#1f7882] rounded-lg hover:bg-[#004A50] xs:text-sm xr:text-lg">
                  Create Account
                </button>
              </div>
            </form>

            <div className="justify-center items-center mt-5">
              <p className="font-normal text-[13px]">
                Have an Account already?{" "}
                <span className="text-color">
                  <Link href="/admin/sign-in">
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
  )
};

export default SignUp;
