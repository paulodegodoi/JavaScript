 // usa spread(espalhar) com objeto
 const funcionario = { nome: 'Paulo', salario: 1280.90 }
 const clone = { ativo: true, ...funcionario}
 console.log(clone)

 // usar spread com array
 const grupoA = ['João', 'Pedro', 'Glória']
 const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
 console.log(grupoFinal)