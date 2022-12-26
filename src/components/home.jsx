import React from 'react';
import {Link} from 'react-router-dom';
import Header from './header';
import './about'
import './styles.css';
// import styled, { keyframes } from 'styled-components';
import  bishop from'../photos/bishop.jpg';
// import Nav from './nav';
// import {Link} from react-router-dom;

const Home = () =>{
    return(
        <div>
            <Header />

            <div class="home-section section show" id="home">
            {/* <div class="effect-wrap">
                <div class="effect effect-1"></div>
                <div class="effect effect-2">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="effect effect-3"></div>
                <div class="effect effect-4"></div>
            </div> */}
            
            <div className="container">
            <div className="row full-screen align-items-center">
                <div className="home-text">
                <p>Hello&#128578;</p>
                <h1>I'm Akin-Thomas Bishop Abimbola...</h1>
                <h2> FrontEnd Developer | Web3 Developer</h2>
                {/* <a href="/about" class="mee link-item"> More About me</a> */}
                <Link className='mee' to= "/about">More about me</Link>
                </div>
                <div className="home-img">
                <div className="img-box">
                    <img src={bishop} alt ="bishop pic"/>
                </div>
                </div>
            </div>
            </div>
            </div>
            {/* <Nav /> */}
        </div>
    );
}

// const spin = keyframes `
//     from{
//         transform: rotate(0deg);
//     }
//     to{
//         transform: rotate(360deg)
//     }
// `;

// const effect1 = styled.div `
//     animation-name: ${spin};
//     animation-duration: 1s;
// `;
export default Home;