import React from "react";
import { useRouter } from 'next/navigation'
import "@/app/components/model/model.css"

const Character = ({character}) => {
    const router = useRouter();

    return <div className="character" onClick={() => {
           router.push(`/pages/characters/${character.id}`)
        }
    }>
        <div className="character-img-wrapper">
            <img  src={character.thumbnail.path + "." + character.thumbnail.extension } alt="hero" />
        </div>
        <div className="character-info">
            <h2 className="character-name">{character.name}</h2>
            <p className="character-modified-date">{character.modified}</p>
        </div>
    </div>
}


export default Character