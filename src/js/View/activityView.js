import phaseView from "./phaseView";

class ActivityView {
  _parent = document.querySelector("#p");
  _phase = document.querySelector("#phase");
  _phaseActivity = document.querySelector("#activityPhase");
  _deadline = document.querySelector("#deadlineActivityDate");

  submitNewPhase(handler) {
    this._phase.addEventListener("submit", (e) => {
        e.preventDefault();
        const phase = {};

        phase.date = this._deadline.value ;
        phase.activity = this._phaseActivity.value;

        handler(phase);
    })
  }

  generatePhaseMarkup(data){
    //this._data = data;
    const markup = data.map(el => phaseView.render(el)).join('');

    this._parent.insertAdjacentHTML('beforeend', markup);
  }
}

export default new ActivityView();