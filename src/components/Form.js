import { useState } from "react";
import { auth } from "../config/config";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { addUser } from "../store/actions/actions";

const Form = ({ user, dispatch }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onUserLogOut = () => {
    auth.signOut();
    dispatch(addUser(null));
  };

  const onCreateAccountHandler = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => dispatch(addUser(res.user.email)));
    setEmail("");
    setPassword("");
  };
  const onSignInHandler = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((res) => {
      history.push("/");
      dispatch(addUser(res.user.email));
    });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="form">
      {user ? (
        <div className="profile">
          <p>
            User: <em>{user}</em>
          </p>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onUserLogOut();
            }}
          >
            LogOut
          </button>
        </div>
      ) : (
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
          />
          <button type="submit" onClick={onSignInHandler}>
            Sign in
          </button>
          <p className="mT">Don't have an account?</p>
          <button type="submit" onClick={onCreateAccountHandler}>
            Create an account
          </button>
        </form>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Form);
