import React from "react";
import Link from "../../components/Link";
import Button from "../../components/Button";

const SignIn = () => {
  return (
    <div
      className="d-flex justify-content-between mg-20 w-100 "
      style={{ padding: "25px 0 150px 0" }}
    >
      <div className="d-flex flex-column justify-content-between line-height-1-5">
        <div>
          <div className="font-size-64 font-style-monospace ">
            Welcome to forum!
          </div>

          <div className="font-size-20 mt-50 ">
            Forum is an educational platform for learning programming.
          </div>
          <div className="font-size-20 mt-20 ">
            1. Be respectful of other members <br />
            2. Do not post NSFW content. This is a SFW forum. <br />
            3. Do not discuss politics, religion and etc.
          </div>
          <div className="font-size-20 mt-20">
            The account will be used throughout the training at 01.
          </div>
        </div>
        <div className="font-size-16 font-style-monospace d-flex">
          Do you want to know more about us?
          <Link
            title="Contact us"
            className="ml-5"
            link="https://alem.school/"
            newTab={true}
          />
        </div>
      </div>

      <div className="d-flex align-items-end">
        <div className="d-flex flex-column align-items-center ">
          <Button
            color="purple"
            title="Sign in"
            uppercase={true}
            onClick={() => {
              window.location.href = "/api/v1/login";
            }}
          />
          <div className="font-style-monospace font-size-12 mv-20">or</div>
          <Button
            color="gray"
            title="Create an account"
            uppercase="true"
            onClick={() => {
              window.open("https://git.01.alem.school/user/sign_up");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
