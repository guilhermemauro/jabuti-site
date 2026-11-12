# CLAUDE.md — site do Jabuti

Instruções para agentes que trabalham neste repositório: o site público do Jabuti.

## O produto

**Jabuti** é um harness de agentes de IA open source (MIT), self-hosted, escrito em TypeScript
**sem nenhum framework de agentes**. O loop, o registro de ferramentas, o contexto, as permissões,
as skills e a troca de agentes são código próprio, pequeno o bastante para ler numa tarde.

- Código: https://github.com/guilhermemauro/jabuti
- Fonte da verdade do produto: o `README.md` e o `AGENTS.md` desse repositório (localmente em
  `../jabuti`). Leia-os antes de escrever qualquer texto sobre o produto.
- Nome: jabuti (/ʒa.buˈtʃi/), o jabuti brasileiro: lento para começar, difícil de quebrar, e
  sempre chega lá. O harness é construído do mesmo jeito.
- Status: **early**. Não apresente como produto maduro, SaaS ou serviço hospedado.

### O que ele faz

- **Vários agentes, um por site ou projeto.** Cada agente é um perfil em disco: modelo, system
  prompt, orçamento, ferramentas, modo do shell, subagentes, conectores MCP e skills. Cada um tem
  brief, notas e workspace próprios. Dá para trocar de agente no meio da conversa: o histórico é
  compartilhado, as capacidades não.
- **Trabalho real num shell isolado.** Comandos rodam num container Linux com Python, um workspace
  por agente, sem segredos do servidor. Modo auto, ou ask (o dono aprova cada comando).
- **Segredos ficam no servidor.** Chaves criptografadas em repouso; o modelo nunca as vê, o shell
  não as herda.
- **Conectores MCP.** Embutidos: Google Search Console, Google Analytics 4, PageSpeed, Serper,
  DataForSEO, Wikipedia, geração de imagens. Também qualquer servidor MCP remoto (token ou OAuth).
- **Skills sob demanda.** O prompt lista só nome e descrição; o método entra no contexto quando
  é usado.
- **Memória legível.** Brief e notas datadas em Markdown; um modelo pequeno propõe o que lembrar e
  nada é salvo sem aprovação do dono.
- **Autonomia com coleira.** Marcos aprovados pelo dono, mudanças propostas como experimentos com
  baseline medido, rotinas agendadas, inbox de aprovações, publicação por pull request.
- **Conversas longas e baratas.** Histórico append-only, compactação, prefixo estável para prompt
  caching.
- **Tudo rastreado.** Uma linha JSONL por passo (tokens, custo, duração); os traces não saem da
  máquina.
- **As promessas são testes.** Cada garantia é uma obrigação do Contract (C1–C21), testada contra
  um modelo falso a cada commit.

### Para quem

O caso que define "pronto": um agente de SEO que puxa dados do Search Console por MCP, escreve um
script no shell para analisá-los e entrega um relatório de quick wins na interface. Públicos:

1. Quem trabalha com SEO e programa, e quer agentes que fazem análise de verdade com seus dados.
2. Devs que querem um agente que controlam: self-hosted, legível, sem framework.

### Como se instala

Self-hosted por um único dono, via Docker Compose (Jabuti + runner do shell + Caddy com HTTPS
automático). Caminhos documentados no README: Hostinger (botão de deploy), AWS (CloudFormation),
DigitalOcean (Droplet com script de inicialização) e qualquer VPS com a linha de `install.sh`.
Copie comandos e links do README, nunca de memória.

## Regras para o conteúdo do site

- **Só afirme o que o README afirma.** Nada de recursos futuros, números de usuários, depoimentos,
  benchmarks ou logos de clientes inventados. Na dúvida, confira em `../jabuti`.
- **Sem exagero de marketing.** O tom é o do README: direto, concreto, técnico, com um pouco de
  humor do jabuti. Mostre o mecanismo (loop, shell, Contract), não adjetivos.
- **Idioma:** o README e o código estão em inglês; o texto do site segue em inglês, salvo pedido
  contrário.
- **Foco na dor, não na construção** (pedido do dono, 2026-11-12). O site vende o problema que o
  Jabuti resolve para quem faz SEO: IA de chat dá conselho genérico porque nunca viu os dados;
  o agente do Jabuti puxa Search Console/GA4, analisa com script e traz recomendação com evidência,
  no seu servidor e com aprovação. Como ele é feito (sem framework, Contract) fica na seção "For
  developers", no fim da página.
- **SEO do próprio site:** title e H1 com "AI SEO agent"; termos-alvo pesquisados: AI SEO agent,
  Search Console AI agent, quick wins, self-hosted, open source. Concorrentes vistos nas SERPs:
  OpenSEO, DispatchSEO, servidores MCP de Search Console. O FAQ (`src/data/faq.ts`) alimenta a
  página e o JSON-LD `FAQPage`.
- **Open source primeiro.** O CTA principal é o repositório e a instalação, não um cadastro.
- Nada de dados privados, credenciais ou conteúdo real de usuários em páginas, exemplos ou commits.
- PRs não mencionam o Claude Code.

## Stack do site

**Astro 7 (estático), pnpm, Node 26, deploy no GitHub Pages** (decidido em 2026-11-12, a pedido do
dono; substituiu uma primeira versão em HTML puro).

- Estrutura: `src/pages/index.astro` monta as seções de `src/components/` (Hero, Problems,
  Workflow, Capabilities, Install, Faq, Developers, Status). O texto de cada seção fica em arrays no
  topo do componente; o FAQ em `src/data/faq.ts`. Links e comandos do produto ficam em
  `src/consts.ts`: copie-os do README. A logo (`Logo.astro`, `public/favicon.svg`) é o
  `TortoiseIcon` de `packages/ui/src/Icons.tsx` sobre `#2f6b4f`, igual à interface.
- `public/og.png` (1200×630) é a imagem de compartilhamento; foi gerada de um HTML com o Chrome
  headless. Se o título mudar, gere de novo.
- Estilo: `src/styles/global.css`, com as cores "Forest Console" do `docs/DESIGN.md` do produto e
  modo escuro. Sem framework de CSS.
- Fontes: Hanken Grotesk e JetBrains Mono pela Fonts API do Astro (`astro.config.mjs`), baixadas
  no build e servidas pelo próprio site. O visitante não faz requisição ao Google.
- JS no cliente: só as abas de instalação e o botão de copiar. A página funciona sem JS.
- Sitemap: `@astrojs/sitemap` gera `sitemap-index.xml`. `public/` tem `CNAME` (getjabuti.com),
  `robots.txt` e `favicon.svg`.
- `pnpm build` roda `astro check` antes do build. O TypeScript fica na 6.x porque o `astro check`
  ainda não suporta a 7.
- O `pnpm-workspace.yaml` tem exceções à idade mínima de release do pnpm para o Astro 7.4.11, que
  era recente demais na instalação. Ao atualizar o Astro, revise essa lista.
- A conversa ilustrativa do hero e a seção Workflow seguem o template `agents/seo-example` do
  produto. É ilustração: nada de números ou resultados inventados.

### Comandos

```sh
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # astro check + build em dist/
pnpm preview
```

### Deploy

`.github/workflows/deploy.yml` publica a cada push na `main` com `withastro/action` e
`actions/deploy-pages`. No GitHub: Settings → Pages → Source: **GitHub Actions**, e domínio
personalizado `getjabuti.com`. No DNS: registros `A` do apex para os IPs do GitHub Pages
(185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) e `CNAME` de `www` para
`<usuário>.github.io`.
