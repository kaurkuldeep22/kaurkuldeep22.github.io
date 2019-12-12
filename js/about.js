document.getElementById("text").addEventListener("mouseover", mouseOver);
document.getElementById("instant").addEventListener("mouseover",mouseOver);
document.getElementById("goal").addEventListener("mouseover",mouseOver);
document.getElementById("access").addEventListener("mouseover",mouseOver);
document.getElementById("text").addEventListener("mouseout", mouseOut);
document.getElementById("instant").addEventListener("mouseout",mouseOut);
document.getElementById("goal").addEventListener("mouseout",mouseOut);
document.getElementById("access").addEventListener("mouseout",mouseOut);

function mouseOver() {
  document.getElementById("text").style.color = "magenta";
  document.getElementById("instant").style.color = "red";
  document.getElementById("goal").style.color = "navy";
  document.getElementById("access").style.color = "blue";

}

function mouseOut() {
  document.getElementById("text").style.color = "black";
  document.getElementById("instant").style.color = "black";
  document.getElementById("goal").style.color = "black";
  document.getElementById("access").style.color = "black";
}