import Sidebar from "../../../components/sections/Sidebar";
import MyTransactionFilter from "../../../components/sections/MyTransactionFilter";

function Transactions() {
  return (
    <>
      <section className="transactions overflow-auto">
        <Sidebar activeMenu="transactions" />
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">
              My Transactions
            </h2>
            <div className="mb-30">
              <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
              <h3 className="text-5xl fw-medium color-palette-1">Rp 4.518.000.500</h3>
            </div>
            <MyTransactionFilter />
            <div className="latest-transaction">
              <p className="text-lg fw-medium color-palette-1 mb-14">
                Latest Transactions
              </p>
              <div className="main-content main-content-table overflow-auto">
                <table className="table table-borderless">
                  <thead>
                    <tr className="color-palette-1">
                      <th className="" scope="col">Game</th>
                      <th scope="col">Item</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody id="list_status_item">
                    <tr data-category="pending" className="align-middle">
                      <th scope="row">
                        <img
                          className="float-start me-3 mb-lg-0 mb-3"
                          src="/img/overview-1.png"
                          width="80"
                          height="60"
                          alt=""
                        />
                        <div className="game-title-header">
                          <p
                            className="game-title fw-medium text-start color-palette-1 m-0"
                          >
                            Mobile Legends: The New Battle 2021
                          </p>
                          <p
                            className="text-xs fw-normal text-start color-palette-2 m-0"
                          >
                            Desktop
                          </p>
                        </div>
                      </th>
                      <td>
                        <p className="fw-medium color-palette-1 m-0">200 Gold</p>
                      </td>
                      <td>
                        <p className="fw-medium color-palette-1 m-0">Rp 290.000</p>
                      </td>
                      <td>
                        <div>
                          <span className="float-start icon-status pending"></span>
                          <p
                            className="fw-medium text-start color-palette-1 m-0 position-relative"
                          >
                            Pending
                          </p>
                        </div>
                      </td>
                      <td>
                        <a
                          href="../member/transactions-detail.html"
                          className="btn btn-status rounded-pill text-sm"
                          >Details</a
                        >
                      </td>
                    </tr>
                    <tr data-category="success" className="align-middle">
                      <th scope="row">
                        <img
                          className="float-start me-3 mb-lg-0 mb-3"
                          src="/img/overview-2.png"
                          width="80"
                          height="60"
                          alt=""
                        />
                        <div className="game-title-header">
                          <p
                            className="game-title fw-medium text-start color-palette-1 m-0"
                          >
                            Call of Duty:Modern
                          </p>
                          <p
                            className="text-xs fw-normal text-start color-palette-2 m-0"
                          >
                            Desktop
                          </p>
                        </div>
                      </th>
                      <td>
                        <p className="fw-medium color-palette-1 m-0">550 Gold</p>
                      </td>
                      <td>
                        <p className="fw-medium color-palette-1 m-0">Rp 740.000</p>
                      </td>
                      <td>
                        <div>
                          <span className="float-start icon-status success"></span>
                          <p
                            className="fw-medium text-start color-palette-1 m-0 position-relative"
                          >
                            Success
                          </p>
                        </div>
                      </td>
                      <td>
                        <a
                          href="../member/transactions-detail.html"
                          className="btn btn-status rounded-pill text-sm"
                          >Details</a
                        >
                      </td>
                    </tr>
                    <tr data-category="failed" className="align-middle">
                      <th scope="row">
                        <img
                          className="float-start me-3 mb-lg-0 mb-3"
                          src="/img/overview-3.png"
                          width="80"
                          height="60"
                          alt=""
                        />
                        <div className="game-title-header">
                          <p
                            className="game-title fw-medium text-start color-palette-1 m-0"
                          >
                            Clash of Clans
                          </p>
                          <p
                            className="text-xs fw-normal text-start color-palette-2 m-0"
                          >
                            Mobile
                          </p>
                        </div>
                      </th>
                      <td>
                        <p className="fw-medium color-palette-1 m-0">100 Gold</p>
                      </td>
                      <td>
                        <p className="fw-medium color-palette-1 m-0">Rp 120.000</p>
                      </td>
                      <td>
                        <div>
                          <span className="float-start icon-status failed"></span>
                          <p
                            className="fw-medium text-start color-palette-1 m-0 position-relative"
                          >
                            Failed
                          </p>
                        </div>
                      </td>
                      <td>
                        <a
                          href="../member/transactions-detail.html"
                          className="btn btn-status rounded-pill text-sm"
                          >Details</a
                        >
                      </td>
                    </tr>
                    <tr data-category="pending" className="align-middle">
                      <th scope="row">
                        <img
                          className="float-start me-3 mb-lg-0 mb-3"
                          src="/img/overview-4.png"
                          width="80"
                          height="60"
                          alt=""
                        />
                        <div className="game-title-header">
                          <p
                            className="game-title fw-medium text-start color-palette-1 m-0"
                          >
                            The Royal Game
                          </p>
                          <p
                            className="text-xs fw-normal text-start color-palette-2 m-0"
                          >
                            Mobile
                          </p>
                        </div>
                      </th>
                      <td>
                        <p className="fw-medium color-palette-1 m-0">225 Gold</p>
                      </td>
                      <td>
                        <p className="fw-medium color-palette-1 m-0">Rp 200.000</p>
                      </td>
                      <td>
                        <div>
                          <span className="float-start icon-status pending"></span>
                          <p
                            className="fw-medium text-start color-palette-1 m-0 position-relative"
                          >
                            Pending
                          </p>
                        </div>
                      </td>
                      <td>
                        <a
                          href="../member/transactions-detail.html"
                          className="btn btn-status rounded-pill text-sm"
                          >Details</a
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default Transactions;
