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
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
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
  ListItem,
  Item,
  Label,
  Input,
  DatePicker,
} from "native-base";
import SecurityService from "../security/SecurityService";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Custom Actions


// START IMPORT ACTIONS
import EventsActions from "../redux/actions/EventsActions";
import StudentActions from "../redux/actions/StudentActions";

// END IMPORT ACTIONS

/** APIs

* actionsEvents.create
*	@description CRUD ACTION create
*
* actionsEvents.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsEvents.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsUser.list
*	@description CRUD ACTION list
*
* actionsStudent.list
*	@description CRUD ACTION list
*

**/


class EventsEdit extends Component {
  
  // Init events
  constructor(props) {
    super(props);
    this.state = {
      events: {},
      authorized: false
    };
  }

  // Load data on start
  componentWillMount() {

    this.props.navigation.addListener("willFocus", async () => { 
      // Check security
      if (await SecurityService.isAuth([  ])) {
        this.setState({ authorized: true });
      } else {
        this.props.navigation.navigate("Login", {
          showError: "Not authorized"
        });
        return;
      }


      // Load data
      const itemId = this.props.navigation.getParam("id", "new");
      if (itemId !== "new") {
        this.props.actionsEvents.loadEvents(itemId);
      } else {
        this.setState({
          events: {}
        });
      }
      
      this.props.actionsStudent.loadStudentList();
      this.props.actionsUser.loadUserList();
    });
  }

  // Clear reducer
  componentWillUnmount() {
    this.setState({
      events: {}
    });
    this.props.actionsEvents.reset();
  }

  // Insert props events in state
  componentWillReceiveProps(props) {
    this.setState({
      events: props.events
    });
  }

  // Save data
  save() {
    // Validation
    let errors = {};
    
    if (!this.state.events.name || this.state.events.name.trim() === "") {
      errors.name = true;
    }
    

    this.setState({ errors: errors });
    if (Object.keys(errors).length > 0) {
      return;
    }

    // Save
    if (this.state.events._id) {
      // Edit
      this.props.actionsEvents.saveEvents(this.state.events).then(data => {
        this.props.navigation.navigate("EventsList");
      });
    } else {
      // Create
      this.props.actionsEvents.createEvents(this.state.events).then(data => {
        this.props.navigation.navigate("EventsList");
      });
    }
  }

  // Show content
  render() { 

    // Check security
    if (!this.state.authorized) {
      return null;
    }

    return (
      <Container>
        <Header>
          <Left>
            <Button
            transparent
            onPress={() => this.props.navigation.goBack()}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Detail Events</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.save()}>
              <Text>Save</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>
                Date
              </Label>
              <DatePicker
                placeHolderText="Select a date"
                defaultDate={this.state.events.date }
                onDateChange={value => 
                  this.setState(Object.assign(this.state.events, { date: value }))
                }
              />
            </Item>
            
            
            <Item floatingLabel>
              <Label>
                Description
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.events, { description: value }))
                }
                value={this.state.events.description && this.state.events.description.toString()}
              />
            </Item>
          
            
            <Item floatingLabel {...(this.state.errors && this.state.errors.name === true ? { style: styles.validatorItem } : {})}>
              <Label
                {...(this.state.errors && this.state.errors.name === true ? { style: styles.validatorLabel } : {})}>
                Name *
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.events, { name: value }))
                }
                value={this.state.events.name && this.state.events.name.toString()}
              />
            </Item>
            {this.state.errors && this.state.errors.name === true && (
              <Text style={styles.validatorMessage}>Value is required</Text>
            )}
          

          {/* RELATIONS */}
          
          {/* Relation m:m _student with Student */}
          
          <Item stackedLabel>              
            <Label >
              _student
            </Label>
            <SectionedMultiSelect
              items={this.props.listStudent }
              displayKey="_id"
              uniqueKey="_id"
              selectText="Choose some items..."
              alwaysShowSelectText={true}
              modalAnimationType={"slide"}
              renderSelectText={() => {
                return "Choose some items...";
              }}
              onSelectedItemsChange={value =>
                this.setState(Object.assign(this.state.events, { _student: value }))
              }
              selectedItems={this.state.events._student }
            />
          </Item>
          
          
          {/* Relation m:m _user with User */}
          
          <Item stackedLabel>              
            <Label >
              _user
            </Label>
            <SectionedMultiSelect
              items={this.props.listUser }
              displayKey="_id"
              uniqueKey="_id"
              selectText="Choose some items..."
              alwaysShowSelectText={true}
              modalAnimationType={"slide"}
              renderSelectText={() => {
                return "Choose some items...";
              }}
              onSelectedItemsChange={value =>
                this.setState(Object.assign(this.state.events, { _user: value }))
              }
              selectedItems={this.state.events._user }
            />
          </Item>
          
          

          </Form>
        </Content>
      </Container>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsEvents: bindActionCreators(EventsActions, dispatch),
    actionsStudent: bindActionCreators(StudentActions, dispatch),
  };
};

// Validate types
EventsEdit.propTypes = { 
  actionsEvents: PropTypes.object.isRequired,
  actionsStudent: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    events: state.EventsEditReducer.events,
    listStudent: state.EventsEditReducer.listStudent,
    listUser: state.EventsEditReducer.listUser
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsEdit);

const styles = StyleSheet.create({
  validatorItem: { borderColor: "red" },
  validatorLabel: { color: "red" },
  validatorMessage: { color: "red", marginLeft: 15, marginTop: 5 }
});
