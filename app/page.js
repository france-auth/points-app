

import HashTags from "@/components/HashTags";
import HomePage from "@/components/HomePage"
import Message from "@/components/Message";
import Miner from "@/components/Miner";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main>
      <HomePage />
      <HashTags />
      <Miner />
      <NavBar />
      <Message />
    </main>
  );
}
