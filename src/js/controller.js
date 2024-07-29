import * as model from "./model";
import introView from "./View/introView";
import activityView from "./View/activityView";
import userView from "./View/userView";
import notesView from "./View/notesView";

const userActivity = function () {

  model.setUserModel(userView.userInfo());

  userView.updateUI();

  introView.updateUI(model.state.users);
};

const phaseEntry = function () {
  model.setActivityPhase(activityView.getPhase());

  activityView.generatePhaseMarkup(model.state.phases);

  console.log(model.state.phases);
};

const notesEntry = function () {
  console.log("1");
};

const init = function () {
 userView.getUserInfo(userActivity);
 activityView.submitNewPhase(phaseEntry);
 notesView.addNotes(notesEntry); 
}

init();
