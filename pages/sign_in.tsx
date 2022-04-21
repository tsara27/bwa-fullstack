import SignInForm from "../components/sections/SignInForm";
import SignInHero from "../components/sections/SignInHero";

function SignIn() {
  return (
    <>
      {/* Sign in Page */}
      <section className="sign-in mx-auto">
        <div className="row">
          <div className="col-xxl-5 col-lg-6 my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0">
            <SignInForm />
          </div>
          <SignInHero />
        </div>
      </section>
    </>
  );
}

export default SignIn;
