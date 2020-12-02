function exo1() {

    alert(isEven(2))

    /*var nb = prompt("Saisir chiffre");

    if (nb % 2 == 0) {

        alert("Pair");

    } else {

        alert("Impair");
    }*/

}

function isEven(nb) {

    return (nb % 2 == 0);

    /*let result = false;
    if (nb % 2 == 0) {
        result = true;
    }
    return result;*/
}




function exo2() {

    /*var sentence = prompt("Phrase");

    var space = sentence.split(" ");

    alert(space[0]);*/

    let p = prompt("phrase");
    alert(firstWord(p));

}

function firstWord(p) {
    console.log(p.split(' '));
    p.split(' ')[0];
    return p.split(' ')[0];
}




function exo3() {

    alert(firstLetter("hELLO world"))

    /*var word = prompt("mot");
 
     word = word[0].toUpperCase() + word.substring(1).toLowerCase();
 
     alert(word);*/
}

function firstLetter(p) {

    return p.charAt(0).toUpperCase() + p.slice(1).toLowerCase();
}

function exo3bis() {

    alert(camelCase("HELLO world"))
}

function camelCase(p) {
    let d = p.split(' ');
    let strResult = d[0].toLowerCase();

    for (let i = 1; i < d.length; i++) {
        strResult += firstLetter(d[i]);
    }
    return strResult;
}





function exo4() {

    var array = [1, 2, 3, 4, 5, 4, 3, 2, 1];

    for (var i = 0; i < array.length; i++) {

        alert(array[i]);
    }
}

function exo5(mdp) {
    console.log(force('HelloWorld'))
}

function force(mdp) {
    let l = mdp.length;
    let n = 0;
    let force = l * (Math.log2(n));
    return force;
}

function alphabet(mdp) {
    n = 0;

    if (mdp.match(/[0-9]/)) {
        n += 10;
    }
    if (mdp.match(/[a-z]/)) {
        n += 26;
    }
    if (mdp.match(/[A-Z]/)) {
        n += 26;
    }

}

function exo6() {

    var genre;
    do {
        genre = prompt("genre");
        console.log('f')
        genre = genre.toLowerCase();
        genre = genre.replace('â', 'a')

    } while (genre != 'femelle' && genre != 'male') {
        console.log('succes : ', genre);
        console.log()
    }
}

function exo9() {

    var entrerChiffre = prompt('Entrez un chiffre entre 0 et 999 :');

    //Si un nombre a bien été entré
    if (true && entrerChiffre >= 0) {
        alert('Votre nombre : ', entrerChiffre, '<br />');

        // Création des Array contenant les nombres et chiffres en lettres
        var chiffresArray = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
        var dixArray = ['dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
        var dizaineArray = ['', '', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante', 'quatre-vingts', 'quatre-vingts'];

        var chiffreLength = entrerChiffre.length;

        // Si un nombre à 3 chiffres a été entré :
        if (chiffreLength == 3) {
            var centaineDecimal = entrerChiffre / 100;
            var premierChiffre = parseInt(centaineDecimal);

            // Condition pour mettre "cent" au pluriel et ne pas afficher "un cent" :
            if (premierChiffre > 1) {
                var pluriel = 's';
                alert(chiffresArray[premierChiffre], ' cents ');
            }
            else if (premierChiffre == 0) {
                alert('');
            }
            else {
                var pluriel = '';
                alert('cent ');
            }

            // récupération du chiffre des dizaines
            var dizaine = entrerChiffre - (premierChiffre * 100);
            var dizaineDecimal = dizaine / 10;
            var deuxiemeChiffre = parseInt(dizaineDecimal);

            // Récupération du chiffre des unités
            var unite = dizaine - (deuxiemeChiffre * 10);

            // Conditions pour dizaines spéciales
            switch (deuxiemeChiffre) {
                case 1:
                    alert(dixArray[unite]);
                    break;
                case 7:
                    alert(dizaineArray[deuxiemeChiffre], '-', dixArray[unite]);
                    break;
                case 9:
                    alert(dizaineArray[deuxiemeChiffre], '-', dixArray[unite]);
                    break;
                default:
                    //ajout de "et" quand le 3eme chiffre est 1 :
                    if (deuxiemeChiffre != 0 && unite == 1 && deuxiemeChiffre != 8) {
                        alert(dizaineArray[deuxiemeChiffre], '-et-', chiffresArray[unite]);
                    } else if (deuxiemeChiffre == 0) {
                        alert(dizaineArray[deuxiemeChiffre], ' ', chiffresArray[unite]);
                    } else if (unite == 0) {
                        alert(dizaineArray[deuxiemeChiffre]);
                    } else {
                        alert(dizaineArray[deuxiemeChiffre], '-', chiffresArray[unite]);
                    }
            }
        }

        // Si nombre à deux chiffres
        else if (chiffreLength == 2) {
            var dizaineDecimal = entrerChiffre / 10;
            var deuxiemeChiffre = parseInt(dizaineDecimal);
            var unite = entrerChiffre - (deuxiemeChiffre * 10);

            switch (deuxiemeChiffre) {
                case 1:
                    alert(dixArray[unite]);
                    break;
                case 7:
                    if (unite == 1) {
                        alert(dizaineArray[deuxiemeChiffre], '-et-', dixArray[unite]);
                    } else {
                        alert(dizaineArray[deuxiemeChiffre], '-', dixArray[unite]);
                    }
                    break;
                case 9:
                    alert(dizaineArray[deuxiemeChiffre], '-', dixArray[unite]);
                    break;
                default:
                    if (deuxiemeChiffre != 0 && unite == 1 && deuxiemeChiffre != 8) {
                        alert(dizaineArray[deuxiemeChiffre], '-et-', chiffresArray[unite]);
                    } else if (unite == 0) {
                        alert(dizaineArray[deuxiemeChiffre]);
                    } else {
                        alert(dizaineArray[deuxiemeChiffre], '-', chiffresArray[unite]);
                    }
            }
        }

        else if (chiffreLength == 1) {
            var unite = parseInt(entrerChiffre);
            if (entrerChiffre == 0) {
                alert('zéro');
            }
            else {
                alert(chiffresArray[unite]);
            }
        }

        else if (chiffreLength > 3) {
            alert('Le chiffre est supérieur à 999.');
        }

        else {
            alert('Bizarre Bizarre...');
        }
    }
    else {
        alert('Je crois que vous n\'avez pas entré un nombre...');
    }
}