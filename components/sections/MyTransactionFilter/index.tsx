function MyTransactionFilter() {
  return (
    <div className="row mt-30 mb-20">
      <div className="col-lg-12 col-12 main-content">
        <div id="list_status_title">
          <a
            data-filter="*"
            href="#"
            className="btn btn-status rounded-pill text-sm btn-active me-3"
          >
            All Trx
          </a>
          <a
            data-filter="success"
            href="#"
            className="btn btn-status rounded-pill text-sm me-3"
          >
            Success
          </a>
          <a
            data-filter="pending"
            href="#"
            className="btn btn-status rounded-pill text-sm me-3"
          >
            Pending
          </a>
          <a
            data-filter="failed"
            href="#"
            className="btn btn-status rounded-pill text-sm me-3"
          >
            Failed
          </a>
        </div>
      </div>
    </div>
  );
}

export default MyTransactionFilter;
