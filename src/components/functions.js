const FunctionIndex = () => {
    let a = 10;
    let b = 20;
    const multiplication = (num1,num2) => {
        return num1 * num2;
    }
    return (
    <div>
        {multiplication(a,b)}
    </div>);
}
export default FunctionIndex;