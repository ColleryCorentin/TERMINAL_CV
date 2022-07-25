window.onload = () => {
    document.getElementById("terminal_input").focus();
};

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

        if (elmnt.offsetTop - pos2 >= 0) {
            if (elmnt.offsetLeft - pos1 >= 0) {
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }
        }
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
    p.innerText = "Command not found : " + res
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
    p.innerText = "Commandes valides : --help, cat about, ,ls competence, ls projets, ls education, wget cv, clear"
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
        "> J'ai 23 ans et je suis actuellement étudiant à Epitech." +
        "\n" +
        "> Je suis à la recherche d'une alternance pour ma deuxième année de formation." +
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
    // crée un nouvel élément div
    var newDiv = document.createElement("div");
    // et lui donne un peu de contenu
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
    console.log("ok")
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