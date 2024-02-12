import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../redux/store/store";
import { setUserLoggedIn } from "../../redux/reducers/auth.reducer";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [username, setUsername] = useState<string>("");
  return (
    <div className="row justify-content-center">
      <form
        className="col-md-4  border border-3 p-2"
        onSubmit={e => {
          e.preventDefault();
          fetch("http://localhost:3500/auth/login")
            .then(res => res.json())
            .then(msg => {
              if (msg.success) {
                // use redux to store token & user auth status (best use context API)
                sessionStorage["token"] = msg.token;
                dispatch(
                  setUserLoggedIn({
                    isUserAuthenticated: true,
                    token: msg.token,
                    username,
                  }),
                );
                navigate("/dashboard");
              }
            });
        }}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
            onInput={(e: any) => setUsername(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
