import fs from 'fs';

fs.readFile('/workspaces/code-challenge-target/dados.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading JSON file:', err);
        return;
    }

    const dias = JSON.parse(data);
    const valores = dias.filter(dia => dia.valor > 0).map(dia => dia.valor);

    const menorValor = Math.min(...valores);
    const maiorValor = Math.max(...valores);
    const mediaMensal = valores.reduce((acc, val) => acc + val, 0) / valores.length;
    const diasAcimaMedia = valores.filter(valor => valor > mediaMensal).length;

    console.log('Menor valor de faturamento:', menorValor);
    console.log('Maior valor de faturamento:', maiorValor);
    console.log('Número de dias com faturamento acima da média:', diasAcimaMedia);
});