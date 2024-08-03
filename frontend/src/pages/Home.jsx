import Item from "../Components/item";
import Banner from "../Components/Banner";
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
