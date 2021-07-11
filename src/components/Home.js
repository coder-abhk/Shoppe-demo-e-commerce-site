import TrendingPage from "./TrendingPage";
import Banner from "./Banner";

const Home = () => {
  const styles = {
    width: "100%",
    marginTop: "3em",
    textAlign: "center",
  };

  return (
    <>
      <TrendingPage />
      <Banner />
      <div style={styles} className="comming_soon">
        <h1>COMMING SOON...</h1>
        <br></br>
      </div>
    </>
  );
};

export default Home;
