import React from 'react';
import styled from 'styled-components';
import {BsArrowLeft}from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export const Player = () => {
  const navigate= useNavigate();

  return (
    <Container>
        <div className="player">
            <div className="back">
                <BsArrowLeft onClick={()=> navigate(-1)}/>
            </div>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/gset79KMmt0?si=VLE_J4biW3SzUaJJ?mute=1&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='video'></iframe>
        </div>

    </Container>
  )
}

const Container = styled.div`
    .player {
        width:100vw;
        height:100vh;
        .back {
            position:absolute;
            padding: 2rem;
            z-index:1;
            svg {
                font-size:3rem;
                cursor:pointer;

            }
        }
        video {
            object-fit: cover;
        }
    }
`;