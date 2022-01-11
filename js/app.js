/* Criacao das letras */

const section = this.document.getElementsByTagName("section")[0];
const ul_teclado = this.document.createElement("ul");
const letras = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];

for (let linha in letras) {
    const li = document.createElement("li")
    const texto = document.textContent = `${letras[linha]}`;
    li.append(texto);
    if (linha == 10 || linha == 19) {
        ul_teclado.append(document.createElement("br"))
    }
    ul_teclado.appendChild(li)
}
ul_teclado.classList.add("teclado")
section.appendChild(ul_teclado);

/* Fim Criacao das letras  */
const texto = this.document.querySelector("input#texto")
const image = this.document.querySelector("img#imag")
const strlen = this.document.getElementById("strlen")

var local = {
    pais: ["Africa do Sul", "Angola", "Argelia", "Benim", "Botsuana", "Burquina Faso", "Burundi", "Cabo Verde", "Camaroes", "Comores", "Congo Brazzaville", "Costa do Marfim", "Egipto", "Eritreia", "Etiopia", "Gabao", "Gambia", "Gana", "Guine", "Guine Equatorial", "Guine Bissau", "Lesoto", "Liberia", "Libia", "Madagascar", "Mali", "Marrocos", "Mauricia", "Mauritania", "Mocambique", "Namibia", "Niger", "Nigeria", "Quenia", "Republica Centro Africana", "Republica Democratica do Congom", "Ruanda", "Sao Tome e Principe", "Seicheles", "Senegal", "Serra Leoa", "Somalia", "Sudao"],
    capital: ["Pretória", "Luanda", "Argel", "Porto Novo", "Gaborone", "Uagadugu", "Bujumbura", "Praia", "Iaundé", "Moroni", "Brazavile", "Iamussucro", "Cairo", "Asmara", "Adis Abeba", "Libreville", "Banjul", "Acra", "Conacri", "Malabo", "Bissau", "Maseru", "Monróvia", "Trípoli", "Antananarivo", "Bamaco", "Rebate", "Porto Luís", "Nuaquechote", "Maputo", "Vinduque", "Niamei", "Abuja", "Nairóbi", "Bangui", "Quinxassa", "Quigali", "São Tomé", "Vitória", "Dacar", "Freetown", "Mogadíscio", "Cartum"],
}

/* with (letras) {
    primeiraL.forEach(indece => teclado.innerHTML += `<li>${indece}</li>`);
    teclado.innerHTML += `<br/>`;
    segundaL.forEach(indece => teclado.innerHTML += `<li>${indece}</li>`);
    teclado.innerHTML += `<br/>`;
    terceiraL.forEach(indece => teclado.innerHTML += `<li>${indece}</li>`);
} */

for (var i = 0; i < local.pais.length; i++) {
    var so = local.pais[i]
    local.pais[i] = so.toUpperCase()
}

const letra = this.document.querySelectorAll("li")
var erro = 1;
var verf = null
var rd = Math.floor(Math.random() * local.pais.length)

var aux = []
for (let i = 0; i < local.pais[rd].length; i++)
    aux.push("_")

var alfa = []
for (let i = 0; i < 26; i++)
    alfa.push("X")

texto.value = "_ ".repeat(local.pais[rd].length)

var lenLimite = local.pais[rd].length
strlen.innerHTML = `Faltam <span style='color:red'>${lenLimite}</span> letras`

const status = () => {
    if (verf == local.pais[rd])
        alert('Parabens Babaka, você venceu')
    else if (erro == 7)
        alert(`Que pena, o pais era ${local.pais[rd]}`)
}

const Jogo = (l, p) => {
    try {
        if (verf == local.pais[rd])
            alert('Parabens Babaka você venceu')
        else if (erro == 7)
            alert(`Que pena, o pais era ${local.pais[rd]}`)
        else if (alfa[p] == "X") {
            alfa[p] = "#"
            if (local.pais[rd].indexOf(l) != -1 ? true : false) {
                for (var i = 0; i < local.pais[rd].length; i++) {
                    if (l == local.pais[rd][i])
                        aux[i] = l
                    if (local.pais[rd][i] == " ")
                        aux[i] = " "
                }
                letra[p].classList.add('yes')
                texto.value = ""
                verf = aux.join("")
                aux.forEach(val => texto.value += val + " ")

                // Verificando a quantidade de letras

                lenLimite = 0
                for (let p = 0; p < texto.value.length; p++) {
                    if (texto.value[p] == "_")
                        lenLimite++
                }
                if (lenLimite == 0)
                    strlen.innerHTML = "<span style='color:green'>Concluido</span>";
                else
                    strlen.innerHTML = `Faltam <span style='color:red'>${lenLimite}</span> letras`
            } else {
                letra[p].classList.add('error')
                image.src = `img/forca${++erro}.png`
            }
        }
    } catch (e) {
        alert(e.toString())
    } finally {
        letra[p].classList.add('finally')
        status()
    }
}

document.querySelector("#dica").onclick = () => alert("Capital: " + local.capital[rd])

for(let po = 0; po < letras.length; po++) {
    document.querySelectorAll(".teclado li")[po].onclick = () => Jogo(letras[po], po);
}