
import useGenres from "../hooks/useGenres";

const Gener = () => {
  const { data } = useGenres();
  return (
    <div>
      {data.map((genre) => (
        <h1>{genre.name}</h1>
      ))}
    </div>
  );
};

export default Gener;
