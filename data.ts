import { Service, TeamMember, ContactInfo, HomeContent, BlogPost } from './types';

export const services: Record<'pt' | 'en', Service[]> = {
  pt: [
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
  ],
  en: [
    {
      id: 'individual',
      title: 'Individual Therapy',
      shortDescription: 'A safe space to explore your emotions and personal challenges.',
      fullDescription: 'Individual therapy is a collaborative process between therapist and client, focused on self-knowledge and resolving internal conflicts. In a confidential environment, we work to understand patterns of thought and behavior.',
      benefits: ['Greater self-knowledge', 'Anxiety and stress management', 'Improved self-esteem'],
      recommendedFor: ['Adults', 'Young adults'],
      iconName: 'User'
    },
    {
      id: 'casal',
      title: 'Couples Therapy',
      shortDescription: 'A space to explore relationships and their patterns of connection and disconnection.',
      fullDescription: 'Couples therapy focuses on the relationship and the dynamics built between the two. The work involves understanding interaction patterns, creating space for new forms of dialogue and contact. Open to couples of all sexual orientations and gender identities.',
      benefits: ['Conflict resolution', 'Improved intimacy', 'Assertive communication'],
      recommendedFor: ['Couples in crisis', 'Couples wishing to strengthen their relationship'],
      iconName: 'Users'
    },
    {
      id: 'infanto-juvenil',
      title: 'Child and Adolescent Therapy',
      shortDescription: 'Psychological support for children and adolescents, adjusted to each development stage.',
      fullDescription: 'Work with children and adolescents adapts to different development stages, using playful forms of expression when relevant. We create space for emotions, difficulties, and experiences to be expressed and thought through, in articulation with family and school contexts.',
      benefits: ['Emotional management', 'Improved behavior', 'Support in life transitions'],
      recommendedFor: ['Children', 'Adolescents'],
      iconName: 'Baby'
    },
    {
      id: 'avaliacao',
      title: 'Psychological Assessment',
      shortDescription: 'Indepth understanding of cognitive and emotional functioning.',
      fullDescription: 'Psychological assessment is a structured process of collecting and integrating information through interviews and validated instruments. It aims to understand the assessed person\'s psychological functioning and support appropriate clinical guidelines.',
      benefits: ['Precise diagnosis', 'Detailed reports', 'Therapeutic guidance'],
      recommendedFor: ['All ages'],
      iconName: 'ClipboardList'
    },
    {
      id: 'cbt',
      title: 'Music Therapy',
      shortDescription: 'Music is used as a space for meeting, expression, and therapeutic listening.',
      fullDescription: 'Music therapy is a therapeutic approach that uses music as a means of expression, communication, and relationship. Through listening, improvisation, or sound creation, conditions are created to explore emotions, experiences, and ways of being in contact with oneself and others.',
      benefits: ['Proven effectiveness', 'Focus on results', 'Practical tools'],
      recommendedFor: ['Adolescents', 'Young Adults', 'Adults', 'Groups'],
      iconName: 'Disc3'
    },
    {
      id: 'sistemica',
      title: 'Family / Systemic Therapy',
      shortDescription: 'A space to understand family dynamics.',
      fullDescription: 'Family therapy understands difficulties as part of the relational dynamics in which each person is inserted. Work focuses on the family as a living system, exploring patterns of relationship, positions, and shared meanings, so new forms of connection can emerge.',
      benefits: ['Integrated vision', 'Improved family relations', 'Conflict resolution'],
      recommendedFor: ['Families'],
      iconName: 'Users'
    }
  ]
};

