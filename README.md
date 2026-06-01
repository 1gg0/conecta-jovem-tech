# Conecta Jovem Tech - HoW X

MVP acadêmico desenvolvido em HTML, CSS e JavaScript para divulgação de oficinas introdutórias de programação e registro de inscrições de jovens da comunidade. Esta versão foi refinada para a disciplina **HoW X**, com foco em responsividade, acessibilidade básica, organização visual e melhoria do fluxo de inscrição.

## Links do projeto

- GitHub Pages: https://1gg0.github.io/conecta-jovem-tech/
- Repositório: https://github.com/1gg0/conecta-jovem-tech
- Quadro Scrum/Trello: https://trello.com/invite/b/69c5e8ad617477e314c476ae/ATTI20c033bcbffba9ba38bd82a59583c262CA759EED/conecta-jovem-tech-scrum

## Estrutura

- `index.html`: página principal do projeto
- `assets/css/style.css`: estilização responsiva da interface
- `assets/js/script.js`: renderização das oficinas, cronograma, filtros, validação do formulário e painel do MVP
- `assets/img/`: arquivos visuais do projeto

## Funcionalidades

- Navegação entre seções do site
- Apresentação do projeto e de seus diferenciais
- Seção de evolução do MVP para a HoW X
- Listagem de oficinas introdutórias
- Busca textual e filtro por categoria na listagem de oficinas
- Cronograma com abas por trilha e chamadas para inscrição
- Formulário funcional com validação
- Prevenção de inscrição duplicada para o mesmo e-mail na mesma oficina
- Registro local das inscrições com `localStorage`
- Painel de inscrições salvas no navegador
- Exportação das inscrições demonstrativas em arquivo CSV
- Layout responsivo para desktop, tablet e celular
- Ajustes básicos de acessibilidade: link para pular ao conteúdo, foco visível, menu mobile com `aria-expanded` e suporte à tecla `Esc`

## Como executar

1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` em um navegador.
3. Para melhor experiência, utilize uma extensão de servidor local no VS Code ou um servidor simples.

### Exemplo com Python

```bash
python -m http.server 8000
```

Depois, acesse `http://localhost:8000`.

## Observação

Os dados do formulário são salvos localmente no navegador apenas para fins demonstrativos do MVP. O projeto não envia informações para servidor externo e não possui banco de dados nesta versão.
