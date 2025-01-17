function onButtonClickCancel() {
	courriel = document.getElementById("courriel").value="";
	prenom = document.getElementById("prenom").value="";
	nom = document.getElementById("nom").value="";
	adresse = document.getElementById("adresse").value="";
	date_de_naissance = document.getElementById("date_de_naissance").value="";
	mot_passe = document.getElementById("password").value="";
	mot_passe_r = document.getElementById("passsword_repeat").value="";
}

function onButtonClickInscription() {
	courriel = document.getElementById("courriel").value;
	prenom = document.getElementById("prenom").value;
	nom = document.getElementById("nom").value;
	adresse = document.getElementById("adresse").value;
	date_de_naissance = document.getElementById("date_de_naissance").value;
	preference = document.getElementById("preference").value;
	mot_passe = document.getElementById("password").value;
	mot_passe_r = document.getElementById("passsword_repeat").value;
    var inputClient = {courriel:courriel, prenom:prenom, nom:nom, adresse:adresse, date_de_naissance:date_de_naissance, preference:preference,
		mot_passe:mot_passe, mot_passe_r:mot_passe_r};
    postInscription(inputClient)
}

function postInscription(signupObject) {
    postUrl = "http://127.0.0.1:5000/inscription/"
    fetch(postUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(signupObject)
    }).then(function(response) {
        return response.json()
    }).then(function(data) {
        console.log("worked")
    })
}

function displaySearch(text) {
    var booksContainer = document.getElementById("display-search")
    var newBook = document.createElement("div");

    newBook.innerHTML = text;
    booksContainer.append(newBook);
}

function fetchBooksWithQuery(query) {
    getUrl = "livres?query=" + query

    fetch(getUrl).then(function(response) {
        return response.json()
    }).then(function(data) {
       var books = data.books;
    })
}

function onSearchClick() {
    var inputElement = document.getElementById("search-field");
    var booksContainer = document.getElementById("display-search");
    booksContainer.innerHTML = ""

    var search = inputElement.value;

    fetchBooksWithQuery(search);
    inputElement.value = "";
}



/*tentatives de code pour évaluation commandes*/

function fetchcommandes()
{
    getUrl = "bienvenu/"
    fetch(getUrl).then(function(response){
        return response.json()
}).then(function(data){
    commandes = data.commandes;
    ids = data.ids
})
}

function fillSelect(id_commande)
{
    let selectContainer = document.getElementById("select-menu")

    for (let id_commande of ids) {
        let selectionOptionElement = document.createElement("option")
        selectionOptionElement.setAttribute("value", id_commande)
        selectionOptionElement.innerText=id_commande

        selectContainerappendChild(selectionOptionElement)
    }
}
function onSelectChange()
{
    let newValue = document.getElementById("select-menu").value

    let resultContainer = document.getElementById("select-result-container")

    const getUrl = "todos/" + newValue
    fetch(getUrl).then(function(response) {
        return response.json()
    }).then(function(data) {
        resultContainer.innerHTML = commandes.ID_commande
    })
}