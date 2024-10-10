async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('grafico-container_texto')
}   paragrafo.innerHTML='Você sabia que o mundo tem ${dados.total_pessoa_mundo} de pessoas e que aproxidamente ${dados.total_pessoas_conectadas estão conectadas em alguma rede social e passam em média ${dado.tempo_meio} hora conectadas.'console.log(paragrafo)
  
  vizualizarInformacoesGlobais()
  