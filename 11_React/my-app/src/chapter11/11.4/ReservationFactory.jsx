import { useState } from "react";

function ReservationFactory() {
  const [inputs, setInputs] = useState(
    {
      breakfast : false,
      numberOfGuests : 2,
      room : "싱글"
    }
  );

  const {breakfast, numberOfGuests, room} = inputs;  //. 찍기 말구 구조 분해 할당 통해 값 추출
 

  

  const handlInputChange = (e) =>{
    const {type, name, checked, value} = e.target;
    const inputValue = type == 'checkbox'? checked : value;

    const copyInput = {
      ...inputs
    };
    copyInput[name] = inputValue;
    setInputs(copyInput);
  };

  const handleChange = (e) =>{
    e.preventDefault();
    alert(`조식 : ${breakfast} | 투숙객수 : ${numberOfGuests} | 룸타입 : ${room}`);
  };

  return (
    <form>
    <label>
      조식여부 :
      <input 
        type="checkbox"
        name="breakfast"
        checked = {breakfast}
        onChange={handlInputChange}
        />
    </label>

    <br />

    <label>
      투숙객수:
      <input 
        type="number"
        name="numberOfGuests"
        value={numberOfGuests}
        onChange={handlInputChange} />
    </label>

    <br />

    <label>
      룸타입
      <input 
        type="radio"
        name="room"
        checked ={room == '싱글'}
        value= "싱글"
        onChange={handlInputChange} />
      싱글
    </label>

    <label>
      <input 
        type="radio"
        name="room"
        value= "더블"
        checked ={room == '더블'}
        onChange={handlInputChange} />
      더블
    </label>

    <label>
      <input 
      type="radio"
      name="room"
      value="트윈"
      checked ={room == '트윈'}
      onChange={handlInputChange} />
      트윈
    </label>
    <br />
    <button type="submit" onClick={handleChange}> 전송button submit</button>

  </form>
  );
};

export default ReservationFactory;