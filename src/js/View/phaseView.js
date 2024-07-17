class PhaseView {
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
}

export default new PhaseView();