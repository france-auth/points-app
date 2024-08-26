"use client"

import HashTags from "@/components/HashTags";
import HomePage from "@/components/HomePage"
import Loader from "@/components/Loader";
import Message from "@/components/Message";
import Miner from "@/components/Miner";

export default function Home() {
  return (
    <main>
      <Loader />
      <HomePage />
      <HashTags />
      <Message />
    </main>
  );
}
