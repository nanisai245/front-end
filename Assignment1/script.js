const containerEl = document.querySelector(".container");
const registerBtn = document.getElementById("register");
const submitBtn = document.getElementById('submit')
const greetingEl = document.getElementById('greeting');

registerBtn.addEventListener("click", function(){
    containerEl.classList.add('active');
    greetingEl.textContent = "Hey there! Let's Go";
});

submitBtn.addEventListener("click", function(){
    containerEl.classList.remove('active');
    greetingEl.textContent = "Welcome back! Gamer";
});