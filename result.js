const questions = JSON.parse(localStorage.getItem("questions"));

const answers = JSON.parse(localStorage.getItem("answers"));

let score = 0;

const container = document.getElementById("results");

questions.forEach((q, index) => {

    const student = answers[index];

    const correct = q.answer;

    if (student === correct)
        score++;

    let studentAnswer =
        student == -1
            ? "Not Answered"
            : q.options[student];

    let html = `

    <div class="question">

        <h3>Q${index + 1}. ${q.question}</h3>

        <p><b>Your Answer:</b> ${studentAnswer}</p>

        <p><b>Correct Answer:</b> ${q.options[correct]}</p>

        <hr>

    </div>

    `;

    container.innerHTML += html;

});

document.getElementById("score").innerHTML =
`Score : ${score} / ${questions.length}`;