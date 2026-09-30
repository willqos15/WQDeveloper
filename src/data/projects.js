export const projects = [
  {
    id: "apata",

    title: "Apata",

    cover:
      "https://res.cloudinary.com/drklvmtqp/image/upload/q_auto/f_auto/v1775830396/Captura_de_tela_2026-04-10_110906_ueprqh.png",

    summary:
      "Site de adoção animal para uma ONG. Atualmente, o projeto conta com uma rede de voluntários, cuja colaboração é conduzida por mim. Mais de 25% dos animais cadastrados foram adotados.",

    technologies: {
  Frontend: [
    "Next.js",
    "TypeScript",
    "Tailwind",
    "React Hook Form",
    "Zod"
  ],

  Backend: [
    "Next.js",
    "API Routes",
    "Prisma ORM"
  ],

  "Banco de Dados": [
    "MongoDB"
  ],

  Autenticação: [
    "JWT",
    "Bearer Token"
  ],

  Armazenamento: [
    "Cloudinary"
  ]
},

    links: [

      {
        label: "Github",
        url: "https://github.com/willqos15/Apata"
      },
      {
        label: "Site do Projeto",
        url: "https://apataatm.vercel.app/"
      }
    ],

    technical: [
      "No frontend, priorizei uma experiência intuitiva, garantindo facilidade de uso para equipe voluntária do gerenciamento dos animais. Adotei Next.js pela componentização e controle de estado. O TanStack Query foi utilizado para otimizar o consumo, performance e a sincronização de dados da API, reduzindo inconsistências.",

      "O backend desenvolvido em colaboração no Next.js, a estrutura foi pensada para garantir escalabilidade e organização dos dados. A autenticação com JWT (Bearer Token) em um modelo stateless reduziu a complexidade de sessão e facilitou a integração com o frontend."
    ],

    result:
      "As formas de apoio à causa ficaram centralizadas em um único ambiente, aumentando a visibilidade das ações da instituição. Além disso, o sistema possibilitou o registro dos animais sob tutela da APATA, criando uma vitrine acessível para adoção. Isso ampliou a conexão entre pessoas interessadas e os animais, contribuindo diretamente para aumentar as chances de adoção e melhorar a gestão interna da associação.",

    images: [
      "https://res.cloudinary.com/drklvmtqp/image/upload/q_auto/f_auto/v1775830396/Captura_de_tela_2026-04-10_110927_rvtv8k.png",

      "https://res.cloudinary.com/drklvmtqp/image/upload/q_auto/f_auto/v1775830396/Captura_de_tela_2026-04-10_111044_upvalo.png",

      "https://res.cloudinary.com/drklvmtqp/image/upload/q_auto/f_auto/v1775830396/Captura_de_tela_2026-04-10_111106_l8ypc2.png",

      "https://res.cloudinary.com/drklvmtqp/image/upload/q_auto/f_auto/v1775830396/Captura_de_tela_2026-04-10_110953_errvw6.png",

      "https://res.cloudinary.com/drklvmtqp/image/upload/q_auto/f_auto/v1775830395/Captura_de_tela_2026-04-10_111007_ltkdx8.png"
    ]
  },

  {
  id: "SaaS de Agendamento de Serviços",

  title: "SaaS Scheduling",

  cover:
    "https://res.cloudinary.com/drklvmtqp/image/upload/v1782243503/Captura_de_tela_2026-06-23_150933_zodur8.png",

  summary:
    "Uma plataforma SaaS para gerenciamento de agendamentos de serviços, Desenvolvimento em equipe com versionamento e metodologias agéis.",

  technologies: {
  Frontend: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "TanStack Query",
    "shadcn/ui"
  ],

},

  links: [
    {
      label: "GitHub",
      url: "https://github.com/DevSquad-PA/squad-scheduling"
    }
  ],

  technical: [
    "Frontend: Foquei na construção de uma interface responsiva e modular utilizando Next.js com App Router, aplicando React Server Components e integração com TanStack Query para otimização de estado e requisições.",

    "Arquitetura e backend: O projeto utiliza Server Actions tipadas com validação via Zod e next-safe-action, além de autenticação baseada em sessão com Better Auth e persistência em PostgreSQL via Prisma ORM.",

    "Decisões técnicas: A estrutura foi pensada para escalabilidade, separação de responsabilidades e isolamento de contexto por clínica, garantindo segurança e organização dos dados."
  ],

  result:
    "A plataforma centralizou a gestão de clínicas e agendamentos em um único sistema, melhorando a organização operacional, o controle de permissões e a visualização de consultas por perfil de usuário, com arquitetura preparada para escalar para múltiplas clínicas.",

  images: [
    "https://res.cloudinary.com/drklvmtqp/image/upload/v1782243503/Captura_de_tela_2026-06-23_150901_hmrbqy.png",

    "https://res.cloudinary.com/drklvmtqp/image/upload/v1782243503/Captura_de_tela_2026-06-23_151237_wpp2tu.png",

    "https://res.cloudinary.com/drklvmtqp/image/upload/v1782243503/Captura_de_tela_2026-06-23_150952_roo3qt.png"
  ]
},

