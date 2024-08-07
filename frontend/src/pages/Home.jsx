import Item from "../components/item";
import Banner from "../components/Banner";
const Home = () => {
  return (
    <div className="bg-white/80">
      <div>
        <Banner />
      </div>
      <Item />
    </div>
  );
};

export default Home;
