function exo1() {

    var nb = prompt("Saisir chiffre");

    if (nb % 2 == 0) {

        alert("Pair");

    } else {

        alert("Impair");
    }

}

function exo2() {

    var sentence = prompt("Phrase");

    var space = sentence.split(" ");

    alert(space[0]);

}

function exo3() {

    var word = prompt("mot");

    word = word[0].toUpperCase() + word.substring(1).toLowerCase();

    alert(word);
}

function exo3bis() {

    CamelCase = function CamelCase(str) {
        return str.replace(/\W+(.)/g, function (match, chr) {
            return chr.toUpperCase();
        });
    }

    console.log(CamelCase("Java Script Exercises"));
}

function exo4() {
    
    var array = [1, 2, 3, 4, 5, 4, 3, 2, 1];

    for (var i = 0; i < array.length; i++) {

        alert(array[i]);
    }
}

function exo5() {


}