class NotesView {
  _addNotes = document.querySelector("addNote");


  addNotes(handler) {
    this._addNotes.addEventListener("click", () => {
        console.log("Hello world");
    })
  }
}

export default new NotesView();