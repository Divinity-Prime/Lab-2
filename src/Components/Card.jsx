export default function Card(hotel) {
  return (
    <div className={"card"}>
      <img src={hotel.image} alt="" width="180px" />
      <h2>{hotel.place}</h2>
      <p>{hotel.name}</p>
      {hotel.rating < 4 ? (
        <p style={{ color: "red" }}>{hotel.rating} ★</p>
      ) : (
        <p style={{ color: "green" }}>{hotel.rating} ★</p>
      )}
      <p>{hotel.price}</p>
    </div>
  );
}
