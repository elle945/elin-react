import React from 'react'

interface HomeProps {
    firstname: string
    counter: number
}
// Gör samma sak
// type HomeProps = {
//     firstname: string
//     counter: number
// }

function About(props: HomeProps) {
    return (
        <div>
            <h1>{props.firstname}</h1>
            <h2>{props.counter + 1}</h2>
        </div>
    )
}

export default About
