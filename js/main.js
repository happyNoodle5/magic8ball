// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.forms['ask'].question);
// console.log(document.forms['ask'].question.value);

const form = document.forms.ask;
form.addEventListener('submit', function (event){
    event.preventDefault();
    // prevents the default behavior (form behavior is to send data to a server)
    console.log(form.question.value);
    form.reset();
})