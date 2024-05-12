import Footer from "./Footer";
import Header from "./Header";
import LayOut from "./LayOut";
import Profile from "./Profile";

function PropUse() {

  return (
    <>
      <Profile introduction="자원 캐기왕 이에요" viewCount={200} name="SCV" />

      <LayOut
        width={2560}
        height={1440}
        header={<Header title="제목부분 : 블로그에요" />}
        footer={<Footer footer />}
      />
    </>
  )

}

export default PropUse;