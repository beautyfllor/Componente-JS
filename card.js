'use strict'

class card extends HTMLElement {
    constructor() {
        super();
        this.build()
    }

    build () {
        const shadow = this.attachShadow({mode: 'open'})
        shadow.appendChild(this.styles())
        shadow.appendChild(this.createCard())
    }

    styles() {
        const style = document.createElement('style')
        style.textContent = `

        .card{
            width: 250px;
            height: 250px;
        
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            margin-right: 10px;
            background-color: ${this.bgcolor()};
        }
        
        .card-text{
            width: 50%;
            padding: 4px;
            text-align: center;
            text-transform: uppercase;
            color: #fff;
            border-radius: 12px;
            box-shadow: 0 0 2px #000;
        }
        
        .card-image{
            width: 50%;
            height: 50%;
            border-radius: 50%;
            background-image: url(${this.img()});
            background-size: cover;
            box-shadow: inset 0 0 8px #000;
        }
        `
        return style
    }

    createCard(){

        // <div class="card">
        //     <div class="card-text">Flor</div>
        //     <div class="card-image"></div>
        //     <div class="card-text">DS2T</div>
        // </div>

        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
            <div class="card-text">${this.name()}</div>
            <div class="card-image"></div>
            <div class="card-text">${this.turma()}</div>
        `
        return card
    }

    bgcolor() {
        const color = this.getAttribute('data-bgcolor') ?? "#f00"

        return color
    }

    name() {
        const name = this.getAttribute('data-name') ?? "Aluno(a)"

        return name
    }

    img() {
        const img = this.getAttribute('data-img') ?? "./img/sem_perfil.jpg"

        return img
    }

    turma() {
        const turma = this.getAttribute('data-turma') ?? "Turma"

        return turma
    }

}

customElements.define('card-aluno', card)//1 - nome da tag que será criada, 2 - baseada na classe que a div será criado