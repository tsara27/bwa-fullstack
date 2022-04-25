import TableRow from "./table_row";

function LatestTransactions() {
  return (
    <div className="latest-transaction">
      <p className="text-lg fw-medium color-palette-1 mb-14">
        Latest Transactions
      </p>
      <div className="main-content main-content-table overflow-auto">
        <table className="table table-borderless">
          <thead>
            <tr className="color-palette-1">
              <th className="text-start" scope="col">
                Game
              </th>
              <th scope="col">Item</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <TableRow
              deviceType="Desktop"
              image="overview-1.png"
              item="200 Gold"
              price="Rp 200.000"
              status="pending"
              title="Mobile Legends: The New Battle 2021"
            />

            <TableRow
              deviceType="Desktop"
              image="overview-2.png"
              item="550 Gold"
              price="Rp 740.000"
              status="success"
              title="Call of Duty: Modern"
            />

            <TableRow
              deviceType="Mobile"
              image="overview-3.png"
              item="100 Gold"
              price="Rp 120.000"
              status="failed"
              title="Clash of Clans"
            />

            <TableRow
              deviceType="Mobile"
              image="overview-4.png"
              item="225 Gold"
              price="Rp 200.000"
              status="pending"
              title="The Royal Game"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LatestTransactions;
