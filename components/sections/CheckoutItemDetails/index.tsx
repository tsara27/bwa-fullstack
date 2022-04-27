import DetailsRow from "../../complex/DetailsRow";

function CheckoutItemDetails() {
  return (
    <div className="purchase pt-md-50 pt-30">
      <h2 className="fw-bold text-xl color-palette-1 mb-20">
        Purchase Details
      </h2>
      <DetailsRow title="Your Game ID" content="masayoshizero" />
      <DetailsRow title="Order ID" content="#GG001" />
      <DetailsRow title="Item" content="250 Diamonds" />
      <DetailsRow title="Price" content="Rp 42.280.500" />
      <DetailsRow title="Tax (10%)" content="Rp 4.228.000" />
      <DetailsRow title="Total" content="Rp 55.000.600" />
    </div>
  );
}

export default CheckoutItemDetails;
