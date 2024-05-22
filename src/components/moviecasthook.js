
export const MovieCastData=(movieId, setCast)=>{
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2M5MzBkOWVlMjFkYTk0ZjhmYzMyNTdkMzg3ZWNlZCIsInN1YiI6IjY1ZTlhZDJhNmEyMjI3MDE4Njk2NTExNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j1C6buHnPvlB2eInbvledvTmiFFIKSym7oMjouLo9AE'
  }
};

fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, options)
  .then(response => response.json())
  .then(data => {
    let markup = data.cast.map((cast, index) => (
      <div key={index}>
        <img src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt="aaa"></img>
        <p>{cast.name}</p>
        <p>Character: {cast.character}</p>
      </div>
    ));
      setCast(markup)
    })
  .catch(err => console.error(err));
    
}