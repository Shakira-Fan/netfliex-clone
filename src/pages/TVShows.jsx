import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { fetchMovies, getGenres } from '../store';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import styled from 'styled-components';
import { NavBar } from '../components/NavBar';
import Slider from '../components/Slider';
import NotAvailable from '../components/NotAvailable';
import SelectGenre from '../components/SelectGenre';

export default function TVShows() {
  const [isScrolled, setIsScrolled] = useState(false);
//   const navigate = useNavigate();
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null)
  };

  useEffect(() => {
    dispatch(getGenres());
  },[dispatch]);

  useEffect(()=>{
    if (genresLoaded) dispatch(fetchMovies({type:"tv"}))
  },[genresLoaded,dispatch])

  onAuthStateChanged(firebaseAuth,(currentUser) => {

  })

  return (
    <Container>
        <div className="navbar">
            <NavBar isScrolled={isScrolled}/>
        </div>
        <div className="data">
        <SelectGenre genres={genres} type={"tv"}/>
            { movies.length ? <Slider movies={movies}/> : <NotAvailable/>}
        </div>
    </Container>
  )
}

const Container= styled.div`

 .data {
    margin-top: 8rem;
    .not-available {
        text-align: center;
        color: white;
        margin-top: 4rem;
    }
 }
`
