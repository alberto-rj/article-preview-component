# Frontend Mentor - Article preview component solution

<div align="center">
  <strong>Idioma:</strong> <a href="README.md"> 🇺🇸 Inglês </a> | <a href="README-PT.md"> 🇧🇷 Português </a>
</div>

![Screenshot](./screenshot/screenshot-desktop.png)

Este é uma solução para o [desafio Article preview component no Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Os desafios do Frontend Mentor podem te ajudar a melhorar as suas habilidade de codificação e a construir projetos do mundo real.

## Índice

- [Visão geral](#visão-geral)
  - [Motivações](#motivações)
  - [Capturas de tela](#capturas-de-tela)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Construído com](#construídos-com)
  - [Desafios enfrentados](#desafios-enfretados)
  - [Trabalhos futuros](#trabalhos-futuros)
  - [Recursos úteis](#recursos-úteis)
- [Autor](#autor)
- [Agradecimentos](#agradecimentos)

## Visão geral

### Motivações

Os usuários devem ser capazes de:

- Visualizar o layout ideal do componente de acordo com o tamanho da tela do dispositivo.
- Ver os links de compartilhamento de mídia social ao clicar no ícone de compartilhamento.

### Capturas de tela

#### Versão mobile

<details open>
  <summary>Menu recolhido</summary>
  <img alt="" src="./screenshot/screenshot-mobile.png">
</details>

<details open>
  <summary>Menu expandido</summary>
  <img alt="" src="./screenshot/screenshot-mobile-active.png">
</details>

#### Versão desktop

<details open>
  <summary>Menu recolhido</summary>
  <img alt="" src="./screenshot/screenshot-desktop.png">
</details>

<details open>
  <summary>Menu expandido</summary>
  <img alt="" src="./screenshot/screenshot-desktop-active.png">
</details>

### Links

- [Site de demonstração](https://alberto-rj.github.io/article-preview-component/)
- [Minha solução no Frontend Mentor](https://your-solution-url.com)

## Meu processo

### Construídos com

- Marcação semântica HTML5
- Propriedades CSS personalizadas
- Flexbox
- Fluxo de trabalho mobile-first
- JavaScript no lado do cliente

### Desafios enfretados

#### Responsividade

- **Problema:** Adaptar o componente para diferentes dispositivos (mobile, tablet, desktop) foi um desafio.

- **Solução:** O CSS Flexbox e as CSS Media Queries foram utilizados para criar um layout responsivo. O componente foi testado em diversos dispositivos e tamanhos de tela para garantir uma boa experiência do usuário.

#### Acessibilidade

- **Problema:** A baixa acessibilidade do componente para usuários com deficiência visual era um problema.

- **Solução:** Para garantir a legibilidade do componente para todos os usuários, as cores foram ajustadas com base em testes de acessibilidade realizados em ferramentas como *Accessibility Insights* e *Lighthouse*. As cores alternativas (`#67788f`, `#ffffff`) oferecem um melhor contraste e facilitam a leitura para pessoas com baixa visão.

#### Otimização de desempenho

- **Problema:** Garantir tempos de carregamento rápidos e desempenho suave foi uma grande preocupação, especialmente com arquivo CSS e JavaScript.

- **Solução:**
  - Minimizou-se o CSS.
  - Usou-se o atributo `defer` ao carregar o script.

### Trabalhos futuros

- **Acessibilidade:** Tornar o menu de compartilhamento de mídia social acessível para usuários que navegam com o teclado.

- **Otimização de desempenho:** Reduzir o tamanho das imagens do desafio para melhorar o tempo de carregamento da página.

### Recursos úteis

- [Accessibility Insights for Web](https://accessibilityinsights.io/docs/web/overview/) - Uma ferramenta completa para realizar testes de acessibilidade em websites. Ela foi utilizada para verificar o contraste de cores do componente.

- [Lighthouse](https://en.wikipedia.org/wiki/Google_Lighthouse) - Uma ferramenta desenvolvida pelo Google que auxilia na otimização de websites, incluindo aspectos como boas práticas, performance, acessibilidade e SEO.

## Autor

- GitHub - [Alberto Raúl José](https://github.com/alberto-rj)
- Frontend Mentor - [@alberto-rj](https://www.frontendmentor.io/profile/alberto-rj)
- Twitter - [@albertorauljose](https://www.twitter.com/albertorauljose)

## Agradecimentos

Um enorme agradecimento ao [Busari Akeem Tunde](https://www.frontendmentor.io/profile/Aalphakeem-Adroit) pela orientação e apoio durante todo o processo de documentação. Suas ideias foram fundamentais para moldar a documentação do projeto.
