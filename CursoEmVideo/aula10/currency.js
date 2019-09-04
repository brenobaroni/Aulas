var n1 = 1545.5
n1.toFixed(2).replace('.', ',')
document.write(n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}).toString())

n1.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})