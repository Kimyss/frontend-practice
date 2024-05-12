function Avartar(props) {
  console.log(props);
  return (
    <img
      className="avartar"
      src={props.user.avartarUrl}
      alt={props.user.name}
      style={{
        width: 50,
        height: 50,
        borderRadius: '50%'
      }}
    />
  );
};

export default Avartar;