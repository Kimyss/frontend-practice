import { useState } from "react";

const styles = {
  button: {
    height: 40,
    width: 200,
  },
  warning: {
    backgroundColor: '#ffc107',
    textAlign: 'center',
    width: '100%',
    padding: 10,
    fontSize: '14pt',
    color: '#000',
  },
  danger: {
    backgroundColor: '#dc3545',
    textAlign: 'center',
    width: '100%',
    padding: 10,
    fontSize: '14pt',
    color: '#fff',
  }
};

function WarningBanner(props) {
  console.log(props.warn);
  if (!props.warn) {
    return null;
  }
  return <div style={styles.warning}>Warning!</div>
}

function DangerBanner(props) {
  return <div style={styles.danger}>Danger!</div>
}


function MainPage() {
  const [showWarning, setShowWarning] = useState(false);

  const handleToggle = () => {
    setShowWarning(!showWarning);
  }

  return (
    <>
      <WarningBanner warn={showWarning} />
      {showWarning ? <DangerBanner /> : null}
      {showWarning && <DangerBanner />}
      <button type="button" onClick={handleToggle}>
        {showWarning ? '감춰' : '보여'}
      </button>
    </>
  );
};

export default MainPage;