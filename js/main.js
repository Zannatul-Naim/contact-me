
var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var eamilError = document.getElementById('email-error');
var meassageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {

    var name = document.getElementById('contact-name').value;
    len = name.split(" ");
    if(len.length <= 1) {
        nameError.innerHTML = 'Full Name is Required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Uses alphabets!';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

function validatePhone() {

    var phone = document.getElementById("contact-phone").value;

    if(phone.length !== 11) {
        return false;
    }
    if(!phone.match(/^[0-9]{11}$/)) {
        phoneError.innerHTML = 'Digits only';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-check"></i>'
    return true;
}

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "zannatulnaim09@gmail.com",
        Password : "8DA818B2E81CB539DAD78CBCE71E1AD74185",
        To : 's2010776128@ru.ac.bd',
        From : 's2010776128@ru.ac.bd',
        Subject : "A message from anynomous person",
        Body : "Name: " + document.getElementById("contact-name").value
        + "<br> Email: " + document.getElementById("contact-email").value
        + "<br> Phone No: " + document.getElementById("contact-phone").value
        + "<br> Message: " + document.getElementById("contact-message").value
    }).then(
      message => alert("Message Sent Successfully")
    );
}
