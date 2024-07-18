import phaseView from "./phaseView";

class ActivityView {
  _parent = document.querySelector("#p");
  _phase = document.querySelector("#phase");
  _phaseActivity = document.querySelector("#activityPhase");
  _deadline = document.querySelector("#deadlineActivityDate");
  _count = 1;

  submitNewPhase(handler) {
    this._phase.addEventListener("submit", (e) => {
      e.preventDefault();
      const phase = {};

      phase.date = this._deadline.value;
      phase.activity = this._phaseActivity.value;
      phase.order = this._count++;
      phase.percentageDone = 0;

      handler(phase);
    });
  }

  generatePhaseMarkup(data) {
    const markup = phaseView.render(data);

    this._parent.insertAdjacentHTML("beforeend", markup);
  }
}

export default new ActivityView();
