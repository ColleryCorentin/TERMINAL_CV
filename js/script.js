window.addEventListener("load", () => {
    getDate();
});

window.onload = () => {
    document.getElementById("terminal_input").focus();
};

dragElement(document.getElementById("terminal"));
dragElement(document.getElementById("note"));

window.addEventListener("click", function (event) {
    document.getElementById("terminal_input").focus();
});

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

const input_term = (document.getElementById("terminal_input"))
input_term.addEventListener('keypress', script)

function easterFunction() {
    const video = document.querySelector('#my_youtube');
    const terminal = document.getElementById('terminal')
    terminal.classList.remove('d-block');
    terminal.classList.add('d-none');
    video.classList.remove('d-none');
    video.classList.add('d-block');
    document.getElementById('my_youtube').src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
}

function script(spt) {
    if (spt.key === "Enter") {
        const res = (input_term.value.toLowerCase().trim())
        switch (res) {
            case 'easter egg':
                easterFunction(res)
                break

            case '--help' :
            case '-h':
            case '-help':
            case 'help':
                help_input(res)
                break

            case 'cat about':
                about_input(res)
                break

            case 'ls education':
            case 'ls éducation':
            case 'education':
            case 'éducation':
                education_input(res)
                break

            case 'wget cv':
            case 'WGET CV':
                wget_input(res)
                break

            case 'cat contact':
            case 'contact':
                contact_input(res)
                break

            case 'ls projets':
            case 'ls projects':
            case 'ls project':
            case 'ls projet':
                projets_input(res)
                break

            case 'ls competences':
            case 'ls compétences':
            case 'ls competence':
            case 'ls compétence':
                competence_input(res)
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
    p_res.innerText = "$ " + res
    p.innerText = "zsh: command not found : " + res
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
    p.innerText = "Commandes valides : --help, cat about, ls competences, ls projets, ls education, wget cv, clear"
    content_div.appendChild(newDiv);
}

function clear() {
    input_term.value = ""
    document.getElementById("clear_div").innerHTML = "";
}

function about_input(res) {
    input_term.value = ""
    const content_div = document.querySelector(".content_input")
    // crée un nouvel élément div
    var newDiv = document.createElement("div");
    // et lui donne un peu de contenu
    var p_res = document.createElement("p")
    var p = document.createElement("p")
    p.classList.add('p_about');
    newDiv.append(p_res)
    newDiv.append(p)
    p_res.innerText = "$ " + res
    p.innerText = "> Suite à 3 ans d'expérience dans le tourisme, j'ai décidé de me réorienter vers un domaine tout nouveau pour moi : le développement web." +
        "\n" +
        "> J'ai 25 ans et je suis actuellement étudiant à Epitech." +
        "\n" +
        "> Je suis à la recherche d'une alternance débutant en janvier 2024 pour ma deuxième formation." +
        "\n" +
        "> J'ai découvert le monde du développement web en 2020 à la suite de mon bts.\n"
    content_div.appendChild(newDiv);
}

function education_input(res) {
    input_term.value = ""
    const content_div = document.querySelector(".content_input")
    // crée un nouvel élément div
    var newDiv = document.createElement("div");
    // et lui donne un peu de contenu
    var p_res = document.createElement("p")
    var p = document.createElement("p")
    p.classList.add('p_about');
    newDiv.append(p_res)
    newDiv.append(p)
    p_res.innerText = "$ " + res
    p.innerText = "> Baccalauréat STMG Albert Chatelet, Saint-Pol-sur-Ternoise, France.\n" +
        "> BTS Tourisme - option Multimédia Gaston Berger, Lille, France.\n" +
        "> Initiation Coding B-Tech, Euratechnologies Lille.\n" +
        "> Formation développeur/intégrateur web Epitech, Lille, France.\n"
    content_div.appendChild(newDiv);
}


function wget_input(res) {
    input_term.value = ""
    const content_div = document.querySelector(".content_input")
    // crée un nouvel élément div
    var newDiv = document.createElement("div");
    // et lui donne un peu de contenu
    var p_res = document.createElement("p")
    newDiv.append(p_res)
    p_res.innerText = "$ " + res
    window.open('assets/cv.pdf', '_blank');
    content_div.appendChild(newDiv);
}

function contact_input(res) {
    input_term.value = ""
    const content_div = document.querySelector(".content_input")
    // crée un nouvel élément div
    var newDiv = document.createElement("div");
    // et lui donne un peu de contenu
    var p_res = document.createElement("p")

    var mail = document.createElement("a")
    var linkedin = document.createElement("a")
    var github = document.createElement("a")

    mail.setAttribute('href', 'mailto:corentin.collery@epitech.eu')
    linkedin.setAttribute('href', 'https://www.linkedin.com/in/collerycorentin/')
    github.setAttribute('href', 'https://github.com/ColleryCorentin')


    mail.setAttribute('target', '_blank');
    linkedin.setAttribute('target', '_blank');
    github.setAttribute('target', '_blank');

    mail.classList.add('p_about');
    linkedin.classList.add('p_about');
    github.classList.add('p_about');

    newDiv.append(p_res)

    newDiv.append(mail)
    newDiv.append(linkedin)
    newDiv.append(github)


    p_res.innerText = "$ " + res
    mail.innerText = "> collery.corentin@epitech.eu"
    linkedin.innerText = "> Linkedin"
    github.innerText = "> Github"
    content_div.appendChild(newDiv);
}

function projets_input(res) {
    input_term.value = ""
    const content_div = document.querySelector(".content_input")
    var newDiv = document.createElement("div");
    var p_res = document.createElement("p")

    var twitter = document.createElement("p")
    var my_twitter = document.createElement("a")

    var spotify = document.createElement('p')
    var my_spotify = document.createElement("a")

    var irc = document.createElement('p')
    var my_irc = document.createElement('a')


    twitter.classList.add('p_about');
    spotify.classList.add('p_about');
    irc.classList.add('p_about');

    my_twitter.classList.add('li_projets')
    my_spotify.classList.add('li_projets')
    my_irc.classList.add('li_projets')

    my_twitter.setAttribute('href', 'https://github.com/ColleryCorentin/Tweet_Academy')
    my_spotify.setAttribute('href', 'https://github.com/ColleryCorentin/My_Spotify')
    my_irc.setAttribute('href', 'https://github.com/ColleryCorentin/My_Spotify')

    newDiv.append(p_res)
    newDiv.append(my_twitter)
    newDiv.append(twitter)

    newDiv.append(my_spotify)
    newDiv.append(spotify)

    newDiv.append(my_irc)
    newDiv.append(irc)


    p_res.innerText = "$ " + res
    my_twitter.innerText = "> My_Twitter"
    twitter.innerText = "Le but de ce projet est de créer un réseau social qui aura les mêmes fonctionnalités que twitter. Il devra être le plus ressemblant possible en terme de fonctionnalités par rapport au site “Twitter”."

    my_spotify.innerText = "> My_spotify"
    spotify.innerText = "Projet réalisé avec React Js. Le but de ce projet est de créer des liens à une API pour afficher des musiques et des artistes."

    my_irc.innerText = "> My_irc"
    irc.innerText = "Le but de ce projet était de créer un tchat avec la possibilité de parler sur plusieurs Rooms. Projet réalisé en ReactJs / Node / Socket.io par groupe de deux sur une durée de deux semaines"

    content_div.appendChild(newDiv);
}

function competence_input(res) {
    input_term.value = ""
    const content_div = document.querySelector(".content_input")
    // crée un nouvel élément div
    var newDiv = document.createElement("div");
    // et lui donne un peu de contenu
    var p_res = document.createElement("p")
    var title_primary = document.createElement("p")
    var skills = document.createElement("p")


    title_primary.classList.add('li_projets');

    skills.classList.add('p_about')

    newDiv.append(p_res)
    newDiv.append(title_primary)
    newDiv.append(skills)

    p_res.innerText = "$ " + res
    title_primary.innerText = "> Mes Compétences"
    skills.innerText = "HTML | CSS | PHP | My_sql | Javascript | SQL | PhpMyAdmin | Git | Jquery | React | React Native | Bootstrap | Express js | Symphony"
    content_div.appendChild(newDiv);
}


function battery() {
    navigator.getBattery()
        .then(function (battery) {
            var batteryLevel = battery.level * 100;
            var batteryDiv = document.querySelector(".battery");
            var batteryPowerDiv = document.getElementById("batteryPowerWidth");
            batteryDiv.innerHTML = Math.round(batteryLevel) + " %";
            batteryPowerDiv.style.width = batteryLevel + "%";
            if (battery.charging) {
                batteryPowerDiv.style.backgroundColor = "green";
            } else if (batteryLevel <= 20) {
                batteryPowerDiv.style.backgroundColor = "red";
            } else {
                batteryPowerDiv.style.backgroundColor = "white";
            }
        })
        .catch(function (e) {
            console.error(e);
        });
}

function getDate() {
    const date = new Date();

    const formattedDate = date.toLocaleString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    });

    const formatted = date.toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const currentDate = document.querySelector(".date");
    const currentDateNote = document.getElementById("dateNote");

    currentDate.textContent = formattedDate;
    currentDateNote.textContent = formatted;

}

function currentApp(res) {
    document.getElementById("currentApp").textContent = res;
}

function showTerm() {
    const terminal = document.querySelector('#terminal');
    terminal.classList.remove('d-none');
    terminal.classList.add('d-block');
    currentApp("Terminal")
}

function showNotes() {
    const note = document.querySelector('#note');
    note.classList.remove('d-none');
    note.classList.add('d-block');
    currentApp("Note")
}

function closeTerm() {
    const terminal = document.querySelector('#terminal');
    terminal.classList.remove('d-block');
    terminal.classList.add('d-none');
    clear()
    currentApp("")
}

function closeNote() {
    const note = document.querySelector('#note');
    note.classList.remove('d-block');
    note.classList.add('d-none');
    clear()
    currentApp("")
}


setInterval(getDate, 1000)
battery()
setInterval(battery, 1000);