export const team: Record<'pt' | 'en', TeamMember[]> = {
  pt: [
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
      image: '/images/sara_bartolomeu.jpeg',
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
      phone: '933 692 445'
    }
  ],
  en: [
    {
      id: 'beatriz-aragao',
      name: 'Dr. Beatriz Aragão',
      role: 'Clinical Psychologist',
      specializations: ['Couples Therapy', 'Anxiety', 'Grief'],
      approach: 'Emotion-Focused Therapy',
      bio: 'Beatriz believes that healing lies in human connection. With over 10 years of experience, she is dedicated to helping couples and individuals find emotional balance through a warm and scientific approach.',
      academic: ['Master\'s in Clinical Psychology - FPUL', 'Specialization in Couples Therapy'],
      image: 'https://picsum.photos/id/64/400/500',
      email: 'example@gmail.com',
      phone: '999 999 999'
    },
    {
      id: 'sara-bartolomeu',
      name: 'Dr. Sara Bartolomeu',
      role: 'Clinical Psychologist',
      specializations: ['Anxiety', 'Relationships', 'Self-esteem', 'Personal Development'],
      approach: 'Cognitive-Behavioral and Integrative Therapy',
      bio: 'Sara is a Clinical Psychologist and author of the project "Pra semana à mesma hora".\n\nWith a straightforward and empathetic approach, she focuses on working with young adults and adults, creating a safe space to explore topics such as anxiety, emotional management, relationships, and identity building. Her goal is to make psychology accessible and help each person find their own voice.',
      academic: ['Integrated Master\'s in Psychology', 'Full Member of the Order of Portuguese Psychologists'],
      image: '/images/sara_bartolomeu.jpeg',
      email: 'sbfbartolomeu@gmail.com',
      phone: '925 103 934',
      website: 'https://prasemanaamesmahora.pt/'
    },
    {
      id: 'miguel-soares',
      name: 'Dr. Miguel Soares',
      role: 'Clinical Psychologist',
      specializations: ['Depression', 'Burnout', 'Personal Development'],
      approach: 'Cognitive-Behavioral Therapy (CBT)',
      bio: 'Miguel combines a practical stance with deep empathy. A specialist in stress and anxiety management, he helps professionals find a more sustainable and healthy life pace.',
      academic: ['Master\'s in Clinical and Health Psychology', 'Full Member of the OPP'],
      image: 'https://picsum.photos/id/91/400/500',
      email: 'example@gmail.com',
      phone: '999 999 999'
    },
    {
      id: 'tania-santos',
      name: 'Dr. Tânia Santos',
      role: 'Clinical Psychologist',
      specializations: ['Trauma', 'Depression', 'Burnout', 'Sexuality'],
      approach: 'Systemic, Psychodynamic, Gestalt',
      bio: 'With a person-centered approach, Tânia integrates various therapeutic tools to adapt the process to each individual, promoting acceptance and autonomy.',
      academic: ['Master\'s in Systemic Family and Community Clinical Psychology (2012) - FPUL', 'PhD in Psychology (2022) - Iscte-iul', 'Training in Foundations in Dance and Movement Psychotherapy (2024) - FPUL', 'Full Member of the OPP'],
      image: 'https://picsum.photos/id/342/400/500',
      email: 'example@email.com',
      phone: '933 692 445'
    }
  ]
};

