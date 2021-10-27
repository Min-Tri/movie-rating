import React,{useEffect} from "react";

// config
import {POSTER_SIZE,BACKDROP_SIZE,IMAGE_BASE_URL} from '../config'


// components
import HeroImage from "../components/HeroImage";
import Grid from "../components/Grid";
import Thumb from "../components/Thumb";
import Spinner from "../components/Spinner";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";

// hooks
import { useHomeFetch } from "../hooks/useHomeFetch";
// import { useDocumentTitle } from "../hooks/useDocumentTitle";

// image
import NoImage from '../images/no_image.jpg'

// styles
import { Content, Rate } from "./Home.styles";

const Home=()=>{
    const {state,loading,error,searchTerm,setSearchTerm,setIsLoadingMore}=useHomeFetch()
    // console.log(state)
    // const [documentTitle,setDocumentTitle]=useDocumentTitle("Movie rating")
    useEffect(()=>{
        document.title = 'Movie rating'
        // console.log('Movie rating')
    },[])

    if (error) return <div>Something went wrong ...</div>

    return(
        <div>
            {!searchTerm && state.results[0]&&
               ( <HeroImage
                   image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                   title={state.results[0].original_title}
                   text={state.results[0].overview}
                />)
            }
            <SearchBar setSearchTerm={setSearchTerm}/>
            <Grid header={searchTerm? 'Search Result': 'Popular Movies'}>
                {state.results.map(movie=>(
                    <Content key={movie.id}>
                        
           
                        <Thumb 
                            clickable
                            image={
                                movie.poster_path
                                ?IMAGE_BASE_URL+POSTER_SIZE+movie.poster_path
                                :NoImage
                            }
                            movieId={movie.id}
                        />
 
                        <Rate>{movie.vote_average?movie.vote_average:'N/A'}</Rate>
                    </Content>
                ))}
            </Grid>
            {loading && <Spinner/>}
            {state.page<state.total_pages&&!loading&&(
                <Button text='Load More' callback={()=>setIsLoadingMore(true)}/>
            )}
        </div>
    )
}

export default Home