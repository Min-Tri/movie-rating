import React, { useContext } from "react";
import PropType from 'prop-types';

// components
import Thumb from '../Thumb'
import Rate from "../Rate";

// config
import { IMAGE_BASE_URL,POSTER_SIZE } from "../../config";

// Image
import NoImage from '../../images/no_image.jpg'

// styles
import { Wrapper,Content,Text } from "./MovieInfo.styles";

// context
import { Context } from "../../context";

// API
import API from "../../API";

const MovieInfo=({movie})=>{
    const [user]=useContext(Context)

    const handleRating=async value=>{
        const rate=await API.rateMovie(user.sessionId,movie.id,value)
        console.log(rate)
    }
    
    return(
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb
                image={
                    movie.poster_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                    :NoImage
                }
                clickable={false}
                />
            <Text>
                <h1>{movie.title}</h1>
                <h3>PLOT</h3>
                <p>{movie.overview}</p>

                <div className="rating-directors">
                    <div className="rating">
                        <h3>RATING</h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>
                    <div className="director">
                        <h3>DIRECTOR{movie.directors.length>1?'S':''}</h3>
                        {movie.directors.map(director=>(
                            <p key={director.credit_id}>{director.name}</p>
                            ))}
                    </div>
                </div>
                {user &&(
                    <div>
                        <p>Rate movie</p>
                        <Rate callback={handleRating}/>
                    </div>
                )}
            </Text>
        </Content>
    </Wrapper>
    )
}

MovieInfo.propTypes={
    movie:PropType.object,
}

export default MovieInfo