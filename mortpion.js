const readline = require('readline')
const colors = require('colors')
const db = require('quick.db')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const Hotkeys = require('react-hot-keys');

console.clear()


function morpion() {
    console.log("1|2|3\n4|5|6\n7|8|9")

    let debut = "1|2|3\n4|5|6\n7|8|9"
    let fast = 1
    let fast2 = 9
    let null_partie = 0


    let all = {
        "1": "rien1",
        "2": "rien2",
        "3": "rien3",
        "4": "rien4",
        "5": "rien5",
        "6": "rien6",
        "7": "rien7",
        "8": "rien8",
        "9": "rien9",
    }
    function main(un, deux) {
    rl.question(`Joueur 1: Donne un nombre entre ${un} et ${deux}: `, function(rep) {
    if(isNaN(rep)) return main(fast, fast2);
    else {
        if(rep < 1) return main(fast, fast2);
        else if(rep > 9) return main(fast, fast2);
        else if(debut.indexOf(rep) == '-1') return main(fast, fast2);
        let transform;
        if(rep == '9') {transform = debut.replace(`|9`, '|' + 'X'.red)}
        else if(rep == '1') transform = debut.replace(`1|`, 'X'.red + '|')
        else if(rep == '2') transform = debut.replace(`|2|`, '|' + 'X'.red + '|')
        else if(rep == '3') transform = debut.replace(`|3`, '|' + 'X'.red)
        else if(rep == '4') transform = debut.replace(`4|`, 'X'.red + '|')
        else if(rep == '5') transform = debut.replace(`|5|`, '|' + 'X'.red + '|')
        else if(rep == '6') transform = debut.replace(`|6`, '|' + 'X'.red)
        else if(rep == '7') transform = debut.replace(`7|`, 'X'.red + '|')
        else if(rep == '8') transform = debut.replace(`|8|`, '|' +'X'.red + '|')
        console.log(transform)
        null_partie = null_partie + 1
        if(null_partie == 9) { console.log("Partie nulle..."); return process.exit()}
        debut = transform
        all[rep] = "X"
        if(all["1"] == all["2"]) { if(all["1"] == all["3"]) return console.log("Partie terminée vainqueur joueur 1 !")}
        if(all["1"] == all["4"]) { if(all["1"] == all["7"]) return console.log("Partie terminée vainqueur joueur 1 !")}
        if(all["4"] == all["5"]) { if(all["4"] == all["6"]) return console.log("Partie terminée vainqueur joueur 1 !")}
        if(all["7"] == all["8"]) { if(all["7"] == all["9"]) return console.log("Partie terminée vainqueur joueur 1 !")}
        if(all["3"] == all["6"]) { if(all["3"] == all["9"]) return console.log("Partie terminée vainqueur joueur 1 !")}
        if(all["2"] == all["5"]) { if(all["2"] == all["8"]) return console.log("Partie terminée vainqueur joueur 1 !")}
        if(Number(rep) === fast) fast++
        else if(Number(rep) == fast2) fast2 = fast2 - 1
        main2(fast, fast2)
    }
})
}

function main2(un, deux) {
    rl.question(`Joueur 2: Donne un nombre entre ${un} et ${deux}: `, function(rep) {
    if(isNaN(rep)) return main2(fast, fast2);
    else {
        if(rep < 1) return main2(fast, fast2);
        else if(rep > 9) return main2(fast, fast2);
        else if(debut.indexOf(rep) == '-1') return main2(fast, fast2);
        let transform;
        if(rep == '9') {transform = debut.replace(`|9`, '|'+'0'.green)}
        else if(rep == '1') transform = debut.replace(`1|`, '0'.green + '|')
        else if(rep == '2') transform = debut.replace(`|2|`, '|'+'0'.green + '|')
        else if(rep == '3') transform = debut.replace(`|3`, '|'+'0'.green)
        else if(rep == '4') transform = debut.replace(`4|`, '0'.green + '|')
        else if(rep == '5') transform = debut.replace(`|5|`, '|' + '0'.green + '|')
        else if(rep == '6') transform = debut.replace(`|6`, '|' + '0'.green)
        else if(rep == '7') transform = debut.replace(`7|`, '0'.green + '|')
        else if(rep == '8') transform = debut.replace(`|8|`, '|' + '0'.green + '|')
        console.log(transform)
        null_partie = null_partie + 1
        if(null_partie == 9) { console.log("Partie nulle..."); return process.exit()}
        debut = transform
        all[rep] = "0"
        if(all["1"] == all["2"]) {if(all["1"] == all["3"]) return console.log("Partie terminée vainqueur joueur 2 !")}
        if(all["1"] == all["4"]) {if(all["1"] == all["7"]) return console.log("Partie terminée vainqueur joueur 2 !")}
        if(all["4"] == all["5"]) {if(all["4"] == all["6"]) return console.log("Partie terminée vainqueur joueur 2 !")}
        if(all["7"] == all["8"]) {if(all["7"] == all["9"]) return console.log("Partie terminée vainqueur joueur 2 !")}
        if(all["3"] == all["6"]) {if(all["3"] == all["9"]) return console.log("Partie terminée vainqueur joueur 2 !")}
        if(all["2"] == all["5"]) {if(all["2"] == all["8"]) return console.log("Partie terminée vainqueur joueur 2 !")}
        if(Number(rep) === fast) fast++
        else if(Number(rep) == fast2) fast2 = fast2 - 1
        main(fast, fast2)
    }
})
}

main("1", "9")
}

function snake() {
    console.log("en dev...")
    morpion()
}

function question() {
    rl.question("Morpion => 1\n", function(rep) {if(rep === '1') morpion();else if(rep === '2') snake(); else question()})
}
question()