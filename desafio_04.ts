interface Receita {
    estado: string;
    valor: number;
}

const receitas: Receita[] = [
    { estado: 'SP', valor: 67836.43 },
    { estado: 'RJ', valor: 36678.66 },
    { estado: 'MG', valor: 29229.88 },
    { estado: 'ES', valor: 27165.48 },
    { estado: 'Outros', valor: 19849.53 }
];

const receitaTotal = receitas.reduce((acc, receita) => acc + receita.valor, 0);

receitas.forEach(receita => {
    const porcentagem = (receita.valor / receitaTotal) * 100;
    console.log(`Estado: ${receita.estado}, Porcentagem: ${porcentagem.toFixed(2)}%`);
});