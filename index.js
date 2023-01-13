var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document
    .querySelectorAll("button")[i].addEventListener("click", function handleClick() {
      alert("I got clicked!");
    });
}
