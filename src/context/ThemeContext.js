import {createContext,useState,useEffect} from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{
    const [theme,setTheme]= useState(localStorage.getItem("theme") || "light"); //2.adım artık local storagedan oku diyoruz.null gelirse default olarak light olsun dedik

   useEffect(()=> {
      localStorage.setItem("theme",theme)//git bunu local storage da kaydet..(1.adım)
    },[theme])// theme her degistiginde bana söyle demek istiyoruz.
    const values = {
        theme,
        setTheme,
    };


    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}
export default ThemeContext;