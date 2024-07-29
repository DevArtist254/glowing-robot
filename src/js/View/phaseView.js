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
            </td>
        </tr>
        `;
  }
}

export default new PhaseView();
