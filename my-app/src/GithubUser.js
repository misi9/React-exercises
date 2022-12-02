import { useGithubUser } from "./useGithubUser"

export function GithubUser({username}){
    const{data, loading, error} = useGithubUser(username)
    

    return (
        <div>
         {data && <h1>L'accesso è stato effettuato da {data.name}</h1>}
         {loading && <h1>Caricamento...</h1>}
         {error && <h1>Errore</h1>}
        </div>
    )
}



    