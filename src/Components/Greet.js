import React from 'react'


const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Greeting {props.name} and Relation is {props.rel}</h1>
            {props.children}
        </div>
        )
}

export default Greet