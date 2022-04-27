import TransactionDetailsRow from "../../complex/TransactionDetailsRow";

function CheckoutPaymentDetails() {
  return (
    <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
      <h2 className="fw-bold text-xl color-palette-1 mb-20">
        Payment Informations
      </h2>
      <TransactionDetailsRow
        title="Your Account Name"
        content="Masayoshi Angga Zero"
      />
      <TransactionDetailsRow title="Type" content="Worldwide Transfer" />
      <TransactionDetailsRow title="Bank Name" content="Mandiri" />
      <TransactionDetailsRow
        title="Bank Account Name"
        content="PT Store GG Indonesia"
      />
      <TransactionDetailsRow title="Bank Number" content="1800 - 9090 - 2021" />
    </div>
  );
}

export default CheckoutPaymentDetails;
