import Illustration from "./illustation";
import TextSection from "./text_section";

function MainBanner() {
  return (
    <section className="header pt-lg-60 pb-50">
      <div className="container-xxl container-fluid">
        <div className="row gap-lg-0 gap-5">
          <TextSection />
          <Illustration />
        </div>
      </div>
    </section>
  );
}

export default MainBanner;
