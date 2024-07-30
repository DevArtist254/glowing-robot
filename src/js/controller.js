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

};

const notesEntry = function (e) {
  //Get id of the clicked child el
    const id = e.srcElement.offsetParent.parentElement.attributes[1].value;

  //Display note 
  notesView.displayNote(e);

  //notesView.enterNotes();
};

const init = function () {
 userView.getUserInfo(userActivity);
 activityView.submitNewPhase(phaseEntry);
 notesView.addNotes(notesEntry); 
}

init();
