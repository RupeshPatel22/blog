'use client'

import Link from "next/link";

export default function AboutNotFound({params}) {
    console.log(params);
    return(
        <div>
            <h1>This About page is not available</h1>
            <Link href="/">Go to Home Page</Link>
        </div>
    )
}