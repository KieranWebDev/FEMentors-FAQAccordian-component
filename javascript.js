const questionContainers = document.querySelectorAll('.question-container');
const answers = document.querySelectorAll('.answer');

console.log(questionContainers);

questionContainers.forEach((item) =>
  item.addEventListener('click', function () {
    this.children[1].classList.toggle('hidden');
    this.children[0].children[0].classList.toggle('rotate-icon');
    this.children[0].classList.toggle('h4-bold');
    console.log(this.children[0]);
  })
);
