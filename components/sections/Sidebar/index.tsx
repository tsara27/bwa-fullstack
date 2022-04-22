import Profile from "./profile";
import Image from "next/image";

function Sidebar() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <div className="item active mb-30">
            <img
              src="/icon/sidebar/overview.svg"
              width={25}
              height={25}
              className="icon me-3"
            />
            <p className="item-title m-0">
              <a href="" className="text-lg text-decoration-none">
                Overview
              </a>
            </p>
          </div>
          <div className="item mb-30">
            <img
              src="/icon/sidebar/transaction.svg"
              width={25}
              height={25}
              className="icon me-3"
            />
            <p className="item-title m-0">
              <a
                href="../member/transactions.html"
                className="text-lg text-decoration-none"
              >
                Transactions
              </a>
            </p>
          </div>
          <div className="item mb-30">
            <img
              src="/icon/sidebar/messages.svg"
              width={25}
              height={25}
              className="icon me-3"
            />
            <p className="item-title m-0">
              <a href="" className="text-lg text-decoration-none">
                Messages
              </a>
            </p>
          </div>
          <div className="item mb-30">
            <img
              src="/icon/sidebar/card.svg"
              width={25}
              height={25}
              className="icon me-3"
            />
            <p className="item-title m-0">
              <a href="" className="text-lg text-decoration-none">
                Card
              </a>
            </p>
          </div>
          <div className="item mb-30">
            <img
              src="/icon/sidebar/rewards.svg"
              width={25}
              height={25}
              className="icon me-3"
            />
            <p className="item-title m-0">
              <a href="" className="text-lg text-decoration-none">
                Rewards
              </a>
            </p>
          </div>
          <div className="item mb-30">
            <img
              src="/icon/sidebar/settings.svg"
              width={25}
              height={25}
              className="icon me-3"
            />
            <p className="item-title m-0">
              <a
                href="../member/edit-profile.html"
                className="text-lg text-decoration-none"
              >
                Settings
              </a>
            </p>
          </div>
          <div className="item mb-30">
            <img
              src="/icon/sidebar/logout.svg"
              width={25}
              height={25}
              className="icon me-3"
            />
            <p className="item-title m-0">
              <a href="" className="text-lg text-decoration-none">
                Log Out
              </a>
            </p>
          </div>
        </div>
        <div className="sidebar-footer pt-73 pe-30">
          <div className="footer-card">
            <div className="d-flex justify-content-between mb-20">
            <img
              src="/icon/sidebar/logout.svg"
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
