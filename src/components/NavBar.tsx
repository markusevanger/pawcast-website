import {Button} from "@/components/ui/button.tsx";
import {Github} from "lucide-react";
import ToggleDarkModeButton from "@/components/ToggleDarkModeButton.tsx";
import {useTranslation} from "react-i18next";

export default function NavBar(props: { setThemeString: (newTheme: 'dark' | 'light') => void }) {

    const [t, i18n] = useTranslation("global");

    const handleToggleLanguage = () => {
        const currentLang = i18n.language
        if (currentLang === "en") i18n.changeLanguage("no")
        else i18n.changeLanguage("en");
    }


    return <div className={"flex flex-row justify-end gap-3 w-full"}>


        <Button tooltipContent={t("disabledDisclaimers.github")} variant={"outline"} disabled={true} size={"icon"}> <Github/> </Button>
        <Button tooltipContent={t("navbar.tooltips.language")} variant={"outline"} size={"icon"} className={"px-5"}
                onClick={handleToggleLanguage}> {i18n.language.toUpperCase()} </Button>
        <ToggleDarkModeButton setThemeString={props.setThemeString} tooltip={t("navbar.tooltips.theme")}/>
    </div>;
}