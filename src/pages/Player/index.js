import Banner from "components/Banner";
import styles from "./Player.module.css"
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import NotFound from "pages/NotFound";
import { useEffect, useState } from "react";

function Player () {
const [video, setVideo] = useState([]);



const parametros = useParams();
useEffect(() => {
    fetch(`https://my-json-server.typicode.com/Sergardo12/Alura-cinema-api/videos?id=${parametros.id}`)//le estamos diciendoq ue queremos un videdo con un determinado i que le vamos a pasare por parametro
     .then(response => response.json())
     .then(data => {
        setVideo(...data) //desparramamos las propiedaddes del objeto
     })
}, [])

// const video = videos.find( video=> video.id === Number(parametros.id))
if(!video.id) return <NotFound/>
    return (
        <> 
            <Banner img = "player" color = "#58B9AE"/>
            <Titulo>
                <h1>Player</h1>
            </Titulo>   
            <section className={styles.container}>
            <iframe width="100%" height="100%" 
            src={video.link}
            title={video.titulo}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </section>    
        
        </>
      
    )
}
export default Player;