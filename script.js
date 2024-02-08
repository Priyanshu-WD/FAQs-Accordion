const questions = document.querySelectorAll(".query");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const accordianDescription = question.nextElementSibling;
    const plusIcon = question.querySelector(".Plus");
    const MinusIcon = question.querySelector(".Minus");

    if (accordianDescription.style.maxHeight) {
      accordianDescription.style.maxHeight = null;
      plusIcon.style.display = "block";
      MinusIcon.style.display = "none";
    } else {
      accordianDescription.style.maxHeight =
        accordianDescription.scrollHeight + "px";
      plusIcon.style.display = "none";
      MinusIcon.style.display = "block";
    }
  });
});
