import './title.css';



// eslint-disable-next-line react/prop-types
function Title({ data }) {
    const currentHostInformation = data ;
    console.log(currentHostInformation.titleLength);
    
    return (
      
          <div className="information">
            <p className= "information-title"  title= {currentHostInformation.title}>{currentHostInformation.title}</p>
            <p className="information-location">{currentHostInformation.location}</p>
            
          </div>
        
    );
  }
  
  export default Title;