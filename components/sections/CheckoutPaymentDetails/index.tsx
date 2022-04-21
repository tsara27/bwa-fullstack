function CheckoutPaymentDetails() {
  return (
    <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
      <h2 className="fw-bold text-xl color-palette-1 mb-20">
        Payment Informations
      </h2>
      <p className="text-lg color-palette-1 mb-20">
        Your Account Name
        <span className="purchase-details">Masayoshi Angga Zero</span>
      </p>
      <p className="text-lg color-palette-1 mb-20">
        Type <span className="payment-details">Worldwide Transfer</span>
      </p>
      <p className="text-lg color-palette-1 mb-20">
        Bank Name <span className="payment-details">Mandiri</span>
      </p>
      <p className="text-lg color-palette-1 mb-20">
        Bank Account Name
        <span className="payment-details">PT Store GG Indonesia</span>
      </p>
      <p className="text-lg color-palette-1 mb-20">
        Bank Number <span className="payment-details">1800 - 9090 - 2021</span>
      </p>
    </div>
  );
}

export default CheckoutPaymentDetails;
