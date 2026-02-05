document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank you for contacting us! We will reply soon.");
    this.reset();
});
