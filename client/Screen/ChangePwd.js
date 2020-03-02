/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e5d471e52a8e9561a0d35d2
*
* You will get 10% discount for each one of your friends
* 
*/
// Dependencies
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Header,
  Title,
  Container,
  Content,
  Body,
  Button,
  Text,
  Icon,
  Right,
  Left,
  Form,
  Item,
  Label,
  Input
} from "native-base";
import crypto from "js-sha3";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Custom Actions
import UserActions from "../redux/actions/UserActions";
import SecurityService from "../security/SecurityService";

/** APIs

* UserService.changePassword
*	@description Change password of user from admin
*	@returns object
*

**/

class Profile extends Component {
  // Init Profile
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  // Confirm change password
  confirm() {
    if (!this.state.user.newPassword) {
      this.setState({ showError: "Insert a new password" });
    } else if (!this.state.user.oldPassword) {
      this.setState({
        showError: "Insert the old password"
      });
      setTimeout(() => {
        this.setState({ showError: false });
      }, 3000);
    } else if (
      this.state.user.newPassword !== this.state.user.confirmNewPassword
    ) {
      this.setState({
        showError: "Your new password and confirm password don't match"
      });

      setTimeout(() => {
        this.setState({ showError: false });
      }, 3000);
    } else {
      this.props.actionsUser
        .changePassword(
          crypto.sha3_512(this.state.user.newPassword),
          crypto.sha3_512(this.state.user.oldPassword)
        )
        .then(() => {
          this.setState({ user: {} });
          this.setState({ showMessage: "Password Changed" });

          setTimeout(() => {
            this.setState({ showMessage: false });
          }, 3000);
        })
        .catch(err => {
          this.setState({ showError: "Old Password not valid" });

          setTimeout(() => {
            this.setState({ showError: false });
          }, 3000);
        });
    }
  }

  // Show contet
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Set Password</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          {this.state.showError && (
            <Text style={styles.errorMessage}>{this.state.showError}</Text>
          )}

          {this.state.showMessage && (
            <Text style={styles.message}>{this.state.showMessage}</Text>
          )}

          <Form>
            <Item floatingLabel>
              <Label>Actual Password</Label>
              <Input
                secureTextEntry={true}
                onChangeText={value =>
                  this.setState(
                    Object.assign(this.state.user, { oldPassword: value })
                  )
                }
                value={
                  this.state.user.oldPassword &&
                  this.state.user.oldPassword.toString()
                }
              />
            </Item>

            <Item floatingLabel>
              <Label>New Password</Label>
              <Input
                secureTextEntry={true}
                onChangeText={value =>
                  this.setState(
                    Object.assign(this.state.user, { newPassword: value })
                  )
                }
                value={
                  this.state.user.newPassword &&
                  this.state.user.newPassword.toString()
                }
              />
            </Item>

            <Item floatingLabel>
              <Label>Confirm New Password</Label>
              <Input
                secureTextEntry={true}
                onChangeText={value =>
                  this.setState(
                    Object.assign(this.state.user, {
                      confirmNewPassword: value
                    })
                  )
                }
                value={
                  this.state.user.confirmNewPassword &&
                  this.state.user.confirmNewPassword.toString()
                }
              />
            </Item>
          </Form>

          <Button
            full
            success
            style={styles.buttonChangePwd}
            onPress={this.confirm.bind(this)}
          >
            <Text> Change password </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return {
    actionsUser: bindActionCreators(UserActions, dispatch)
  };
};

// Validate types
Profile.propTypes = {
  actionsUser: PropTypes.object.isRequired
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    user: state.LoginReducer.user
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

const styles = StyleSheet.create({
  buttonChangePwd: {
    marginTop: 40
  },
  message: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    color: "white",
    backgroundColor: "green",
    padding: 10
  },
  errorMessage: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    color: "white",
    backgroundColor: "red",
    padding: 10
  }
});