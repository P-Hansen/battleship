
const userInput = function(board) {
  console.log("I'm listening")
  //click handler for grid
  $("td").on("click", function(event) {
      console.log(this);
      $(this).addClass("hit");
      $(this).text("!");
      console.log("Row?", $(this).parent());
      console.log("Col?", $(this).closest("th"));
    });

    //$("td").text("~");

};

//module.exports = userInput;