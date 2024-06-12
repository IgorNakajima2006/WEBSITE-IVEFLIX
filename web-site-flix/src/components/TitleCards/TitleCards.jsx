import React, {useEffect, useRef, useState} from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'




const TitleCards = ({title, category}) => {

  const[apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzRmMjQ5Mzc1ZWRhZjVmMzBkZWNmMzk1ZWYxNDM0NCIsInN1YiI6IjY2NjhmNWRhYmE0YmFhMDM2ZDFhMWRjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MNvYMin1K3zprQE-bFFtSeu-qremWNkw21a9odcgWvA'
    }
  };

const handleWheel = (event) =>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY
}
useEffect(() =>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));


  cardsRef.current.addEventListener('wheel', handleWheel);
}, [])

  return (
    <div className='title-cards'>
        <h2>{title?title:"Popular na Iveflix"}</h2>
        <div className="card-list" ref={cardsRef}>
          {apiData.map((card, index) =>{
              return <div className='card' key={index}>
                <img src={`https://image.tmdb.org/t/p/w500` +card.backdrop_path} alt="" />
                <p>{card.original_title}</p>
              </div>
          })}
        </div>
    </div>
  )
}

export default TitleCards