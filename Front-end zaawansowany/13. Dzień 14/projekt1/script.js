const buttonModal = document.querySelector(".article button");
const modalWrap = document.querySelector(".modal-wrap");
const article = document.querySelector(".article");
const close = document.querySelector(".hide")

buttonModal.addEventListener("click", function () {
    modalWrap.classList.add("active");
    article.classList.add("blur");
})

close.addEventListener("click", function () {
    modalWrap.classList.remove("active");
    article.classList.remove("blur");
})