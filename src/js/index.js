function clicked() {
  let x = document.getElementById("nav");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  console.log("bonjour");
}

document.getElementById("btn").addEventListener("click", clicked);
