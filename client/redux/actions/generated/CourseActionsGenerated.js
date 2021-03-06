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
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN CourseActionsGenerated.js PLEASE EDIT ../CourseActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import CourseApi from "../../../api/CourseApi";

let actionsFunction = {
  
  // Reset reducer
  reset: function() {
    return { type: types.RESET_COURSE };
  },

  //CRUD METHODS

  // Create course
  createCourse: function(course) {
    return function(dispatch) {
      return CourseApi
        .createCourse(course)
        .then(course => {
          dispatch(actionsFunction.createCourseSuccess(course));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createCourseSuccess: function(course) {
    return { type: types.CREATE_COURSE_SUCCESS, payload: course };
  },


  // Delete course
  deleteCourse: function(id) {
    return function(dispatch) {
      return CourseApi
        .deleteCourse(id)
        .then(course => {
          dispatch(actionsFunction.deleteCourseSuccess(course));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteCourseSuccess: function(course) {
    return { type: types.DELETE_COURSE_SUCCESS, payload: course };
  },


  // Get course
  loadCourse: function(id) {
    return function(dispatch) {
      return CourseApi
        .getOneCourse(id)
        .then(course => {
          dispatch(actionsFunction.loadCourseSuccess(course));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadCourseSuccess: function(course) {
    return { type: types.GET_COURSE_SUCCESS, payload: course };
  },

  // Load  list
  loadCourseList: function() {
    return function(dispatch) {
      return CourseApi
        .getCourseList()
        .then(list => {
          dispatch(actionsFunction.loadCourseListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadCourseListSuccess: function(list) {
    return { type: types.LIST_COURSE_SUCCESS, payload: list };
  },

	
  // Save course
  saveCourse: function(course) {
    return function(dispatch) {
      return CourseApi
        .saveCourse(course)
        .then(course => {
          dispatch(actionsFunction.saveCourseSuccess(course));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveCourseSuccess: function(course) {
    return { type: types.UPDATE_COURSE_SUCCESS, payload: course };
  },


};

export default actionsFunction;
