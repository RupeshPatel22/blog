'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
    const route = useRouter();
    const navigate=(page)=> {
        route.push('/login' + page)
    }
    return(
        <div>
            <h1 className="heading">Login Page</h1>
            <Link href="/">Go to Home Page</Link><br /><br />
            <button onClick={()=>navigate('/loginstudents')}>Go to students page</button><br /><br />
            <button onClick={()=>navigate('/loginteachers')}>Go to teachers page</button>
        </div>
    )
}

export default Login;