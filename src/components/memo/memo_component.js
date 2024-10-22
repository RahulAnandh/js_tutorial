const MemoComponant = (props) => {
  return <div>{props.count}</div>;
};
export default memo(MemoComponant);
