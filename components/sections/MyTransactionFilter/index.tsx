import ButtonFilter from "../../complex/ButtonFilter";

function MyTransactionFilter() {
  return (
    <div className="row mt-30 mb-20">
      <div className="col-lg-12 col-12 main-content">
        <div id="list_status_title">
          <ButtonFilter text="All" btnActive />
          <ButtonFilter text="Success" />
          <ButtonFilter text="Pending" />
          <ButtonFilter text="Failed" />
        </div>
      </div>
    </div>
  );
}

export default MyTransactionFilter;
