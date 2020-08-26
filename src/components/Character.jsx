import React from "react";
import Summary from "./Summary";
import { useHttp } from "../hooks/HttpHook_Character";

const Character = ({ selectedCharacters }) => {
  
  const [isLoading, loadedCharacter] = useHttp("https://swapi.dev/api/people/", selectedCharacters)


  let content = <p>Loading Character...</p>;

  if (!isLoading && loadedCharacter) {
    content = <Summary {...loadedCharacter} />;
  } else {
    content = <p>Failed to fetch character</p>;
  }

  return content;
};

export default Character;
