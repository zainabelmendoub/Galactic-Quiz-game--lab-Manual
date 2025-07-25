
function startQuiz() {
    const name = document.getElementById("username").value.trim();
    if (name === "") {
        alert ("Please enter your name.");
    }else {
        localStorage.setItem("playerName",name);
        window.location.href = "quiz.html"; 
    }
}