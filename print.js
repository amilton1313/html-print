function alerta01() {
    alert('ummm')
}

const alerta02 = () => {

        var conteudo = document.getElementById('print').innerHTML,
        tela_impressao = window.open('about:blank');
        tela_impressao.document.write(conteudo);
        tela_impressao.window.print();
        tela_impressao.window.close();
        

}