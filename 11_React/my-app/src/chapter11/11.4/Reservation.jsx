import { useState } from "react";

function Reservation() {
  const [breakfast, setBreakfast] = useState(false);
  const handleBreakfastChange = (e)=>{
    setBreakfast(e.target.checked); 
  };

  const [numberOfGuests, setNumberOfGuests] = useState('');
  const handleGuest = (e) =>{
    setNumberOfGuests(e.target.value);
  };

  const [room, setRoom] = useState('싱글');
  const handleRoom = (e)=>{
    setRoom(e.target.value);
  }

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
          checked = {breakfast}
          onChange={handleBreakfastChange}
          />
      </label>

      <br />

      <label>
        투숙객수:
        <input 
          type="number"
          value={numberOfGuests}
          onChange={handleGuest} />
      </label>

      <br />

      <label>
        룸타입
        <input 
          type="radio"
          name="room"
          checked ={room == 'SINGLE'}
          value= "싱글"
          onChange={handleRoom} />
        싱글
      </label>

      <label>
        <input 
          type="radio"
          name="room"
          value= "더블"
          checked ={room == 'DOUBLE'}
          onChange={handleRoom} />
        더블
      </label>

      <label>
        룸타입
        <input 
        type="radio"
        name="room"
        value="트윈"
        checked ={room == 'TWIN'}
        onChange={handleRoom} />
        트윈
      </label>
      <br />
      <button type="submit" onClick={handleChange}> 전송button submit</button>

    </form>
  );
};

export default Reservation;