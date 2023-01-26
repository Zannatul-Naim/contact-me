

document.getElementById('mail').addEventListener('click', function() {
    var link = "mailto:zannatulnaim09@gmail.com"
        + "?cc="+encodeURIComponent(document.getElementById('email').value)
        + "&subject=" + encodeURIComponent("From " + document.getElementById('name').value)
        + "&body=" + encodeURIComponent(document.getElementById('myText').value);
    window.location.href = link;
});

let myText = document.getElementById("myText").innerHTML;

function textFieldValidator() {
    if(myText === "") alert("Input field is empty. Please enter some text.");
}