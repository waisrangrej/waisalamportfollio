import { createContext, useContext,useState } from "react";

const ThemeContext=createContext()

export const useTheme=()=>useContext(ThemeContext);

export const ThemeProvider=({children})=>{
const [bgcolor, setBgcolor] = useState("")
const [textcolor, setTextcolor] = useState("")
const theme=(bg,text)=>{
    setBgcolor(bg)
    setTextcolor(text)
}
return(
    <ThemeContext.Provider value={{bgcolor,textcolor,theme}}>
        {children}
    </ThemeContext.Provider>
)

};

