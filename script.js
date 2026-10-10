'use strict'

const buscarBtn = document.getElementById('buscarBtn')

async function buscarImagens() {
    const pokemonInput = document.getElementById('pokemonInput')
    const pokemon = pokemonInput.value.trim().toLowerCase()

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const resposta = await fetch(url)
        const dados = await resposta.json()

        return [dados.sprites.front_default]
    }

function criarCard(imagem) {
    const card = document.createElement('div')
    card.classList.add('card')
    const foto = document.createElement('img')
    foto.src = imagem
    card.appendChild(foto)

    return card
}

async function preencherGaleria() {
    const galeria = document.getElementById('galeria-container')
    const imagens = await buscarImagens()
    const cards = imagens.map(criarCard)

    galeria.replaceChildren(...cards)
}

buscarBtn.onclick = preencherGaleria