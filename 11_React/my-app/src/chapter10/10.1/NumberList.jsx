const numbers = [10, 20, 30, 40, 50];

function NumberList() {
  const num = numbers.map((num, index) => {
    return <li key={index}>{num}</li>
  })
  return (
    <>
      <ul>
        <li>{num}</li>
      </ul>

      <ul>
        {numbers.map((num, index) => {
          return <li key={index}>{num}</li>
        })}
      </ul>
    </>
  );
};

export default NumberList;