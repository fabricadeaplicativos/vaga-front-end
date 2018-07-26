# Teste para candidatos à vaga de desenvolvedor Front-end

## Instruções:

1. Faça um fork deste repositório;
2. Instale o angular material: https://material.angular.io;
3. Após terminar seu teste submeta um pull request e aguarde seu feedback;

Este projeto foi gerado utilizando o [Angular CLI](https://github.com/angular/angular-cli) versão 6.1.1.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

# O desafio
## Crie uma Single Page Application de uma loja de quadrinhos utilizando a API da Marvel para todos os consumos de dados.

API: [https://developer.marvel.com](https://developer.marvel.com)

O App consiste de uma tela de lista de quadrinhos, uma tela de detalhe do quadrinho (comics) e uma funcionalidade de checkout dos quadrinhos adicionados.
Na tela de checkout só é necessário mostrar os quadrinhos selecionados e o valor total, não é necessário fazer nenhuma requisição para finalizar a compra.
Qualquer funcionalidade extra é bem vinda para agregar na solução proposta.

O layout é por sua conta, seja criativo.
A arquitetura é por sua conta, seja esperto. 

Você será avaliado pela qualidade do código, pela modularidade, pela legibilidade, pela criatividade, pela quantidade de funcionalidades básicas e extra.

##### Diferenciais:

* 10% dos quadrinhos carregados devem ser marcados como raros (aleatoriamente no próprio front ao carregar o REST).
* O checkout deve contemplar a opção do usuário digitar um cartão de crédito e fazer a validação.
* O checkout deve contemplar a opcão de código de desconto (pode validar mock, sem rest).
* Faça um rest simulado (mock) para receber cupons de desconto.