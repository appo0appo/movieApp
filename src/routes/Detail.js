import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <img src={movie.background_image_original} alt="title" />

          <a href={movie.url}>
            <h2>Go To Detail</h2>
          </a>
          <a href={movie.torrents[1].url}>
            <h2>Go To Download</h2>
          </a>
        </div>
      )}
    </div>
  );
}
export default Detail;
