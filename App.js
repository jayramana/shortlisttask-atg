
document.querySelector(".sin").addEventListener("click", () => {
    
    document.querySelectorAll(".cross").forEach((e) => {
        e.style.display = "display"
    })
    document.querySelector(".vg").style.display = "block";
        
    document.querySelector(".small").style.display = "block";
    
});
document.querySelector(".vg").addEventListener("click", () => {
    document.querySelector(".vg").style.display = "none";

})
document.querySelectorAll(".cross").forEach((e) => {
    e.addEventListener("click", () => {
        
        document.querySelector(".small").style.display = "none";
        document.querySelector(".hide").style.display = "none";
    })
})

document.querySelector(".an-1").addEventListener("click", () => {
    document.querySelector(".vg").style.display = "block";
    document.querySelector(".hide").style.display = "block";
});

document.querySelector(".sgn").addEventListener("click", () => {
    document.querySelector(".name-inp").style.display = "none";
    document.querySelector(".m").style.display = "none";
    document.querySelector(".bl").style.display = "block";
    document.querySelector(".al").textContent = "Don't have an account yet?";
    document.querySelector(".terms").textContent = "Forgot Password?";
    document.querySelector(".terms").style.color = "black";
})


document.querySelector(".con").addEventListener("click", () => {
    document.querySelector(".c-acc").style.display = "none";
    document.querySelector(".m").style.display = "none";
    document.querySelector(".cbtn").innerHTML = "Sign In";
    document.querySelector(".term").textContent = "Forgot Password ?";
    document.querySelector(".con").textContent = "or,Create Account";

})

document.querySelector(".jgp").addEventListener("click", () => {
    document.querySelector(".gp").textContent = "Leave Group"
})
document.querySelector(".join").addEventListener("click", () => {
   document.querySelector(".join").style.display = "none"
    document.querySelector(".p").style.display = "block";
})


