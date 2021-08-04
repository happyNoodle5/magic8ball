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

const random = Math.floor(Math.random() * (answers.length +1));
const asky = document.forms.ask;
const formButton = document.forms.ask.submitButton;

function question() {asky.addEventListener('submit', function (event){
    event.preventDefault();
    // prevents the default behavior (default submit behavior is to send data to a server)

    replaceImage();
    replaceForm();
    addResetButton();
    newAsk();
});
};

question();

function replaceImage() {
    document.getElementById('ball').src = "img/magic8ball_" + random + ".svg";
};

function replaceForm() {
    // select the container for the input form; to be replaced
    const childAsk = document.getElementById('ask');

    // save user's input in a variable
    const formInput = document.forms['ask'].question.value;

    // create a jumbotron and replace the above container with it
    const newDiv = document.createElement('div');
    newDiv.setAttribute("class", "jumbotron row w-100 my-0 text-center bg-transparent d-flex justify-content-center");
    newDiv.setAttribute("id", "jumbo");
    childAsk.parentNode.replaceChild(newDiv, childAsk);

    // put the user's question in the DOM, with styling
    const answerChild = document.createElement('div');
    answerChild.innerText = formInput;
    answerChild.setAttribute("class", "col")
    answerChild.style.color = "white";
    newDiv.appendChild(answerChild);
};

function addResetButton() {
        // create a new row, col, + button to reset the page, style
        const newRow = document.createElement('div');
        const bigContainer = document.getElementById('container');
        newRow.setAttribute("class", "row w-100 mb-0 mt-5 d-flex justify-content-center align-end");
        newRow.setAttribute("id", "newRow");
        bigContainer.appendChild(newRow);
        // col
        const newCol = document.createElement('div');
        newCol.setAttribute("class", "col-4 mt-5 mx-auto d-flex justify-content-center");
        newRow.appendChild(newCol)
        // button
        const newButton = document.createElement('button');
        newButton.innerText = "Ask Again?";
        newButton.setAttribute("class", "col btn btn-primary mx-auto mt-5");
        newButton.setAttribute("name", "newSubmitButton");
        newButton.setAttribute("id", "newSubmitButton");
        newButton.setAttribute("type", "submit");
        newCol.appendChild(newButton);
};

function newAsk() {
    document.getElementById('newSubmitButton').addEventListener('click', function() {
        window.location.reload(true);
    });
};