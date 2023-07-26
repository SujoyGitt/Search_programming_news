import { useGlobalContext } from "./context";

let Search = () => {
  const { query,searchPost } = useGlobalContext();

  return (
    <>
      <div className="search">
        <input
          type="search"
          placeholder="Search Any type News 📰 📹..."
          onChange={(e) => searchPost(e.target.value)}
          value={query}
        />
        <br />
        <br />
      </div>
    </>
  );
};
export default Search;
