
const userInput = function(board) {
  let gameState = null;
  console.log("I'm listening")
  //click handler for player grid during the game
  $(".playerBoard td").on("click", function(event) {
    if (gameState === "place3") {
      let col = $(this).attr("class")[0];
      let row = $(this).parent().attr("class");
      board[col+row] = 'R';
      let col2 = $(this).next().attr("class")[0];
      board[col2+row] = 'O';
      let col3 = $(this).next().next().attr("class")[0];
      board[col3+row] = 'W';
      $(this).removeClass("place");
      $(this).next().removeClass("place");
      $(this).next().next().removeClass("place");
      $(this).addClass("placed");
      $(this).next().addClass("placed");
      $(this).next().next().addClass("placed");
      gameState = null;
    }
  });

    $(".playerBoard td").on("mouseenter", function(event) {
      if (gameState === "place3") {
        $(this).addClass("place");
        $(this).next().addClass("place");
        $(this).next().next().addClass("place");
      } else if (gameState === "place4") {
        $(this).addClass("place");
        let colClass = $(this).attr("class")[0];
        let rowClass = $(this).parent().attr("class");
        console.log("col?", colClass);
        console.log("row?", rowClass);
        //
        $(this).next(colClass).next(colClass).addClass("place");
      }
    });

    $(".playerBoard td").on("mouseleave", function(event) {
      if (gameState === "place3") {
        $(this).removeClass("place");
        $(this).next().removeClass("place");
        $(this).next().next().removeClass("place");
      } else if (gameState === "place4") {
        $(this).removeClass("place");
        $(this).next().removeClass("place");
        $(this).next().next().removeClass("place");
      }

    });

  //click 3 letter word
  $("#3-letter").on("click", function(event) {
    gameState = "place3";
    console.log("placing 3 letter word");
    $(this).remove();
    });

  //click 4 letter word
  $("#4-letter").on("click", function(event) {
    gameState = "place4";
    console.log("placing 4 letter word");
    $(this).remove();
    });
/////////////////////////////////////////////////////////////////////
  //click handler for enemy grid during the game
  $(".enemyBoard td").on("click", function(event) {
    if (gameState === null) {
      let col = $(this).attr("class")[0];
      let row = $(this).parent().attr("class");
      if (board[col+row] === '~') {
        $(this).addClass("miss");
      } else {
        $(this).addClass("hit");
      }
      $(this).text(board[col+row]);
    }
  });

};

//module.exports = userInput;