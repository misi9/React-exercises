import React from "react";
import { LanguageContext } from "./LanguageContext";

const strings = {
    en: {
        selectedLanguage: 'What a beautiful day!',
    },
    it: {
        selectedLanguage: 'Che bella giornata!'
    }

}

export class DisplayLanguage extends React.Component{
    render(){
        return(
            <div>
                <LanguageContext.Consumer>
                    {(language)=>{
                        return <h1>
                            {strings[language].selectedLanguage}
                        </h1>

                    }}
                </LanguageContext.Consumer>
               
            </div>
        )
    }
}