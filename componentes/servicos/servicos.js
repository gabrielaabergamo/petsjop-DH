import {servicos} from '../servicos-list.js'
import "./servicos.scss"

export function createMarkupServicos(){
    return servicos.map(servicos => `
    <div class="servicos-body">
        <div class="servicos-retangulo"></div>

        <div class="servicos-info">
            <div class="servicos-info__content">
                <h2 class="servicos-info__content-title">${servicos.titulo}</h2> <small class="servicos-info__content-preco">${servicos.preco}</small>
            </div>
            <p class="servicos-info__description">Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et <br>
                quasi architecto beatae vitae dicta sunt explicabo. Nemo enim <br>
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, <br>
                sed quia consequuntur magni dolores eos qui ratione voluptatem <br>
                sequi nesciunt. </p>
                <button class="servicos-info__btn">agendar</button>
        </div>
    </div>
    <img class="servicos-img" src="img/linha.png" alt="">
    `).join('')
}