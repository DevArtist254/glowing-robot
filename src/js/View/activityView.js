import phaseView from "./phaseView";

class ActivityView {
  _parent = document.querySelector("#tbody");
  _phase = document.querySelector(".phase-btn");
  _phaseActivity = document.querySelector("#activityPhase");
  _deadline = document.querySelector("#deadlineActivityDate");
  _count = 1;

  submitNewPhase(handler) {
    this._phase.addEventListener("click", handler);
  }

  getPhase() {
    const phase = {};

    phase.date = this._deadline.value;
    phase.activity = this._phaseActivity.value;
    phase.order = this._count++;

    return phase;
  }

  generatePhaseMarkup(data) {
    this._parent.innerHTML = "";

    const markup = data.map((el) => phaseView.render(el)).join("");

    this._parent.insertAdjacentHTML("beforeend", markup);
  }
}

export default new ActivityView();
