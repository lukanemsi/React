"use client";
import { fetchCharacters } from "@/app/services/MarvelApi";
import React, { useEffect, useState } from "react";
import Character from "@/app/components/model/Character";
import "@/app/pages/page.css"
const Characters = () =>{
    const[characters,setCharacters] = useState([])
    
    useEffect(
        () => {
            fetchCharacters().then(
                response => response.json()
            )
            .then(data => {
                console.log(data.data.results[0])
                setCharacters(data.data.results)
            })
        },[]
    )

    return <div className="characters-wrapper">
        {characters.map((c,key) => <Character character={c} key={key} />)}
    </div>
    
    ;
}
export default Characters;