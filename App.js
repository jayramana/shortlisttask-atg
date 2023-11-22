document.querySelectorAll(".threedts").forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelector(".last").style.display = "block";
  });
});

document.querySelector(".jgp").addEventListener("click", () => {
  document.querySelector(".gp").textContent = "Leave Group";
});
document.querySelector(".join").addEventListener("click", () => {
  document.querySelector(".join").style.display = "none";
  document.querySelector(".p").style.display = "block";
});
document.querySelector(".sg").addEventListener("click", () => {
  console.log("or");
  document.querySelectorAll(".be").forEach((e) => {
    e.style.display = "none";
    document.querySelector(".titles").textContent = "Sign In";
    document.querySelector(".ch-1").textContent = "Sign In";
    document.querySelector(".crp").style.visibility = "visible";
    document.querySelector(".sg").style.display = "none";
    document.querySelector(".or").textContent = "Don't have an account yet?";
    document.querySelector(".for").style.display = "block";
    document.querySelector(".tac").style.display = "none";
  });
});
document.querySelector(".an-1").addEventListener("click", () => {
  document.querySelector(".lglogin").style.display = "block";
});
document.querySelector(".cro").addEventListener("click", () => {
  document.querySelector(".lglogin").style.display = "none";
  document.querySelectorAll(".be").forEach((e) => {
    e.style.display = "block";
  })
});
document.querySelector(".cr").addEventListener("click", () => {
  document.querySelector(".smlgn").style.display = "none";
});
document.querySelector(".sin").addEventListener("click", () => {
  document.querySelector(".smlgn").style.display = "block";
});

document.querySelector(".alter").addEventListener("click", () => {
  document.querySelectorAll(".be").forEach((e) => {
    e.style.display = "none";
  });
  document.querySelector(".ch-1").textContent = "Sign In";
  document.querySelector(".alter").textContent = "or,Create an account";
  document.querySelector(".tacd ").innerHTML = "Forgot Password?";
});

