import React, { useContext } from "react";
import { Link } from "react-router-dom";

import RMDBLogo from '../../images/movie-logo.png';

import { Wrapper, Content, LogoImg} from './Header.styles';

// context
import { Context } from "../../context";

const Header =()=>{
    const [user]=useContext(Context)

    return (
    <header>
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg 
                        src={RMDBLogo} 
                        alt='rmdb-logo'
                    />
                </Link>
                {user?(
                    <span className='loggedin'>Login in as: {user.username}</span>
                ):(
                    <Link to='/login'>
                        <span className='login'>Log in TMDB</span>
                    </Link>
                )}
            </Content>
        </Wrapper>
    </header>)
}

export default Header