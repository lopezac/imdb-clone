import { SubTitle, Title } from "../../Assets/Styles/Para";
import { HomeSearchBar } from "../../Assets/Styles/SearchBar";
import SearchBar from "../Input/SearchBar";
import { HeroDiv, HeroWrapper } from "./Home";

function Hero() {
  return (
    <HeroDiv>
      <HeroWrapper>
        <Title>Welcome.</Title>
        <SubTitle>
          Millions of movies, TV shows and people to discover. Explore now.
        </SubTitle>
        <HomeSearchBar>
          <SearchBar />
        </HomeSearchBar>
      </HeroWrapper>
    </HeroDiv>
  );
}

export default Hero;
