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
- **Três premissas** (definidas pelo dono, 2026-11-12). Todo o site se organiza nelas:
  1. **Contexto completo:** impressões, cliques e conversões (GA4 key events), mais site, página de
     resultados e negócio (brief). O dono escolhe a north star; ela vai no brief e vira o critério
     dos marcos.
  2. **Um agente que age, não só reage:** plano com marcos aprovados, cada mudança como
     experimento com baseline (checagens em 3/14/28 dias, por dispositivo, páginas de controle),
     rotinas agendadas, inbox.
  3. **Feito para construir autoridade:** a skill `data-study` (estudos originais que ganham
     citações e links).
- **SEO, AEO e GEO**, não só SEO. AEO = página de resultados bloco a bloco (AI overview, PAA);
  GEO = `ai_mentions` do DataForSEO (quem as respostas de IA citam) + estudos citáveis.
- **Foco na dor, não na construção.** Como ele é feito (sem framework, Contract) fica em "For
  developers", no fim da home. Não diga que a IA "nunca viu seus dados": dá para exportar ou
  conectar. A dor real é que o chat responde, mas o trabalho (contexto, seguimento, medição,
  autoridade) continua com a pessoa.
- **Publicação de mudanças:** o agente propõe numa branch, o dono revisa no GitHub e o Jabuti faz
  o merge ao aprovar (DECISIONS 2026-11-05). Não fale em "pull request".
- **SEO do próprio site:** title e H1 com "AI agent for SEO, AEO and GEO". Concorrentes vistos nas
  SERPs: OpenSEO, DispatchSEO, servidores MCP de Search Console. O FAQ (`src/data/faq.ts`) alimenta
  a página e o JSON-LD `FAQPage`.
- **Open source primeiro.** O CTA principal é o repositório e a instalação, não um cadastro.
- Nada de dados privados, credenciais ou conteúdo real de usuários em páginas, exemplos ou commits.
- PRs não mencionam o Claude Code.

## Stack do site

**Astro 7 (estático), pnpm, Node 26, deploy no GitHub Pages** (decidido em 2026-11-12, a pedido do
dono; substituiu uma primeira versão em HTML puro).

- Páginas: `/` (home), `/install/`, `/blog/` com posts em `src/content/blog/*.md` (coleção
  `blog` em `src/content.config.ts`; `draft: true` esconde no build), `/rss.xml`, `404`.
- Home: `src/pages/index.astro` monta Hero, Pillars, Context (01), Autonomy (02), Authority (03),
  SearchModes, Control, InstallCta, Faq, Developers, Status. O texto fica em arrays no topo de
  cada componente; o FAQ em `src/data/faq.ts`. Links e comandos do produto em `src/consts.ts`.
  A logo (`Logo.astro`, `public/favicon.svg`) é o `TortoiseIcon` de `packages/ui/src/Icons.tsx`
  sobre `#2f6b4f`, igual à interface.
- Blog: cada post só afirma o que está no produto (README, AGENTS.md, docs/DECISIONS.md, skills,
  templates). Autor padrão "Jabuti"; o dono pode trocar no frontmatter.
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
