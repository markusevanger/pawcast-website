import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Github} from "lucide-react";
import ToggleDarkModeButton from "@/components/ToggleDarkModeButton.tsx";
import {useTranslation} from "react-i18next";

export default function NavBar(props : {setThemeString : (newTheme:'dark' | 'light') => void}) {

    const [t, i18n] = useTranslation("global");

    const handleToggleLanguage = () => {
        const currentLang = i18n.language
        if (currentLang === "en") i18n.changeLanguage("no")
        else i18n.changeLanguage("en");
    }


    return <div className={"flex flex-row justify-end gap-3 w-full"}>

        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className={"cursor-not-allowed"}>
                    <Button variant={"outline"} disabled={true} size={"icon"} > <Github/> </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p> {t("navbar.tooltips.github")} </p>
                </TooltipContent>
            </Tooltip>

            <Tooltip>
                <TooltipTrigger>
                    <Button variant={"outline"} size={"icon"} className={"px-5"} onClick={handleToggleLanguage} > { i18n.language.toUpperCase()} </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p> {t("navbar.tooltips.language")} </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

        <ToggleDarkModeButton setThemeString={props.setThemeString}  tooltip={t("navbar.tooltips.theme")}/>
    </div>;
}