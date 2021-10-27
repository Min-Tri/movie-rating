import React from "react";

import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, TMDBLogoImg} from './Footer.styles';



const Footer =()=>{


    return (
        <Wrapper>
            <Content>
                <TMDBLogoImg src={TMDBLogo}/>
                <p>Made with love by Min-Tri</p>
            </Content>
        </Wrapper>
    )
}

export default Footer