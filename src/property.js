import React, { useEffect } from "react";
import { youtubeApi } from "./api/api";
import { key } from "./api/auth";

export const Property = React.createContext();

export const StorageProperty = ({children})=>{

    const [dados, setDados] = React.useState(null);
    const [input, setInput] = React.useState("");
    const [video, setVideo] = React.useState(null);
    const [videoid, setVideoid] = React.useState("");
    const [index, setIndex] = React.useState(null);

    useEffect(()=> {
        const getDados = async ()=> {
            try {
               const response = await youtubeApi.get(`/search?part=snippet&q=${input}&maxResults=6&key=${key}`)
               const Jbody = await response.data;
               setDados(Jbody.items)
            } catch (error){
               console.log(error);
            }
        }
        getDados();
    }, [input])


    useEffect(() =>{
        const getVideo = async()=>{
            try {
                const videoRes = await youtubeApi.get(`/videos?part=snippet&id=${videoid}&key=${key}`)
                const jVideo = await videoRes.data.items[0];
                setVideo(jVideo);

             } catch (error){
                console.log(error);
             }
        }

        getVideo();
    }, [videoid])

    return(
        <Property.Provider value={{input, setInput, dados, setDados, videoid, setVideoid, video, setVideo, index, setIndex}}>
            {children}
        </Property.Provider>
    );
}