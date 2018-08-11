// toggleEmailText will alternate between showing and
// hiding email when email icon is pressed

function toggleEmailText() {
    var x = document.getElementById("emailText");
    console.log(x.style.display);
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
        x.style.display = "inline";
    } else {
        x.style.display = "none";
    }
}
