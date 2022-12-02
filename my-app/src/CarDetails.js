import { useEffect, useState, useRef } from "react";


export function CarDetails() {
    const [initialData, setInitialData] = useState({
        model: "Tesla",
        year: "2018",
        color: "black",
    })
    const [carData, setCarData ] = useState({model:"", year:"", color:""})
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])
    
    function handleInputChange(event) {
        const { value, name } = event.target;

        setCarData({
            ...carData,
            [name]: value

        });
        setInitialData({
            model: "",
            year: "",
            color: "",
        })
    }

    return (
        <div>
            <h2>Inserisci i dati del tuo veicolo</h2>
            <h4>Modello: {carData.model}</h4>
            <input name="model" ref={inputRef} value={carData.model} placeholder={initialData.model} onChange={handleInputChange} />
            <h4>Colore: {carData.color}</h4>
            <input name="color" value={carData.color} placeholder={initialData.color} onChange={handleInputChange} />
            <h4>Anno di immatricolazione: {carData.year}</h4>
            <input name="year" value={carData.year} placeholder={initialData.year} onChange={handleInputChange} />


        </div>
    )
}