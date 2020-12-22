var counter = 1;

        setInterval(function () {
            document.getElementById('radio' + counter).checked = true;

            counter++;

            if (counter > 4) {
                counter = 1;
            }
        }, 50);

function sendconfirm(){

    document.getElementById("sendconfirm").value = "Votre mail a bien été envoyé";
}