{
  id: "edtech",

  title: "EdTech Palavras",

  cover:
    "https://res.cloudinary.com/drklvmtqp/image/upload/v1768502489/Captura_de_tela_2026-01-15_153600_gs2kk2.png",

  summary:
    "Um jogo educacional para aumentar o engajamento em atividades em sala de aula. Já usado e validado por professores em sala de aula na rede pública e privada.",
technologies: {
  Frontend: [
    "React",
    "TypeScript",
    "Tailwind",
  ],

  Bibliotecas: [
    "Docx",
    "ExcelJS"
  ]
},

  links: [
    {
      label: "Github",
      url: "https://github.com/willqos15/EdTechPalavras"
    },
    {
      label: "Site do Projeto",
      url: "https://edtechpalavras.vercel.app"
    }
  ],

  technical: [
    "Frontend: A aplicação foi componentizada com React para garantir a personalização dos conteúdos sem quebrar a mecânica do jogo. O uso de TypeScript reduziu erros e aumentou a confiabilidade durante o desenvolvimento, aplicando componentização de interfaces, reutilização de componentes e configuração de build para produção.",

    "A uso de bibliotecas de Excel e Word foi adotada considerando a familiaridade dos professores com tais softwares, permitindo o uso como apoio avaliativo através de importação turmas e relatórios."
  ],

  result:
    "A aplicação aumentou o engajamento dos alunos em sala, permitindo atividades mais dinâmicas. Incentivou a competição colaborativa com mecânicas de pontuação, times e comportamento, além de reduzir o esforço operacional do professor com dinâmicas gamificadas, sem tirar sua autonomia em sala.",

  images: [
    "https://res.cloudinary.com/drklvmtqp/image/upload/v1768502490/Captura_de_tela_2026-01-15_153930_ju7dmb.png",

    "https://res.cloudinary.com/drklvmtqp/image/upload/v1768502489/Captura_de_tela_2026-01-15_153747_hxchmf.png",

    "https://res.cloudinary.com/drklvmtqp/image/upload/v1768502489/Captura_de_tela_2026-01-15_153804_bev9xl.png",

    "https://res.cloudinary.com/drklvmtqp/image/upload/v1768502490/Captura_de_tela_2026-01-15_153828_wzhvql.png",

    "https://res.cloudinary.com/drklvmtqp/image/upload/v1768502490/Captura_de_tela_2026-01-15_153847_rmimdc.png"
  ]
},

{
  id: "cypherzap",

  title: "CypherZap",

  cover:
    "https://res.cloudinary.com/drklvmtqp/image/upload/v1790778479/Captura_de_tela_2026-09-30_112240_iiyemn.png",

  summary:
    "Aplicação desktop para automação de mensagens no WhatsApp, atualmente utilizada em ambiente profissional.",

  technologies: {
    Frontend: [
      "React",
      "TypeScript"
    ],

    Desktop: [
      "Electron"
    ],

    Backend: [
      "Node.js"
    ],

    Integrações: [
      "Baileys"
    ],

    "Banco de Dados": [
      "SQLite",
      "better-sqlite3"
    ]
  },

  // links: [
  //   {
  //     label: "Github",
  //     url: "https://github.com/willqos15/CypherZap"
  //   }
  // ],

  technical: [
  "Licenciamento: Implementei uma validação de licença vinculada ao usuário para controlar o acesso à aplicação e impedir o uso por contas não autorizadas.",

  "Envio de mensagens: Para tornar os disparos mais flexíveis, implementei suporte a diferentes modelos de mensagem, permitindo variar o conteúdo dos envios. Também criei presets de velocidade e uma estimativa de duração para dar mais previsibilidade ao processo.",

  "Histórico e relatórios: Optei por registrar localmente os envios realizados para permitir consultas posteriores e exportação de relatórios, mantendo um histórico das operações realizadas na aplicação.",

  "Gerenciamento de contatos: Implementei a extração de contatos de grupos para evitar o cadastro manual das listas de destinatários e facilitar a preparação dos envios.",

  "Arquitetura desktop: Escolhi Electron para distribuir a aplicação como software desktop para Windows, utilizando React na interface e Node.js no processo principal. SQLite com better-sqlite3 foi utilizado para persistência local de dados e sessões, reduzindo a dependência de infraestrutura externa."
],

  result:
    "A aplicação foi utilizada e validada em uma clínica de atendimento, onde passou a apoiar o processo de envio de mensagens para contatos. Atualmente está em uso, centralizando a preparação, execução e acompanhamento dos envios, além de manter o histórico e permitir a geração de relatórios.",

  images: [
    "https://res.cloudinary.com/drklvmtqp/image/upload/v1790778479/Captura_de_tela_2026-09-30_112353_eceoki.png",
    "https://res.cloudinary.com/drklvmtqp/image/upload/v1790778479/Captura_de_tela_2026-09-30_112300_lmarvp.png",
    "https://res.cloudinary.com/drklvmtqp/image/upload/v1790778479/Captura_de_tela_2026-09-30_112314_aagr3m.png",
    "https://res.cloudinary.com/drklvmtqp/image/upload/v1790778479/Captura_de_tela_2026-09-30_112427_sx0l7u.png"
  ]
},

