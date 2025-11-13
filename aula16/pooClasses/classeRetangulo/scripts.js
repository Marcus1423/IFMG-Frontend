class Retangulo{
    constructor(nome, largura, altura) {
        this.nome = nome;
        this.largura = largura;
        this.altura = altura;
    }

    obterValores() {
        this.nome = prompt('Digite o nome do retãngulo');
        this.largura = Number(prompt('Digite a largura'));
        this.altura = Number(prompt('Digite a altura'));

        let escolheOperacao = prompt('Digite (p) para calcular o perimetro ou (a) para calcular a área.')

        if (escolheOperacao === 'p') {
            this.calcularPerimetro();
        } else if (escolheOperacao === 'a') {
            this.calcularArea();
        }

    }

    calcularPerimetro() {
        let perimetro = 2 * (this.largura + this.altura);
        alert(`O perimetro do retãngulo é ${perimetro}`);
    }

    calcularArea() {
        let area = this.altura * this.largura;
        alert(`A área de ${area}`);
    }

    atualizarLargura(novaLargura) {

    }

    atualizarAltura(novaAltura) {

    }
}

const retangulo1 = new Retangulo();
retangulo1.obterValores();





