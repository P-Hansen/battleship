
const userInput = function(board, enemyBoard, twoWord, threeWord, fourWord, fiveWord, sixWord) {
  let gameState = null;
  console.log("I'm listening")
  // const twoWord = "OI";
  // const threeWord = "SUB";
  // const fourWord = "SHIP";
  // const fiveWord = "BILGE";
  // const sixWord = "ANCHOR";

  $("#2-letter").html(`<table id="2-letter"><tr><td>${twoWord[0]}</td><td>${twoWord[1]}</td></tr></table>`);
  $("#3-letter").html(`<table id="3-letter"><tr><td>${threeWord[0]}</td><td>${threeWord[1]}</td><td>${threeWord[2]}</td></tr></table>`);
  $("#4-letter").html(`<table id="4-letter"><tr><td>${fourWord[0]}</td><td>${fourWord[1]}</td><td>${fourWord[2]}</td><td>${fourWord[3]}</td></tr></table>`);
  $("#5-letter").html(`<table id="5-letter"><tr><td>${fiveWord[0]}</td><td>${fiveWord[1]}</td><td>${fiveWord[2]}</td><td>${fiveWord[3]}</td><td>${fiveWord[4]}</td></tr></table>`);
  $("#6-letter").html(`<table id="6-letter"><tr><td>${sixWord[0]}</td><td>${sixWord[1]}</td><td>${sixWord[2]}</td><td>${sixWord[3]}</td><td>${sixWord[4]}</td><td>${sixWord[5]}</td></tr></table>`);

  //click handler for player grid during the game
  $(".playerBoard td").on("click", function(event) {
    let myClass = $(this).attr("class")[0];
    //horizontal 3 letter word placement
    if (gameState === "place3" &
      ($(this).html() === threeWord[0] || $(this).html() === "") &
      ($(this).next().html() === threeWord[1] || $(this).next().html() === "") &
      ($(this).next().next().html() === threeWord[2] || $(this).next().next().html() === "")
    ) {

      let col = $(this).attr("class")[0];
      let row = $(this).parent().attr("class");
      
      let col3 = $(this).next().next().attr("class")[0];
      board[col3+row] = threeWord[2];
      $(this).next().next().text(threeWord[2]);
      
      let col2 = $(this).next().attr("class")[0];
      board[col2+row] = threeWord[1];
      $(this).next().text(threeWord[1]);

      board[col+row] = threeWord[0];
      $(this).text(threeWord[0]);
      
      $(this).addClass("placed");
      $(this).next().addClass("placed");
      $(this).next().next().addClass("placed");

      gameState = null;
      //vertical 3 letter word placement
    } else if (gameState === "place3vert" &
      ($(this).html() === threeWord[0] || $(this).html() === "") &
      ($(this).closest('tr').next().find(`.${myClass}`).html() === threeWord[1] || $(this).closest('tr').next().find(`.${myClass}`).html() === "") &
      ($(this).closest('tr').next().next().find(`.${myClass}`).html() === threeWord[2] || $(this).closest('tr').next().next().find(`.${myClass}`).html() === "")
    ) {
      let col = myClass;
      let row = $(this).parent().attr("class");

      board[col+(row+2)] = threeWord[2];
      $(this).closest('tr').next().next().find(`.${myClass}`).text(threeWord[2]);
      
      board[col+(row+1)] = threeWord[1];
      $(this).closest('tr').next().find(`.${myClass}`).text(threeWord[1]);

      board[col+row] = threeWord[0];
      $(this).text(threeWord[0]);
      
      $(this).addClass("placed");
      $(this).closest('tr').next().find(`.${myClass}`).addClass("placed");
      $(this).closest('tr').next().next().find(`.${myClass}`).addClass("placed");
      gameState = null;

      //horizontal 2 letter word placement
    } else if (gameState === "place2" &
      ($(this).html() === twoWord[0] || $(this).html() === "") &
      ($(this).next().html() === twoWord[1] || $(this).next().html() === "")
    ) {
      let col = $(this).attr("class")[0];
      let row = $(this).parent().attr("class");
      
      let col2 = $(this).next().attr("class")[0];
      board[col2+row] = twoWord[1];
      $(this).next().text(twoWord[1]);
      
      board[col+row] = twoWord[0];
      $(this).text(twoWord[0]);
      
      $(this).addClass("placed");
      $(this).next().addClass("placed");

      gameState = null;
      //vertical 2 letter word placement
    } else if (gameState === "place2vert" &
    ($(this).html() === twoWord[0] || $(this).html() === "") &
    ($(this).closest('tr').next().find(`.${myClass}`).html() === twoWord[1] || $(this).closest('tr').next().find(`.${myClass}`).html() === "")
    ) {
      let col = myClass;
      let row = $(this).parent().attr("class");
      
      board[col+(row+1)] = twoWord[1];
      $(this).closest('tr').next().find(`.${myClass}`).text(twoWord[1]);

      board[col+row] = twoWord[0];
      $(this).text(twoWord[0]);
      
      $(this).addClass("placed");
      $(this).closest('tr').next().find(`.${myClass}`).addClass("placed");
      gameState = null;
      //horizontal 4 letter word placement
    } else if (gameState === "place4" &
      ($(this).html() === fourWord[0] || $(this).html() === "") &
      ($(this).next().html() === fourWord[1] || $(this).next().html() === "") &
      ($(this).next().next().html() === fourWord[2] || $(this).next().next().html() === "") &
      ($(this).next().next().next().html() === fourWord[3] || $(this).next().next().next().html() === "")
    ) {
      let col = $(this).attr("class")[0];
      let row = $(this).parent().attr("class");
      
      let col4 = $(this).next().next().next().attr("class")[0];
      board[col4+row] = fourWord[3];
      $(this).next().next().next().text(fourWord[3]);

      let col3 = $(this).next().next().attr("class")[0];
      board[col3+row] = fourWord[2];
      $(this).next().next().text(fourWord[2]);

      let col2 = $(this).next().attr("class")[0];
      board[col2+row] = fourWord[1];
      $(this).next().text(fourWord[1]);
      
      board[col+row] = fourWord[0];
      $(this).text(fourWord[0]);
      
      $(this).addClass("placed");
      $(this).next().addClass("placed");
      $(this).next().next().addClass("placed");
      $(this).next().next().next().addClass("placed");

      gameState = null;
      //vertical 4 letter word placement
    }  else if (gameState === "place4vert" &
      ($(this).html() === fourWord[0] || $(this).html() === "") &
      ($(this).closest('tr').next().find(`.${myClass}`).html() === fourWord[1] || $(this).closest('tr').next().find(`.${myClass}`).html() === "") &
      ($(this).closest('tr').next().next().find(`.${myClass}`).html() === fourWord[2] || $(this).closest('tr').next().next().find(`.${myClass}`).html() === "") &
      ($(this).closest('tr').next().next().next().find(`.${myClass}`).html() === fourWord[3] || $(this).closest('tr').next().next().next().find(`.${myClass}`).html() === "")
    ) {
    let col = myClass;
    let row = $(this).parent().attr("class");

    board[col+(row+3)] = fourWord[3];
    $(this).closest('tr').next().next().next().find(`.${myClass}`).text(fourWord[3]);

    board[col+(row+2)] = fourWord[2];
    $(this).closest('tr').next().next().find(`.${myClass}`).text(fourWord[2]);
    
    board[col+(row+1)] = fourWord[1];
    $(this).closest('tr').next().find(`.${myClass}`).text(fourWord[1]);

    board[col+row] = fourWord[0];
    $(this).text(fourWord[0]);
    
    $(this).addClass("placed");
    $(this).closest('tr').next().find(`.${myClass}`).addClass("placed");
    $(this).closest('tr').next().next().find(`.${myClass}`).addClass("placed");
    $(this).closest('tr').next().next().next().find(`.${myClass}`).addClass("placed");
    gameState = null;
      //horizontal 5 word placement
    } else if (gameState === "place5" &
      ($(this).html() === fiveWord[0] || $(this).html() === "") &
      ($(this).next().html() === fiveWord[1] || $(this).next().html() === "") &
      ($(this).next().next().html() === fiveWord[2] || $(this).next().next().html() === "") &
      ($(this).next().next().next().html() === fiveWord[3] || $(this).next().next().next().html() === "") &
      ($(this).next().next().next().next().html() === fiveWord[4] || $(this).next().next().next().next().html() === "")
    ) {
      let col = $(this).attr("class")[0];
      let row = $(this).parent().attr("class");

      let col5 = $(this).next().next().next().next().attr("class")[0];
      board[col5+row] = fiveWord[4];
      $(this).next().next().next().next().text(fiveWord[4]);
      
      let col4 = $(this).next().next().next().attr("class")[0];
      board[col4+row] = fiveWord[3];
      $(this).next().next().next().text(fiveWord[3]);

      let col3 = $(this).next().next().attr("class")[0];
      board[col3+row] = fiveWord[2];
      $(this).next().next().text(fiveWord[2]);

      let col2 = $(this).next().attr("class")[0];
      board[col2+row] = fiveWord[1];
      $(this).next().text(fiveWord[1]);
      
      board[col+row] = fiveWord[0];
      $(this).text(fiveWord[0]);
      
      $(this).addClass("placed");
      $(this).next().addClass("placed");
      $(this).next().next().addClass("placed");
      $(this).next().next().next().addClass("placed");
      $(this).next().next().next().next().addClass("placed");
      gameState = null;

      //vertical 5 word placement
    } else if (gameState === "place5vert" &
      ($(this).html() === fiveWord[0] || $(this).html() === "") &
      ($(this).closest('tr').next().find(`.${myClass}`).html() === fiveWord[1] || $(this).closest('tr').next().find(`.${myClass}`).html() === "") &
      ($(this).closest('tr').next().next().find(`.${myClass}`).html() === fiveWord[2] || $(this).closest('tr').next().next().find(`.${myClass}`).html() === "") &
      ($(this).closest('tr').next().next().next().find(`.${myClass}`).html() === fiveWord[3] || $(this).closest('tr').next().next().next().find(`.${myClass}`).html() === "") &
      ($(this).closest('tr').next().next().next().next().find(`.${myClass}`).html() === fiveWord[4] || $(this).closest('tr').next().next().next().next().find(`.${myClass}`).html() === "")
    ) {
    let col = myClass;
    let row = $(this).parent().attr("class");

    board[col+(row+4)] = fiveWord[4];
    $(this).closest('tr').next().next().next().next().find(`.${myClass}`).text(fiveWord[4]);

    board[col+(row+3)] = fiveWord[3];
    $(this).closest('tr').next().next().next().find(`.${myClass}`).text(fiveWord[3]);

    board[col+(row+2)] = fiveWord[2];
    $(this).closest('tr').next().next().find(`.${myClass}`).text(fiveWord[2]);
    
    board[col+(row+1)] = fiveWord[1];
    $(this).closest('tr').next().find(`.${myClass}`).text(fiveWord[1]);

    board[col+row] = fiveWord[0];
    $(this).text(fiveWord[0]);
    
    $(this).addClass("placed");
    $(this).closest('tr').next().find(`.${myClass}`).addClass("placed");
    $(this).closest('tr').next().next().find(`.${myClass}`).addClass("placed");
    $(this).closest('tr').next().next().next().find(`.${myClass}`).addClass("placed");
    $(this).closest('tr').next().next().next().next().find(`.${myClass}`).addClass("placed");
    gameState = null;
      //horizontal 6 word placement
    } else if (gameState === "place6" &
      ($(this).html() === sixWord[0] || $(this).html() === "") &
      ($(this).next().html() === sixWord[1] || $(this).next().html() === "") &
      ($(this).next().next().html() === sixWord[2] || $(this).next().next().html() === "") &
      ($(this).next().next().next().html() === sixWord[3] || $(this).next().next().next().html() === "") &
      ($(this).next().next().next().next().html() === sixWord[4] || $(this).next().next().next().next().html() === "") &
      ($(this).next().next().next().next().next().html() === sixWord[5] || $(this).next().next().next().next().next().html() === "")
    ) {
      let col = $(this).attr("class")[0];
      let row = $(this).parent().attr("class");

      let col6 = $(this).next().next().next().next().next().attr("class")[0];
      board[col6+row] = sixWord[5];
      $(this).next().next().next().next().next().text(sixWord[5]);

      let col5 = $(this).next().next().next().next().attr("class")[0];
      board[col5+row] = sixWord[4];
      $(this).next().next().next().next().text(sixWord[4]);
      
      let col4 = $(this).next().next().next().attr("class")[0];
      board[col4+row] = sixWord[3];
      $(this).next().next().next().text(sixWord[3]);

      let col3 = $(this).next().next().attr("class")[0];
      board[col3+row] = sixWord[2];
      $(this).next().next().text(sixWord[2]);

      let col2 = $(this).next().attr("class")[0];
      board[col2+row] = sixWord[1];
      $(this).next().text(sixWord[1]);
      
      board[col+row] = sixWord[0];
      $(this).text(sixWord[0]);
      
      $(this).addClass("placed");
      $(this).next().addClass("placed");
      $(this).next().next().addClass("placed");
      $(this).next().next().next().addClass("placed");
      $(this).next().next().next().next().addClass("placed");
      $(this).next().next().next().next().next().addClass("placed");

      gameState = null;
      //vertical 6 word placement
    } else if (gameState === "place6vert" &
      ($(this).html() === sixWord[0] || $(this).html() === "") &
      ($(this).closest('tr').next().find(`.${myClass}`).html() === sixWord[1] || $(this).closest('tr').next().find(`.${myClass}`).html() === "") &
      ($(this).closest('tr').next().next().find(`.${myClass}`).html() === sixWord[2] || $(this).closest('tr').next().next().find(`.${myClass}`).html() === "") &
      ($(this).closest('tr').next().next().next().find(`.${myClass}`).html() === sixWord[3] || $(this).closest('tr').next().next().next().find(`.${myClass}`).html() === "") &
      ($(this).closest('tr').next().next().next().next().find(`.${myClass}`).html() === sixWord[4] || $(this).closest('tr').next().next().next().next().find(`.${myClass}`).html() === "") &
      ($(this).closest('tr').next().next().next().next().next().find(`.${myClass}`).html() === sixWord[5] || $(this).closest('tr').next().next().next().next().next().find(`.${myClass}`).html() === "")
    ) {
    let col = myClass;
    let row = $(this).parent().attr("class");

    board[col+(row+5)] = sixWord[5];
    $(this).closest('tr').next().next().next().next().next().find(`.${myClass}`).text(sixWord[5]);

    board[col+(row+4)] = sixWord[4];
    $(this).closest('tr').next().next().next().next().find(`.${myClass}`).text(sixWord[4]);

    board[col+(row+3)] = sixWord[3];
    $(this).closest('tr').next().next().next().find(`.${myClass}`).text(sixWord[3]);

    board[col+(row+2)] = sixWord[2];
    $(this).closest('tr').next().next().find(`.${myClass}`).text(sixWord[2]);
    
    board[col+(row+1)] = sixWord[1];
    $(this).closest('tr').next().find(`.${myClass}`).text(sixWord[1]);

    board[col+row] = sixWord[0];
    $(this).text(sixWord[0]);
    
    $(this).addClass("placed");
    $(this).closest('tr').next().find(`.${myClass}`).addClass("placed");
    $(this).closest('tr').next().next().find(`.${myClass}`).addClass("placed");
    $(this).closest('tr').next().next().next().find(`.${myClass}`).addClass("placed");
    $(this).closest('tr').next().next().next().next().find(`.${myClass}`).addClass("placed");
    $(this).closest('tr').next().next().next().next().next().find(`.${myClass}`).addClass("placed");
    gameState = null;

    } 
  });

    //adds yellow when you have ship selected and enter a square
    $(".playerBoard td").on("mouseenter", function(event) {
      let myClass = $(this).attr("class");
      if (gameState === "place3") {
        $(this).addClass("place");
        $(this).next().addClass("place");
        $(this).next().next().addClass("place");
      } else if (gameState === "place3vert") {
        $(this).addClass("place");
        $(this).closest('tr').next().find(`.${myClass}`).addClass("place");
        $(this).closest('tr').next().next().find(`.${myClass}`).addClass("place");
      } else if (gameState === "place2") {
        $(this).addClass("place");
        $(this).next().addClass("place");
      } else if (gameState === "place2vert") {
        $(this).addClass("place");
        $(this).closest('tr').next().find(`.${myClass}`).addClass("place");
      } else if (gameState === "place4") {
        $(this).addClass("place");
        $(this).next().addClass("place");
        $(this).next().next().addClass("place");
        $(this).next().next().next().addClass("place");
      } else if (gameState === "place4vert") {
        $(this).addClass("place");
        $(this).closest('tr').next().find(`.${myClass}`).addClass("place");
        $(this).closest('tr').next().next().find(`.${myClass}`).addClass("place");
        $(this).closest('tr').next().next().next().find(`.${myClass}`).addClass("place");
      } else if (gameState === "place5") {
        $(this).addClass("place");
        $(this).next().addClass("place");
        $(this).next().next().addClass("place");
        $(this).next().next().next().addClass("place");
        $(this).next().next().next().next().addClass("place");
      } else if (gameState === "place5vert") {
        $(this).addClass("place");
        $(this).closest('tr').next().find(`.${myClass}`).addClass("place");
        $(this).closest('tr').next().next().find(`.${myClass}`).addClass("place");
        $(this).closest('tr').next().next().next().find(`.${myClass}`).addClass("place");
        $(this).closest('tr').next().next().next().next().find(`.${myClass}`).addClass("place");
      } else if (gameState === "place6") {
        $(this).addClass("place");
        $(this).next().addClass("place");
        $(this).next().next().addClass("place");
        $(this).next().next().next().addClass("place");
        $(this).next().next().next().next().addClass("place");
        $(this).next().next().next().next().next().addClass("place");
      } else if (gameState === "place6vert") {
        $(this).addClass("place");
        $(this).closest('tr').next().find(`.${myClass}`).addClass("place");
        $(this).closest('tr').next().next().find(`.${myClass}`).addClass("place");
        $(this).closest('tr').next().next().next().find(`.${myClass}`).addClass("place");
        $(this).closest('tr').next().next().next().next().find(`.${myClass}`).addClass("place");
        $(this).closest('tr').next().next().next().next().next().find(`.${myClass}`).addClass("place");
      }
    });

    //removes yellow when you have a ship selected and leave a square
    $(".playerBoard td").on("mouseleave", function(event) {
      $("td").removeClass("place");
    });

  //click 2 letter word
  $("#2-letter").on("click", function(event) {
    gameState = "place2";
    console.log("placing 2 letter word");
    $(this).hide();
    });

  //click 3 letter word
  $("#3-letter").on("click", function(event) {
    gameState = "place3";
    console.log("placing 3 letter word");
    $(this).hide();
    });

  //click 4 letter word
  $("#4-letter").on("click", function(event) {
    gameState = "place4";
    console.log("placing 4 letter word");
    $(this).hide();
    });

    //click 5 letter word
  $("#5-letter").on("click", function(event) {
    gameState = "place5";
    console.log("placing 5 letter word");
    $(this).hide();
    });

    //click 6 letter word
  $("#6-letter").on("click", function(event) {
    gameState = "place6";
    console.log("placing 6 letter word");
    $(this).hide();
    });

//right click unselects word
$(".playerBoard").contextmenu(function(event) {
  console.log(gameState);
  if (gameState === "place2" || gameState === "place2vert") {$("#2-letter").show();}
  if (gameState === "place3" || gameState === "place3vert") {$("#3-letter").show();}
  if (gameState === "place4" || gameState === "place4vert") {$("#4-letter").show();}
  if (gameState === "place5" || gameState === "place5vert") {$("#5-letter").show();}
  if (gameState === "place6" || gameState === "place6vert") {$("#6-letter").show();}
  gameState = null;
  return false;
});

//toggles horizontal/vertical placement state by mouse wheel
$(".playerBoard").bind("wheel", (event)=>{
  event.preventDefault();
  if (gameState === "place2") { gameState = "place2vert";
  } else if (gameState === "place2vert") { gameState = "place2";

  } else if (gameState === "place3") { gameState = "place3vert";
  } else if (gameState === "place3vert") { gameState = "place3";

  } else if (gameState === "place4") { gameState = "place4vert";
  } else if (gameState === "place4vert") { gameState = "place4";
    
  } else if (gameState === "place5") { gameState = "place5vert";
  } else if (gameState === "place5vert") { gameState = "place5";
    
  } else if (gameState === "place6") { gameState = "place6vert";
  } else if (gameState === "place6vert") { gameState = "place6";
  }
  $("td").removeClass("place");
});


/////////////////////////////////////////////////////////////////////
  //click handler for enemy grid during the game
  $(".enemyBoard td").on("click", function(event) {
    if (gameState === null &
      $("#2-letter").is(":hidden") &
      $("#3-letter").is(":hidden") &
      $("#4-letter").is(":hidden") &
      $("#5-letter").is(":hidden") &
      $("#6-letter").is(":hidden")) {
      let col = $(this).attr("class")[0];
      let row = $(this).parent().attr("class");
      if (enemyBoard[col+row] === '~') {
        $(this).addClass("miss");
      } else {
        $(this).addClass("hit");
      }
      $(this).text(enemyBoard[col+row]);
      enemyFire();
    }
  });

  //enemy shots at player grid
  function enemyFire() {
    const [col, row] = enemyFireLocation();
    if (board[col+row] === '~') {
      $(".playerBoard").find(`.${row}`).find(`.${col}`).addClass("miss")
    } else {
      $(".playerBoard").find(`.${row}`).find(`.${col}`).removeClass("placed")
      $(".playerBoard").find(`.${row}`).find(`.${col}`).removeClass("place")
      $(".playerBoard").find(`.${row}`).find(`.${col}`).addClass("hit")
      //adds adjacent squares as next targets
      addTargets([col, row]);
    }
    $(".playerBoard").find(`.${row}`).find(`.${col}`).text(board[col+row]);
  }
  

};

//module.exports = userInput;