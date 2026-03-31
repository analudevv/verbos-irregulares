# Verbos Irregulares - Prova de Inglês

## Descrição

Este é um quiz simples para praticar **verbos irregulares em inglês**. O aplicativo sorteia aleatoriamente um verbo da lista, exibe o infinitivo com tradução em português, e o usuário deve digitar as formas no **passado simples** e **particípio passado**.

Feito com **HTML**, **CSS** e **JavaScript puro**. Sem dependências externas.

**Autor:** [@analudevv](https://github.com/analudevv) (baseado no crédito no index.html)

## Funcionalidades

- ✅ Sorteio aleatório de verbos irregulares (~37 verbos)
- ✅ Verificação automática da resposta
- ✅ Feedback imediato (correto/errado com forma correta)
- ✅ Interface responsiva e estilizada (tema escuro)
- ✅ Auto-avança para próximo verbo após resposta

## Como usar

1. Abra o arquivo `index.html` no seu navegador (Chrome, Firefox, etc.)
2. Clique em **\"SORTEAR VERBO\"** para começar
3. Digite a resposta no formato: `forma_passado e forma_participio` (ex: `went e gone`)
4. Clique **\"Enviar\"** para verificar
5. O app avança automaticamente para o próximo!

Exemplo:  
Verbo sorteado: `go(ir)`  
Resposta esperada: `went e gone`

## Estrutura do Projeto

```
verbos-irregulares/
├── index.html       # Página principal (HTML + CSS inline)
└── main/
    └── teste.js     # Lógica JS (lista de verbos + funções sorteio/respostas)
```

## Lista de Verbos

A lista inclui verbos comuns como:
- be (was/were, been)
- go (went, gone)
- eat (ate, eaten)
- write (wrote, written)
- ... (veja o array em `main/teste.js`)

## Problemas Conhecidos / Melhorias Sugeridas

- **Bugs no JS:**
  - Usa `=` em vez de `==` ou `===` nas comparações (funciona mas não é best practice)
  - Verbo \"read(ler)\" rotulado errado como \"escrever\"
  - Resposta incompleta para \"sit(sentar)\"
  - Comparação case-sensitive (melhor normalizar para lowercase)
  - Falta alguns verbos da lista original no `if-else`

- **Melhorias:**
  - Adicionar pontuação/acertos
  - Modo treino (repetir errados)
  - Lista completa de 200+ verbos irregulares
  - Sons/efeitos visuais
  - Exportar resultados

## Contribuições

Sinta-se à vontade para:
- Corrigir bugs no JS
- Adicionar mais verbos
- Melhorar UI/UX
- Transformar em PWA

Fork, PRs bem-vindos!

## Licença

Projeto open-source. Use como quiser (sem licença formal).
