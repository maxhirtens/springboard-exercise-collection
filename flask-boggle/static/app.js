class BoggleGame {
  constructor(boardId, secs = 60) {
    this.secs = secs;
    this.score = 0;
    this.words = new Set();
    this.board = $("#" + boardId);
  }
  async handleSubmit(evt) {
    evt.preventDefault();
  }
}
