const options = ['rock','paper','scissors']
function play(player) {
    let result = options[Math.floor(Math.random()*3)]
    document.getElementById(`result${player}`).innerHTML = `${result}`
}
