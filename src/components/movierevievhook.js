export const MovieRevievsData=(movieId, setRevievs)=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2M5MzBkOWVlMjFkYTk0ZjhmYzMyNTdkMzg3ZWNlZCIsInN1YiI6IjY1ZTlhZDJhNmEyMjI3MDE4Njk2NTExNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j1C6buHnPvlB2eInbvledvTmiFFIKSym7oMjouLo9AE'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data.results[0].author)
            let markup=data.results.map((result, index)=>(
                <div>
                    <li key={index}>Author: {result.author}</li>
                    <p>{result.content}</p>
                </div>
            ))
            setRevievs(markup)}
        )
        .catch(err => console.error(err));
}