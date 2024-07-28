class UserView {
  _activityUser = document.querySelector("#activityUser");
  _user = document.querySelector("#user");
  _date = document.querySelector("#date");
  _userInfo = document.querySelector(".popup__submit");
  _popup = document.querySelector(".popup");
  _main = document.querySelector("main");

  getUserInfo(handler) {
    this._userInfo.addEventListener("click", handler);
  }

  updateUI() {
    this._popup.style.display = "none";
    this._main.style.display = "flex";
  }

  userInfo() {
    const userObj = {};

    userObj.activity = this._activityUser.value;
    userObj.user = this._user.value;
    userObj.date = this._date.value;

    return userObj;
  }
}


export default new UserView();
