# Jogo da Velha (app)

Algumas lendas urbanas contam que o Jogo da Velha teria nascido em Portugal, na cidade de Almada no ano 545. No entanto, só foi popularizado no ano 1500, pelo descobridor Pedro Álvares Cabral, que adorava jogar este jogo durante as suas viagens. Cabral teria decidido que este jogo seria o primeiro a ser ensinado ao povo indígena no Brasil. No entanto não há como confirmar essa história.
Este repositório traz o Jogo da Velha em um projeto mobile simples com JS que apresenta os conceitos básicos de desenvolvimento de aplicações móveis com React Native. Foi desenvolvido durante a produção do e-book "Programação para Dispositivos Móveis - Básico" que escrevi em 2022 para o IFMG. O projeto conta com apenas 3 telas, que dinamicamente mudam de acordo com as ações do usuário. 

## Instalação

Para começar, certifique-se de ter o Node.js instalado em seu computador. Em seguida, clone o repositório do projeto e instale as dependências usando npm, yarn ou pnpm:

```bash
npm install
# ou 
yarn install
# ou
pnpm install 
```

## Rodando o projeto localmente

Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento localmente. Basta executar o seguinte comando:

```bash
npx expo start
```

O comando exibirá um QRCode no terminal, que pode ser lido por seu smartphone, dentre outras possibilidades. Importante lembrar que é preciso ter o Expo Go instalado, e o mesmo pode ser baixado em sua loja de aplicativos. Pode-se testar tanto em Android quanto iOS!

Outra possibilidade é ter um emulador instalado em sua máquina. Ao executar o emulador (por exemplo, Android Studio), basta teclar A no terminal para que o Expo se encarregue de instalar o aplicativo em seu emulador. No Mac o procedimento é parecido, mas você utilizará o XCode para isso.

## Sobre o Projeto

O projeto traz o que há de mais simples no desenvolvimento com React Native. Com interfaces simples e amigável, visa facilitar a jogatina de quem curte o jogo e está tendo seu primeiro contato mobile. Além disso, estimula o aprimoramento de técnicas e de deduções lógicas para construir as regras do jogo.

![Menu](https://i.ibb.co/SvKfknz/Design01.png "Menu")

![Game](https://i.ibb.co/SvKfknz/Design01.png "Game") 

O app é bastante intuitivo, possuindo uma estilização global, rotas definidas pelo uso do React Navigation e telas (screens) tituladas: Game, Menu e Winner.

## Principais Dependências

* **React Native**: Framework para desenvolvimento de aplicativos móveis utilizando JavaScript (TypeScript) e React.
* **React Navigation**: Biblioteca de roteamento e navegação para aplicativos React Native.
* **StyleSheet:** Módulo do React Native para criar estilos de componentes usando objetos JavaScript. Foi mesclado na aplicação apenas para fins comparativos.

Obrigado pela visita 😁 !
