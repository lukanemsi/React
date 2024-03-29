import React from "react";
import { useRouter } from 'next/navigation'
import "@/app/components/model/model.css"

const Comic = ({comic}) => {

    const router = useRouter();

    return <div className="comic" onClick={() => {
            router.push(`/pages/comics/${comic.id}`)
        }
    }>
        <div className="comic-img-wrapper">
            <img src={comic.thumbnail.path + "." + comic.thumbnail.extension} alt="comic" />
        </div>
        <div className="comic-info">
            <h2>{comic.title}</h2>
        </div>
    </div>
}

export default Comic;