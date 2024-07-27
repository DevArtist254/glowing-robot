class NoteView {
  render() {
    return `
            <p class="note__close" id="noteCloser">x</p>     
            <div class="note__content">
                <form class="note">
                  <input
                    class="note__input"
                    type="text"
                    name="notes"
                    id="33"
                    placeholder="please break it down"
                    id="notesActivityPhase"
                  />
                  <ol class="note__list">
                    <li class="note__list--item" id="notes">
                      Get the meat
                      <input type="checkbox" name="item1" id="notesChecker" />
                    </li>
                  </ol>
                  <button class="note__submit" type="submit">Enter Note</button>
                </form>
            </div>
        `;
  }
}
