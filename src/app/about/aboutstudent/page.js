"use client"
import { useRouter } from "next/navigation"

export default function AboutStudent() {
    const route = useRouter();
    return(
        <div>
            <h1>
                About page for Student
            </h1><br></br>
            <button onClick={()=>route.push("/about")}>Go to about Page</button>
        </div>
    )
}