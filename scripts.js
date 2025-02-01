const precoAtual = 100;
const precoAnterior = 80;
const limiteDePreco = 110;

function teste(precoAnterior, precoAtual){
    if(precoAnterior<precoAtual) {
        return 'Promoção';
    }else {
        return 'sem promoção';
    }
}

// teste git
