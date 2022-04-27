import DetailsRow from "../../complex/DetailsRow";

function CheckoutPaymentDetails() {
  return (
    <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
      <h2 className="fw-bold text-xl color-palette-1 mb-20">
        Payment Informations
      </h2>
      <DetailsRow
        title="Your Account Name"
        content="Masayoshi Angga Zero"
      />
      <DetailsRow title="Type" content="Worldwide Transfer" />
      <DetailsRow title="Bank Name" content="Mandiri" />
      <DetailsRow
        title="Bank Account Name"
        content="PT Store GG Indonesia"
      />
      <DetailsRow title="Bank Number" content="1800 - 9090 - 2021" />
    </div>
  );
}

export default CheckoutPaymentDetails;
