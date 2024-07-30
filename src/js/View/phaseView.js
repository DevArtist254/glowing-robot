class PhaseView {
  render(data) {
    return `
        <tr class="phases__table--tr" id="${data.phaseId}">
            <td class="phases__table--td" id="order">${data.order}</td>
            <td class="phases__table--td" id="percentagePhaseDone">
              <span id="percentagePhaseDone__p">${data.percentageDone} %</span>
              <span id="percentagePhaseDone__c"></span>
            </td>
            <td class="phases__table--td" id="phaseDate">${data.date}</td>
            <td class="phases__table--td" id="activity">${data.activity}</td>
            <td class="phases__table--td" id="notes">
              <span class="note__btns">
                <p id="submitDone">Done</p>
                <p id="submitUnable">Unable</p>
                <p id="addNote">Add a note</p>
              </span>
              <p class="note__close" id="noteCloser">x</p>     
              <div class="note__content">
                  <form class="note">
                    <input
                      class="note__input"
                      type="text"
                      name="notes"
                      placeholder="please break it down"
                      id="notesActivityPhase"
                    />
                    <button class="note__submit" type="submit">Enter Note</button>
                  </form>
              </div>
            </td>
        </tr>
        `;
  }
}

export default new PhaseView();
