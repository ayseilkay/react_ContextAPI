import React from 'react'
import ThemeContext from '../context/ThemeContext'
import { useContext } from 'react'

function Button() {
    // const data = useContext(ThemeContext)
    const {theme,setTheme} = useContext(ThemeContext)
    // console.log(data)
    return (
        <div>
            Active Theme : {theme}

            <button onClick={()=> setTheme(theme=== "light" ? "dark": "light") }>ChangeTheme</button>
        </div>

    )
}

export default Button
