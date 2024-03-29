"use client"
import React, { useEffect, useState } from "react"
import { useParams } from 'next/navigation'
import { fetchCharacters } from "@/app/services/MarvelApi"
import "@/app/pages/page.css"
import Link from 'next/link';


const CharacterDetails = () => {
    const params = useParams()
    const id = params.id;
    const [character,setCharacter] = useState(null)

    useEffect(
        () => {
            fetchCharacters(id).then(response => response.json())
            .then(data => setCharacter(data.data.results[0]))
        },[])
    
    console.log(character)  
    if(character === null){
        return <></>
    }
    return <div className="character-details">
            <img src={character.thumbnail.path + "." + character.thumbnail.extension} alt="character" />
            <div className="character-info">
                <h2>{character.name}</h2>
                <p className="character-desc">
                    {character.description}
                </p>
                <div className="character-comics">
                    <h2>Comics:</h2>
                    {character.comics.items.map((el) => 
                        <Link href={"/pages/comics/"+ el.resourceURI.split('/').pop()}>
                            {el.name}
                        </Link>
                    )}
                  
                </div>
            </div>
        </div>
}

export default CharacterDetails;