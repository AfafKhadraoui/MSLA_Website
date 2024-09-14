import SearchBar from "../containers/SearchBar";
import HomeTop from "../containers/HomeTop.jsx";
import Category from "../containers/Category.jsx";
import Comment from "../containers/Comments.jsx";
import HomeMiddle from "../containers/HomeMiddle.jsx";
function Home() {
  return (
    <div>
      <SearchBar />
      <HomeTop />
      <Category />
      <HomeMiddle />
      <Comment />
    </div>
  );
}
export default Home;
