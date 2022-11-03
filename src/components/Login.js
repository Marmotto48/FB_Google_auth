import React from "react";

import { GoogleLogin } from "react-google-login";
// refresh token
import { refreshTokenSetup } from "../utils/refreshToken";
import axios from "axios";

const clientId =
  "83916362549-tbmvc872gqttt4k2vmvr0bg2mk63qb28.apps.googleusercontent.com";

function Login() {
  const onSuccess = async (res) => {
    console.log(res);
    refreshTokenSetup(res);

    const result = await axios.post("http://localhost:5000/v1/OAuth", res);
    console.log("resut: ", result);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    console.log(`Failed to login. 😢 `);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
