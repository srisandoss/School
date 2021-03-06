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
import { combineReducers } from "redux";

// START IMPORT REDUCERS
import CourseEditReducer from "./CourseEditReducer";
import CourseListReducer from "./CourseListReducer";
import EventsEditReducer from "./EventsEditReducer";
import EventsListReducer from "./EventsListReducer";
import HomeReducer from "./HomeReducer";
import StudentReducer from "./StudentReducer";
import StudentEditReducer from "./StudentEditReducer";
import StudentListReducer from "./StudentListReducer";
import TeacherEditReducer from "./TeacherEditReducer";
import TeacherListReducer from "./TeacherListReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	CourseEditReducer,
	CourseListReducer,
	EventsEditReducer,
	EventsListReducer,
	HomeReducer,
	StudentReducer,
	StudentEditReducer,
	StudentListReducer,
	TeacherEditReducer,
	TeacherListReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
