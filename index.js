var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document
    .querySelectorAll("button")[i].addEventListener("click",
    function handleClick() {
      var audio = new Audio('audio_file.mp3');
      audio.play();

    });
}
