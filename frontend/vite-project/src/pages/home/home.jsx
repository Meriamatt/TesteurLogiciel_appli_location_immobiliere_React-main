import Banner from "../../component/banner/banner";
import ImageBanner from "../../assets/image_kasa/Banner.png";
import Card from "../../component/card/card";

function Home() {
  

  return (
    <>
      <Banner
        bannerImage={ImageBanner}
        bannerTitle="Chez vous, partout et ailleurs"
      />
      
      <div className="card-container">
      <Card />
    </div>
   
    </>
  );
}

export default Home;
