'use client'
import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState("Rupesh");
  const User = (name) => {
    setName(name);
  }
  const route = useRouter();
  const navigate=(name)=> {
    route.push(name);
  }
  return (
    <main className={styles.main}>
      <h1>Home Page | Basic routing {name}</h1>
      <button onClick={()=>User("Messi")}>Change Name</button><br></br>
      <Link href="/login">Go to Login Page</Link>
      <Link href="/about">Go to About Page</Link>
      <button onClick={()=>navigate("/login")}>Goto Login Page</button>
      <button onClick={()=>navigate("/about")}>Goto About Page</button>

    </main>
  );  
}

