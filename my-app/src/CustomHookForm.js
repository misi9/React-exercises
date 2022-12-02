import {useState} from 'react'

export function CustomHookForm(){
    const [data, updateData] = useState({
            username:'',
            password:''
        })

       function dataUpdate(event){
          event.preventDefault();

          const name = event.target.name
          const value = event.target.value
          updateData({
              ...data,
              [name]: value,
          })
        }

        function handleFormSubmit(event) {
            event.preventDefault();
            updateData({
              ...data,
            })
            console.log(data)
          }
        
        

    return{
        username: data.username,
        password: data.password,
        submit: handleFormSubmit,
        update: dataUpdate,
    }
}