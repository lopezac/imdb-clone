import TopNavbar from "./TopNavbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Main from "./Main";

function MoviePage({ data }) {
  console.log("data at movie page", data);

  if (!data) return;
  return (
    <div>
      <TopNavbar />
      <Hero data={data} />
      <Main data={data} />
      <Sidebar />
    </div>
  );
}

export default MoviePage;
