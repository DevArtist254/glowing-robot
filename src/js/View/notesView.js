class NotesView {
  _addNotes = document.querySelector("#addNote");


  addNotes(handler) {
    if (this._addNotes !== null) {
      this._addNotes.addEventListener("click", () => {
        console.log("Hello worldd");

        handler();
      });
    }else {
      console.log("Nothing happened");
    }
    
  }
}

export default new NotesView();