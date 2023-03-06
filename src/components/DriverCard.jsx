import Rating from './Rating';

function DriverCard(props) {
  const { name, rating, img, car } = props;

  return (
    <>
      <div className="driver-container">
        <div>
          <img className="profile-image" src={img} alt="person" width="100px" />
        </div>
        <div className="driver-info">
          <h4>{name}</h4>
          <Rating>{rating}</Rating>
          <p>
            {car.model}-{car.licensePlate}
          </p>
        </div>
      </div>
    </>
  );
}

export default DriverCard;
