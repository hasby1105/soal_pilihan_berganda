function submitQuiz() {
    let score = 0;
    const correctAnswers = {
      q1: 'A',
      q2: 'A',
      q3: 'A',
      q4: 'B',
      q5: 'A',
      q6: 'D',
      q7: 'A',
      q8: 'A',
      q9: 'B',
      q10: 'A',
    };
  
    for (let i = 1; i <= 10; i++) {
      const answer = document.querySelector(`input[name="q${i}"]:checked`);
      if (answer && answer.value === correctAnswers[`q${i}`]) {
        score++;
      }
    }
  
    document.getElementById("score").textContent = `Skor Anda: ${score}/10`;
    document.getElementById("result").style.display = "block";
  }
  