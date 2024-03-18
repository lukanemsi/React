import React from "react";
import Creator from "../elements/Creator";
import Table from "../layout/Table";

const Artists = ({artists}) =>{

    const getHeaders = () => {
        const headers = [];
        Object.keys(artists[0]).forEach(
            el => {if(el !== "creator"){headers.push(el)}}
        )
        return headers;
    }

    return <div >
        {
            artists.map((el,key) => {
                return <div className="flex flex-column align-center">
                    <div className="width-10-p">
                    <Creator creator={el.creator} key={key}/>
                    </div>
                    <div className="width-100-p">
                    <Table headers={getHeaders()} data={artists}/>

                    </div>
                  
                </div>
           
            })
        }
    </div>
}

export default Artists;