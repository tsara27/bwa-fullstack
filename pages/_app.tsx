import '../styles/404.css'
import '../styles/checkout.css'
import '../styles/complete_checkout.css'
import '../styles/details.css'
import '../styles/homepage.css'
import '../styles/navbar_login.css'
import '../styles/overview.css'
import '../styles/profile_edit.css'
import '../styles/sidebar.css'
import '../styles/sign_in.css'
import '../styles/sign_up.css'
import '../styles/sign_up_photo.css'
import '../styles/sign_up_success.css'
import '../styles/transactions.css'
import '../styles/transactions_details.css'
import '../styles/utilities.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Bootstrap css */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossOrigin="anonymous"
        />

        {/* Font css */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

         {/* AOS css */}
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
      {/* Bootstrap js init */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossOrigin="anonymous"
      ></script>
    </>
  )
}

export default MyApp
