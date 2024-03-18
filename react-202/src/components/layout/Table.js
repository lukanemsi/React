import React from "react"
import Creator from "../elements/Creator"

const Table = ({headers,data}) => {
    console.log(headers)
    return <table className="width-100-p text-center"> 
        <tr>
            {
                headers.map(
                    (el,index) => <th key={index}>{el}</th>
                )
             }
        </tr>  
        {
            data.map(el =>
                <tr>
                    {headers.map((heading,key) => 
                        {
                            if(heading === "artist"){
                                return <td key={key}><Creator creator={el[heading]}/></td>
                            }
                            return <td key={key}>{el[heading]}</td>
                        }
                        )}
                </tr>


                )
        }     
         
     </table>;
}

export default Table;