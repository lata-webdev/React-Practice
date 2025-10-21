import React from 'react'

const Card = (props) => {
    console.log(props)
    return (
        <div>
            <div className="card">
                <img src="girl.jpg" alt="" />
                <h1>hi {props.user},{props.age}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>View Profile</button>
            </div>
        </div>
    )
}

export default Card
