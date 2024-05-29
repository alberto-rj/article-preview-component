# Frontend Mentor - Article preview component solution

Idioma:  [🇺🇸 Inglês](README.md)  |  [🇧🇷 Português](README-PT.md)

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

- **Problema:** Garantir que o componente tenha uma boa aparência e funcione bem em diferentes dispositivos (mobile, tablet, desktop) foi um desafio.

- **Solução:** Usou-se CSS Flexbox e CSS Media Query para criar um layout responsivo. Testado em vários dispositivos e tamanhos de tela.

#### Acessibilidade

- **Problema:** Garantir que o componente tenha um bom constraste de cores para facilitar a leitura aos usuários com problemas de visão.

- **Solução:** Em vez de se usar as cores (`#6d7f97`, `#9eafc2`) conforme especificado na paleta de cores do design, usou-se como alternativas as cores (`#67788f`, `#ffffff`) segundo testes realizados em ferramentas como **Accessibility Insights**, **Lighthouse**.

#### Otimização de desempenho

- **Problema:** Garantir tempos de carregamento rápidos e desempenho suave foi uma grande preocupação, especialmente com arquivo CSS e JavaScript.

- **Solução:**
  - Minimizou-se o CSS.
  - Usou-se o atributo `defer` ao carregar o script.

### Trabalhos futuros

- **Acessibilidade:** Implementar suporte de interação de teclado no menu de compartilhamento de mídia social.

- **Otimização de desempenho:** Realizar otimização das imagens do desafio.

### Recursos úteis

- [Accessibility Insights for Web](https://accessibilityinsights.io/docs/web/overview/) - Pode ser usada para realizar diversos tipos de testes de acessibilidade. Ela foi usada para garantir um bom constraste de cores.

- [Lighthouse](https://en.wikipedia.org/wiki/Google_Lighthouse) - Pode ajudar a melhorar as boas práticas, performance, acessibilidade e SEO de seu website.

## Autor

- GitHub - [Alberto Raúl José](https://github.com/alberto-rj)
- Frontend Mentor - [@alberto-rj](https://www.frontendmentor.io/profile/alberto-rj)
- Twitter - [@albertorauljose](https://www.twitter.com/albertorauljose)

## Agradecimentos

Muito obrigado [Fulano](#) pela óptima inpiração e por me ajudar a construir uma documentação para um projeto como este.
