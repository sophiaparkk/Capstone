
const startBtn = document.getElementById("start");
const frontText = document.querySelector("#front");
const backText = document.querySelector("#back");
const specBtn = document.getElementById("spec");
const specList = document.querySelector("#specList");
const thisBtn = document.getElementById("this");
const thatBtn = document.getElementById("that");
const submitBtn = document.getElementById("submit");
const submitAnswer = document.querySelector("#submit-answer");
const resetBtn = document.getElementById("reset");
const ratings = document.querySelector("#rate-section")

submitBtn.classList.add("hide");
submitAnswer.classList.add("hide");
resetBtn.classList.add("hide");



var clicksThis = 0;
var clicksThat = 0;

const startButton = () => {
    axios.get("http://localhost:4000/api/start")
        .then(res => {
        startBtn.classList.add("hide");

          frontText.textContent = `User interactions`;
          backText.textContent = `Large sets of data`;

          thisBtn.onclick = function thisClickCount() {
            clicksThis += 1;
            thisBtn.innerHTML = "This one";
        };

        thatBtn.onclick = function thatClickCount() {
            clicksThat += 1;
            thatBtn.innerHTML = "That one";
        };


    });
};


const specButton = () => {
    axios.get("http://localhost:4000/api/spec")
        .then(res => {
            let specListArray = ['Data Analytics',' Python Software Engineering', ' Cyber Security', ' Web Development', ' Java Software Engineering', ' iOS App Development']
         specList.textContent = specListArray


     })
} 

const thisButton = () => {
    axios.get("http://localhost:4000/api/this")
        .then(res => {


            if (frontText.textContent === `User interactions`) {
                frontText.textContent = `Web design`;
                backText.textContent = `Security`;
                thisBtn.addEventListener("click", thisButton);
                } else if (frontText.textContent === `Web design`) {
                    frontText.textContent = `Application creation`;
                    backText.textContent = `Organizing information`;
                    } else if (frontText.textContent === `Application creation`) {
                        submitBtn.classList.remove("hide");
                        thisBtn.classList.add("hide");
                        thatBtn.classList.add("hide");
                        frontText.classList.add("hide");
                        backText.classList.add("hide");
                        startBtn.classList.add("hide");
                        }

    });
};

const thatButton = () => {
    axios.get("http://localhost:4000/api/that")
        .then(res => {
            if (backText.textContent === `Large sets of data`) {
                backText.textContent = `Security`;
                frontText.textContent = `Web design`;
                thatBtn.addEventListener("click", thatButton);
                } else if (backText.textContent === `Security`) {
                    backText.textContent = `Organizing information`;
                    frontText.textContent = `Application creation`;
                    } else if (backText.textContent === `Organizing information` ) {
                        submitBtn.classList.remove("hide");
                        thatBtn.classList.add("hide");
                        thisBtn.classList.add("hide");
                        frontText.classList.add("hide");
                        backText.classList.add("hide");
                        startBtn.classList.add("hide");
                        }
    });
};


const submitButton = () => {
        if (clicksThis > clicksThat) {
            submitBtn.classList.add("hide");
            submitAnswer.classList.remove("hide");
            submitAnswer.textContent = 'Maybe you should try web development, java software engineering, or ios app development!!!'
            resetBtn.classList.remove("hide");
        } else {
        submitBtn.classList.add("hide");
        submitAnswer.classList.remove("hide");
        submitAnswer.textContent = 'Data analytics, python software engineering, or cyber security could be for you!!!'
        resetBtn.classList.remove("hide");
        }

}

    const ratingRadio = () => {   
    let quizRating = document.querySelector('input[name="rating"]:checked').value
    var rating = {
        rating: quizRating
    }
    axios.post("http://localhost:4000/api/rating", rating)
        .then(res => {
            alert('Thanks for your rating!')

        })
}

const resetButton = () => {
    location.reload()
}


startBtn.addEventListener("click", startButton);
specBtn.addEventListener("click", specButton);
thisBtn.addEventListener("click", thisButton);
thatBtn.addEventListener("click", thatButton);
submitBtn.addEventListener("click", submitButton);
resetBtn.addEventListener("click", resetButton);
ratings.addEventListener("click", ratingRadio)