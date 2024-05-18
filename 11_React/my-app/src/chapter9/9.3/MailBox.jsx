function MailBox(props) {
  const unreadMessage = props.unreadMessage;
  return (
    <>
      <h1>안 읽은 메일 보관함</h1>
      {unreadMessage.length > 0 && (
        <>
          <h2>{unreadMessage.length} 개의 안읽은 메일있어요</h2>
          {unreadMessage.map((unread, index) => {
            return <p>제목 :{unread}</p>;
          })}
        </>
      )}

      {false && <h1>Message: {unreadMessage.length}</h1>}
      {false}


    </>
  );
};

export default MailBox;