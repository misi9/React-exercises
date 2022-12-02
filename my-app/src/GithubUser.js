import { useParams } from "react-router-dom";
import { useGithubUser } from "./useGithubUser"

export function GithubUser(){
    const { username } = useParams();
    const{data, loading, error, onRefresh} = useGithubUser(username)

    console.log(data)
    

    return (
        <div>
        <button onClick={onRefresh}>Ricarica utente</button>
         {data != null && data.login !=null && <h1>L'accesso è stato effettuato da {data.login}</h1>}
         {loading && <h1>Caricamento...</h1>}
         {error && <h1>Errore</h1>}
        </div>
    )
}



    