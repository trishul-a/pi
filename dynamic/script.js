let MyName = "Pinaka"
document.title = MyName



let python = 95
let ino = 90
let git = 70
let html = 70
let css = 50
let js = 20
let flask = 20


document.getElementById("MyName").innerHTML = MyName.split(" ")[0] + "."
document.getElementById("MyName_Name").innerHTML = MyName


document.getElementById("python").innerHTML = python + "%"
document.getElementById("python").style.width = python + "%"

document.getElementById("arduino").innerHTML = ino + "%"
document.getElementById("arduino").style.width = ino + "%"
document.getElementById("python").style.width = python + "%"

document.getElementById("git").innerHTML = git + "%"
document.getElementById("git").style.width = git + "%"

document.getElementById("html").innerHTML = html + "%"
document.getElementById("html").style.width = html + "%"

document.getElementById("css").innerHTML = css + "%"
document.getElementById("css").style.width = css + "%"

document.getElementById("js").innerHTML = js + "%"
document.getElementById("js").style.width = js + "%"

document.getElementById("flask").innerHTML = flask + "%"
document.getElementById("flask").style.width = flask + "%"


function LiveTime() {

    let newDate = new Date();
    DaTe = newDate.toLocaleString();

    document.getElementById("TiMe").innerHTML = DaTe.split(",")[1]
}
setInterval(LiveTime, 500);