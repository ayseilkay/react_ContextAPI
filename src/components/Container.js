import React from 'react'
import Button from './Button'
import Header from './Header'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Container() {
    const { theme,setTheme} = useContext(ThemeContext);
    return (
        <div className={` app ${theme == "dark" ? theme : ""}`}>
             <Button/>
                <br/>
            <Header/>
        </div>
    )
}

export default Container
