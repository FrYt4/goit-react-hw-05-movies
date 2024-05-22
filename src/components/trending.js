import { Link } from "react-router-dom";
import css from "../css/app.module.css"

export const trending = (setMovies) => {
    const options={
     method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2M5MzBkOWVlMjFkYTk0ZjhmYzMyNTdkMzg3ZWNlZCIsInN1YiI6IjY1ZTlhZDJhNmEyMjI3MDE4Njk2NTExNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j1C6buHnPvlB2eInbvledvTmiFFIKSym7oMjouLo9AE'
  }
  }
  fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
        .then(response => response.json())
      .then(data => {
            console.log(data)
            const markup = data.results.map(movie => {
                if ('original_title' in movie) {
                    return (
                        <li className={css.points} key={movie.id} id={movie.id}>
                            <Link className={css.moviePoints} to={`/movies/${movie.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt=''></img>
                                {movie.title}</Link>
                        </li>
                    );
                } else if ('original_name' in movie) {
                    return (
                        <li className={css.points} key={movie.id} id={movie.id}>
                            <Link className={css.moviePoints} to={`/movies/${movie.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt=''></img>
                                {movie.name}</Link>
                        </li>
                    );
                }
                return null;
            });

            setMovies(markup);
        })
        .catch(err => console.error(err));
}