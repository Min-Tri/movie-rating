import React from "react";

// styles
import { Content, Wrapper } from "./NotFound.styles";

// image
import notFound from '../images/404.jpg'

const NotFound=()=>(
    <Wrapper image={notFound}>
       <Content>
            <div className="title">404</div>
            <div className="subtitle">NOTHING FOUND</div>
            <div className="description">You are on the wrong path. Try to navigate to Home</div>
        </Content>
    </Wrapper>
)

export default NotFound