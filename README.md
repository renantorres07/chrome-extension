# Extensão de Tema Personalizado para Chrome

Uma extensão para o Google Chrome que permite aos usuários personalizar o tema do navegador com suas próprias preferências de cor e inclui uma função de luz noturna (filtro de luz azul) para reduzir a tensão nos olhos durante a noite.

## Funcionalidades

- Personalização de cor do tema do Chrome.
- Função de luz noturna para reduzir a luz azul.
- Salva as configurações do usuário usando a API de armazenamento do Chrome.

## Instalação

### Pré-requisitos

- Google Chrome

### Passos

1. Clone este repositório ou faça o download dos arquivos.

    ```bash
    git clone https://github.com/renantorres07/chrome-extension.git
    ```

2. Abra o Google Chrome e vá para `chrome://extensions/`.

3. Ative o "Modo de desenvolvedor" no canto superior direito.

4. Clique em "Carregar sem compactação" e selecione o diretório do projeto clonado.

5. A extensão agora está instalada e você pode vê-la na barra de ferramentas do Chrome.

## Uso

1. Clique no ícone da extensão na barra de ferramentas do Chrome.

2. Escolha a cor desejada para o tema usando o seletor de cores.

3. Ative ou desative a luz noturna usando o checkbox.

4. Clique em "Salvar" para aplicar as configurações.

## Arquivos do Projeto

- `manifest.json`: Arquivo de configuração da extensão.
- `background.js`: Script de plano de fundo que gerencia a aplicação do tema e luz noturna.
- `popup.html`: HTML do pop-up que aparece quando o ícone da extensão é clicado.
- `popup.js`: Script que lida com as interações do usuário no pop-up.
- `styles.css`: Estilos para o pop-up.
- `/images`: Contém os ícones da extensão.

## Contribuição

Se você quiser contribuir com este projeto, siga os passos abaixo:

1. Faça um fork do repositório.

2. Crie uma branch para a sua feature (`git checkout -b feature/AmazingFeature`).

3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`).

4. Envie para a branch (`git push origin feature/AmazingFeature`).

5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Renan Torres - nantorres0@gmail.com

Link do Projeto: [https://github.com/renantorres07/chrome-extension.git](https://github.com/renantorres07/chrome-extension.git)
