import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, summary, genres, year, id }) {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        {coverImg === null ? null : <img src={coverImg} alt="title" />}
        <h2>
          {title}({year})
        </h2>
      </Link>
      <p>{summary}</p>
      <ul>
        {genres === undefined ? null : genres.map((g) => <li key={g}>{g}</li>)}
      </ul>
    </div>
  );
} //<Link to="" >는 <a herf=""></a>를 할 때 페이지 전체가 새로고침 되는것을 원하지 않을 때 쓴다.

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
};

export default Movie;
