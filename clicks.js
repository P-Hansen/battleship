
const userInput = function(board) {
  console.log("I'm listening")
  //click handler for grid
  $("td").on("click", function(event) {
    let col = $(this).attr("class")[0];
    let row = $(this).parent().attr("class")
    if (board[col+row] === '~') {
      $(this).addClass("miss");
    } else {
      $(this).addClass("hit");
    }
    $(this).text(board[col+row]);
    // console.log("Col?", col);
    // console.log("Row?", row);
    //console.log("in the object", board[col+row]);
    });

    //$("td").text("~");

};

//module.exports = userInput;