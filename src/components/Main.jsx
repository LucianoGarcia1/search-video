import React from 'react';
import { Property } from '../property';

export const Main = () => {

  const info = React.useContext(Property);
  const urlVideo = `http://www.youtube.com/embed/${info.videoid}?enablejsapi=1`;

  const download = `https://ssyoutube.com/watch?v=${info.videoid}`;

  if(info.videoid !== "")
  return (
    <main className="c-main">
      <iframe 
        id="player" 
        type="text/html"
        src={urlVideo}
        frameBorder="0"
        className="c-main__video"
        title="vídeo"
      />

        <div className="c-main__details">
          <h2 className="c-main__title">
            {info.index.title}
          </h2>
          <p className="c-main__descripion">
            {info.index.description}
          </p>

          <a 
            href={download}  
            className="c-main__download"
            >Download</a>
        </div>
    </main>
  )
}
