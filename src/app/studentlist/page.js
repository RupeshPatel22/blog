import Link from "next/link";

export default function StudentList() {
    const name = ['Rupesh','Saloni','Mayur','Daksh']
    return(
        <div>
            <h1>
                Student List
            </h1>
            <ul>
                <li>
                    <Link href="studentlist/Rupesh" >Rupesh</Link>
                </li>
                <li>
                    <Link href="studentlist/Saaloni" >Saloni</Link>
                </li>
                <li>
                    <Link href="studentlist/Mayur" >Mayur</Link>
                </li>
                <li>
                    <Link href="studentlist/Daksh" >Daksh</Link>
                </li>
            </ul>
        </div>
    )
}