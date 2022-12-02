import { useContext } from "react"
import { LanguageContext } from "./LanguageContext"



const translation = {
  it:{
      "CURRENT_TEXT": "Orgoglio e Pregiudizio è il mio libro preferito"
  },
  en:{
     "CURRENT_TEXT": "Pride and Prejudice is my favourite book"
  }
}

export function Translation(){
    const language = useContext(LanguageContext)
    return(
        <p>{translation[language].CURRENT_TEXT}</p>
    )
}