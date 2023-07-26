import Search from "./Search";
import { Pagination } from "./Pagination";
import { Stories } from "./Stories";

const App = () => {
  return (
    <>
      <h1 className="headerText">Welcome to Searchnews Website</h1>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
};
export default App;
