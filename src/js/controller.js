import * as model from "./model";
import userView from "./View/userView";

const userActivity = function (userObj = null) {
    model.setUserModel(userObj)

    console.log(model.state);
};


userView.getUserInfo(userActivity);