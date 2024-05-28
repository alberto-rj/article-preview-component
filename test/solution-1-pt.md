# Frontend Mentor - Article preview component solution

Este é uma solução para o [desafio Article preview component no Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Os desafios do Frontend Mentor podem te ajudar a melhorar as suas habilidade de codificação e a construir projetos do mundo real.

## Índice

- [Visão geral](#visão-geral)
  - [Motivações](#motivações)
  - [Capturas de tela](#capturas-de-tela)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Construído com](#construídos-com)
  - [Desafios enfrentados](#desafios-enfretados)
  - [O que mais me orgulho (aprendizados)](#o-que-mais-me-orgulho)
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

<details>
  <summary>Versão Mobile</summary>
  <img alt="" src="">
</details>

<details>
  <summary>Versão Mobile</summary>
  <img alt="" src="">
</details>

### Links

- [Site de demonstração](https://your-live-site-url.com)
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

##### Contraste de cores

- **Problema:** Garantir que o componente tenha um bom constraste de cores para facilitar a leitura aos usuários com problemas de visão.

- **Solução:** Em vez de se usar as cores (`#6d7f97`, `#9eafc2`) conforme especificado na paleta de cores do design, usou-se como alternativas as cores (`#67788f`, `#ffffff`) segundo testes realizados em ferramentas como **Accessibility Insights for Web**, **Lighthouse** e **WAVE**.

##### Padrão popup menu

- **Problema:** Tornar o menu de compartilhamento acessível a todos os usuários, incluindo pessoas com deficiência, foi difícil devido à necessidade de entender e implementar o padrão popup menu.

- **Solução:** Implementou-se HTML semântico, usou-se funções ARIA e rótulos. Executou-se testes de acessibilidade usando ferramentas como **Lighthouse** e **WAVE**.

#### Otimização de desempenho

- **Problema:** Garantir tempos de carregamento rápidos e desempenho suave foi uma grande preocupação, especialmente com imagens, arquivo CSS e JavaScript.

- **Solução:**
  - Otimizou-se imagens usando o formato WebP.
  - Minimizou-se o CSS.
  - Usou-se o atributo `defer` ao carregar o script.

### O que mais me orgulho

### Trabalhos futuros

### Recursos úteis

- [Accessibility Insights for Web]() - Pode ser usada para realizar diversos tipos de testes de acessibilidade. Ela foi usada para garantir um bom constraste de cores.

- [Lighthouse Extension]() - Esta ferramenta pode ajudar a melhorar significativamente na performance, acessibilidade, e boas práticas de um website.

- [Tiny Image]() - Pode ser usada para gerar imagens no formato WebP.

## Autor

- GitHub - [Alberto Raúl José](https://github.com/alberto-rj)
- Frontend Mentor - [@alberto-rj](https://www.frontendmentor.io/profile/alberto-rj)
- Twitter - [@albertorauljose](https://www.twitter.com/albertorauljose)

## Agradecimentos

Muito obrigado [Fulano](#), pela óptima inpiração e por me ajudar a construir uma documentação para um projeto como este.
