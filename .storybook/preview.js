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

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
