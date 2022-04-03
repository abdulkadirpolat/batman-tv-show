import Image from 'next/image';
import React,{ FC } from 'react'
import { ShowCardProps } from './ShowCard.types';

const ShowCard: FC<ShowCardProps> = ({
  name,
  src,
  alt,
  country,
  releaseDate,
  genres,
  averageRating,

}) => {
  return (
    <div className='show_card'>
      <Image 
      src={src || 'https://via.placeholder.com/240x340'} 
      alt={alt}
      width={300}
      height={400}
      />
      <div className='show_card_info'>
        <div className='show_card_info_header'>
          <span>
            {country ? country + ", " : ''}
          </span> 
          <span>
            {releaseDate?.premiered+"-"+releaseDate?.ended}
          </span>
        </div>
        <h2 className='show_card_info_title'>{name}</h2>
        <p className={`show_card_info_rating ${averageRating === null ? "display_none" : ""}`}>
          {averageRating}/10
        </p>
        <p className='show_card_info_genres'>
        {
          genres.map((item:string,index:number)=>(
            <span key={index}>{item + (index === genres.length-1 ? '' : ', ')}</span>
          ))
        }
        </p>
      </div>
      
    </div>
  )
}

export default ShowCard