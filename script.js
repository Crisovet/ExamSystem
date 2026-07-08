fetch("questions.json")
.then(response => response.json())
.then(data => {

    document.getElementById("examTitle").innerHTML = data.examTitle;

    const container = document.getElementById("questions");

    data.questions.forEach((q, index) => {

        let html = "";

        html += `<div class="question">`;

        html += `<h3>Q${index + 1}. ${q.question}</h3>`;

        if (q.type === "mcq_single") {

            q.options.forEach((option, i) => {

                html += `
                <label class="option">
                    <input type="radio"
                        name="q${index}"
                        value="${i}">
                    ${option}
                </label>
                `;

            });

        }

        html += `</div>`;

        container.innerHTML += html;

    });

    document.getElementById("submitBtn").onclick = function () {

        let answers = [];

        data.questions.forEach((q, index) => {

            let selected = document.querySelector(`input[name="q${index}"]:checked`);

            answers.push(selected ? parseInt(selected.value) : -1);

        });

        localStorage.setItem("questions", JSON.stringify(data.questions));
        localStorage.setItem("answers", JSON.stringify(answers));

        window.location.href = "result.html";

    };

})
.catch(error => console.log(error));