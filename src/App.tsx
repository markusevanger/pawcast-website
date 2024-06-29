import './App.css'
import NavBar from "@/components/NavBar.tsx";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {ArrowLeft, ArrowRight, Code, PawPrint, Text, Wrench} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/components/ui/carousel.tsx";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";


function App() {

    const [theme, setTheme] = useState(localStorage.getItem('pawcast-theme') || 'dark');
    const setThemeString = (newTheme: 'dark' | 'light') => {
        setTheme(newTheme);
    }


    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])



    const repoUrl = "https://github.com/markusevanger/pawcast/"
    const reportUrl = "https://pawcast.markusevanger.no/prosjektrapport.pdf"


    const screenshotUrls = [
        `/${theme}/age_setup.png`,
        `/${theme}/homescreen.png`,
        `/${theme}/homescreen_2.png`,
        `/${theme}/location_setup.png`,
        `/${theme}/name_setup.png`,
        `/${theme}/nose_setup.png`,
        `/${theme}/settingsscreen.png`,
        `/${theme}/weatherscreen.png`,
        `/${theme}/welcome.png`,
    ];

    const [t] = useTranslation("global")
    const buttonClass = "text-wrap text-left min-h-fit"


    return (
        <div className={""}>


            <div className={"p-5"}>
                <NavBar setThemeString={setThemeString}/>
            </div>

            <div className={"min-h-screen w-full bg-background px-2 sm:px-10 lg:px-40"}>


                <section>
                    <div className={"my-10 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10"}>

                        <div className={"justify-center flex-col flex gap-1"}>

                            <h1 className={"text-4xl font-bold"}>{t("hero.title")}</h1>
                            <p className={"pt-2"}>
                                {t("hero.description")}
                            </p>

                            <div className={"flex gap-3 w-full md:items-center flex-col md:flex-row py-5"}>
                                <Button className={buttonClass + " w-full"} onClick={()=>openLink(repoUrl)}> <Code
                                    className={"mr-2 h-4 w-4"}/> {t("hero.repositoryButton")} </Button>
                                <Button className={buttonClass + " w-full"} variant={"outline"} onClick={()=> openLink(reportUrl)}> <Text
                                     className={"mr-2 h-4 w-4"}/> {t("hero.reportButton")}
                                </Button>

                            </div>
                        </div>

                        <div className={"flex justify-center lg:justify-between"}>
                            <img
                                className={"dark:hidden object-contain w-[80%] min-w-48 drop-shadow-2xl transition-all"}
                                src={`/light/home_sideways_with_companion.png`}
                                alt={"A mockup displaying the Pawcast Homescreen"}>
                            </img>

                            <img
                                className={"hidden dark:block object-contain w-[80%] min-w-48 drop-shadow-2xl transition-all"}
                                src={`/dark/home_sideways_with_companion.png`}
                                alt={"A mockup displaying the Pawcast Homescreen"}>
                            </img>
                        </div>
                    </div>
                </section>


                <section>
                    <div className={"mt-10 lg:my-40 grid lg:grid-cols-2 gap-4 grid-rows-2"}>

                        <Card className={"row-span-2"}>
                            <CardHeader>
                                <CardTitle> {t("cardSection.what.title")}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className={"text-lg"}>
                                    {t("cardSection.what.body")}
                                </p>
                            </CardContent>
                        </Card>


                        <Card>
                            <CardHeader>
                                <div className={"flex gap-3"}>
                                    <Wrench/>
                                    <CardTitle> {t("cardSection.builtIn.title")}</CardTitle>
                                </div>
                            </CardHeader>

                            <CardContent>
                                <p> {t("cardSection.builtIn.body")}</p>
                            </CardContent>
                            <CardFooter>
                                <Button className={buttonClass} size={"sm"} variant={"outline"} onClick={()=> openLink(repoUrl)}> <Code
                                    className={"mr-2 h-4 w-4"}  /> {t("cardSection.builtIn.button")}</Button>
                            </CardFooter>
                        </Card>

                        <Card>
                            <CardHeader>
                                <div className={"flex gap-3"}>
                                    <PawPrint></PawPrint>
                                    <CardTitle> {t("cardSection.design.title")}</CardTitle>
                                </div>

                            </CardHeader>

                            <CardContent>
                                <p>{t("cardSection.design.body")} </p>

                            </CardContent>
                            <CardFooter>
                                <Button size={"sm"} variant={"outline"} className={buttonClass} onClick={()=> openLink(reportUrl)}>
                                    <Text
                                        className={"mr-2 h-4 w-4"}/> {t("cardSection.design.button")}</Button>
                            </CardFooter>
                        </Card>

                        <div className={"row-span-2"}>

                        </div>


                    </div>


                </section>


                <section>
                    <div className="h-30 w-full flex flex-col py-10">
                        <h2 className="text-xl font-bold p-4">
                            {t("screenshotsSection.sectionTitle")}
                        </h2>
                        <div className="flex-grow ">
                            <Carousel setApi={setApi} opts={{align: "center", loop: true}} className="w-full">
                                <CarouselContent>
                                    {screenshotUrls.map((imageUrl, index) => (
                                        <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3">
                                            <div className="flex justify-center overflow-visible">
                                                <img
                                                    className="max-h-[calc(100vh-65px)] object-cover sm:object-contain h-full drop-shadow-2xl"
                                                    src={imageUrl}
                                                    alt=""
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>

                            <div className="py-2 text-center text-sm text-muted-foreground">
                                {t("screenshotsSection.sectionTitle")} {current} / {count}
                            </div>

                            <div className={"flex w-full justify-center gap-5 p-2"}>
                                <Button size={"icon"} onClick={() => api?.scrollPrev(false)} variant={"outline"}><ArrowLeft></ArrowLeft></Button>
                                <Button size={"icon"} onClick={() => api?.scrollNext(false)} variant={"outline"}><ArrowRight></ArrowRight></Button>
                            </div>

                        </div>
                    </div>
                </section>

                <section>
                    <div className={"text-sm font-mono text-muted-foreground"}>
                        <p> {t("bottomInfo.websiteMadeIn")} <a href={"https://ui.shadcn.com/"}
                                                               className={"underline"}>shadcn</a>.
                        </p>

                        <p> {t("bottomInfo.developedBy")} <a className={"underline"}
                                                             href={t("bottomInfo.markusevangerLink")}>markusevanger.no</a>💖
                        </p>
                        <p><a href={"https://github.com/markusevanger/pawcast-website/"} className={"underline"}>Github</a></p>
                    </div>
                </section>

                <div className={"h-10"}></div>
            </div>
        </div>
    )
}

export default App


const openLink = (link:string) =>{
    window.open(link, "_blank")
}