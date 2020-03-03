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
 *  TO CUSTOMIZE FUNCTIONS IN EventsActionsGenerated.js PLEASE EDIT ../EventsActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import EventsApi from "../../../api/EventsApi";

let actionsFunction = {
  
  // Reset reducer
  reset: function() {
    return { type: types.RESET_EVENTS };
  },

  //CRUD METHODS

  // Create events
  createEvents: function(events) {
    return function(dispatch) {
      return EventsApi
        .createEvents(events)
        .then(events => {
          dispatch(actionsFunction.createEventsSuccess(events));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createEventsSuccess: function(events) {
    return { type: types.CREATE_EVENTS_SUCCESS, payload: events };
  },


  // Delete events
  deleteEvents: function(id) {
    return function(dispatch) {
      return EventsApi
        .deleteEvents(id)
        .then(events => {
          dispatch(actionsFunction.deleteEventsSuccess(events));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteEventsSuccess: function(events) {
    return { type: types.DELETE_EVENTS_SUCCESS, payload: events };
  },


  // Find by _student
  findBy_student: function(key) {
    return function(dispatch) {
      return EventsApi
        .findBy_student(key)
        .then(item => {
          dispatch(actionsFunction.findBy_studentSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBy_studentSuccess: function(item) {
    return { type: types.FINDBY_STUDENT_EVENTS_SUCCESS, payload: item };
  },


  // Get events
  loadEvents: function(id) {
    return function(dispatch) {
      return EventsApi
        .getOneEvents(id)
        .then(events => {
          dispatch(actionsFunction.loadEventsSuccess(events));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadEventsSuccess: function(events) {
    return { type: types.GET_EVENTS_SUCCESS, payload: events };
  },

  // Load  list
  loadEventsList: function() {
    return function(dispatch) {
      return EventsApi
        .getEventsList()
        .then(list => {
          dispatch(actionsFunction.loadEventsListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadEventsListSuccess: function(list) {
    return { type: types.LIST_EVENTS_SUCCESS, payload: list };
  },

	
  // Save events
  saveEvents: function(events) {
    return function(dispatch) {
      return EventsApi
        .saveEvents(events)
        .then(events => {
          dispatch(actionsFunction.saveEventsSuccess(events));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveEventsSuccess: function(events) {
    return { type: types.UPDATE_EVENTS_SUCCESS, payload: events };
  },


};

export default actionsFunction;