class IntroView {
  _activityEntry = document.querySelector("#activityEntry");
  _dateEntry = document.querySelector("#dateEntry");
  _userEntry = document.querySelector("#userEntry");

  updateUI(user = null){
    if(user.user !== this._userEntry.textContent){
        this._userEntry.textContent = user.user;
    } 

    if (user.date !== this._dateEntry.textContent) {
        this._dateEntry.textContent = user.date;
    }

    if(user.activity !== this._activityEntry.textContent){
        this._activityEntry.textContent = user.activity;
    }
  }
}

export default new IntroView();