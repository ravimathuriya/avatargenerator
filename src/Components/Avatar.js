import React, { useEffect, useState } from 'react'

function Avatar() {
    const [style, setStyle] = useState("adventurer");
    const [seed, setSeed] = useState("0");
    const [imgsrc, setImgsrc] = useState(`https://api.dicebear.com/9.x/${style}/svg/seed=${seed}`);

    const api = async () => {
        const response = await fetch(`https://api.dicebear.com/9.x/${style}/svg/seed=${seed}`)
        setImgsrc(response.url)
    }

    const handleNext  = () =>{
        const number = Math.floor(Math.random()*1000)
        setSeed(number)
    }

    const handleAvtarStyle = (style) => {
        setStyle(style)
    }


    useEffect(() => {
        api()
    })



    return (
        <>
            <div id="avatar">
                <h1 className='my-4'>Random Avatar Generator</h1>
                <div className="my-5">
                    <button type="button" className={style==="adventurer"?"btn dark mx-2":"btn btn-light mx-2"} onClick={() => handleAvtarStyle("adventurer")}>Adventurer</button>
                    <button type="button" className={style==="avataaars"?"btn dark mx-2":"btn btn-light mx-2"} onClick={() => handleAvtarStyle("avataaars")}>Avataaars</button>
                    <button type="button" className={style==="big-smile"?"btn dark mx-2":"btn btn-light mx-2"} onClick={() => handleAvtarStyle("big-smile")}>Big Smile</button>
                    <button type="button" className={style==="bottts"?"btn dark mx-2":"btn btn-light mx-2"} onClick={() => handleAvtarStyle("bottts")}>Bottts</button>
                    <button type="button" className={style==="croodles"?"btn dark mx-2":"btn btn-light mx-2"} onClick={() => handleAvtarStyle("croodles")}>Croodles</button>
                    <button type="button" className={style==="fun-emoji"?"btn dark mx-2":"btn btn-light mx-2"} onClick={() => handleAvtarStyle("fun-emoji")}>Fun Emoji</button>
                    <button type="button" className={style==="lorelei"?"btn dark mx-2":"btn btn-light mx-2"} onClick={() => handleAvtarStyle("lorelei")}>Lorelei</button>
                    <button type="button" className={style==="micah"?"btn dark mx-2":"btn btn-light mx-2"} onClick={() => handleAvtarStyle("micah")}>Micah</button>
                    <button type="button" className={style==="notionists"?"btn dark mx-2":"btn btn-light mx-2"} onClick={() => handleAvtarStyle("notionists")}>Notionists</button>
                    <button type="button" className={style==="personas"?"btn dark mx-2":"btn btn-light mx-2"} onClick={() => handleAvtarStyle("personas")}>Personas</button>
                </div>

                <div className="avatargen">
                    <img src={imgsrc} alt="avtar" />
                </div>

                <div className="manage my-4">
                <a href={`https://api.dicebear.com/9.x/${style}/svg/seed=${seed}`} download="Avatar.svg" target="_blank"  rel="noreferrer">
                <button type="button" className="btn btn-danger mx-2">Downlod</button>
                </a>
                <button type="button" className="btn btn-success mx-2" onClick={()=>handleNext()}>Next</button>
                </div>

            </div>
        </>
    )
}

export default Avatar
