import Banner from "../../component/banner/banner";
import ImageBanner from "../../assets/image_kasa/Banner.png";
//import CardsContainer from "../../component/cardContainer"

import Card from "../../component/card/card";

/*function getDataCard() {
  
    // Mounted: construction fini du composant
    return () => { isMounted = false };
        
    }, []);

  return (
    <div className="card-container">
      <Card data={data} />
    </div>
  );
}
*/
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
