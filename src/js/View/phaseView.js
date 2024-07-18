class PhaseView {

    render(data){
        return `
            <tr id="phaseActivity">
                <td id="order">1.</td>
                <td id="percentagePhaseDone">${data.percentageDone} %</td>
                <td id="phaseDate">${data.date}</td>
                <td id="activity">${data.activity}</td>
                <td id="notes">
                    <div class="btns">
                        <button id="submitDone">Done</button>
                        <button id="submitUnable">Unable</button>
                        <button id="addNote">Add a note</button>
                    </div>
                    <div class="note" style="display: none;">
                        <input type="text" name="notes" id="33" placeholder="please break it down" id="notesActivityPhase">
                        <ul>
                            <li id="notes">Get the meat <input type="checkbox" name="item1" id="notesChecker"></li>
                        </ul>
                    </div>
                </td>
            </tr>
        `;
    }
}

export default new PhaseView();