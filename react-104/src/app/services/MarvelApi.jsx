import React from "react";
import md5 from 'js-md5';

const PUBLIC_KEY = '4486cf7f00ac8a31c0b0ade0bb447a93'
const PRIVATE_KEY='91a7407f36e378bbf32cb5ee7b8f7f43ee4d05ce'  
const MARVEL_URL=`https://gateway.marvel.com:443/v1/public/`

const getHash = (ts) => {
    const hash = md5.create();
    hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);
    return hash.hex();
}
const setUrl = (path) => {
    const ts = Number(new Date());
    const result = MARVEL_URL + path + `?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${getHash(ts)}`
    return result;
} 

export const fetchCharacters = async (id) => {
    const url = id ? `characters/${id}` : `characters`
    return await fetch(setUrl(url))
}

export const fetchComics = async (id) => {
    const url = id ? `comics/${id}` : `comics`
    return await fetch(setUrl(url))
}

export const fetchComicsByCharacter = async (characterId) => {
    return await fetch(setUrl(`characters/${characterId}/comics`))
}

export const fetchComicsCharacters = async (comicId) => {
    return await fetch(setUrl(`comics/${comicId}/characters`))

}
