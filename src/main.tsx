import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {siteNameStorageKey, ThemeProvider} from "@/components/theme-provider.tsx";

import global_en from "./translations/en/global.json"
import global_no from "./translations/no/global.json"
import i18next from "i18next";
import {I18nextProvider} from "react-i18next";

i18next.init({
    interpolation: {escapeValue: true},
    lng: "no",
    resources: {
        en: {global: global_en},
        no: {global: global_no}
    }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider defaultTheme='dark' storageKey={siteNameStorageKey}>
            <I18nextProvider i18n={i18next}>
                <App/>
            </I18nextProvider>
        </ThemeProvider>
    </React.StrictMode>,
)
