//Variables
let box = document.querySelector(".options");
let questionBox = document.querySelector(".question");
let op1 = document.getElementById("op1");
let op2 = document.getElementById("op2");
let op3 = document.getElementById("op3");
let op4 = document.getElementById("op4");
let scoreBoard = document.getElementById("score-number");
let btn = document.getElementById("button");

var app = {
  questions: [
    {
      q: "What is the name of US President",
      options: ["Trump", "Boris Johnson", "Buhari", "Macron"],
      answer: 1,
    },
    {
      q: "What is the name of UK Prime Minister",
      options: ["Trump", "Boris Johnson", "Buhari", "Macron"],
      answer: 2,
    },
    {
      q: "What is the name of the Nigerian President",
      options: ["Trump", "Boris Johnson", "Buhari", "Macron"],
      answer: 3,
    },
    {
      q: "What is the name of UK France President",
      options: ["Trump", "Boris Johnson", "Buhari", "Macron"],
      answer: 4,
    },
  ],
  index: 0,
  load: function () {
    if (this.index <= this.questions.length - 1) {
      questionBox.innerHTML =
        this.index + 1 + ". " + this.questions[this.index].q;
      op1.innerHTML = this.questions[this.index].options[0];
      op2.innerHTML = this.questions[this.index].options[1];
      op3.innerHTML = this.questions[this.index].options[2];
      op4.innerHTML = this.questions[this.index].options[3];
      this.scoreBoard();
    } else {
      questionBox.innerHTML = "Quiz Over!!!";
      op1.style.display = "none";
      op2.style.display = "none";
      op3.style.display = "none";
      op4.style.display = "none";
      btn.style.display = "none";
    }
  },
  check: function (ele) {
    let id = ele.id.split("");
    if (id[id.length - 1] == this.questions[this.index].answer) {
      this.score++;
      ele.className = "correct";
      ele.innerHTML = "Correct";
      this.scoreBoard();
    } else {
      ele.className = "wrong";
      ele.innerHTML = "Wrong";
    }
  },
  next: function () {
    this.index++;
    this.load();
  },
  notClickAble: function () {
    for (i = 0; i < box.children.length; i++) {
      box.children[i].style.pointerEvents = "none";
    }
  },
  clickAble: function () {
    for (i = 0; i < box.children.length; i++) {
      box.children[i].style.pointerEvents = "auto";
      box.children[i].className = "";
    }
  },
  score: 0,
  scoreBoard: function () {
    scoreBoard.innerHTML = this.score + "/" + this.questions.length;
  },
};

window.onload = app.load();

function button(ele) {
  app.check(ele);
  app.notClickAble();
}

function next() {
  app.next();
  app.clickAble();
}
