const ObjectIndex = () => {
  const car_object = {
    name: "Ford",
    color: "Red",
    tire: 4,
    seat: 6,
    airbag: true,
    phone: {
      phone1: "8921970340",
      phone2: "8921970341",
    },
    showProparties: function () {
      return "Numbers are" + this.phone.phone1 + " " + this.phone.phone2;
    },
    convertUpperCase: function (conv_string) {
      return conv_string.toUpperCase();
    },
  };
  car_object.seat = 4;
  console.log(car_object);
  delete car_object.airbag;
  console.log(car_object);
  delete car_object["tire"];
  console.log(car_object);
  console.log(car_object["phone"]["phone1"]);
  console.log(car_object.showProparties());
  console.log(car_object.convertUpperCase("hai hallow"));
  return (
    <div>
      {car_object.name}:{car_object.seat} seats with {car_object.color} color
      <br />
      {car_object.showProparties()}
    </div>
  );
};
export default ObjectIndex;
