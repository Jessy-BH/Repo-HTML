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
    
    return (nb%2 ==0);

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

function firstWord(p){
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

function firstLetter(p){
   
    return p.charAt(0).toUpperCase() + p.slice(1).toLowerCase();
}

function exo3bis() {

    alert(camelCase("HELLO world"))
}

function camelCase(p) {
    let d = p.split(' ');
    let strResult = d[0].toLowerCase();

    for(let i = 1; i < d.length; i++) {
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

function force(mdp){
    let l = mdp.length;
    let n = 0;
    let force = l * (Math.log2(n));
    return force;
}

function alphabet(mdp){
    n = 0;

    if(mdp.match(/[0-9]/)){
        n += 10;
    }
    if (mdp.match(/[a-z]/)){
        n += 26;
    }
    if (mdp.match(/[A-Z]/)){
        n += 26;
    }

}

function exo6() {

    var genre;
    do{
        genre = prompt("genre");
        console.log('f')
        genre = genre.toLowerCase();
        genre = genre.replace('â', 'a')
        
    }while(genre != 'femelle' && genre != 'male'){
        console.log('succes : ', genre);
        console.log()
    }
}

function exo9(){

    
}