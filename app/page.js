"use client"

import HashTags from "@/components/HashTags";
import HomePage from "@/components/HomePage"
import Layout from "@/components/Layout";
import Message from "@/components/Message";
import Miner from "@/components/Miner";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <Layout>
      <HomePage />
      <HashTags />
      <Miner />
      <NavBar />
      <Message />
    </Layout>
  );
}
