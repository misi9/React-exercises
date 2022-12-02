import { CustomHookForm } from "./CustomHookForm";

export function Login(){
    const { username, password, submit, update } = CustomHookForm();


    return(
        <form>
            <input name="username" onChange={update} value={username} />
            <input name="password" type="password" onChange={update} value={password} />
            <button onClick={submit}>Invia</button>
            {username && <h3>Benvenuto {username}!</h3>}
            {password && <h3>La sua password è stata inserita.</h3>}
        </form>
    )
}