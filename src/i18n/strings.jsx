const strings = {
  en: {
    meta: {
      title: 'Nathan Adelmard — Portfolio',
      description:
        'Portfolio of Nathan Adelmard, engineering student at ENSC (Bordeaux): mobile apps, Wear OS watch faces and UI/UX design. Looking for a 6-month internship from February/March 2027.',
    },
    langSwitch: { label: 'Language', toOther: 'Passer le site en français' },
    nav: {
      label: 'Main navigation',
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      hello: "Hi, I'm",
      role: (
        <>
          Engineering student at <strong>ENSC</strong>, I design mobile apps, watch faces and
          interfaces, from prototype to finished product.
        </>
      ),
      availability: 'Looking for a 6-month internship starting February or March 2027',
      ctaProjects: 'View my projects',
      ctaContact: 'Contact me',
      scrollHint: 'Scroll to the About section',
    },
    about: {
      tag: 'About',
      title: 'Who am I?',
      p1: (
        <>
          My name is <strong>Nathan Adelmard</strong>, an engineering student at <strong>ENSC</strong>{' '}
          (École Nationale Supérieure de Cognitique) in Bordeaux. I'm passionate about mobile
          development, interface design, and crafting polished digital products, from an animated
          logo all the way to a full app.
        </>
      ),
      p2: 'I like to thoroughly understand a problem before solving it, bridging the gap between design and code to build the right solution.',
      resume: 'Download my resume',
      resumeLang: 'Resume language',
      contact: 'Contact me',
    },
    projects: {
      tag: 'Work',
      title: 'My Projects',
      intro: 'Click on a project to see the details, media, and links.',
      role: 'Role',
      problem: 'Problem',
      solution: 'Solution',
      highlights: 'Key highlights',
      source: 'Source code',
      showDetails: 'Show details',
      hideDetails: 'Hide details',
      featured: 'Featured',
      soon: 'Coming soon',
    },
    experience: { tag: 'Experience', title: 'Beyond the classroom' },
    contact: {
      tag: 'Contact',
      title: "Let's work together",
      text: "I'm looking for a 6-month internship starting February or March 2027 (mobile development, UI/UX, human-centered design). Feel free to reach out!",
      footer: 'Made with React & Vite.',
    },
  },

  fr: {
    meta: {
      title: 'Nathan Adelmard — Portfolio',
      description:
        "Portfolio de Nathan Adelmard, élève ingénieur à l'ENSC (Bordeaux) : applications mobiles, cadrans Wear OS et design UI/UX. Recherche un stage de 6 mois à partir de février/mars 2027.",
    },
    langSwitch: { label: 'Langue', toOther: 'Switch the site to English' },
    nav: {
      label: 'Navigation principale',
      home: 'Accueil',
      about: 'À propos',
      projects: 'Projets',
      experience: 'Expérience',
      contact: 'Contact',
    },
    hero: {
      hello: 'Bonjour, je suis',
      role: (
        <>
          Élève ingénieur à l'<strong>ENSC</strong>, je conçois des applications mobiles, des cadrans
          de montre et des interfaces, du prototype au produit fini.
        </>
      ),
      availability: 'Recherche un stage de 6 mois à partir de février ou mars 2027',
      ctaProjects: 'Voir mes projets',
      ctaContact: 'Me contacter',
      scrollHint: 'Aller à la section À propos',
    },
    about: {
      tag: 'À propos',
      title: 'Qui suis-je ?',
      p1: (
        <>
          Je m'appelle <strong>Nathan Adelmard</strong>, élève ingénieur à l'<strong>ENSC</strong>{' '}
          (École Nationale Supérieure de Cognitique) à Bordeaux. Je suis passionné par le
          développement mobile, le design d'interfaces et la création de produits numériques
          soignés, d'un logo animé jusqu'à une application complète.
        </>
      ),
      p2: "J'aime comprendre un problème en profondeur avant de le résoudre, en faisant le lien entre le design et le code pour construire la bonne solution.",
      resume: 'Télécharger mon CV',
      resumeLang: 'Langue du CV',
      contact: 'Me contacter',
    },
    projects: {
      tag: 'Réalisations',
      title: 'Mes projets',
      intro: 'Cliquez sur un projet pour voir les détails, les médias et les liens.',
      role: 'Rôle',
      problem: 'Problème',
      solution: 'Solution',
      highlights: 'Points clés',
      source: 'Code source',
      showDetails: 'Afficher les détails',
      hideDetails: 'Masquer les détails',
      featured: 'Favori',
      soon: 'Bientôt disponible',
    },
    experience: { tag: 'Expérience', title: 'Au-delà des cours' },
    contact: {
      tag: 'Contact',
      title: 'Travaillons ensemble',
      text: "Je recherche un stage de 6 mois à partir de février ou mars 2027 (développement mobile, UI/UX, conception centrée utilisateur). N'hésitez pas à me contacter !",
      footer: 'Réalisé avec React & Vite.',
    },
  },
}

export default strings
