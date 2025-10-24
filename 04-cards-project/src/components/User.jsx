import React from 'react'

const User = (props) => {
    console.log(props);
    return (
        <div>
            <h1 style={{ color: 'white' }}> anua,{props.name}</h1>

        </div>
    )
}

export default User