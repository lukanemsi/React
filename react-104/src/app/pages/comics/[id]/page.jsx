"use client"
import React, { useEffect, useState } from "react"
import { useParams } from 'next/navigation'
import { fetchComics, fetchComicsCharacters } from "@/app/services/MarvelApi"
import "@/app/pages/page.css"
import Comic from "@/app/components/model/Comic"

const ComicDetails = () => {
    const params = useParams()
    const id = params.id;
    const [comic,setComic] = useState(null)
    const [comicVariants, setComicVariants] = useState([]); 
    useEffect(
        () => {
            fetchComics(id).then(response => response.json())
            .then(data => {
                setComic(data.data.results[0])
                if (data.data.results[0].variants.length > 0) {
                    Promise.all(data.data.results[0].variants.map(variant =>
                        fetchComics(variant.resourceURI.split('/').pop())
                            .then(response => response.json())
                    ))
                    .then(variantsData => {
                        setComicVariants(variantsData.map(variant => variant.data.results[0]));
                    })
                }
            })


            fetchComicsCharacters(384).then(response => response.json()).then(data => 
                console.log(data.data.results))
        },[])

    if(comic === null){
        return <></>
    }    

    return <div className="comic-details">
        <img src={comic.thumbnail.path + "." + comic.thumbnail.extension} alt="character" />
        <div className="comic-info">
            <h2>{comic.title}</h2>
            <p className="comic-desc">
                {comic.description}
            </p>
            <div>
                <p> <strong>Price</strong> </p>
                {comic.prices.map((el,key) => <p key={key}>{el.type} {el.price}$</p> )}
            </div>
            {
                comicVariants.length === 0 ?  <></> : 
                <div className="comic-variants">
                <h2>Other Variants</h2>
                    <div className="comics-wrapper">
                        {
                            comicVariants.map((variant,key) => <Comic comic={variant} key={key}/>)
                        }
                    </div>
                </div> 
            }
        </div>
    </div>   
}

export default ComicDetails;