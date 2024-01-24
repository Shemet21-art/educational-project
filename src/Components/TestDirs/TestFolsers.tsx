import { useState, useEffect } from "react";


function TestFolders (){

    const [data, setData] = useState([])

    const getJsonData = async () => {
        const response = await fetch(
          "http://localhost:8000/folders"
        ).then((response) => response.json());
    
        setData(response);
      };

      useEffect(() => {
        getJsonData();
      }, []);


      function getFiniteValue(obj:any) {

        getProp(obj);
    
        function getProp(obj:any) {
            for(let key in obj) {
                if(typeof(obj[key]) === 'object') {
                    getProp(obj[key]);
                } else {
                    if(obj[key] === 'dir'){
                        console.log(obj[key])
                    } else if (obj[key] === 'file'){
                        console.log(obj[key])
                    }
                }
            }
        }
    }


      console.log(data,'dddd')
      getFiniteValue(data)


    return(
        <div>
            <h1> TEST FOLDERS</h1>
        </div>
    )
}

export default TestFolders