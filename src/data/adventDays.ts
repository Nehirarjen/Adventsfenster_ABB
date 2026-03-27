export interface DayContent {
  title: string;
  quote: string;
  theme: string;
  backgroundColor: string;
  accentColor: string;
  emoji: string;
  quiz: Quiz | null;
  fact: string;
}

export interface Quiz {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface AdventDayData {
  [key: number]: DayContent;
}

export const adventDays: AdventDayData = {
  1: {
    title: 'Willkommen im Advent',
    quote: 'Jeder Tag ist ein neues Geschenk.',
    theme: 'winter-night',
    backgroundColor: '#1a1a2e',
    accentColor: '#e94560',
    emoji: '🎁',
    fact: 'Der Adventskranz wurde 1839 in Hamburg erfunden.',
    quiz: {
      question: 'Wann beginnt die Adventszeit?',
      options: ['1. Dezember', 'Am ersten Advent', 'Am 24. Dezember', 'Am 1. November'],
      correctIndex: 1,
      explanation: 'Die Adventszeit beginnt am vierten Sonntag vor Weihnachten.'
    }
  },
  2: {
    title: 'Wissensdurst',
    quote: 'Bildung ist das grösste Geschenk.',
    theme: 'gold',
    backgroundColor: '#2d1b4e',
    accentColor: '#ffd700',
    emoji: '📚',
    fact: 'Lernen ist ein lebenslanger Prozess.',
    quiz: {
      question: 'Was bedeutet lebenslanges Lernen?',
      options: ['Nur in der Schule lernen', 'Kontinuierliches Lernen', 'Am Ende lernen', 'Nichts lernen'],
      correctIndex: 1,
      explanation: 'Lebenslanges Lernen bedeutet, ein Leben lang neues Wissen zu erwerben.'
    }
  },
  3: {
    title: 'Elektrisierende Ideen',
    quote: 'Strom ist die Lebensader der modernen Welt.',
    theme: 'electric',
    backgroundColor: '#0f3460',
    accentColor: '#00d9ff',
    emoji: '⚡',
    fact: 'Elektrizität wurde erst im 18. Jahrhundert verstanden.',
    quiz: {
      question: 'Wer erfand die Batterie?',
      options: ['Tesla', 'Edison', 'Volta', 'Einstein'],
      correctIndex: 2,
      explanation: 'Alessandro Volta erfand 1800 die erste Batterie.'
    }
  },
  4: {
    title: 'Code & Gemütlichkeit',
    quote: 'Guter Code ist Kunst und Handwerk.',
    theme: 'purple',
    backgroundColor: '#1a1a2e',
    accentColor: '#a855f7',
    emoji: '💻',
    fact: 'Die erste Programmiersprache wurde 1950 erfunden.',
    quiz: {
      question: 'Welche Sprache ist die älteste?',
      options: ['Python', 'JavaScript', 'FORTRAN', 'C++'],
      correctIndex: 2,
      explanation: 'FORTRAN (1957) ist eine der ältesten Hochsprachen.'
    }
  },
  5: {
    title: 'Energie & Wärme',
    quote: 'Die beste Energie ist die, die wir sparen.',
    theme: 'green',
    backgroundColor: '#0d1f22',
    accentColor: '#10b981',
    emoji: '🌱',
    fact: 'Erneuerbare Energien wachsen jährlich um 5%.',
    quiz: {
      question: 'Was ist Solarenergie?',
      options: ['Energie von der Sonne', 'Energie aus Kohle', 'Atomenergie', 'Windenergie'],
      correctIndex: 0,
      explanation: 'Solarenergie nutzt die Kraft der Sonne zur Stromerzeugung.'
    }
  },
  6: {
    title: 'Systeme verbinden',
    quote: 'Netzwerke verbinden Menschen und Maschinen.',
    theme: 'cyber',
    backgroundColor: '#0a0a1a',
    accentColor: '#06b6d4',
    emoji: '🔗',
    fact: 'Das Internet verbindet Milliarden von Geräten.',
    quiz: {
      question: 'Was bedeutet IoT?',
      options: ['Internet of Things', 'Internal Office Tech', 'Integration of Time', 'Infinite Online Tasks'],
      correctIndex: 0,
      explanation: 'IoT steht für Internet of Things - vernetzte Geräte.'
    }
  },
  7: {
    title: 'Maschinen & More',
    quote: 'Präzision schafft Perfektion.',
    theme: 'steel',
    backgroundColor: '#1f2937',
    accentColor: '#94a3b8',
    emoji: '⚙️',
    fact: 'CNC-Maschinen arbeiten mit Mikrometer-Präzision.',
    quiz: {
      question: 'Was ist CNC?',
      options: ['Computer Numeric Control', 'Central Network Control', 'Creative New Code', 'Complex Network Computing'],
      correctIndex: 0,
      explanation: 'CNC steht für Computerized Numerical Control.'
    }
  },
  8: {
    title: 'Automation & Flow',
    quote: 'Automation macht das Unmögliche möglich.',
    theme: 'blue',
    backgroundColor: '#0c4a6e',
    accentColor: '#38bdf8',
    emoji: '🤖',
    fact: 'Industrieroboter arbeiten 24/7 ohne Pause.',
    quiz: {
      question: 'Was automatisiert einen Produktionsprozess?',
      options: ['Menschen', 'Roboter und Software', 'Nur Maschinen', 'Handarbeit'],
      correctIndex: 1,
      explanation: 'Roboter und Software automatisieren industrielle Prozesse.'
    }
  },
  9: {
    title: 'Building the Future',
    quote: 'Intelligente Gebäude denken mit.',
    theme: 'teal',
    backgroundColor: '#134e4a',
    accentColor: '#5eead4',
    emoji: '🏢',
    fact: 'Smart Buildings sparen bis zu 40% Energie.',
    quiz: {
      question: 'Was macht ein Gebäude smart?',
      options: ['Es ist neu', 'Automatisierte Steuerungssysteme', 'Es hat WLAN', 'Es ist gross'],
      correctIndex: 1,
      explanation: 'Smart Buildings nutzen IoT für Optimierung.'
    }
  },
  10: {
    title: 'Digital Wisdom',
    quote: 'Daten sind das neue Gold.',
    theme: 'amber',
    backgroundColor: '#1c1917',
    accentColor: '#f59e0b',
    emoji: '💡',
    fact: 'Täglich werden 2.5 Trillionen Bytes Daten erzeugt.',
    quiz: {
      question: 'Was ist Big Data?',
      options: ['Ein grosses Fest', 'Menge zu gross für traditionelle Verarbeitung', 'Ein Programm', 'Eine Cloud'],
      correctIndex: 1,
      explanation: 'Big Data sind extrem grosse Datenmengen.'
    }
  },
  11: {
    title: 'Safety First',
    quote: 'Sicherheit kennt keine Kompromisse.',
    theme: 'red',
    backgroundColor: '#1f1f1f',
    accentColor: '#ef4444',
    emoji: '🛡️',
    fact: 'Sicherheitsvorschriften retten täglich Leben.',
    quiz: {
      question: 'Was ist die erste Regel bei Elektrounfällen?',
      options: ['Hilfe rufen', 'Stromquelle unterbrechen', 'Anfassen', 'Wasser nutzen'],
      correctIndex: 1,
      explanation: 'Zuerst den Stromkreis unterbrechen!'
    }
  },
  12: {
    title: 'Netzqualität',
    quote: 'Stabilität ist die Basis des Erfolgs.',
    theme: 'wave',
    backgroundColor: '#0f172a',
    accentColor: '#38bdf8',
    emoji: '🔌',
    fact: 'Netzfrequenz in Europa: 50 Hz.',
    quiz: {
      question: 'Was misst die Netzqualität?',
      options: ['Farbe', 'Spannung und Frequenz', 'Temperatur', 'Lautstärke'],
      correctIndex: 1,
      explanation: 'Netzqualität misst elektrische Parameter.'
    }
  },
  13: {
    title: 'Business Engineering',
    quote: 'Technik und Wirtschaft - vereint.',
    theme: 'navy',
    backgroundColor: '#0f172a',
    accentColor: '#818cf8',
    emoji: '📊',
    fact: 'Business Engineers kombinieren drei Disziplinen.',
    quiz: {
      question: 'Was kombiniert Business Engineering?',
      options: ['Nur Wirtschaft', 'Wirtschaft, IT, Ingenieurwesen', 'Nur Technik', 'Nur Informatik'],
      correctIndex: 1,
      explanation: 'BE vereint Wirtschaft, IT und Ingenieurwesen.'
    }
  },
  14: {
    title: 'Software Excellence',
    quote: 'Qualität sieht man im Code.',
    theme: 'violet',
    backgroundColor: '#18181b',
    accentColor: '#a78bfa',
    emoji: '✨',
    fact: 'Guter Code ist selbstdokumentierend.',
    quiz: {
      question: 'Was ist Clean Code?',
      options: ['Sauberer Code', 'Lesbarer, wartbarer Code', 'Anonymer Code', 'Verschlüsselter Code'],
      correctIndex: 1,
      explanation: 'Clean Code ist klar und wartbar.'
    }
  },
  15: {
    title: 'Prozess Power',
    quote: 'Effizienz durch流程.',
    theme: 'emerald',
    backgroundColor: '#022c22',
    accentColor: '#34d399',
    emoji: '📈',
    fact: 'Prozessoptimierung spart Zeit und Geld.',
    quiz: {
      question: 'Was ist Prozessoptimierung?',
      options: ['Prozesse löschen', 'Verbesserung von Abläufen', 'Prozesse verlangsamen', 'Prozesse verteuern'],
      correctIndex: 1,
      explanation: 'Optimierung macht Prozesse effizienter.'
    }
  },
  16: {
    title: 'System Thinking',
    quote: 'Das Ganze ist mehr als die Summe.',
    theme: 'slate',
    backgroundColor: '#1e293b',
    accentColor: '#cbd5e1',
    emoji: '🧠',
    fact: 'Systemdenken löst komplexe Probleme.',
    quiz: {
      question: 'Was ist ein System?',
      options: ['Ein einzelnes Teil', 'Zusammenhängende Komponenten', 'Ein Programm', 'Ein Computer'],
      correctIndex: 1,
      explanation: 'Ein System besteht aus interagierenden Teilen.'
    }
  },
  17: {
    title: 'Cyber Security',
    quote: 'Im digitalen Raum ist Wachsamkeit Pflicht.',
    theme: 'dark',
    backgroundColor: '#0a0a0a',
    accentColor: '#f43f5e',
    emoji: '🔒',
    fact: 'Cyberangriffe werden täglich raffinierter.',
    quiz: {
      question: 'Was ist Phishing?',
      options: ['Angeln', 'Social Engineering Angriff', 'Computervirus', 'Firewall'],
      correctIndex: 1,
      explanation: 'Phishing täuscht Benutzer zur Datenpreisgabe.'
    }
  },
  18: {
    title: 'Cloud Computing',
    quote: 'Die Cloud ist der Computer anderer.',
    theme: 'sky',
    backgroundColor: '#0c4a6e',
    accentColor: '#7dd3fc',
    emoji: '☁️',
    fact: 'Cloud-Dienste wachsen exponentiell.',
    quiz: {
      question: 'Was bietet Cloud Computing?',
      options: ['Wetter', 'IT-Ressourcen on-demand', 'Lokale Server', 'Physische Hardware'],
      correctIndex: 1,
      explanation: 'Cloud bietet skalierbare IT-Services.'
    }
  },
  19: {
    title: 'Data Science',
    quote: 'Aus Daten werden Erkenntnisse.',
    theme: 'pink',
    backgroundColor: '#1f1026',
    accentColor: '#f472b6',
    emoji: '📉',
    fact: 'Data Science verändert alle Branchen.',
    quiz: {
      question: 'Was ist Machine Learning?',
      options: ['Maschinen lernen lesen', 'Algorithmen lernen aus Daten', 'Roboter bauen', 'Daten speichern'],
      correctIndex: 1,
      explanation: 'ML ermöglicht Computern aus Daten zu lernen.'
    }
  },
  20: {
    title: 'Energie der Zukunft',
    quote: 'Die Zukunft ist erneuerbar.',
    theme: 'solar',
    backgroundColor: '#1c1917',
    accentColor: '#fbbf24',
    emoji: '🌞',
    fact: 'Die Schweiz will bis 2050 CO2-neutral sein.',
    quiz: {
      question: 'Was ist erneuerbare Energie?',
      options: ['Kohle', 'Sonne und Wind', 'Erdgas', 'Öl'],
      correctIndex: 1,
      explanation: 'Erneuerbare Energien sind unerschöpflich.'
    }
  },
  21: {
    title: 'Qualität sichern',
    quote: 'Qualität ist kein Zufall.',
    theme: 'blue-gray',
    backgroundColor: '#1e293b',
    accentColor: '#60a5fa',
    emoji: '✅',
    fact: 'ISO 9001 ist der bekannteste Qualitätsstandard.',
    quiz: {
      question: 'Was bedeutet ISO?',
      options: ['International Standards Organization', 'International Organization for Standardization', 'Information System Office', 'Industry Standards Office'],
      correctIndex: 1,
      explanation: 'ISO = International Organization for Standardization.'
    }
  },
  22: {
    title: 'Projektmanagement',
    quote: 'Erfolg beginnt mit Planung.',
    theme: 'indigo',
    backgroundColor: '#1e1b4b',
    accentColor: '#818cf8',
    emoji: '📋',
    fact: 'Projekte mit Plan haben 3x höhere Erfolgsrate.',
    quiz: {
      question: 'Was ist ein Meilenstein?',
      options: ['Ein Stein', 'Wichtiger Zwischenschritt', 'Das Ende', 'Der Start'],
      correctIndex: 1,
      explanation: 'Meilensteine markieren wichtige Ergebnisse.'
    }
  },
  23: {
    title: 'Vorweihnachtlicher Zauber',
    quote: 'Die schönsten Momente kommen noch.',
    theme: 'warm',
    backgroundColor: '#1f1418',
    accentColor: '#fb923c',
    emoji: '🎄',
    fact: 'Weihnachten verbindet Tradition und Familie.',
    quiz: {
      question: 'Wann ist Heiligabend?',
      options: ['25. Dezember', '24. Dezember', '31. Dezember', '1. Dezember'],
      correctIndex: 1,
      explanation: 'Heiligabend ist am 24. Dezember.'
    }
  },
  24: {
    title: 'Weihnachten',
    quote: 'Weihnachten ist nicht nur ein Tag - es ist ein Gefühl.',
    theme: 'christmas',
    backgroundColor: '#0f1f0f',
    accentColor: '#fbbf24',
    emoji: '🎅',
    fact: 'Ein magischer Tag voller Freude und Familie.',
    quiz: {
      question: 'Was symbolisiert der Weihnachtsbaum?',
      options: ['Technik', 'Leben und Hoffnung', 'Wirtschaft', 'Wissenschaft'],
      correctIndex: 1,
      explanation: 'Der Baum symbolisiert ewiges Leben.'
    }
  }
};

export const getThemeBackground = (day: number): string => {
  const data = adventDays[day] || adventDays[1];
  return data.backgroundColor;
};

export const getThemeAccent = (day: number): string => {
  const data = adventDays[day] || adventDays[1];
  return data.accentColor;
};
