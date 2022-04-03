import React from 'react'
// import { useSelector } from 'react-redux';
import type { NextPage } from 'next'
import Image from 'next/image';
import { useRouter } from 'next/router';
import axios from 'axios';
import Layout from '../../components/Layout';
import backIcon from '../../assets/icons/back-icon-solid-white.svg';
import blankPoster from '../../assets/images/blank-profile.jpg';
import starIcon from '../../assets/icons/star-regular.svg';

interface ShowDetail {
  id?: number;
  name?: string;
  firstName?: string;
  image?: object;
  summary?: string;
  average?: number;
  data?: any;
  casts?: any;
}

const Detail: NextPage<ShowDetail> = ({
data,
casts
}) => {
  const router = useRouter();
  const htmlParser = data?.summary?.replace(/<\/?[^>]+(>|$)/g, "")

  return (
    <Layout>
      <div className='detail'>
        <Image 
          className='detail_image'
          src={backIcon}
          width={24}
          height={24}
          alt='Back icon'
          onClick={()=> router.push('/')}
        />
        <div className='detail_header'>
          <div className='detail_header_image'>
          <Image 
          src={data.image?.medium} 
          alt={data?.name} 
          width={240}
          height={340}
          />
          </div>
          <div className='detail_header_info'>
            <div className='detail_header_info_title'>
              <h2>{data?.name}</h2>
              <div className='detail_header_info_title_average'>
               { data.rating?.average &&
               <>
                <Image
                  src={starIcon.src}
                  alt='star icon'
                  width={16}
                  height={16}
                />
                <span>
                  {data.rating?.average}
                </span>
                </>
                }
              </div>
            </div>
            <br />
            <p>{htmlParser}</p>
            <br />
            <p>
              {data.genres?.length > 0 && <strong>Genres: </strong>}
              {data?.genres.map((genre: any, index: number) => (
                 <span key={index}>{genre + (index === data.genres?.length - 1 ? '' : ', ')}</span>
              ))}
            </p>
            <p>
              
              {data.country?.name && <strong>Network: </strong>}
              {data.country?.name}
            </p>
            <p>
              {data.schedule?.time && <strong>Schedule: </strong>}
               {data.schedule?.time}
            </p>
            <p>
             <strong>Original release:</strong> 
              {` ${new Date(data?.premiered).getFullYear() || ""}/
              ${new Date(data?.ended).getFullYear() || ""}
              `}
            </p>
            <p>
              {data?.status && <strong>Status: </strong>}
              {data?.status || ""}
            </p>
            <p>
              {data?.language && <strong>Language: </strong>}
              {data?.language || ""}
            </p>
          </div>
        </div>
          <h2>
            {
              casts?.length > 0 && 'Cast'
            }
          </h2>
        <div className='detail_cast'>
          {casts?.map((cast:any, index: number)=>(
            <div className='detail_cast_item' key={index}>
              <span>{cast.person.name}</span>
              <Image 
              width={240}
              height={340}
              src={cast.person.image?.medium ? cast.person.image?.medium : blankPoster.src} 
              alt={cast.person.name} 
              />
            </div>
          ))}

        </div>
      </div>
    </Layout>
  )
}

export default Detail

export async function getServerSideProps(context: any) {
  const result = await  axios(`https://api.tvmaze.com/shows/${context.params.id}`)
  const resultCast = await  axios(`https://api.tvmaze.com/shows/${context.params.id}/cast`)
  return { props: { data: result.data, casts: resultCast.data },
  notFound: false}
  }