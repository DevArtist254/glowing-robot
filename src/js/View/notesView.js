class NotesView {
  _tbody = document.querySelector("#tbody");

  addNotes(handler) {
      this._addNotes.addEventListener("click", handler);
  }
}

export default new NotesView();