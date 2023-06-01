import { useContext } from "react";
import ThemeContext from "../context/themeContext";
import Counter from "./Counter";
import HoverCounter from "./HoverCount";

export default function Content(){
    const context = useContext(ThemeContext)
    const { theme, switchTheme } = context

    return(
        <div>
            <Counter>
                {
                    (counter, incrementCount)=>(
                        <HoverCounter count={counter} incrementCount={incrementCount} theme={theme} switchTheme={switchTheme} />
                    )
                }
            </Counter>
        </div>
    )
}