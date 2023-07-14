import { useRef } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { Routes, Route, NavLink, Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import React from "react";
const LazyTriviaQuiz = React.lazy(() => import("./TriviaQuiz"));
const LazySportsQuiz = React.lazy(() => import("./SportsQuiz"));
const LazyMusicQuiz = React.lazy(() => import("./MusicQuiz"));
const LazyMoviesQuiz = React.lazy(() => import("./MoviesQuiz"));
const NavBar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <>
      <header>
        <nav ref={navRef} className="navbar">
          <NavLink to="/" className="nav-link">
            Trivia Quiz
          </NavLink>
          <NavLink to="/SportsQuiz" className="nav-link">
            SportsQuiz
          </NavLink>
          <NavLink to="/MusicQuiz" className="nav-link">
            MusicQuiz
          </NavLink>
          <NavLink to="/MoviesQuiz" className="nav-link">
            MoviesQuiz
          </NavLink>
        </nav>
        <button className=" btn " onClick={showNavbar}>
          <Hamburger
            direction="right"
            color="black"
            easing="ease-in"
            duration={0.7}
          />
        </button>
      </header>

      <Outlet />
      <AnimatePresence initial={false}>
        <Routes>
          <Route
            path="/"
            index
            element={
              <React.Suspense fallback="loading">
                <LazyTriviaQuiz />
              </React.Suspense>
            }
          />
          <Route
            path="/SportsQuiz"
            index
            element={
              <React.Suspense fallback="loading">
                <LazySportsQuiz />
              </React.Suspense>
            }
          />
          <Route
            path="/MusicQuiz"
            index
            element={
              <React.Suspense fallback="loading">
                <LazyMusicQuiz />
              </React.Suspense>
            }
          />
          <Route
            path="/MoviesQuiz"
            index
            element={
              <React.Suspense fallback="loading">
                <LazyMoviesQuiz />
              </React.Suspense>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default NavBar;