export const blogPosts: Record<'pt' | 'en', BlogPost[]> = {
  pt: [
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
  ],
  en: [
    {
      id: 'ansiedade-moderna',
      title: 'Anxiety: The necessary alarm or constant noise?',
      excerpt: 'Understanding the biological function of anxiety is the first step to managing it. Discover when the alert system becomes an obstacle.',
      content: `
        <p>Anxiety is often villainized in our society. We seek to eliminate, silence, and hide it. However, biologically, anxiety is one of the most sophisticated survival tools we possess.</p>
        
        <h3>The Alarm Function</h3>
        <p>Imagine anxiety as a fire alarm. Its purpose is to detect smoke and alert you to danger, allowing you to act. In a real danger situation, this mechanism saves lives.</p>
        
        <p>The problem arises when the alarm is "out of calibration". It starts ringing not only when there is a fire, but when we light a candle, when we cook, or even randomly during the night. It is here that anxiety stops being functional and becomes pathological.</p>
  
        <h3>Regulation Strategies</h3>
        <p>In therapy, we don't seek to "turn off" the system, but rather to recalibrate it. Some initial strategies include:</p>
        <ul>
          <li><strong>Diaphragmatic Breathing:</strong> Signals the parasympathetic nervous system that you are safe.</li>
          <li><strong>Naming the Emotion:</strong> "I am feeling anxiety" instead of "I am anxious".</li>
          <li><strong>Socratic Questioning:</strong> Validating if the perceived danger is real or imagined.</li>
        </ul>
        
        <p>If you feel your alarm is ringing too loud and too often, seeking professional help can be the decisive step to regain peace of mind.</p>
      `,
      date: 'March 15, 2024',
      authorId: 'miguel-soares',
      category: 'Mental Health',
      image: 'https://picsum.photos/id/19/800/600',
      readTime: '4 min'
    },
    {
      id: 'comunicacao-casal',
      title: '3 Myths about Couples Therapy',
      excerpt: 'Many couples seek help only as a last resort. We debunk the misconceptions that prevent relationships from thriving.',
      content: `
        <p>There is a persistent stigma that couples therapy is the "beginning of the end". In reality, it is often the beginning of a new and deeper phase of the relationship.</p>
  
        <h3>Myth 1: The therapist will decide who is right</h3>
        <p>The therapist is not a judge. Our "client" is not the husband or the wife, but the Relationship. The goal is not to find culprits, but to identify the patterns (the "dance") in which the couple gets stuck.</p>
  
        <h3>Myth 2: We should only go when we don't talk anymore</h3>
        <p>Going to therapy only when divorce is imminent is like going to the dentist only when the tooth falls out. Preventive therapy is incredibly effective for providing communication tools before resentment sets in.</p>
  
        <h3>Myth 3: Therapy will change my partner's personality</h3>
        <p>No one changes anyone. Therapy creates a safe space where each can understand the impact of their actions on the other, fostering the empathy necessary for voluntary change.</p>
      `,
      date: 'March 02, 2024',
      authorId: 'beatriz-aragao',
      category: 'Relationships',
      image: 'https://picsum.photos/id/338/800/600',
      readTime: '3 min'
    },
    {
      id: 'burnout-sinais',
      title: 'Burnout: It\'s not just tiredness',
      excerpt: 'Professional burnout is a state of emotional, physical, and mental exhaustion caused by excessive and prolonged stress.',
      content: `
        <p>We live in a "hustle" culture, where exhaustion is often worn as a badge of honor. However, Burnout is a serious condition recognized by the WHO.</p>
        
        <h3>The 3 Pillars of Burnout</h3>
        <p>Burnout typically manifests through three dimensions:</p>
        <ol>
          <li><strong>Exhaustion:</strong> Feeling drained, without energy to face the day.</li>
          <li><strong>Cynicism or Depersonalization:</strong> Starting to feel negative, insensitive or detached from work and people.</li>
          <li><strong>Inefficacy:</strong> A feeling that nothing you do matters or has quality.</li>
        </ol>
  
        <p>Burnout recovery requires more than "taking a vacation". It requires a restructuring of the relationship with work, setting clear boundaries, and often a deep work on self-esteem and the need for external validation.</p>
      `,
      date: 'February 20, 2024',
      authorId: 'sara-bartolomeu',
      category: 'Well-being',
      image: 'https://picsum.photos/id/180/800/600',
      readTime: '5 min'
    }
  ]
};

export const contactInfo: Record<'pt' | 'en', ContactInfo> = {
  pt: {
    address: 'Edificio Capitólio, Rua Formosa, 50, 1º EF, 3500-134, Viseu',
    phone: 'Ana Beatriz Aragão: +351 ... / Miguel Soares: +351 ... / Sara Bartolomeu: +351 925 103 934 / Tânia Santos: +351 933 692 445',
    email: 'psicologia1oandar@gmail.com',
    hours: ['Segunda a Sábado: 09:00 - 22:00']
  },
  en: {
    address: 'Edificio Capitólio, Rua Formosa, 50, 1º EF, 3500-134, Viseu',
    phone: 'Ana Beatriz Aragão: +351 ... / Miguel Soares: +351 ... / Sara Bartolomeu: +351 925 103 934 / Tânia Santos: +351 933 692 445',
    email: 'psicologia1oandar@gmail.com',
    hours: ['Monday to Saturday: 09:00 - 22:00']
  }
};

export const homeContent: Record<'pt' | 'en', HomeContent> = {
  pt: {
    hero: {
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
      avatars: [
        'https://picsum.photos/id/64/100/100',
        '/images/sara_bartolomeu.jpeg',
        'https://picsum.photos/id/91/100/100',
        'https://picsum.photos/id/342/100/100'
      ]
    }
  },
  en: {
    hero: {
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
      avatars: [
        'https://picsum.photos/id/64/100/100',
        '/images/sara_bartolomeu.jpeg',
        'https://picsum.photos/id/91/100/100',
        'https://picsum.photos/id/342/100/100'
      ]
    }
  }
};
