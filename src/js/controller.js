import * as model from "./model";
import introView from "./View/introView";
import activityView from "./View/activityView";
import userView from "./View/userView";

const userActivity = function (userObj = null) {
  model.setUserModel(userObj);

  introView.updateUI(model.state.user);
};

const phaseEntry = function (phase) {

  model.setActivityPhase(phase);

  activityView.generatePhaseMarkup(phase);
};

userView.getUserInfo(userActivity);
activityView.submitNewPhase(phaseEntry);
