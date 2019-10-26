import React from 'react';

// {
//   "name": "Idris Elba",
//   "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
//   "popularity": 11.622713
// }
function CelebrityCard(props) {
  let { name, pictureUrl, popularity, onDelete } = props

  return (
    <div>
      Name: {name}
      Picture: <img width="100px" src={pictureUrl} />
      popularity: {popularity}
      <button onClick={onDelete}>DELEEEETE</button>
    </div>
  )

}

export default CelebrityCard