{
  id: "avabot",

  title: "Avabot PetFeliz",

  cover:
    "https://res.cloudinary.com/drklvmtqp/image/upload/v1767753617/Captura_de_tela_2026-01-06_222925_sszory.png",

  summary:
    "MVP de IA Conversacional integrada com Inteligência Artificial para coleta de feedback de clientes.",
technologies: {
  Frontend: [
    "React",
    "TypeScript",
    "Tailwind",
  ],

  Backend: [
    "Node.js",
    "Express",
  ],

  "Banco de Dados": [
    "MySQL",
    "Redis"
  ],

  "IA(LLM)": [
    "Groq IA"
  ]
},

  links: [
    {
      label: "Servidor Github",
      url: "https://github.com/willqos15/Avabot_Backend"
    },
    {
      label: "Frontend Github",
      url: "https://github.com/willqos15/Avabot_Frontend"
    }
  ],

  technical: [
    "Frontend: A interface foi inspirada no WhatsApp garantiu uma experiência intuitiva. O React com TypeScript trouxe previsibilidade, reduzindo erros e evitando consumo desnecessário de tokens.",

    "Backend: Os dados são armazenados temporariamente no Redis e persistidos no MySQL, com salvamento baseado na inatividade do usuário garantiram menos carga e maior eficiência do sistema."
  ],

  result:
    "A interface conversacional trouxe maior adesão dos usuários. Os feedbacks passaram a ser coletados e centralizadas, facilitando a análise da satisfação do cliente e apoiando a tomada de decisão do negócio.",

  images: [
    "https://res.cloudinary.com/drklvmtqp/image/upload/v1767753617/Captura_de_tela_2026-01-06_223034_zh6nar.png",

    "https://res.cloudinary.com/drklvmtqp/image/upload/v1767753617/Captura_de_tela_2026-01-06_233818_zl6juu.png",

    "https://res.cloudinary.com/drklvmtqp/image/upload/v1767753617/Captura_de_tela_2026-01-06_233836_by8618.png"
  ]
},

{
  id: "automacao-agendamento-ia",

  title: "Automação de agendamento com I.A.",

  cover:
    "https://res.cloudinary.com/drklvmtqp/image/upload/v1770052142/Captura_de_tela_2026-02-02_124218_sovakj.png",

  summary:
   "Automação de agendamentos integrada ao Telegram e Google Calendar, permitindo agendar horários por mensagens de texto ou áudio.",

  technologies: {
  Automação: [
    "n8n",
    "Docker"
  ],

  IA: [
    "API da Groq"
  ],

  Integrações: [
    "Bot Telegram",
    "Google Calendar"
  ]
},

  links: [
    {
      label: "Github",
      url: "https://github.com/willqos15/Automacao_de_agendamento_com_ia"
    }
  ],

  technical: [
    "A IA foi utilizada para interpretar mensagens livres, reduzindo o atrito de uso ao eliminar formulários, além acessibilidade no suporte a áudio. Focado em ser uma solução de baixo custo o Telegram foi escolhido junto do n8n, por sua capacidade e fácil integração ao Google Calendar."
  ],

  result:
    "A solução reduziu significativamente o tempo operacional dos atendentes ao automatizar o agendamento e centralizar a gestão em um único sistema. Isso aumentou a previsibilidade, organização e controle dos atendimentos, além de melhorar a experiência do usuário final.",

  images: [
    "https://res.cloudinary.com/drklvmtqp/image/upload/v1770052142/Captura_de_tela_2026-02-02_124218_sovakj.png",

    "https://res.cloudinary.com/drklvmtqp/image/upload/v1770052143/Captura_de_tela_2026-02-02_130843_kxp4ul.png",

    "https://res.cloudinary.com/drklvmtqp/image/upload/v1770052143/Captura_de_tela_2026-02-02_130902_rxa1tr.png",

    "https://res.cloudinary.com/drklvmtqp/image/upload/v1770052142/Captura_de_tela_2026-02-02_131015_z3bivm.png",

    "https://res.cloudinary.com/drklvmtqp/image/upload/v1770052143/Captura_de_tela_2026-02-02_131032_mqgoet.png"
  ]
},
];