// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.forms['ask'].question);
// console.log(document.forms['ask'].question.value);

const answers = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
];

const random = Math.floor(Math.random() * answers.length);
const form = document.forms.ask;
const formButton = document.forms.ask.submitButton;

// console.log(formInput);

form.addEventListener('submit', function (event){
    event.preventDefault();
    // prevents the default behavior (default submit behavior is to send data to a server)
    const formInput = document.forms.ask.question.value;
    replaceImage();
    replaceForm();
});

function replaceImage() {
    document.getElementById('ball').src = "/img/magic8ball_" + random + ".svg";
};

function replaceForm() {
    const childAsk = document.getElementById('ask');

    const newDiv = document.createElement('div');
    newDiv.setAttribute("class", "jumbotron row w-100 mb-0 text-center bg-transparent d-flex justify-content-center");
    newDiv.setAttribute("id", "jumbo");

    const formInput = document.forms.ask.question.value;

    childAsk.parentNode.replaceChild(newDiv, childAsk);

    const answerChild = document.createElement('div');
    answerChild.innerText = formInput;
    answerChild.setAttribute("class", "col")
    answerChild.style.color = "white";

    const newButton = document.createElement('button');
    newButton.innerText = "Ask Again?";
    newButton.setAttribute("class", "col btn btn-primary");
    newButton.setAttribute("name", "newSubmitButton");
    newButton.setAttribute("id", "newSubmitButton");
    newButton.setAttribute("type", "submit");

    newDiv.appendChild(answerChild);
    newDiv.appendChild(newButton);
};

if (document.getElementById('newSubmitButton') != null ) {
    document.getElementById('newSubmitButton').addEventListener('click', function(event) {
        window.location.reload();
        return false;
    });
}