const playCancion = document.getElementsByClassName("play");
const stopCancion = document.getElementsByClassName("stop");
const volumen = document.querySelector(".volumen");
console.log(playCancion, stopCancion);

let audio;

//_ El "for" nos permitirá recorrer todo el arreglo que nos genera el getElementsByClassName
for (elemento of playCancion) {
  //_ Luego a cada elemento dentro del arreglo le agregamos un evento click
  elemento.addEventListener("click", function () {
    let cancion = this.getAttribute("id");
    audio = new Audio(`./audios/${cancion}.mp3`);
    audio.play();
  });
}

for (elemento of stopCancion) {
  elemento.addEventListener("click", function () {
    audio.pause();
  });
}

volumen.addEventListener("click", function () {
  let vol = this.value;
  audio.volume = vol;
});
