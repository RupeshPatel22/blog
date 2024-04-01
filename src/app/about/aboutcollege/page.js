"use client"
import { useRouter } from "next/navigation"

export default function AboutCollege() {
    const route = useRouter();
    return(
        <div>
            <h1>
                About page for College
            </h1><br />
            <button onClick={()=>route.push("/about")}>Go To About Page</button>
        </div>
    )
}