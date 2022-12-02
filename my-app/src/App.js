import {React, useState} from 'react';
import { DisplayLanguage } from './DisplayLanguage';
import { LanguageContext } from './LanguageContext';
import { Translation } from './Translation';


export function App() {
 const [ language, setLanguage ] = useState('en')

 function handleChangeLanguage(event){
    setLanguage(event.target.value)
 }

    return (
     <div>
       <select value={language} onChange={handleChangeLanguage}>
         <option value="en">English</option>
         <option value="it">Italiano</option>
       </select>
     <LanguageContext.Provider value={language}>
        <DisplayLanguage/>
        <Translation/>
     </LanguageContext.Provider>
     </div>
    )
  }

