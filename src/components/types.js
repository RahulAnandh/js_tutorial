const TypesIndex = ()=> {
    let x = 0;
    var y = 1;
    const z = 2;
   const function1 = () => {
    y=3
    console.log(x,y,z);
  
   }
   const function2 = () => {
    y=4
    console.log(x,y,z);
  
   }
   const function3 =() => {
    y=5
    console.log(x,y,z);
  
   }
  function1();
  function2();
  function3();
    return <>
    TypesIndex
    </>
}
export default TypesIndex