import { Service, TeamMember, ContactInfo, HomeContent, BlogPost } from './types';

export const services: Service[] = [
  {
    id: 'individual',
    title: 'Terapia Individual',
    shortDescription: 'Um espaço seguro para explorar as suas emoções e desafios pessoais.',
    fullDescription: 'A terapia individual é um processo colaborativo entre terapeuta e cliente, focado no autoconhecimento e na resolução de conflitos internos. Num ambiente confidencial, trabalhamos para compreender padrões de pensamento e comportamento.',
    benefits: ['Maior autoconhecimento', 'Gestão da ansiedade e stress', 'Melhoria da autoestima'],
    recommendedFor: ['Adultos', 'Jovens adultos'],
    iconName: 'User'
  },
  {
    id: 'casal',
    title: 'Terapia de Casal',
    shortDescription: 'Um espaço para explorar a relação a dois e os seus padrões de encontro e desencontro.',
    fullDescription: 'A terapia de casal centra-se na relação e nas dinâmicas que se constroem entre os dois. O trabalho passa por compreender os padrões de interação, criando espaço para novas formas de diálogo e contacto. Aberta a casais de todas as orientações sexuais e identidades de género.',
    benefits: ['Resolução de conflitos', 'Melhoria da intimidade', 'Comunicação assertiva'],
    recommendedFor: ['Casais em crise', 'Casais que desejam fortalecer a relação'],
    iconName: 'Users'
  },
  {
    id: 'infanto-juvenil',
    title: 'Terapia Infantojuvenil',
    shortDescription: 'Acompanhamento psicológico para crianças e adolescentes, ajustado a cada fase do desenvolvimento.',
    fullDescription: 'O trabalho com crianças e adolescentes adapta-se às diferentes fases do desenvolvimento, recorrendo a formas lúdicas de expressão quando relevante. Criamos espaço para que emoções, dificuldades e experiências possam ser expressas e pensadas, em articulação com o contexto familiar e escolar.',
    benefits: ['Gestão emocional', 'Melhoria do comportamento', 'Apoio em transições de vida'],
    recommendedFor: ['Crianças', 'Adolescentes'],
    iconName: 'Baby'
  },
  {
    id: 'avaliacao',
    title: 'Avaliação Psicológica',
    shortDescription: 'Compreensão aprofundada do funcionamento cognitivo e emocional.',
    fullDescription: 'A avaliação psicológica é um processo estruturado de recolha e integração de informação, através de entrevistas e instrumentos validados. Tem como objetivo compreender o funcionamento psicológico da pessoa avaliada e apoiar a definição de orientações clínicas adequadas.',
    benefits: ['Diagnóstico preciso', 'Relatórios detalhados', 'Orientação terapêutica'],
    recommendedFor: ['Todas as idades'],
    iconName: 'ClipboardList'
  },
  {
    id: 'cbt',
    title: 'Musicoterapia',
    shortDescription: 'A música é usada como espaço de encontro, expressão e escuta terapêutica',
    fullDescription: 'A musicoterapia é uma abordagem terapêutica que utiliza a música como meio de expressão, comunicação e relação. Através da escuta, da improvisação ou da criação sonora, criam-se condições para explorar emoções, experiências e formas de estar em contacto consigo e com os outros.',
    benefits: ['Eficácia comprovada', 'Foco em resultados', 'Ferramentas práticas'],
    recommendedFor: ['Adolescentes', 'Jovens Adultos', 'Adultos', 'Grupos'],
    iconName: 'Disc3'
  },
  {
    id: 'sistemica',
    title: 'Terapia Familiar / Sistémica',
    shortDescription: 'Um espaço para compreender as dinâmicas familiares.',
    fullDescription: 'A terapia familiar compreende as dificuldades como parte das dinâmicas relacionais em que cada pessoa se insere. O trabalho foca-se na família enquanto sistema vivo, explorando padrões de relação, posições e significados partilhados, para que novas formas de encontro possam emergir.',
    benefits: ['Visão integrada', 'Melhoria das relações familiares', 'Resolução de conflitos'],
    recommendedFor: ['Famílias'],
    iconName: 'Users'
  }
];

