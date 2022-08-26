import { List } from "../../Assets/Styles/List";
import { ListDiv } from "./FooterStyle";
import { ListTitle } from "../../Assets/Styles/Para";

export default function ListsColumns() {
  const data = {
    "The Basics": [
      "About TMDB", "Contact Us", "Support Forums", "API", "System Status"
    ],
    "Get Involved": [
      "Contribution Bible", "Add New Movie", "Add New TV Show"
    ],
    "Community": [
      "Guidelines", "Discussions", "Leaderboard", "Twitter"
    ],
    "Legal": [
      "Terms of Use", "API Terms of Use", "Privacy Policy"
    ]
  };

  return (
    <>
      {Object.entries(data).map((column) => {
        return (
          <ListDiv>
            <ListTitle>{column[0]}</ListTitle>
            <List>
              {column[1].map((row) => {
                return <li>{row}</li>;
              })}
            </List>
          </ListDiv>
        );
      })}
    </>
  );
};
