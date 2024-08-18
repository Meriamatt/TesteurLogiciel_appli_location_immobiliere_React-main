// eslint-disable-next-line react/prop-types
function Host({ data }) {
  const currentHost = data ;
  console.log(currentHost);
  return (
    <div className="carrousel">
      <div className="carrousel-container">
        <div>
          <p>{currentHost.host.name}</p>
          <img
            className="carrousel-image"
            src={currentHost.host.picture}
            alt={currentHost.host.name}
          />
        </div>
      </div>
    </div>
  );
}

export default Host;
