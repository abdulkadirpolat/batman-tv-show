import React from 'react'
import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { changeShowData } from '../redux/actions/showActions'
import ShowCard from '../components/ShowCard' 
import Layout from '../components/Layout'
interface Shows {
  data?: any;
  show?: any;
  id?: number;
  name?: string;
  firstName?: string;
  image?: object;
  summary?: string;
  average?: number;
  country?: string;
  releaseDate?: {
    premiered?: string;
    ended?: string;
  };
  dataList?: Array<any>;
}

const Home: NextPage<Shows> = ({data}) => {
  const dispatch = useDispatch()

  return (
    <Layout>
    <Head>
    <title>Batman Tv Shows</title>
    <meta name="description" content="Single page application showing batman tv shows" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>Batman Tv Shows</h1>
    <div className="show_card_container" >
      {data.map((movieDetail: Shows) => (
          <Link key={movieDetail.show.id} href="/detail/[id]" as={`/detail/${movieDetail.show.id}`}>
            <a onClick={()=>{
              const showMovie = {
                ended: movieDetail.show.ended,
                premiered: movieDetail.show.premiered,
                genres: movieDetail.show.genres,
                language: movieDetail.show.language,
                schedule: movieDetail.show.schedule,
                img: movieDetail.show.image,
                name: movieDetail.show.name,
                summary: movieDetail.show.summary,
                average: movieDetail.show.rating.average,
                id: movieDetail.show.id,
                country: movieDetail.show.country,
                status: movieDetail.show.status,
              }
              dispatch(changeShowData({
                showMovie
              }))
            }}>
             <ShowCard 
                alt={movieDetail.show.name}
                src={movieDetail.show.image.medium}
                name={movieDetail.show.name}
                country={movieDetail.show.network?.country.code}
                genres={movieDetail.show.genres}
                releaseDate={{
                premiered:  new Date(movieDetail.show.premiered).getFullYear(),
                ended: new Date(movieDetail.show.ended).getFullYear(),
                }}
                averageRating={movieDetail.show.rating.average}
              />
            </a>
          </Link>
      ))}
    </div>
    </Layout>
  )
}

export default Home

export async function getServerSideProps() {
const result = await  axios('http://api.tvmaze.com/search/shows?q=batman')
return { props: { data: result.data },
notFound: false}
}