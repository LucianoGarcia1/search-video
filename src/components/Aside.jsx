import React from 'react';
import { Property } from '../property';

export const Aside = () => {
  const listVideos = React.useContext(Property);

  if(listVideos.dados === null){
    return null

  }else{
    return (
      <aside className="c-aside">
          {
            listVideos.dados.map(({snippet, id}, index) =>(

              <article key={index} className="c-aside__article"
              onClick={()=> {
                listVideos.setVideoid(id.videoId)
                listVideos.setIndex(snippet)}}
              >
                  <img src={snippet.thumbnails.medium.url} alt="thumbnail" />
                
                  <div className="c-aside__details">
                    <h3>{snippet.title}</h3>
                    <p>{snippet.channelTitle}</p>
                  </div>
              </article>
            ))
          }

          <button 
            type="button" 
            className="c-aside__btn"
            title="read more"
          >
            View more
          </button>
      </aside>
  )
}
}
