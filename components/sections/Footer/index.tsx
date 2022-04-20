import Image from 'next/image';
import CompanyLinks from './company_links';
import SupportLinks from './support_links';
import ConnectLinks from './connect_links';

function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="" className="mb-30">
                <Image src="/img/logo.svg" width={60} height={60} />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br />
                untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <CompanyLinks />
                <SupportLinks />
                <ConnectLinks />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer;
