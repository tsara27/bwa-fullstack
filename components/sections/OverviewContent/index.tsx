import CategoryCard from "../../complex/CategoryCard";
import LatestTransactions from "../LatestTransactions";

function OverviewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              <CategoryCard icon="others.svg" title="Game Desktop" total="Rp 15.343.432"/>
              <CategoryCard icon="mobile.svg" title="Game Mobile" total="Rp 8.777.432"/>
              <CategoryCard icon="others.svg" title="Other Categories" total="Rp 5.333.222"/>
            </div>
          </div>
        </div>
        <LatestTransactions />
      </div>
    </main>
  );
}

export default OverviewContent;
