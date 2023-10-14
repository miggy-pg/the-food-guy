import { Link } from "react-router-dom";
import { Form } from "../components/Common/Form";
import { SocialMediaConnect } from "../components/Common/SocialMediaConnect";

export default function LoginPage() {
  return (
    <section className=" py-14 lg:py-20">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="wow fadeInUp relative mx-auto max-w-[525px] overflow-hidden rounded-lg px-8 py-14 text-center sm:px-12 md:px-[60px]">
              <div className="mb-10 text-center">
                {/* <a
                  href="javascript:void(0)"
                  className="mx-auto inline-block max-w-[160px]"
                >
                <img src="assets/images/logo/logo.svg" alt="logo" />
                </a> */}
              </div>
              <Form />
              <p className="mb-6 text-base text-[#adadad]">Connect With</p>
              <SocialMediaConnect />
              <Link
                to="user/reset"
                className="hover:text-primary mb-2 inline-block text-base text-[#adadad]"
              >
                Forget Password?
              </Link>
              <p className="text-base text-[#adadad]">
                Not a member yet?
                <Link
                  to="/user/signup"
                  className="text-primary ml-1 hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
