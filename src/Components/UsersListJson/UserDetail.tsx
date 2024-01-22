import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

interface Client  {
id: number;
name: string;
surname:string;
number:string;
email: string;
url:string
}



function UserDetail(){

    const [client, setClient] = useState<Client>(Object)


    const {id} = useParams()
    const getJsonData = async () => {
        const response = await fetch(
          `http://localhost:8000/clients/${id}`
        ).then((response) => response.json());
    
        setClient(response);
      };

      useEffect(() => {
        getJsonData();
      }, []);

    return(
        
        <div> <h1>Info USER </h1>
        <p>{client.name}</p>
        <p>{client.surname}</p>
        <p>{client.number}</p>
        <p>{client.email}</p>
        <img src={client.url}></img>
        </div>
        
       

    )
}

export default UserDetail