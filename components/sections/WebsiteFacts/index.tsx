import FactItem from "../../complex/FactItem";

function WebsiteFacts() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div
          className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4"
        >
          <FactItem title="290M++" description="Players top up" />
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
          <div
            className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"
          />
          <FactItem title="12.500" description="Games Available" />
          <div
            className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"
          />
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
          <FactItem title="99,9%" description="Happy Players" />
          <div
            className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"
          />
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
          <FactItem title="4.7" description="Rating Worldwide" />
        </div>
      </div>
    </section>
  )
}

export default WebsiteFacts;
