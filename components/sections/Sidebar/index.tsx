import Profile from "./profile";
import SidebarItem from "../../complex/SidebarItem";

function Sidebar() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <SidebarItem title="Overview" icon="overview.svg" link="/member/overview" active />
          <SidebarItem title="Transactions" icon="transaction.svg" />
          <SidebarItem title="Messages" icon="messages.svg" />
          <SidebarItem title="Card" icon="card.svg" />
          <SidebarItem title="Rewards" icon="rewards.svg" />
          <SidebarItem title="Settings" icon="settings.svg" />
          <SidebarItem title="Logout" icon="logout.svg" />
        </div>
        <div className="sidebar-footer pt-73 pe-30">
          <div className="footer-card">
            <div className="d-flex justify-content-between mb-20">
            <img
              src="/icon/sidebar/topup.svg"
              width={50}
              height={50}
            />
              <p className="fw-medium color-palette-1">
                Top Up &<br />
                Be The Winner
              </p>
            </div>
            <a
              className="btn btn-get-started w-100 fw-medium text-xs text-center text-white rounded-pill"
              href="/#"
              role="button"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
