/*document.oncontextmenu = document.body.oncontextmenu = function () {return false;}*/
/*
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});*/

// Make the DIV element draggable:
dragElement(document.getElementById("terminal"));


function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        document.getElementById("mydivheader").onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:

        if (elmnt.offsetTop - pos2 >= 0 || elmnt.offsetLeft - pos1 >= 0)
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Input terminal part


const input_term = (document.getElementById("terminal_input"))
input_term.addEventListener('keypress', script)

function script(spt) {
    if (spt.key === "Enter") {
        const res = (input_term.value)
        switch (res) {
            case '--help' :
            case '-h':
            case '-help':
            case 'help':
                help_input(res)
                break
            case 'cat about':
            case 'Cat about':
            case 'CAT about':
            case 'cat About':
            case 'Cat About':
            case 'CAT About':
            case 'cat ABOUT':
            case 'Cat ABOUT':
            case 'CAT ABOUT':
                about_input()
                break

            case 'ls skills':
            case 'ls skill':
            case 'skills':
            case 'skill':
                skills_input(res)
                break

            case 'clear':
                clear()
                break

            default:
                command_not_find(res)
        }
        script()
    }
}


function command_not_find(res) {
    input_term.value = ""
    const content_div = document.querySelector(".content_input")
    // crée un nouvel élément div
    var newDiv = document.createElement("div");
    // et lui donne un peu de contenu
    var p_res = document.createElement("p")
    var p = document.createElement("p")
    newDiv.append(p_res)
    newDiv.append(p)
    p.innerText = "$ Command not found : " + res
    content_div.appendChild(newDiv);
}

function help_input(res) {
    input_term.value = ""
    const content_div = document.querySelector(".content_input")
    // crée un nouvel élément div
    var newDiv = document.createElement("div");
    // et lui donne un peu de contenu
    var p_res = document.createElement("p")
    var p = document.createElement("p")
    newDiv.append(p_res)
    newDiv.append(p)
    p_res.innerText = "$ " + res
    p.innerText = "$ Commandes valides : --help, cat about, ls skills"
    content_div.appendChild(newDiv);
}

function skills_input(res) {
    input_term.value = ""
    const content_div = document.querySelector(".content_input")
    // crée un nouvel élément div
    var newDiv = document.createElement("div");
    // et lui donne un peu de contenu
    var p_res = document.createElement("p")
    var p = document.createElement("p")
    newDiv.append(p_res)
    newDiv.append(p)
    p_res.innerText = "$ " + res
    p.innerText = "$ Commandes valides : --help, cat about, ls skills"
    content_div.appendChild(newDiv);
}

function clear() {
    input_term.value = ""
    document.getElementById("clear_div").innerHTML = "";
    // crée un nouvel élément div
}

function about_input() {

}