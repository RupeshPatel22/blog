import Link from "next/link";

export default function About() {
    return(
        <div>
            <h1>About page</h1>
            <Link href="/">Go to Home Page</Link><br></br>
            <Link href="/about/aboutstudent">Go to About Student Page</Link><br />
            <Link href="/about/aboutcollege">Go to about college page</Link>
        </div>
    )
}