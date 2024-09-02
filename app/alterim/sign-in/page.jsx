"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { backArrow } from "@/public/assets/admin-images";
import { toast } from "react-toastify";




const SignIn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add sign in authentication

      toast.success("login successful");
      router.push("/user/dashboard");
    } catch (error) {
      console.log(error);
        toast.error("user not found");
        toast.error("Incorrect password");
        toast.error(error.message);
    } finally {
      setLoading(false);
    }
  
  }

  return (
    <div className="flex justify-center items-center min-h-screen xs:p-5 xr:p-7">
      <div className="bg-white w-full max-w-md xs:p-7 xr:p-8 rounded-2xl shadow-lg">
        <div className="flex items-center mb-5">
          <Link href="/alterim/sign-up">
            <div className="flex items-center cursor-pointer">
              <Image src={backArrow} alt="back icon"/>
              <p className="ml-2 text-base text-color">Back</p>
            </div>
          </Link>
        </div>

        <h2 className="text-xl text-[#004A50] font-bold text-center text-color mb-8">
          Sign In
        </h2>

        {loading ? (
          <p className="text-center">Signing In...</p>
        ) : (
          <>
            <form autoComplete="" name="sign-in" onSubmit={handleSubmit} className="xs:space-y-6 xr:space-y-5">
              <p className="xs:text-[13px] xr:text-sm">Email
                <input
                  type="text"
                  placeholder="E-mail Or Username"
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border focus:ring focus:ring-[#1f7882]"
                  />
              </p>

                <p className="xs:text-[13px] xr:text-sm">Password
                  <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border focus:ring focus:ring-[#1f7882]"
                  />
                </p>


                <button
                type="submit"
                className="w-full py-3 text-white xs:text-sm xr:text-lg bg-[#1f7882] rounded-lg hover:bg-[#004A50]">
                Login
              </button>
            </form>

            <div className="justify-center items-center mt-5">
              <p className="font-semibold text-sm cursor-pointer">
                Forgot Password?{" "}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SignIn;