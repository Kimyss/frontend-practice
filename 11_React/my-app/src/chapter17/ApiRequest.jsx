import { useState } from "react";
import axios from "axios";

function ApiRequest() {
  const [data, setData] = useState(null);

  const handleRequestbyId = (id) => {
    axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleRequestbyIdAsync = async (id) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      setData(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div>
        <button type="button" onClick={() => { handleRequestbyId(21) }}>불러오기</button>
        <button type="button" onClick={() => { setData(null) }}>비우기</button>
        <button type="button" onClick={() => { handleRequestbyIdAsync(10) }}>불러오기Asyncwait</button>
      </div>

      {data && (
        <>
          <textarea cols="70" rows="8" value={JSON.stringify(data, null, 2)} />
          <p>{data.title}</p>
          <img src={data.thumbnailUrl} alt="thumbnailUrl" />
        </>
      )}
    </>
  );
};

export default ApiRequest;