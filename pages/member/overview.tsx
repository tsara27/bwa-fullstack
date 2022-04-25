import Sidebar from "../../components/sections/Sidebar";
import OverviewContent from "../../components/sections/OverviewContent";

function Overview() {
  return (
    <>
      {/* Overview */}
      <section className="overview overflow-auto">
        <Sidebar activeMenu="overview" />
        <OverviewContent />
      </section>
    </>
  )
}

export default Overview;
