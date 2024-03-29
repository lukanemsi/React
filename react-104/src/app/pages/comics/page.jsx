"use client";
import Comic from "@/app/components/model/Comic";
import { fetchComics } from "@/app/services/MarvelApi";
import React, { useEffect, useState } from "react";
import "@/app/pages/page.css"

const Comics = () => {
    const[comics,setComics]= useState([])

    useEffect(() => {
        fetchComics().then(response => response.json())
        .then(data => {
            setComics(data.data.results)
        })
    } ,[])

    return <div className="comics-wrapper">
        {comics.map((c,key) => <Comic comic={c} key={key}/>)}
    </div>
}
export default Comics;