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
import { createAppContainer, createStackNavigator } from "react-navigation";

// Screens
import LoginScreen from "./Screen/LoginScreen";
import Home from "./Screen/Home";
import Profile from "./Screen/Profile";
import ChangePwd from "./Screen/ChangePwd";

/* START MY SCREENS IMPORT */

import CourseEdit from "./Screen/CourseEdit";
import CourseList from "./Screen/CourseList";
import EventsEdit from "./Screen/EventsEdit";
import EventsList from "./Screen/EventsList";
import Student from "./Screen/Student";
import StudentEdit from "./Screen/StudentEdit";
import StudentList from "./Screen/StudentList";
import TeacherEdit from "./Screen/TeacherEdit";
import TeacherList from "./Screen/TeacherList";

/* END MY SCREENS IMPORT */

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const AppNavigator = createStackNavigator(
      {
        Login: { screen: LoginScreen },
        Home: { screen: Home },
        Profile: { screen: Profile },
        ChangePwd: { screen: ChangePwd },

        /* START MY SCREENS */

    CourseEdit: { screen: CourseEdit },
    CourseList: { screen: CourseList },
    EventsEdit: { screen: EventsEdit },
    EventsList: { screen: EventsList },
    Student: { screen: Student },
    StudentEdit: { screen: StudentEdit },
    StudentList: { screen: StudentList },
    TeacherEdit: { screen: TeacherEdit },
    TeacherList: { screen: TeacherList },
    
     /* END MY SCREENS */
      },
      {
        initialRouteName: this.props.user ? "Home" : "Login",
        headerMode: "none"
      }
    );

    const AppContainerRouter = createAppContainer(AppNavigator);

    return <AppContainerRouter />;
  }
}

export default AppContainer;
