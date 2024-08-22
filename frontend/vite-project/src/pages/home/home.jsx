import Banner from "../../component/banner/banner";
import ImageBanner from "../../assets/image_kasa/Banner.png";
//import CardsContainer from "../../component/cardContainer"
import { useState, useEffect } from "react";
import Card from "../../component/card/card";

/*function CardsContainer() {
  
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
  const [data, setData] = useState([]);
  // to avoid multiple api requests
  useEffect(() => {
    let isMounted = true;
    fetch("http://localhost:8080/api/properties")
      .then((res) => res.json())
      .then((json) => {
        if (isMounted) setData(json);
      });
  });

  return (
    <>
      <Banner
        bannerImage={ImageBanner}
        bannerTitle="Chez vous, partout et ailleurs"
      />
      <div className="card-container">
        <div className="cards">
          {data.map((card) => (
            <Card card={card} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
