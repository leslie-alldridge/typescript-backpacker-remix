import * as React from 'react';
import * as style from './style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Header, LoginForm } from 'app/components';
import { RegisterForm } from 'app/components';
//import { fetchMemberListCompleted } from "../../actions/bags";

library.add(fab, fas);

export namespace App2 {
  export interface Props {
    fetchMemberListCompleted: () => void;
  }

  export interface State {
    showLogin: boolean;
  }
}

export class App2 extends React.Component<App2.Props, App2.State> {
  constructor(props: App2.Props) {
    super(props);
    this.state = {
      showLogin: true
    };
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  toggleLogin() {
    this.props.fetchMemberListCompleted();
    this.setState({
      showLogin: !this.state.showLogin
    });
  }

  render() {
    return (
      <div className={style.new}>
        <Header />
        {!this.state.showLogin && (
          <RegisterForm registerToggle={this.toggleLogin} />
        )}
        {this.state.showLogin && (
          <LoginForm registerToggle={this.toggleLogin} />
        )}
      </div>
    );
  }
}