export const team: TeamMember[] = [
  {
    id: 'beatriz-aragao',
    name: 'Dra. Beatriz Aragão',
    role: 'Psicóloga Clínica',
    specializations: ['Terapia de Casal', 'Ansiedade', 'Luto'],
    approach: 'Terapia Focada nas Emoções',
    bio: 'A Beatriz acredita que a cura reside na conexão humana. Com mais de 10 anos de experiência, dedica-se a ajudar casais e indivíduos a reencontrarem o equilíbrio emocional através de uma abordagem calorosa e científica.',
    academic: ['Mestrado em Psicologia Clínica - FPUL', 'Especialização em Terapia de Casal'],
    image: 'https://picsum.photos/id/64/400/500',
    email: 'example@gmail.com',
    phone: '999 999 999'
  },
  {
    id: 'sara-bartolomeu',
    name: 'Dra. Sara Bartolomeu',
    role: 'Psicóloga Clínica',
    specializations: ['Ansiedade', 'Relacionamentos', 'Autoestima', 'Desenvolvimento Pessoal'],
    approach: 'Terapia Cognitivo-Comportamental e Integrativa',
    bio: 'A Sara é Psicóloga Clínica e autora do projeto "Pra semana à mesma hora".\n\nCom uma abordagem descomplicada e empática, dedica-se à intervenção com jovens adultos e adultos, criando um espaço seguro para explorar temas como a ansiedade, a gestão emocional, as relações e a construção da identidade. O seu objetivo é tornar a psicologia acessível e ajudar cada pessoa a encontrar a sua própria voz.',
    academic: ['Mestrado Integrado em Psicologia', 'Membro Efetivo da Ordem dos Psicólogos Portugueses'],
    image: 'https://picsum.photos/id/65/400/500',
    email: 'sbfbartolomeu@gmail.com',
    phone: '925 103 934',
    website: 'https://prasemanaamesmahora.pt/'
  },
  {
    id: 'miguel-soares',
    name: 'Dr. Miguel Soares',
    role: 'Psicólogo Clínico',
    specializations: ['Depressão', 'Burnout', 'Desenvolvimento Pessoal'],
    approach: 'Terapia Cognitivo-Comportamental (CBT)',
    bio: 'O Miguel combina uma postura prática com uma profunda empatia. Especialista em gestão de stress e ansiedade, ajuda profissionais a encontrarem um ritmo de vida mais sustentável e saudável.',
    academic: ['Mestrado em Psicologia Clínica e da Saúde', 'Membro Efetivo da OPP'],
    image: 'https://picsum.photos/id/91/400/500',
    email: 'example@gmail.com',
    phone: '999 999 999'
  },
  {
    id: 'tania-santos',
    name: 'Dra. Tânia Santos',
    role: 'Psicóloga Clínica',
    specializations: ['Trauma', 'Depressão', 'Burnout', 'Sexualidade'],
    approach: 'Sistémica, Psicodinâmica, Gestalt',
    bio: 'Com uma abordagem centrada na pessoa, a Tânia integra diversas ferramentas terapêuticas para adaptar o processo a cada indivíduo, promovendo aceitação e autonomia.',
    academic: ['Mestrado em Psicologia Clínica Sistémica Familiar e Comunitária (2012) - Faculdade de Psicologia da Universidade de Lisboa', 'Doutoramento em Psicologia (2022) - Instituto Universitário de Lisboa - Iscte-iul', 'Formação em Fundamentos em Psicoterapia pela Dança e Movimento (2024) - Faculdade de Psicologia da Universidade de Coimbra', 'Membro Efetivo da OPP'],
    image: 'https://picsum.photos/id/342/400/500',
    email: 'example@email.com',
    phone:'933 692 445'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'ansiedade-moderna',
    title: 'Ansiedade: O alarme necessário ou o ruído constante?',
    excerpt: 'Compreender a função biológica da ansiedade é o primeiro passo para a gerir. Descubra quando o sistema de alerta se torna num obstáculo.',
    content: `
      <p>A ansiedade é frequentemente vilanizada na nossa sociedade. Procuramos eliminá-la, silenciá-la e escondê-la. No entanto, biologicamente, a ansiedade é uma das ferramentas mais sofisticadas de sobrevivência que possuímos.</p>
      
      <h3>A Função do Alarme</h3>
      <p>Imagine a ansiedade como um alarme de incêndio. O seu propósito é detetar fumo e alertá-lo para o perigo, permitindo-lhe agir. Numa situação de perigo real, este mecanismo salva vidas.</p>
      
      <p>O problema surge quando o alarme está "descalibrado". Começa a tocar não apenas quando há um incêndio, mas quando acendemos uma vela, quando cozinhamos, ou até mesmo aleatoriamente durante a noite. É aqui que a ansiedade deixa de ser funcional e passa a ser patológica.</p>

      <h3>Estratégias de Regulação</h3>
      <p>Na terapia, não procuramos "desligar" o sistema, mas sim recalibrá-lo. Algumas estratégias iniciais incluem:</p>
      <ul>
        <li><strong>Respiração Diafragmática:</strong> Sinaliza ao sistema nervoso parassimpático que está seguro.</li>
        <li><strong>Nomear a Emoção:</strong> "Eu estou a sentir ansiedade" em vez de "Eu sou ansioso".</li>
        <li><strong>Questionamento Socrático:</strong> Validar se o perigo percebido é real ou imaginado.</li>
      </ul>
      
      <p>Se sente que o seu alarme está a tocar demasiado alto e com demasiada frequência, procurar ajuda profissional pode ser o passo decisivo para recuperar a tranquilidade.</p>
    `,
    date: '15 Março 2024',
    authorId: 'miguel-soares',
    category: 'Saúde Mental',
    image: 'https://picsum.photos/id/19/800/600',
    readTime: '4 min'
  },
  {
    id: 'comunicacao-casal',
    title: '3 Mitos sobre a Terapia de Casal',
    excerpt: 'Muitos casais procuram ajuda apenas como último recurso. Desmistificamos as ideias erradas que impedem relações de prosperar.',
    content: `
      <p>Existe um estigma persistente de que a terapia de casal é o "início do fim". Na realidade, é frequentemente o início de uma nova e mais profunda fase da relação.</p>

      <h3>Mito 1: O terapeuta vai decidir quem tem razão</h3>
      <p>O terapeuta não é um juiz. O nosso "cliente" não é o marido ou a esposa, mas sim a Relação. O objetivo não é encontrar culpados, mas identificar os padrões (a "dança") em que o casal fica preso.</p>

      <h3>Mito 2: Só devemos ir quando já não nos falamos</h3>
      <p>Ir à terapia apenas quando o divórcio está iminente é como ir ao dentista apenas quando o dente cai. A terapia preventiva é incrivelmente eficaz para fornecer ferramentas de comunicação antes que o ressentimento se instale.</p>

      <h3>Mito 3: A terapia vai mudar a personalidade do meu parceiro</h3>
      <p>Ninguém muda ninguém. A terapia cria um espaço seguro onde cada um pode compreender o impacto das suas ações no outro, fomentando a empatia necessária para a mudança voluntária.</p>
    `,
    date: '02 Março 2024',
    authorId: 'beatriz-aragao',
    category: 'Relacionamentos',
    image: 'https://picsum.photos/id/338/800/600',
    readTime: '3 min'
  },
  {
    id: 'burnout-sinais',
    title: 'Burnout: Não é apenas cansaço',
    excerpt: 'O esgotamento profissional é um estado de exaustão emocional, física e mental causado por stress excessivo e prolongado.',
    content: `
      <p>Vivemos numa cultura de "hustle", onde a exaustão é muitas vezes usada como medalha de honra. Contudo, o Burnout é uma condição séria reconhecida pela OMS.</p>
      
      <h3>Os 3 Pilares do Burnout</h3>
      <p>O burnout manifesta-se tipicamente através de três dimensões:</p>
      <ol>
        <li><strong>Exaustão:</strong> Sentir-se drenado, sem energia para enfrentar o dia.</li>
        <li><strong>Cinismo ou Despersonalização:</strong> Começar a sentir-se negativo, insensível ou desligado do trabalho e das pessoas.</li>
        <li><strong>Ineficácia:</strong> Sentimento de que nada do que faz importa ou tem qualidade.</li>
      </ol>

      <p>A recuperação do Burnout exige mais do que "tirar férias". Exige uma reestruturação da relação com o trabalho, o estabelecimento de limites claros e, frequentemente, um trabalho profundo sobre a autoestima e a necessidade de validação externa.</p>
    `,
    date: '20 Fevereiro 2024',
    authorId: 'sara-bartolomeu',
    category: 'Bem-estar',
    image: 'https://picsum.photos/id/180/800/600',
    readTime: '5 min'
  }
];

export const contactInfo: ContactInfo = {
  address: 'Edificio Capitólio, Rua Formosa, 50, 1º EF, 3500-134, Viseu',
  phone: 'Ana Beatriz Aragão: +351 ... / Miguel Soares: +351 ... / Sara Bartolomeu: +351 925 103 934 / Tânia Santos: +351 933 692 445',
  email: 'psicologia1oandar@gmail.com',
  hours: ['Segunda a Sábado: 09:00 - 22:00']
};

export const homeContent: HomeContent = {
  hero: {
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    avatars: [
      'https://picsum.photos/id/64/100/100',
      'https://picsum.photos/id/65/100/100',
      'https://picsum.photos/id/91/100/100',
      'https://picsum.photos/id/342/100/100'
    ]
  }
};
