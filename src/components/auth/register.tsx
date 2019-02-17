import * as React from "react";

interface Props {
  registerToggle(): void;
  registerUser: (creds) => void;
}

interface State {
  username: string;
  password: string;
  confirm: string;
  err: boolean;
}

class RegisterForm extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirm: "",
      err: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  }

  handleClick(e) {
    e.preventDefault();
    const { username, password, confirm } = this.state;
    if (password !== confirm) {
      this.setState({
        err: true
      });
      return;
    }
    const creds = {
      username: username.trim(),
      password: password.trim()
    };
    this.props.registerUser(creds);
  }

  render() {
    const { username, password, confirm } = this.state;
    return (
      <div id="wrapperForm2">
        {this.state.err && <p>Passwords didn't match</p>}
        <form
          className="form-inline"
          onSubmit={this.handleClick}
          autoComplete="off"
        >
          <input
            autoComplete="off"
            id="input1"
            className="form-control"
            pattern=".{4,}"
            required
            title="4 characters minimum"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
            value={username}
          />

          <input
            autoComplete="current-password"
            id="input12"
            className="form-control"
            pattern=".{8,}"
            required
            title="8 characters minimum"
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={password}
          />

          <input
            autoComplete="off"
            id="input1reg"
            className="form-control"
            pattern=".{8,}"
            required
            title="8 characters minimum"
            type="password"
            name="confirm"
            placeholder="Confirm Password"
            onChange={this.handleChange}
            value={confirm}
          />

          <button id="input1btn" className="btn btn-primary" type="submit">
            Register
          </button>
          <button
            id="input1btnsub"
            className="btn btn-primary"
            onClick={() => {
              this.props.registerToggle();
            }}
          >
            <i className="fas fa-chevron-left" /> Back
          </button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
