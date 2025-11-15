import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = (props) => {
    // console.log(props.children);
    const data = useContext(ThemeDataContext);
    console.log(data);

    const [theme] = useContext(ThemeDataContext);
    return (
        <div className={theme}>
            <h1>{data}</h1>
            {props.children[0]}
            {props.children[1]}
            <Nav2 theme={props.theme} />
        </div>
    )
}

export default Navbar
