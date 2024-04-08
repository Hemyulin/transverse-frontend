import "./SignInPage.css";

export const SignInPage = () => {
  return (
    <div>
      <h1>Sign in</h1>
      <form className="sign-in-form">
        <div className="input-div">
          <label>Email:</label>
          <input type="text" name="email" placeholder="Email"></input>
        </div>
        <div className="input-div">
          <label>Password:</label>
          <input type="text" name="password" placeholder="Password"></input>
        </div>
      </form>
    </div>
  );
};
