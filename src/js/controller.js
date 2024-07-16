import * as model from "./model";
import introView from "./View/introView";
import userView from "./View/userView";

const userActivity = function (userObj = null) {
    model.setUserModel(userObj)

    introView.updateUI(model.state.user);
};


userView.getUserInfo(userActivity);