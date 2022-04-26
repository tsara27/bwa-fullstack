import Sidebar from "../../../components/sections/Sidebar";
import TransactionDetailsContent from "../../../components/sections/TransactionDetailsContent";

function TransactionsDetails() {
  return (
    <>
      {/* Transaction Detail */}
      <section className="transactions-detail overflow-auto">
        <Sidebar activeMenu="transactions" />
        <TransactionDetailsContent />
      </section>
    </>
  )
}

export default TransactionsDetails;
