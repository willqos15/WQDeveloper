export const projects = [
  {
    id: "apata",

    title: "Plataforma de Adoção Animal",

    cover:
      "https://res.cloudinary.com/drklvmtqp/image/upload/q_auto/f_auto/v1775830396/Captura_de_tela_2026-04-10_110906_ueprqh.png",

    summary:
      "Liderei e atuei na análise de requisitos, desenvolvimento FullStack e deploy para uma associação de Proteção dos Animais. O projeto resolveu a baixa visibilidade da adoção e a dificuldade no gerenciamento dos animais.",

    technologies: {
  Frontend: [
    "React",
    "JavaScript",
    "Tailwind",
    "React Hook Form"
  ],

  Backend: [
    "Node.js",
    "Express",
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
        label: "Backend Github",
        url: "https://github.com/Canoa-Tech/Apata-Backend"
      },
      {
        label: "Frontend Github",
        url: "https://github.com/willqos15/Apata-Frontend"
      },
      {
        label: "Site do Projeto",
        url: "https://apataatm.vercel.app/"
      }
    ],

    technical: [
      "No frontend, priorizei uma experiência intuitiva, garantindo facilidade de uso para equipe voluntária do gerenciamento dos animais. Adotei React pela componentização e controle de estado. O TanStack Query foi utilizado para otimizar o consumo, performance e a sincronização de dados da API, reduzindo inconsistências.",

      "O backend desenvolvido em colaboração com Fernando Macedo com Node.js e Prisma, a estrutura foi pensada para garantir escalabilidade e organização dos dados. A autenticação com JWT (Bearer Token) em um modelo stateless reduziu a complexidade de sessão e facilitou a integração com o frontend."
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
  id: "squad-scheduling",

  title: "Plataforma de Sistema de Agendamentos",

  cover:
    "https://res.cloudinary.com/drklvmtqp/image/upload/v1782243503/Captura_de_tela_2026-06-23_150933_zodur8.png",

  summary:
    "Projeto full stack em equipe voltado à gestão de clínicas e consultórios, com foco em organização de agendamentos. Atuei no desenvolvimento Front-end definição de tarefas e alinhamento do fluxo do projeto durante as reuniões do time.",

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

  title: "EdTech - Dinâmicas para Educadores",

  cover:
    "https://res.cloudinary.com/drklvmtqp/image/upload/v1768502489/Captura_de_tela_2026-01-15_153600_gs2kk2.png",

  summary:
    "Atuei na análise de requisitos e desenvolvimento de uma aplicação para solucionar o baixo engajamento escolar, utilizando mecânicas de equipe e jogos, além de gerar relatórios para acompanhamento do professor.",
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
    "Frontend: A aplicação foi componentizada com React para garantir a personalização dos conteúdos sem quebrar a mecânica do jogo. O uso de TypeScript reduziu erros e aumentou a confiabilidade durante o desenvolvimento.",

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
  id: "avabot",

  title: "AvaBot - PetFeliz",

  cover:
    "https://res.cloudinary.com/drklvmtqp/image/upload/v1767753617/Captura_de_tela_2026-01-06_222925_sszory.png",

  summary:
    "Chatbot com IA desenvolvido para resolver a falta de coleta de feedbacks em pequenas empresas após atendimentos. A solução automatiza o registro e a organização das respostas, facilitando a análise do negócio.",
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
    "Gerencia agendamentos de forma eficiente e acessível, eliminando processos manuais ao permitir que usuários realizem marcações por mensagem de texto ou áudio.",

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