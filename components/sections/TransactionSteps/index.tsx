import StepItemCard from "../../complex/StepItemCard";

function TransactionSteps() {
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          It’s Really That
          <br />
          Easy to Win the Game
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          <StepItemCard
            icon="step-1"
            title="1. Start"
            paragraph1="Pilih salah satu game"
            paragraph2="yang ingin kamu top up"
          />
          <StepItemCard
            icon="step-2"
            title="2. Fill up"
            paragraph1="Top up sesuai dengan"
            paragraph2="nominal yang sudah tersedia"
          />
          <StepItemCard
            icon="step-3"
            title="3. Be a Winner"
            paragraph1="Siap digunakan untuk"
            paragraph2="improve permainan kamu"
          />
        </div>
      </div>
    </section>
  )
}

export default TransactionSteps;
