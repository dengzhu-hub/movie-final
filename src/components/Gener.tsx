import React from "react";
import useGenres from "../hooks/useGenres";

const Gener = () => {
  const { genres } = useGenres();
  return (
    <div>
      {genres.map((genre) => (
        <h1>{genre.name}</h1>
      ))}
    </div>
  );
};

export default Gener;
