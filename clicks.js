
const userInput = function() {
    console.log("I'm listening")
    $("td").on("click", function(event) {
        console.log("click!");
        $(this).addClass("hit");
      });
};

//module.exports = userInput;