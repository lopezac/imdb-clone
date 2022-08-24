import TMDBLogo from "../../Assets/Images/TMDB-logo.svg";

export default function LeftNav() {
  return (
    <nav>
      <img src={TMDBLogo} alt="TMDB logo" width="154" />
      <p>Movies</p>
      <p>TV Shows</p>
      <p>People</p>
      <p>More</p>
    </nav>
  );
}
