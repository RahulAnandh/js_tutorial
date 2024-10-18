const ObjectIndex = () => {
  const car_object = {
    name: "Ford",
    color: "Red",
    tire: 4,
    seat: 6,
    airbag: true,
    showProparties: () => {
      return <div>hai</div>;
    },
  };
  car_object.seat = 4;
  return (
    <div>
      {car_object.name}:{car_object.seat} seats with {car_object.color} color
      {car_object.showProparties()}
    </div>
  );
};
export default ObjectIndex;
