import React from 'react'

const Navbar = (props) => {

    console.log(props);

    function changeTheme() {
        console.log('theme change');
        props.setTheme('Dark');
    }

    return (
        <div>
            {/* <p>{props.theme}</p> */}
            <button onClick={changeTheme}>Change Theme</button>
        </div>
    )
}

export default Navbar
