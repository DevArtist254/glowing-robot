class NotesView {
  _tbody = document.querySelector("#tbody");
  

  addNotes(handler) {
    this._tbody.addEventListener("click", (e) => {
      handler(e);
    });
  }

  displayNote(e) {
    const noteCloser = e.srcElement.offsetParent.children[1];
    const noteContent = e.srcElement.offsetParent.children[2];

    noteCloser.style.display = "inline";
    noteContent.style.display = "block";
  }

  enterNotes(){

  }
}

export default new NotesView();