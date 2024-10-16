const DataTypes = () => {
    const new_date = new Date();
    const name = "Rahul";
    const age = 3;
    const count = 2;
    let no_value;
    console.log('DATA_TYPE OBJECT:',new_date)
    console.log(name+age);
    console.log(age+name);
    console.log(age+name);
    console.log(age+count+name);
    console.log(name+count+age );
    console.log(age == count );
    console.log(no_value);
    console.log("EXPONENTIATION:",age ** count);


    return <>Data Types</>
}
export default DataTypes;