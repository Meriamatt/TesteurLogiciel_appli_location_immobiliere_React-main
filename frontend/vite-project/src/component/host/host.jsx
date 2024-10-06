import "./host.css"


// eslint-disable-next-line react/prop-types
function Host({ data }) {
  const currentHost = data ;
  console.log(currentHost);
  return (
    
        <div className={ currentHost.titleLength < 25  ? "host" : "host-long-title"} >
          <p className="host-name">{currentHost.host.name}</p>
          <img
            className="host-picture"
            src={currentHost.host.picture}
            alt={currentHost.host.name}
          />
        </div>
      
  );
}

export default Host;
