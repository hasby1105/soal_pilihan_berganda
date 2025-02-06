const questions = [{
},
  {
    question: "1. Apa tag yang digunakan untuk menulis judul halaman di bagian atas browser?",
    choices: ["A) title", "B) header", "C) h1", "D) meta"],
    correctAnswer: "A"
  },
  {
    question: "2. Apa yang digunakan untuk mengubah warna latar belakang halaman?",
    choices: ["A) background-color", "B) color", "C) font-size", "D) text-align"],
    correctAnswer: "A"
  },
  {
    question: "3. Fungsi mana yang digunakan untuk menampilkan pesan dalam kotak dialog?",
    choices: ["A) alert()", "B) console.log()", "C) prompt()", "D) message()"],
    correctAnswer: "A"
  },
  {
    question: "4. Tag mana yang digunakan untuk membuat daftar tak terurut?",
    choices: ["A) ol", "B) ul", "C) li", "D) dl"],
    correctAnswer: "B"
  },
  {
    question: "5. Bagaimana cara membuat teks menjadi tebal?",
    choices: ["A) font-weight: bold;", "B) font-style: bold;", "C) text-weight: bold;", "D) text-style: bold;"],
    correctAnswer: "A"
  },
  {
    question: "6. Fungsi apa yang digunakan untuk mendeklarasikan variabel?",
    choices: ["A) let", "B) var", "C) const", "D) Semua di atas"],
    correctAnswer: "D"
  },
  {
    question: "7. Tag mana yang digunakan untuk membuat hyperlink?",
    choices: ["A) a", "B) link", "C) img", "D) href"],
    correctAnswer: "A"
  },
  {
    question: "8. Bagaimana cara mengubah ukuran font di CSS?",
    choices: ["A) font-size", "B) text-size", "C) font-style", "D) text-font"],
    correctAnswer: "A"
  },
  {
    question: "9. Apa hasil dari console.log(2 + '2')?",
    choices: ["A) 4", "B) 22", "C) NaN", "D) undefined"],
    correctAnswer: "B"
  },
  {
    question: "10. Tag mana yang digunakan untuk menampilkan gambar di halaman web?",
    choices: ["A) img", "B) image", "C) picture", "D) src"],
    correctAnswer: "A"
  }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion(index) {
  const questionContainer = document.getElementById('question-container');
  const question = questions[index];
  questionContainer.innerHTML = `
    <p>${question.question}</p>
    ${question.choices.map((choice, i) => `
      <label>
        <input type="radio" name="q${index}" value="${String.fromCharCode(65 + i)}">
        <span>${choice}</span>
      </label><br>
    `).join('')}
  `;
}

function nextQuestion() {
  const selectedAnswer = document.querySelector(`input[name="q${currentQuestionIndex}"]:checked`);
  if (selectedAnswer) {
    const answerValue = selectedAnswer.value;
    if (answerValue === questions[currentQuestionIndex].correctAnswer) {
      score++;
    }
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion(currentQuestionIndex);
  } else {
    document.getElementById('nextButton').style.display = 'none';
    document.getElementById('submitButton').style.display = 'block';
  }
}

function submitQuiz() {
  const selectedAnswer = document.querySelector(`input[name="q${currentQuestionIndex}"]:checked`);
  if (selectedAnswer) {
    const answerValue = selectedAnswer.value;
    if (answerValue === questions[currentQuestionIndex].correctAnswer) {
      score++;
    }
  }
  document.getElementById('score').textContent = `Skor Anda: ${score}/10`;
  document.getElementById('result').style.display = 'block';
  document.getElementById('submitButton').style.display = 'none';
}


  