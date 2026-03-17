const questionTabs = document.querySelectorAll("#questions-tab>div");

questionTabs.forEach((targetQuestion) => {
    targetQuestion.addEventListener("click", () => {
        const index = [...targetQuestion.parentNode.children].indexOf(targetQuestion);

        // Hide all answers
        questionTabs.forEach((anotherQuestion) => {
            anotherQuestion.querySelector("&>p").style.display = "none";
        });

        // Show only selected
        targetQuestion.querySelector("&>p").style.display = "block";
    });
})