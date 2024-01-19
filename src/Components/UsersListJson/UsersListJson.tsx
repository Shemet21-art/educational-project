import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const style = { 
  border: '2px solid #000',
  display: 'flex',
}



function UsersListJson(){


    const [clients, setClients] = useState([])

    const getJsonData = async () => {
        const response = await fetch(
          "http://localhost:8000/clients"
        ).then((response) => response.json());
    
        setClients(response);
      };

      useEffect(() => {
        getJsonData();
      }, []);

      console.log(clients)

    return(
        <div>
            <p>Список Всех</p>
            {clients.map((client)=>(<div style={style}><p>{client.name}{client.surname}{client.number}</p>
            <Link to={`/users/${client.id}`}>
            <button>
              Показать больше 
            </button>
            </Link>
            </div>))}
           
        </div>
    )
}

export default UsersListJson