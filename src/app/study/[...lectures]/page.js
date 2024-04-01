'use client'
export default function Lectures({params}) {
    console.log(params);
    return(
        <div>
            <h1>Day of College: {params.lectures[0]}</h1>
            <h3>Lecture No. {params.lectures[1]}</h3>
            <h4>Subject: {params.lectures[2]}</h4>
        </div>
    )
}