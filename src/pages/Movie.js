import React, { useEffect } from "react";
import { useParams } from "react-router";

// connfig
import { IMAGE_BASE_URL,POSTER_SIZE } from "../config";

// components
import Grid from "../components/Grid";
import Spinner from "../components/Spinner";
import BreadCrumb from "../components/BreadCrumb";
import MovieInfo from "../components/MovieInfo";
import MovieInfoBar from "../components/MovieInfoBar";
import Actor from "../components/Actor";

// hooks
import { useMovieFetch } from "../hooks/useMovieFetch";
// import { useDocumentTitle } from "../hooks/useDocumentTitle";

// image
import NoImage from '../images/no_image.jpg'

const Movie=()=>{
    const {movieId}=useParams()
    
    const {state:movie,loading,error}=useMovieFetch(movieId)
    
    // console.log(movieId)

    useEffect(()=>{
        document.title = movie.original_title
        // console.log(movie.original_title)
    },[movie])

    if(loading)return<Spinner/>
    if(error)return<div>Something went wrong...</div>

    return(
        <div>
            <BreadCrumb movieTitle={movie.original_title}/>
            <MovieInfo movie={movie}/>
            <MovieInfoBar 
                time={movie.runtime} 
                budget={movie.budget} 
                revenue={movie.revenue}
            />
            <Grid header='Actors'>
                {movie.actors.map(actor=>(
                    <Actor
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={
                            actor.profile_path
                            ?`${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                            :NoImage
                        }
                    />
                ))}
            </Grid>
        </div>
    )
}


export default Movie