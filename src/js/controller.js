import * as model from "./model";
import introView from "./View/introView";
import phaseView from "./View/phaseView";
import userView from "./View/userView";

const userActivity = function (userObj = null) {
    model.setUserModel(userObj)

    introView.updateUI(model.state.user);
};

const phaseEntry = function (phase = null) {
    model.setActivityPhase(phase);

    console.log(model.state.phases);
} 


userView.getUserInfo(userActivity);
phaseView.submitNewPhase(phaseEntry);