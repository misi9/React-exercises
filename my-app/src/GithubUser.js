import { useParams } from "react-router-dom";
import { useGithubUser } from "./useGithubUser"

export function GithubUser(){
    const { username } = useParams();
    const{data, loading, error, onFetchUser} = useGithubUser(username)

    function handleGetUserData(){
        onFetchUser(username)
    }
    

    return (
        <div>
        <button onClick={handleGetUserData}>Ricarica utente</button>
         {data && <h1>L'accesso è stato effettuato da {data.login}</h1>}
         {loading && <h1>Caricamento...</h1>}
         {error && <h1>Errore</h1>}
        </div>
    )
}



    