import {isDark, useTheme} from "@/components/theme-provider.tsx";
import {Moon, Sun} from "lucide-react";
import {useState} from "react";
import {Button} from "@/components/ui/button.tsx";


export default function ToggleDarkModeButton(props: {
    tooltip: string,
    setThemeString: (newTheme: 'dark' | 'light') => void
}) {
    const initialIcon = (): JSX.Element => {
        return isDark() ? <Sun/> : <Moon/>;
    };
    const [icon, setIcon] = useState(initialIcon)
    const toggleTheme = () => {
        console.log("dark: " + isDark())
        if (isDark()) {
            setTheme("light");
            props.setThemeString("light")
            setIcon(<Moon/>)
        } else {
            setTheme("dark");
            props.setThemeString("dark")
            setIcon(<Sun/>)
        }


    }
    const {setTheme} = useTheme()

    return (
        <Button tooltipContent={props.tooltip} variant={"outline"} size={"icon"} onClick={toggleTheme}>{icon}</Button>
    )
}