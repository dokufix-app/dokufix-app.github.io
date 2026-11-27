/* Diagnose-Kompass: eigene Einträge (Entwurf, fachlich prüfen).
   ev: s = Studie, l = Leitlinie, e = Erfahrung/abgeleitet, u = nicht untersucht/unklar
   doku = Formulierung für den Kurztext. Alles ohne Wissenskarte stammt aus der Recherche vom 27.11.2026. */
window.DK_DATEN = [
  {
    id: 'K-M72.2-LED', icd: ['M72.2'], titel: 'Fibromatose der Plantarfaszie (Morbus Ledderhose)', kurzTitel: 'Morbus Ledderhose',
    dokuDiagnose: 'Fibromatose der Plantarfaszie (M. Ledderhose)', bereich: 'Fuß', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['ledderhose', 'plantare fibromatose', 'fibromatose plantarfaszie', 'knoten fusssohle'],
    untertitel: 'Gutartige Knoten in der Plantaraponeurose',
    icdHinweis: {
      titel: 'M72.2 heißt nicht immer Ledderhose',
      text: 'Im ICD-10-GM zählt auch die Fasciitis plantaris zu M72.2. Ledderhose: tastbarer, derber Knoten im Längsgewölbe. Plantarfasziitis: Anlaufschmerz am Fersenhöcker.',
      wechsel: [{ t: 'Ledderhose', art: 'kompass', id: 'K-M72.2-LED' }, { t: 'Plantarfasziitis', art: 'kompass', id: 'K-M72.2-PF' }]
    },
    abriss: [
      'Gutartige Fibromatose der Plantarfaszie mit langsam wachsenden, derben Knoten, meist im medialen Längsgewölbe; oft beidseitig, eng verwandt mit Dupuytren und Peyronie.',
      'Anfangs weich und schmerzlos, später hart und schmerzhaft beim Stehen, Gehen und barfuß. Betroffene entlasten dann die Fußmitte; Zehenkontrakturen sind selten.',
      'In der Anamnese nach Dupuytren und Peyronie fragen, dazu nach Diabetes, Leber, Alkohol und Antiepileptika.',
      'Zur Physiotherapie gibt es keine Studie, das Vorgehen ist abgeleitet. Ärztlich am besten belegt ist die niedrig dosierte Strahlentherapie (ein RCT).'
    ],
    ziele: [
      { t: 'Belastungsschmerz senken (NRS beim Gehen)', doku: 'Schmerzlinderung bei Belastung', an: true },
      { t: 'Beweglichkeit von OSG und MTP I erhalten', doku: 'Erhalt der Beweglichkeit OSG/MTP I', an: true },
      { t: 'Fuß- und Wadenmuskulatur kräftigen', doku: 'Kräftigung der Fuß- und Wadenmuskulatur', an: false },
      { t: 'Physiologisch abrollen, länger schmerzarm gehen und stehen', doku: 'physiologisches Abrollen', an: true },
      { t: 'Heimprogramm selbstständig, Schuh- und Einlagenberatung umgesetzt', doku: 'selbstständiges Heimprogramm', an: false }
    ],
    strang: {
      deton: [
        { t: 'Wade detonisieren', info: 'M. gastrocnemius, M. soleus', doku: 'Detonisierung der Wadenmuskulatur', ev: 'e', an: true },
        { t: 'Fußsohle um den Knoten herum', info: 'M. abductor hallucis, kurze Zehenflexoren, M. flexor hallucis longus; Knoten aussparen', doku: 'Weichteiltechniken der Fußsohle unter Aussparung des Knotens', ev: 'e', an: true },
        { t: 'M. tibialis posterior', info: 'medial am Unterschenkel', doku: 'Detonisierung M. tibialis posterior', ev: 'e', an: false }
      ],
      mobi: [
        { t: 'Großzehengrundgelenk (MTP I)', info: 'Extension erhalten, für das Abrollen', doku: 'Mobilisation MTP I', ev: 'e', an: true },
        { t: 'OSG und USG', info: 'Dorsalextension, Rückfuß', doku: 'Mobilisation OSG/USG', ev: 'e', an: false },
        { t: 'Chopart und Lisfranc', info: 'Mittelfuß', doku: 'Mobilisation Mittelfuß', ev: 'e', an: false }
      ],
      aktiv: [
        { t: 'Fußmuskulatur kräftigen', info: 'Short Foot, Zehenspreizen', doku: 'Kräftigung der Fußmuskulatur', ev: 'e', an: true },
        { t: 'Gangschulung', info: 'Abrollen über die Fußmitte statt Ferse und Vorfuß', doku: 'Gangschulung', ev: 'e', an: true },
        { t: 'Fersenheben und Gleichgewicht', info: 'nach Verträglichkeit', doku: 'Fersenheben und Gleichgewichtstraining', ev: 'e', an: false },
        { t: 'Wade und Plantarfaszie sanft dehnen', info: 'nur schmerzfrei; übernommen von der Plantarfasziitis', doku: 'schmerzfreie Dehnung von Wade und Plantarfaszie', ev: 'u', an: false }
      ],
      berat: [
        { t: 'Weiche Entlastungseinlage', info: 'Polster oder Aussparung unter dem Knoten; laut DEGRO erster Schritt', doku: 'Beratung zu weicher Entlastungseinlage mit Aussparung', ev: 'l', an: true },
        { t: 'Schuhe und Alltag', info: 'gedämpfte Sohle, barfuß auf hartem Boden und langes Stehen begrenzen', doku: 'Schuhberatung', ev: 'e', an: false },
        { t: 'Heimprogramm', info: 'Fußmuskulatur, Mobilisation, sanfte Dehnung', doku: 'Anleitung Heimprogramm', ev: 'e', an: false },
        { t: 'Bei Zunahme ärztlich vorstellen', info: 'Strahlentherapie ansprechen', doku: 'Empfehlung ärztlicher Vorstellung bei Zunahme', ev: 's', an: false }
      ]
    },
    vorsicht: [
      'Kein tiefer Druck, keine Querfriktion und keine Instrumente direkt auf dem Knoten (nicht untersucht, Vorsicht).',
      'Keine kräftige Dehnung von Zehen und OSG gleichzeitig: Über den Windlass-Mechanismus zieht das am stärksten an der Faszie (abgeleitet).',
      'Nicht automatisch das Programm der Plantarfasziitis abspulen.'
    ],
    warn: ['Schnelles Wachstum, Knoten über 3 cm, tiefe Fixierung oder Hautbeteiligung (Sarkom ausschließen); Kribbeln oder Nervenschmerz; deutlich zunehmende Beschwerden; Beugekontraktur über 30°.'],
    aerztlich: [
      'Strahlentherapie (DEGRO S2e 2022: 2 Serien à 5 × 3 Gy): im RCT LedRad weniger Schmerz nach 12 Monaten (NRS 2,5 gegen 3,6), auch kosteneffektiv.',
      'Stoßwelle: Fallserien, Ergebnisse widersprüchlich; DEGRO hält sie langfristig für unwirksam.',
      'Kortison- oder Verapamil-Injektion: nur Fallberichte, Knoten kleiner, Wirkung nicht dauerhaft.',
      'Operation nur bei Versagen: Rückfälle 27 bis 67 % je nach Ausmaß, oft Wundheilungsstörungen.'
    ],
    quellen: [
      { k: 'de Haan 2023', t: 'LedRad, RCT Strahlentherapie, Radiother Oncol, PMID 37211283' },
      { k: 'de Haan 2023', t: 'Gangbild und Druckverteilung, Foot (Edinb), PMID 36905795' },
      { k: 'DEGRO 2022', t: 'S2e Strahlentherapie gutartiger Erkrankungen, Version 3.0, Kap. 4.3.2' },
      { k: 'Fuiano 2019', t: 'Systematische Übersicht, Foot Ankle Surg, PMID 30321942' },
      { k: 'Anwander 2024', t: 'Rückfälle nach OP, Foot Ankle Spec, PMID 34369197' },
      { k: 'Young 2019', t: 'Diagnostik und Therapie, Orthop Res Rev, PMID 30774465' },
      { k: 'Mohede 2020', t: 'Häufigkeit bei Dupuytren, Plast Reconstr Surg, PMID 32221218' },
      { k: 'BfArM 2026', t: 'ICD-10-GM: M72.2 schließt die Fasciitis plantaris ein' }
    ]
  },
  {
    id: 'K-M72.2-PF', icd: ['M72.2'], karte: 'FU01', titel: 'Plantarfasziopathie (Plantarfasziitis, Fersensporn)', kurzTitel: 'Plantarfasziopathie',
    dokuDiagnose: 'Plantarfasziopathie', bereich: 'Fuß', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['plantarfasziitis', 'fasciitis plantaris', 'fersensporn', 'fersenschmerz'],
    untertitel: 'Inhalte aus der Wissenskarte FU01 (geprüft 22.11.2026), neu nach Vorgehen sortiert',
    icdHinweis: {
      titel: 'M72.2 heißt nicht immer Ledderhose',
      text: 'Im ICD-10-GM zählt auch die Fasciitis plantaris zu M72.2. Ledderhose: tastbarer, derber Knoten im Längsgewölbe. Plantarfasziitis: Anlaufschmerz am Fersenhöcker.',
      wechsel: [{ t: 'Ledderhose', art: 'kompass', id: 'K-M72.2-LED' }, { t: 'Plantarfasziitis', art: 'kompass', id: 'K-M72.2-PF' }]
    },
    abriss: [
      'Häufigster Fersenschmerz bei Erwachsenen (9,6 % ab 50), degenerativ und ohne Entzündung am Ursprung der Faszie.',
      'Typisch ist der Anlaufschmerz morgens und nach dem Sitzen, Druckschmerz am medialen Fersenhöcker.',
      'Fersensporn und Faszienstärke sagen nichts über die Prognose. Der Verlauf zieht sich oft über Monate bis Jahre.',
      'Kern: Aufklärung, Taping und Faszien-Dehnung; Hochlast-Fersenheben bringt einen schnelleren Start.'
    ],
    ziele: [
      { t: 'Erste Schritte morgens schmerzarm', doku: 'Reduktion des Anlaufschmerzes', an: true },
      { t: 'Stehen bei der Arbeit', doku: 'Verbesserung der Stehtoleranz', an: true },
      { t: 'Gehen und Laufen ohne Zunahme', doku: 'Steigerung der Gehstrecke', an: false },
      { t: 'Belastung selbst steuern', doku: 'Selbstmanagement der Belastung', an: false }
    ],
    strang: {
      deton: [
        { t: 'Wade detonisieren', info: 'M. gastrocnemius und M. soleus', doku: 'Detonisierung der Wadenmuskulatur', ev: 'e', an: true },
        { t: 'Fußsohle', info: 'Weichteiltechnik am Längsgewölbe', doku: 'Weichteiltechniken der Fußsohle', ev: 'e', an: false }
      ],
      mobi: [
        { t: 'Plantarfaszien-Dehnung', info: 'vor dem Aufstehen, Zehen zurückziehen, 10 × 10 s', doku: 'Dehnung der Plantarfaszie', ev: 's', an: true },
        { t: 'Wade dehnen', info: '3 × 30 s', doku: 'Wadendehnung', ev: 's', an: false },
        { t: 'OSG Dorsalextension', info: 'Knie-zur-Wand als Verlaufswert', doku: 'Mobilisation OSG', ev: 'e', an: false }
      ],
      aktiv: [
        { t: 'Hochlast-Fersenheben (Rathleff)', info: 'einbeinig, Handtuch unter den Zehen, jeden 2. Tag', doku: 'Hochlast-Fersenheben', ev: 's', an: true },
        { t: 'Fußmuskulatur', info: 'Short Foot, Zehenspreizen', doku: 'Kräftigung der Fußmuskulatur', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Aufklärung und Belastungssteuerung', info: 'Verlauf, Schuhe, Stehzeiten', doku: 'Aufklärung zur Belastungssteuerung', ev: 's', an: true },
        { t: 'Low-Dye-Tape', info: 'bei starkem Anlaufschmerz', doku: 'Low-Dye-Tape', ev: 's', an: true },
        { t: 'Fersenkissen oder konfektionierte Einlage', info: 'Maßeinlage ist nicht besser', doku: 'Beratung Fersenkissen/Einlage', ev: 's', an: false }
      ]
    },
    vorsicht: [
      'Stoßwelle nicht als Routine von Anfang an.',
      'Teure Maßeinlagen nicht als erste Maßnahme.',
      'Kortison nur kurz wirksam, Rupturrisiko.'
    ],
    warn: ['Nacht- und Ruheschmerz, Fieber, Gewichtsverlust, Tumoranamnese, Trauma, Rötung, neurologische Ausfälle, Diabetes mit Sensibilitätsstörung.'],
    aerztlich: ['Zweite Stufe bei Nicht-Ansprechen: Stoßwelle.'],
    quellen: [
      { k: 'Morrissey 2021', t: 'Best Practice Plantar Heel Pain' },
      { k: 'Rathleff 2015', t: 'Hochlast-Krafttraining' },
      { k: 'Riel 2023', t: 'FIX-Heel' },
      { k: 'JOSPT 2023', t: 'Heel Pain Guideline' }
    ]
  }
];

/* ---------- Block 1 (von Hand aus den geprüften Wissenskarten, 27.11.2026) ---------- */
window.DK_DATEN.push(
  {
    id: 'K-WS01', karte: 'WS01', icd: ['M54.5'], titel: 'Nicht-spezifischer Kreuzschmerz', kurzTitel: 'Kreuzschmerz',
    dokuDiagnose: 'nicht-spezifischem Kreuzschmerz', bereich: 'Wirbelsäule', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['kreuzschmerz', 'lws', 'lumbago', 'rückenschmerz', 'hexenschuss', 'lws-syndrom'],
    untertitel: 'Inhalte aus der Wissenskarte WS01 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Schmerz zwischen Rippenbogen und Gesäßfalte ohne spezifische Ursache; akut unter 6, subakut 6 bis 12, chronisch über 12 Wochen.',
      'Sehr häufig (61 % der Erwachsenen in 12 Monaten). Akute Episoden bessern sich meist rasch, Rückfälle sind häufig.',
      'Ausstrahlung höchstens bis zum Knie; reicht sie darunter, an eine Radikulopathie denken.',
      'Kern ist Bewegungstherapie zusammen mit Edukation. Ab 4 Wochen Yellow Flags erfassen (STarT Back oder Örebro).'
    ],
    ziele: [
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: true },
      { t: 'Sitzen, Heben, Gehen ohne Vermeidung', doku: 'Alltagsaktivitäten ohne Vermeidungsverhalten', an: true },
      { t: 'Belastbarkeit von Rumpf und Beinen steigern', doku: 'Steigerung der Belastbarkeit', an: false },
      { t: 'Rückkehr zur Arbeit', doku: 'Wiederaufnahme der Arbeit', an: false },
      { t: 'Weiß, was bei einem neuen Schub zu tun ist', doku: 'Selbstmanagement bei erneutem Schub', an: true }
    ],
    strang: {
      deton: [
        { t: 'Weichteiltechniken LWS', info: 'nur ergänzend zur Aktivierung; Massage in der Akutphase nicht empfohlen', doku: 'ergänzende Weichteiltechniken LWS', ev: 'e', an: false }
      ],
      mobi: [
        { t: 'Übungen nach Richtungspräferenz', info: 'wenn vorhanden, z. B. Extension in Bauchlage 10×, alle 2 bis 3 h', doku: 'Übungen nach Richtungspräferenz', ev: 'e', an: true },
        { t: 'Manuelle Therapie LWS', info: 'nur zusammen mit Aktivierung', doku: 'Manuelle Therapie LWS', ev: 'l', an: false }
      ],
      aktiv: [
        { t: 'Rumpfkraft und Motorkontrolle', info: 'Bird-Dog, Seitstütz, Brücke; 3 × 8–12 bzw. 3 × 20–30 s', doku: 'Rumpfkräftigung und Motorkontrolle', ev: 's', an: true },
        { t: 'Krafttraining Beine und Rücken', info: 'Kreuzheben leicht, Kniebeuge, Rudern; 3 × 8–12, 2 bis 3× pro Woche', doku: 'Krafttraining für Beine und Rücken', ev: 's', an: true },
        { t: 'Ausdauer', info: 'Gehen, Radfahren, Schwimmen, langsam steigern', doku: 'Ausdauertraining', ev: 'l', an: false },
        { t: 'Graded Exposure', info: 'bei Bewegungsangst: gefürchtete Bewegung in kleinen Schritten', doku: 'Graded Exposure', ev: 's', an: false }
      ],
      berat: [
        { t: 'Schmerzedukation', info: 'Schmerz heißt nicht Schaden, gute Prognose, aktiv bleiben', doku: 'Schmerzedukation', ev: 's', an: true },
        { t: 'Heimprogramm', info: '2 bis 3 Übungen, täglich', doku: 'Anleitung Heimprogramm', ev: 'e', an: true }
      ]
    },
    vorsicht: [
      'Nicht empfohlen: Bettruhe, Orthesen und Gurte, Traktion, TENS, Ultraschall, Interferenzstrom, Kinesiotape.',
      'Keine Massage in der Akutphase, passive Maßnahmen nie allein.',
      'Keine Bildgebung ohne Red Flags.'
    ],
    warn: ['Kauda-Zeichen sofort. Krebs in der Vorgeschichte, Fieber, Trauma oder Kortison bei Osteoporose, Gewichtsverlust, Nachtschmerz, entzündliches Muster → ärztlich.'],
    aerztlich: [
      'Bei hohem Risiko (STarT Back) multimodale Behandlung; NICE hat kombinierte körperlich-psychologische Programme am 29.07.2026 gestrichen.',
      'Die NVL Kreuzschmerz ist seit Ende 2021 abgelaufen und in Überarbeitung; aktuell gelten NICE, JOSPT und WHO.'
    ],
    quellen: [
      { k: 'Q01', t: 'NVL Kreuzschmerz 2017, abgelaufen' }, { k: 'Q198', t: 'NICE NG59, Änderung 07/2026' }, { k: 'Q51', t: 'JOSPT Low Back Pain 2021' },
      { k: 'Q202', t: 'WHO 2023' }, { k: 'Q203', t: 'RESTORE 2023' }, { k: 'Q204', t: 'Cochrane 2021' }
    ]
  },
  {
    id: 'K-WS05', karte: 'WS05', icd: ['M54.2'], titel: 'Nicht-spezifischer Nackenschmerz', kurzTitel: 'Nackenschmerz',
    dokuDiagnose: 'nicht-spezifischem Nackenschmerz', bereich: 'Wirbelsäule', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['nackenschmerz', 'hws', 'zervikalgie', 'hws-syndrom', 'cervicalgie', 'nacken'],
    untertitel: 'Inhalte aus der Wissenskarte WS05 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Nackenschmerz ohne spezifische Ursache, oft mit Ausstrahlung in Schulter und Hinterkopf; 45,7 % der Erwachsenen in 12 Monaten.',
      'Meist günstiger Verlauf, aber 50 bis 75 % haben in 1 bis 5 Jahren wieder Beschwerden.',
      'Strahlt es in den Arm aus, an eine zervikale Radikulopathie denken.',
      'Kern sind körperliche Aktivität und Bewegungstherapie (DEGAM S3 2025, Grad A); Manuelle Therapie und Weichteiltechniken nur zusammen mit Übungen.'
    ],
    ziele: [
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: true },
      { t: 'Bildschirmarbeit ohne Beschwerden', doku: 'Belastbarkeit bei Bildschirmarbeit', an: true },
      { t: 'Freie Rotation, Schulterblick beim Autofahren', doku: 'freie HWS-Rotation', an: true },
      { t: 'Schlafen ohne Beschwerden', doku: 'beschwerdefreier Schlaf', an: false },
      { t: 'Nacken- und Schultermuskulatur kräftigen', doku: 'Kräftigung der Nacken- und Schultermuskulatur', an: false }
    ],
    strang: {
      deton: [
        { t: 'Weichteiltechniken Nacken und Schultergürtel', info: 'nur zusammen mit Übungen (DEGAM Grad 0)', doku: 'Weichteiltechniken der Nacken- und Schultermuskulatur', ev: 'l', an: true }
      ],
      mobi: [
        { t: 'BWS über die Rolle mobilisieren', info: 'Extension, auch als Eigenübung', doku: 'Mobilisation BWS', ev: 'e', an: true },
        { t: 'Aktive Rotation und Seitneigung', info: 'im schmerzarmen Bereich', doku: 'aktive Mobilisation HWS', ev: 'e', an: false },
        { t: 'Manuelle Therapie HWS', info: 'nur zusammen mit Übungen (DEGAM Grad 0)', doku: 'Manuelle Therapie HWS', ev: 'l', an: false },
        { t: 'C1/C2 bei zervikogenem Kopfschmerz', info: 'Mobilisation plus Eigenübung mit Gurt, dazu tiefe Halsbeuger', doku: 'Mobilisation C1/C2', ev: 'l', an: false }
      ],
      aktiv: [
        { t: 'Tiefe Halsflexoren', info: 'Nicken in Rückenlage, 10 × 10 s (Dosis ist Expertenmeinung)', doku: 'Training der tiefen Halsflexoren', ev: 'e', an: true },
        { t: 'Kraft Nacken und Schulter', info: 'Rudern, Außenrotation, Shrugs, 3 × 10–15; mindestens 1 h pro Woche', doku: 'Kräftigung der Nacken- und Schultermuskulatur', ev: 's', an: true }
      ],
      berat: [
        { t: 'Aufklärung, Wärme in Eigenanwendung', info: 'DEGAM Grad B', doku: 'Aufklärung, Wärme in Eigenanwendung', ev: 'l', an: true },
        { t: 'Arbeitsplatz', info: 'Bildschirmhöhe, Pausen, Positionswechsel; keine „richtige“ Haltung erzwingen', doku: 'Arbeitsplatzberatung', ev: 'e', an: false },
        { t: 'Heimprogramm', info: 'Halsbeuger, Kraft, BWS-Mobilisation', doku: 'Anleitung Heimprogramm', ev: 'e', an: false }
      ]
    },
    vorsicht: [
      'Nicht empfohlen: Traktion, Elektrotherapie, Laser, Kinesiotape (Grad B).',
      'Ebenso Ultraschall, Ruhigstellung und Halskrause, verordnete Fango oder Rotlicht, Massage in der Akutphase; passive Maßnahmen nie allein.'
    ],
    warn: ['Trauma (Canadian C-Spine Rule), Myelopathie-Zeichen, Gefäßzeichen (Schwindel, Doppelbilder, Sprach- oder Schluckstörung, Fallattacken, Nystagmus, neuer heftiger Kopfschmerz), Fieber, Nackensteife, Tumoranamnese.'],
    aerztlich: ['Bildgebung nur bei Warnzeichen.', 'Die JOSPT 2017 ist bei passiven Maßnahmen großzügiger als die DEGAM S3 2025.'],
    quellen: [
      { k: 'Q05', t: 'DEGAM S3 Nackenschmerzen 2025, gültig bis 2030' }, { k: 'Q50', t: 'JOSPT Neck Pain 2017' }, { k: 'Q205', t: 'Cochrane Gross 2015' },
      { k: 'Q206', t: 'Andersen 2012' }, { k: 'Q207', t: 'IFOMPT 2023' }, { k: 'Q682', t: 'Rasmussen-Barr 2023' }
    ]
  },
  {
    id: 'K-WS02', karte: 'WS02', icd: ['M51.1', 'M54.1'], titel: 'Lumbale Radikulopathie und Bandscheibenvorfall', kurzTitel: 'Lumbale Radikulopathie',
    dokuDiagnose: 'lumbaler Radikulopathie bei Bandscheibenvorfall', bereich: 'Wirbelsäule', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['bandscheibenvorfall', 'ischias', 'radikulopathie', 'nprl', 'bsv', 'lumboischialgie', 'prolaps'],
    untertitel: 'Inhalte aus der Wissenskarte WS02 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Reizung oder Kompression einer Nervenwurzel, meist L5 oder S1 durch einen Bandscheibenvorfall; der Beinschmerz ist oft stärker als der Rückenschmerz.',
      '60 bis 80 % sind in 6 bis 12 Wochen deutlich besser; Sequester bilden sich zu 96 % zurück.',
      'Kraftgrade bei jedem Termin kurz prüfen, Blase und Darm immer erfragen.',
      'Ohne schwere oder zunehmende Ausfälle ist konservativ der Standard; Physiotherapie in allen Phasen.'
    ],
    ziele: [
      { t: 'Beinschmerz senken (NRS Bein)', doku: 'Reduktion des Beinschmerzes', an: true },
      { t: 'Neurologische Ausfälle nicht verschlechtern', doku: 'Erhalt der neurologischen Funktion', an: true },
      { t: 'Gehen und Sitzen wieder möglich', doku: 'Verbesserung der Geh- und Sitztoleranz', an: true },
      { t: 'Rückkehr zur Arbeit', doku: 'Wiederaufnahme der Arbeit', an: false }
    ],
    strang: {
      deton: [
        { t: 'Weichteiltechniken nach der Akutphase', info: 'Massage akut nicht empfohlen (S2k 187-057)', doku: 'Weichteiltechniken LWS', ev: 'e', an: false }
      ],
      mobi: [
        { t: 'Wiederholte Bewegung, die zentralisiert', info: 'z. B. Extension in Bauchlage 10×, mehrfach täglich', doku: 'Übungen in zentralisierender Richtung', ev: 'e', an: true },
        { t: 'Neurodynamik: Gleiten', info: 'Slider statt Spannen, 2–3 × 10, schmerzfrei', doku: 'neurodynamische Gleittechniken', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'Gehen in kurzen Einheiten', info: 'mehrmals täglich', doku: 'Gehtraining in kurzen Einheiten', ev: 'e', an: true },
        { t: 'Kraft und Rumpfstabilität', info: 'erst nach der Akutphase, aufgebaut wie beim Kreuzschmerz', doku: 'Rumpfkräftigung', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Edukation zur guten Prognose', info: 'aktiv bleiben, Bettruhe höchstens kurz', doku: 'Edukation zur Prognose, Beratung zum Aktivbleiben', ev: 'l', an: true },
        { t: 'Kraftgrade und Warnzeichen kontrollieren', info: 'bei jedem Termin, Blase und Darm erfragen', doku: 'Kontrolle von Kraftgraden und Warnzeichen', ev: 'l', an: true }
      ]
    },
    vorsicht: [
      'Nicht empfohlen: Bettruhe über 4 Tage, Manipulation im betroffenen Segment, Traktion in der Akutphase, Elektrotherapie, Massage und Akupunktur akut.',
      'Ebenso TENS, Ultraschall, Interferenzstrom, Korsetts.',
      'Erst steigern, wenn der Beinschmerz zentralisiert oder abnimmt. Nachlassender Schmerz bei Parese kann Wurzeltod bedeuten.'
    ],
    warn: ['Kauda-Zeichen (neue Blasen- oder Darmstörung, Reithosentaubheit, sexuelle Störung, beide Beine) → sofort Notaufnahme. Parese 3/5 oder schlechter oder zunehmend → am selben Tag ärztlich.'],
    aerztlich: [
      'Frühe OP lindert schneller, nach 1 Jahr kein Unterschied; die OP-Frage nach 6 bis 12 Wochen ohne Besserung ärztlich klären.',
      'Pregabalin und Gabapentin sind bei Ischias nicht wirksamer als Placebo (NICE rät ab).',
      'Nach Mikrodiskektomie Übungen ab Woche 4 bis 6, keine pauschalen Verbote.'
    ],
    quellen: [
      { k: 'Q197', t: 'S2k 187-057, Konsens, abgelaufen 07/2025, in Überarbeitung' }, { k: 'Q198', t: 'NICE NG59, Änderung 07/2026' }, { k: 'Q199', t: 'GIRFT Cauda-equina-Pfad 2023' },
      { k: 'Q201', t: 'Peul 2007' }, { k: 'Q684', t: 'Zhu 2025 NMA akut' }, { k: 'Q685', t: 'Zhu 2025 NMA chronisch' }
    ]
  }
);

/* ---------- Block 2 (von Hand aus den geprüften Wissenskarten, 27.11.2026) ---------- */
window.DK_DATEN.push(
  {
    id: 'K-KN01', karte: 'KN01', icd: ['M17'], titel: 'Gonarthrose', kurzTitel: 'Gonarthrose',
    dokuDiagnose: 'Gonarthrose', bereich: 'Knie', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['gonarthrose', 'kniearthrose', 'arthrose knie', 'knie arthrose'],
    untertitel: 'Inhalte aus der Wissenskarte KN01 (geprüft 21.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Häufigste Arthrose; die Diagnose ist klinisch: ab 45, belastungsabhängiger Schmerz, Morgensteifigkeit höchstens 30 Minuten.',
      'Meist über Jahre stabil. Röntgenbild und Beschwerden passen schlecht zusammen.',
      'Basis sind Schulung, Training und bei Übergewicht Abnehmen (mindestens 10 %); gezieltes Quadrizeps-Training betreut bis 3× pro Woche.',
      'Manuelle Therapie nur zusammen mit Übungen.'
    ],
    ziele: [
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: true },
      { t: 'Treppe und Spaziergang wieder möglich', doku: 'Verbesserung von Treppensteigen und Gehstrecke', an: true },
      { t: 'Beinkraft steigern', doku: 'Kräftigung der Beinmuskulatur', an: true },
      { t: 'Sport wie Radfahren oder Wandern', doku: 'Wiederaufnahme sportlicher Aktivität', an: false },
      { t: 'OP verzögern oder gut vorbereitet hineingehen', doku: 'präoperative Vorbereitung bzw. Hinauszögern der OP', an: false }
    ],
    stationen: { deton: ['Detonisierung', 'nur ergänzend'] },
    strang: {
      deton: [
        { t: 'Weichteiltechniken Oberschenkel und Wade', info: 'nur ergänzend zu den Übungen', doku: 'ergänzende Weichteiltechniken', ev: 'e', an: false }
      ],
      mobi: [
        { t: 'Manuelle Therapie Knie', info: 'nur zusammen mit Übungen', doku: 'Manuelle Therapie Kniegelenk', ev: 'l', an: false }
      ],
      aktiv: [
        { t: 'Kraft Bein', info: 'Beinpresse, Kniebeuge, Step-up, je 3 × 10–12, steigend', doku: 'Kräftigung der Beinmuskulatur', ev: 's', an: true },
        { t: 'Hüftabduktoren und neuromuskulär', info: 'z. B. nach GLA:D', doku: 'Kräftigung der Hüftabduktoren und neuromuskuläres Training', ev: 's', an: true },
        { t: 'Ausdauer', info: 'Radfahren oder Gehen 20–30 min', doku: 'Ausdauertraining', ev: 'l', an: false }
      ],
      berat: [
        { t: 'Schulung', info: 'Arthrose verstehen, Belastung steuern; GLA:D: 2 Schulungen plus 12 Einheiten in 6 Wochen', doku: 'Patientenschulung', ev: 'l', an: true },
        { t: 'Schmerzregel beim Training', info: 'bis 5/10, am Folgemorgen zurück auf Ausgangsniveau (Expertenregel)', doku: 'Belastungssteuerung nach Schmerz', ev: 'e', an: true },
        { t: 'Gewicht', info: 'bei Übergewicht mindestens 10 % abnehmen', doku: 'Beratung zur Gewichtsreduktion', ev: 'l', an: false }
      ]
    },
    vorsicht: [
      'Nicht empfohlen: Arthroskopie und Lavage, TENS allein, Laser, NMES, Ultraschall, Glucosamin, laterale Keileinlagen.',
      'Passive Maßnahmen nicht statt aktiver.'
    ],
    warn: [],
    aerztlich: [
      'Prothese plus Training wirkt stärker als Training allein, hat aber mehr Komplikationen.',
      'Bei Hyaluronsäure und PRP widersprechen sich die Leitlinien.'
    ],
    quellen: [
      { k: 'Q16', t: 'AWMF Gonarthrose 2024' }, { k: 'Q213', t: 'NICE NG226' }, { k: 'Q55', t: 'OARSI 2019' },
      { k: 'Q215', t: 'Cochrane 2024' }, { k: 'Q216', t: 'Skou 2015' }
    ]
  },
  {
    id: 'K-IM09', karte: 'IM09', icd: ['I89.0', 'I97.2'], titel: 'Lymphödem', kurzTitel: 'Lymphödem',
    dokuDiagnose: 'Lymphödem', bereich: 'Innere', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['lymphödem', 'lymphoedem', 'mld', 'lymphdrainage', 'kpe', 'armlymphödem', 'beinlymphödem'],
    untertitel: 'Inhalte aus der Wissenskarte IM09 (geprüft 21.11.2026), Stationen nach der KPE',
    abriss: [
      'Eiweißreiche Schwellung durch gestörten Lymphabfluss, meist sekundär nach Tumorbehandlung; ISL-Stadien 0 bis III.',
      'Nach Brustkrebs etwa 21 %, nach Sentinel-Biopsie etwa 6 %.',
      'Behandelt wird mit der KPE: Hautpflege, MLD, Bewegung und Kompression. Die Kompression trägt; MLD bringt beim Volumen wenig zusätzlich, lindert aber Schmerz und Spannung.',
      'Phase 1 etwa 3 Wochen täglich bandagieren, Phase 2 maßgefertigter Strumpf, MLD nach Bedarf.'
    ],
    ziele: [
      { t: 'Volumen reduzieren und halten', doku: 'Reduktion und Erhalt des Extremitätenvolumens', an: true },
      { t: 'Spannung und Schmerz lindern', doku: 'Linderung von Spannungsgefühl und Schmerz', an: true },
      { t: 'Haut gesund halten', doku: 'Hautschutz', an: false },
      { t: 'Selbstmanagement (Bandage, Selbst-MLD, Strumpf)', doku: 'Selbstmanagement', an: true },
      { t: 'Kraft und Alltag in Kompression', doku: 'Belastbarkeit im Alltag', an: false }
    ],
    stationen: { deton: ['Entstauung', 'MLD'], mobi: ['Kompression', 'Bandage oder Strumpf'], aktiv: ['Bewegung', 'in Kompression'], berat: ['Hautpflege und Selbstmanagement', 'Anleitung'] },
    strang: {
      deton: [
        { t: 'Manuelle Lymphdrainage', info: 'MLD-30/45/60 nach Stadium (HeilM-RL seit 10/2024)', doku: 'MLD', ev: 'l', an: true }
      ],
      mobi: [
        { t: 'Kompressionsbandage', info: 'Phase 1, täglich, etwa 3 Wochen', doku: 'Kompressionsbandage', ev: 's', an: true },
        { t: 'Strumpf kontrollieren', info: 'Phase 2, maßgefertigt', doku: 'Kontrolle der Kompressionsversorgung', ev: 'e', an: false }
      ],
      aktiv: [
        { t: 'Entstauungsgymnastik', info: 'in Kompression', doku: 'Entstauungsgymnastik', ev: 'l', an: true },
        { t: 'Krafttraining in Kompression', info: '2× pro Woche, langsam steigern; sicher und vorbeugend', doku: 'Krafttraining in Kompression', ev: 's', an: false }
      ],
      berat: [
        { t: 'Hautpflege', info: 'Teil der KPE', doku: 'Anleitung Hautpflege', ev: 'l', an: false },
        { t: 'Selbstbandage und Selbst-MLD', info: 'für Phase 2 und zu Hause', doku: 'Anleitung Selbstbandage und Selbst-MLD', ev: 'e', an: true }
      ]
    },
    vorsicht: [
      'Keine vorbeugende MLD nach Brustkrebs.',
      'Kontraindikationen der MLD und Dosierungen der KPE sind Lehrbuch- und Expertenwissen.'
    ],
    warn: ['Erysipel (Rötung, Fieber), Thrombose (akute einseitige Schwellung), kardiale Ursache (beidseits, Atemnot; vor Therapie abklären), Rezidiv (rasch zunehmend, proximal, Schmerzen) → Entstauung pausieren, ärztlich.'],
    aerztlich: ['Die S2k Lymphödeme ist abgelaufen und in Überarbeitung; Grundlage sind ISL-Konsens 2023 und S3 Mammakarzinom 2025.'],
    quellen: [
      { k: 'Q46', t: 'S2k Lymphödeme, abgelaufen' }, { k: 'Q208', t: 'ISL-Konsens 2023' }, { k: 'Q209', t: 'S3 Mammakarzinom 2025' },
      { k: 'Q210', t: 'EFforT-BCRL 2022' }, { k: 'Q211', t: 'PAL (Schmitz 2009/2010)' }
    ]
  },
  {
    id: 'K-HU01', karte: 'HU01', icd: ['M16'], titel: 'Koxarthrose', kurzTitel: 'Koxarthrose',
    dokuDiagnose: 'Koxarthrose', bereich: 'Hüfte', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['koxarthrose', 'coxarthrose', 'hüftarthrose', 'arthrose hüfte'],
    untertitel: 'Inhalte aus der Wissenskarte HU01 (geprüft 21.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Arthrose des Hüftgelenks mit Leistenschmerz, Anlaufschmerz und eingeschränkter Innenrotation.',
      'Diagnose klinisch (ACR, Sutlive-Cluster); Röntgenbefund und Beschwerden passen oft nicht zusammen.',
      'Basis sind Schulung, Bewegungstherapie und bei Übergewicht Abnehmen. Manuelle Therapie nur zusammen mit Übungen, die Evidenz ist widersprüchlich.',
      'TEP bei Kellgren-Lawrence 3 bis 4, hohem Leidensdruck und mindestens 3 Monaten konservativer Therapie.'
    ],
    ziele: [
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: true },
      { t: 'Gehstrecke und Treppe verbessern', doku: 'Verbesserung von Gehstrecke und Treppensteigen', an: true },
      { t: 'Innenrotation und Beweglichkeit erhalten', doku: 'Erhalt der Hüftbeweglichkeit', an: true },
      { t: 'Hobbys wie Wandern oder Garten', doku: 'Wiederaufnahme von Freizeitaktivitäten', an: false },
      { t: 'OP hinauszögern, falls gewünscht', doku: 'Hinauszögern der OP', an: false }
    ],
    stationen: { deton: ['Detonisierung', 'nur ergänzend'] },
    strang: {
      deton: [
        { t: 'Weichteiltechniken Hüftmuskulatur', info: 'nur ergänzend zu den Übungen', doku: 'ergänzende Weichteiltechniken Hüfte', ev: 'e', an: false }
      ],
      mobi: [
        { t: 'Traktion und Mobilisation mit Bewegung', info: 'ergänzend; Leitlinien widersprechen sich (JOSPT Grad A, NICE und ACR zurückhaltend)', doku: 'Traktion und Mobilisation Hüftgelenk', ev: 'l', an: true }
      ],
      aktiv: [
        { t: 'Kraft Hüftabduktoren und -extensoren', info: 'Abduktion in Seitlage oder mit Band, Bridging, je 3 × 10–12', doku: 'Kräftigung der Hüftabduktoren und -extensoren', ev: 's', an: true },
        { t: 'Funktionell', info: 'Sit-to-Stand, Step-ups, neuromuskulär (GLA:D)', doku: 'funktionelles und neuromuskuläres Training', ev: 's', an: true },
        { t: 'Ausdauer', info: 'Ergometer oder Gehen 15–30 min', doku: 'Ausdauertraining', ev: 'l', an: false }
      ],
      berat: [
        { t: 'Schulung', info: 'Arthrose verstehen, Belastung steuern', doku: 'Patientenschulung', ev: 'l', an: true },
        { t: 'Schmerzregel beim Training', info: 'bis 5/10, am Folgemorgen zurück auf Ausgangsniveau (Expertenregel)', doku: 'Belastungssteuerung nach Schmerz', ev: 'e', an: true },
        { t: 'Gewicht', info: 'bei Übergewicht abnehmen', doku: 'Beratung zur Gewichtsreduktion', ev: 'l', an: false }
      ]
    },
    vorsicht: [
      'Nicht empfohlen: TENS, Ultraschall und andere Elektrotherapie, Hyaluronsäure, Glucosamin.',
      'Passive Maßnahmen nie allein.'
    ],
    warn: [],
    aerztlich: [
      'TEP bei Kellgren-Lawrence 3 bis 4, hohem Leidensdruck und mindestens 3 Monaten konservativer Therapie.',
      'Die S2k Koxarthrose ist abgelaufen, die EKIT-Hüfte überfällig.'
    ],
    quellen: [
      { k: 'Q18', t: 'S2k Koxarthrose 2019, abgelaufen' }, { k: 'Q212', t: 'S3 EKIT-Hüfte 2021' }, { k: 'Q56', t: 'JOSPT Hip OA 2025' },
      { k: 'Q213', t: 'NICE NG226' }, { k: 'Q214', t: 'Cochrane 2026' }, { k: 'Q55', t: 'OARSI 2019' }
    ]
  }
);

/* Diagnose-Kompass, Einträge Teil A (von Hand aus den Wissenskarten, 27.11.2026) */
window.DK_DATEN.push(
  {
    id: 'K-WS03', karte: 'WS03', icd: ['M48.06'], titel: 'Lumbale Spinalkanalstenose', kurzTitel: 'Spinalkanalstenose',
    dokuDiagnose: 'lumbaler Spinalkanalstenose', bereich: 'Wirbelsäule', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['spinalkanalstenose', 'spinalstenose', 'claudicatio spinalis', 'lumbale stenose', 'lws stenose', 'enger wirbelkanal'],
    untertitel: 'Inhalte aus der Wissenskarte WS03 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Einengung des Wirbelkanals, meist degenerativ und ab etwa 60 Jahren; Leitsymptom ist die neurogene Claudicatio mit Beinschmerz, Schwere oder Taubheit beim Gehen und Stehen.',
      'Typisch ist die Besserung im Sitzen und beim Vorbeugen, Radfahren geht besser als Gehen. Bildbefund und Beschwerden passen oft nicht zusammen, die pAVK abgrenzen.',
      'Physio und OP sind nach 2 Jahren gleich, viele wechseln aber zur OP.',
      'Kern ist ein betreutes Programm über 6 Wochen, 2× pro Woche, mit Heimprogramm: flexionsbetonte Übungen, gestuftes Gehen oder Ergometer, Schulung.'
    ],
    ziele: [
      { t: 'Gehstrecke verlängern', doku: 'Verlängerung der Gehstrecke', an: true },
      { t: 'Einkauf oder Spaziergang wieder möglich', doku: 'Wiederaufnahme von Einkauf und Spaziergang', an: true },
      { t: 'Selbstmanagement mit Pausen', doku: 'Selbstmanagement mit geplanten Pausen', an: true },
      { t: 'Beinschmerz beim Gehen senken (NRS)', doku: 'Reduktion des Beinschmerzes beim Gehen', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Flexionsbetonte Übungen', info: 'Knie zur Brust in Rückenlage, Beckenkippen, Sitz mit Vorneigen, 2× täglich', doku: 'flexionsbetonte Mobilisation der LWS', ev: 's', an: true },
        { t: 'Manuelle Therapie LWS', info: 'nur zusammen mit Übungen', doku: 'Manuelle Therapie LWS', ev: 'l', an: false }
      ],
      aktiv: [
        { t: 'Ausdauer auf Ergometer oder Laufband', info: 'Laufband mit Gewichtsentlastung, 20–30 min; Teil des betreuten Programms', doku: 'Ausdauertraining auf dem Ergometer', ev: 's', an: true },
        { t: 'Gestuftes Gehen mit Pausen', info: 'Schrittzähler, Gehzeit um etwa 10 % pro Woche steigern (Expertenmeinung)', doku: 'gestuftes Gehtraining mit Pausen', ev: 'e', an: true },
        { t: 'Kraft Beine und Rumpf', info: 'Sit-to-Stand, Brücke, Step-ups, 3 × 10–12', doku: 'Kräftigung von Bein- und Rumpfmuskulatur', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Schulung und Heimprogramm', info: 'betreut 6 Wochen, 2× pro Woche, dazu täglich zu Hause', doku: 'Schulung und Anleitung Heimprogramm', ev: 's', an: true },
        { t: 'Alltag mit Hilfen', info: 'Rollator oder Einkaufswagen bewusst nutzen, Sitzpausen einplanen', doku: 'Beratung zu Gehhilfen und Sitzpausen', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Nicht empfohlen: Traktion, Korsett, TENS, Ultraschall, Manuelle Therapie allein.',
      'Für Minuten und Intensitäten des Gehprogramms gibt es keine Studienangaben; die Steigerung ist Expertenmeinung.'
    ],
    warn: ['Blasen- oder Mastdarmstörung, Reithosentaubheit, rasch zunehmende Schwäche → sofort ärztlich; Fieber, Tumor, Gewichtsverlust, Nachtschmerz → ärztlich.'],
    aerztlich: [
      'OP bei Lähmung, Cauda-Zeichen oder stark verkürzter Gehstrecke trotz Programm; Versteifung zusätzlich zur Dekompression nicht empfohlen.',
      'Nicht empfohlen: epidurale Kortisonspritzen, Gabapentin, NSAR, Opioide, Calcitonin.',
      'Keine eigene deutsche Leitlinie; die S2k Spezifischer Kreuzschmerz behandelt die Stenose mit.'
    ],
    quellen: [
      { k: 'Q02', t: 'S2k Spezifischer Kreuzschmerz 2024' }, { k: 'Q198', t: 'NICE NG59, Änderung 07/2026' }, { k: 'Q244', t: 'Bussières 2021' },
      { k: 'Q242', t: 'Delitto 2015' }, { k: 'Q243', t: 'Ammendolia Boot Camp 2018' }, { k: 'Q245', t: 'Minetama 2019' }
    ]
  },
  {
    id: 'K-WS04', karte: 'WS04', icd: ['M43.1'], titel: 'Spondylolisthese', kurzTitel: 'Spondylolisthese',
    dokuDiagnose: 'Spondylolisthese', bereich: 'Wirbelsäule', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['spondylolisthese', 'spondylolisthesis', 'wirbelgleiten', 'spondylolyse', 'gleitwirbel', 'meyerding'],
    untertitel: 'Inhalte aus der Wissenskarte WS04 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Wirbelgleiten: bei Jüngeren meist isthmisch (Spondylolyse, häufig L5/S1, Sport mit viel Hohlkreuz-Belastung), bei Älteren meist degenerativ (L4/5); Einteilung nach Meyerding I bis IV.',
      'Jugendliche sind konservativ zu 84 % erfolgreich, der Defekt heilt bei 28 %.',
      'Konservativ bei Grad I bis II ohne Ausfälle; Schwerpunkt sind Rumpfstabilität, Kontrolle der Extension und Hüftbeweglichkeit.',
      'Es gibt wenig hochwertige Studien, die Empfehlungen beruhen überwiegend auf Konsens.'
    ],
    ziele: [
      { t: 'Alltag schmerzfrei belasten', doku: 'schmerzfreie Alltagsbelastung', an: true },
      { t: 'Rückkehr zum Sport', doku: 'Rückkehr zum Sport', an: true },
      { t: 'Rumpf in neutraler Position kontrollieren', doku: 'Verbesserung der Rumpfkontrolle', an: false },
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Hüftbeuger und Hamstrings dehnen', info: 'Hamstrings oft verkürzt; Hüftbeweglichkeit verbessern', doku: 'Dehnung von Hüftbeugern und ischiokruraler Muskulatur', ev: 'l', an: true }
      ],
      aktiv: [
        { t: 'Motorkontrolle in neutraler Position', info: 'Bauchmuskulatur, Dead Bug, Seitstütz, Bird-Dog; stabilisierende Übungen über 10 Wochen wirkten nach 30 Monaten', doku: 'Training der lumbalen Motorkontrolle', ev: 's', an: true },
        { t: 'Hüftstrecker und Gesäß kräftigen', info: 'Brücke und ähnliche Übungen', doku: 'Kräftigung von Hüftstreckern und Glutealmuskulatur', ev: 'l', an: true },
        { t: 'Extension kontrolliert einbauen', info: 'endgradig anfangs meiden, später kontrolliert; von statisch zu dynamisch', doku: 'kontrollierter Aufbau der Extensionsbelastung', ev: 'l', an: false },
        { t: 'Sportspezifisch zurückführen', info: 'wenn schmerzfrei, zuletzt Bewegungen mit Extension', doku: 'sportspezifisches Aufbautraining', ev: 'l', an: false }
      ],
      berat: [
        { t: 'Sportpause bei frischer Spondylolyse', info: 'beim Jugendlichen ärztliche Vorgabe beachten', doku: 'Beratung zur Sportpause nach ärztlicher Vorgabe', ev: 'l', an: true },
        { t: 'Belastung im Alltag', info: 'langes Stehen und Hyperextension dosieren', doku: 'Beratung zur Belastungsdosierung', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Endgradige Extension im Training anfangs meiden.',
      'Bei Jugendlichen im Wachstum auf Fortschreiten achten, ärztliche Vorgaben zur Sportpause einhalten.',
      'Das Vorgehen stützt sich überwiegend auf Konsens.'
    ],
    warn: ['Reithosentaubheit, Blasen- oder Darmstörung → Notfall; zunehmende Lähmung, Fortschreiten bei Jugendlichen im Wachstum, Fieber, Tumor, nächtlicher Ruheschmerz → ärztlich.'],
    aerztlich: ['Degenerative Form: Fusion zusätzlich zur Dekompression bringt keinen Vorteil.'],
    quellen: [
      { k: 'Q02', t: 'AWMF S2k Spezifischer Kreuzschmerz 187-059' }, { k: 'Q375', t: 'O’Sullivan 1997' }, { k: 'Q376', t: 'Klein 2009 Metaanalyse' },
      { k: 'Q377', t: 'Försth 2016 NEJM' }, { k: 'Q378', t: 'Ostelo 2008 ODI' }
    ]
  },
  {
    id: 'K-WS06', karte: 'WS06', icd: ['M50.1', 'M54.1'], titel: 'Zervikale Radikulopathie', kurzTitel: 'Zervikale Radikulopathie',
    dokuDiagnose: 'zervikaler Radikulopathie', bereich: 'Wirbelsäule', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['zervikobrachialgie', 'cervicobrachialgie', 'bandscheibenvorfall hws', 'brachialgie', 'radikulopathie hws', 'armschmerz', 'bsv hws'],
    untertitel: 'Inhalte aus der Wissenskarte WS06 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Nervenwurzelreizung an der HWS, am häufigsten C7, dann C6; meist knöchern (Spondylose, Foramenstenose), seltener ein Bandscheibenvorfall.',
      'Armschmerz mit Kribbeln, Taubheit oder Schwäche. Der Spontanverlauf ist meist günstig, Rückfall bei etwa einem Drittel.',
      'Primär konservativ und Physio früh: Schulung, Mobilisation, Neurodynamik schmerzfrei, Übungen; nach 4 bis 6 Wochen ohne Besserung intermittierende Traktion dazu.',
      'Myelopathie-Zeichen immer abfragen: Gang, Feinmotorik beider Hände, Blase.'
    ],
    ziele: [
      { t: 'Armschmerz senken (NRS Arm)', doku: 'Reduktion des Armschmerzes', an: true },
      { t: 'Kraft erhalten bzw. zurückgewinnen', doku: 'Erhalt und Wiederaufbau der Kraft', an: true },
      { t: 'Arbeit wieder aufnehmen', doku: 'Wiederaufnahme der Arbeit', an: false },
      { t: 'Rückfall vorbeugen', doku: 'Rezidivprophylaxe', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Mobilisation HWS und BWS', info: 'ohne Symptomverstärkung', doku: 'Mobilisation HWS/BWS', ev: 'l', an: true },
        { t: 'Neurodynamische Slider', info: 'für den betroffenen Nerv, 2–3 × 10, ohne Symptomverstärkung', doku: 'neurodynamische Gleittechniken', ev: 'l', an: true },
        { t: 'Intermittierende Traktion', info: 'erst ab Woche 4–6 ohne Besserung, zusätzlich zu Übungen und Mobilisation (JOSPT Grad B); DGN rät ab, Parameter sind Expertenmeinung', doku: 'intermittierende Traktion HWS', ev: 'u', an: false }
      ],
      aktiv: [
        { t: 'Tiefe Halsflexoren und Schulterblatt', info: 'wie beim Nackenschmerz (WS05)', doku: 'Training der tiefen Halsflexoren und der Skapulamuskulatur', ev: 'e', an: true },
        { t: 'Krafttraining Arm', info: 'sobald die Ausstrahlung zurückgeht; von entlastenden zu belastenden Positionen', doku: 'Kräftigung der Armmuskulatur', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Schulung und entlastende Positionen', info: 'Schulterabduktion, Hand auf den Kopf, Schlafposition', doku: 'Schulung zu entlastenden Positionen', ev: 'l', an: true },
        { t: 'Heimprogramm', info: 'Slider, Halsflexoren, Mobilisation', doku: 'Anleitung Heimprogramm', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Nicht empfohlen: Manipulation am betroffenen Segment, Traktion in der akuten Phase.',
      'Physikalische Maßnahmen nicht allein; Halskrause höchstens 3 Wochen.',
      'Reflexzuordnung nach deutscher Lehrbuchkonvention; Traktionsparameter und Sätze sind Expertenmeinung.'
    ],
    warn: ['Myelopathie (Gangunsicherheit, Ungeschicklichkeit beider Hände, Hoffmann, Kloni, Babinski) oder rasch fortschreitende Lähmung → sofort ärztlich; Trauma, Fieber, Tumor, Gewichtsverlust, Nachtschmerz → ärztlich.'],
    aerztlich: [
      'OP bei rasch fortschreitender Lähmung oder Myelopathie; bei starkem Armschmerz trotz Therapie spätestens nach etwa 6 Monaten anbieten, vorher strukturierte Physio versuchen.',
      'MRT bei Ausfällen oder ohne Besserung nach 4 bis 6 Wochen; Vorwölbungen ohne Beschwerden sind sehr häufig.',
      'Die DGN-Leitlinie ist seit 2020 abgelaufen und ohne Nachfolger, die S2k Bandscheibenvorfall seit 07/2025 in Überarbeitung.'
    ],
    quellen: [
      { k: 'Q04', t: 'S2k DGN 2017, abgelaufen' }, { k: 'Q197', t: 'S2k Bandscheibenvorfall, abgelaufen 07/2025' }, { k: 'Q50', t: 'JOSPT Neck 2017' },
      { k: 'Q226', t: 'Kuijper 2009' }, { k: 'Q227', t: 'Fritz 2014' }, { k: 'Q228', t: 'Engquist 2013' }
    ]
  },
  {
    id: 'K-WS07', karte: 'WS07', icd: ['S13.4'], titel: 'HWS-Beschleunigungsverletzung (Schleudertrauma, WAD)', kurzTitel: 'Schleudertrauma',
    dokuDiagnose: 'HWS-Beschleunigungsverletzung', bereich: 'Wirbelsäule', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['schleudertrauma', 'hws distorsion', 'hws-distorsion', 'beschleunigungstrauma', 'whiplash', 'wad', 'auffahrunfall'],
    untertitel: 'Inhalte aus der Wissenskarte WS07 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Verletzung durch Beschleunigung und Abbremsen, meist beim Auffahrunfall; Einteilung nach Quebec Task Force (0 bis IV).',
      'Etwa 50 % haben nach einem Jahr noch Schmerzen. Die Prognose hängt von Anfangsschmerz, NDI, Katastrophisieren und posttraumatischem Stress ab.',
      'Akut beruhigen und aktiv halten, wenige Termine reichen; mehr Aufwand bei hohem Risiko und chronisch bei Grad II bis III.',
      'Vorher Fraktur und Instabilität ausschließen (Canadian C-Spine Rule).'
    ],
    ziele: [
      { t: 'Normale Alltagsbewegung', doku: 'Wiederherstellung der Alltagsbeweglichkeit', an: true },
      { t: 'Autofahren mit Schulterblick', doku: 'Wiederaufnahme des Autofahrens', an: true },
      { t: 'Rückkehr zur Arbeit', doku: 'Wiederaufnahme der Arbeit', an: true },
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: false }
    ],
    strang: {
      deton: [
        { t: 'Entspannungsmassage', info: 'nicht empfohlen (OPTIMa), ebenso Wärme in der Praxis', doku: 'Weichteiltechniken HWS', ev: 'l', an: false }
      ],
      mobi: [
        { t: 'Aktive Beweglichkeit HWS', info: 'mehrmals täglich, früh beginnen', doku: 'aktive Mobilisation HWS', ev: 'l', an: true },
        { t: 'Mobilisation multimodal', info: 'akut Grad I–II zusammen mit Übungen', doku: 'Mobilisation HWS kombiniert mit Übungen', ev: 'l', an: false }
      ],
      aktiv: [
        { t: 'Nackenspezifisches Training', info: 'tiefe Halsflexoren, Nackenstrecker, Schulterblattkontrolle wie WS05; chronisch Grad II–III supervidiert 2× pro Woche über 12 Wochen', doku: 'nackenspezifisches Training', ev: 's', an: true },
        { t: 'Sensomotorik', info: 'Kopf auf Laserziel, Blickfixation mit Kopfbewegung, Augenbewegung bei ruhigem Kopf', doku: 'sensomotorisches Training HWS', ev: 'e', an: false },
        { t: 'Graded Exposure', info: 'bei Angst vor Autofahren oder Kopfdrehung', doku: 'Graded Exposure', ev: 'e', an: false },
        { t: 'Supervidiertes Krafttraining', info: 'akut Grad III zusätzlich', doku: 'supervidiertes Krafttraining', ev: 'l', an: false }
      ],
      berat: [
        { t: 'Aufklären, beruhigen, aktiv bleiben', info: 'keine Halskrause; eine gute Beratungssitzung war langfristig so gut wie 6 Termine', doku: 'Aufklärung und Beratung zum Aktivbleiben', ev: 's', an: true },
        { t: 'Stressimpfung plus Übungen', info: 'akut mit Übererregung, 10 Termine über 6 Wochen', doku: 'Stressbewältigung kombiniert mit Übungen', ev: 's', an: false }
      ]
    },
    vorsicht: [
      'Nicht empfohlen: Halskrause, Ruhe, Elektrotherapie, Wärme in der Praxis, Kurzwelle, Entspannungsmassage, Edukation allein.',
      'Akut Grad III kein Laser und keine Traktion; chronisch Grad I bis II keine Kräftigung allein und keine langen allgemeinen Programme.',
      'Sätze und Wiederholungen sind Expertenmeinung; QTF, CCR, NEXUS und JOSPT-Empfehlungen sind nicht am Original geprüft.'
    ],
    warn: ['Fraktur oder Instabilität nicht ausgeschlossen, neurologische Ausfälle, Myelopathiezeichen, neuer ungewohnter Kopf- oder Nackenschmerz, Schwindel oder Hirnnervenzeichen (Dissektion, auch Tage später) → ärztlich.'],
    aerztlich: ['Nach 3 Monaten neu einschätzen; Grad III mit anhaltender Neurologie ärztlich.'],
    quellen: [
      { k: 'Q314', t: 'OPTIMa Côté 2016' }, { k: 'Q315', t: 'MINT Lamb 2013' }, { k: 'Q316', t: 'StressModEx Sterling 2019' },
      { k: 'Q317', t: 'Ludvigsson 2016' }, { k: 'Q318', t: 'Walton 2013 Prognose' }, { k: 'Q50', t: 'JOSPT Neck Pain 2017' }
    ]
  },
  {
    id: 'K-WS08', karte: 'WS08', icd: ['M80.08'], titel: 'Osteoporotische Wirbelkörperfraktur', kurzTitel: 'Osteoporotische WK-Fraktur',
    dokuDiagnose: 'osteoporotischer Wirbelkörperfraktur', bereich: 'Wirbelsäule', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['wirbelkörperfraktur', 'osteoporotische fraktur', 'sinterungsfraktur', 'wirbelkörpereinbruch', 'lwk fraktur', 'bwk fraktur', 'wirbelbruch'],
    untertitel: 'Inhalte aus der Wissenskarte WS08 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Wirbelbruch bei verminderter Knochenfestigkeit, oft nach Bagatelle oder unbemerkt; häufig BWS und thorakolumbaler Übergang.',
      '19 % erleiden im Folgejahr die nächste Wirbelfraktur, der Schmerz hält oft über Monate an.',
      'Akut früh mobilisieren, so wenig Bettruhe wie möglich; danach mindestens 10 Wochen Rückenstrecker, Kraft und Gleichgewicht, 1× pro Woche Physio plus tägliches Heimprogramm.',
      'Training nach Fraktur ist nur mit kleinen Effekten belegt, die Dosierung ist überwiegend Konsens.'
    ],
    ziele: [
      { t: 'Alltagsbewegung schmerzarm', doku: 'schmerzarme Alltagsbewegung', an: true },
      { t: 'Sturzrisiko senken', doku: 'Reduktion des Sturzrisikos', an: true },
      { t: 'Weitere Frakturen vermeiden', doku: 'Prävention weiterer Frakturen', an: true },
      { t: 'Rückenstrecker kräftigen, aufrechte Haltung', doku: 'Kräftigung der Rückenstrecker', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Frühe Mobilisation', info: 'akut, so wenig Bettruhe wie möglich; Schmerztherapie ärztlich', doku: 'Frühmobilisation', ev: 'l', an: true }
      ],
      aktiv: [
        { t: 'Rückenstrecker', info: 'Bauchlage oder Sitz an der Wand, 3–5 Wdh., 3–5 s halten (Konsens)', doku: 'Kräftigung der Rückenstrecker', ev: 'l', an: true },
        { t: 'Gleichgewicht täglich', info: 'Tandemstand, Einbeinstand, Gehen mit Richtungswechsel, gesichert', doku: 'Gleichgewichtstraining', ev: 'l', an: true },
        { t: 'Kraft Beine', info: 'Sit-to-Stand, Step-ups, Wadenheben, 8–12 RM (Konsens); Impact nur bis zügiges Gehen', doku: 'Kräftigung der Beinmuskulatur', ev: 'l', an: false },
        { t: 'Haltungstraining', info: 'aufrichten, Schulterblätter zurück', doku: 'Haltungsschulung', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Rückengerechter Alltag', info: 'Hip Hinge, Heben mit geradem Rücken, Aufstehen über die Seite', doku: 'Schulung rückengerechter Alltagsbewegungen', ev: 'e', an: true },
        { t: 'Osteoporosetherapie anstoßen', info: 'erfragen, ob veranlasst; sonst ärztlich ansprechen', doku: 'Empfehlung zur Abklärung der Osteoporosetherapie', ev: 'l', an: true },
        { t: 'Sturzprävention', info: 'Sturztagebuch, Heimprogramm täglich', doku: 'Beratung zur Sturzprävention', ev: 'l', an: false },
        { t: 'Orthese nur nach Rücksprache', info: 'starr nicht besser als weich', doku: 'Beratung zur Orthese nach ärztlicher Rücksprache', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Keine belastete oder endgradige Rumpfbeugung, keine Sit-ups (Expertenmeinung).',
      'Keine pauschalen Bewegungsverbote, keine lange Bettruhe, keine Manipulation der Wirbelsäule.'
    ],
    warn: ['Neurologische Ausfälle, Tumoranamnese, zunehmender Schmerz oder Nachsintern, Hinterkantenbeteiligung (OF 3 und höher), Trauma, Langzeit-Kortison → ärztlich.'],
    aerztlich: [
      'Vertebroplastie nicht als Routine: gegen Schein-OP kein relevanter Nutzen.',
      'Osteoporosetherapie nach DVO S3 2023.',
      'Die S2k 187-063 gilt bis 14.04.2030, ihr Inhalt ist noch nicht ausgewertet.'
    ],
    quellen: [
      { k: 'Q326', t: 'AWMF S2k 187-063 2025' }, { k: 'Q07', t: 'DVO S3 Osteoporose 2023' }, { k: 'Q327', t: 'Cochrane Gibbs 2019' },
      { k: 'Q328', t: 'Lindsay 2001 Folgefraktur' }, { k: 'Q329', t: 'Langdon 2010 klinische Tests' }
    ]
  },
  {
    id: 'K-WS09', karte: 'WS09', icd: ['M41.1', 'M41.2'], titel: 'Idiopathische Skoliose', kurzTitel: 'Skoliose',
    dokuDiagnose: 'idiopathischer Skoliose', bereich: 'Wirbelsäule', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['skoliose', 'idiopathische skoliose', 'ais', 'schroth', 'rippenbuckel', 'wirbelsäulenverkrümmung'],
    untertitel: 'Inhalte aus der Wissenskarte WS09 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Dreidimensionale Verkrümmung der Wirbelsäule ohne bekannte Ursache, meist im Jugendalter.',
      'Die Behandlung richtet sich nach Cobb-Winkel, Wachstumsreserve (Risser) und Progression: beobachten, Korsett, Operation. Bei Erwachsenen stehen Schmerz und Funktion im Vordergrund.',
      'Am besten belegt ist das Korsett (Erfolg 72 % gegen 48 %, mit Dosis-Wirkung).',
      'Skoliosespezifische Übungen wie Schroth ergänzen die ärztliche Behandlung, die Studienlage ist begrenzt. Sport wird empfohlen, nicht verboten.'
    ],
    ziele: [
      { t: 'Progression begrenzen (mit Korsett)', doku: 'Begrenzung der Progression', an: true },
      { t: 'Haltung aktiv kontrollieren', doku: 'Verbesserung der Haltungskontrolle', an: true },
      { t: 'Sport erhalten', doku: 'Erhalt der sportlichen Aktivität', an: true },
      { t: 'Schmerzfreiheit', doku: 'Schmerzfreiheit', an: false }
    ],
    stationen: { mobi: ['Autokorrektur', 'dreidimensional'] },
    strang: {
      deton: [],
      mobi: [
        { t: 'Dreidimensionale Autokorrektur (z. B. Schroth)', info: 'nach Schreiber 30–45 min täglich plus 1× betreut; Effekt klein und sehr unsicher', doku: 'skoliosespezifische dreidimensionale Autokorrektur', ev: 's', an: true },
        { t: 'Atemlenkung in die konkave Seite', info: 'Teil der Autokorrektur', doku: 'Atemlenkung in die Konkavität', ev: 'e', an: false }
      ],
      aktiv: [
        { t: 'Korrigierte Haltung im Alltag stabilisieren', info: 'Korrektur halten bei Alltagsbewegungen', doku: 'Stabilisation der korrigierten Haltung', ev: 'e', an: true },
        { t: 'Allgemeine Kraft, Ausdauer und Sport', info: 'Sport wird empfohlen, nicht verboten', doku: 'allgemeines Kraft- und Ausdauertraining', ev: 'l', an: false }
      ],
      berat: [
        { t: 'Korsett begleiten', info: 'Hautkontrolle, Übungen im und außerhalb des Korsetts nach Vorgabe; Tragezeit bestimmt den Erfolg', doku: 'Beratung zur Korsettversorgung', ev: 's', an: true },
        { t: 'Heimprogramm', info: 'tägliche Übungen zur Autokorrektur', doku: 'Anleitung Heimprogramm', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Übungen nur ergänzend zur ärztlichen Behandlung, die Studienlage ist begrenzt.',
      'Kein Sportverbot.',
      'Internationale Empfehlungen (SOSORT) vor Nutzung prüfen.'
    ],
    warn: [],
    aerztlich: [
      'Beobachten, Korsett oder Operation nach Cobb-Winkel, Risser und Progression ärztlich.',
      'Deutsche S2k 151-002 gültig bis 14.03.2028.'
    ],
    quellen: [
      { k: 'Q387', t: 'AWMF S2k AIS 151-002' }, { k: 'Q388', t: 'BrAIST 2013 NEJM' }, { k: 'Q389', t: 'Cochrane 2024 Übungen' },
      { k: 'Q390', t: 'SOSORT 2016' }
    ]
  },
  {
    id: 'K-WS10', karte: 'WS10', icd: ['M45'], titel: 'Axiale Spondyloarthritis (Morbus Bechterew)', kurzTitel: 'Morbus Bechterew',
    dokuDiagnose: 'axialer Spondyloarthritis (M. Bechterew)', bereich: 'Wirbelsäule', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['morbus bechterew', 'bechterew', 'spondylitis ankylosans', 'spondyloarthritis', 'axspa', 'entzündlicher rückenschmerz'],
    untertitel: 'Inhalte aus der Wissenskarte WS10 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Entzündlich-rheumatische Erkrankung von Wirbelsäule und Iliosakralgelenken, Beginn meist vor dem 40. Lebensjahr.',
      'Ohne Behandlung zunehmende Steifigkeit; typisch sind Morgensteifigkeit über 30 Minuten und Besserung durch Bewegung, nicht durch Ruhe.',
      'Medikamente sind ärztlich, Bewegungstherapie ist ein fester Baustein: Übungen senken den Schmerz gegenüber keiner Behandlung um 2,1/10.',
      'Täglich Selbstübungen, dazu angeleitete Therapie, möglichst in der Gruppe ergänzt.'
    ],
    ziele: [
      { t: 'Beweglichkeit erhalten', doku: 'Erhalt der Wirbelsäulenbeweglichkeit', an: true },
      { t: 'Haltung aufrecht halten', doku: 'Erhalt der aufrechten Haltung', an: true },
      { t: 'Fitness und Teilhabe sichern', doku: 'Erhalt von Fitness und Teilhabe', an: true },
      { t: 'Schmerz und Morgensteifigkeit senken', doku: 'Reduktion von Schmerz und Morgensteifigkeit', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Mobilisation aller WS-Abschnitte', info: 'in Extension und Rotation', doku: 'Mobilisation der Wirbelsäule in Extension und Rotation', ev: 's', an: true },
        { t: 'Atemübungen mit Thoraxdehnung', info: 'Thoraxexkursion erhalten', doku: 'Atemtherapie mit Thoraxmobilisation', ev: 'e', an: false }
      ],
      aktiv: [
        { t: 'Krafttraining', info: 'Rückenstrecker, Gesäß, Schultergürtel, 2–3× pro Woche', doku: 'Kräftigung von Rückenstreckern, Gesäß- und Schultergürtelmuskulatur', ev: 's', an: true },
        { t: 'Ausdauer', info: 'Schwimmen, Radfahren, Nordic Walking; HIIT plus Kraft senkt den BASDAI um 1,2 (ohne Schub)', doku: 'Ausdauertraining', ev: 's', an: true },
        { t: 'Warmwasser-Therapie', info: 'kann ergänzen', doku: 'Bewegungstherapie im Warmwasser', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Tägliches Selbstübungsprogramm', info: 'Mobilisation, Atmung, Kraft', doku: 'Anleitung Selbstübungsprogramm', ev: 'l', an: true },
        { t: 'Gruppentherapie ergänzen', info: 'angeleitet, z. B. Bechterew-Gruppe', doku: 'Empfehlung angeleiteter Gruppentherapie', ev: 'l', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Ausdauer und Kraft wie für die Allgemeinbevölkerung dosieren; die HIIT-Daten gelten ohne Schub.',
      'Bei versteifter Wirbelsäule nach Sturz an eine Fraktur denken.'
    ],
    warn: ['Neue starke Schmerzen nach Sturz (bei versteifter Wirbelsäule an Fraktur denken) → ärztlich; Augenrötung mit Sehstörung → Augenarzt.'],
    aerztlich: [
      'Medikamentöse Therapie (NSAR, Biologika) ärztlich.',
      'Die S3 060-003 ist seit 08.11.2023 abgelaufen und in Überarbeitung; ASAS-EULAR 2022 sieht Bewegung als Basis.'
    ],
    quellen: [
      { k: 'Q06', t: 'AWMF S3 Axiale Spondyloarthritis 060-003 (abgelaufen)' }, { k: 'Q62', t: 'ASAS-EULAR 2022' }, { k: 'Q391', t: 'Cochrane 2019 Regnaux' },
      { k: 'Q392', t: 'Sveaas 2020' }, { k: 'Q393', t: 'Machado 2011 ASDAS' }
    ]
  },
  {
    id: 'K-NE01', karte: 'NE01', icd: ['I63', 'I61', 'I69'], titel: 'Schlaganfall', kurzTitel: 'Schlaganfall',
    dokuDiagnose: 'Z. n. Schlaganfall', bereich: 'Neurologie', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['schlaganfall', 'apoplex', 'hirninfarkt', 'hirnblutung', 'hemiparese', 'insult', 'mediainfarkt', 'stroke'],
    untertitel: 'Inhalte aus der Wissenskarte NE01 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Häufigste Ursache für bleibende Behinderung im Erwachsenenalter; Folgen sind unter anderem Halbseitenlähmung, Spastik, Neglect, Gleichgewichts- und Schluckstörung, Depression (31 %).',
      'Die größte Erholung liegt in den ersten 3 Monaten, Verbesserungen gibt es auch später.',
      'Wirksam ist viel, wiederholtes, aufgabenorientiertes Üben; kein Konzept ist überlegen.',
      'Intensität dokumentieren (Schritte, Wiederholungen, Minuten), Blutdruck vor und nach Belastung messen.'
    ],
    ziele: [
      { t: 'Selbstständige Transfers', doku: 'Selbstständigkeit bei Transfers', an: true },
      { t: 'Gehen in der Wohnung und draußen', doku: 'Verbesserung der Gehfähigkeit drinnen und draußen', an: true },
      { t: 'Arm im Alltag einsetzen', doku: 'Einsatz des betroffenen Arms im Alltag', an: true },
      { t: 'Stürze vermeiden', doku: 'Sturzprävention', an: false }
    ],
    stationen: { deton: ['Tonus und Lagerung', 'Spastik, Schulter'], mobi: ['Bewegungsanbahnung', 'Transfers'], aktiv: ['Aufgabenorientiertes Training', 'Gehen, Arm, Gleichgewicht'], berat: ['Angehörige und Heimprogramm', 'Belastungskontrolle'] },
    strang: {
      deton: [
        { t: 'Spastik: gezieltes Üben', info: 'bei fokaler Spastik zusammen mit Botulinumtoxin; Dehnen oder Schienen allein ohne Nutzen', doku: 'gezieltes Üben bei Spastik', ev: 'l', an: true },
        { t: 'Schulter schützen', info: 'passiv nicht über 90° ohne Skapula-Aufwärtsrotation, Tape früh, Schlinge nur in der schlaffen Phase', doku: 'Schutz der paretischen Schulter', ev: 'l', an: true }
      ],
      mobi: [
        { t: 'Sit-to-Stand-Transfers', info: '10–20× pro Einheit, mit zunehmender Schwierigkeit', doku: 'Transfertraining Sitz–Stand', ev: 'e', an: true },
        { t: 'Frühmobilisation dosiert', info: 'keine sehr frühe, hoch dosierte Mobilisation in den ersten 24 h', doku: 'dosierte Frühmobilisation', ev: 's', an: false }
      ],
      aktiv: [
        { t: 'Gehtraining moderat bis hoch intensiv', info: 'so viele Schritte wie möglich, Tempo und Strecke steigern, Herzfrequenz fordern; Laufband zusätzlich zum Gehen am Boden', doku: 'intensives Gehtraining', ev: 'l', an: true },
        { t: 'Arm aufgabenorientiert', info: 'Greifen, Becher, Besteck; viele Wiederholungen täglich', doku: 'aufgabenorientiertes Armtraining', ev: 's', an: true },
        { t: 'CIMT / mCIMT', info: 'ab mindestens 20° Handgelenk- und 10° Fingerstreckung, nicht intensiv im ersten Monat', doku: 'Constraint-Induced Movement Therapy', ev: 'l', an: false },
        { t: 'FES und Spiegeltherapie', info: 'FES mit Aufgabentraining', doku: 'FES und Spiegeltherapie', ev: 'l', an: false },
        { t: 'Ausdauer', info: 'mindestens 8 Wochen, 3× pro Woche, 5 auf 20+ min', doku: 'Ausdauertraining', ev: 'l', an: false },
        { t: 'Gleichgewicht im Stand', info: 'mit Störungen, Schritt-Strategien', doku: 'Gleichgewichtstraining', ev: 'e', an: false },
        { t: 'Kraft- und Zirkeltraining', info: 'ergänzend, auch Ergometer', doku: 'Kraft- und Zirkeltraining', ev: 'l', an: false }
      ],
      berat: [
        { t: 'Heimprogramm mit Angehörigen', info: 'ambulant über das Heimprogramm, Arm täglich üben', doku: 'Anleitung Heimprogramm mit Angehörigen', ev: 'l', an: true },
        { t: 'Blutdruck kontrollieren', info: 'vor und nach Belastung, Grenzwerte nach ärztlicher Vorgabe', doku: 'Blutdruckkontrolle unter Belastung', ev: 'e', an: true },
        { t: 'Intensität dokumentieren', info: 'Schritte, Wiederholungen, Minuten', doku: 'Dokumentation der Trainingsintensität', ev: 'e', an: false }
      ]
    },
    vorsicht: [
      'Keine Überkopf-Seilzüge; Dehnen oder Schienen allein helfen nicht gegen Spastik.',
      'Keine sehr frühe, hoch dosierte Mobilisation in den ersten 24 h.',
      'Laufband mit Gewichtsentlastung und Gangroboter bei chronisch Gehfähigen nicht zur Verbesserung des Gehens (Kanada empfiehlt es als Zusatz).'
    ],
    warn: ['Neue Ausfälle nach BE-FAST, auch vorübergehend (TIA) → sofort 112; Krampfanfall, neuer starker Kopfschmerz, Wadenschwellung, Sturz mit Verletzung → ärztlich.'],
    aerztlich: [
      'Botulinumtoxin bei fokaler Spastik, kombiniert mit gezieltem Üben.',
      'Reha mit mindestens 3 h am Tag an 5 Tagen (NICE).',
      'S3 Armparese seit 04/2025 und ReMoS seit 2021 abgelaufen, Nachfolger TheMoS noch nicht erschienen.'
    ],
    quellen: [
      { k: 'Q252', t: 'Veerbeek 2014' }, { k: 'Q250', t: 'NICE NG236 2023' }, { k: 'Q251', t: 'Canadian SBP 2025' },
      { k: 'Q31', t: 'Hornby 2020' }, { k: 'Q253', t: 'AVERT 2015' }, { k: 'Q29', t: 'S3 Armparese 2020, abgelaufen' }
    ]
  },
  {
    id: 'K-NE02', karte: 'NE02', icd: ['G20'], titel: 'Morbus Parkinson', kurzTitel: 'Parkinson',
    dokuDiagnose: 'Morbus Parkinson', bereich: 'Neurologie', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['parkinson', 'morbus parkinson', 'ips', 'parkinson-syndrom', 'freezing', 'schüttellähmung'],
    untertitel: 'Inhalte aus der Wissenskarte NE02 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Fortschreitende Erkrankung mit Bradykinese, Rigor, Ruhetremor, später Haltungsinstabilität, Freezing und Stürzen.',
      'Physiotherapie hat in allen Stadien einen festen Platz. Training verbessert Motorik und Gleichgewicht und senkt Stürze; ob es den Verlauf bremst, ist offen.',
      'Kern nach APTA: Ausdauer moderat bis hoch, Kraft, Gleichgewicht, Gangtraining mit Cueing und aufgabenspezifisches Üben.',
      'Termine möglichst in der On-Phase, Sturzrisiko alle 6 Monate neu einschätzen.'
    ],
    ziele: [
      { t: 'Sicher gehen', doku: 'Verbesserung der Gangsicherheit', an: true },
      { t: 'Stürze vermeiden', doku: 'Sturzprävention', an: true },
      { t: 'Aktivität und Fitness erhalten', doku: 'Erhalt von Aktivität und Fitness', an: true },
      { t: 'Training als feste Gewohnheit', doku: 'Etablierung eines regelmäßigen Trainings', an: false }
    ],
    stationen: { deton: ['Cueing und Strategien', 'Freezing'], mobi: ['Gang und Transfers', 'aufgabenspezifisch'], aktiv: ['Ausdauer, Kraft, Gleichgewicht', 'nach APTA'], berat: ['Alltag und Angehörige', 'On-Phase, Sturzrisiko'] },
    strang: {
      deton: [
        { t: 'Cueing mit Metronom und Linien', info: 'bei Freezing Metronom bis 10 % unter der eigenen Frequenz, Linien am Boden', doku: 'Gangtraining mit externen Rhythmusvorgaben', ev: 'l', an: true },
        { t: 'Strategien bei Freezing', info: 'Gewicht verlagern, auf Zielpunkt schauen, laut zählen', doku: 'Erarbeitung von Strategien bei Freezing', ev: 'e', an: true }
      ],
      mobi: [
        { t: 'Gangtraining', info: '20–60 min, 3–5× pro Woche, 4–12 Wochen', doku: 'Gangtraining', ev: 'l', an: true },
        { t: 'Aufgabenspezifisch üben', info: 'Umdrehen, Transfers, Aufstehen vom Boden', doku: 'aufgabenspezifisches Training von Transfers und Umdrehen', ev: 'l', an: false }
      ],
      aktiv: [
        { t: 'Ausdauer moderat bis hoch', info: 'Laufband oder Ergometer, 60–85 % HFmax bzw. RPE 13–15; mindestens 3× pro Woche 30–40 min', doku: 'Ausdauertraining', ev: 'l', an: true },
        { t: 'Gleichgewichtstraining', info: '2–3× pro Woche, insgesamt 16–30 h in 5–10 Wochen; senkt Stürze', doku: 'Gleichgewichtstraining', ev: 's', an: true },
        { t: 'Krafttraining', info: 'Beine, Rumpf, Rückenstrecker, 2–3 × 8–12; 1–2× pro Woche (80 % 1RM Kraft, 40 % Schnellkraft)', doku: 'Kräftigung von Bein-, Rumpf- und Rückenmuskulatur', ev: 'l', an: false },
        { t: 'Tanz, Tai Chi, Gruppen vor Ort', info: 'als Ergänzung', doku: 'Tanz bzw. Tai Chi', ev: 's', an: false },
        { t: 'Doppelaufgaben', info: 'dosiert einbauen, Effekt unsicher', doku: 'Dual-Task-Training', ev: 'u', an: false }
      ],
      berat: [
        { t: 'Termin in der On-Phase', info: 'Medikamenteneinnahme dokumentieren', doku: 'Behandlung in der On-Phase', ev: 'e', an: true },
        { t: 'Sturzrisiko regelmäßig prüfen', info: 'alle 6 Monate, Sturztagebuch', doku: 'Verlaufskontrolle des Sturzrisikos', ev: 'e', an: false },
        { t: 'Spätstadium: Angehörige anleiten', info: 'Transfers, Kontrakturen und Pneumonie vorbeugen (Expertenmeinung)', doku: 'Anleitung der Angehörigen', ev: 'e', an: false }
      ]
    },
    vorsicht: [
      'Dehnen allein bringt keinen Effekt.',
      'Keine passiven Maßnahmen ohne aktives Training (keine Daten).',
      'Die APTA nennt Dosierungen bewusst vage; die europäische Physio-Leitlinie ist von 2014 und nicht aktualisiert.'
    ],
    warn: ['Stürze mit Verletzung, Schwindel oder Bewusstseinsverlust beim Aufstehen, plötzliche Verschlechterung (Infekt, akinetische Krise), Verschlucken, Halluzinationen → ärztlich; frühe Stürze, frühe Blasen- oder Kreislaufstörung, Blicklähmung oder fehlende Levodopa-Wirkung: an atypisches Parkinson-Syndrom denken.'],
    aerztlich: ['Ob Training den Verlauf bremst, klärt SPARX3 (Ergebnisse etwa 2029).'],
    quellen: [
      { k: 'Q27', t: 'APTA 2022' }, { k: 'Q26', t: 'S2k Parkinson 2023' }, { k: 'Q247', t: 'NICE NG71' },
      { k: 'Q248', t: 'Cochrane NMA 2023' }, { k: 'Q249', t: 'Cochrane Stürze 2022' }, { k: 'Q67', t: 'Europäische Leitlinie 2014' }
    ]
  },
  {
    id: 'K-NE03', karte: 'NE03', icd: ['G35'], titel: 'Multiple Sklerose', kurzTitel: 'MS',
    dokuDiagnose: 'Multipler Sklerose', bereich: 'Neurologie', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['multiple sklerose', 'ms', 'encephalomyelitis disseminata', 'ed', 'fatigue', 'uhthoff'],
    untertitel: 'Inhalte aus der Wissenskarte NE03 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Chronisch-entzündliche ZNS-Erkrankung, meist schubförmig beginnend; typisch sind Fatigue (etwa 75 %), Wärmeempfindlichkeit (Uhthoff), Spastik, Gang- und Gleichgewichtsstörung.',
      'Training ist sicher, senkt die Fatigue und wird nach EDSS dosiert.',
      'Gleichgewicht wird durch Training besser, weniger Stürze sind nicht belegt.',
      'Belegte Dosierungen gibt es nur bis EDSS 6,5; ab EDSS 7 und im Schub kurz und funktionell nach Konsens.'
    ],
    ziele: [
      { t: 'Gehfähigkeit erhalten', doku: 'Erhalt der Gehfähigkeit', an: true },
      { t: 'Fatigue managen', doku: 'Fatigue-Management', an: true },
      { t: 'Stürze vermeiden', doku: 'Sturzprävention', an: true },
      { t: 'Beruf und Familie bewältigen', doku: 'Teilhabe in Beruf und Familie', an: false }
    ],
    stationen: { deton: ['Spastik und Beweglichkeit', 'Dehnen'], mobi: ['Gang und Gleichgewicht', 'gesichert steigern'], aktiv: ['Ausdauer und Kraft', 'nach EDSS'], berat: ['Fatigue und Hilfsmittel', 'Energiemanagement'] },
    strang: {
      deton: [
        { t: 'Dehnen täglich', info: '2–3 × 30–60 s', doku: 'Dehnung der spastischen Muskulatur', ev: 'e', an: true }
      ],
      mobi: [
        { t: 'Gleichgewicht und Gang', info: 'schwierige Aufgaben, steigernd, gesichert, 3–6× pro Woche, viele Minuten pro Woche', doku: 'Gleichgewichts- und Gangtraining', ev: 's', an: true }
      ],
      aktiv: [
        { t: 'Krafttraining', info: 'Beine und Rumpf, 2–3× pro Woche, 1–3 × 8–15; wirkt stark gegen Fatigue, mindestens 8 Wochen', doku: 'Kräftigung von Bein- und Rumpfmuskulatur', ev: 's', an: true },
        { t: 'Ausdauer', info: 'Fahrradergometer 10–30 min, Borg 11–13, 2–3× pro Woche; bei Wärme Intervalle', doku: 'Ausdauertraining', ev: 's', an: true },
        { t: 'Ab EDSS 7 funktionell', info: 'Sit-to-Stand 3 × 10, Armkurbel, Stehständer 3 × 30 min pro Woche (Konsens)', doku: 'funktionelles Training bei hoher Behinderung', ev: 'l', an: false }
      ],
      berat: [
        { t: 'Angeleitetes Eigentraining', info: 'eine Einheit pro Woche reicht nicht', doku: 'Anleitung zum Eigentraining', ev: 'l', an: true },
        { t: 'Energiemanagement', info: 'Fatigue nach Tageszeit und Auslösern planen', doku: 'Beratung zum Energiemanagement', ev: 'e', an: true },
        { t: 'Kühlung bei Wärmeempfindlichkeit', info: 'vor und während des Trainings, Kühlweste', doku: 'Kühlung während des Trainings', ev: 'e', an: false },
        { t: 'Hilfsmittel rechtzeitig', info: 'Fußheberorthese, Stöcke', doku: 'Hilfsmittelberatung', ev: 'e', an: false }
      ]
    },
    vorsicht: [
      'Keine Schonung aus Angst vor Wärme oder Schub; kein Training an Tagen mit Fieber.',
      'Keine Druckmanschetten bei Ataxie; Laufband mit Gewichtsentlastung bei schwerer MS ohne Mobilitätseffekt.'
    ],
    warn: ['Neue oder deutlich verschlechterte Symptome über 24 Stunden ohne Fieber oder Wärme (Schub), akute Sehstörung oder Schmerz bei Augenbewegung, neue Blasen- oder Mastdarmstörung, Fieber mit Harnwegsinfekt, plötzliche deutliche Gangverschlechterung → ärztlich.'],
    aerztlich: [
      'Behandelbare Fatigue-Auslöser ärztlich klären.',
      'DGN-Leitlinie 030-050 als Living Guideline gültig bis 21.02.2027, Inhalt nicht ausgewertet.'
    ],
    quellen: [
      { k: 'Q28', t: 'DGN S2k MS Living Guideline 2026' }, { k: 'Q319', t: 'Kalb 2020 Bewegung nach EDSS' }, { k: 'Q320', t: 'Cochrane Heine 2015 Fatigue' },
      { k: 'Q321', t: 'Gunn 2015 Balance' }, { k: 'Q322', t: 'Schubrisiko 2023' }
    ]
  },
  {
    id: 'K-NE04', karte: 'NE04', icd: ['G62', 'G63'], titel: 'Polyneuropathie', kurzTitel: 'Polyneuropathie',
    dokuDiagnose: 'Polyneuropathie', bereich: 'Neurologie', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['polyneuropathie', 'pnp', 'diabetische polyneuropathie', 'cipn', 'taube füße', 'gangunsicherheit'],
    untertitel: 'Inhalte aus der Wissenskarte NE04 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Schädigung vieler peripherer Nerven, häufigste Ursachen sind Diabetes und Alkohol.',
      'Strumpfförmige Sensibilitätsstörung, Brennen, Gangunsicherheit besonders im Dunkeln, später Schwäche; das Sturzrisiko ist hoch.',
      'Kern ist gesichertes Gleichgewichtstraining mit sensorischen Herausforderungen: bei diabetischer PNP TUG −1 bis −1,7 s und Berg +2, weniger Stürze sind nicht belegt.',
      'Während einer Chemotherapie senkt sensomotorisches Training die CIPN (30 % statt 71 %).'
    ],
    ziele: [
      { t: 'Sicher gehen', doku: 'Verbesserung der Gangsicherheit', an: true },
      { t: 'Stürze vermeiden', doku: 'Sturzprävention', an: true },
      { t: 'Schmerz lindern', doku: 'Schmerzlinderung', an: false }
    ],
    stationen: { deton: ['Schmerzlinderung', 'TENS'], mobi: ['Gleichgewicht', 'sensorisch fordern'], aktiv: ['Kraft und Ausdauer', 'Unterschenkel, Hüfte'], berat: ['Sturzprävention und Fußschutz', 'Wohnung, Schuhe'] },
    strang: {
      deton: [
        { t: 'TENS bei schmerzhafter diabetischer PNP', info: 'SMD −1,67 in einer Netzwerk-Metaanalyse', doku: 'TENS', ev: 's', an: false }
      ],
      mobi: [
        { t: 'Gleichgewichtstraining', info: 'Augen zu, weiche Unterlage, gesichert; 3× pro Woche über Monate', doku: 'Gleichgewichtstraining mit sensorischen Anforderungen', ev: 's', an: true },
        { t: 'Gehen auf unterschiedlichen Untergründen', info: 'gesichert', doku: 'Gangschulung auf wechselnden Untergründen', ev: 'e', an: false },
        { t: 'Sensomotorik während Chemotherapie', info: '2× pro Woche 15–30 min', doku: 'sensomotorisches Training', ev: 's', an: false }
      ],
      aktiv: [
        { t: 'Kraft Unterschenkel und Hüfte', info: '2× pro Woche', doku: 'Kräftigung von Unterschenkel- und Hüftmuskulatur', ev: 'e', an: true },
        { t: 'Ausdauer', info: 'z. B. Gehen', doku: 'Ausdauertraining', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Sturzprävention und Wohnraum', info: 'Licht in der Nacht, Stolperfallen', doku: 'Sturzprävention und Wohnraumberatung', ev: 'e', an: true },
        { t: 'Fußpflege und Schuhe', info: 'Fußschulung und passende Schuhe, Füße regelmäßig ansehen', doku: 'Beratung zu Fußpflege und Schuhversorgung', ev: 'l', an: true }
      ]
    },
    vorsicht: [
      'Gleichgewichtstraining immer gesichert, das Sturzrisiko ist hoch.',
      'Weniger Stürze durch Training sind nicht belegt.',
      'Füße inspizieren, besonders bei Diabetes.'
    ],
    warn: ['Asymmetrisch, Beginn nicht an den Füßen, Lähmung im Vordergrund, schneller Beginn, vegetative Störungen → neurologisch; aufsteigende Lähmung mit Atemnot → Notruf; Fußwunde oder warmer geschwollener Fuß bei Diabetes → am selben Tag ärztlich.'],
    aerztlich: ['Ursachenbehandlung ärztlich.'],
    quellen: [
      { k: 'Q32', t: 'AWMF S1 Diagnostik bei Polyneuropathien 030-067' }, { k: 'Q339', t: 'Callaghan 2015 JAMA' }, { k: 'Q340', t: 'STOP 2024 JAMA Intern Med' },
      { k: 'Q341', t: 'Streckmann 2022 Metaanalyse' }, { k: 'Q342', t: 'IWGDF 2023 Prävention' }, { k: 'Q343', t: 'NMA TENS 2025' }
    ]
  },
  {
    id: 'K-NE05', karte: 'NE05', icd: ['S06'], titel: 'Schädel-Hirn-Trauma (inkl. Gehirnerschütterung)', kurzTitel: 'SHT / Gehirnerschütterung',
    dokuDiagnose: 'Z. n. Schädel-Hirn-Trauma', bereich: 'Neurologie', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['schädel-hirn-trauma', 'schädelhirntrauma', 'sht', 'gehirnerschütterung', 'commotio', 'concussion'],
    untertitel: 'Inhalte aus der Wissenskarte NE05 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Spannbreite von der Gehirnerschütterung (leichtes SHT) bis zu schweren Verletzungen mit langer Bewusstlosigkeit; Folgen sind Kopfschmerz, Schwindel, Gleichgewicht, Konzentration, Motorik und Verhalten.',
      'Leichtes SHT: höchstens 24 bis 48 Stunden relative Ruhe, dann früh aktiv werden; frühe Aktivität verkürzt die Erholung um 4,6 Tage.',
      'Ausdauertraining unter der Symptomschwelle senkt das Risiko anhaltender Symptome um 48 % (Jugendliche).',
      'Mittelschweres bis schweres SHT: Frühreha nach S3, später aufgabenorientiert wie beim Schlaganfall.'
    ],
    ziele: [
      { t: 'Symptomfrei im Alltag', doku: 'Rückgang der Symptome im Alltag', an: true },
      { t: 'Rückkehr zu Sport, Schule oder Arbeit', doku: 'stufenweise Rückkehr zu Sport, Schule und Arbeit', an: true },
      { t: 'Schwindel und Nackenschmerz lindern', doku: 'Reduktion von Schwindel und Nackenschmerz', an: false },
      { t: 'Gleichgewicht und Motorik verbessern', doku: 'Verbesserung von Gleichgewicht und Motorik', an: false }
    ],
    stationen: { deton: ['Aktivität dosieren', 'erste Tage'], mobi: ['HWS und Vestibulär', 'zervikovestibulär'], aktiv: ['Ausdauer und Funktion', 'unter der Symptomschwelle'], berat: ['Aufklärung und Rückkehr', 'Sport, Schule, Arbeit'] },
    strang: {
      deton: [
        { t: 'Relative Ruhe nur kurz', info: 'höchstens 24–48 Stunden, dann frühe leichte Aktivität, wenig Bildschirm; strikte Ruhe ohne Vorteil', doku: 'frühe dosierte Aktivierung', ev: 's', an: true }
      ],
      mobi: [
        { t: 'Zervikovestibuläre Therapie', info: 'bei Schwindel, Nacken- oder Kopfschmerz über 10 Tage; 73 % gegen 7 % sporttauglich nach 8 Wochen (kleine Studie)', doku: 'zervikovestibuläre Therapie', ev: 's', an: true }
      ],
      aktiv: [
        { t: 'Ausdauer unter der Symptomschwelle', info: 'ab Tag 2–14; Schwelle per Belastungstest (Buffalo oder Fahrradtest)', doku: 'symptomlimitiertes Ausdauertraining', ev: 's', an: true },
        { t: 'Mittel bis schwer: aufgabenorientiert', info: 'wie NE01: Gang, Gleichgewicht, Kraft; Kognition und Verhalten im Team', doku: 'aufgabenorientiertes Training', ev: 'l', an: false }
      ],
      berat: [
        { t: 'Aufklärung', info: 'reicht bei den meisten Erwachsenen mit leichtem SHT (Cochrane)', doku: 'Aufklärung zu Verlauf und Prognose', ev: 's', an: true },
        { t: 'Stufenweise Rückkehr zum Sport', info: 'Amsterdam, 6 Stufen (nicht im Original geprüft); Sportler im Mittel 14 Tage bis symptomfrei, 20 Tage bis Sport', doku: 'Begleitung der stufenweisen Rückkehr zum Sport', ev: 'l', an: true }
      ]
    },
    vorsicht: [
      'Keine strikte Ruhe über 24 bis 48 Stunden hinaus.',
      'Untersuchung (SCOAT6 mit HWS, Gleichgewicht, VOMS, Orthostase, Belastungstest) erst ab Tag 3.',
      'Amsterdam-Stufen und der Wortlaut der Warnzeichen sind nicht im Original geprüft.'
    ],
    warn: ['Notruf 112 bei zunehmendem oder starkem Kopfschmerz, Erbrechen über 2-mal, Bewusstseinstrübung, Verwirrtheit, Krampfanfall, Doppelbilder, Schwäche oder Kribbeln in Armen oder Beinen; ärztlich bei Alter über 65, Amnesie über 30 min, Gerinnungshemmern oder neuer Verschlechterung Tage später.'],
    aerztlich: [
      'Mittelschweres bis schweres SHT: Akut und Frührehabilitation nach der S3 Koma und schwere Bewusstseinsstörung.',
      'AWMF 008-001 (Erwachsene) ohne gültige Fassung, Überarbeitung geplant 31.12.2026; 024-018 (Kinder) gültig bis 13.02.2027.'
    ],
    quellen: [
      { k: 'Q66', t: 'APTA Concussion 2020' }, { k: 'Q448', t: 'Amsterdam-Konsensus 2022' }, { k: 'Q449', t: 'Leddy 2021 Ausdauertraining' },
      { k: 'Q450', t: 'Schneider 2014 zervikovestibulär' }, { k: 'Q451', t: 'Leddy 2023 Aktivität' }, { k: 'Q38', t: 'S3 Koma und schwere Bewusstseinsstörung 2025' }
    ]
  },
  {
    id: 'K-NE06', karte: 'NE06', icd: ['G82', 'S14', 'S24', 'S34'], titel: 'Querschnittlähmung', kurzTitel: 'Querschnitt',
    dokuDiagnose: 'Querschnittlähmung', bereich: 'Neurologie', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['querschnitt', 'querschnittlähmung', 'paraplegie', 'tetraplegie', 'paraparese', 'tetraparese', 'dysreflexie'],
    untertitel: 'Inhalte aus der Wissenskarte NE06 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Schädigung des Rückenmarks mit Lähmung und Sensibilitätsstörung unterhalb der Läsion, eingeteilt nach ISNCSCI und AIS; in Deutschland 15,73 traumatische Fälle pro Million und Jahr, 58,7 % zervikal.',
      'Etwa drei Viertel der anfangs kompletten Läsionen bleiben komplett; wer früh Motorik unterhalb der Läsion hat, erholt sich meist deutlich. Ältere erholen sich schlechter.',
      'Kern sind Kraft und Ausdauer als Heimprogramm und bei chronisch Gehfähigen Gehtraining mit moderater bis hoher Intensität.',
      'Bei Läsion bei T6 und darüber Blutdruck messen: Dysreflexie verläuft oft ohne Beschwerden.'
    ],
    ziele: [
      { t: 'Selbstständigkeit nach Läsionshöhe', doku: 'größtmögliche Selbstständigkeit im Alltag', an: true },
      { t: 'Gehen bzw. Rollstuhlmobilität verbessern', doku: 'Verbesserung der Fortbewegung', an: true },
      { t: 'Kraft und Ausdauer für Herz und Stoffwechsel', doku: 'Steigerung von Kraft und Ausdauer', an: true },
      { t: 'Haut und Schulter schützen', doku: 'Vermeidung von Sekundärkomplikationen', an: false }
    ],
    stationen: { deton: ['Spastik und Beweglichkeit', 'Dehnen, Stehen, Lagern'], mobi: ['Gehen', 'chronisch gehfähig'], aktiv: ['Kraft und Ausdauer', 'Heimprogramm Pflicht'], berat: ['Kreislauf, Haut, Schulter', 'Kontrolle und Schutz'] },
    strang: {
      deton: [
        { t: 'Dehnen, Stehen, Lagern', info: 'für Beweglichkeit und Alltag; dass sie die Spastik senken, ist nicht belegt', doku: 'Dehnung, Stehtraining und Lagerung', ev: 'e', an: true },
        { t: 'CPM am Sprunggelenk', info: 'einzige Studie mit Effekt auf die Spastik', doku: 'CPM Sprunggelenk', ev: 's', an: false },
        { t: 'Tenodese erhalten', info: 'bei C6 Fingerbeuger nicht bei gestrecktem Handgelenk dehnen (Expertenmeinung)', doku: 'Erhalt des Tenodesegriffs', ev: 'e', an: false }
      ],
      mobi: [
        { t: 'Gehtraining mit hoher Intensität', info: 'chronisch (über 6 Monate) und gehfähig; Boden und Laufband, über 70 % HFR oder Borg ≥ 15, bis 30 Einheiten', doku: 'intensives Gehtraining', ev: 'l', an: true },
        { t: 'VR-gestütztes Training', info: 'chronisch gehfähig, stark empfohlen', doku: 'VR-gestütztes Training', ev: 'l', an: false },
        { t: 'Alltagsaufgaben beim Gehen', info: 'Bordstein, Türen, unebener Boden (kleine Fallserie)', doku: 'Gehtraining mit Alltagsaufgaben', ev: 'e', an: false },
        { t: 'Lokomat in der akuten Phase', info: 'in Metaanalysen vorn, Studien klein und teils widersprüchlich', doku: 'robotergestütztes Gangtraining', ev: 'u', an: false }
      ],
      aktiv: [
        { t: 'Kraft je Muskelgruppe', info: '3 Sätze je funktionierender großer Muskelgruppe, 2× pro Woche', doku: 'Krafttraining der erhaltenen Muskulatur', ev: 'l', an: true },
        { t: 'Ausdauer', info: 'mind. 20 min moderat bis intensiv, 2× pro Woche; für Herz und Stoffwechsel mind. 30 min 3× pro Woche', doku: 'Ausdauertraining', ev: 'l', an: true },
        { t: 'Atemmuskeltraining bei Tetraplegie', info: 'Expertenmeinung, in den Quellen nicht untersucht', doku: 'Atemmuskeltraining', ev: 'e', an: false },
        { t: 'Rollstuhl-Skills-Training', info: 'Expertenmeinung', doku: 'Rollstuhltraining', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Heimprogramm ist Pflicht', info: 'die Therapiestunde allein erreicht die Dosis nicht (Expertenmeinung)', doku: 'Anleitung Heimprogramm', ev: 'e', an: true },
        { t: 'Puls und Blutdruck kontrollieren', info: 'bei T6 und darüber Ruhewert als Ausgang, vor und während der Belastung messen', doku: 'Kreislaufkontrolle unter Belastung', ev: 'e', an: true },
        { t: 'Haut ansehen', info: 'Sitzbein, Kreuzbein, Fersen nach dem Training', doku: 'Hautkontrolle', ev: 'e', an: false },
        { t: 'Schulterschutz bei Rollstuhlnutzern', info: 'Außenrotatoren und Schulterblatt kräftigen, Pectoralis dehnen, Transfers auf gleicher Höhe (Expertenmeinung)', doku: 'Schulterschutzprogramm', ev: 'e', an: false }
      ]
    },
    vorsicht: [
      'Wenn Tempo und Strecke das Ziel sind: bei chronisch Gehfähigen kein Laufband mit Gewichtsentlastung, keine Robotik, keine Sitz- und Standbalance ohne VR.',
      'Lange Hebel, kräftiges passives Dehnen an Knie und Unterschenkel und Transfers mit Verdrehung nur vorsichtig (Expertenmeinung).',
      'Empfehlungsgrade und Dosen der S2e 179-009 sind noch nicht ausgewertet.'
    ],
    warn: ['Autonome Dysreflexie bei T6 und darüber (systolisch 20 mmHg über Ausgangswert): aufsetzen, Beine tief, Enges lösen, Blase und Darm prüfen, klingt es nicht ab → 112; neue Verschlechterung Monate oder Jahre später → sofort ärztlich; Schwellung an Femur oder Tibia nach Transfer, Druckstellen → ärztlich.'],
    aerztlich: [
      'NLI und AIS aus dem Klinikbrief übernehmen.',
      'S2e 179-009 gültig bis 10.07.2029; die S3 zur Akutbehandlung deckt nur die ersten 14 Tage ab.'
    ],
    quellen: [
      { k: 'Q37', t: 'S2e Querschnitt untere Extremität 2024' }, { k: 'Q31', t: 'Hornby 2020 CPG Lokomotion' }, { k: 'Q520', t: 'Martin Ginis 2018 Trainingsempfehlung' },
      { k: 'Q521', t: 'Hornby 2026 RCT hohe Intensität' }, { k: 'Q522', t: 'Mehrholz 2012 Cochrane Gehtraining' }, { k: 'Q524', t: 'Lee 2017 Dysreflexie' }
    ]
  },
  {
    id: 'K-NE07', karte: 'NE07', icd: ['H81.1', 'H81.2', 'H81.3', 'R42'], titel: 'Schwindel: Lagerungsschwindel (BPPV) und vestibuläre Störungen', kurzTitel: 'Schwindel / BPPV',
    dokuDiagnose: 'Schwindel (BPPV bzw. vestibuläre Störung)', bereich: 'Neurologie', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['schwindel', 'bppv', 'lagerungsschwindel', 'neuritis vestibularis', 'epley', 'semont', 'pppd', 'vestibulär'],
    untertitel: 'Inhalte aus der Wissenskarte NE07 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Drei Fragen sortieren fast jeden Schwindel: Dauer, Auslöser, Ohr- oder Neurozeichen.',
      'BPPV: unter 1 min bei Lagewechsel, 80–95 % hinterer Bogengang; mit SémontPLUS, Semont oder Epley in über 90 % primär erfolgreich, Rückfälle 34 % im ersten Jahr.',
      'Einseitige Unterfunktion und beidseitige Vestibulopathie: vestibuläre Reha (Level I, Grad A) mit Blickstabilisation, Habituation, Gleichgewicht und Gang als tägliches Heimprogramm.',
      'PPPD (funktioneller Schwindel, ≥ 3 Monate): langsam steigernde Habituation.'
    ],
    ziele: [
      { t: 'Kein Schwindel bei Lagewechsel', doku: 'Beseitigung des Lagerungsschwindels', an: true },
      { t: 'Scharf sehen bei Kopfbewegung, sicher gehen', doku: 'Verbesserung von Blickstabilisation und Gangsicherheit', an: true },
      { t: 'Bei Rückfall selbst behandeln', doku: 'Selbstbehandlung bei Rezidiv', an: true },
      { t: 'Stürze vermeiden', doku: 'Sturzprävention', an: false }
    ],
    stationen: { deton: ['Repositionsmanöver', 'BPPV'], mobi: ['Blickstabilisation', 'VOR, HWS'], aktiv: ['Gleichgewicht und Habituation', 'Heimprogramm'], berat: ['Aufklärung und Selbstbehandlung', 'Rückfall'] },
    strang: {
      deton: [
        { t: 'SémontPLUS, Semont oder Epley', info: 'hinterer Bogengang, gleichwertig; 1–2 Manöver reichen bei 79–93 %, nach 3 erfolglosen zum Spezialisten', doku: 'Repositionsmanöver', ev: 's', an: true },
        { t: 'Horizontaler Bogengang', info: 'geotrop: BBQ-Rotation, Gufoni oder 12 h Seitenlage auf dem gesunden Ohr; apogeotrop erst lösen, dann Gufoni-Variante', doku: 'Repositionsmanöver horizontaler Bogengang', ev: 'l', an: false },
        { t: 'Vorderer Bogengang: Yacovino', info: 'selten', doku: 'Yacovino-Manöver', ev: 'e', an: false }
      ],
      mobi: [
        { t: 'Blickstabilisation VOR x1', info: 'Punkt fixieren, Kopf zügig hin und her; Progression nah/fern, VOR x2, unruhiger Hintergrund, Stand, Gehen', doku: 'Blickstabilisationstraining', ev: 'l', an: true },
        { t: 'SNAGs bei zervikogenem Schwindel', info: 'erst Ausschluss anderer Ursachen', doku: 'SNAGs HWS', ev: 'e', an: false }
      ],
      aktiv: [
        { t: 'Vestibuläre Reha als Heimprogramm', info: 'akut mindestens 3× täglich, insgesamt 12 min/Tag; chronisch 3–5× täglich, mindestens 20 min/Tag, 4–6 Wochen; beidseitig 20–40 min/Tag, 5–7 Wochen', doku: 'vestibuläre Rehabilitation', ev: 'l', an: true },
        { t: 'Gleichgewicht und Gang', info: 'reduzierte Unterstützung, Augen zu, weiche Unterlage, Gehen mit Kopfdrehung', doku: 'Gleichgewichts- und Gangtraining', ev: 'l', an: false },
        { t: 'Habituation bei PPPD', info: 'langsam steigernd', doku: 'Habituationstraining', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Aufklären', info: 'mehr Schwindel in den ersten 2–5 Wochen ist normal; keine Lagerungsregeln nach dem Manöver, aber 60 s gesichert sitzen', doku: 'Aufklärung zu Verlauf und Verhalten nach dem Manöver', ev: 'l', an: true },
        { t: 'Selbstbehandlung bei Rückfall', info: 'Manöver 9× täglich über 3 Tage', doku: 'Anleitung zur Selbstbehandlung', ev: 'l', an: false }
      ]
    },
    vorsicht: [
      'Keine Lagerungsauflagen nach dem Manöver; Brandt-Daroff nicht als Erstbehandlung (25 % gegen 80 %); keine Übungen statt Manöver bei BPPV.',
      'Keine Augenübungen ohne Kopfbewegung bei Unterfunktion; HWS vor Lagerungstests screenen.',
      'HINTS gehört in die Hand geschulter Ärzte.'
    ],
    warn: ['Neuer Dauerschwindel über 24 h mit Spontannystagmus oder Gangunfähigkeit, Doppelbilder, Dysarthrie, Dysphagie, Drop Attacks, plötzliche Hörminderung mit Kopfschmerz, Dissektionszeichen oder abwärts schlagender Lagenystagmus ohne Latenz → ärztlich bzw. Notaufnahme (Schlaganfall möglich).'],
    aerztlich: [
      'Keine routinemäßigen Suppressiva und keine Bildgebung bei typischer BPPV.',
      'DEGAM 053-018 gültig bis 27.02.2030.'
    ],
    quellen: [
      { k: 'Q33', t: 'DEGAM S2k Schwindel 2025' }, { k: 'Q61', t: 'AAO-HNS BPPV 2017' }, { k: 'Q34', t: 'APTA Vestibular Rehab 2022' },
      { k: 'Q323', t: 'Cochrane Hilton 2014 Epley' }, { k: 'Q324', t: 'Cochrane McDonnell 2015 Reha' }
    ]
  },
  {
    id: 'K-NE08', karte: 'NE08', icd: ['G51.0'], titel: 'Periphere Fazialisparese', kurzTitel: 'Fazialisparese',
    dokuDiagnose: 'peripherer Fazialisparese', bereich: 'Neurologie', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['fazialisparese', 'facialisparese', 'gesichtslähmung', 'bell-parese', 'fazialis', 'synkinesien'],
    untertitel: 'Inhalte aus der Wissenskarte NE08 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Rasche einseitige periphere Lähmung des N. facialis mit Beteiligung der Stirn, eine Ausschlussdiagnose.',
      '71 % erholen sich ohne Behandlung ganz. Kortison innerhalb von 72 h ist ärztlich: unvollständige Erholung 17 gegen 28 %, NNT 10.',
      'Für Physiotherapie gibt es keine hochwertige Evidenz; gezielte Mimikübungen senken akut die Synkinesien, chronisch hilft Mime-Therapie über 3 Monate.',
      'Kleine, langsame Bewegungen vor dem Spiegel statt maximalem Grimassieren.'
    ],
    ziele: [
      { t: 'Mimik und Symmetrie verbessern', doku: 'Verbesserung der mimischen Funktion', an: true },
      { t: 'Synkinesien vermeiden', doku: 'Vermeidung von Synkinesien', an: true },
      { t: 'Auge schützen', doku: 'Schutz des Auges', an: false }
    ],
    stationen: { deton: ['Entspannung und Dehnung', 'Wange'], mobi: ['Mimik anbahnen', 'akut'], aktiv: ['Mimiktraining', 'Spiegel, Mime-Therapie'], berat: ['Augenschutz und Aufklärung', 'Kortison-Status'] },
    strang: {
      deton: [
        { t: 'Entspannung und Dehnung der Wange', info: 'bei Verspannung', doku: 'Entspannung und Dehnung der Wangenmuskulatur', ev: 'e', an: false }
      ],
      mobi: [
        { t: 'Gezielte Mimikübungen akut', info: 'bei schwerer Parese (HB IV–VI) begleitend zu Kortison; niedrige Evidenz, weniger Synkinesien', doku: 'gezielte Mimikübungen', ev: 's', an: true },
        { t: 'PNF nach Kabat', info: 'bei HB IV–V; OR 17,73 mit sehr breitem KI', doku: 'PNF nach Kabat (fazial)', ev: 'u', an: false }
      ],
      aktiv: [
        { t: 'Kleine kontrollierte Bewegungen vor dem Spiegel', info: 'langsam, symmetrisch, Einzelmuskel statt Grimasse; Häufigkeit nicht belegt', doku: 'Spiegeltraining der mimischen Muskulatur', ev: 'e', an: true },
        { t: 'Mime-Therapie chronisch', info: 'über 3 Monate; Sunnybrook +20,4', doku: 'Mime-Therapie', ev: 's', an: true }
      ],
      berat: [
        { t: 'Augenschutz', info: 'Lidschluss und Augenbeschwerden bei jedem Termin prüfen', doku: 'Beratung zum Augenschutz', ev: 'l', an: true },
        { t: 'Aufklärung', info: '71 % erholen sich ohne Behandlung ganz; Kortison-Status klären', doku: 'Aufklärung zu Verlauf und Prognose', ev: 'l', an: true }
      ]
    },
    vorsicht: [
      'Kein maximales Grimassieren (Expertenmeinung).',
      'Elektrostimulation nicht als Routine und nicht in der chronischen Phase, die Studien widersprechen sich.',
      'Häufigkeit und Wiederholungen sind nicht belegt; belegt sind nur Programme über 3 Monate.'
    ],
    warn: ['Arm- oder Beinschwäche, Sprach- oder Sehstörung, weitere Hirnnervenausfälle → 112; frische Parese unter 72 h ohne Kortison, Bläschen am Ohr, Ohrschmerz, Hörstörung oder schleichender Beginn → ärztlich; Augenschmerz, Rötung, Sehstörung → augenärztlich.'],
    aerztlich: [
      'Kortison innerhalb von 72 h; Virostatika allein nicht empfohlen.',
      'Keine volle Erholung nach 3 Monaten → Fazialis-Spezialist; chronisch Botulinumtoxin ergänzend.',
      'AWMF 030-013 gültig bis 27.02.2027, Inhalt nicht ausgewertet.'
    ],
    quellen: [
      { k: 'Q640', t: 'AAO-HNS 2013 Baugh' }, { k: 'Q641', t: 'Madhok 2016 Cochrane Kortison' }, { k: 'Q642', t: 'Teixeira 2011 Cochrane Physiotherapie' },
      { k: 'Q643', t: 'Peitersen 2002 Spontanverlauf' }, { k: 'Q644', t: 'Beurskens 2006 Mime-Therapie' }, { k: 'Q645', t: 'Choi 2026 Elektrostimulation akut' }
    ]
  },
  {
    id: 'K-NE09', karte: 'NE09', icd: ['G61.0'], titel: 'Guillain-Barré-Syndrom', kurzTitel: 'GBS',
    dokuDiagnose: 'Guillain-Barré-Syndrom', bereich: 'Neurologie', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['guillain-barré', 'guillain barre', 'gbs', 'aufsteigende lähmung', 'polyradikulitis'],
    untertitel: 'Inhalte aus der Wissenskarte NE09 (Karte noch nicht vertieft), nach Vorgehen sortiert',
    abriss: [
      'Akute entzündliche Polyneuropathie mit aufsteigender Lähmung, oft nach einem Infekt.',
      'Akut intensivmedizinisch, die Erholung dauert Monate; Fatigue ist häufig.',
      'Akut Lagerung, Atemtherapie und Kontrakturprophylaxe, danach Kraft, Ausdauer, Gleichgewicht und Gang mit vorsichtiger Steigerung nach der Ermüdung am Folgetag.'
    ],
    ziele: [
      { t: 'Kraft und Gehfähigkeit zurückgewinnen', doku: 'Wiederaufbau von Kraft und Gehfähigkeit', an: true },
      { t: 'Fatigue steuern, Überlastung vermeiden', doku: 'belastungsangepasste Steigerung', an: true },
      { t: 'Kontrakturen vermeiden', doku: 'Kontrakturprophylaxe', an: false }
    ],
    stationen: { deton: ['Akutphase', 'Lagerung und Atmung'], mobi: ['Kontrakturprophylaxe', 'Beweglichkeit erhalten'], aktiv: ['Kraft, Ausdauer, Gang', 'vorsichtig steigern'], berat: ['Fatigue und Hilfsmittel', 'Steigerung steuern'] },
    strang: {
      deton: [
        { t: 'Lagerung', info: 'Akutphase', doku: 'Lagerung', ev: 'e', an: true },
        { t: 'Atemtherapie', info: 'Akutphase', doku: 'Atemtherapie', ev: 'e', an: true }
      ],
      mobi: [
        { t: 'Kontrakturprophylaxe', info: 'Akutphase', doku: 'Kontrakturprophylaxe', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'Kraft und Ausdauer', info: 'vorsichtig steigern, Überlastung vermeiden', doku: 'dosiertes Kraft- und Ausdauertraining', ev: 'e', an: true },
        { t: 'Gleichgewicht und Gang', info: 'in der Erholungsphase', doku: 'Gleichgewichts- und Gangtraining', ev: 'e', an: true }
      ],
      berat: [
        { t: 'Steigerung nach dem Folgetag', info: 'Ermüdung am Folgetag bestimmt die nächste Stufe', doku: 'Belastungssteuerung nach Ermüdung', ev: 'e', an: true },
        { t: 'Hilfsmittel', info: 'in der Erholungsphase', doku: 'Hilfsmittelberatung', ev: 'e', an: false }
      ]
    },
    vorsicht: [
      'Überlastung vermeiden (Fatigue), Steigerung nach der Ermüdung am Folgetag richten.',
      'Karte noch nicht fachlich geprüft, die Leitlinie ist abgelaufen; MRC-Sum-Score noch prüfen.'
    ],
    warn: ['In der Akutphase Atemlähmung, Herzrhythmus- und Blutdruckschwankungen → Klinik.'],
    aerztlich: ['Die S2e Neuropathien inkl. GBS von 2018 ist abgelaufen.'],
    quellen: [
      { k: 'Q36', t: 'S2e Neuropathien inkl. GBS 2018 (abgelaufen)' }
    ]
  },
  {
    id: 'K-NE10', karte: 'NE10', icd: ['G57.3'], titel: 'Periphere Nervenläsion (Beispiel Peroneusparese)', kurzTitel: 'Peroneusparese',
    dokuDiagnose: 'peripherer Nervenläsion (Peroneusparese)', bereich: 'Neurologie', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['peroneusparese', 'fußheberparese', 'fallfuß', 'steppergang', 'nervenläsion', 'peronaeus'],
    untertitel: 'Inhalte aus der Wissenskarte NE10 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Schädigung des N. peroneus am Fibulaköpfchen durch Druck (Beine übereinanderschlagen, Gips, Lagerung), Gewichtsverlust oder Trauma; Fußheberschwäche mit Steppergang.',
      'Von der L5-Radikulopathie abgrenzen: dort ist zusätzlich der Tibialis posterior schwach.',
      'Druckparesen nach Gewichtsverlust erholen sich fast immer (29 von 30 in 3 Wochen bis 3 Monaten); ohne Erholung nach etwa 3 Monaten ärztlich, nicht über 12 Monate warten.',
      'Physiotherapie ist kaum untersucht (keine RCTs), die Dosierungen sind Expertenmeinung.'
    ],
    ziele: [
      { t: 'Fußheberkraft zurückgewinnen', doku: 'Wiederaufbau der Fußheberkraft', an: true },
      { t: 'Sicher gehen ohne Stolpern', doku: 'Verbesserung der Gangsicherheit', an: true },
      { t: 'Spitzfuß vermeiden', doku: 'Spitzfußprophylaxe', an: false },
      { t: 'Orthese abbauen', doku: 'Abbau der Fußheberorthese', an: false }
    ],
    stationen: { deton: ['Schutz und Lagerung', 'Druck vermeiden'], mobi: ['Beweglichkeit erhalten', 'Spitzfuß vorbeugen'], aktiv: ['Kraft nach MRC', 'Fußheber, Evertoren'], berat: ['Orthese und Verlauf', 'MRC dokumentieren'] },
    strang: {
      deton: [
        { t: 'Druck am Fibulaköpfchen vermeiden', info: 'Beine nicht übereinanderschlagen, Lagerung und Gips prüfen', doku: 'Beratung zur Druckentlastung des N. peroneus', ev: 'e', an: true },
        { t: 'Nachts neutral lagern', info: 'gegen Spitzfuß', doku: 'Neutrallagerung des Fußes', ev: 'e', an: false }
      ],
      mobi: [
        { t: 'Wade dehnen', info: 'gegen Spitzfuß', doku: 'Dehnung der Wadenmuskulatur', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'MRC 0–2: assistiv', info: 'assistive Übungen, Biofeedback, ggf. Elektrostimulation (Evidenz begrenzt)', doku: 'assistives Training der Fußheber', ev: 'u', an: true },
        { t: 'Ab MRC 3: gegen Widerstand', info: 'erst gegen Schwerkraft, dann gegen Band; Fußheber und Evertoren 2–3 × 8–15, 2–3× pro Woche (Expertenmeinung)', doku: 'Kräftigung von Fußhebern und Evertoren', ev: 'e', an: true },
        { t: 'Gangschulung und Gleichgewicht', info: 'Steppergang abbauen', doku: 'Gangschulung und Gleichgewichtstraining', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Fußheberorthese', info: 'für sicheres Gehen in der Wartezeit, nicht als Dauerlösung ohne Erholung; ab MRC 3 abbauen. Daten aus Schlaganfall-Studien übertragen', doku: 'Beratung zur Fußheberorthese', ev: 'u', an: true },
        { t: 'MRC bei jedem Termin dokumentieren', info: 'nach etwa 3 Monaten ohne Erholung ärztlich zur operativen Abklärung', doku: 'Verlaufskontrolle der Kraftgrade', ev: 's', an: true }
      ]
    },
    vorsicht: [
      'Orthese nicht als Dauerlösung ohne Erholung.',
      'AFO und FES nur aus Schlaganfall-Studien übertragen; es gibt keine MCID.',
      'Nicht zu lange abwarten: Dekompression nach über 12 Monaten ist schlechter.'
    ],
    warn: ['Starker Schmerz und harte Loge am Unterschenkel (Kompartment) oder Cauda-Zeichen → 112; Parese nach Knieluxation oder Fraktur → sofort ärztlich; rasch zunehmende oder beidseitige Schwäche, zentrale Zeichen, Masse am Fibulaköpfchen oder zusätzliche L5-Zeichen → ärztlich.'],
    aerztlich: [
      'Nach etwa 3 Monaten ohne Erholung zur operativen Abklärung; Dekompression nach über 12 Monaten schlechter (OR 0,23).',
      'Bei Engpass ist die Neurolyse besser als die AFO (OR 4,6); bei Durchtrennung und Traktion Sehnentransfer.',
      'AWMF 005-010 S3 gültig bis 29.09.2028, Inhalt nicht ausgewertet.'
    ],
    quellen: [
      { k: 'Q394', t: 'Woodmass 2015 SR Knieluxation' }, { k: 'Q395', t: 'Derr 2009 Elektrodiagnostik Prognose' }, { k: 'Q396', t: 'Wilson 2019 Dekompression MA' },
      { k: 'Q397', t: 'Klifto 2022 IPD-MA nach Mechanismus' }, { k: 'Q398', t: 'Mackay 2022 SR Trauma' }, { k: 'Q399', t: 'Cruz-Martinez 2000 Gewichtsverlust' }
    ]
  },
  {
    id: 'K-NE11', karte: 'NE11', icd: ['G44.2', 'G43.0', 'G43.1', 'G44.88', 'R51'], titel: 'Kopfschmerz: Spannungskopfschmerz, Migräne, zervikogener Kopfschmerz', kurzTitel: 'Kopfschmerz',
    dokuDiagnose: 'Kopfschmerzen (Spannungskopfschmerz, Migräne oder zervikogen)', bereich: 'Neurologie', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['kopfschmerz', 'kopfschmerzen', 'spannungskopfschmerz', 'migräne', 'zervikogener kopfschmerz', 'cervicogener kopfschmerz', 'moh'],
    untertitel: 'Inhalte aus der Wissenskarte NE11 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Erst sekundäre Ursachen ausschließen (SNNOOP10), dann den Typ bestimmen; der Kopfschmerzkalender ist Pflicht.',
      'Spannungskopfschmerz: beidseitig, drückend, häufigster primärer Kopfschmerz; kombinierte Physiotherapie, Entspannung und Biofeedback haben den höchsten Empfehlungsgrad, Manipulation wirkt nicht.',
      'Migräne: einseitig, pulsierend, Bewegung verschlimmert; Ausdauer- und Krafttraining wirken prophylaktisch.',
      'Zervikogener Kopfschmerz: seitenkonstant vom Nacken nach vorn, FRT positiv; Manualtherapie plus Übungen wirken bis 12 Monate.'
    ],
    ziele: [
      { t: 'Kopfschmerztage um mindestens 50 % senken', doku: 'Reduktion der Kopfschmerztage', an: true },
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: true },
      { t: 'HWS-Rotation verbessern (FRT)', doku: 'Verbesserung der oberen HWS-Rotation', an: false },
      { t: 'Auslöser und Einnahmetage selbst im Blick', doku: 'Selbstmanagement mit Kopfschmerzkalender', an: false }
    ],
    stationen: { deton: ['Entspannung', 'PMR, Biofeedback'] },
    strang: {
      deton: [
        { t: 'PMR oder autogenes Training', info: 'beim Spannungskopfschmerz, kombiniert mit Physiotherapie und Biofeedback', doku: 'Entspannungsverfahren', ev: 'l', an: true },
        { t: 'Pfefferminzöl akut', info: 'beim Spannungskopfschmerz 10%ig auf Stirn und Schläfen', doku: 'Anleitung zur Akutbehandlung mit Pfefferminzöl', ev: 'l', an: false }
      ],
      mobi: [
        { t: 'Mobilisation oder Manipulation C0–C3 und obere BWS', info: 'zervikogen, plus Übungen, 6 Wochen; Effekt bis 12 Monate; nur nach Gefäßscreening (IFOMPT)', doku: 'Manuelle Therapie obere HWS/BWS', ev: 's', an: true },
        { t: 'Self-SNAG C1/C2', info: 'Gurt auf den hinteren Atlasbogen, in die eingeschränkte Rotation drehen, 2× täglich', doku: 'Anleitung Self-SNAG C1/C2', ev: 's', an: false },
        { t: 'Mobilisation beim Spannungskopfschmerz', info: 'nur plus Übungen', doku: 'Mobilisation HWS', ev: 's', an: false }
      ],
      aktiv: [
        { t: 'Kraniozervikale Flexion', info: 'Ja-Nicken in Rückenlage, mit Biofeedback auf der höchsten sauberen Stufe 10 × 10 s', doku: 'Training der tiefen Halsflexoren', ev: 's', an: true },
        { t: 'Ausdauer bei Migräne', info: '3× pro Woche 30–40 min über mindestens 3 Monate (Grad B); nicht in der Attacke', doku: 'Ausdauertraining zur Migräneprophylaxe', ev: 'l', an: true },
        { t: 'Kraft Nacken und Schultergürtel', info: 'Rudern, Außenrotation, Nackenextension mit Band, 3 × 10; mindestens 6 Wochen', doku: 'Kräftigung der Nacken- und Schultergürtelmuskulatur', ev: 'l', an: false }
      ],
      berat: [
        { t: 'Kopfschmerzkalender', info: 'Kopfschmerztage und Einnahmetage; Erfolg nach 4–6 Wochen prüfen', doku: 'Anleitung Kopfschmerzkalender', ev: 'l', an: true },
        { t: 'Übergebrauch ansprechen', info: 'Triptane ab 10, einfache Schmerzmittel ab 15 Einnahmetagen im Monat → ärztlich', doku: 'Hinweis auf möglichen Medikamentenübergebrauch', ev: 'l', an: false },
        { t: 'Schmerzedukation bei Migräne', info: 'ergänzend', doku: 'Schmerzedukation', ev: 's', an: false }
      ]
    },
    vorsicht: [
      'HWS-Manipulation nicht als einzige Therapie beim Spannungskopfschmerz; Manuelle Therapie allein bei Migräne ist schwach belegt.',
      'Keine HWS-Technik ohne Gefäßscreening, keine positionellen VBI-Tests, keine Selbstmanipulation als Hausaufgabe.',
      'Dehnen nicht als einziges Programm (erhöhte in Studien die Frequenz).'
    ],
    warn: ['Donnerschlagkopfschmerz, neurologische Ausfälle, Fieber mit Nackensteife oder Dissektionszeichen → Notaufnahme; über 50 mit neuem Schläfen- oder Kauschmerz → am selben Tag ärztlich; neues oder geändertes Muster, lageabhängig, bei Husten oder Pressen → vorher ärztlich klären.'],
    aerztlich: [
      'Bei Verdacht auf Medikamentenübergebrauch ärztlich ansprechen.',
      'Die S1 030-131 (Übergebrauch) gilt nur bis 30.11.2026 und ist in Überarbeitung.'
    ],
    quellen: [
      { k: 'Q169', t: 'DGN/DMKG S1 Spannungskopfschmerz 030/077 (bis 12/2028)' }, { k: 'Q170', t: 'DGN/DMKG S1 Migräne 030/057 (08/2025, bis 08/2028)' }, { k: 'Q171', t: 'DGN/DMKG S1 MOH 030/131 (verlängert bis 30.11.2026)' },
      { k: 'Q290', t: 'Jull 2002 RCT' }, { k: 'Q291', t: 'IFOMPT Cervical Framework 2023' }, { k: 'Q292', t: 'Jung 2022 NMA Spannungskopfschmerz' }
    ]
  },
  {
    id: 'K-IM01', karte: 'IM01', icd: ['J44'], titel: 'COPD', kurzTitel: 'COPD',
    dokuDiagnose: 'COPD', bereich: 'Innere', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['copd', 'chronisch obstruktive lungenerkrankung', 'lungenemphysem', 'emphysem', 'raucherlunge', 'lungensport'],
    untertitel: 'Inhalte aus der Wissenskarte IM01 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Chronisch obstruktive Lungenerkrankung, meist durch Rauchen: Atemnot bei Belastung, Husten, Auswurf, Exazerbationen.',
      'Körperliches Training und Atemphysiotherapie gehören zur nicht-medikamentösen Basistherapie.',
      'Pneumologische Reha bringt im 6MWT +44 m; nach Exazerbation senkt sie die Wiederaufnahmen (OR 0,44).',
      'Training mindestens 2 bis 3× pro Woche über Wochen bis Monate, SpO₂ und Borg mitlaufen lassen.'
    ],
    ziele: [
      { t: 'Weniger Atemnot im Alltag', doku: 'Reduktion der Belastungsdyspnoe', an: true },
      { t: 'Längere Gehstrecke', doku: 'Verlängerung der Gehstrecke', an: true },
      { t: 'Exazerbationen besser beherrschen', doku: 'Selbstmanagement bei Exazerbationen', an: true },
      { t: 'Beinkraft steigern', doku: 'Kräftigung der Beinmuskulatur', an: false }
    ],
    stationen: { deton: ['Atemerleichterung', 'Lippenbremse, Stellungen'], mobi: ['Sekretmanagement', 'Drainage, Huffing'], aktiv: ['Ausdauer und Kraft', 'Intervall, Atemmuskeltraining'], berat: ['Selbstmanagement', 'Lungensport, Notfallplan'] },
    strang: {
      deton: [
        { t: 'Lippenbremse und atemerleichternde Stellungen', info: 'bei Belastung; Kutschersitz, Torwartstellung', doku: 'Atemtherapie mit Lippenbremse und atemerleichternden Stellungen', ev: 'l', an: true }
      ],
      mobi: [
        { t: 'Sekretmanagement', info: 'autogene Drainage, Huffing, PEP-Geräte (z. B. Flutter)', doku: 'Sekretmobilisation', ev: 'l', an: true }
      ],
      aktiv: [
        { t: 'Intervalltraining auf dem Rad', info: '30 s / 30 s oder 1 min / 1 min, Borg Atemnot 4–6; 2–3× pro Woche über Wochen bis Monate', doku: 'Intervall-Ausdauertraining', ev: 's', an: true },
        { t: 'Krafttraining', info: 'Sit-to-Stand, Beinpresse, Rudern, 3 × 8–12', doku: 'Krafttraining', ev: 's', an: true },
        { t: 'Gehen mit Rollator', info: 'wenn die Atemnot hoch ist', doku: 'Gehtraining mit Rollator', ev: 'e', an: false },
        { t: 'Atemmuskeltraining', info: 'ergänzend bei schwacher Inspirationsmuskulatur, ab 30 % PImax (Konsens)', doku: 'inspiratorisches Atemmuskeltraining', ev: 'l', an: false }
      ],
      berat: [
        { t: 'Lungensport-Gruppe', info: 'für die Zeit danach; Erhaltungstraining bedingt empfohlen', doku: 'Empfehlung Lungensport', ev: 'l', an: true },
        { t: 'Reha nach Exazerbation', info: 'senkt Wiederaufnahmen (OR 0,44), 6MWT +62 m', doku: 'Empfehlung pneumologische Rehabilitation', ev: 's', an: false },
        { t: 'Selbstmanagement', info: 'Notfallplan; Inhalationstechnik ärztlich bzw. pflegerisch', doku: 'Beratung zum Selbstmanagement', ev: 'l', an: false }
      ]
    },
    vorsicht: [
      'SpO₂ während der Belastung mitmessen.',
      'Trainingsintensitäten stammen aus Konsens (60–80 % Spitzenleistung).'
    ],
    warn: ['Sättigung unter 88 % oder Abfall um mehr als 4 % beim Training, neue starke Atemnot, Fieber mit verfärbtem Auswurf, Brustschmerz, Bluthusten, neue Ödeme → ärztlich; Atemnot in Ruhe, Verwirrtheit, blaue Lippen → 112.'],
    aerztlich: [
      'Schweregrad (GOLD) und Sauerstofftherapie ärztlich.',
      'ATS 2023: Reha stark empfohlen bei stabiler COPD und nach Krankenhaus, Telereha als Option.'
    ],
    quellen: [
      { k: 'Q39', t: 'NVL COPD nvl-003' }, { k: 'Q344', t: 'ATS-Leitlinie 2023 Rochester' }, { k: 'Q345', t: 'Cochrane McCarthy 2015' },
      { k: 'Q346', t: 'Cochrane Puhan 2016' }, { k: 'Q347', t: 'GOLD 2023 Agustí' }, { k: 'Q348', t: 'Holland 2010 MCID 6MWT' }
    ]
  },
  {
    id: 'K-IM02', karte: 'IM02', icd: ['J45'], titel: 'Asthma bronchiale', kurzTitel: 'Asthma',
    dokuDiagnose: 'Asthma bronchiale', bereich: 'Innere', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['asthma', 'asthma bronchiale', 'belastungsasthma', 'hyperventilation', 'atemnot', 'lungensport'],
    untertitel: 'Inhalte aus der Wissenskarte IM02 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Chronisch-entzündliche Atemwegserkrankung mit variabler Verengung der Bronchien; Medikamente bleiben die Basis.',
      'Ausdauertraining ist sicher und verbessert Fitness und Kontrolle, nicht die Lungenfunktion.',
      'Atemschulung verbessert die Lebensqualität; Aufwärmen mit Intervallen mindert das Belastungsasthma.',
      'Training senkt die Medikamente nicht von selbst, eine Reduktion ist ärztlich.'
    ],
    ziele: [
      { t: 'Fitness und Belastbarkeit steigern', doku: 'Steigerung der Belastbarkeit', an: true },
      { t: 'Asthmakontrolle verbessern (ACT)', doku: 'Verbesserung der Asthmakontrolle', an: true },
      { t: 'Ruhiges Atemmuster, weniger Hyperventilation', doku: 'Normalisierung des Atemmusters', an: false },
      { t: 'Belastung ohne Anfall', doku: 'Vermeidung von Belastungsasthma', an: false }
    ],
    stationen: { deton: ['Atemschulung', 'Breathing retraining'], mobi: ['Aufwärmen', 'Intervalle gegen Belastungsasthma'], aktiv: ['Ausdauer und Atemmuskeln', 'nach Befinden'], berat: ['Selbstmanagement', 'Spray, Lungensport'] },
    strang: {
      deton: [
        { t: 'Breathing retraining', info: 'bei Restbeschwerden oder Hyperventilation, 3 Sitzungen plus Heimprogramm', doku: 'Atemschulung', ev: 's', an: true }
      ],
      mobi: [
        { t: 'Aufwärmen mit Intervallen', info: 'hochintensiv oder wechselnd; senkt den FEV1-Abfall um gut 10 Prozentpunkte', doku: 'Aufwärmen mit Intervallen', ev: 's', an: true }
      ],
      aktiv: [
        { t: 'Ausdauertraining', info: 'mindestens 20 min, 2× pro Woche, mindestens 4 Wochen, besser 8–12; Gehen, Joggen, Rad, Laufband', doku: 'Ausdauertraining', ev: 's', an: true },
        { t: 'Atemmuskeltraining', info: 'über 50 % PImax, länger als 6 Wochen, bei schwacher Atemmuskulatur', doku: 'Atemmuskeltraining', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Spray vor Belastung', info: 'nach ärztlicher Verordnung; Bedarfsspray griffbereit', doku: 'Beratung zur Bedarfsmedikation vor Belastung', ev: 'l', an: true },
        { t: 'Weitertrainieren nach der Serie', info: 'z. B. Lungensport (Expertenmeinung)', doku: 'Empfehlung Lungensport', ev: 'e', an: false }
      ]
    },
    vorsicht: [
      'Intensität nach Befinden; Borg- oder Herzfrequenzwerte sind nicht belegt.',
      'Medikamente nicht durch das Training reduzieren, das ist ärztlich.',
      'An ILO denken (Auslöser Sprechen, Schreien, Schlucken).'
    ],
    warn: ['Schwerer Anfall (Sprechen kaum möglich, Notfallspray wirkt nicht, Lippen blau, Erschöpfung oder Verwirrtheit) → 112; häufiger Griff zum Notfallspray, Kortisonspray abgesetzt oder frühere Intensivaufnahme wegen Asthma → ärztlich.'],
    aerztlich: [
      'Beta-2-Spray vor Belastung nach ärztlicher Verordnung (ATS 2013, ältere Leitlinie).',
      'NVL Asthma in Überarbeitung, Inhalt nicht ausgewertet.'
    ],
    quellen: [
      { k: 'Q40', t: 'NVL Asthma nvl-002 v5.0' }, { k: 'Q634', t: 'Carson 2013 Cochrane Training' }, { k: 'Q636', t: 'Santino 2020 Cochrane Atemübungen' },
      { k: 'Q637', t: 'Bruton 2018 BREATHE' }, { k: 'Q638', t: 'Stickland 2012 Aufwärmen' }, { k: 'Q639', t: 'Parsons 2013 ATS Belastungsasthma' }
    ]
  },
  {
    id: 'K-IM03', karte: 'IM03', icd: ['I50'], titel: 'Chronische Herzinsuffizienz', kurzTitel: 'Herzinsuffizienz',
    dokuDiagnose: 'chronischer Herzinsuffizienz', bereich: 'Innere', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['herzinsuffizienz', 'herzschwäche', 'chronische herzinsuffizienz', 'hfref', 'hfpef', 'nyha'],
    untertitel: 'Inhalte aus der Wissenskarte IM03 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Das Herz pumpt nicht ausreichend: Atemnot, Müdigkeit, Ödeme.',
      'Bei stabiler Erkrankung senkt Training die Krankenhausaufnahmen (RR 0,69) und verbessert die Lebensqualität, die Sterblichkeit nicht sicher.',
      'Moderates Dauertraining über Borg und Talk-Test steuern, HIIT bringt keinen Vorteil; Kraft ergänzend.',
      'Warnzeichen vor jeder Einheit abfragen; ohne dauerhaften Anschluss ist der Effekt nach einem Jahr weg.'
    ],
    ziele: [
      { t: 'Belastbarkeit im Alltag', doku: 'Steigerung der Alltagsbelastbarkeit', an: true },
      { t: 'Weniger Atemnot', doku: 'Reduktion der Belastungsdyspnoe', an: true },
      { t: 'Teilhabe', doku: 'Verbesserung der Teilhabe', an: false },
      { t: 'Gewicht und Warnzeichen selbst kontrollieren', doku: 'Selbstkontrolle von Gewicht und Warnzeichen', an: false }
    ],
    stationen: { deton: ['Atmung', 'Atemmuskeltraining'], mobi: ['Vorcheck', 'Warnzeichen vor jeder Einheit'], aktiv: ['Ausdauer und Kraft', 'moderat'], berat: ['Belastungssteuerung', 'Borg, Talk-Test, Gruppe'] },
    strang: {
      deton: [
        { t: 'Inspiratorisches Muskeltraining', info: 'bei Atemmuskelschwäche; ca. 30 % PImax, 30 min pro Tag, 8–12 Wochen (Expertenmeinung)', doku: 'inspiratorisches Atemmuskeltraining', ev: 's', an: false }
      ],
      mobi: [
        { t: 'Warnzeichen vor jeder Einheit abfragen', info: 'Gewicht, Ödeme, Atemnot in Ruhe oder nachts; nur bei stabiler Erkrankung trainieren', doku: 'Abfrage der Warnzeichen vor Belastung', ev: 'e', an: true },
        { t: 'Blutdruck, Puls und SpO₂', info: 'vor und während der Belastung', doku: 'Kontrolle der Vitalparameter', ev: 'e', an: false }
      ],
      aktiv: [
        { t: 'Moderates Dauertraining', info: '3–5× pro Woche, 20–60 min, Beginn Borg 11–13, langsam steigern; HIIT ohne Vorteil', doku: 'moderates Ausdauertraining', ev: 's', an: true },
        { t: 'Kraft ergänzend', info: '2–3× pro Woche, 30–40 % 1RM Arme, 40–60 % 1RM Beine, 10–15 Wdh., keine Pressatmung (Expertenmeinung)', doku: 'ergänzendes Krafttraining', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Steuerung über Borg und Talk-Test', info: 'unter Betablocker ist der Puls ungeeignet; bei ICD Puls 10–20/min unter der Detektionsgrenze', doku: 'Belastungssteuerung nach Borg und Talk-Test', ev: 's', an: true },
        { t: 'Gewicht täglich', info: 'über 2 kg in 3 Tagen → kein Training, ärztlich', doku: 'Anleitung zur täglichen Gewichtskontrolle', ev: 'e', an: true },
        { t: 'Dauerhaft weiter in der Gruppe', info: 'z. B. Herzinsuffizienzgruppe; ohne Anschluss nach einem Jahr kein Effekt', doku: 'Empfehlung Herzinsuffizienzgruppe', ev: 's', an: false }
      ]
    },
    vorsicht: [
      'Nur bei stabiler Erkrankung trainieren.',
      'Keine Pressatmung beim Krafttraining; unter Betablocker nicht nach Puls steuern.',
      'Dosierungen der Durchführung sind Expertenmeinung, ESC-Tabellen nicht im Original geprüft.'
    ],
    warn: ['Vor dem Training: Gewicht über 2 kg in 3 Tagen, neue Ödeme, Atemnot in Ruhe, im Liegen oder nachts → kein Training, ärztlich. Abbruch bei Brustenge, starker Atemnot, Schwindel, neuer Rhythmusstörung, Blutdruckabfall, Borg über 15–17; Brustschmerz in Ruhe, Bewusstlosigkeit → 112.'],
    aerztlich: [
      'NYHA, Ejektionsfraktion, Medikamente, Defibrillator oder Schrittmacher ärztlich; bei ICD die Detektionsgrenze beim Kardiologen erfragen.',
      'NVL Herzinsuffizienz abgelaufen und in Überarbeitung.'
    ],
    quellen: [
      { k: 'Q41', t: 'NVL Herzinsuffizienz Vers. 4 (abgelaufen)' }, { k: 'Q63', t: 'ESC 2020 Sportkardiologie' }, { k: 'Q454', t: 'Cochrane Molloy 2024' },
      { k: 'Q456', t: 'SMARTEX-HF 2017' }, { k: 'Q457', t: 'OptimEx-Clin 2021' }, { k: 'Q459', t: 'Azambuja 2020 IMT' }
    ]
  },
  {
    id: 'K-IM04', karte: 'IM04', icd: ['I25', 'I21'], titel: 'Koronare Herzkrankheit / nach Herzinfarkt', kurzTitel: 'KHK / Herzinfarkt',
    dokuDiagnose: 'koronarer Herzkrankheit', bereich: 'Innere', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['khk', 'koronare herzkrankheit', 'herzinfarkt', 'myokardinfarkt', 'stent', 'bypass', 'acvb', 'herzsport'],
    untertitel: 'Inhalte aus der Wissenskarte IM04 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Verengung der Herzkranzgefäße mit Angina pectoris, Herzinfarkt, Stent oder Bypass.',
      'Trainingsbasierte Reha senkt Herzinfarkte (RR 0,72), Klinikaufnahmen und Gesamtmortalität und verbessert die Lebensqualität.',
      'Ausdauer plus Kraft nach Belastungsuntersuchung mit ärztlicher Trainingsherzfrequenz; HIIT nur bei stabiler KHK und überwacht.',
      'Langfristig Herzsportgruppe und Lebensstil: Bewegung im Alltag, Rauchstopp, Gewicht.'
    ],
    ziele: [
      { t: 'Belastbarkeit steigern', doku: 'Steigerung der körperlichen Belastbarkeit', an: true },
      { t: 'Risiko weiterer Ereignisse senken', doku: 'Sekundärprävention', an: true },
      { t: 'Selbstständig sicher trainieren (Herzsport)', doku: 'selbstständiges Training in der Herzsportgruppe', an: true },
      { t: 'Risikofaktoren angehen', doku: 'Reduktion der Risikofaktoren', an: false }
    ],
    stationen: { deton: ['Vorcheck', 'Blutdruck, Puls'], mobi: ['Nach Sternotomie', 'Bewegung nach Bypass'], aktiv: ['Ausdauer und Kraft', 'nach Belastungs-EKG'], berat: ['Lebensstil und Herzsport', 'Belastungssteuerung'] },
    strang: {
      deton: [
        { t: 'Blutdruck und Puls vor und nach Belastung', info: 'Trainingsherzfrequenz aus der ärztlichen Belastungsuntersuchung', doku: 'Kontrolle von Blutdruck und Puls', ev: 'l', an: true }
      ],
      mobi: [
        { t: 'Keep Your Move in the Tube', info: 'nach Bypass mit Sternotomie; Vorgaben des Operateurs, starre Kilogrammgrenzen sind nicht belegt (Beobachtungsstudie)', doku: 'sternumschonende Bewegungsschulung', ev: 'u', an: false }
      ],
      aktiv: [
        { t: 'Ausdauertraining', info: '20–40 min bei 60–80 % der max. Kapazität, 2–3× pro Woche', doku: 'Ausdauertraining', ev: 's', an: true },
        { t: 'Krafttraining zusätzlich', info: 'etwa 7 Übungen, 3 × 10–12, ohne Pressatmung; Ausdauer dafür nicht kürzen', doku: 'Krafttraining', ev: 's', an: true },
        { t: 'HIIT', info: 'nur bei stabiler KHK, nach Belastungstest, überwacht', doku: 'hochintensives Intervalltraining', ev: 's', an: false }
      ],
      berat: [
        { t: 'Lebensstil', info: 'Bewegung im Alltag, Rauchstopp, Gewicht', doku: 'Lebensstilberatung', ev: 'l', an: true },
        { t: 'Herzsportgruppe', info: 'für die Zeit danach', doku: 'Empfehlung Herzsportgruppe', ev: 'l', an: true },
        { t: 'Steuerung über Borg und Talk-Test', info: 'Borg-Zielbereiche nicht im Original geprüft', doku: 'Belastungssteuerung nach Borg und Talk-Test', ev: 'e', an: false }
      ]
    },
    vorsicht: [
      'Keine Pressatmung beim Krafttraining.',
      'HIIT nur bei stabiler KHK, nach Belastungstest und überwacht.',
      'Borg-Zielbereiche und Leitlinienstellen sind nicht im Original geprüft.'
    ],
    warn: ['Brustschmerz, Druck oder Enge über 5 min, der in Ruhe oder nach Nitro nicht weggeht, Angina in Ruhe, Kaltschweiß, Synkope → 112; im Training Angina, Atemnot, Schwindel, Blutdruckabfall, neue Rhythmusstörung → abbrechen, ärztlich.'],
    aerztlich: [
      'Trainingsherzfrequenz aus dem Belastungs-EKG ärztlich.',
      'Nach Bypass gelten die Vorgaben des Operateurs.',
      'ESC-Reha-Leitlinie 2026 und ESC 2020 noch nicht gelesen.'
    ],
    quellen: [
      { k: 'Q42', t: 'NVL KHK Vers. 7' }, { k: 'Q460', t: 'Cochrane 2026 kardiale Reha' }, { k: 'Q462', t: 'McGregor 2023 HIIT' },
      { k: 'Q463', t: 'BJSM 2024 Ausdauer plus Kraft' }, { k: 'Q464', t: 'PM&R 2021 Keep Your Move in the Tube' }, { k: 'Q465', t: 'Gremeaux 2011 MCID 6MWT' }
    ]
  },
  {
    id: 'K-IM05', karte: 'IM05', icd: ['I70.2'], titel: 'Periphere arterielle Verschlusskrankheit (pAVK)', kurzTitel: 'pAVK',
    dokuDiagnose: 'peripherer arterieller Verschlusskrankheit (pAVK)', bereich: 'Innere', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['pavk', 'schaufensterkrankheit', 'arterielle verschlusskrankheit', 'claudicatio intermittens', 'durchblutungsstörung beine', 'gehtraining'],
    untertitel: 'Inhalte aus der Wissenskarte IM05 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Durchblutungsstörung der Beine durch Arteriosklerose; Schaufensterkrankheit mit Wadenschmerz beim Gehen, der in der Pause verschwindet. Die meisten Betroffenen haben keine typischen Beschwerden.',
      'Strukturiertes Gehtraining bis zum Schmerz ist die Basistherapie mit der besten Datenlage: schmerzfreie Strecke +82 m, maximale +120 m.',
      'Möglichst überwacht, 3× pro Woche, 30–60 min, über 12 Wochen.',
      'Der ABI ändert sich durch Training nicht und taugt nicht als Verlaufswert; von der neurogenen Claudicatio abgrenzen.'
    ],
    ziele: [
      { t: 'Schmerzfreie Gehstrecke verlängern', doku: 'Verlängerung der schmerzfreien Gehstrecke', an: true },
      { t: 'Maximale Gehstrecke verlängern', doku: 'Verlängerung der maximalen Gehstrecke', an: true },
      { t: 'Selbstständig weitertrainieren', doku: 'selbstständiges Gehtraining', an: false },
      { t: 'Füße schützen', doku: 'Fußschutz', an: false }
    ],
    stationen: { mobi: ['Gehen bis zum Schmerz', 'intermittierend'], aktiv: ['Steigerung und Alternativen', 'Tempo, Steigung, Rad'], berat: ['Gefäßschutz', 'Füße, Rauchstopp'] },
    strang: {
      deton: [],
      mobi: [
        { t: 'Intermittierendes Gehtraining', info: 'bis moderater Claudicatio-Schmerz (etwa 3–4 von 5), Pause bis schmerzfrei, wiederholen; 3× pro Woche, 30–60 min, 12 Wochen', doku: 'intermittierendes Gehtraining bis zum Claudicatio-Schmerz', ev: 's', an: true },
        { t: 'Überwacht statt nur Rat', info: 'überwacht gegen Heim etwa +120 m; Heimprogramm nur mit Monitoring, Zielen und Kontrolle', doku: 'überwachtes Gehtraining', ev: 's', an: true }
      ],
      aktiv: [
        { t: 'Steigern über Tempo oder Steigung', info: 'sobald 8–10 min ohne Stopp möglich (Expertenmeinung)', doku: 'Steigerung über Tempo und Steigung', ev: 'e', an: true },
        { t: 'Wer nicht gehen kann', info: 'Rad, Armergometer, Krafttraining', doku: 'alternatives Ausdauer- und Krafttraining', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Füße ansehen', info: 'bei Diabetes kann der Ruheschmerz fehlen', doku: 'Anleitung zur Fußkontrolle', ev: 'e', an: true },
        { t: 'Heimprogramm mit Schmerzreiz', info: 'Gehen ohne jeden Schmerzreiz bringt zu Hause nichts', doku: 'Anleitung Heimgehprogramm', ev: 's', an: false },
        { t: 'Rauchstopp', info: 'zusammen mit der ärztlichen Therapie', doku: 'Beratung zum Rauchstopp', ev: 'l', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Bei CLTI (Ruheschmerz, Wunde) kein Gehtraining bis zum Schmerz.',
      'Gehen ohne Schmerzreiz bringt zu Hause nichts.',
      'Schmerzskala und Steigerungsregeln sind Expertenmeinung.'
    ],
    warn: ['Ruheschmerz, Gangrän oder Wunde über 2 Wochen → dringend zum Gefäßspezialisten; plötzlich kaltes, blasses, pulsloses, schmerzhaftes Bein → 112; neue Wunden, rasch kürzere Gehstrecke, Hautverfärbung → ärztlich.'],
    aerztlich: [
      'Rauchstopp, Statin und Thrombozytenhemmung ärztlich.',
      'Stadium nach Fontaine ärztlich; S3 pAVK 065-003 aktuell, Inhalt nicht ausgewertet.'
    ],
    quellen: [
      { k: 'Q43', t: 'S3 pAVK v4.3 (nicht ausgewertet)' }, { k: 'Q526', t: 'Cochrane 2017 Gehtraining' }, { k: 'Q527', t: 'Cochrane 2018 überwacht gegen Heim' },
      { k: 'Q528', t: 'MAXIMISE 2026' }, { k: 'Q529', t: 'LITE 2021' }, { k: 'Q531', t: 'Global Vascular Guidelines CLTI 2019' }
    ]
  },
  {
    id: 'K-IM06', karte: 'IM06', icd: ['E11'], titel: 'Diabetes mellitus Typ 2', kurzTitel: 'Diabetes Typ 2',
    dokuDiagnose: 'Diabetes mellitus Typ 2', bereich: 'Innere', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['diabetes', 'diabetes mellitus', 'typ 2', 'dm2', 'zucker', 'altersdiabetes'],
    untertitel: 'Inhalte aus der Wissenskarte IM06 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Stoffwechselerkrankung mit erhöhtem Blutzucker; körperliche Aktivität verbessert Blutzucker, Gewicht und Herz-Kreislauf-Risiko und gehört zur Basistherapie.',
      'Strukturiertes Training senkt den HbA1c um 0,67 %, über 150 min pro Woche um 0,89 %; Beratung allein wirkt nicht.',
      'Ausdauer, Kraft oder kombiniert, dazu Sitzen alle 30 min unterbrechen.',
      'Mit Insulin ist Unterzuckerung nach dem Training häufiger (14,5 % gegen 3,0 %).'
    ],
    ziele: [
      { t: 'Blutzucker senken (HbA1c)', doku: 'Verbesserung der Blutzuckereinstellung', an: true },
      { t: 'Über 150 min Training pro Woche', doku: 'Steigerung der körperlichen Aktivität', an: true },
      { t: 'Gewicht und Taillenumfang senken', doku: 'Reduktion von Gewicht und Taillenumfang', an: false },
      { t: 'Sicher trainieren ohne Unterzuckerung', doku: 'sicheres Training ohne Hypoglykämie', an: false }
    ],
    stationen: { mobi: ['Sitzpausen', 'alle 30 min'], aktiv: ['Ausdauer und Kraft', 'über 150 min pro Woche'], berat: ['Sicherheit und Fußschutz', 'Blutzucker, Füße'] },
    strang: {
      deton: [],
      mobi: [
        { t: 'Sitzen unterbrechen', info: 'alle 30 min: 3 min langsam gehen oder halbe Kniebeugen, Wadenheben, Gesäß anspannen, Knieheben', doku: 'Anleitung zu aktiven Sitzpausen', ev: 's', an: true }
      ],
      aktiv: [
        { t: 'Strukturiertes Training', info: 'über 150 min pro Woche, möglichst betreut; Gehen, Rad, Schwimmen', doku: 'strukturiertes Ausdauertraining', ev: 's', an: true },
        { t: 'Krafttraining', info: '2–3 Tage pro Woche, Geräte oder Eigengewicht (ADA/ACSM, nicht im Original geprüft)', doku: 'Krafttraining', ev: 's', an: true },
        { t: 'Gleichgewicht bei Neuropathie', info: 'zusammen mit Fußschutz und Fußkontrolle', doku: 'Gleichgewichtstraining', ev: 'l', an: false }
      ],
      berat: [
        { t: 'Unterzuckerung vorbeugen', info: 'bei Insulin oder Sulfonylharnstoff Blutzucker vor dem Training messen lassen, Traubenzucker bereithalten', doku: 'Beratung zur Hypoglykämieprophylaxe', ev: 'e', an: true },
        { t: 'Fußschutz und Fußkontrolle', info: 'bei Neuropathie; plus 1000 Schritte/Tag wahrscheinlich sicher', doku: 'Beratung zu Fußschutz und Fußkontrolle', ev: 'l', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Bei proliferativer Retinopathie keine Pressatmung und kein Kopf nach unten (Expertenmeinung).',
      'Bei offenem Ulkus oder akutem Charcot-Fuß nicht belasten.',
      'Blutzucker-Grenzwerte und Dosiszahlen nach ADA/ACSM sind nicht im Original geprüft.'
    ],
    warn: ['Offenes Ulkus oder akuter Charcot-Fuß → sofort ärztlich; Unterzuckerung → abbrechen, 15–20 g Glukose, nach 15 min nachmessen; Blutzucker über 250–300 mg/dl mit Unwohlsein oder Ketonen → nicht intensiv belasten; Brustschmerz oder schwere Unterzuckerung mit Bewusstseinsstörung → 112.'],
    aerztlich: [
      'HbA1c und Medikamente (Unterzuckerungsrisiko bei Insulin und Sulfonylharnstoffen) ärztlich.',
      'Look AHEAD: Lebensstil brachte keine weniger kardiovaskulären Ereignisse.',
      'NVL Typ-2-Diabetes, Inhalt nicht ausgewertet.'
    ],
    quellen: [
      { k: 'Q44', t: 'NVL Typ-2-Diabetes v3.0' }, { k: 'Q532', t: 'Umpierre 2011 Metaanalyse' }, { k: 'Q533', t: 'Garcia 2025 Netzwerk-Metaanalyse' },
      { k: 'Q534', t: 'Dempsey 2016 Sitzpausen' }, { k: 'Q535', t: 'Banks 2021 Hypoglykämie' }, { k: 'Q536', t: 'Bus 2024 IWGDF' }
    ]
  },
  {
    id: 'K-IM07', karte: 'IM07', icd: ['E66'], titel: 'Adipositas', kurzTitel: 'Adipositas',
    dokuDiagnose: 'Adipositas', bereich: 'Innere', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['adipositas', 'übergewicht', 'fettleibigkeit', 'bmi', 'glp-1', 'bariatrische op'],
    untertitel: 'Inhalte aus der Wissenskarte IM07 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'BMI ab 30, jeder fünfte Erwachsene ist betroffen.',
      'Training allein nimmt wenig ab, Diät mehr, die Kombination am meisten.',
      'Training verkleinert Taille und viszerales Fett, erhält Muskeln und Knochen und hält das Gewicht nach der Abnahme.',
      'Relevant sind 3 bis 5 % Gewichtsabnahme, Ziel sind 10 %.'
    ],
    ziele: [
      { t: 'Gewicht senken (relevant ab 3–5 %, Ziel 10 %)', doku: 'Gewichtsreduktion', an: true },
      { t: 'Taillenumfang verringern', doku: 'Reduktion des Taillenumfangs', an: true },
      { t: 'Muskeln und Knochen erhalten', doku: 'Erhalt von Muskel- und Knochenmasse', an: true },
      { t: 'Gewicht nach der Abnahme halten', doku: 'Gewichtserhalt nach Abnahme', an: false }
    ],
    stationen: { mobi: ['Gelenkschonender Einstieg', 'Rad, Wasser, Gehen'], aktiv: ['Ausdauer und Kraft', 'Dauer vor Intensität'], berat: ['Ernährung und Verhalten', 'Ziele gemeinsam'] },
    strang: {
      deton: [],
      mobi: [
        { t: 'Gelenkschonende Ausdauer', info: 'Rad, Wasser, Gehen (Expertenmeinung)', doku: 'gelenkschonendes Ausdauertraining', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'Ausdauer mindestens 150 min pro Woche', info: 'Wirkung linear bis 300 min; je 30 min pro Woche −0,52 kg; Dauer vor Intensität steigern', doku: 'Ausdauertraining', ev: 's', an: true },
        { t: 'Krafttraining', info: 'alle großen Muskelgruppen, 2–3× pro Woche; besonders unter GLP-1-Therapie oder nach bariatrischer OP', doku: 'Krafttraining', ev: 's', an: true },
        { t: 'Gewicht halten', info: 'im RCT reichten median 2,65 Einheiten und 116 min pro Woche bei 79 % HFmax (Intervall-Indoor-Cycling plus Zirkel)', doku: 'Training zum Gewichtserhalt', ev: 's', an: false }
      ],
      berat: [
        { t: 'Diät und Verhaltensänderung einbinden', info: 'Training allein bringt −1,5 bis −3,5 kg, die Kombination am meisten', doku: 'Beratung zu Ernährung und Verhaltensänderung', ev: 's', an: true },
        { t: 'Ziele gemeinsam, Aktivität nach Vorliebe', info: 'Barrieren erfragen', doku: 'gemeinsame Zielvereinbarung', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Dauer vor Intensität steigern (Expertenmeinung).',
      'Krafttraining unter Semaglutid oder Tirzepatid ist nicht in RCTs untersucht.',
      'Bei Gonarthrose senkt nur Diät plus Training Schmerz und verbessert die Funktion.'
    ],
    warn: ['Belastungsdyspnoe oder Brustschmerz außerhalb des Bekannten, Synkope, neue einseitige Beinschwellung, Zeichen einer Schlafapnoe, nach bariatrischer OP Bauchschmerz, Erbrechen oder Schwindel nach dem Essen → ärztlich, bevor gesteigert wird; anhaltender Brustschmerz, starke Atemnot oder Ohnmacht → 112.'],
    aerztlich: [
      'Nach Absetzen von Liraglutid kam das Gewicht stärker zurück als nach Trainingsende (6,0 kg mehr).',
      'S3 Adipositas 050-001 und 088-001 noch nicht ausgewertet.'
    ],
    quellen: [
      { k: 'Q45', t: 'S3 Adipositas 050-001 v5.0' }, { k: 'Q538', t: 'Jayedi 2024 Dosis-Wirkung' }, { k: 'Q539', t: 'Bellicha 2021 Overview' },
      { k: 'Q540', t: 'Lundgren 2021 Kopenhagen' }, { k: 'Q541', t: 'Jensen 2024 nach Behandlungsende' }, { k: 'Q542', t: 'Villareal 2017 Ältere' }
    ]
  },
  {
    id: 'K-IM08', karte: 'IM08', icd: ['M81', 'M80'], titel: 'Osteoporose', kurzTitel: 'Osteoporose',
    dokuDiagnose: 'Osteoporose', bereich: 'Innere', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['osteoporose', 'osteopenie', 'knochenschwund', 'frakturrisiko', 'sturzprävention', 'dvo'],
    untertitel: 'Inhalte aus der Wissenskarte IM08 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Verminderte Knochenmasse mit erhöhtem Frakturrisiko; 24 % der Frauen und 6 % der Männer ab 50.',
      'Die DVO rechnet mit dem 3-Jahres-Risiko und gewichtet das Sturzrisiko stärker.',
      'Beaufsichtigtes Training senkt Frakturen, Gleichgewicht plus Kraft senkt Stürze; angeleitet statt nur Heimprogramm.',
      'Die Dosierung ist meist Konsens; nach Wirbelfraktur gilt WS08.'
    ],
    ziele: [
      { t: 'Stürze vermeiden', doku: 'Sturzprävention', an: true },
      { t: 'Frakturrisiko senken', doku: 'Frakturprophylaxe', an: true },
      { t: 'Kraft und Gleichgewicht steigern', doku: 'Verbesserung von Kraft und Gleichgewicht', an: true },
      { t: 'Sicher bücken und heben', doku: 'rückengerechtes Bücken und Heben', an: false }
    ],
    stationen: { mobi: ['Gleichgewicht', 'täglich'], aktiv: ['Kraft und Impact', 'angeleitet'], berat: ['Alltag und Sturzschutz', 'Bücken, Wohnung'] },
    strang: {
      deton: [],
      mobi: [
        { t: 'Gleichgewicht täglich', info: 'Tandemstand, Einbeinstand, Gehen mit Aufgaben; bei Sturzgefahr mit Kraft etwa 3 h pro Woche über 4 Monate', doku: 'Gleichgewichtstraining', ev: 's', an: true }
      ],
      aktiv: [
        { t: 'Krafttraining angeleitet', info: 'Kniebeuge, Kreuzheben mit Hüftbeugung, Rudern, Drücken: 8–12 RM, 2–3 Sätze, 2–3 Tage pro Woche; hochintensiv 5 × 5 nur unter Aufsicht', doku: 'angeleitetes Krafttraining', ev: 's', an: true },
        { t: 'Rückenstrecker', info: 'Bauchlage oder Stand, 3–5 Wdh., 3–5 s halten', doku: 'Kräftigung der Rückenstrecker', ev: 'l', an: true },
        { t: 'Impact', info: 'ohne Wirbelfraktur 50 pro Einheit, z. B. Stampfen, Fersenfall, kleine Sprünge 5 × 10; mit Wirbelfraktur nur bis zügiges Gehen', doku: 'Impacttraining', ev: 'l', an: false }
      ],
      berat: [
        { t: 'Bücken mit geradem Rücken', info: 'belastete Rumpfbeugung meiden; keine Pauschalverbote', doku: 'Schulung rückengerechter Alltagsbewegungen', ev: 'l', an: true },
        { t: 'Wohnung sicher machen', info: 'Stolperfallen, Licht, Haltegriffe', doku: 'Wohnraumberatung zur Sturzprävention', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Keine belastete, endgradige oder wiederholte Rumpfbeugung, keine Sit-ups (Expertenmeinung).',
      'Reines Ausdauertraining ersetzt Kraft und Gleichgewicht nicht.',
      'Nach Wirbelfraktur kein Impact über zügiges Gehen hinaus.'
    ],
    warn: ['Akuter Rückenschmerz nach Heben, Husten oder leichtem Sturz → pausieren, ärztlich (frische Wirbelfraktur); Größenverlust ab 4 cm (ab 6 cm dringend), Neurologie, Tumoranamnese → ärztlich.'],
    aerztlich: [
      'Vertebroplastie bringt gegen Schein-OP keinen relevanten Nutzen.',
      'DVO 183-001 gültig bis 31.03.2027 und in Überarbeitung; die Trainingsleitlinie 183-002 ist noch nicht ausgewertet.'
    ],
    quellen: [
      { k: 'Q07', t: 'DVO S3 Osteoporose 2023' }, { k: 'Q281', t: 'DVO S3 Training Frakturprophylaxe 2025' }, { k: 'Q282', t: 'Strong, Steady and Straight 2022' },
      { k: 'Q283', t: 'Hoffmann 2022' }, { k: 'Q284', t: 'Sherrington 2019' }, { k: 'Q285', t: 'LIFTMOR 2018' }
    ]
  },
  {
    id: 'K-IM10', karte: 'IM10', icd: ['U09.9'], titel: 'Long/Post-COVID mit Belastungsintoleranz', kurzTitel: 'Post-COVID',
    dokuDiagnose: 'Post-COVID-Syndrom mit Belastungsintoleranz', bereich: 'Innere', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['long covid', 'post covid', 'post-covid', 'pem', 'me/cfs', 'pacing', 'pots'],
    untertitel: 'Inhalte aus der Wissenskarte IM10 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Beschwerden über Monate nach SARS-CoV-2-Infektion: Fatigue, Atemnot, Konzentrationsstörung, Herzrasen im Stehen; laut WHO Beginn meist 3 Monate nach Infektion, Symptome mindestens 2 Monate.',
      'Entscheidend ist, ob eine Post-Exertional Malaise (PEM) vorliegt; das betrifft etwa 25 %.',
      'Mit PEM: Pacing und kein Training mit festen Steigerungen. Ohne PEM: supervidiertes Training, Intervalle besser als Dauertraining.',
      'Mit ME/CFS-Kriterien gab es bis 20 Monate kaum Besserung.'
    ],
    ziele: [
      { t: 'Alltag ohne Crash bewältigen', doku: 'Belastungsmanagement ohne Symptomverschlechterung', an: true },
      { t: 'Belastbarkeit steigern (nur ohne PEM)', doku: 'Steigerung der Belastbarkeit', an: true },
      { t: 'Rückkehr in den Beruf', doku: 'berufliche Wiedereingliederung', an: false },
      { t: 'Kreislauf im Stehen stabilisieren', doku: 'Verbesserung der orthostatischen Toleranz', an: false }
    ],
    stationen: { deton: ['Pacing', 'bei PEM'], mobi: ['Kreislauf und Atmung', 'PoTS, Atemnot'], aktiv: ['Training', 'nur ohne PEM'], berat: ['Tagebuch und Belastungsgrenze', 'Folgetag beachten'] },
    strang: {
      deton: [
        { t: 'Pacing unter der Belastungsgrenze', info: 'bei PEM; kein Training mit festen Steigerungen (kein GET)', doku: 'Pacing', ev: 'l', an: true },
        { t: 'Belastung in kurze Blöcke teilen', info: 'Pausen einplanen, geistige Belastung mitzählen, nach Crash Aktivität senken (Expertenmeinung)', doku: 'Energiemanagement in Belastungsblöcken', ev: 'e', an: true }
      ],
      mobi: [
        { t: 'PoTS: Ausdauer anfangs liegend', info: 'dazu Flüssigkeit, Salz, Kompression (Expertenmeinung)', doku: 'liegendes Ausdauertraining bei PoTS', ev: 'e', an: false },
        { t: 'Atemschulung bei Atemnot', info: 'Atemmuskeltraining als Baustein; IMT allein ohne überzeugende Evidenz', doku: 'Atemschulung', ev: 'u', an: false }
      ],
      aktiv: [
        { t: 'Intervall-Ausdauer', info: 'ohne PEM, supervidiert, 3–5× pro Woche über 4–6 Wochen; besser als Dauertraining', doku: 'Intervall-Ausdauertraining', ev: 's', an: true },
        { t: 'Kraft plus Ausdauer', info: 'ohne PEM 3× pro Woche, 8 Wochen', doku: 'kombiniertes Kraft- und Ausdauertraining', ev: 's', an: true }
      ],
      berat: [
        { t: 'Aktivitäts- und Symptomtagebuch', info: 'jede Steigerung an der Reaktion am Folgetag messen', doku: 'Anleitung Aktivitäts- und Symptomtagebuch', ev: 'e', an: true },
        { t: 'PEM erfragen', info: 'Verschlechterung nach körperlicher oder geistiger Belastung (DSQ-PEM)', doku: 'Screening auf Post-Exertional Malaise', ev: 'e', an: true }
      ]
    },
    vorsicht: [
      'Bei PEM kein GET und keine Belastungstests.',
      'Pacing-Regeln, Dosierungen und Training im Liegen bei PoTS sind Expertenmeinung; Herzfrequenzgrenzen fürs Pacing sind nicht untersucht.',
      'Trainingsstudien bei PEM haben ein hohes Verzerrungsrisiko.'
    ],
    warn: ['Brustschmerz unter Belastung, Synkope, neue Rhythmusstörung, Atemnot in Ruhe oder Sättigungsabfall, Zeichen einer Thrombose, Lungenembolie oder Myokarditis, neue neurologische Ausfälle, deutliche Suizidgedanken → ärztlich; akuter Brustschmerz mit Atemnot, Bewusstlosigkeit → 112.'],
    aerztlich: [
      'Hyperbarer Sauerstoff und tDCS ohne überzeugende Evidenz.',
      'AWMF 020-027 und 080-008 gültig, Inhalte noch nicht ausgewertet.'
    ],
    quellen: [
      { k: 'Q47', t: 'S2k Long-/Post-COVID v5.0, 2026' }, { k: 'Q466', t: 'Zeraatkar 2024 Living Review' }, { k: 'Q467', t: 'Pouliopoulou 2025 PEM' },
      { k: 'Q468', t: 'Legler 2023 Charité-Kohorte' }, { k: 'Q469', t: 'Kingdon 2022 NICE ME/CFS' }, { k: 'Q471', t: 'Jimeno-Almazán 2023 RECOVE' }
    ]
  },
  {
    id: 'K-KI01', karte: 'KI01', icd: ['M26.6'], titel: 'Craniomandibuläre Dysfunktion (CMD)', kurzTitel: 'CMD',
    dokuDiagnose: 'craniomandibulärer Dysfunktion', bereich: 'Kiefer', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['cmd', 'craniomandibuläre dysfunktion', 'kiefergelenk', 'tmd', 'bruxismus', 'knirschen', 'kieferschmerz'],
    untertitel: 'Inhalte aus der Wissenskarte KI01 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Sammelbegriff für Funktionsstörungen von Kaumuskeln und Kiefergelenken mit Schmerz, eingeschränkter oder unharmonischer Kieferbewegung und Gelenkgeräuschen; die Prognose ist in der Regel gut.',
      'Die Therapie beginnt reversibel; Aufklärung, Beratung und Anleitung zur Selbsthilfe gehören immer dazu.',
      'Bei chronischem Schmerz stark empfohlen (BMJ 2023): KVT, Kiefermobilisation, manuelle Triggerpunkttherapie, angeleitete Kiefer- und Haltungsübungen, Edukation.',
      'Gelenkgeräusche allein brauchen in der Regel keine Behandlung.'
    ],
    ziele: [
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: true },
      { t: 'Mundöffnung verbessern (SKD in mm)', doku: 'Verbesserung der Mundöffnung', an: true },
      { t: 'Pressen und Knirschen wahrnehmen und reduzieren', doku: 'Wahrnehmung und Reduktion parafunktioneller Aktivität', an: true },
      { t: 'Kauen, Gähnen, Sprechen beschwerdefrei', doku: 'beschwerdefreie Kieferfunktion im Alltag', an: false }
    ],
    strang: {
      deton: [
        { t: 'Kaumuskulatur, Mundboden, Nacken', info: 'funktionelle Weichteiltechnik, manuelle Triggerpunkttherapie, feuchte Wärme; nur zusammen mit aktiver Therapie', doku: 'Detonisierung der Kaumuskulatur, des Mundbodens und der Nackenmuskulatur', ev: 'l', an: true }
      ],
      mobi: [
        { t: 'Mobilisation Kiefergelenk', info: 'Traktion, Gleiten ventral, mediolateral, dorsal; Griffe gegen Kaltenborn oder Lehrbuch prüfen', doku: 'Mobilisation Kiefergelenk', ev: 'l', an: true },
        { t: 'Manipulation', info: 'bei chronischem Schmerz bedingt empfohlen', doku: 'Manipulation Kiefergelenk', ev: 'l', an: false }
      ],
      aktiv: [
        { t: 'Kiefer- und Haltungsübungen', info: '„Ruhe im Mund“, „Zunge am Platz“, Spiegelkoordinationsübungen', doku: 'angeleitete Kiefer- und Haltungsübungen', ev: 'l', an: true },
        { t: 'Wahrnehmung bei Wachbruxismus', info: 'Pressen und Knirschen im Alltag bemerken', doku: 'Wahrnehmungstraining bei Wachbruxismus', ev: 'l', an: false },
        { t: 'Progressive Muskelrelaxation', info: 'ergänzend', doku: 'Progressive Muskelrelaxation', ev: 'l', an: false }
      ],
      berat: [
        { t: 'Aufklärung und Selbstmanagement', info: 'Ruheposition des Kiefers, Heimübungen; gehört immer dazu', doku: 'Aufklärung und Anleitung zum Selbstmanagement', ev: 'l', an: true },
        { t: 'Abstimmung mit dem Zahnarzt', info: 'bei Schiene; ohne Besserung nach einigen Wochen bei Gelenkschmerz Rückmeldung', doku: 'interdisziplinäre Abstimmung mit dem Zahnarzt', ev: 'l', an: false },
        { t: 'Psychologische Verfahren anstoßen', info: 'bei lang anhaltendem Schmerz KVT über den Arzt', doku: 'Empfehlung psychologischer Mitbehandlung', ev: 'l', an: false }
      ]
    },
    vorsicht: [
      'Nicht empfohlen: irreversible Okklusionsveränderungen, Einschleifen, Laser, TENS.',
      'Passive Maßnahmen nicht ohne Übungen und Edukation; Knacken allein nicht behandeln.',
      'Sitzungszahlen und Übungsdosierungen sind kaum belegt.'
    ],
    warn: ['Über 50 mit Kauschmerz und Schläfenkopfschmerz oder Sehstörung (am selben Tag ärztlich), einschießender elektrischer Gesichtsschmerz, Schwellung mit Fieber, Trauma mit Bissveränderung, akute Kiefersperre oder Luxation, Taubheit im Gesicht → ärztlich oder zahnärztlich.'],
    aerztlich: [
      'Die Schiene ist eine zahnärztliche Entscheidung; reversible Schienen bei chronischem Schmerz nur bedingt, irreversible Schienen und Diskektomie stark dagegen.',
      'Kieferklemme ohne Reposition: konservativ zuerst, über 5 Jahre nicht schlechter als OP.',
      'Okklusionsschienen-Leitlinie 083-051 gültig bis 28.02.2029, Inhalt nicht ausgewertet.'
    ],
    quellen: [
      { k: 'Q80', t: 'DGFDT Wissenschaftliche Mitteilung 2022 (über zm 2023, Original nicht geöffnet)' }, { k: 'Q330', t: 'BMJ Busse 2023 Leitlinie chronische CMD' }, { k: 'Q331', t: 'BMJ NMA 2023 (153 RCTs)' },
      { k: 'Q332', t: 'Schiffman 2014 DC/TMD' }, { k: 'Q333', t: 'AWMF S2k Okklusionsschienen 083-051' }, { k: 'Q85', t: 'LZKS Literaturverzeichnis Physiotherapie bei CMD und Bruxismus 2025 (Sekundärquelle)' }
    ]
  },
  {
    id: 'K-SG01', karte: 'SG01', icd: ['S93.4'], titel: 'Laterale Bandverletzung des Sprunggelenks', kurzTitel: 'Außenbandverletzung OSG',
    dokuDiagnose: 'lateraler Bandverletzung des Sprunggelenks', bereich: 'Sprunggelenk', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['supinationstrauma', 'außenbandruptur', 'außenbandverletzung', 'osg distorsion', 'umknicktrauma', 'sprunggelenksdistorsion', 'bandverletzung osg'],
    untertitel: 'Inhalte aus der Wissenskarte SG01 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Häufigste Sportverletzung, meist am Lig. fibulotalare anterius, oft auch am Lig. fibulocalcaneare.',
      'Rückfälle (3 bis 34 %) und chronische Instabilität (bis 40 %) sind häufig.',
      'Früh belasten, funktionell stützen (Orthese besser als Tape oder Binde), aktiv üben; frühe Übungen statt PRICE.',
      'Ottawa-Regeln am ersten Tag, verzögerte Untersuchung an Tag 4 bis 5.'
    ],
    ziele: [
      { t: 'Schmerzfrei gehen', doku: 'schmerzfreies Gehen', an: true },
      { t: 'Volle Dorsalextension', doku: 'Wiederherstellung der Dorsalextension', an: true },
      { t: 'Gleichgewicht und Sprungfähigkeit seitengleich', doku: 'seitengleiche Gleichgewichts- und Sprungfähigkeit', an: false },
      { t: 'Rückkehr in den Sport ohne Rezidiv', doku: 'Rückkehr in den Sport ohne Rezidiv', an: true }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Manuelle Mobilisation für die Dorsalextension', info: 'zusätzlich zu frühen Übungen', doku: 'Mobilisation OSG in Dorsalextension', ev: 'l', an: true },
        { t: 'Lunge an der Wand', info: 'Dorsalextension als Eigenübung; Weight-Bearing Lunge Test als Verlaufswert', doku: 'Eigenmobilisation Dorsalextension', ev: 'e', an: false }
      ],
      aktiv: [
        { t: 'Neuromuskuläres Training', info: 'Einbeinstand auf festem Boden, dann Kreisel, mit Störungen, 3× pro Woche', doku: 'neuromuskuläres Training', ev: 's', an: true },
        { t: 'Kraft Peronäen und Wade', info: 'Band, Wadenheben, 3 × 10–15 (Expertenmeinung)', doku: 'Kräftigung der Peronäal- und Wadenmuskulatur', ev: 'e', an: true },
        { t: 'Sprünge, Landungen, Richtungswechsel', info: 'steigern; Rückkehr in den Sport nach PAASS-Bereichen', doku: 'sportspezifisches Sprung- und Landetraining', ev: 'l', an: false }
      ],
      berat: [
        { t: 'Früh belasten mit Orthese', info: 'Orthese besser als Tape oder Binde; schwere Distorsion 10 Tage Gips oder Orthese nach ärztlicher Entscheidung', doku: 'Beratung zur frühfunktionellen Belastung mit Orthese', ev: 's', an: true },
        { t: 'Rezidivprophylaxe', info: 'Orthese im Sport 12 Monate; Heimprogramm 8 Wochen, 3× pro Woche, höchstens 30 Minuten', doku: 'Rezidivprophylaxe mit Orthese und Heimprogramm', ev: 's', an: true }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Nicht empfohlen: Ultraschall und passive Maßnahmen statt Übungen, elastische Binde allein, lange Ruhigstellung.',
      'Kraftdosierung und Rückkehr-Zeiten sind Expertenmeinung; die JOSPT-Grade sind nicht im Volltext geprüft.'
    ],
    warn: ['Ottawa-Regeln positiv → Röntgen; Fehlstellung, Taubheit, Durchblutungsstörung, Verdacht auf Syndesmose (Hüpfen unmöglich), anhaltender Gelenkschmerz nach Wochen oder Schnappen hinter dem Außenknöchel → ärztlich.'],
    aerztlich: [
      'Operation nicht als Erstbehandlung.',
      'Schwere Distorsion: 10 Tage Gips oder Orthese nach ärztlicher Entscheidung.',
      'Keine gültige AWMF-Leitlinie.'
    ],
    quellen: [
      { k: 'Q23', t: 'JOSPT Lateral Ankle 2021' }, { k: 'Q264', t: 'Vuurberg 2018' }, { k: 'Q265', t: 'Doherty 2017' },
      { k: 'Q266', t: 'CAST 2009' }, { k: 'Q267', t: 'Hupperets 2009' }, { k: 'Q268', t: 'Janssen 2014' }
    ]
  },
  {
    id: 'K-SG02', karte: 'SG02', icd: ['M25.37'], titel: 'Chronische Sprunggelenkinstabilität', kurzTitel: 'Chronische OSG-Instabilität',
    dokuDiagnose: 'chronischer Sprunggelenkinstabilität', bereich: 'Sprunggelenk', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['chronische instabilität osg', 'sprunggelenksinstabilität', 'cai', 'umknicken', 'instabiles sprunggelenk'],
    untertitel: 'Inhalte aus der Wissenskarte SG02 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Wiederholtes Umknicken und Instabilitätsgefühl mehr als 12 Monate nach der ersten Verletzung; bis 40 % entwickeln das nach einem Erst-Trauma.',
      'Mechanisch (Bandlockerung) und funktionell (Kontrolle, Kraft, Propriozeption).',
      'Gleichgewichts- und Krafttraining über mindestens 4 bis 6 Wochen: CAIT +3,95, FAAM-Sport +17,7.',
      'OP (Broström) erst nach gründlicher Übungstherapie, Sport danach nach etwa 3 bis 4 Monaten.'
    ],
    ziele: [
      { t: 'Kein erneutes Umknicken', doku: 'Rezidivprophylaxe', an: true },
      { t: 'Stabilitätsgefühl verbessern (CAIT)', doku: 'Verbesserung der subjektiven Stabilität', an: true },
      { t: 'Rückkehr in den Sport', doku: 'Rückkehr in den Sport', an: false }
    ],
    stationen: { mobi: ['Gleichgewicht', 'Propriozeption'], aktiv: ['Kraft und Sprünge', 'Peronäen, Hüfte'] },
    strang: {
      deton: [],
      mobi: [
        { t: 'Gleichgewichtstraining', info: 'mindestens 4–6 Wochen, mit unerwarteten Störungen', doku: 'Gleichgewichtstraining', ev: 's', an: true }
      ],
      aktiv: [
        { t: 'Kraft Peronäen und Hüfte', info: 'Hüftkraft einbeziehen', doku: 'Kräftigung der Peronäal- und Hüftmuskulatur', ev: 'l', an: true },
        { t: 'Sprung- und Landeaufgaben', info: 'wie SG01 Spätphase, sportspezifisch', doku: 'sportspezifisches Sprung- und Landetraining', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Orthese im Sport', info: 'zur Rezidivprophylaxe stark belegt', doku: 'Beratung zur Orthese im Sport', ev: 's', an: true },
        { t: 'Nach Bandrekonstruktion', info: 'Reha wie SG01, Sport nach ca. 3–4 Monaten', doku: 'Nachbehandlung nach Bandrekonstruktion', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'OP erst nach gründlicher Übungstherapie.',
      'Keine eigene AWMF-Leitlinie.'
    ],
    warn: ['Tiefer Schmerz, Erguss, Blockade, Schnappen hinter dem Außenknöchel, Schmerz oberhalb des Gelenks oder Knochendruckschmerz nach Trauma → ärztlich.'],
    aerztlich: ['Bei Versagen der Übungstherapie Bandrekonstruktion (Broström).'],
    quellen: [
      { k: 'Q23', t: 'Martin 2021 JOSPT' }, { k: 'Q371', t: 'Vuurberg 2018 BJSM' }, { k: 'Q372', t: 'Doherty 2017 BJSM' },
      { k: 'Q373', t: 'Hertel 2019' }, { k: 'Q374', t: 'Metaanalyse Gleichgewicht 2024' }
    ]
  },
  {
    id: 'K-SG03', karte: 'SG03', icd: ['S82.5', 'S82.6'], titel: 'Sprunggelenkfraktur (Weber A–C)', kurzTitel: 'Sprunggelenkfraktur',
    dokuDiagnose: 'Z. n. Sprunggelenkfraktur', bereich: 'Sprunggelenk', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['sprunggelenksfraktur', 'osg fraktur', 'weber', 'weber b', 'malleolarfraktur', 'außenknöchelfraktur', 'trimalleolär'],
    untertitel: 'Inhalte aus der Wissenskarte SG03 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Außenknöchelbruch nach Weber A (unterhalb der Syndesmose), B (auf Höhe) oder C (oberhalb), auch bi- und trimalleolär.',
      'Stabile Weber B: 3 Wochen Gips oder Orthese; instabile Weber B mit kongruenter Gabel im Gips nicht schlechter als OP.',
      'Nach OP ist Belastung nach Schmerz ab 2 Wochen sicher.',
      'Beratung plus Heimprogramm ist die Basis; ein betreutes Programm bringt bei unkomplizierter Fraktur nichts zusätzlich.'
    ],
    ziele: [
      { t: 'Volle Belastung, normales Gangbild', doku: 'Vollbelastung mit physiologischem Gangbild', an: true },
      { t: 'Dorsalextension seitengleich', doku: 'Wiederherstellung der Dorsalextension', an: true },
      { t: 'Einbeiniger Heel-Rise seitengleich', doku: 'Wiederaufbau der Wadenkraft', an: false },
      { t: 'Rückkehr zu Arbeit, Sport, Auto', doku: 'Rückkehr zu Arbeit und Sport', an: true }
    ],
    stationen: { mobi: ['Beweglichkeit', 'Dorsalextension'], aktiv: ['Kraft, Gleichgewicht, Gang', 'stufenweise'], berat: ['Belastung und Beratung', 'nach Vorgabe'] },
    strang: {
      deton: [],
      mobi: [
        { t: 'Dorsalextension aktiv und im Ausfallschritt', info: 'abnehmbare Orthese mit sofortigen Bewegungsübungen ist dem Gips gleichwertig', doku: 'aktive Mobilisation OSG in Dorsalextension', ev: 'e', an: true },
        { t: 'Manualtherapie und Dehnung zusätzlich', info: 'zusätzlich zu Übungen ohne relevanten Effekt', doku: 'Manuelle Therapie OSG', ev: 's', an: false }
      ],
      aktiv: [
        { t: 'Wadenheben und Kniebeuge', info: 'beidbeinig bis einbeinig, 3 × 10–15 (Expertenmeinung)', doku: 'Kräftigung der Wadenmuskulatur', ev: 'e', an: true },
        { t: 'Gangschule und Treppe', info: 'Belastung nach Vorgabe', doku: 'Gangschulung', ev: 'e', an: true },
        { t: 'Gleichgewicht', info: 'Einbeinstand, unebener Untergrund', doku: 'Gleichgewichtstraining', ev: 'e', an: false },
        { t: 'Sprünge und Laufen stufenweise', info: 'Sport im Mittel nach gut 4 Monaten', doku: 'stufenweiser Aufbau von Sprüngen und Laufen', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Beratung plus Heimprogramm', info: 'Basis; betreutes Programm bei unkomplizierter Fraktur ohne Zusatznutzen', doku: 'Beratung und Anleitung Heimprogramm', ev: 's', an: true },
        { t: 'Belastung nach Vorgabe', info: 'nach OP Belastung nach Schmerz ab 2 Wochen sicher; stabile Weber B 3 Wochen Gips oder Orthese', doku: 'Belastungsaufbau nach ärztlicher Vorgabe', ev: 's', an: true },
        { t: 'Mehr Termine bei Risiko', info: 'Ältere, Luxationsfraktur, Syndesmose, deutliche Steifigkeit', doku: 'intensivierte Betreuung', ev: 'e', an: false },
        { t: 'Allgemeine Aktivität steigern', info: 'Alltag, Arbeit', doku: 'Steigerung der Alltagsaktivität', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Nicht empfohlen: 6 Wochen Gips bei stabiler Weber B, 6 Wochen Entlastung nach stabiler OP ohne Grund, Elektrotherapie.',
      'Bei Syndesmose, Stellschraube, trimalleolären Frakturen und fehlender Schutzsensibilität gelten die Daten zur frühen Belastung nur eingeschränkt.',
      'Sätze und Wiederholungen sind Expertenmeinung.'
    ],
    warn: ['Rötung, Überwärmung, Sekretion, klaffende Wunde, zunehmende Fehlstellung im Gips, Wadenschmerz mit einseitiger Schwellung oder Atemnot, Zeichen eines CRPS oder Schmerz an der proximalen Fibula → ärztlich.'],
    aerztlich: [
      'Versorgung (OP, Gips, Orthese) und Belastungsvorgabe ärztlich.',
      'Keine gültige AWMF-Leitlinie (187-010 nur angemeldet).'
    ],
    quellen: [
      { k: 'Q309', t: 'Cochrane Lewis 2024' }, { k: 'Q310', t: 'WAX 2024 Lancet' }, { k: 'Q311', t: 'EXACT 2015 JAMA' },
      { k: 'Q312', t: 'Kortekangas 2019 BMJ' }, { k: 'Q313', t: 'SUPER-FIN 2026 BMJ' }
    ]
  },
  {
    id: 'K-SG04', karte: 'SG04', icd: ['M76.6'], titel: 'Achillessehnen-Tendinopathie', kurzTitel: 'Achillessehnen-Tendinopathie',
    dokuDiagnose: 'Achillessehnen-Tendinopathie', bereich: 'Sprunggelenk', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['achillodynie', 'achillessehnen-tendinopathie', 'achillestendinopathie', 'achillessehnenreizung', 'achilles', 'fersenschmerz hinten'],
    untertitel: 'Inhalte aus der Wissenskarte SG04 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Belastungsschmerz der Achillessehne, Midportion (2 bis 7 cm über dem Ansatz) oder insertional (innerhalb von 2 cm); häufig bei Läufern, zwei Drittel der Hausarztfälle ohne Sportbezug.',
      'Kern sind Aufklärung, Belastungssteuerung und mindestens 12 Wochen progressives Wadentraining; die Programme sind gleichwertig.',
      'Weiterlaufen unter Schmerzmonitoring schadet nicht.',
      'Zusatzverfahren erst nach 3 Monaten, OP frühestens nach 6 Monaten aktiver Therapie.'
    ],
    ziele: [
      { t: 'Laufen und Sport ohne Zunahme', doku: 'beschwerdefreie Sportbelastung', an: true },
      { t: 'Alltag ohne Morgenschmerz', doku: 'Reduktion von Morgen- und Anlaufschmerz', an: true },
      { t: 'Wadenkraft aufbauen (Heel-Rise)', doku: 'Kräftigung der Wadenmuskulatur', an: false },
      { t: 'VISA-A verbessern', doku: 'Verbesserung der Sehnenfunktion', an: false }
    ],
    strang: {
      deton: [],
      mobi: [],
      aktiv: [
        { t: 'Progressives Wadentraining ≥ 12 Wochen', info: 'Silbernagel, Alfredson oder HSR nach Vorliebe und Ausstattung, gleichwertig', doku: 'progressives Krafttraining der Wadenmuskulatur', ev: 's', an: true },
        { t: 'Insertional angepasst', info: 'auf ebenem Boden, nicht unter Fußniveau absenken; anfangs keine Dorsalextension unter Last', doku: 'angepasstes Wadentraining bei insertionaler Tendinopathie', ev: 's', an: true },
        { t: 'Silbernagel', info: '1× täglich 3 × 15, beidbeinig → einbeinig → exzentrisch → Last in 5-kg-Schritten → schnell und plyometrisch; Schmerz bis 5/10', doku: 'Trainingsprogramm nach Silbernagel', ev: 's', an: false },
        { t: 'Alfredson', info: 'exzentrisch über die Stufe, Knie gestreckt und gebeugt, 2× täglich 3 × 15', doku: 'exzentrisches Training nach Alfredson', ev: 's', an: false },
        { t: 'Sprünge und Laufen in Stufen', info: 'Rückkehrkriterien sind Expertenmeinung; Wadentraining nach der Erholung weiterführen', doku: 'stufenweiser Aufbau von Sprüngen und Laufen', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Aufklärung', info: 'überlastet, nicht kaputt; Verlauf über Monate', doku: 'Aufklärung zu Ursache und Verlauf', ev: 'l', an: true },
        { t: 'Weiterlaufen mit Schmerzmonitoring', info: 'Schmerz höchstens 5/10, nach 24 h abgeklungen', doku: 'Belastungssteuerung nach Schmerzmonitoring', ev: 's', an: true }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.', mobi: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Nicht empfohlen: Abwarten ohne aktive Therapie, PRP, High-Volume-Injektion, Bildgebung zur Verlaufskontrolle, Isometrie als Schmerzmittel.',
      'Am Ansatz zu Beginn keine volle Dorsalextension unter Last.',
      'Empfehlungsgrade der JOSPT-Revision 2024 sind nicht geprüft.'
    ],
    warn: ['Knall oder Tritt-Gefühl in der Wade, Thompson oder Matles positiv, tastbare Delle → Ruptur, am selben Tag ärztlich; Verdacht auf Spondyloarthritis oder familiäre Hypercholesterinämie (Xanthome) → ärztlich.'],
    aerztlich: [
      'OP frühestens nach 6 Monaten aktiver Therapie.',
      'Kortison-Injektion: ein RCT mit Nutzen, die Leitlinien sind zurückhaltend.',
      'Fluorchinolone und Kortison in den letzten Wochen erfragen.'
    ],
    quellen: [
      { k: 'Q304', t: 'NL-Leitlinie 2021' }, { k: 'Q305', t: 'JOSPT Achilles Revision 2024' }, { k: 'Q306', t: 'Habets 2021 Alfredson vs Silbernagel' },
      { k: 'Q307', t: 'Beyer 2015 HSR' }, { k: 'Q308', t: 'Pringels 2025 insertional' }, { k: 'Q65', t: 'Silbernagel 2007 Weiterlaufen' }
    ]
  },
  {
    id: 'K-SG05', karte: 'SG05', icd: ['S86.0'], titel: 'Achillessehnenruptur', kurzTitel: 'Achillessehnenruptur',
    dokuDiagnose: 'Achillessehnenruptur', bereich: 'Sprunggelenk', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['achillessehnenruptur', 'achillessehnenriss', 'achillesriss', 'sehnenriss wade', 'thompson'],
    untertitel: 'Inhalte aus der Wissenskarte SG05 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Riss meist 2 bis 6 cm über dem Ansatz, typisch beim Sport zwischen 30 und 50.',
      'Konservativ (funktionell im Spitzfußschuh) und operativ mit ähnlicher Funktion, wenn früh funktionell nachbehandelt wird.',
      'Re-Ruptur konservativ etwas häufiger (6,2 % gegen 0,6 % bzw. 3,9 % gegen 2,3 %), Komplikationen nach OP häufiger (4,9 % gegen 1,6 %).',
      'Keine Wadendehnung in den ersten Monaten, damit sich die Sehne nicht verlängert.'
    ],
    ziele: [
      { t: 'Sehne ohne Verlängerung heilen lassen', doku: 'Heilung ohne Sehnenverlängerung', an: true },
      { t: 'Wadenkraft und Heel-Rise seitengleich', doku: 'Wiederaufbau der Wadenkraft', an: true },
      { t: 'Rückkehr zum Sport nach Kriterien', doku: 'kriteriengestützte Rückkehr zum Sport', an: true }
    ],
    stationen: { deton: ['Schutzphase', 'Spitzfußschuh, Keile'], mobi: ['Beweglichkeit', 'ohne Wadendehnung'], aktiv: ['Kraftaufbau', 'ab Woche 8–12'], berat: ['Rückkehr und Kontrolle', 'Kriterien, Heel-Rise'] },
    strang: {
      deton: [
        { t: 'Spezialschuh mit Fersenkeil', info: 'Spitzfuß, Keile über 6–8 Wochen abbauen (Schema der Klinik); frühe Belastung im Schuh nach Vorgabe; Funktionsorthese mit früher Belastung gleichwertig zum Gips', doku: 'frühfunktionelle Behandlung im Spezialschuh', ev: 's', an: true }
      ],
      mobi: [
        { t: 'Keine Wadendehnung in den ersten Monaten', info: 'Sehnenverlängerung vermeiden; Ruhewinkel des Fußes kontrollieren', doku: 'Kontrolle des Ruhewinkels ohne Wadendehnung', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'Isometrie und Wadenheben stufenweise', info: 'Kraftaufbau ab ca. Woche 8–12', doku: 'stufenweiser Kraftaufbau der Wadenmuskulatur', ev: 'e', an: true },
        { t: 'Gleichgewicht, Hüfte und Knie', info: 'mittrainieren', doku: 'Gleichgewichtstraining und Kräftigung der Bein-Kette', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Rückkehr nach Kriterien', info: 'Laufen ab ca. 4–6 Monaten, Sport ab 6–9 Monaten', doku: 'Beratung zur Rückkehr in Laufen und Sport', ev: 'e', an: true },
        { t: 'Heel-Rise im Seitenvergleich', info: 'Höhe und Wiederholungen messen', doku: 'Verlaufskontrolle Heel-Rise', ev: 'e', an: false }
      ]
    },
    vorsicht: [
      'Keine Dehnung der Wade in den ersten Monaten.',
      'Keilabbau und Belastung nach dem Schema der Klinik.',
      'ATRS und Rerupturrisiko laut Karte noch prüfen; keine gültige AWMF-Leitlinie.'
    ],
    warn: ['Wadenschmerz, Schwellung, Überwärmung unter Orthese (Thrombose) → am selben Tag ärztlich, mit Atemnot oder Brustschmerz → 112; neuer Knall oder Kraftverlust, Wundprobleme nach OP → ärztlich.'],
    aerztlich: ['Konservativ oder OP ärztlich; mit beschleunigter funktioneller Reha ist die konservative Behandlung gleichwertig.'],
    quellen: [
      { k: 'Q352', t: 'Myhrvold 2022 NEJM' }, { k: 'Q353', t: 'UKSTAR 2020 Lancet' }, { k: 'Q354', t: 'Ochen 2019 BMJ' },
      { k: 'Q355', t: 'Willits 2010 JBJS' }, { k: 'Q356', t: 'Maffulli 1998 Diagnose' }
    ]
  },
  {
    id: 'K-SG06', karte: 'SG06', icd: ['S93.4'], titel: 'Syndesmosenverletzung', kurzTitel: 'Syndesmosenverletzung',
    dokuDiagnose: 'Syndesmosenverletzung', bereich: 'Sprunggelenk', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['syndesmose', 'syndesmosenverletzung', 'syndesmosenruptur', 'high ankle sprain', 'stellschraube', 'außenrotationstrauma'],
    untertitel: 'Inhalte aus der Wissenskarte SG06 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Verletzung der distalen tibiofibularen Syndesmose, isoliert oder mit Fraktur, meist durch Außenrotation im Kontaktsport.',
      'Kein klinischer Test trennt stabil von instabil; die Stabilität wird ärztlich geklärt (MRT, Stresstest, Arthroskopie).',
      'Stabil konservativ, instabil operativ (ältere Konsensempfehlung).',
      'Die Erholung dauert deutlich länger (im Median 62 statt 15 Tage); Sprungkraft und Bewegungsangst hängen mit der Dauer zusammen.'
    ],
    ziele: [
      { t: 'Schmerzarm gehen', doku: 'schmerzarmes Gehen', an: true },
      { t: 'Einbeinhüpfen schmerzfrei', doku: 'schmerzfreie Sprungbelastung', an: true },
      { t: 'Rückkehr in den Sport', doku: 'Rückkehr in den Sport', an: true },
      { t: 'Bewegungsangst abbauen', doku: 'Abbau von Bewegungsangst', an: false }
    ],
    stationen: { deton: ['Schutzphase', 'Entlastung mit Orthese'], mobi: ['Kriterien prüfen', 'statt Termin'], aktiv: ['Kraft und Propriozeption', 'nach der Entlastung'], berat: ['Bewegungsangst und Nach-OP', 'FABQ, Operateur'] },
    strang: {
      deton: [
        { t: 'Entlastung bei stabiler Verletzung', info: 'ca. 3 Wochen mit Orthese oder Gips (Level IV)', doku: 'Entlastung mit Orthese', ev: 'l', an: true }
      ],
      mobi: [
        { t: 'Progression nach Kriterien', info: 'schmerzarmes Gehen, Squeeze negativ, Einbeinhüpfen schmerzfrei (Expertenmeinung)', doku: 'kriteriengestützte Belastungssteigerung', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'Kraft und Propriozeption', info: 'nach der Entlastungsphase; Dosierung nicht untersucht', doku: 'Kraft- und Propriozeptionstraining', ev: 'l', an: true }
      ],
      berat: [
        { t: 'Bewegungsangst früh ansprechen', info: 'FABQ-Sport hängt mit der Dauer zusammen', doku: 'Aufklärung zum Abbau von Bewegungsangst', ev: 's', an: true },
        { t: 'Nach OP', info: 'Belastung nach Operateur; Stellschraube muss nicht routinemäßig raus', doku: 'Belastungsaufbau nach Vorgabe des Operateurs', ev: 's', an: false }
      ]
    },
    vorsicht: [
      'Kein Test ist zugleich sensitiv und spezifisch; die Stabilität nicht klinisch entscheiden.',
      'Übungsdosierung und Rückkehrkriterien sind nicht untersucht.',
      'Ganze Fibula und Deltaband abtasten (Expertenmeinung).'
    ],
    warn: ['Druckschmerz AITFL, Einbeinhüpfen nicht möglich und Squeeze positiv → ärztlich, Stabilität klären; Druckschmerz der hohen Fibula oder Ottawa positiv (Maisonneuve, Fraktur), neue Schmerzen nach Suture Button oder Belastungsschmerz ohne klares Trauma → ärztlich.'],
    aerztlich: [
      'Instabil operativ; Suture Button mit weniger Fehlreposition, Funktion nach 1 Jahr nur 5,2 OMAS-Punkte besser (unter der MCID).',
      'Schraubenentfernung nur bei Bedarf, das ist nicht unterlegen.',
      'Keine eigene AWMF-Leitlinie.'
    ],
    quellen: [
      { k: 'Q478', t: 'Netterström-Wedin 2021 Testgüte' }, { k: 'Q479', t: 'Sman 2015 Diagnosestudie' }, { k: 'Q480', t: 'Sman 2014 Prognose' },
      { k: 'Q481', t: 'ESSKA-AFAS 2016 Behandlung' }, { k: 'Q482', t: 'Hoskins 2026 NMA Fixation' }, { k: 'Q483', t: 'Sanders 2021 RODEO' }
    ]
  },
  {
    id: 'K-SG07', karte: 'SG07', icd: ['M19.07'], titel: 'Arthrose des oberen Sprunggelenks', kurzTitel: 'OSG-Arthrose',
    dokuDiagnose: 'Arthrose des oberen Sprunggelenks', bereich: 'Sprunggelenk', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['osg arthrose', 'sprunggelenksarthrose', 'arthrose osg', 'arthrose sprunggelenk', 'posttraumatische arthrose'],
    untertitel: 'Inhalte aus der Wissenskarte SG07 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Arthrose des Talokruralgelenks, zu 78 % posttraumatisch, primär nur 9 %; vom Unfall bis zum Endstadium im Mittel 20,9 Jahre.',
      'Die Lebensqualität im Endstadium ist so eingeschränkt wie bei Hüftarthrose.',
      'Konservativ gibt es kaum Studien; Übungen sind von Knie und Hüfte übertragen und richten sich nach der Reizbarkeit.',
      'PRP ist nicht besser als Placebo, Prothese und Arthrodese sind nach 1 Jahr ähnlich.'
    ],
    ziele: [
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: true },
      { t: 'Gehstrecke verbessern', doku: 'Verbesserung der Gehstrecke', an: true },
      { t: 'Beweglichkeit OSG erhalten', doku: 'Erhalt der OSG-Beweglichkeit', an: false },
      { t: 'Stabil bei Restinstabilität', doku: 'Verbesserung der Gelenkstabilität', an: false }
    ],
    stationen: { deton: ['Reizbarkeit senken', 'bei hoher Reizbarkeit'] },
    strang: {
      deton: [
        { t: 'Entlasten und in Etappen gehen', info: 'Gehstrecken in Etappen, Schwellung behandeln, Rad mit wenig Widerstand', doku: 'Entlastung und Schwellungsreduktion', ev: 'e', an: true }
      ],
      mobi: [
        { t: 'Talusmobilisation', info: 'bei mittlerer Reizbarkeit', doku: 'Mobilisation Talokruralgelenk', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'Kraft Wade, Tibialis anterior, Peronei, Hüfte, Quadrizeps', info: '2–3 Einheiten pro Woche, 2–3 Sätze à 10–15; Schmerz bis NRS 3–4, wenn er am Folgetag nicht höher ist (übertragen von Knie und Hüfte)', doku: 'Kräftigung der Unterschenkel-, Hüft- und Oberschenkelmuskulatur', ev: 'u', an: true },
        { t: 'Gleichgewicht und Gangschulung', info: 'fest → weich; bei Restinstabilität Propriozeption, nicht schonen', doku: 'Gleichgewichtstraining und Gangschulung', ev: 'u', an: true },
        { t: 'Steigern bei niedriger Reizbarkeit', info: 'Zusatzlast, Treppen, Bergaufgehen, Ausdauer 20–30 min, Sport mit wenig Stoßbelastung', doku: 'Belastungssteigerung', ev: 'u', an: false }
      ],
      berat: [
        { t: 'Aufklärung', info: 'Unfallfolge, langsamer Verlauf über Jahre; Belastung dosieren statt verbieten', doku: 'Aufklärung zu Verlauf und Belastungsdosierung', ev: 'e', an: true },
        { t: 'Abrollschuh oder Orthese als Versuch', info: 'bei hoher Reizbarkeit', doku: 'Beratung zu Abrollschuh bzw. Orthese', ev: 'e', an: false }
      ]
    },
    vorsicht: [
      'Nicht empfohlen: PRP-Injektionen; Nutzen von Hyaluron unklar bis fehlend, für Kortison keine RCT-Grundlage am OSG.',
      'Bei Restinstabilität nicht schonen.',
      'Dosierung und Übungswahl sind Expertenmeinung bzw. von Knie und Hüfte übertragen.'
    ],
    warn: ['Heißes, gerötetes Gelenk mit Fieber, deutliche Schwellung mit Fehlstellung bei Diabetes oder Neuropathie (Charcot), Nachtschmerz mit Allgemeinsymptomen, neuer Belastungsschmerz nach Sturz oder mehrere Gelenke mit Morgensteifigkeit → ärztlich; Arthrose ohne Unfall mit Befall der Fingergrundgelenke: an Hämochromatose denken.'],
    aerztlich: [
      'Einfache Analgetika ärztlich als erster Schritt.',
      'Endstadium: Prothese oder Arthrodese (nach 1 Jahr ähnlich), bei Jüngeren mit asymmetrischer Arthrose Osteotomie.',
      'Keine AWMF-Leitlinie zur OSG-Arthrose.'
    ],
    quellen: [
      { k: 'Q604', t: 'Cochrane 2015 konservativ OSG-Arthrose' }, { k: 'Q605', t: 'Paget 2021 PRP-RCT' }, { k: 'Q606', t: 'Goldberg 2022 TARVA' },
      { k: 'Q607', t: 'Valderrabano 2009 Ätiologie' }, { k: 'Q608', t: 'Horisberger 2009 Latenz' }, { k: 'Q609', t: 'Schleimer 2026 Übungstherapie' }
    ]
  },
  {
    id: 'K-SG08', karte: 'SG08', icd: ['M24.87'], titel: 'Vorderes und hinteres Impingement am Sprunggelenk', kurzTitel: 'OSG-Impingement',
    dokuDiagnose: 'Impingement am oberen Sprunggelenk', bereich: 'Sprunggelenk', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['impingement osg', 'impingement sprunggelenk', 'osg impingement', 'os trigonum', 'anteriores impingement', 'posteriores impingement'],
    untertitel: 'Inhalte aus der Wissenskarte SG08 (Karte noch nicht vertieft), nach Vorgehen sortiert',
    abriss: [
      'Vorderes Impingement: Schmerz bei Dorsalextension (Kniebeuge, Bergauf) durch Osteophyten oder Weichteil.',
      'Hinteres Impingement: Schmerz bei Plantarflexion (Ballett, Fußball), oft durch ein Os trigonum.',
      'Konservativ Belastungsanpassung, Mobilisation, Kraft und Kontrolle; bei Versagen arthroskopisch.'
    ],
    ziele: [
      { t: 'Endgradige Bewegung schmerzarm', doku: 'schmerzarme endgradige Sprunggelenkbewegung', an: true },
      { t: 'Sport ohne Zunahme', doku: 'beschwerdefreie Sportbelastung', an: true },
      { t: 'Kraft und Kontrolle verbessern', doku: 'Verbesserung von Kraft und Bewegungskontrolle', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Talus nach hinten mobilisieren', info: 'beim vorderen Impingement', doku: 'dorsale Talusmobilisation', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'Kraft und Kontrolle', info: 'Sprunggelenk und Bein', doku: 'Kraft- und Kontrolltraining', ev: 'e', an: true }
      ],
      berat: [
        { t: 'Belastungsanpassung', info: 'vorne Dorsalextension unter Last, hinten Plantarflexion dosieren', doku: 'Beratung zur Belastungsanpassung', ev: 'e', an: true }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Karte noch nicht fachlich geprüft und ohne Quellen.',
      'Die schmerzhafte Endstellung (vorne Dorsalextension, hinten Plantarflexion) dosieren.'
    ],
    warn: [],
    aerztlich: ['Bei Versagen der konservativen Therapie arthroskopisch.'],
    quellen: []
  },
  {
    id: 'K-SG09', karte: 'SG09', icd: ['M76.7'], titel: 'Peronealsehnen-Pathologie', kurzTitel: 'Peronealsehnen',
    dokuDiagnose: 'Peronealsehnen-Pathologie', bereich: 'Sprunggelenk', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['peronealsehne', 'peroneussehne', 'peronealsehnen-tendinopathie', 'peronealsehnenluxation', 'außenknöchel hinten'],
    untertitel: 'Inhalte aus der Wissenskarte SG09 (Karte noch nicht vertieft), nach Vorgehen sortiert',
    abriss: [
      'Tendinopathie, Längsriss oder Subluxation der Peronealsehnen hinter dem Außenknöchel.',
      'Häufig zusammen mit chronischer Instabilität und Rückfuß-Varus.',
      'Behandelt wird nach Tendinopathie-Prinzipien: erst Isometrie in Eversion, dann Kräftigung mit Band und unter Last, dazu Gleichgewicht.'
    ],
    ziele: [
      { t: 'Belastungsschmerz senken', doku: 'Reduktion des Belastungsschmerzes', an: true },
      { t: 'Eversionskraft aufbauen', doku: 'Kräftigung der Peronäalmuskulatur', an: true },
      { t: 'Gleichgewicht und Stabilität', doku: 'Verbesserung der Sprunggelenkstabilität', an: false }
    ],
    strang: {
      deton: [],
      mobi: [],
      aktiv: [
        { t: 'Isometrie Eversion', info: 'Einstieg', doku: 'isometrisches Training der Eversion', ev: 'e', an: true },
        { t: 'Kräftigung Eversion', info: 'mit Band, dann unter Last', doku: 'Kräftigung der Peronäalmuskulatur', ev: 'e', an: true },
        { t: 'Gleichgewicht', info: 'ergänzend', doku: 'Gleichgewichtstraining', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Belastungssteuerung', info: 'nach Tendinopathie-Prinzipien (G05)', doku: 'Belastungssteuerung', ev: 'e', an: true }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.', mobi: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Karte noch nicht fachlich geprüft und ohne Quellen.',
      'Begleitende chronische Instabilität und Rückfuß-Varus mitbeachten.'
    ],
    warn: [],
    aerztlich: ['Bei Subluxation oder Riss ärztlich.'],
    quellen: []
  },
  {
    id: 'K-SG10', karte: 'SG10', icd: ['M93.2'], titel: 'Osteochondrale Läsion des Talus', kurzTitel: 'Osteochondrale Läsion Talus',
    dokuDiagnose: 'osteochondraler Läsion des Talus', bereich: 'Sprunggelenk', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['osteochondrosis dissecans talus', 'osteochondrale läsion', 'od talus', 'talusflake', 'knorpelschaden sprungbein'],
    untertitel: 'Inhalte aus der Wissenskarte SG10 (Karte noch nicht vertieft), nach Vorgehen sortiert',
    abriss: [
      'Knorpel-Knochen-Schaden am Sprungbein, oft nach einer Distorsion.',
      'Typisch sind tiefer Gelenkschmerz und Schwellung, wenn eine „Verstauchung“ nicht abheilt.',
      'Konservativ Belastungsanpassung, Kraft und Gleichgewicht; nach Mikrofrakturierung oder Knorpeltransplantation Teilbelastung nach Vorgabe (oft 6 Wochen) und frühe Bewegung.'
    ],
    ziele: [
      { t: 'Belastungsschmerz senken', doku: 'Reduktion des Belastungsschmerzes', an: true },
      { t: 'Volle Belastbarkeit', doku: 'Wiederherstellung der Belastbarkeit', an: true },
      { t: 'Kraft und Gleichgewicht', doku: 'Verbesserung von Kraft und Gleichgewicht', an: false }
    ],
    stationen: { mobi: ['Bewegung früh', 'nach OP'], berat: ['Belastung nach Vorgabe', 'Teilbelastung'] },
    strang: {
      deton: [],
      mobi: [
        { t: 'Frühe Bewegung', info: 'nach Mikrofrakturierung oder Knorpeltransplantation', doku: 'frühfunktionelle Bewegungstherapie', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'Kraft und Gleichgewicht', info: 'konservativ und nach der Teilbelastungsphase', doku: 'Kraft- und Gleichgewichtstraining', ev: 'e', an: true }
      ],
      berat: [
        { t: 'Belastungsanpassung', info: 'konservative Behandlung', doku: 'Beratung zur Belastungsanpassung', ev: 'e', an: true },
        { t: 'Teilbelastung nach Vorgabe', info: 'nach OP oft 6 Wochen', doku: 'Anleitung zur Teilbelastung', ev: 'e', an: true }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Karte noch nicht fachlich geprüft und ohne Quellen.',
      'Nach OP Teilbelastung strikt nach Vorgabe.'
    ],
    warn: ['Anhaltende Beschwerden über 6 Wochen nach Distorsion → ärztlich, MRT.'],
    aerztlich: ['Mikrofrakturierung oder Knorpeltransplantation ärztlich; danach Belastung nach Vorgabe.'],
    quellen: []
  }
);

/* Diagnose-Kompass, Einträge Teil B (von Hand aus den Wissenskarten, 27.11.2026) */
window.DK_DATEN.push(
  {
    id: 'K-HU02', karte: 'HU02', icd: ['Z96.64'], titel: 'Hüftendoprothese (Nachbehandlung)', kurzTitel: 'Hüft-TEP',
    dokuDiagnose: 'Z. n. Hüft-TEP', bereich: 'Hüfte', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['hüft-tep', 'tep hüfte', 'hüftprothese', 'hüftendoprothese', 'h-tep', 'duokopfprothese'],
    untertitel: 'Inhalte aus der Wissenskarte HU02 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Künstliches Hüftgelenk, meist bei Koxarthrose; Mobilisation am OP-Tag, spätestens nach 24 h.',
      'Vollbelastung ist auch bei zementfreiem Schaft unbedenklich. Hauptproblem ist die anhaltende Abduktorenschwäche.',
      'Routine-Bewegungsverbote senken die Luxation nicht; die Vorgaben des Operateurs gelten trotzdem.',
      'Bei unkompliziertem Verlauf reicht ein Heimprogramm. Fragebögen überschätzen nach 9 bis 13 Wochen die Mobilität, deshalb Leistungstests dazunehmen.'
    ],
    ziele: [
      { t: 'Sicher gehen, erst mit, dann ohne Stützen', doku: 'Verbesserung der Gehfähigkeit', an: true },
      { t: 'Abduktoren kräftigen, Becken hält im Einbeinstand', doku: 'Kräftigung der Hüftabduktoren', an: true },
      { t: 'Transfers und Treppe selbstständig', doku: 'Selbstständigkeit bei Transfers und Treppensteigen', an: true },
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: false },
      { t: 'Rückkehr zu Arbeit, Auto und Sport', doku: 'Wiederaufnahme von Arbeit und Sport', an: false }
    ],
    stationen: { deton: ['Frühmobilisation', 'Woche 0–2'], mobi: ['Gehschule', 'Stützen und Treppe'], aktiv: ['Kraft und Gleichgewicht', 'ab Woche 2'], berat: ['Heimprogramm und Alltag', 'Vorgaben des Operateurs'] },
    strang: {
      deton: [
        { t: 'Aufstehen am OP-Tag', info: 'spätestens nach 24 h; Vollbelastung auch bei zementfreiem Schaft', doku: 'Frühmobilisation unter Vollbelastung', ev: 'l', an: true },
        { t: 'Fußpumpe und Isometrie', info: 'Fußpumpe, Gesäß und Quadrizeps anspannen, stündlich', doku: 'Fußpumpe und isometrische Spannungsübungen', ev: 'l', an: true }
      ],
      mobi: [
        { t: 'Gehschule mit Stützen', info: 'Dreipunktgang, dann Zweipunktgang', doku: 'Gangschulung mit Unterarmgehstützen', ev: 'l', an: true },
        { t: 'Treppe', info: 'hoch gesund, runter operiert zuerst', doku: 'Treppentraining', ev: 'l', an: false },
        { t: 'Stützen abbauen', info: 'wenn das Becken im Einbeinstand hält (Expertenmeinung)', doku: 'Abbau der Gehstützen', ev: 'e', an: false }
      ],
      aktiv: [
        { t: 'Abduktoren und Extensoren', info: 'Bridging, Abduktion im Stand und in Seitlage, Side-Steps mit Band, Sit-to-Stand, Step-ups, je 3 × 10–12', doku: 'Kräftigung der Hüftabduktoren und -extensoren', ev: 'e', an: true },
        { t: 'Maximalkraft', info: 'Beinpresse und Abduktion schwer, 4 × 5 bei 85–90 % 1RM ab etwa Tag 7', doku: 'Maximalkrafttraining', ev: 'e', an: false },
        { t: 'Gleichgewicht und Gang', info: 'Einbeinstand, Gehen auf unebenem Grund', doku: 'Gleichgewichts- und Gangtraining', ev: 'e', an: false },
        { t: 'Ausdauer und Sport', info: 'Ergometer, Schwimmen bei verheilter Wunde; ab Woche 12 Sport mit geringer Stoßbelastung', doku: 'Ausdauertraining', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Heimprogramm mit Ansprechperson', info: 'reicht bei unkompliziertem Verlauf, betreute Therapie bei Problemen', doku: 'Anleitung Heimprogramm', ev: 's', an: true },
        { t: 'Bewegungsvorgaben', info: 'Vorgaben des Operateurs gelten; Routine-Verbote senken die Luxation nicht', doku: 'Beratung zu den Bewegungsvorgaben nach OP', ev: 's', an: false },
        { t: 'Anschlussheilbehandlung', info: 'Bewegungstherapie mindestens 360 min pro Woche', doku: 'Beratung zur Anschlussheilbehandlung', ev: 'l', an: false }
      ]
    },
    vorsicht: [
      'Nicht empfohlen: Routine-Bewegungsverbote und Schlafen in Rückenlage ohne Anlass.',
      'Passive Maßnahmen nicht ohne aktive Therapie, Schulung allein reicht als Prähabilitation nicht.',
      'Eine Reha-Leitlinie zur Hüft-TEP gibt es nicht; Phasen, Absetzkriterien für Stützen und Sätze sind Expertenmeinung.'
    ],
    warn: ['Plötzliche Atemnot oder Brustschmerz → 112. Fieber über 37,8 °C, Rötung oder Sekret an der Wunde, Wadenschmerz mit Schwellung, federnd verkürztes rotiertes Bein (Luxation), Sturz mit Belastungsunfähigkeit, neue Fußheber- oder Quadrizepsschwäche → am selben Tag ärztlich.'],
    aerztlich: [
      'Die S3 EKIT-Hüfte regelt nur die Indikation.',
      'Dauer der Thromboseprophylaxe in der S3 VTE-Prophylaxe 2026 nachlesen.'
    ],
    quellen: [
      { k: 'Q217', t: 'NICE NG157 2020' }, { k: 'Q218', t: 'DRV RTS TEP 2025' }, { k: 'Q220', t: 'Crompton 2020, Bewegungsverbote' },
      { k: 'Q221', t: 'Peters 2019' }, { k: 'Q222', t: 'Austin 2017' }, { k: 'Q219', t: 'S3 VTE-Prophylaxe 2026' }
    ]
  },
  {
    id: 'K-HU03', karte: 'HU03', icd: ['S72.0', 'S72.1'], titel: 'Proximale Femurfraktur', kurzTitel: 'Femurfraktur proximal',
    dokuDiagnose: 'Z. n. proximaler Femurfraktur', bereich: 'Hüfte', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['schenkelhalsfraktur', 'femurfraktur', 'pertrochantäre fraktur', 'shf', 'hüftfraktur', 'oberschenkelhalsbruch'],
    untertitel: 'Inhalte aus der Wissenskarte HU03 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Schenkelhals- oder pertrochantäre Fraktur, typischer Bruch Hochbetagter nach Sturz; 182.447 Fälle 2023.',
      'Meist operativ versorgt mit sofortiger Vollbelastung. 1-Jahres-Mortalität 14 bis 28 %, nur 40 bis 60 % erreichen die frühere Mobilität.',
      'Training nach der Entlassung verbessert die Mobilität mit hoher Sicherheit; es muss weiterlaufen, sonst gehen die Gewinne verloren.',
      'Mobilität vor dem Sturz, Belastungsfreigabe laut OP-Bericht und Osteoporosetherapie erfragen.'
    ],
    ziele: [
      { t: 'Gehen in der Wohnung', doku: 'Gehfähigkeit in der Wohnung', an: true },
      { t: 'Transfers allein', doku: 'selbstständige Transfers', an: true },
      { t: 'Rückkehr nach Hause', doku: 'Rückkehr in die häusliche Umgebung', an: true },
      { t: 'Keine weiteren Stürze', doku: 'Sturzprävention', an: false }
    ],
    stationen: { deton: ['Frühmobilisation', 'ab Tag 1 nach OP'], mobi: ['Gehen und Gleichgewicht', 'mit Hilfsmittel, dann ohne'], aktiv: ['Kraft', 'Mehrkomponenten-Programm'], berat: ['Sturzprävention und Anschluss', 'Osteoporose, Heimprogramm'] },
    strang: {
      deton: [
        { t: 'Mobilisation am Tag nach der OP', info: 'mindestens täglich (Konsens)', doku: 'Frühmobilisation', ev: 'l', an: true },
        { t: 'Vollbelastung', info: 'wenn der OP-Bericht nichts anderes sagt', doku: 'Mobilisation unter Vollbelastung', ev: 'l', an: true }
      ],
      mobi: [
        { t: 'Gehtraining', info: 'mit Hilfsmittel, dann ohne', doku: 'Gangschulung', ev: 's', an: true },
        { t: 'Gleichgewicht', info: 'Tandemstand, Gewichtsverlagerung, Gehen mit Richtungswechsel', doku: 'Gleichgewichtstraining', ev: 's', an: false },
        { t: 'Transfers und Funktion', info: 'Funktionstraining schon in der Klinik', doku: 'Transfer- und Funktionstraining', ev: 's', an: false }
      ],
      aktiv: [
        { t: 'Mehrkomponenten-Programm', info: 'nach Entlassung 2–3× pro Woche über 3–12 Monate; Gruppe wirkt stärker als Heim', doku: 'Mehrkomponententraining', ev: 's', an: true },
        { t: 'Kraft um 80 % des Maximums', info: '4 Übungen, Hälfte im Stand, 2× pro Woche: Sit-to-Stand, Step-ups, Abduktion im Stand, Wadenheben', doku: 'progressives Krafttraining der unteren Extremität', ev: 's', an: true },
        { t: 'Heimprogramm', info: '3× pro Woche mit Stufen, Band, Gewichtsweste', doku: 'Heimtrainingsprogramm', ev: 's', an: false }
      ],
      berat: [
        { t: 'Training fortführen', info: 'Anschlussprogramm, sonst gehen Gewinne verloren', doku: 'Beratung zur Fortführung des Trainings', ev: 's', an: true },
        { t: 'Sturzprävention', info: 'Sturzursache, frühere Stürze, Angst vor Stürzen', doku: 'Beratung zur Sturzprävention', ev: 'l', an: true },
        { t: 'Osteoporosetherapie erfragen', info: 'veranlasst? (DVO)', doku: 'Abklärung der Osteoporosetherapie', ev: 'l', an: false }
      ]
    },
    vorsicht: [
      'Keine Teilbelastung ohne Vorgabe im OP-Bericht (Evidenz extrem unzureichend).',
      'Krafttraining allein in der Akutphase nicht als einziges Programm.',
      'Therapie nicht nach wenigen Wochen ohne Anschlussprogramm beenden.'
    ],
    warn: ['Wadenschwellung, Atemnot, Brustschmerz → sofort ärztlich. Wundrötung, Fieber, Sekretion, plötzlicher Schmerz mit Beinverkürzung (Luxation, Implantatversagen), neue Verwirrtheit (Delir) → ärztlich.'],
    aerztlich: [
      'S3 EvidenT-HiP (pertrochantär) gültig bis 31.01.2031; die Schenkelhals-Leitlinie ist erst angemeldet.',
      'Osteoporosetherapie nach DVO 2023 veranlassen lassen.'
    ],
    quellen: [
      { k: 'Q286', t: 'AWMF S3 EvidenT-HiP 2026' }, { k: 'Q287', t: 'Fairhall 2022 Cochrane' }, { k: 'Q288', t: 'Korean CPG 2021 (inkl. NICE/SIGN)' },
      { k: 'Q289', t: 'Latham 2014' }, { k: 'Q07', t: 'DVO Osteoporose 2023' }
    ]
  },
  {
    id: 'K-HU04', karte: 'HU04', icd: ['M70.6', 'M76.0'], titel: 'Greater Trochanteric Pain Syndrome (Gluteale Tendinopathie)', kurzTitel: 'GTPS',
    dokuDiagnose: 'glutealer Tendinopathie (GTPS)', bereich: 'Hüfte', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['gtps', 'gluteale tendinopathie', 'bursitis trochanterica', 'trochanterschmerz', 'seitlicher hüftschmerz', 'glutealsehne'],
    untertitel: 'Inhalte aus der Wissenskarte HU04 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Seitlicher Hüftschmerz durch Tendinopathie von M. gluteus medius und minimus; die Bursitis ist meist Begleitbefund.',
      'Diagnose klinisch: Schmerz im Einbeinstand innerhalb von 30 s hat eine Spezifität von 100 %. Das MRT hilft wenig, 88 % der Beschwerdefreien haben einen Befund.',
      'Erstbehandlung ist Aufklärung zur Kompression plus gestuftes Training (LEAP); das Heimprogramm muss den Großteil tragen.',
      'Zusatzverfahren frühestens nach 3 Monaten Training.'
    ],
    ziele: [
      { t: 'Seitenlage und Nacht schmerzarm', doku: 'Reduktion des Nachtschmerzes', an: true },
      { t: 'Treppe und Einbeinstand ohne Schmerz', doku: 'Verbesserung der Belastbarkeit im Einbeinstand', an: true },
      { t: 'Abduktionskraft steigern', doku: 'Kräftigung der Hüftabduktoren', an: true },
      { t: 'Kompression im Alltag selbst meiden', doku: 'Selbstmanagement im Alltag', an: false }
    ],
    strang: {
      deton: [
        { t: 'Weichteiltechniken', info: 'Massage, Wärme, Taping, Elektro allein nicht empfohlen', doku: 'ergänzende Weichteiltechniken', ev: 'e', an: false }
      ],
      mobi: [],
      aktiv: [
        { t: 'Isometrie Abduktion', info: 'Rückenlage oder Stand, 5–15 s, 3–5 Wdh., 2× täglich (Woche 1–2)', doku: 'isometrische Kräftigung der Hüftabduktoren', ev: 's', an: true },
        { t: 'Brücke, Kniebeuge, Seitschritte', info: 'je 10 Wdh.; ab Woche 3 einbeinbetont 2 × 5–10', doku: 'funktionelles Krafttraining', ev: 's', an: true },
        { t: 'Seitschritte mit Band', info: '1–2 × 5–10', doku: 'Seitschritte gegen Widerstand', ev: 's', an: false },
        { t: 'Schwere langsame Abduktion', info: 'im Stand gegen Widerstand, 3 s pro Phase, 5–10 Wdh., Borg 14–17 (Woche 3–8)', doku: 'Krafttraining der Hüftabduktoren', ev: 's', an: false }
      ],
      berat: [
        { t: 'Aufklärung Kompression', info: 'Beine nicht übereinander, nicht in der Hüfte hängen; Alltagsregeln sind Expertenmeinung', doku: 'Aufklärung zur Vermeidung von Sehnenkompression', ev: 's', an: true },
        { t: 'Schmerzregel', info: 'Funktionsübungen ohne Zunahme, Krafttraining bis NRS 5, Folgemorgen nicht schlechter', doku: 'Belastungssteuerung nach Schmerz', ev: 's', an: false },
        { t: 'Heimprogramm', info: '4–6 Übungen, höchstens 15–20 min', doku: 'Anleitung Heimprogramm', ev: 's', an: false }
      ]
    },
    leerText: { mobi: 'In der Karte nicht vorgesehen. Tractus- und Piriformisdehnung in Adduktion meiden.' },
    vorsicht: [
      'Keine Tractus- und Piriformisdehnung in Adduktion (Expertenmeinung).',
      'Massage, Wärme, Taping und Elektro nicht allein.',
      'Kortison nicht ohne Belastungsaufbau.'
    ],
    warn: ['Fieber, Rötung, Überwärmung (septische Bursitis), Trauma, Leistenschmerz mit eingeschränkter Innenrotation, Neurologie, deutliche Schwäche mit Trendelenburg-Hinken (Riss) → ärztlich.'],
    aerztlich: [
      'Kortison wirkt nur kurz, danach langsam steigern.',
      'Zusatzverfahren frühestens nach 3 Monaten Training; keine AWMF-Leitlinie.'
    ],
    quellen: [
      { k: 'Q277', t: 'LEAP 2018' }, { k: 'Q278', t: 'Grimaldi 2017' }, { k: 'Q279', t: 'Ganderton 2018' }, { k: 'Q280', t: 'Fearon 2024 COS-GT' }
    ]
  },
  {
    id: 'K-HU05', karte: 'HU05', icd: ['M25.85'], titel: 'Femoroazetabuläres Impingement (FAI)', kurzTitel: 'FAI',
    dokuDiagnose: 'femoroazetabulärem Impingement (FAI)', bereich: 'Hüfte', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['fai', 'impingement hüfte', 'cam', 'pincer', 'hüftimpingement', 'leistenschmerz'],
    untertitel: 'Inhalte aus der Wissenskarte HU05 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Formabweichung an Hüftkopf (Cam) oder Pfanne (Pincer) mit Leistenschmerz bei Beugung und Innenrotation, oft bei jungen Sportlern.',
      'Diagnose nach Warwick-Konsens aus Symptomen, Befund und Bildgebung; FADIR ist sensitiv und schließt eher aus.',
      'Erste Wahl ist ein physiotherapeutisch geführtes Übungsprogramm über mindestens 3 Monate.',
      'Die Arthroskopie liegt nach 12 Monaten etwas vorn, nach 2 Jahren gibt es keinen sicheren Unterschied.'
    ],
    ziele: [
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: true },
      { t: 'Hüft- und Rumpfkraft steigern', doku: 'Kräftigung der Hüft- und Rumpfmuskulatur', an: true },
      { t: 'Sport mit angepasster Belastung', doku: 'Rückkehr zur sportlichen Aktivität', an: true },
      { t: 'Beweglichkeit im schmerzfreien Bereich erhalten', doku: 'Erhalt der Hüftbeweglichkeit', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Beweglichkeit im schmerzfreien Bereich', info: 'Flexion und Innenrotation', doku: 'Mobilisation im schmerzfreien Bewegungsausmaß', ev: 'l', an: false }
      ],
      aktiv: [
        { t: 'Hüft- und Rumpfkraft', info: 'physiotherapeutisch geführt, mindestens 3 Monate', doku: 'Kräftigung der Hüft- und Rumpfmuskulatur', ev: 'l', an: true },
        { t: 'Bewegungskontrolle', info: 'Teil des Übungsprogramms', doku: 'Training der Bewegungskontrolle', ev: 'l', an: true }
      ],
      berat: [
        { t: 'Sportbelastung anpassen', info: 'tiefe Hocke vorübergehend meiden', doku: 'Beratung zur Anpassung der Sportbelastung', ev: 'l', an: true }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Tiefe Hocke vorübergehend meiden.',
      'FADIR allein reicht nicht zur Diagnose; Symptome, Befund und Bildgebung zusammen werten.'
    ],
    warn: ['Ermüdungsbruch des Schenkelhalses, Epiphysiolyse bei Jugendlichen, Infekt, Tumor, Hüftkopfnekrose und LWS-Ausstrahlung ausschließen → ärztlich.'],
    aerztlich: [
      'Arthroskopie bei ausbleibendem Erfolg, danach Reha über 3 bis 6 Monate.',
      'Arthroskopie gegen Physio: iHOT-33 +6,8 nach 12 Monaten, HOS-ADL +10 nach 8 Monaten; nach 2 Jahren kein sicherer Unterschied.',
      'AWMF 187-067 nur angemeldet.'
    ],
    quellen: [
      { k: 'Q379', t: 'Warwick-Agreement 2016' }, { k: 'Q380', t: 'Zurich-Konsens 2018 Physio' }, { k: 'Q381', t: 'Griffin 2018 UK FASHIoN' }, { k: 'Q382', t: 'Palmer 2019 FAIT' }
    ]
  },
  {
    id: 'K-HU06', karte: 'HU06', icd: ['S73.1', 'M24.15'], titel: 'Labrumläsion der Hüfte', kurzTitel: 'Labrumläsion Hüfte',
    dokuDiagnose: 'Labrumläsion der Hüfte', bereich: 'Hüfte', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['labrum', 'labrumriss', 'labrumläsion', 'gelenklippe', 'hüftarthroskopie', 'klicken hüfte'],
    untertitel: 'Inhalte aus der Wissenskarte HU06 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Riss der Gelenklippe, oft zusammen mit FAI oder Dysplasie; Leistenschmerz, Klicken, Blockaden.',
      'Im MRT haben 54 % der Beschwerdefreien einen Labrumriss. Diagnose nach Warwick-Trias, FADIR nur als Screening.',
      'Erste Wahl ist Übungstherapie über mindestens 3 Monate wie beim FAI, konsequent umgesetzt; schlecht umgesetzte Physio liegt 24 iHOT-Punkte schlechter.',
      'Nach Arthroskopie vier Phasen mit Wechsel nach Kriterien; Rückkehr zum Sport im Mittel nach 6,6 Monaten.'
    ],
    ziele: [
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: true },
      { t: 'Übungsprogramm konsequent umsetzen', doku: 'konsequente Umsetzung des Übungsprogramms', an: true },
      { t: 'Hüft- und Rumpfkraft steigern', doku: 'Kräftigung der Hüft- und Rumpfmuskulatur', an: false },
      { t: 'Rückkehr zum Sport', doku: 'Rückkehr zur sportlichen Aktivität', an: false }
    ],
    strang: {
      deton: [],
      mobi: [],
      aktiv: [
        { t: 'Übungstherapie wie beim FAI', info: 'mindestens 3 Monate, Inhalte siehe HU05', doku: 'Übungstherapie', ev: 'l', an: true },
        { t: 'Reha nach Arthroskopie', info: 'vier Phasen, Wechsel nach Kriterien; Wochenangaben sind Expertenmeinung', doku: 'phasengerechte Rehabilitation nach Arthroskopie', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Therapietreue', info: 'schlecht umgesetzte Physio −24 iHOT-Punkte', doku: 'Beratung zur konsequenten Umsetzung des Übungsprogramms', ev: 's', an: true },
        { t: 'Rückkehr zum Sport nach OP', info: '85,4 % zurück zum Sport, 72,6 % aufs alte Niveau', doku: 'Beratung zur Rückkehr zum Sport', ev: 's', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.', mobi: 'In der Karte nicht beschrieben.' },
    vorsicht: [
      'MRT-Befund nicht überbewerten: 54 % der Beschwerdefreien haben einen Riss.',
      'FADIR nur als Screening.',
      'Nach Arthroskopie Belastung, Bewegungsgrenzen und Orthese nur nach Vorgabe der Klinik (OP-Bericht).'
    ],
    warn: ['Belastungs- oder Nachtschmerz bei Läufern (Schenkelhals-Stressfraktur), Allgemeinsymptome, Fieber nach OP (Gelenkinfekt), Kortison oder Alkohol (Hüftkopfnekrose), Jugendliche mit Hinken (Epiphysiolyse) → ärztlich.'],
    aerztlich: [
      'Arthroskopie gegen Physio: in der Meta-Analyse 11 Punkte besser nach 12 Monaten, nach 24 Monaten kein sicherer Unterschied; Sham-Pilot ohne Unterschied.',
      'Keine AWMF-Leitlinie zu Labrumläsion oder FAI.'
    ],
    quellen: [
      { k: 'Q379', t: 'Warwick-Agreement 2016' }, { k: 'Q380', t: 'Zürich-Konsens 2018 Physio' }, { k: 'Q544', t: 'Heerey 2018 Prävalenz' },
      { k: 'Q546', t: 'Ferreira 2021 Meta-Analyse' }, { k: 'Q548', t: 'Murphy 2023 Therapietreue' }, { k: 'Q549', t: 'Davey 2022 Return to Play' }
    ]
  },
  {
    id: 'K-HU07', karte: 'HU07', icd: ['M76.8', 'S76.2'], titel: 'Adduktorenbezogener Leistenschmerz', kurzTitel: 'Adduktoren-Leistenschmerz',
    dokuDiagnose: 'adduktorenbezogenem Leistenschmerz', bereich: 'Hüfte', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['leistenschmerz', 'adduktoren', 'adduktorenzerrung', 'leiste', 'groin pain', 'copenhagen'],
    untertitel: 'Inhalte aus der Wissenskarte HU07 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Häufigster Leistenschmerz im Fußball und Eishockey; Einteilung nach Doha-Konsens.',
      'Adduktorenbezogen heißt: Druckschmerz an den Adduktoren plus Schmerz bei Adduktion gegen Widerstand. Bildgebung ist zweite Wahl.',
      'Kern ist aktives Training von Kraft und Koordination über 8 bis 12 Wochen; passive Therapie ist klar unterlegen (23 gegen 4 von 34 schmerzfrei zurück).',
      'Bei akuter Zerrung kriterienbasierte Reha, ins Teamtraining erst klinisch schmerzfrei.'
    ],
    ziele: [
      { t: 'Schmerzfrei zurück in den Sport', doku: 'schmerzfreie Rückkehr zum Sport', an: true },
      { t: 'Adduktorenkraft steigern (Squeeze)', doku: 'Kräftigung der Adduktoren', an: true },
      { t: 'Schmerz bei Adduktion gegen Widerstand senken', doku: 'Schmerzreduktion unter Belastung', an: true },
      { t: 'Neuen Leistenproblemen vorbeugen', doku: 'Prävention erneuter Leistenbeschwerden', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Manuelle Therapie', info: 'kann ergänzen', doku: 'ergänzende Manuelle Therapie', ev: 'e', an: false }
      ],
      aktiv: [
        { t: 'Aktives Training Kraft und Koordination', info: '8–12 Wochen, Schwerpunkt Adduktoren', doku: 'aktives Kraft- und Koordinationstraining mit Schwerpunkt Adduktoren', ev: 's', an: true },
        { t: 'Isometrie im schmerzarmen Bereich', info: 'Schmerz höchstens NRS 2–3 (Expertenmeinung)', doku: 'isometrisches Adduktorentraining', ev: 'e', an: false },
        { t: 'Steigern bis exzentrisch', info: 'statisch zu dynamisch, kurzer vor langem Hebel (Expertenmeinung)', doku: 'progressives Adduktorentraining bis exzentrisch', ev: 'e', an: false },
        { t: 'Laufprogramm und sportspezifisch', info: 'parallel zum Krafttraining', doku: 'Lauf- und sportspezifisches Training', ev: 'e', an: false },
        { t: 'Copenhagen Adduction Exercise', info: 'Vorbereitung 6–8 Wochen 3× pro Woche, Saison 1× pro Woche; Stufe 1 Knie auf der Bank, Stufe 2–3 Fuß auf der Bank', doku: 'Copenhagen Adduction Exercise', ev: 's', an: true }
      ],
      berat: [
        { t: 'Kriterienbasierte Rückkehr', info: 'ins Teamtraining erst klinisch schmerzfrei; Re-Verletzung 5 % gegen 21 %', doku: 'Beratung zur kriterienbasierten Rückkehr ins Training', ev: 's', an: true },
        { t: 'Bei Misserfolg ärztlich', info: 'nach mindestens 2–3 Monaten gut dosiertem Training', doku: 'Empfehlung ärztlicher Vorstellung', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Nicht empfohlen: rein passive Physiotherapie, Dehnen allein zur Vorbeugung, Diagnose allein aus dem Bild.',
      'Operation als erste Wahl und Injektionen als Routine nicht empfohlen.',
      'Begriffe „sports hernia“ und „Gilmore’s groin“ vermeiden.'
    ],
    warn: ['Nacht- oder Ruheschmerz, Fieber, Gewichtsverlust, Tumoranamnese, Hoden- oder Unterbauchschmerz, Jugendliche mit Hinken → ärztlich; Knochendruckschmerz bei Belastung → entlasten, ärztlich; Leistenschwellung mit Einklemmung → 112.'],
    aerztlich: [
      'ESSKA 2026: alle Aussagen Grad C, keine Therapieaussagen; keine AWMF-Leitlinie.'
    ],
    quellen: [
      { k: 'Q400', t: 'Weir 2015 Doha-Konsens' }, { k: 'Q401', t: 'Hölmich 1999 RCT' }, { k: 'Q403', t: 'Serner 2020 Reha akut' },
      { k: 'Q404', t: 'Harøy 2019 Copenhagen-Übung' }, { k: 'Q405', t: 'Thorborg 2011 HAGOS' }, { k: 'Q402', t: 'ESSKA-EHPA-ESMA 2026' }
    ]
  },
  {
    id: 'K-HU08', karte: 'HU08', icd: ['Q65.8', 'M24.85'], titel: 'Hüftdysplasie beim Erwachsenen', kurzTitel: 'Hüftdysplasie',
    dokuDiagnose: 'Hüftdysplasie', bereich: 'Hüfte', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['hüftdysplasie', 'dysplasie', 'pao', 'periazetabuläre osteotomie', 'instabilität hüfte', 'lce'],
    untertitel: 'Inhalte aus der Wissenskarte HU08 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Knöcherne Unterdeckung des Hüftkopfs, häufiger bei Frauen; LCE unter 20° Dysplasie, 20 bis 25° Borderline.',
      'Vorderer Hüftschmerz beim Sitzen, Hocken oder Sport, Klicken, Instabilitätsgefühl; das Arthroserisiko ist etwa doppelt.',
      'Konservativ: Edukation und progressive Kräftigung von Gesäß, Abduktoren, Außenrotatoren und Rumpf; die Dosierung nach Reizbarkeit ist Expertenmeinung.',
      'Nach PAO Teilbelastung meist 6 bis 8 Wochen nach Vorgabe der Klinik, Sport nach 6 bis 12 Monaten.'
    ],
    ziele: [
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: true },
      { t: 'Einbeinkontrolle und Stabilität', doku: 'Verbesserung der Hüftstabilität', an: true },
      { t: 'Gesäß und Abduktoren kräftigen', doku: 'Kräftigung der Hüftmuskulatur', an: true },
      { t: 'Rückkehr zum Sport', doku: 'Rückkehr zur sportlichen Aktivität', an: false }
    ],
    strang: {
      deton: [],
      mobi: [],
      aktiv: [
        { t: 'Progressive Kräftigung', info: 'Gesäß, Abduktoren, Außenrotatoren, Rumpf; Dosierung nach Reizbarkeit', doku: 'progressive Kräftigung der Hüft- und Rumpfmuskulatur', ev: 'e', an: true },
        { t: 'Einbeinkontrolle', info: 'Stand und Bewegung auf einem Bein', doku: 'Training der Einbeinkontrolle', ev: 'e', an: true },
        { t: 'Sprung und Richtungswechsel', info: 'später, nach Verträglichkeit', doku: 'Sprung- und Richtungswechseltraining', ev: 'e', an: false },
        { t: 'Nach PAO: Kraftaufbau', info: 'Sport nach 6–12 Monaten bei mindestens 80 % Abduktorenkraft; Phasen Expertenmeinung', doku: 'Kraftaufbau nach PAO', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Edukation', info: 'Teil der konservativen Therapie', doku: 'Edukation', ev: 'e', an: true },
        { t: 'Teilbelastung nach PAO', info: 'meist 6–8 Wochen nach Vorgabe der Klinik', doku: 'Anleitung zur Teilbelastung', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.', mobi: 'Keine Kapseldehnung in Endstellung Extension und Außenrotation (Expertenmeinung).' },
    vorsicht: [
      'Keine Kapseldehnung in Endstellung Extension und Außenrotation (Expertenmeinung).',
      'Instabilitätstests haben keine belegte Testgüte, nur kombiniert werten.',
      'Übung und Edukation sind kaum untersucht (eine Studie ohne Kontrollgruppe); die Nachbehandlung nach PAO hat keine Vergleichsstudien.'
    ],
    warn: ['Verdacht auf Tumor, Infekt, Stressfraktur oder Epiphyseolysis capitis femoris, nach PAO Leistenschmerz bei Belastung → ärztlich; LCE unter 25° mit passender Klinik → Hüftsprechstunde.'],
    aerztlich: [
      'PAO: nach 10 Jahren etwa 76 % ohne TEP, Komplikationen 23,5 %.',
      'AWMF 187-054 gültig bis 30.11.2026, in Überarbeitung.'
    ],
    quellen: [
      { k: 'Q616', t: 'Reiman 2020 Zurich-Konsens' }, { k: 'Q617', t: 'Karimijashni 2026 Delphi Instabilität' }, { k: 'Q618', t: 'Saberi Hosnijeh 2017 Rotterdam' },
      { k: 'Q619', t: 'Tan 2022 Meta-Analyse PAO' }, { k: 'Q620', t: 'Jacobsen 2022 Machbarkeit Übung' }, { k: 'Q621', t: 'Leopold 2025 Nachbehandlung PAO' }
    ]
  },
  {
    id: 'K-HU09', karte: 'HU09', icd: ['M87'], titel: 'Hüftkopfnekrose', kurzTitel: 'Hüftkopfnekrose',
    dokuDiagnose: 'Hüftkopfnekrose', bereich: 'Hüfte', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['hüftkopfnekrose', 'femurkopfnekrose', 'osteonekrose', 'avn', 'nekrose hüfte'],
    untertitel: 'Inhalte aus der Wissenskarte HU09 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Absterben von Knochen im Hüftkopf, Stadien nach ARCO 2019; Risikofaktoren Kortison, Alkohol, Rauchen, Sichelzellkrankheit.',
      'Leistenschmerz bei normalem Röntgen, Diagnose per MRT. Bis Stadium II ist der Kopf noch erhaltbar.',
      'Ohne Behandlung schreiten 59 % der beschwerdefreien Herde fort, kleine mediale unter 10 %.',
      'Zur Physiotherapie gibt es keine Studie: Belastung nach ärztlicher Vorgabe, Übungen mit wenig axialer Last.'
    ],
    ziele: [
      { t: 'Hüftkopf nach ärztlicher Vorgabe entlasten', doku: 'Entlastung des Hüftkopfes', an: true },
      { t: 'Hüftkraft erhalten', doku: 'Erhalt der Hüftkraft', an: true },
      { t: 'In Bewegung bleiben mit wenig axialer Last', doku: 'Erhalt der Mobilität unter axialer Entlastung', an: true },
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Gehschule mit Teilbelastung', info: 'Belastung nach ärztlicher Vorgabe, meist Teilbelastung', doku: 'Gangschulung unter Teilbelastung', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'Rad und Wasser', info: 'wenig axiale Last', doku: 'Ausdauertraining mit geringer axialer Belastung', ev: 'e', an: true },
        { t: 'Hüftkraft im Sitzen oder Liegen', info: 'ohne axiale Last', doku: 'Kräftigung der Hüftmuskulatur in Entlastung', ev: 'e', an: true }
      ],
      berat: [
        { t: 'Belastungsberatung', info: 'keine Sprünge und kein Laufen im Prä-Kollaps', doku: 'Beratung zur Belastungssteuerung', ev: 'e', an: true }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Keine Sprünge und kein Laufen im Prä-Kollaps.',
      'Das ganze Vorgehen ist Expertenmeinung, zur Physiotherapie gibt es keine Studie.',
      'Abgrenzung zu Ermüdungsfraktur und subchondraler Insuffizienzfraktur ist schwierig.'
    ],
    warn: ['Neuer Leistenschmerz bei Kortison, viel Alkohol, Sichelzellkrankheit oder Nekrose der Gegenseite → ärztlich, MRT. Belastungsschmerz bei Läufern (Ermüdungsfraktur) → entlasten, ärztlich. Plötzliche Schmerzzunahme bei bekannter Nekrose (Einbruch) → ärztlich.'],
    aerztlich: [
      'Core decompression in 17 RCTs nicht klar besser als nicht-operativ; Zellzusatz im Phase-III-RCT abgebrochen, Bisphosphonate ohne Vorteil.',
      'Im Endstadium Prothese (Nachbehandlung siehe HU02).',
      'AWMF 187-058 abgelaufen, in Überarbeitung.'
    ],
    quellen: [
      { k: 'Q610', t: 'Yoon 2020 ARCO 2019' }, { k: 'Q611', t: 'Mont 2010 Spontanverlauf' }, { k: 'Q612', t: 'Liu 2021 Netzwerk-Meta-Analyse' },
      { k: 'Q613', t: 'Jayankura 2023 Phase-III-RCT' }, { k: 'Q614', t: 'Yuan 2016 Bisphosphonate' }
    ]
  },
  {
    id: 'K-HU10', karte: 'HU10', icd: ['M76.8', 'M24.85'], titel: 'Iliopsoas-Syndrom und schnappende Hüfte', kurzTitel: 'Schnappende Hüfte',
    dokuDiagnose: 'Iliopsoas-Syndrom bzw. schnappender Hüfte', bereich: 'Hüfte', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['schnappende hüfte', 'coxa saltans', 'iliopsoas', 'snapping hip', 'psoas', 'iliopsoas tendinopathie'],
    untertitel: 'Inhalte aus der Wissenskarte HU10 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Innere Form: Iliopsoassehne schnappt über die Eminentia iliopectinea; äußere Form: Tractus iliotibialis über den Trochanter.',
      'Schmerzloses Schnappen haben 5 bis 10 % der Bevölkerung, es ist harmlos und wird nicht behandelt. Nach TEP tritt eine Iliopsoas-Tendinopathie bei 2,2 bis 21 % auf.',
      'Erst konservativ, dann bildgesteuerte Kortisonspritze, dann OP; zur Physiotherapie gibt es kein RCT.',
      'Nach TEP ist die Ursache oft mechanisch (Pfannenüberstand): früh beim Operateur rückmelden.'
    ],
    ziele: [
      { t: 'Schmerz beim Provokationstest senken (NRS)', doku: 'Schmerzreduktion', an: true },
      { t: 'Hüftbeuger und Gesäß belastbar machen', doku: 'Kräftigung von Hüftbeugern und Glutealmuskulatur', an: true },
      { t: 'Auslöser in Alltag und Sport reduzieren', doku: 'Reduktion auslösender Belastungen', an: true },
      { t: 'Lumbopelvine Kontrolle verbessern', doku: 'Verbesserung der lumbopelvinen Kontrolle', an: false }
    ],
    strang: {
      deton: [],
      mobi: [],
      aktiv: [
        { t: 'Isometrische Hüftbeugung', info: 'in schmerzarmer mittlerer Flexion', doku: 'isometrisches Training der Hüftbeuger', ev: 'e', an: true },
        { t: 'Hüftbeuger und Gesäß dynamisch', info: 'danach, mit lumbopelviner Kontrolle; keine festen Wiederholungszahlen belegt', doku: 'dynamisches Hüftbeuger- und Glutealtraining', ev: 'e', an: true },
        { t: 'Äußere Form: Krafttraining', info: 'progressiv, Schmerz bis VAS 50 mm, solange er nicht zunimmt; Machbarkeitsstudie ohne Kontrollgruppe', doku: 'progressives Krafttraining', ev: 's', an: false },
        { t: 'Nach Release: Hüftbeuger kräftigen', info: 'Atrophie in 92,4 %', doku: 'Kräftigung der Hüftbeuger nach Tenotomie', ev: 's', an: false }
      ],
      berat: [
        { t: 'Auslöser reduzieren', info: 'Hüftbeugung gegen Widerstand, Sit-ups, Beinheben im Liegen, Tanzfiguren mit Flexion-Abduktion-Außenrotation; aktive Pause', doku: 'Beratung zur Reduktion auslösender Belastungen', ev: 'e', an: true },
        { t: 'Schmerzloses Schnappen', info: 'harmlos, nicht behandeln; nicht absichtlich üben', doku: 'Aufklärung zum schmerzlosen Schnappen', ev: 's', an: false },
        { t: 'Nach TEP früh rückmelden', info: 'bei Pfannenüberstand hilft die Spritze nur kurz', doku: 'Rückmeldung an den Operateur', ev: 's', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.', mobi: 'In der Karte nicht vorgesehen. Kein aggressives Dehnen der Hüftbeuger in der Reizphase.' },
    vorsicht: [
      'Kein aggressives Dehnen der Hüftbeuger in der Reizphase, Schnappen nicht absichtlich üben (Expertenmeinung).',
      'Thomas-Test und Snapping-Hip-Test nicht als Diagnosetest.',
      'Nach TEP bei überstehender Pfanne nicht monatelang konservativ behandeln oder wiederholt spritzen; keine Tenotomie bei Hüftdysplasie.'
    ],
    warn: ['Nach TEP erst Luxation, Infekt, Lockerung und Fraktur ausschließen. Fieber, Nachtschmerz, Belastungsunfähigkeit, ungewollter Gewichtsverlust (Psoasabszess, Stressfraktur, Tumor) → ärztlich.'],
    aerztlich: [
      'Bildgesteuerte Kortisonspritze vor OP; nach TEP ohne Pfannenüberstand meist erfolgreich, mit Überstand 5 von 20 revidiert.',
      'Arthroskopische Tenotomie beseitigt das Schnappen in 93 %, Atrophie der Hüftbeuger in 92,4 %.',
      'Keine AWMF-Leitlinie, keine internationale Leitlinie.'
    ],
    quellen: [
      { k: 'Q622', t: 'Sugrañes 2023 Review' }, { k: 'Q623', t: 'Vandeputte 2025 Testgüte' }, { k: 'Q624', t: 'Kjeldsen 2022 Krafttraining' },
      { k: 'Q625', t: 'Gouveia 2021 Tenotomie' }, { k: 'Q626', t: 'Romero Padron 2026 TEP' }, { k: 'Q627', t: 'Weintraub 2023 Injektion TEP' }
    ]
  },
  {
    id: 'K-KN02', karte: 'KN02', icd: ['Z96.65'], titel: 'Knieendoprothese (Nachbehandlung)', kurzTitel: 'Knie-TEP',
    dokuDiagnose: 'Z. n. Knie-TEP', bereich: 'Knie', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['knie-tep', 'tep knie', 'knieprothese', 'knieendoprothese', 'k-tep', 'schlittenprothese'],
    untertitel: 'Inhalte aus der Wissenskarte KN02 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Künstliches Kniegelenk bei fortgeschrittener Gonarthrose; Physio am OP-Tag, spätestens nach 24 h.',
      'Streckung früh sichern, Ziel etwa 110° Beugung. Für Treppe und Stuhl braucht der Alltag 90 bis 120°.',
      'Steifheit innerhalb von 12 Wochen erkennen: Beugung unter 90° oder Streckdefizit über 10° in Woche 6 bis 12 an den Operateur.',
      'Keine Motorschiene. Bei unkompliziertem Verlauf ist ein Heimprogramm gleichwertig.'
    ],
    ziele: [
      { t: 'Volle Streckung sichern', doku: 'Sicherung der Kniestreckung', an: true },
      { t: 'Beugung etwa 110°', doku: 'Verbesserung der Kniebeugung', an: true },
      { t: 'Quadrizeps ansteuern und kräftigen', doku: 'Kräftigung des M. quadriceps', an: true },
      { t: 'Treppe, Stuhl und Transfers', doku: 'Selbstständigkeit bei Treppe und Transfers', an: false },
      { t: 'Rückkehr zu Arbeit, Auto und Sport', doku: 'Wiederaufnahme von Arbeit und Sport', an: false }
    ],
    stationen: { deton: ['Akutphase', 'Woche 0–2'], mobi: ['Beweglichkeit', 'Streckung und Beugung'], aktiv: ['Kraft und Funktion', 'Woche 2–12'], berat: ['Heimprogramm und Verlauf', 'Steifheit früh erkennen'] },
    strang: {
      deton: [
        { t: 'Quadrizeps-Ansteuerung', info: 'Physio innerhalb von 24 h, Anspannen in Streckung', doku: 'Quadrizepsaktivierung', ev: 'l', an: true },
        { t: 'Elektrostimulation Quadrizeps', info: 'ab 48 h, 2× täglich, 15 Kontraktionen, 6 Wochen', doku: 'Elektrostimulation M. quadriceps', ev: 'l', an: false },
        { t: 'Kälte und Hochlagern', info: 'einfaches Kältepack', doku: 'Kryotherapie und Hochlagerung', ev: 'l', an: false },
        { t: 'Gehen mit Stützen', info: 'ab dem OP-Tag', doku: 'Gangschulung mit Unterarmgehstützen', ev: 'l', an: false }
      ],
      mobi: [
        { t: 'Streckung', info: 'Ferse auf Rolle, Knie nach unten drücken, Quadrizeps anspannen, 10 × 10 s', doku: 'Mobilisation in Extension', ev: 'l', an: true },
        { t: 'Beugung', info: 'Fersenrutschen; Ergometer erst schaukeln, ab etwa 90–100° ganze Umdrehung', doku: 'Mobilisation in Flexion', ev: 'e', an: true },
        { t: 'Beweglichkeit in Grad', info: 'Streckung und Beugung bei jeder Behandlung messen', doku: 'Verlaufskontrolle der Beweglichkeit', ev: 'e', an: false }
      ],
      aktiv: [
        { t: 'Kraft Quadrizeps und Hüfte', info: 'Beinheben, Sit-to-Stand, Step-ups, Beinpresse, je 3 × 8–10; hochintensiv möglich', doku: 'Kräftigung von Quadrizeps und Hüftmuskulatur', ev: 'l', an: true },
        { t: 'Gleichgewicht und Funktion', info: 'Einbeinstand, Gehen auf unebenem Grund (stark empfohlen)', doku: 'Gleichgewichts- und Funktionstraining', ev: 'l', an: true },
        { t: 'Ergometer', info: 'ab ganzer Umdrehung', doku: 'Ergometertraining', ev: 'l', an: false }
      ],
      berat: [
        { t: 'Heimprogramm', info: 'bei unkompliziertem Verlauf gleichwertig, betreute Therapie bei Problemen', doku: 'Anleitung Heimprogramm', ev: 's', an: true },
        { t: 'Steifheit früh melden', info: 'Beugung unter 90° oder Streckdefizit über 10° in Woche 6–12 an den Operateur', doku: 'Rückmeldung an den Operateur bei Bewegungsdefizit', ev: 'e', an: true },
        { t: 'Anschlussheilbehandlung', info: 'Bewegungstherapie mindestens 360 min pro Woche', doku: 'Beratung zur Anschlussheilbehandlung', ev: 'l', an: false }
      ]
    },
    vorsicht: [
      'Nicht empfohlen: Motorschiene (CPM).',
      'Kompressionsverband und Lymphdrainage nicht routinemäßig ohne Indikation; passive Maßnahmen nicht ohne aktive Therapie.',
      'Sätze, Wiederholungen und die Grenze für ein steifes Knie sind Expertenmeinung.'
    ],
    warn: ['Plötzliche Atemnot oder Brustschmerz → 112. Fieber über 37,8 °C, Rötung oder Sekret an der Wunde, neuer Ruheschmerz, Wadenschmerz mit Schwellung, neue Fußheberschwäche, Beugung stagniert unter 90° oder Streckdefizit über 10° → am selben Tag ärztlich.'],
    aerztlich: [
      'Bei Steifheit Narkosemobilisation innerhalb von 12 Wochen.',
      'Die EKIT-Knie regelt nur die Indikation; Dauer der Thromboseprophylaxe in der S3 VTE-Prophylaxe 2026 nachlesen.'
    ],
    quellen: [
      { k: 'Q58', t: 'APTA TKA 2020' }, { k: 'Q217', t: 'NICE NG157 2020' }, { k: 'Q223', t: 'Buhagiar 2017, HIHO' },
      { k: 'Q224', t: 'Kalson 2016, Arthrofibrose' }, { k: 'Q225', t: 'Cochrane 2014, CPM' }, { k: 'Q218', t: 'DRV RTS TEP 2025' }
    ]
  },
  {
    id: 'K-KN03', karte: 'KN03', icd: ['M22.2'], titel: 'Patellofemorales Schmerzsyndrom', kurzTitel: 'PFSS',
    dokuDiagnose: 'patellofemoralem Schmerzsyndrom', bereich: 'Knie', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['pfss', 'patellofemoral', 'vorderer knieschmerz', 'retropatellar', 'chondropathia patellae', 'pfps'],
    untertitel: 'Inhalte aus der Wissenskarte KN03 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Schmerz um oder hinter der Patella bei Belastung in Beugung; Jahresprävalenz 22,7 %, bei Jugendlichen 28,9 %.',
      'Diagnose klinisch: Ohne Schmerz bei der Kniebeuge ist ein PFSS unwahrscheinlich (LR− 0,2). Grind- und Clarke-Test nicht verwenden.',
      'Basis sind Hüft- plus Knieübungen mit Aufklärung über Belastung, 3× pro Woche über 6 bis 8 Wochen.',
      'Beschwerden über 12 Monate sind ungünstig. Bei Jugendlichen mit Hinken an die Hüfte denken.'
    ],
    ziele: [
      { t: 'Treppe und Hocke schmerzfrei', doku: 'schmerzfreies Treppensteigen und Hocken', an: true },
      { t: 'Rückkehr in Sport und Alltag', doku: 'Rückkehr zu Sport und Alltagsaktivität', an: true },
      { t: 'Belastung selbst steuern', doku: 'Selbstmanagement der Belastung', an: true },
      { t: 'Kraft Hüfte und Quadrizeps', doku: 'Kräftigung von Hüft- und Kniemuskulatur', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Manuelle Therapie', info: 'nur kombiniert mit Übungen; allein nicht empfohlen (Grad A dagegen)', doku: 'ergänzende Manuelle Therapie', ev: 'l', an: false }
      ],
      aktiv: [
        { t: 'Hüftübungen', info: 'Abduktion in Seitlage oder mit Band, Clamshell, Brücke, 3 × 10', doku: 'Kräftigung der Hüftmuskulatur', ev: 's', an: true },
        { t: 'Knieübungen', info: 'Beinpresse 0–60°, Kniebeuge im schmerzarmen Bereich, Kniestrecker; 3 × 10 bei etwa 70 % 1RM, 3× pro Woche, 6–8 Wochen', doku: 'Kräftigung der Kniemuskulatur', ev: 's', an: true },
        { t: 'Blutflussrestriktion', info: 'bei schlechter Verträglichkeit mit 30 % 1RM', doku: 'Krafttraining mit Blutflussrestriktion', ev: 'e', an: false },
        { t: 'Läufer: Laufstil anpassen', info: 'Grad C', doku: 'Laufstilanpassung', ev: 'l', an: false }
      ],
      berat: [
        { t: 'Schulung Belastung und Prognose', info: 'Belastung im Sport schrittweise steigern', doku: 'Schulung zu Belastung und Prognose', ev: 'l', an: true },
        { t: 'Schmerzregel', info: 'bis 5/10, am Folgetag nicht schlechter (Expertenregel)', doku: 'Belastungssteuerung nach Schmerz', ev: 'e', an: false },
        { t: 'Tape oder Einlagen', info: 'kurzfristig, kombiniert mit Übungen', doku: 'Tape bzw. Einlagenversorgung ergänzend', ev: 'l', an: false },
        { t: 'Jugendliche', info: 'Aktivität anpassen, Heimübungen, schrittweise Sport', doku: 'Aktivitätsanpassung und Heimprogramm', ev: 's', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen; Dry Needling nicht empfohlen.' },
    vorsicht: [
      'Nicht empfohlen: Manuelle Therapie allein, Dry Needling, Knieorthesen und Bandagen.',
      'Ebenso Ultraschall, Laser und Elektrotherapie.',
      'Grind- und Clarke-Test sind kaum brauchbar.'
    ],
    warn: ['Erguss, Blockierung, Instabilität, Fieber, Nachtschmerz, Trauma → ärztlich. Jugendliche mit Hinken oder eingeschränkter Hüftinnenrotation → ärztlich (Epiphysenlösung, 52 % zunächst übersehen).'],
    aerztlich: [
      'Keine deutsche AWMF-Leitlinie; die JOSPT-Grade stammen aus Zusammenfassungen, nicht aus dem Volltext.'
    ],
    quellen: [
      { k: 'Q21', t: 'JOSPT PFP 2019' }, { k: 'Q259', t: 'Konsens 2016' }, { k: 'Q260', t: 'Neal 2024' },
      { k: 'Q261', t: 'Cochrane 2015' }, { k: 'Q262', t: 'Lankhorst 2016' }, { k: 'Q263', t: 'Rathleff 2019' }
    ]
  },
  {
    id: 'K-KN04', karte: 'KN04', icd: ['S83.5'], titel: 'Vordere Kreuzbandruptur', kurzTitel: 'VKB-Ruptur',
    dokuDiagnose: 'vorderer Kreuzbandruptur', bereich: 'Knie', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['vkb', 'kreuzband', 'kreuzbandriss', 'acl', 'vkb-plastik', 'kreuzbandplastik'],
    untertitel: 'Inhalte aus der Wissenskarte KN04 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Riss des vorderen Kreuzbands, meist ohne Kontakt; Lachman schließt gut aus (LR− 0,17), Pivot Shift sichert (LR+ 16).',
      'Reha als Erstoption ist nach KANON gleichwertig; etwa die Hälfte wird später operiert.',
      'Reha nach Kriterien statt nach Zeit, vor einer OP Prähabilitation.',
      'Sport mit Richtungswechsel frühestens nach 9 Monaten und bei Testbatterie über 90 %; Präventionsprogramm dauerhaft.'
    ],
    ziele: [
      { t: 'Stabiles Knie im Alltag', doku: 'Kniestabilität im Alltag', an: true },
      { t: 'Rückkehr in den Sport nach Kriterien', doku: 'kriteriengeleitete Rückkehr zum Sport', an: true },
      { t: 'Zweite Verletzung vermeiden', doku: 'Prävention einer erneuten Verletzung', an: true },
      { t: 'Volle Streckung und Quadrizepskraft', doku: 'Wiederherstellung von Streckung und Quadrizepskraft', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Streckung sichern', info: 'sofort aktive Bewegung; Ferse hoch, Quadrizeps anspannen', doku: 'Mobilisation in Extension', ev: 'l', an: true }
      ],
      aktiv: [
        { t: 'Quadrizeps früh', info: 'Beinheben, ggf. Elektrostimulation und BFR; Belastung ab Woche 1', doku: 'frühe Quadrizepsaktivierung', ev: 'l', an: true },
        { t: 'Geschlossene Kette', info: 'Beinpresse, Kniebeuge, Ausfallschritt, Step-down, 3 × 8–12', doku: 'Kräftigung in geschlossener Kette', ev: 'l', an: true },
        { t: 'Offene Kette', info: 'Kniestrecker ab Woche 4 in 90–45°, mit geschlossener Kette kombinieren', doku: 'Kräftigung in offener Kette', ev: 'l', an: false },
        { t: 'Neuromuskulär', info: 'Einbeinstand, Störungen, Landungen, Hop-Tests', doku: 'neuromuskuläres Training', ev: 'l', an: false },
        { t: 'Laufen, Sprünge, Richtungswechsel', info: 'nach Kriterien (Expertenmeinung); Lauf-ABC, sportartspezifisch', doku: 'Lauf- und sportspezifisches Training', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Sportfreigabe nach Kriterien', info: 'frühestens nach 9 Monaten, Testbatterie über 90 % im Seitenvergleich', doku: 'kriteriengeleitete Sportfreigabe', ev: 's', an: true },
        { t: 'Prähabilitation', info: 'vor einer OP', doku: 'Prähabilitation', ev: 'l', an: false },
        { t: 'Präventionsprogramm', info: 'dauerhaft weiterführen', doku: 'Anleitung Präventionsprogramm', ev: 's', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Nicht empfohlen: Orthese routinemäßig nach Plastik, Motorschiene (CPM).',
      'Rückkehr in den Sport nicht allein nach Zeit.',
      'Fast alle Reha-Empfehlungen sind Expertenkonsens (Aspetar Grad D).'
    ],
    warn: [],
    aerztlich: [
      'Panther und AAOS raten Pivotsportlern eher zur frühen Plastik.',
      'Die S1 (jetzt 187-012) ist seit 09/2023 abgelaufen und in Überarbeitung.'
    ],
    quellen: [
      { k: 'Q269', t: 'Aspetar 2023' }, { k: 'Q270', t: 'KANON' }, { k: 'Q271', t: 'Grindem 2016' },
      { k: 'Q272', t: 'Webster 2018' }, { k: 'Q59', t: 'JOSPT Knee Ligament 2017' }, { k: 'Q19', t: 'S1 VKB 2018, abgelaufen' }
    ]
  },
  {
    id: 'K-KN05', karte: 'KN05', icd: ['S83.2', 'M23.2'], titel: 'Meniskusläsion', kurzTitel: 'Meniskusläsion',
    dokuDiagnose: 'Meniskusläsion', bereich: 'Knie', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['meniskus', 'meniskusriss', 'meniskusläsion', 'innenmeniskus', 'außenmeniskus', 'korbhenkelriss'],
    untertitel: 'Inhalte aus der Wissenskarte KN05 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Meniskusriss, degenerativ ab etwa 35 Jahren oder traumatisch.',
      'Bei degenerativen Rissen wirkt betreutes Training so gut wie die Teilresektion; starke Empfehlung gegen Arthroskopie, auch bei mechanischen Symptomen.',
      'Traumatisch bei 18 bis 45 Jahren: 12 Wochen Training sind nicht unterlegen, OP erst bei anhaltenden Beschwerden.',
      'Echte Blockade mit Streckdefizit oder nähbarer Riss früh ärztlich. Quadrizepsschwäche spricht für schnellere Arthrose.'
    ],
    ziele: [
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: true },
      { t: 'Quadrizepskraft im Seitenvergleich', doku: 'Kräftigung des M. quadriceps', an: true },
      { t: 'Beinachse und Kontrolle', doku: 'Verbesserung der Beinachsenkontrolle', an: true },
      { t: 'Alltag und Sport ohne Erguss', doku: 'ergussfreie Belastbarkeit in Alltag und Sport', an: false }
    ],
    strang: {
      deton: [],
      mobi: [],
      aktiv: [
        { t: 'Neuromuskuläres Training', info: 'Step-down, einbeinige Kniebeuge, Gleichgewicht; 8–12 Wochen betreut', doku: 'neuromuskuläres Training', ev: 's', an: true },
        { t: 'Krafttraining', info: 'Beinpresse, Kniebeuge, Step-up, Hamstrings, Hüfte, 3 × 10–12', doku: 'Krafttraining der Bein- und Hüftmuskulatur', ev: 's', an: true },
        { t: 'Ergometer', info: '10–20 min', doku: 'Ergometertraining', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Schulung', info: 'Teil des Programms; Hängenbleiben ohne Streckdefizit ist kein OP-Grund', doku: 'Patientenschulung', ev: 's', an: true },
        { t: 'Steigerung nach Schmerz und Erguss', info: 'Erguss bei jedem Termin prüfen', doku: 'Belastungssteuerung nach Schmerz und Erguss', ev: 'e', an: false },
        { t: 'Nach Naht: Vorgaben des Operateurs', info: 'oft 4–6 Wochen Teilbelastung, Beugung bis 90° (Expertenmeinung)', doku: 'Nachbehandlung nach Vorgabe des Operateurs', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.', mobi: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Keine arthroskopische Teilmeniskektomie bei degenerativen Knieschmerzen, auch nicht bei mechanischen Symptomen.',
      'Kein Routine-MRT in der Erstabklärung; degenerativ zuerst Röntgen.',
      'Reha-Vorgaben nach Naht sind Expertenmeinung.'
    ],
    warn: ['Echte Blockade mit Streckdefizit (z. B. Korbhenkelriss) oder akuter Erguss nach Trauma → zeitnah ärztlich.'],
    aerztlich: [
      'Traumatischer Riss: OP erst bei anhaltenden Beschwerden nach 12 Wochen Training; nähbarer Riss früh ärztlich.',
      'Die S2k ist im AWMF-Register nicht mehr verfügbar.'
    ],
    quellen: [
      { k: 'Q273', t: 'BMJ RapidRec 2017' }, { k: 'Q274', t: 'Kise 2016' }, { k: 'Q275', t: 'ESSKA 2017' },
      { k: 'Q276', t: 'DREAM 2022' }, { k: 'Q60', t: 'JOSPT Meniskus 2018' }
    ]
  },
  {
    id: 'K-KN06', karte: 'KN06', icd: ['S83.4'], titel: 'Innenbandverletzung', kurzTitel: 'Innenband',
    dokuDiagnose: 'Innenbandverletzung des Kniegelenks', bereich: 'Knie', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['innenband', 'mcl', 'innenbandriss', 'innenbandzerrung', 'valgustrauma', 'seitenband knie'],
    untertitel: 'Inhalte aus der Wissenskarte KN06 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Valgustrauma, Grad I bis III; heilt meist konservativ gut, auch Grad III, wenn isoliert.',
      'Valgus-Stresstest in 0° und 30°; Begleitverletzung von VKB oder Meniskus immer prüfen.',
      'Sport bei Grad I nach 1 bis 3 Wochen, Grad II nach 3 bis 6, Grad III nach 6 bis 12 Wochen.',
      'Früh bewegen, Kraft, dann sportspezifisch; die Reha-Evidenz ist sehr niedrig.'
    ],
    ziele: [
      { t: 'Rückkehr zum Sport je nach Grad', doku: 'Rückkehr zum Sport', an: true },
      { t: 'Quadrizeps- und Hüftkraft', doku: 'Kräftigung von Quadrizeps und Hüftmuskulatur', an: true },
      { t: 'Freie Beweglichkeit', doku: 'Wiederherstellung der Kniebeweglichkeit', an: true },
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Früh bewegen', info: 'Beweglichkeit von Anfang an', doku: 'frühfunktionelle Mobilisation', ev: 'l', an: true }
      ],
      aktiv: [
        { t: 'Quadrizeps und Hüftkraft', info: 'stufenweise steigern', doku: 'Kräftigung von Quadrizeps und Hüftmuskulatur', ev: 'e', an: true },
        { t: 'Seitwärtsbewegungen', info: 'stufenweise', doku: 'stufenweises Training von Seitwärtsbewegungen', ev: 'e', an: false },
        { t: 'Sportspezifisch', info: 'zum Schluss', doku: 'sportspezifisches Training', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Orthese nach Grad', info: 'Grad II nach Bedarf, Grad III mit Valgusschutz; Grad II bis zum Sport 32 Tage ohne, 42 Tage mit Orthese', doku: 'Beratung zur Orthesenversorgung', ev: 's', an: true },
        { t: 'Rückkehr zum Sport nach Grad', info: 'Grad I 1–3, Grad II 3–6, Grad III 6–12 Wochen; Wiederverletzung 8,5 %', doku: 'Beratung zur Rückkehr zum Sport', ev: 's', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Begleitverletzung von VKB oder Meniskus prüfen.',
      'Die Reha-Evidenz ist sehr niedrig, Zeitangaben nur als Rahmen nehmen.'
    ],
    warn: ['Aufklappbar in 0° oder großer Erguss → Kreuzband, hintere Kapsel, ärztlich. Fehlstellung, kalter Fuß, fehlender Puls, Taubheit, Fußheberschwäche → Notfall (Knieluxation). Ottawa positiv → Röntgen.'],
    aerztlich: [
      'OP bei Grad III mit VKB-Ruptur, Aufklappbarkeit nach 6 Wochen oder Ausriss.',
      'Keine eigene AWMF-Leitlinie.'
    ],
    quellen: [
      { k: 'Q364', t: 'Lundblad 2019 UEFA' }, { k: 'Q365', t: 'DKG-Konsens 2021' }, { k: 'Q366', t: 'Kastelein 2008' }, { k: 'Q59', t: 'Logerstedt 2017 JOSPT' }
    ]
  },
  {
    id: 'K-KN07', karte: 'KN07', icd: ['M76.5'], titel: 'Patellaspitzensyndrom (Patellasehnen-Tendinopathie)', kurzTitel: 'Patellaspitzensyndrom',
    dokuDiagnose: 'Patellasehnen-Tendinopathie', bereich: 'Knie', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['patellaspitzensyndrom', 'jumpers knee', 'patellasehne', 'tendinopathie', 'springerknie', 'patellatendinopathie'],
    untertitel: 'Inhalte aus der Wissenskarte KN07 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Belastungsschmerz am unteren Kniescheibenpol bei Sprungsportarten („Jumper’s Knee“), streng lokal und belastungsabhängig.',
      'Kern ist ein progressives Sehnenbelastungsprogramm über 12 Wochen: Isometrie, schwer und langsam (HSR), Energiespeicherung, Sport.',
      'Im Stufentraining steigt der VISA-P nach 24 Wochen um 28 Punkte, mit Exzentrik um 18; Stufenwechsel bei Testschmerz bis 3/10.',
      'Kortison ist nach 6 Monaten schlechter, ESWT nicht besser als Schein-ESWT.'
    ],
    ziele: [
      { t: 'Belastungsschmerz senken (NRS Decline-Squat)', doku: 'Schmerzreduktion unter Belastung', an: true },
      { t: 'Sehne wieder sprungfest machen', doku: 'Wiederherstellung der Sprungbelastbarkeit', an: true },
      { t: 'Rückkehr in Training und Wettkampf', doku: 'Rückkehr zum Sport', an: true },
      { t: 'VISA-P steigern', doku: 'Verbesserung im VISA-P', an: false }
    ],
    strang: {
      deton: [],
      mobi: [],
      aktiv: [
        { t: 'Isometrie', info: 'Beinstrecker oder Wandsitz, 5 × 45 s, 70 % Kraft', doku: 'isometrisches Sehnenbelastungstraining', ev: 's', an: true },
        { t: 'Schwer und langsam (HSR)', info: 'Beinpresse, Kniebeuge, Hackenschmidt; 3 s hoch, 3 s runter; 4 × 15 bis 4 × 6', doku: 'Heavy Slow Resistance Training', ev: 's', an: true },
        { t: 'Sprünge', info: 'erst, wenn Kraft da ist und VISA-P steigt', doku: 'Sprungtraining (Energiespeicherung)', ev: 's', an: false },
        { t: 'Wettkampfbelastung', info: 'zuletzt', doku: 'sportspezifische Wettkampfbelastung', ev: 's', an: false }
      ],
      berat: [
        { t: 'Schmerz-Monitoring', info: 'Stufenwechsel bei Testschmerz ≤ 3/10', doku: 'Belastungssteuerung nach Schmerz-Monitoring', ev: 's', an: true }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.', mobi: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Kortison ist nach 6 Monaten schlechter als Krafttraining.',
      'ESWT ist nicht besser als Schein-ESWT.',
      'Die Evidenz für Übungen ist insgesamt niedrig.'
    ],
    warn: ['Ruhe- oder Nachtschmerz, Gelenkerguss, plötzlicher Kraftverlust nach Sprung (Teilruptur), Fieber oder Rötung → ärztlich. Bei Jugendlichen an Sinding-Larsen-Johansson und Osgood-Schlatter denken.'],
    aerztlich: ['Keine eigene AWMF-Leitlinie.'],
    quellen: [
      { k: 'Q357', t: 'Breda 2021 JUMPER' }, { k: 'Q358', t: 'Kongsgaard 2009' }, { k: 'Q359', t: 'Cochrane 2025 Übungen' },
      { k: 'Q360', t: 'Hernandez-Sanchez 2014 VISA-P' }, { k: 'Q65', t: 'Silbernagel 2007 Schmerzmonitoring' }
    ]
  },
  {
    id: 'K-KN08', karte: 'KN08', icd: ['S83.0'], titel: 'Patellaluxation', kurzTitel: 'Patellaluxation',
    dokuDiagnose: 'Z. n. Patellaluxation', bereich: 'Knie', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['patellaluxation', 'kniescheibe rausgesprungen', 'mpfl', 'luxation patella', 'patellainstabilität'],
    untertitel: 'Inhalte aus der Wissenskarte KN08 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Die Kniescheibe springt nach außen, meist bei Jugendlichen, oft mit Trochleadysplasie, Patella alta oder Valgus.',
      'Erstluxation meist konservativ, bei Rezidiv oft MPFL-Plastik. Die OP senkt Reluxationen, der Kujala ist nicht sicher besser.',
      'Konservativ: Erguss kontrollieren, Quadrizeps aktivieren, früh mobilisieren, Kraft ohne Apprehension; Testbatterie vor dem Sport, meist nach 2 bis 4 Monaten.',
      'Knorpelschaden ärztlich klären. Dosierungen sind nicht studienbelegt.'
    ],
    ziele: [
      { t: 'Quadrizeps aktivieren und kräftigen', doku: 'Kräftigung des M. quadriceps', an: true },
      { t: 'Knieachse und Landetechnik kontrollieren', doku: 'Verbesserung der Beinachsenkontrolle', an: true },
      { t: 'Rückkehr in den Sport nach Testbatterie', doku: 'kriteriengeleitete Rückkehr zum Sport', an: true },
      { t: 'Keine erneute Luxation', doku: 'Prävention einer Reluxation', an: false }
    ],
    stationen: { deton: ['Erguss', 'Akutphase'] },
    strang: {
      deton: [
        { t: 'Erguss kontrollieren', info: 'konservativ ohne osteochondrale Fraktur', doku: 'Ergusskontrolle', ev: 'e', an: true }
      ],
      mobi: [
        { t: 'Frühe Mobilisation', info: 'Belastung nach Toleranz; kein Konsens zur Ruhigstellung', doku: 'frühfunktionelle Mobilisation', ev: 'l', an: true }
      ],
      aktiv: [
        { t: 'Quadrizeps aktivieren', info: 'früh beginnen', doku: 'Quadrizepsaktivierung', ev: 'l', an: true },
        { t: 'Kraft ohne Apprehension', info: 'steigern ohne Instabilitätsgefühl', doku: 'Krafttraining ohne Apprehension', ev: 'l', an: true },
        { t: 'Knieachse und Landetechnik', info: 'neuromuskulär, Übungen wie beim PFSS (KN03)', doku: 'neuromuskuläres Training der Beinachse', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Testbatterie vor Sport', info: 'meist nach 2–4 Monaten', doku: 'Testung vor Rückkehr zum Sport', ev: 'e', an: true },
        { t: 'Nach MPFL-Rekonstruktion', info: 'Vorgaben des Operateurs; Sport im Mittel nach 6,7–7,0 Monaten', doku: 'Nachbehandlung nach Vorgabe des Operateurs', ev: 'e', an: false }
      ]
    },
    vorsicht: [
      'Kein Konsens zur Ruhigstellung.',
      'Dosierungen sind nicht studienbelegt.',
      'MRT früh, Knorpelschaden ärztlich klären.'
    ],
    warn: ['Großer, schnell entstandener Erguss, Blockade oder Klemmen, aktive Streckung nicht möglich → sofort ärztlich. Instabilität in andere Richtung nach Valgus-Rotationstrauma, Kind mit offenen Fugen ohne MRT → ärztlich.'],
    aerztlich: [
      'OP senkt Reluxationen (348 pro 1.000 konservativ, 157 weniger nach OP), Evidenz sehr niedrig; MPFL-Rekonstruktion 3,9 % gegen 33,3 % Reinstabilität.',
      'ESSKA: Physio in beiden Wegen, Rekonstruktion vor Repair.',
      'AWMF 187-027 seit 24.10.2026 abgelaufen, in Überarbeitung.'
    ],
    quellen: [
      { k: 'Q412', t: 'Smith 2023 Cochrane' }, { k: 'Q413', t: 'Jaquith & Parikh 2017' }, { k: 'Q414', t: 'Patel 2026 RCT-Metaanalyse' },
      { k: 'Q415', t: 'ESSKA 2024 Teil 1' }, { k: 'Q417', t: 'Hurley 2023 Delphi Teil I' }
    ]
  },
  {
    id: 'K-KN11', karte: 'KN11', icd: ['M22.0', 'M22.1'], titel: 'Habituelle Patellaluxation', kurzTitel: 'Habituelle Patellaluxation',
    dokuDiagnose: 'habitueller Patellaluxation', bereich: 'Knie', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['habituelle patellaluxation', 'rezidivierende patellaluxation', 'mpfl', 'patellainstabilität', 'trochleadysplasie'],
    untertitel: 'Inhalte aus der Wissenskarte KN11 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Die Kniescheibe springt wiederholt nach außen, bei der habituellen Form bei jeder Beugung oder Streckung; Ursache meist Trochleadysplasie, Patella alta oder erhöhter TT-TG.',
      'Die habituelle Form wird operiert, Standard ist die MPFL-Rekonstruktion; ein großer Vergleich mit konservativer Therapie fehlt.',
      'Nach MPFL-Rekonstruktion kehren 92,8 % zum Sport zurück, im Mittel nach 6,7 Monaten; Angst ist der häufigste Grund dagegen.',
      'Physiotherapie: Kraft und Kontrolle ohne Apprehension, Rückkehr in den Sport nach Kriterien.'
    ],
    ziele: [
      { t: 'Kraft und Kontrolle des Beins', doku: 'Verbesserung von Kraft und Beinachsenkontrolle', an: true },
      { t: 'Rückkehr in den Sport nach Kriterien', doku: 'kriteriengeleitete Rückkehr zum Sport', an: true },
      { t: 'Angst vor neuer Luxation abbauen', doku: 'Abbau der Bewegungsangst', an: false }
    ],
    strang: {
      deton: [],
      mobi: [],
      aktiv: [
        { t: 'Krafttraining ohne Apprehension', info: 'Delphi-Konsens; Dosierung Expertenmeinung', doku: 'Krafttraining ohne Apprehension', ev: 'l', an: true },
        { t: 'Kontrolle', info: 'Knieachse unter Belastung', doku: 'Training der Beinachsenkontrolle', ev: 'e', an: true }
      ],
      berat: [
        { t: 'Rückkehr nach Kriterien', info: 'nicht allein nach Zeit', doku: 'kriteriengeleitete Rückkehr zum Sport', ev: 'e', an: true },
        { t: 'Angst ansprechen', info: 'häufigster Grund gegen die Rückkehr', doku: 'Thematisierung der Bewegungsangst', ev: 's', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.', mobi: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Die konservative Dosierung ist Expertenmeinung; kein Konsens zur Ruhigstellung.',
      'Nach isolierter MPFL-Plastik erhöhen Dejour B/D und CDI über 1,3 das Risiko.'
    ],
    warn: ['Großer Erguss oder Hämarthros nach neuem Ereignis, echtes Streckdefizit oder Blockade (freier Gelenkkörper) → ärztlich.'],
    aerztlich: [
      'Habituelle Form: Operation, Standard ist die MPFL-Rekonstruktion; Reinstabilität danach 1,9 %.',
      'AWMF 187-027 seit 24.10.2026 abgelaufen, in Überarbeitung.'
    ],
    quellen: [
      { k: 'Q412', t: 'Smith 2023 Cochrane' }, { k: 'Q417', t: 'Hurley 2023 Delphi Teil I' }, { k: 'Q628', t: 'Huntington 2020 Risikofaktoren' },
      { k: 'Q629', t: 'Dandu 2025 Risiko nach MPFL-Plastik' }, { k: 'Q630', t: 'Platt 2022 Return to Sport' }, { k: 'Q631', t: 'Ryan 2025 Angst und Return to Sport' }
    ]
  },
  {
    id: 'K-KN09', karte: 'KN09', icd: ['M76.3'], titel: 'Iliotibiales Bandsyndrom', kurzTitel: 'ITBS',
    dokuDiagnose: 'iliotibialem Bandsyndrom', bereich: 'Knie', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['itbs', 'läuferknie', 'tractus iliotibialis', 'itb', 'runners knee', 'knieaußenseite'],
    untertitel: 'Inhalte aus der Wissenskarte KN09 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Schmerz an der Knieaußenseite bei etwa 30° Beugung („Läuferknie“), typisch nach einer bestimmten Laufstrecke.',
      'Keine Maßnahme ist klar überlegen; strukturierte Reha ist erste Wahl, die Kräftigung der Hüftabduktoren ist der gemeinsame Nenner.',
      'Laufumfang auf schmerzfreies Niveau senken oder 2 bis 6 Wochen pausieren, dann 6 bis 8 Wochen Hüftabduktoren und Gluteen kräftigen und das Laufen schrittweise aufbauen.',
      'Es ist Kompression statt Reibung; der Ober-Test zeigt Hüftadduktion und Gluteen, keinen „verkürzten Tractus“.'
    ],
    ziele: [
      { t: 'Schmerzfrei laufen', doku: 'schmerzfreies Laufen', an: true },
      { t: 'Hüftabduktoren und Gluteen kräftigen', doku: 'Kräftigung der Hüftabduktoren', an: true },
      { t: 'Einbeinkontrolle', doku: 'Verbesserung der Einbeinstabilität', an: true },
      { t: 'Laufumfang schrittweise aufbauen', doku: 'stufenweiser Laufaufbau', an: false }
    ],
    strang: {
      deton: [],
      mobi: [],
      aktiv: [
        { t: 'Hüftabduktoren und Gluteen', info: '6–8 Wochen kräftigen', doku: 'Kräftigung der Hüftabduktoren und Glutealmuskulatur', ev: 's', an: true },
        { t: 'Bewegungskontrolle im Einbeinstand', info: 'parallel zur Kräftigung', doku: 'Training der Einbeinstabilität', ev: 's', an: true },
        { t: 'Laufaufbau', info: 'schrittweise, anfangs nicht bergab', doku: 'stufenweiser Laufaufbau', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Laufumfang anpassen', info: 'auf schmerzfreies Niveau senken oder 2–6 Wochen pausieren', doku: 'Beratung zur Anpassung des Laufumfangs', ev: 'e', an: true },
        { t: 'Kadenz und Bikefit', info: 'Kadenz +5 bis +10 %; Expertenmeinung', doku: 'Beratung zu Kadenz bzw. Bikefit', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.', mobi: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Ober-Test nicht als „Tractus verkürzt“ deuten.',
      'Anfangs nicht bergab laufen.',
      'Noble-Kompressionstest ohne Daten zur Testgüte.'
    ],
    warn: ['Nacht- oder Ruheschmerz, Fieber, Gelenkerguss, Rötung, Trauma mit Instabilität, Gewichtsverlust oder Nachtschweiß, neurologische Ausfälle, Verdacht auf Knochenstress (RED-S) → ärztlich. Nach mehreren Wochen Reha ohne Besserung → ärztlich, Bildgebung.'],
    aerztlich: ['Keine AWMF-Leitlinie.'],
    quellen: [
      { k: 'Q406', t: 'Ferrero 2026 SR Orthop Res Rev' }, { k: 'Q407', t: 'Beals 2013 Review' }, { k: 'Q408', t: 'Fredericson 2000 Stanford' },
      { k: 'Q409', t: 'Sanchez-Alvarado 2024 SR' }, { k: 'Q410', t: 'Willett 2016 Ober-Test' }, { k: 'Q411', t: 'Fairclough 2006 Anatomie' }
    ]
  },
  {
    id: 'K-KN10', karte: 'KN10', icd: ['S82.1'], titel: 'Tibiakopffraktur', kurzTitel: 'Tibiakopffraktur',
    dokuDiagnose: 'Z. n. Tibiakopffraktur', bereich: 'Knie', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['tibiakopffraktur', 'tibiaplateaufraktur', 'schienbeinkopf', 'schatzker', 'orif knie'],
    untertitel: 'Inhalte aus der Wissenskarte KN10 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Gelenkbeteiligter Bruch des Schienbeinkopfs, oft operativ; in Deutschland 22 bis 25 pro 100.000, 62 % Frauen.',
      'Lange Teilbelastung, häufig 6 bis 12 Wochen, bei früher Bewegung; Ablauf wie nach Knie-TEP Phase 1 bis 2, aber mit längerer Frühphase.',
      'Frühe Belastung nach ORIF Schatzker I bis IV ohne Repositionsverlust, allerdings in kleinen Studien.',
      'Risiko für posttraumatische Arthrose: Knieprothese bei 7,3 % nach 10 Jahren.'
    ],
    ziele: [
      { t: 'Streckung sichern', doku: 'Sicherung der Kniestreckung', an: true },
      { t: 'Beugung schrittweise verbessern', doku: 'Verbesserung der Kniebeugung', an: true },
      { t: 'Quadrizeps aktivieren', doku: 'Aktivierung des M. quadriceps', an: true },
      { t: 'Gehen unter Vollbelastung', doku: 'Gangschulung unter Vollbelastung', an: false }
    ],
    stationen: { deton: ['Frühphase', 'Teilbelastung'], mobi: ['Beweglichkeit', 'Beugung schrittweise'], aktiv: ['Kraft und Gang', 'nach Vollbelastung'], berat: ['Belastung und Verlauf', 'Vorgaben beachten'] },
    strang: {
      deton: [
        { t: 'Gehen mit Teilbelastung', info: 'nach Vorgabe, häufig 6–12 Wochen', doku: 'Gangschulung unter Teilbelastung', ev: 'e', an: true },
        { t: 'Quadrizeps-Aktivierung', info: 'von Anfang an', doku: 'Quadrizepsaktivierung', ev: 'e', an: true }
      ],
      mobi: [
        { t: 'Streckung sichern', info: 'wie nach Knie-TEP (KN02)', doku: 'Mobilisation in Extension', ev: 'e', an: true },
        { t: 'Beugung schrittweise', info: 'früh bewegen', doku: 'Mobilisation in Flexion', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'Krafttraining', info: 'nach Vollbelastung', doku: 'Kräftigung der Beinmuskulatur', ev: 'e', an: true },
        { t: 'Gangtraining', info: 'nach Vollbelastung', doku: 'Gangtraining', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Belastungsvorgabe', info: 'Vorgabe einhalten; frühe Belastung nach ORIF Schatzker I–IV in kleinen Studien ohne Repositionsverlust', doku: 'Beratung zur Belastung nach Vorgabe', ev: 's', an: true },
        { t: 'Arthroserisiko', info: 'posttraumatische Arthrose möglich', doku: 'Aufklärung zum Arthroserisiko', ev: 's', an: false }
      ]
    },
    vorsicht: [
      'Teilbelastung nach Vorgabe des Operateurs einhalten.',
      'Komplikationen: Kompartmentsyndrom 1–7 %, Infekt etwa 10 %, Peroneusparese 1,5–5 %.'
    ],
    warn: ['Kompartmentsyndrom (starker Schmerz, Spannung, Gefühlsstörung am Fuß) früh nach Verletzung → sofort ärztlich.'],
    aerztlich: [
      'Konservativ bis 4 mm Verschiebung gleichwertig.',
      'Stumme Thrombose vor OP bei 24 %.',
      'Keine eigene AWMF-Leitlinie.'
    ],
    quellen: [
      { k: 'Q383', t: 'InEK Deutschland 2025' }, { k: 'Q384', t: 'Wasserstein 2014 JBJS' }, { k: 'Q385', t: 'RCT sofortige Belastung 2025' }, { k: 'Q386', t: 'Williamson 2018' }
    ]
  },
  {
    id: 'K-FU02', karte: 'FU02', icd: ['M76.8', 'M21.4'], titel: 'Tibialis-posterior-Dysfunktion / erworbener Plattfuß', kurzTitel: 'Tibialis-posterior-Dysfunktion',
    dokuDiagnose: 'Tibialis-posterior-Dysfunktion', bereich: 'Fuß', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['tibialis posterior', 'plattfuß', 'knick-plattfuß', 'pcfd', 'ttpd', 'tibialis-posterior-sehne'],
    untertitel: 'Inhalte aus der Wissenskarte FU02 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Tendinopathie und Insuffizienz der Tibialis-posterior-Sehne mit erworbenem Knick-Plattfuß, meist bei Frauen ab 40 mit Übergewicht; das ausgeprägte Bild heißt seit 2020 Progressive Collapsing Foot Deformity.',
      'Leitbefund: Einbeinzehenstand schmerzhaft oder nicht möglich (Kappa 0,74); Rückfuß flexibel oder rigide einteilen.',
      'Kern ist eine Orthese mit medialer Längsgewölbestütze plus Dehnung und geführtes, gesteigertes Krafttraining, exzentrisch am wirksamsten.',
      'Ohne OP in Fallserien 70 bis 88 % Erfolg; ein rigider oder fortschreitender Fuß gehört früh zum Fußchirurgen.'
    ],
    ziele: [
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: true },
      { t: 'Einbeinzehenstand wieder möglich', doku: 'Kräftigung des M. tibialis posterior', an: true },
      { t: 'Länger schmerzarm gehen', doku: 'Verbesserung der Gehstrecke', an: false },
      { t: 'Orthese im Alltag tragen', doku: 'konsequente Orthesenversorgung', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Wadendehnung', info: 'Gastrocnemius; in den Studien Teil des Programms', doku: 'Dehnung der Wadenmuskulatur', ev: 's', an: false }
      ],
      aktiv: [
        { t: 'Exzentrische Inversion', info: 'gegen Theraband aus Plantarflexion-Inversion; am wirksamsten', doku: 'exzentrisches Training des M. tibialis posterior', ev: 's', an: true },
        { t: 'Konzentrische Inversion', info: 'gegen Widerstand', doku: 'konzentrisches Training des M. tibialis posterior', ev: 's', an: false },
        { t: 'Zehenstand', info: 'beidbeinig, dann einbeinig, Ball zwischen den Fersen (Expertenmeinung)', doku: 'Zehenstandtraining', ev: 'e', an: false },
        { t: 'Hüftabduktoren und Gleichgewicht', info: 'Expertenmeinung', doku: 'Kräftigung der Hüftabduktoren und Gleichgewichtstraining', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Orthese mit Gewölbestütze', info: 'möglichst individuell; besser als flache Einlage', doku: 'Beratung zur Orthese mit medialer Längsgewölbestütze', ev: 's', an: true },
        { t: 'Training geführt steigern', info: 'Heimprogramm moderater Intensität bringt kaum etwas', doku: 'angeleitete Progression des Trainings', ev: 's', an: true }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Heimprogramm moderater Intensität allein bringt kaum Zusatznutzen.',
      'Laser ist Einlagen unterlegen; zu Kortison, Stoßwelle, PRP und Taping keine Studien gesichtet.',
      'Sätze und Wiederholungen der Studien sind nicht berichtet; die alten Stadien nach Johnson/Strom wurden nie validiert.'
    ],
    warn: ['Warmer, geschwollener, geröteter Fuß bei Diabetes mit Neuropathie (Charcot), plötzlicher Kraftverlust (Ruptur), rasch zunehmender oder steifer Plattfuß, Fortschreiten trotz Orthese → ärztlich.'],
    aerztlich: [
      'Rigider oder fortschreitender Fuß früh fußchirurgisch; OP erwogen nach 3 bis 6 Monaten ohne Erfolg.',
      'Keine AWMF-Leitlinie zum erworbenen Plattfuß des Erwachsenen.'
    ],
    quellen: [
      { k: 'Q484', t: 'Kulig 2009 RCT' }, { k: 'Q485', t: 'Houck 2015 RCT' }, { k: 'Q486', t: 'Ross 2018 Übersicht Übungen' },
      { k: 'Q487', t: 'Gómez-Jurado 2021 Orthesen' }, { k: 'Q488', t: 'Ross 2021 Testreliabilität' }, { k: 'Q489', t: 'Nielsen 2011 konservativ' }
    ]
  },
  {
    id: 'K-FU03', karte: 'FU03', icd: ['M77.4'], titel: 'Metatarsalgie', kurzTitel: 'Metatarsalgie',
    dokuDiagnose: 'Metatarsalgie', bereich: 'Fuß', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['metatarsalgie', 'vorfußschmerz', 'mittelfußschmerz', 'pelotte', 'spreizfuß'],
    untertitel: 'Inhalte aus der Wissenskarte FU03 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Schmerz unter den Mittelfußköpfchen 2 bis 4; ein Ort und keine Diagnose, primär, sekundär oder iatrogen.',
      'Abgrenzen: Morton-Neurom, Plantarplattenläsion, Stressfraktur, Morbus Freiberg, Arthritis.',
      'Ursache klären, dann entlasten: Pelotte direkt proximal des Köpfchens, Maßeinlage, flacher breiter Schuh mit steifer Sohle.',
      'Die Studienlage ist dünn. Nach etwa 3 bis 6 Monaten ohne Fortschritt orthopädisch vorstellen.'
    ],
    ziele: [
      { t: 'Belastungsschmerz senken (NRS)', doku: 'Reduktion des Belastungsschmerzes', an: true },
      { t: 'Vorfuß entlasten', doku: 'Entlastung des Vorfußes', an: true },
      { t: 'OSG-Dorsalextension verbessern', doku: 'Verbesserung der Dorsalextension im OSG', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Wadendehnung', info: 'Expertenmeinung; verkürzte Wade nur aus Querschnittsstudie', doku: 'Dehnung der Wadenmuskulatur', ev: 'e', an: false }
      ],
      aktiv: [
        { t: 'Fußkraft', info: 'Expertenmeinung, keine kontrollierte Studie', doku: 'Kräftigung der Fußmuskulatur', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Pelotte', info: 'direkt proximal des Köpfchens, nur dort sinkt der Druck', doku: 'Beratung zur Pelotte', ev: 's', an: true },
        { t: 'Maßeinlage', info: '9 RCTs, meist stärkste Schmerzreduktion', doku: 'Beratung zur Maßeinlage', ev: 's', an: true },
        { t: 'Schuhberatung', info: 'flach, breit, steife Sohle (Expertenmeinung)', doku: 'Schuhberatung', ev: 'e', an: false },
        { t: 'Belastungssteuerung und Tape', info: 'Expertenmeinung', doku: 'Belastungssteuerung', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Ultraschall nur mit Klinik werten: 54 % der Gesunden haben eine Nervenverdickung.',
      'Ein negativer Squeeze-Test schließt Arthritis nicht aus.',
      'Rockerbar senkt den Druck, nicht den Schmerz.'
    ],
    warn: ['Rötung, Überwärmung, Fieber, warmer geschwollener Fuß bei Diabetes, Ruhe- und Nachtschmerz, wachsende Raumforderung, Durchblutungsstörung, Knochendruckschmerz nach Belastungssteigerung, mehrere geschwollene Grundgelenke → ärztlich.'],
    aerztlich: [
      'Morton-Neurom: ultraschallgeführte Injektion besser.',
      'Keine AWMF-Leitlinie; ACFAS 2009 veraltet.'
    ],
    quellen: [
      { k: 'Q490', t: 'Hsi 2005 Pelottenposition' }, { k: 'Q491', t: 'Männikkö 2017 Pelottenkohorte' }, { k: 'Q492', t: 'DiGiovanni 2002 Gastrocnemius' },
      { k: 'Q493', t: 'Arias-Martín 2018 Maßeinlagen' }, { k: 'Q494', t: 'Klein 2014 Drawer-Test' }, { k: 'Q495', t: 'Cochrane 2024 Morton-Neurom' }
    ]
  },
  {
    id: 'K-FU04', karte: 'FU04', icd: ['G57.6'], titel: 'Morton-Neurom', kurzTitel: 'Morton-Neurom',
    dokuDiagnose: 'Morton-Neurom', bereich: 'Fuß', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['morton', 'morton-neurom', 'mortonneurom', 'neurom vorfuß', 'interdigitalneurom'],
    untertitel: 'Inhalte aus der Wissenskarte FU04 (Karte noch nicht vertieft), nach Vorgehen sortiert',
    abriss: [
      'Verdickung eines Zehennervs, meist zwischen 3. und 4. Mittelfußköpfchen.',
      'Brennender Schmerz, Taubheit der Zehen, Gefühl, auf einer Falte zu laufen; enge Schuhe verstärken.',
      'Konservativ: breite Schuhe, Pelotte, Belastungsanpassung; ärztlich Injektion oder OP.'
    ],
    ziele: [
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: true },
      { t: 'Vorfuß entlasten', doku: 'Entlastung des Vorfußes', an: true },
      { t: 'Gehen in Alltagsschuhen', doku: 'Verbesserung der Gehtoleranz', an: false }
    ],
    strang: {
      deton: [],
      mobi: [],
      aktiv: [],
      berat: [
        { t: 'Breite Schuhe', info: 'enge Schuhe verstärken', doku: 'Schuhberatung', ev: 'e', an: true },
        { t: 'Pelotte', info: 'zur Entlastung', doku: 'Beratung zur Pelotte', ev: 'e', an: true },
        { t: 'Belastungsanpassung', info: 'nach Beschwerden', doku: 'Beratung zur Belastungsanpassung', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.', mobi: 'In der Karte nicht vorgesehen.', aktiv: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Enge Schuhe verstärken die Beschwerden.',
      'Karte noch nicht vertieft, Inhalte fachlich prüfen.'
    ],
    warn: [],
    aerztlich: ['Injektion oder OP ärztlich.'],
    quellen: []
  },
  {
    id: 'K-FU05', karte: 'FU05', icd: ['M84.37'], titel: 'Ermüdungsfraktur Mittelfuß', kurzTitel: 'Ermüdungsfraktur Mittelfuß',
    dokuDiagnose: 'Ermüdungsfraktur des Mittelfußes', bereich: 'Fuß', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['ermüdungsfraktur', 'stressfraktur', 'marschfraktur', 'mittelfuß', 'reds', 'stressreaktion'],
    untertitel: 'Inhalte aus der Wissenskarte FU05 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Stressfraktur, meist am Schaft MT2 oder MT3, bei Läufern und Rekruten nach Trainingssteigerung.',
      'Risikofaktoren: Energiemangel (REDs, Triad), Zyklusstörung, niedrige Knochendichte, frühere Stressfraktur, niedrige Schrittfrequenz.',
      'Erst den Ort klären. Hochrisiko sind proximale MT5, Basis MT2, Navikulare und Sesambeine; dort sind Entlastung und Freigabe ärztlich.',
      'Laufbeginn nach 5 schmerzfreien Alltagstagen, erst Umfang, dann Tempo (Expertenkonsens); Physio-RCTs gibt es nicht.'
    ],
    ziele: [
      { t: 'Schmerzfrei im Alltag', doku: 'Schmerzfreiheit im Alltag', an: true },
      { t: 'Fitness mit Ausgleichstraining erhalten', doku: 'Erhalt der Ausdauerleistung', an: true },
      { t: 'Zurück zum Laufen ohne Rückfall', doku: 'stufenweise Rückkehr zum Laufen', an: true },
      { t: 'Risikofaktoren angehen', doku: 'Beratung zu Risikofaktoren', an: false }
    ],
    stationen: { deton: ['Entlastung', 'bis Beschwerden abklingen'], mobi: ['Ausgleichstraining', 'ohne Last auf dem Fuß'], aktiv: ['Laufaufbau', 'nach Kriterien'], berat: ['Risikofaktoren', 'REDs, Knochendichte'] },
    strang: {
      deton: [
        { t: 'Teil- oder Nichtbelastung', info: 'Schaft MT2–4 bis Beschwerden abklingen; Hochrisiko-Orte nach ärztlicher Vorgabe', doku: 'Entlastung', ev: 'l', an: true }
      ],
      mobi: [
        { t: 'Ausgleichstraining', info: 'während der Entlastung', doku: 'Ausgleichstraining', ev: 'l', an: true }
      ],
      aktiv: [
        { t: 'Laufbeginn', info: 'nach 5 schmerzfreien Alltagstagen, erst Umfang, dann Tempo, kein Symptom am Folgetag', doku: 'stufenweiser Laufaufbau', ev: 'l', an: true },
        { t: 'Sprungtraining und Schrittfrequenz', info: 'danach', doku: 'Sprungtraining und Anpassung der Schrittfrequenz', ev: 'l', an: false }
      ],
      berat: [
        { t: 'Energieverfügbarkeit und Zyklus', info: 'REDs und Triad erfragen; bei zweiter Stressfraktur ärztlich', doku: 'Beratung zu Energieverfügbarkeit', ev: 'l', an: true },
        { t: 'Belastungssteuerung', info: 'nach Optimal Load', doku: 'Belastungssteuerung', ev: 'l', an: false }
      ]
    },
    vorsicht: [
      'Stimmgabel und therapeutischer Ultraschall nicht als alleinige Tests.',
      'NSAR höchstens unter 7 Tagen bei Ruhe- und Nachtschmerz.',
      'An Hochrisiko-Orten Entlastung und Freigabe nur ärztlich.'
    ],
    warn: ['Schmerz an Hochrisiko-Stelle, Ruhe- oder Nachtschmerz, zunehmender Schmerz trotz Pause → Belastung stoppen, ärztlich. Zweite oder dritte Stressfraktur, Zyklusstörung, Gewichtsverlust → ärztlich (REDs, Knochendichte).'],
    aerztlich: [
      'Rückkehr je nach Ort: Navikulare im Mittel 127 Tage; nach MRT-Grad 1 bis 4: 41,7 bis 98,5 Tage.',
      'Keine AWMF-Leitlinie bekannt, Status wird nachgeprüft.'
    ],
    quellen: [
      { k: 'Q652', t: 'Warden 2021 Optimal Load' }, { k: 'Q653', t: 'Hoenig 2023 Rückkehr nach Lokalisation' }, { k: 'Q654', t: 'Hoenig 2022 MRT-Grad' },
      { k: 'Q655', t: 'IOC-Konsens REDs 2023' }, { k: 'Q656', t: 'Triad-Update 2025 Teil 2' }, { k: 'Q657', t: 'Schneiders 2012 klinische Tests' }
    ]
  },
  {
    id: 'K-FU06', karte: 'FU06', icd: ['S92.3'], titel: 'Fraktur der Basis des Metatarsale V', kurzTitel: 'Basisfraktur MT V',
    dokuDiagnose: 'Fraktur der Basis des Metatarsale V', bereich: 'Fuß', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['metatarsale v', 'mt5', 'jones-fraktur', 'basisfraktur', 'avulsion', 'mittelfußbruch'],
    untertitel: 'Inhalte aus der Wissenskarte FU06 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Zone 1 (Avulsion nach Umknicken) heilt fast immer: ab Tag 1 Belastung nach Schmerz im Hartsohlenschuh, mit Bandage oder Walker; Gips bringt nichts.',
      'Zone 2 (Jones) heilt schlechter, oft mit Schraube; Zone 3 ist meist Stress, dort sind die OP-Ergebnisse besser.',
      'In Zone 2 und 3 Belastung nach ärztlicher Vorgabe; Laufen und Springen erst nach Heilung im Röntgen und Freigabe.',
      'Alle Physio-Inhalte und Dosierungen sind Expertenmeinung.'
    ],
    ziele: [
      { t: 'Gehen ohne Hilfsmittel', doku: 'Verbesserung der Gehfähigkeit', an: true },
      { t: 'Fuß- und Wadenkraft aufbauen', doku: 'Kräftigung der Fuß- und Wadenmuskulatur', an: true },
      { t: 'Rückkehr zum Sport nach Freigabe', doku: 'Rückkehr zum Sport', an: true },
      { t: 'Gleichgewicht', doku: 'Verbesserung des Gleichgewichts', an: false }
    ],
    stationen: { deton: ['Akutphase', 'Belastung nach Zone'], mobi: ['Gang und Beweglichkeit', 'Heilungsphase'], aktiv: ['Kraft und Belastung', 'nach Heilung'], berat: ['Freigabe und Schuh', 'Zone beachten'] },
    strang: {
      deton: [
        { t: 'Belastung nach Schmerz (Zone 1)', info: 'ab Tag 1, Hartsohlenschuh, Bandage oder Walker', doku: 'Belastung nach Schmerz', ev: 's', an: true },
        { t: 'Belastung nach Vorgabe (Zone 2 und 3)', info: 'ärztliche Vorgabe', doku: 'Belastung nach ärztlicher Vorgabe', ev: 'e', an: true }
      ],
      mobi: [
        { t: 'Gangschule', info: 'Heilungsphase', doku: 'Gangschulung', ev: 'e', an: true },
        { t: 'Dorsalextension', info: 'OSG', doku: 'Mobilisation in Dorsalextension', ev: 'e', an: false }
      ],
      aktiv: [
        { t: 'Fußmuskulatur, Peronaeen, Wade', info: 'Belastungsphase', doku: 'Kräftigung von Fußmuskulatur, Peronaeen und Wade', ev: 'e', an: true },
        { t: 'Gleichgewicht', info: 'Belastungsphase', doku: 'Gleichgewichtstraining', ev: 'e', an: false },
        { t: 'Sprünge und Lauf-ABC', info: 'erst nach Heilung im Röntgen und Freigabe', doku: 'Sprung- und Lauftraining', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Freigabe abwarten', info: 'Rückkehr vor der Heilung im Röntgen ist Risikofaktor', doku: 'Beratung zur Belastungsfreigabe', ev: 's', an: true },
        { t: 'Kein Gips bei Zone 1', info: 'funktionell arbeitsfähig nach 11 statt 28 Tagen', doku: 'Beratung zur funktionellen Behandlung', ev: 's', an: false }
      ]
    },
    vorsicht: [
      'In Zone 2 und 3 nicht vor Heilung im Röntgen laufen oder springen.',
      'Stressfraktur: Röntgen anfangs oft unauffällig, MRT.',
      'Keine Studie zu Physiotherapie-Inhalten.'
    ],
    warn: ['Schmerz an der Basis ohne klares Trauma, Belastungsschmerz über Wochen, Schaftfraktur nach Bagatelltrauma bei Frauen über 40, Verdacht auf Lisfranc-Beteiligung, positive Ottawa-Regel ohne Röntgen → ärztlich.'],
    aerztlich: [
      'Zone 2: im RCT 44 % Versagen unter Gips; Pseudarthrose 11,6 % gegen 3,3 % (Übersicht 2026).',
      'Zone 3: ein RCT für OP. Keine AWMF-Leitlinie bekannt.'
    ],
    quellen: [
      { k: 'Q658', t: 'Herterich 2021 Übersicht Basisfraktur MT V' }, { k: 'Q659', t: 'Choi 2021 RCT Hartsohlenschuh gegen Gips' }, { k: 'Q660', t: 'Mologne 2005 RCT Jones Schraube gegen Gips' },
      { k: 'Q661', t: 'Encinas 2026 Übersicht Jones-Fraktur' }, { k: 'Q662', t: 'Van der Meij 2026 Risikofaktoren Pseudarthrose' }, { k: 'Q663', t: 'Bachmann 2003 Ottawa-Regeln' }
    ]
  },
  {
    id: 'K-FU07', karte: 'FU07', icd: ['E11.74', 'E10.74'], titel: 'Diabetisches Fußsyndrom', kurzTitel: 'Diabetischer Fuß',
    dokuDiagnose: 'diabetischem Fußsyndrom', bereich: 'Fuß', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['diabetischer fuß', 'dfs', 'diabetes', 'ulkus', 'charcot', 'polyneuropathie', 'neuropathie'],
    untertitel: 'Inhalte aus der Wissenskarte FU07 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Ulkus, Infektion, pAVK und Charcot-Fuß bei Diabetes; Ulkus-Prävalenz 6,3 %, Rezidiv 22,1 % pro Personenjahr, 5-Jahres-Überleben nach Ulkus 50,9 %.',
      'Physiotherapie heißt: Risiko erkennen, Belastung dosieren, Warnzeichen nicht übersehen; beide Füße bei jedem Termin anschauen.',
      'Bei niedrigem bis mittlerem Risiko Fuß-Sprunggelenk-Programm über 8 bis 12 Wochen, bevorzugt angeleitet; +1000 Schritte pro Tag sind wahrscheinlich sicher.',
      'Offenes Ulkus: nicht belastend üben. Charcot-Verdacht: keine Belastung, am selben Tag ärztlich.'
    ],
    ziele: [
      { t: 'Neue Ulzera verhindern', doku: 'Ulkusprävention', an: true },
      { t: 'Beweglichkeit OSG und Großzehe', doku: 'Verbesserung der Beweglichkeit von OSG und Großzehengrundgelenk', an: true },
      { t: 'Gleichgewicht, weniger Sturzrisiko', doku: 'Verbesserung des Gleichgewichts', an: true },
      { t: 'Schritte dosiert steigern', doku: 'dosierte Steigerung der Gehaktivität', an: false },
      { t: 'Schuh und Entlastung konsequent tragen', doku: 'konsequente Nutzung der Schuhversorgung', an: false }
    ],
    stationen: { deton: ['Fußkontrolle', 'bei jedem Termin'], mobi: ['Beweglichkeit', 'Fuß-Sprunggelenk-Programm'], aktiv: ['Übung und Gehen', 'dosiert steigern'], berat: ['Schutz und Selbstmanagement', 'Schuh, Temperatur'] },
    strang: {
      deton: [
        { t: 'Inspektion beider Füße', info: 'vor und nach jeder Einheit: Kallus, Blasen, Rötung, Wunden, Schuh, Einlage', doku: 'Inspektion beider Füße', ev: 'e', an: true },
        { t: 'Sensibilität prüfen', info: 'Monofilament plus Stimmgabel oder Ipswich Touch Test', doku: 'Sensibilitätsprüfung', ev: 's', an: false }
      ],
      mobi: [
        { t: 'Fuß-Sprunggelenk-Programm', info: 'niedriges bis mittleres Risiko, 8–12 Wochen, bevorzugt angeleitet', doku: 'Fuß-Sprunggelenk-Übungsprogramm', ev: 'l', an: true }
      ],
      aktiv: [
        { t: 'Schritte langsam steigern', info: '+1000 pro Tag wahrscheinlich sicher', doku: 'dosierte Steigerung der Gehaktivität', ev: 'l', an: true },
        { t: 'Balance und Multikomponenten', info: 'bei Sturzrisiko, gesichert üben', doku: 'Gleichgewichts- und Multikomponententraining', ev: 's', an: false },
        { t: 'Bei Ulkus ohne Fußbelastung', info: 'Übungen im Sitz oder Liegen, Armergometer, ggf. Buerger-Allen 3 × pro Woche', doku: 'Training ohne Fußbelastung', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Nur im verordneten Schuh', info: 'bei jedem Termin fragen, ob Schuh und Entlastung getragen werden', doku: 'Kontrolle der Schuh- und Entlastungsversorgung', ev: 's', an: true },
        { t: 'Temperatur-Selbstmessung', info: 'senkt Rezidive (RR 0,51)', doku: 'Anleitung zur Temperatur-Selbstmessung', ev: 's', an: false }
      ]
    },
    vorsicht: [
      'Offenes Ulkus: nicht belastend üben, Gehen nur mit Entlastungsorthese.',
      'Charcot-Verdacht: keine Belastung, am selben Tag ärztlich.',
      'IWGDF-Risikoklassen und Abstände sind noch am Volltext zu prüfen.'
    ],
    warn: ['Neue offene Stelle, Blase oder Einblutung unter Kallus, Rötung, Überwärmung, Schwellung, Geruch, Fieber → Therapie stoppen, am selben Tag ärztlich. Rot, warm, geschwollen bei Neuropathie → nicht belasten, am selben Tag ärztlich. Ruheschmerz, kalter blasser Fuß → ärztlich.'],
    aerztlich: [
      'Keine Nervendekompression (IWGDF).',
      'Keine eigene gültige AWMF-Leitlinie; NVL Typ-2-Diabetes gültig bis 14.05.2028, in Überarbeitung.'
    ],
    quellen: [
      { k: 'Q646', t: 'IWGDF 2023 Practical Guidelines' }, { k: 'Q536', t: 'IWGDF 2023 Prävention' }, { k: 'Q647', t: 'van Netten 2024 Fuß-Sprunggelenk-Übungen' },
      { k: 'Q648', t: 'van Netten 2024 Prävention SR' }, { k: 'Q649', t: 'Fu 2019 Rezidivrate' }, { k: 'Q651', t: 'Wang 2017 Monofilament' }
    ]
  },
  {
    id: 'K-FU08', karte: 'FU08', icd: ['G57.5'], titel: 'Tarsaltunnelsyndrom', kurzTitel: 'Tarsaltunnelsyndrom',
    dokuDiagnose: 'Tarsaltunnelsyndrom', bereich: 'Fuß', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['tarsaltunnel', 'tarsaltunnelsyndrom', 'n. tibialis', 'brennen fußsohle', 'nervenkompression fuß'],
    untertitel: 'Inhalte aus der Wissenskarte FU08 (Karte noch nicht vertieft), nach Vorgehen sortiert',
    abriss: [
      'Engpass des N. tibialis hinter dem Innenknöchel.',
      'Brennen und Kribbeln an der Fußsohle, oft nachts; LWS (S1) abgrenzen.',
      'Konservativ: Einlage bei Knick-Senkfuß, neurodynamische Gleitübungen, Belastungsanpassung; bei Ausfällen ärztlich.'
    ],
    ziele: [
      { t: 'Brennen und Kribbeln senken', doku: 'Reduktion der Missempfindungen', an: true },
      { t: 'Nachts ohne Beschwerden', doku: 'Reduktion nächtlicher Beschwerden', an: false },
      { t: 'Belastung selbst anpassen', doku: 'Selbstmanagement der Belastung', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Neurodynamische Gleitübungen', info: 'N. tibialis', doku: 'neurodynamische Gleittechniken', ev: 'e', an: true }
      ],
      aktiv: [],
      berat: [
        { t: 'Einlage bei Knick-Senkfuß', info: 'wenn vorhanden', doku: 'Beratung zur Einlagenversorgung', ev: 'e', an: true },
        { t: 'Belastungsanpassung', info: 'nach Beschwerden', doku: 'Beratung zur Belastungsanpassung', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.', aktiv: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'LWS (S1) als Ursache abgrenzen.',
      'Karte noch nicht vertieft, Inhalte fachlich prüfen.'
    ],
    warn: [],
    aerztlich: ['Bei Ausfällen ärztlich.'],
    quellen: []
  },
  {
    id: 'K-FU09', karte: 'FU09', icd: ['S93.3'], titel: 'Lisfranc-Verletzung', kurzTitel: 'Lisfranc-Verletzung',
    dokuDiagnose: 'Lisfranc-Verletzung', bereich: 'Fuß', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['lisfranc', 'tarsometatarsal', 'lisfranc-gelenk', 'mittelfußverletzung', 'tmt'],
    untertitel: 'Inhalte aus der Wissenskarte FU09 (Karte noch nicht vertieft), nach Vorgehen sortiert',
    abriss: [
      'Verletzung der Tarsometatarsalgelenke, wird oft übersehen; Hämatom an der Fußsohle, Schmerz am Mittelfuß.',
      'Stabil: Entlastung 6 Wochen nach Vorgabe. Instabil: OP, Teilbelastung oft 6 bis 12 Wochen.',
      'Danach Gang, Kraft und Einlage.'
    ],
    ziele: [
      { t: 'Entlastung nach Vorgabe einhalten', doku: 'Entlastung nach Vorgabe', an: true },
      { t: 'Gehen ohne Hilfsmittel', doku: 'Verbesserung der Gehfähigkeit', an: true },
      { t: 'Fußkraft aufbauen', doku: 'Kräftigung der Fußmuskulatur', an: true }
    ],
    stationen: { deton: ['Entlastung', 'nach Vorgabe'], mobi: ['Gangschule', 'nach der Entlastung'], aktiv: ['Kraft', 'nach der Entlastung'], berat: ['Einlage', 'Hilfsmittel'] },
    strang: {
      deton: [
        { t: 'Entlastung nach Vorgabe', info: 'stabil 6 Wochen; nach OP Teilbelastung oft 6–12 Wochen', doku: 'Entlastung nach Vorgabe', ev: 'e', an: true }
      ],
      mobi: [
        { t: 'Gangschule', info: 'nach der Entlastung', doku: 'Gangschulung', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'Kraft', info: 'nach der Entlastung', doku: 'Kräftigung der Fuß- und Unterschenkelmuskulatur', ev: 'e', an: true }
      ],
      berat: [
        { t: 'Einlage', info: 'nach der Entlastung', doku: 'Beratung zur Einlagenversorgung', ev: 'e', an: false }
      ]
    },
    vorsicht: [
      'Die Verletzung wird oft übersehen.',
      'Karte noch nicht vertieft, Inhalte fachlich prüfen.'
    ],
    warn: ['Plantares Hämatom, Zehenspitzenstand nicht möglich → ärztlich, Belastungsaufnahmen.'],
    aerztlich: ['Instabile Verletzung: OP.'],
    quellen: []
  },
  {
    id: 'K-FU10', karte: 'FU10', icd: ['Q66.6', 'M21.4'], titel: 'Kindlicher Knick-Senkfuß', kurzTitel: 'Kindlicher Knick-Senkfuß',
    dokuDiagnose: 'kindlichem Knick-Senkfuß', bereich: 'Fuß', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['knick-senkfuß', 'knicksenkfuß', 'plattfuß kind', 'senkfuß', 'kinderfuß'],
    untertitel: 'Inhalte aus der Wissenskarte FU10 (Karte noch nicht vertieft), nach Vorgehen sortiert',
    abriss: [
      'Bei Kleinkindern normal und meist von selbst rückläufig.',
      'Behandlungsbedürftig nur, wenn starr, schmerzhaft oder einseitig; Zehenstand und Jack-Test zeigen, ob er flexibel ist.',
      'Flexibel und schmerzfrei: Aufklärung, barfuß gehen, Spiel- und Bewegungsangebote.'
    ],
    ziele: [
      { t: 'Eltern aufklären', doku: 'Aufklärung der Eltern', an: true },
      { t: 'Barfußgehen und Bewegung fördern', doku: 'Förderung von Barfußgehen und Bewegung', an: true },
      { t: 'Schmerzfrei bleiben', doku: 'Erhalt der Schmerzfreiheit', an: false }
    ],
    strang: {
      deton: [],
      mobi: [],
      aktiv: [
        { t: 'Barfuß gehen', info: 'im Alltag', doku: 'Barfußgehen', ev: 'e', an: true },
        { t: 'Spiel- und Bewegungsangebote', info: 'kindgerecht', doku: 'Spiel- und Bewegungsangebote', ev: 'e', an: true }
      ],
      berat: [
        { t: 'Aufklärung der Eltern', info: 'meist von selbst rückläufig', doku: 'Aufklärung der Eltern', ev: 'e', an: true }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.', mobi: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Einen flexiblen, schmerzfreien Knick-Senkfuß nicht als krank behandeln.',
      'Karte noch nicht vertieft, Inhalte fachlich prüfen.'
    ],
    warn: ['Starr, schmerzhaft oder einseitig → ärztlich (Coalitio ausschließen).'],
    aerztlich: [],
    quellen: []
  },
  {
    id: 'K-ZE01', karte: 'ZE01', icd: ['M20.1'], titel: 'Hallux valgus', kurzTitel: 'Hallux valgus',
    dokuDiagnose: 'Hallux valgus', bereich: 'Zehen', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['hallux valgus', 'ballenzeh', 'ballen', 'großzehe', 'chevron', 'scarf'],
    untertitel: 'Inhalte aus der Wissenskarte ZE01 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Abweichung der Großzehe nach außen mit Ballen am Mittelfußköpfchen I; 23 % der Erwachsenen, 36 % über 65, häufig bei Frauen und familiär gehäuft.',
      'Konservative Maßnahmen lindern Beschwerden, korrigieren die Fehlstellung aber nicht; bei Schmerzen und Leidensdruck OP.',
      'Einlagen lindern nach 6 Monaten, nach 12 Monaten ist die OP überlegen.',
      'Nach OP Belastung im Verbandsschuh nach Vorgabe, Beweglichkeit MTP I früh, Gangschule; Frühbelastung ab Woche 2 ohne mehr Rückfälle.'
    ],
    ziele: [
      { t: 'Schmerz am Ballen senken (NRS)', doku: 'Schmerzreduktion', an: true },
      { t: 'Dorsalextension MTP I verbessern', doku: 'Verbesserung der Beweglichkeit im MTP I', an: true },
      { t: 'Abrollen über die Großzehe', doku: 'physiologisches Abrollen', an: true },
      { t: 'Schuhe ohne Druck tragen', doku: 'Schuhversorgung ohne Druckstellen', an: false }
    ],
    strang: {
      deton: [
        { t: 'Hochlagern und Lymphdrainage nach OP', info: 'Lymphdrainage nach Verordnung, gegen das Ödem', doku: 'Ödemreduktion', ev: 'e', an: false }
      ],
      mobi: [
        { t: 'MTP I mobilisieren', info: 'passiv und aktiv, nach OP früh; Dorsalextension für das Abrollen', doku: 'Mobilisation MTP I', ev: 'e', an: true },
        { t: 'Narbe', info: 'nach OP', doku: 'Narbenbehandlung', ev: 'e', an: false }
      ],
      aktiv: [
        { t: 'Abductor hallucis und Short Foot', info: 'mit Tape oder Einlage Winkel etwa −7°, Schmerz −3,4 bis −3,8; laut Therapieplanung Wirkung auf den Winkel nicht belegt', doku: 'Kräftigung der Fußmuskulatur', ev: 's', an: true },
        { t: 'Gangschulung', info: 'Abrollen über die Großzehe', doku: 'Gangschulung', ev: 'e', an: true }
      ],
      berat: [
        { t: 'Breite Schuhe und Polster', info: 'lindern, korrigieren nicht', doku: 'Schuhberatung', ev: 'e', an: true },
        { t: 'Einlage bei Metatarsalgie', info: 'Schmerz nach 6 Monaten geringer', doku: 'Beratung zur Einlagenversorgung', ev: 's', an: false },
        { t: 'Belastung nach OP', info: 'im Verbandsschuh nach Vorgabe; nach Lapidus meist länger entlastet', doku: 'Belastung nach Vorgabe des Operateurs', ev: 'e', an: false }
      ]
    },
    vorsicht: [
      'Konservative Maßnahmen korrigieren die Fehlstellung nicht.',
      'Nach Lapidus meist länger entlastet, Belastung nur nach Vorgabe.'
    ],
    warn: ['Plötzlich hochrot, heiß, stark schmerzhaft (Gicht, Infekt), offene Stelle oder Rötung bei Diabetes oder Polyneuropathie (am selben Tag), Fieber → ärztlich.'],
    aerztlich: [
      'OP bei Schmerzen und Leidensdruck, z. B. Chevron, Scarf, Lapidus; Schmerz nach 12 Monaten 21 gegen 39/100, geringe Sicherheit.',
      'Leitlinie: AWMF S2e Hallux valgus 187-051.'
    ],
    quellen: [
      { k: 'Q25', t: 'AWMF S2e Hallux valgus 187-051' }, { k: 'Q367', t: 'Nix 2010 Prävalenz' }, { k: 'Q368', t: 'Torkki 2001 JAMA' },
      { k: 'Q369', t: 'Cochrane 2024 OP' }, { k: 'Q370', t: 'Netzwerk-Metaanalyse 2026' }
    ]
  },
  {
    id: 'K-ZE02', karte: 'ZE02', icd: ['M20.2'], titel: 'Hallux rigidus', kurzTitel: 'Hallux rigidus',
    dokuDiagnose: 'Hallux rigidus', bereich: 'Zehen', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['hallux rigidus', 'arthrose großzehe', 'großzehengrundgelenk', 'mtp i', 'cheilektomie'],
    untertitel: 'Inhalte aus der Wissenskarte ZE02 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Arthrose des Großzehengrundgelenks mit schmerzhaft eingeschränkter Dorsalextension und dorsalem Osteophyt; das Abrollen ist erschwert.',
      'Konservativ: Schuh mit steifer Sohle und Abrollhilfe, Einlage mit Rigidusfeder, Mobilisation MTP I in frühen Stadien.',
      'Im Cochrane-Review bringen Einlagen und Hyaluronspritze keinen klinisch wichtigen Vorteil gegen Sham; in einer Studie half eine Carbon-Einlage (globale Besserung 61 gegen 34 %).',
      'Ärztlich: Cheilektomie oder Arthrodese; die Arthrodese senkt den Gehschmerz nach 12 Monaten deutlich.'
    ],
    ziele: [
      { t: 'Gehschmerz senken (NRS)', doku: 'Reduktion des Gehschmerzes', an: true },
      { t: 'Dorsalextension MTP I erhalten', doku: 'Erhalt der Beweglichkeit im MTP I', an: true },
      { t: 'Abrollen erleichtern', doku: 'Verbesserung des Abrollverhaltens', an: true }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'MTP I mobilisieren', info: 'in frühen Stadien; nach Cheilektomie früh', doku: 'Mobilisation MTP I', ev: 'e', an: true },
        { t: 'Sesambein-Mobilisation', info: 'zusätzlich wirksam, nur 20 Patienten', doku: 'Mobilisation der Sesambeine', ev: 's', an: false }
      ],
      aktiv: [
        { t: 'Gangtraining', info: 'zusätzlich wirksam, nur 20 Patienten', doku: 'Gangschulung', ev: 's', an: true },
        { t: 'Großzehenbeuger kräftigen', info: 'zusätzlich wirksam, nur 20 Patienten', doku: 'Kräftigung der Großzehenbeuger', ev: 's', an: false }
      ],
      berat: [
        { t: 'Schuh mit steifer Sohle und Abrollhilfe', info: 'Fertigeinlage und Abrollsohle gleich wirksam, Einlage besser vertragen', doku: 'Schuhberatung', ev: 's', an: true },
        { t: 'Einlage mit Rigidusfeder', info: 'Carbon-Einlage FHSQ-Schmerz +6,7; im Cochrane-Review kein klinisch wichtiger Vorteil gegen Sham', doku: 'Beratung zur Einlagenversorgung', ev: 'u', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Einlagen und Hyaluronspritze ohne klinisch wichtigen Vorteil gegenüber Sham (Cochrane 2024, moderate Sicherheit).',
      'Nach Arthrodese erfolgt das Abrollen über den Schuh.'
    ],
    warn: ['Akut heißes, gerötetes Gelenk (Gicht, Infekt), Fieber, Schwellung ohne Belastungsbezug, Nachtschmerz, mehrere Gelenke befallen → ärztlich.'],
    aerztlich: [
      'Cheilektomie (danach früh mobilisieren) oder Arthrodese; die Coughlin-Einteilung steuert die OP-Wahl.',
      'Arthrodese gegen Abwarten: Gehschmerz nach 12 Monaten 1,3 gegen 5,7 (MCID 1,7).',
      'Keine eigene AWMF-Leitlinie.'
    ],
    quellen: [
      { k: 'Q496', t: 'Cochrane 2024 nicht-operativ' }, { k: 'Q497', t: 'Miettinen 2026 Arthrodese vs. Abwarten' }, { k: 'Q498', t: 'Munteanu 2021 Versteifungseinlage' },
      { k: 'Q499', t: 'Menz 2016 Einlage vs. Abrollsohle' }, { k: 'Q500', t: 'Shamus 2004 Sesambein-Mobilisation' }, { k: 'Q501', t: 'Coughlin und Shurnas 2003 Einteilung' }
    ]
  },
  {
    id: 'K-ZE03', karte: 'ZE03', icd: ['M20.4'], titel: 'Krallen- und Hammerzehen', kurzTitel: 'Krallen- und Hammerzehen',
    dokuDiagnose: 'Krallen- bzw. Hammerzehen', bereich: 'Zehen', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['krallenzehe', 'hammerzehe', 'krallenzehen', 'hammerzehen', 'zehenfehlstellung'],
    untertitel: 'Inhalte aus der Wissenskarte ZE03 (Karte noch nicht vertieft), nach Vorgehen sortiert',
    abriss: [
      'Hammerzehe: Beugung im Mittelgelenk; Krallenzehe: zusätzlich Überstreckung im Grundgelenk.',
      'Ursachen: enge Schuhe, Muskelungleichgewicht, Neuropathie, Hallux valgus.',
      'Flexibel: Zehenübungen, Polster, weite Schuhe. Starr: ärztlich, OP.'
    ],
    ziele: [
      { t: 'Druckschmerz im Schuh senken', doku: 'Schmerzreduktion', an: true },
      { t: 'Zehenmuskulatur kräftigen', doku: 'Kräftigung der Zehenmuskulatur', an: true },
      { t: 'Passende, weite Schuhe', doku: 'Schuhversorgung', an: false }
    ],
    strang: {
      deton: [],
      mobi: [],
      aktiv: [
        { t: 'Zehenübungen', info: 'Handtuch greifen, Zehenspreizen; bei flexibler Fehlstellung', doku: 'Training der Zehenmuskulatur', ev: 'e', an: true }
      ],
      berat: [
        { t: 'Weite Schuhe und Polster', info: 'bei flexibler Fehlstellung', doku: 'Schuhberatung und Polsterversorgung', ev: 'e', an: true },
        { t: 'Nach OP', info: 'Drahtfixation, danach Schonung der Zehen nach Vorgabe', doku: 'Beratung zur Schonung nach Vorgabe', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.', mobi: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Starre Zehen ärztlich abklären lassen.',
      'Karte noch nicht vertieft, Inhalte fachlich prüfen.'
    ],
    warn: [],
    aerztlich: ['Starr: OP (Drahtfixation), danach Schonung nach Vorgabe.'],
    quellen: []
  },
  {
    id: 'K-ZE04', karte: 'ZE04', icd: ['S93.5'], titel: 'Turf Toe', kurzTitel: 'Turf Toe',
    dokuDiagnose: 'Turf Toe (Kapselverletzung MTP I)', bereich: 'Zehen', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['turf toe', 'kunstrasenzeh', 'kapselverletzung großzehe', 'mtp i', 'überstreckung großzehe'],
    untertitel: 'Inhalte aus der Wissenskarte ZE04 (Karte noch nicht vertieft), nach Vorgehen sortiert',
    abriss: [
      'Überstreckungsverletzung der plantaren Kapsel am Großzehengrundgelenk, typisch auf Kunstrasen; Grad I bis III.',
      'Tape oder Schuh mit steifer Sohle, Entlastung nach Grad, dann Beweglichkeit und Kraft; Sprint und Absprung zuletzt.',
      'Grad III wird oft operiert.'
    ],
    ziele: [
      { t: 'Großzehe schützen und entlasten', doku: 'Entlastung des Großzehengrundgelenks', an: true },
      { t: 'Beweglichkeit und Kraft MTP I', doku: 'Wiederherstellung von Beweglichkeit und Kraft im MTP I', an: true },
      { t: 'Rückkehr zu Sprint und Absprung', doku: 'Rückkehr zum Sport', an: true }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Beweglichkeit MTP I', info: 'nach der Entlastung', doku: 'Mobilisation MTP I', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'Kraft', info: 'nach der Entlastung', doku: 'Kräftigung der Fußmuskulatur', ev: 'e', an: true },
        { t: 'Sprint und Absprung', info: 'zuletzt', doku: 'sportspezifisches Sprint- und Sprungtraining', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Tape oder steife Sohle', info: 'schützt das Grundgelenk', doku: 'Tape bzw. Schuhversorgung mit steifer Sohle', ev: 'e', an: true },
        { t: 'Entlastung nach Grad', info: 'Grad I bis III', doku: 'Beratung zur Entlastung', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Sprint und Absprung erst zuletzt.',
      'Karte noch nicht vertieft, Inhalte fachlich prüfen.'
    ],
    warn: [],
    aerztlich: ['Grad III oft OP.'],
    quellen: []
  },
  {
    id: 'K-ZE05', karte: 'ZE05', icd: ['M25.57'], titel: 'Sesamoiditis', kurzTitel: 'Sesamoiditis',
    dokuDiagnose: 'Sesamoiditis', bereich: 'Zehen', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['sesamoiditis', 'sesambein', 'sesambeine', 'großzehenballen', 'vorfußschmerz'],
    untertitel: 'Inhalte aus der Wissenskarte ZE05 (Karte noch nicht vertieft), nach Vorgehen sortiert',
    abriss: [
      'Reizung der Sesambeine unter dem Großzehengrundgelenk bei Läufern und Tänzern.',
      'Eine Stressfraktur muss abgegrenzt werden.',
      'Druckentlastung mit Einlage mit Aussparung, Belastungsanpassung, Kraft der Fußmuskeln, Laufaufbau.'
    ],
    ziele: [
      { t: 'Druckschmerz senken', doku: 'Schmerzreduktion', an: true },
      { t: 'Fußmuskulatur kräftigen', doku: 'Kräftigung der Fußmuskulatur', an: true },
      { t: 'Zurück zu Laufen oder Tanzen', doku: 'Rückkehr zur sportlichen Aktivität', an: true }
    ],
    strang: {
      deton: [],
      mobi: [],
      aktiv: [
        { t: 'Fußmuskeln kräftigen', info: 'nach Verträglichkeit', doku: 'Kräftigung der Fußmuskulatur', ev: 'e', an: true },
        { t: 'Laufaufbau', info: 'stufenweise', doku: 'stufenweiser Laufaufbau', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Einlage mit Aussparung', info: 'Druckentlastung der Sesambeine', doku: 'Beratung zur Einlage mit Aussparung', ev: 'e', an: true },
        { t: 'Belastungsanpassung', info: 'nach Beschwerden', doku: 'Beratung zur Belastungsanpassung', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.', mobi: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Stressfraktur der Sesambeine abgrenzen.',
      'Karte noch nicht vertieft, Inhalte fachlich prüfen.'
    ],
    warn: [],
    aerztlich: [],
    quellen: []
  },
  {
    id: 'K-ZE06', karte: 'ZE06', icd: ['M10'], titel: 'Gicht (Podagra)', kurzTitel: 'Gicht',
    dokuDiagnose: 'Gicht (Podagra)', bereich: 'Zehen', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['gicht', 'podagra', 'gichtanfall', 'harnsäure', 'arthritis urica'],
    untertitel: 'Inhalte aus der Wissenskarte ZE06 (Karte noch nicht vertieft), nach Vorgehen sortiert',
    abriss: [
      'Akuter Gichtanfall, oft am Großzehengrundgelenk: plötzlich, hochrot, heiß, extrem schmerzhaft; die Behandlung ist ärztlich.',
      'Im Anfall keine Physiotherapie am Gelenk, Kühlung nur nach ärztlicher Anweisung.',
      'Danach Beweglichkeit, Bewegung und Gewichtskontrolle als Teil der Lebensstiländerung.'
    ],
    ziele: [
      { t: 'Beweglichkeit nach dem Anfall', doku: 'Wiederherstellung der Gelenkbeweglichkeit', an: true },
      { t: 'Regelmäßige Bewegung', doku: 'Steigerung der körperlichen Aktivität', an: true },
      { t: 'Gewichtskontrolle', doku: 'Gewichtskontrolle', an: false }
    ],
    stationen: { deton: ['Akuter Anfall', 'keine Therapie am Gelenk'], mobi: ['Beweglichkeit', 'nach dem Anfall'], aktiv: ['Bewegung', 'Lebensstil'], berat: ['Gewicht und Lebensstil', 'Beratung'] },
    strang: {
      deton: [
        { t: 'Kühlung', info: 'nur nach ärztlicher Anweisung; sonst im Anfall keine Therapie am Gelenk', doku: 'Kühlung nach ärztlicher Anweisung', ev: 'e', an: false }
      ],
      mobi: [
        { t: 'Beweglichkeit', info: 'nach dem Anfall', doku: 'Mobilisation des Großzehengrundgelenks', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'Bewegung', info: 'Teil der Lebensstiländerung', doku: 'Bewegungstherapie', ev: 'e', an: true }
      ],
      berat: [
        { t: 'Gewichtskontrolle', info: 'Teil der Lebensstiländerung', doku: 'Beratung zur Gewichtskontrolle', ev: 'e', an: true }
      ]
    },
    vorsicht: [
      'Im Anfall keine Physiotherapie am Gelenk.',
      'Karte noch nicht vertieft; Leitlinie im Register prüfen.'
    ],
    warn: ['Erstes Auftreten oder Fieber → ärztlich, septische Arthritis ausschließen.'],
    aerztlich: ['Behandlung des Anfalls ärztlich.'],
    quellen: []
  },
  {
    id: 'K-ZE07', karte: 'ZE07', icd: ['S92.4', 'S92.5'], titel: 'Zehenfraktur', kurzTitel: 'Zehenfraktur',
    dokuDiagnose: 'Zehenfraktur', bereich: 'Zehen', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['zehenfraktur', 'zehenbruch', 'buddy-taping', 'großzehenfraktur', 'zeh gebrochen'],
    untertitel: 'Inhalte aus der Wissenskarte ZE07 (Karte noch nicht vertieft), nach Vorgehen sortiert',
    abriss: [
      'Meist konservativ mit Buddy-Taping und steifem Schuh.',
      'Belastung nach Schmerz, Schuh mit fester Sohle 3 bis 6 Wochen, danach Beweglichkeit und Abrollen.',
      'Großzehe mit Gelenkbeteiligung ärztlich beurteilen lassen.'
    ],
    ziele: [
      { t: 'Schmerzarm gehen im festen Schuh', doku: 'schmerzarmes Gehen', an: true },
      { t: 'Beweglichkeit der Zehe', doku: 'Wiederherstellung der Zehenbeweglichkeit', an: true },
      { t: 'Normales Abrollen', doku: 'physiologisches Abrollen', an: true }
    ],
    stationen: { deton: ['Schutz', 'Taping und Schuh'], mobi: ['Beweglichkeit', 'nach der Schuhphase'], aktiv: ['Abrollen', 'Gangschule'], berat: ['Belastung', 'nach Schmerz'] },
    strang: {
      deton: [
        { t: 'Buddy-Taping', info: 'an die Nachbarzehe', doku: 'Buddy-Taping', ev: 'e', an: true }
      ],
      mobi: [
        { t: 'Beweglichkeit', info: 'nach 3–6 Wochen fester Sohle', doku: 'Mobilisation der Zehengelenke', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'Abrollen üben', info: 'nach der Schuhphase', doku: 'Gangschulung mit Abrollen', ev: 'e', an: true }
      ],
      berat: [
        { t: 'Schuh mit fester Sohle', info: '3–6 Wochen, Belastung nach Schmerz', doku: 'Beratung zu Schuhversorgung und Belastung', ev: 'e', an: true }
      ]
    },
    vorsicht: [
      'Großzehe mit Gelenkbeteiligung ärztlich beurteilen lassen.',
      'Karte noch nicht vertieft, Inhalte fachlich prüfen.'
    ],
    warn: [],
    aerztlich: ['Großzehe mit Gelenkbeteiligung: ärztliche Beurteilung.'],
    quellen: []
  },
  {
    id: 'K-ZE08', karte: 'ZE08', icd: ['M20.5'], titel: 'Digitus quintus varus (Schneiderballen)', kurzTitel: 'Schneiderballen',
    dokuDiagnose: 'Digitus quintus varus (Schneiderballen)', bereich: 'Zehen', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['schneiderballen', 'digitus quintus varus', 'kleinzehenballen', 'bunionette', 'mt v köpfchen'],
    untertitel: 'Inhalte aus der Wissenskarte ZE08 (Karte noch nicht vertieft), nach Vorgehen sortiert',
    abriss: [
      'Vorstehendes Mittelfußköpfchen V mit Druckschmerz im Schuh, Spiegelbild zum Hallux valgus.',
      'Konservativ: weite Schuhe und Polster.',
      'Nach Korrektur-OP Belastung nach Vorgabe, Ödem, Gang.'
    ],
    ziele: [
      { t: 'Druckschmerz im Schuh senken', doku: 'Schmerzreduktion', an: true },
      { t: 'Passende, weite Schuhe', doku: 'Schuhversorgung', an: true },
      { t: 'Nach OP: Ödem und Gang', doku: 'Ödemreduktion und Gangschulung nach OP', an: false }
    ],
    strang: {
      deton: [
        { t: 'Ödem nach OP', info: 'nach Korrektur-OP', doku: 'Ödemreduktion', ev: 'e', an: false }
      ],
      mobi: [],
      aktiv: [
        { t: 'Gangschule nach OP', info: 'Belastung nach Vorgabe', doku: 'Gangschulung', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Weite Schuhe und Polster', info: 'gegen den Druck', doku: 'Schuhberatung und Polsterversorgung', ev: 'e', an: true }
      ]
    },
    leerText: { mobi: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Nach OP Belastung nur nach Vorgabe.',
      'Karte noch nicht vertieft, Inhalte fachlich prüfen.'
    ],
    warn: [],
    aerztlich: [],
    quellen: []
  },
  {
    id: 'K-ZE09', karte: 'ZE09', icd: ['M24.27'], titel: 'Plantarplattenläsion MTP II', kurzTitel: 'Plantarplatte MTP II',
    dokuDiagnose: 'Plantarplattenläsion MTP II', bereich: 'Zehen', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['plantarplatte', 'plantarplattenläsion', 'crossover toe', 'mtp ii', 'zweite zehe'],
    untertitel: 'Inhalte aus der Wissenskarte ZE09 (Karte noch nicht vertieft), nach Vorgehen sortiert',
    abriss: [
      'Riss der plantaren Platte am zweiten Zehengrundgelenk, oft bei Hallux valgus oder langem Metatarsale II.',
      'Schmerz unter dem Köpfchen, die Zehe weicht nach oben und innen ab („crossover toe“); vertikaler Schubladentest.',
      'Tape in Plantarflexion, Pelotte, steife Sohle, Belastungsanpassung; bei Fortschreiten OP.'
    ],
    ziele: [
      { t: 'Schmerz unter dem Köpfchen senken', doku: 'Schmerzreduktion', an: true },
      { t: 'Zehe stabilisieren', doku: 'Stabilisierung der zweiten Zehe', an: true },
      { t: 'Belastung selbst anpassen', doku: 'Selbstmanagement der Belastung', an: false }
    ],
    strang: {
      deton: [],
      mobi: [],
      aktiv: [],
      berat: [
        { t: 'Tape in Plantarflexion', info: 'zweite Zehe', doku: 'Tape in Plantarflexion', ev: 'e', an: true },
        { t: 'Pelotte und steife Sohle', info: 'Entlastung des Köpfchens', doku: 'Pelotten- und Schuhversorgung', ev: 'e', an: true },
        { t: 'Belastungsanpassung', info: 'nach Beschwerden', doku: 'Beratung zur Belastungsanpassung', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.', mobi: 'In der Karte nicht vorgesehen.', aktiv: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Bei Fortschreiten der Fehlstellung ärztlich vorstellen.',
      'Karte noch nicht vertieft, Inhalte fachlich prüfen.'
    ],
    warn: [],
    aerztlich: ['Bei Fortschreiten OP.'],
    quellen: []
  },
  {
    id: 'K-ZE10', karte: 'ZE10', icd: ['M92.7'], titel: 'Morbus Köhler II (Freiberg)', kurzTitel: 'Morbus Köhler II',
    dokuDiagnose: 'Morbus Köhler II (Freiberg)', bereich: 'Zehen', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['köhler ii', 'morbus köhler', 'freiberg', 'köhler-freiberg', 'knochennekrose mittelfuß'],
    untertitel: 'Inhalte aus der Wissenskarte ZE10 (Karte noch nicht vertieft), nach Vorgehen sortiert',
    abriss: [
      'Aseptische Knochennekrose des Mittelfußköpfchens II, meist bei jungen Frauen.',
      'Belastungsschmerz unter dem Vorfuß.',
      'Druckentlastung mit Einlage und steifer Sohle, Belastungsanpassung, ärztliche Verlaufskontrolle; nach OP gelten die Vorgaben.'
    ],
    ziele: [
      { t: 'Vorfuß entlasten', doku: 'Entlastung des Vorfußes', an: true },
      { t: 'Belastungsschmerz senken', doku: 'Reduktion des Belastungsschmerzes', an: true },
      { t: 'Belastung selbst anpassen', doku: 'Selbstmanagement der Belastung', an: false }
    ],
    strang: {
      deton: [],
      mobi: [],
      aktiv: [],
      berat: [
        { t: 'Einlage und steife Sohle', info: 'Druckentlastung', doku: 'Beratung zu Einlage und Schuh mit steifer Sohle', ev: 'e', an: true },
        { t: 'Belastungsanpassung', info: 'nach Beschwerden', doku: 'Beratung zur Belastungsanpassung', ev: 'e', an: true },
        { t: 'Ärztliche Verlaufskontrolle', info: 'regelmäßig', doku: 'Empfehlung ärztlicher Verlaufskontrolle', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.', mobi: 'In der Karte nicht vorgesehen.', aktiv: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Nach OP gelten die Vorgaben des Operateurs.',
      'Karte noch nicht vertieft, Inhalte fachlich prüfen.'
    ],
    warn: [],
    aerztlich: ['Ärztliche Verlaufskontrolle; nach OP Vorgaben.'],
    quellen: []
  }
);

/* Diagnose-Kompass, Einträge Teil C (von Hand aus den Wissenskarten, 27.11.2026) */
window.DK_DATEN.push(
  {
    id: 'K-SH01', karte: 'SH01', icd: ['M75.1', 'M75.4'], titel: 'Rotatorenmanschetten-Tendinopathie / subakromiales Schmerzsyndrom', kurzTitel: 'RM-Tendinopathie',
    dokuDiagnose: 'Rotatorenmanschetten-Tendinopathie (subakromiales Schmerzsyndrom)', bereich: 'Schulter', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['impingement', 'subakromial', 'rotatorenmanschette', 'supraspinatus', 'pa hs', 'bursitis subacromialis', 'schulterschmerz'],
    untertitel: 'Inhalte aus der Wissenskarte SH01 (geprüft 21.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Häufigste Ursache für Schulterschmerz: Belastungsabhängiger Schmerz seitlich am Oberarm, besonders beim Heben über Kopf; statt „Impingement“ heute Rotatorenmanschetten-Tendinopathie.',
      'Aktiv schmerzhaft, passiv weitgehend frei; das grenzt zur Frozen Shoulder ab.',
      'Übungstherapie ist die Kernbehandlung (JOSPT Grad A). Entscheidend ist die Laststeigerung, nicht die Höhe der Last; mindestens 12 Wochen.',
      'Nach höchstens 12 Wochen ohne Besserung fachärztlich abklären.'
    ],
    ziele: [
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: true },
      { t: 'Arm schmerzarm über Kopf bewegen', doku: 'schmerzarme Überkopfbewegung', an: true },
      { t: 'Schlafen auf der Seite', doku: 'beschwerdefreies Liegen auf der Seite', an: false },
      { t: 'Arbeit und Sport', doku: 'Rückkehr zu Arbeit und Sport', an: true }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Manuelle Therapie Schulter', info: 'nur ergänzend; bei hoher Reizbarkeit kurzfristig', doku: 'Manuelle Therapie Schultergelenk', ev: 'l', an: false },
        { t: 'Dehnung hintere Schulter', info: '3 × 30–60 s', doku: 'Dehnung der hinteren Schulterkapsel', ev: 'e', an: false }
      ],
      aktiv: [
        { t: 'Isometrie bei hoher Reizbarkeit', info: 'Außenrotation und Abduktion, 5 × 30–45 s', doku: 'isometrisches Training Außenrotation und Abduktion', ev: 'l', an: true },
        { t: 'Exzentrisch Supraspinatus und Außenrotatoren', info: 'dazu Schulterblattmuskeln, je 3 × 15, Heimprogramm 1–2× täglich (Holmgren 2012)', doku: 'exzentrisches Training der Rotatorenmanschette und Skapulamuskulatur', ev: 's', an: true },
        { t: 'Laststeigerung', info: 'etwa alle 2 Wochen; unterhalb Schulterhöhe, Schulterhöhe, Überkopf, dann arbeits- oder sportspezifisch', doku: 'progressive Laststeigerung bis Überkopf', ev: 'l', an: false }
      ],
      berat: [
        { t: 'Edukation: Last anpassen statt Ruhe', info: 'Kern bei hoher Reizbarkeit', doku: 'Edukation zur Lastanpassung', ev: 'l', an: true },
        { t: 'Schmerzregel beim Training', info: 'bis 5/10, bis zur nächsten Einheit wieder auf Ausgangsniveau', doku: 'Belastungssteuerung nach Schmerz', ev: 'e', an: false },
        { t: 'Heimprogramm', info: '1–2× täglich', doku: 'Anleitung Heimprogramm', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Nicht empfohlen: therapeutischer Ultraschall, Stoßwelle ohne Kalk, PRP.',
      'Bildgebung erst nach höchstens 12 Wochen ohne Besserung oder nach Trauma, Ultraschall vor MRT.'
    ],
    warn: ['Trauma mit plötzlicher Schwäche, Fieber, Tumor, Gewichtsverlust, Nackenschmerz mit Ausstrahlung → ärztlich abklären.'],
    aerztlich: [
      'Kortisoninjektion bei hoher Reizbarkeit mit dem Arzt besprechen, wirkt 4–8 Wochen.',
      'Subakromiale Dekompression ist nicht besser als Schein-OP (BMJ 2019).',
      'Die S2e Subakromiales Impingement ist seit 19.11.2026 abgelaufen.'
    ],
    quellen: [
      { k: 'Q10', t: 'JOSPT 2025 Rotator cuff tendinopathy' }, { k: 'Q09', t: 'S2e Subakromiales Impingement 2021, abgelaufen 19.11.2026' }, { k: 'Q173', t: 'BMJ Rapid Recommendation Dekompression 2019' }
    ]
  },
  {
    id: 'K-SH02', karte: 'SH02', icd: ['M75.1', 'S46.0'], titel: 'Rotatorenmanschettenruptur', kurzTitel: 'RM-Ruptur',
    dokuDiagnose: 'Rotatorenmanschettenruptur', bereich: 'Schulter', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['rotatorenmanschettenruptur', 'rm ruptur', 'supraspinatusruptur', 'rm naht', 'sehnenriss schulter', 'rotatorenmanschettenrekonstruktion'],
    untertitel: 'Inhalte aus der Wissenskarte SH02 (geprüft 21.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Teil- oder Komplettriss einer oder mehrerer Sehnen, meist Supraspinatus; meist degenerativ und oft ohne Beschwerden, nur etwa 5–10 % traumatisch.',
      'Degenerativ ist Physiotherapie die Basis, etwa 3 Monate; ohne Besserung fachärztlich. Asymptomatische Risse werden nicht operiert.',
      'Frisch traumatisch, vor allem Subscapularis: zeitnah zum Schulterchirurgen, Naht möglichst innerhalb von etwa 3 Wochen.',
      'Nach Naht: Woche 0–6 passiv, 6–12 aktiv, ab 12 Kraft; zu aggressiv erhöht die Reruptur.'
    ],
    ziele: [
      { t: 'Arm im Alltag einsetzen (Haare kämmen, Regal)', doku: 'Einsatz des Armes im Alltag', an: true },
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: true },
      { t: 'Kraft für den Beruf', doku: 'Kräftigung für berufliche Anforderungen', an: true },
      { t: 'Nach Naht Beweglichkeit im freigegebenen Bereich', doku: 'Verbesserung der Beweglichkeit im freigegebenen Bereich', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Passiv nach Naht', info: 'Flexion und Außenrotation nur im freigegebenen Bereich; Woche 0–6', doku: 'passive Mobilisation im freigegebenen Bereich', ev: 'l', an: true },
        { t: 'Aktiv-assistiv', info: 'mit Stab, Tisch-Rutschen, Wand; nach Naht ab Woche 6', doku: 'aktiv-assistive Mobilisation', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'Theraband Rotatoren und Abduktion', info: 'Außen- und Innenrotation, Abduktion in Skapulaebene, Skapula; nach Naht Kraft ab Woche 12', doku: 'Kräftigung der Rotatorenmanschette und Skapulamuskulatur', ev: 'e', an: true },
        { t: 'Deltoideus-Programm', info: 'bei großem Riss oder Pseudoparalyse', doku: 'Deltoideus-Training', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Freigaben des Operateurs', info: 'Ruhigstellung 3–6 Wochen nach Operateur; Überkopfsport und schwere Arbeit meist nach 6–12 Monaten', doku: 'Beratung zu Belastungsgrenzen nach OP', ev: 'l', an: true },
        { t: 'Erwartung und Beruf klären', info: 'degenerativ etwa 3 Monate Physio, dann neu bewerten', doku: 'Aufklärung zum Verlauf', ev: 'l', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Nach Naht nicht zu aggressiv: erhöht das Rerupturrisiko.',
      'Lag-Zeichen bestätigen eher, schließen aber nicht aus.'
    ],
    warn: ['Trauma mit plötzlichem Kraftverlust, vor allem Subscapularis → zeitnah zum Schulterchirurgen.'],
    aerztlich: [
      'Frische traumatische Risse zeitnah nähen, möglichst innerhalb von etwa 3 Wochen.',
      'MRT bei frischer Verletzung und vor OP.'
    ],
    quellen: [
      { k: 'Q08', t: 'S2k Rotatorenmanschettenruptur 2025' }, { k: 'Q174', t: 'AAOS CPG Rotator Cuff 2025' }
    ]
  },
  {
    id: 'K-SH03', karte: 'SH03', icd: ['M75.3'], titel: 'Tendinosis calcarea (Kalkschulter)', kurzTitel: 'Kalkschulter',
    dokuDiagnose: 'Tendinosis calcarea der Schulter', bereich: 'Schulter', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['kalkschulter', 'tendinosis calcarea', 'tendinitis calcarea', 'kalkdepot', 'kalk schulter'],
    untertitel: 'Inhalte aus der Wissenskarte SH03 (geprüft 21.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Kalkablagerung in der Rotatorenmanschette, meist Supraspinatus, bei 2,7–10 % der Erwachsenen, vor allem zwischen 30 und 60.',
      'In der Auflösungsphase sehr starke Schmerzen; nach 10 Jahren ist der Kalk bei etwa 80 % aufgelöst.',
      'Akut deutlich niedriger dosiert, chronisch Übungstherapie wie bei der RM-Tendinopathie.',
      'Nach 3–6 Monaten ohne Erfolg Needling oder hochenergetische Stoßwelle, Selbstzahler.'
    ],
    ziele: [
      { t: 'Schmerz senken (NRS Ruhe, Nacht, Belastung)', doku: 'Schmerzlinderung', an: true },
      { t: 'Beweglichkeit erhalten', doku: 'Erhalt der Schulterbeweglichkeit', an: true },
      { t: 'Danach Belastbarkeit wie bei Tendinopathie', doku: 'Steigerung der Belastbarkeit', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Pendeln und aktiv-assistiv', info: 'akute Phase, deutlich niedriger dosiert; dazu Lagerung', doku: 'schmerzarme Mobilisation und Lagerung', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'Progressives Krafttraining', info: 'chronisch, 3 × 15, Schmerz bis 5/10; wie SH01', doku: 'progressives Krafttraining der Rotatorenmanschette', ev: 'l', an: true }
      ],
      berat: [
        { t: 'Aufklärung', info: 'akut: schmerzarme Bewegung, guter Spontanverlauf', doku: 'Aufklärung zum Verlauf', ev: 'e', an: true },
        { t: 'Bei Nicht-Ansprechen ärztlich', info: 'nach 3–6 Monaten Needling oder Stoßwelle ansprechen', doku: 'Empfehlung ärztlicher Vorstellung bei Persistenz', ev: 'l', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'In der Auflösungsphase keine forcierten Tests, keine Stoßwelle, kein Needling.',
      'Therapeutischer Ultraschall nicht empfohlen.',
      'Dosierung je Phase ist Expertenmeinung; eine eigene deutsche Leitlinie gibt es nicht.'
    ],
    warn: ['Fieber, Rötung oder mehrere Gelenke betroffen → ärztlich abklären.'],
    aerztlich: [
      'Akut: Kortisoninjektion mit dem Arzt besprechen.',
      'Nach 3–6 Monaten ohne Erfolg: Needling (JOSPT Grad B) oder hochenergetische Stoßwelle (Grad C), Selbstzahler.'
    ],
    quellen: [
      { k: 'Q10', t: 'JOSPT 2025 Rotator cuff tendinopathy' }, { k: 'Q175', t: 'DIGEST-Leitlinie ESWT 2019' }, { k: 'Q176', t: 'IGeL-Monitor ESWT Kalkschulter 2025' }
    ]
  },
  {
    id: 'K-SH04', karte: 'SH04', icd: ['M75.0'], titel: 'Frozen Shoulder (adhäsive Kapsulitis)', kurzTitel: 'Frozen Shoulder',
    dokuDiagnose: 'Frozen Shoulder (adhäsiver Kapsulitis)', bereich: 'Schulter', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['frozen shoulder', 'schultersteife', 'adhäsive kapsulitis', 'capsulitis adhaesiva', 'kapsulitis'],
    untertitel: 'Inhalte aus der Wissenskarte SH04 (geprüft 21.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Schmerzhafte Schultersteife: Die Kapsel entzündet sich erst und vernarbt dann; meist zwischen 40 und 65, häufiger bei Diabetes und Schilddrüsenunterfunktion.',
      'Die Phasen überlappen; bei den meisten wird es über 1–3 Jahre deutlich besser, aber nicht immer ganz.',
      'Passiv und aktiv gleich stark eingeschränkt, Außenrotation am stärksten.',
      'Aufklärung ist zentral; die Dosierung richtet sich nach der Reizbarkeit.'
    ],
    ziele: [
      { t: 'Beweglichkeit für den Alltag (Anziehen, Haare, Gurt)', doku: 'Verbesserung der Beweglichkeit für Alltagsaktivitäten', an: true },
      { t: 'Schlafen ohne Nachtschmerz', doku: 'Verbesserung des Schlafs', an: true },
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: false },
      { t: 'Verlauf verstehen und mittragen', doku: 'Verständnis des Krankheitsverlaufs', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Hoch reizbar: Grad I–II, Pendeln', info: 'aktiv-assistiv bis zum Schmerzbeginn, mehrmals täglich kurz', doku: 'schmerzarme Mobilisation Grad I–II', ev: 'l', an: true },
        { t: 'Niedrig reizbar: Grad III–IV', info: 'endgradig, Gleiten nach dorsal für die Außenrotation', doku: 'endgradige Mobilisation Grad III–IV', ev: 'l', an: true },
        { t: 'Dehnung', info: 'bei niedriger Reizbarkeit, bis 30 s', doku: 'Kapseldehnung', ev: 'l', an: false }
      ],
      aktiv: [
        { t: 'Kräftigung Rotatorenmanschette und Skapula', info: 'bei niedriger Reizbarkeit', doku: 'Kräftigung der Rotatorenmanschette und Skapulamuskulatur', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Aufklärung über den Verlauf', info: 'lang und nicht geradlinig', doku: 'Aufklärung zum Krankheitsverlauf', ev: 'l', an: true },
        { t: 'Nicht gegen den Schmerz dehnen', info: 'bei hoher Reizbarkeit (NAS 7 oder mehr, ständiger Nachtschmerz)', doku: 'Belastungssteuerung nach Reizbarkeit', ev: 'l', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Bei hoher Reizbarkeit nicht gegen den Schmerz dehnen.',
      'Kraft und Stabilität sind normal; sind sie es nicht, Diagnose überdenken.'
    ],
    warn: ['Krampfanfall, Tumor in der Vorgeschichte oder Gewichtsverlust → ärztlich abklären.'],
    aerztlich: ['Kortisoninjektion ins Gelenk bei hoher Reizbarkeit mit dem Arzt besprechen, wirkt kurzfristig am besten.'],
    quellen: [
      { k: 'Q172', t: 'AWMF S2e Schultersteife 2022' }, { k: 'Q52', t: 'JOSPT Adhesive Capsulitis 2013' }
    ]
  },
  {
    id: 'K-SH05', karte: 'SH05', icd: ['S43.0', 'M24.41'], titel: 'Schulterinstabilität und Luxation', kurzTitel: 'Schulterinstabilität',
    dokuDiagnose: 'Schulterinstabilität nach Luxation', bereich: 'Schulter', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['schulterluxation', 'schulterinstabilität', 'bankart', 'luxatio humeri', 'latarjet', 'ausgekugelt'],
    untertitel: 'Inhalte aus der Wissenskarte SH05 (geprüft 21.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Meist vordere Luxation nach Trauma (71 % Männer); daneben atraumatische und muskulär gesteuerte Instabilität (Stanmore).',
      'Rezidiv nach Erstluxation etwa 39 %, bei jungen Männern bis 80 %.',
      'Nach Erstluxation Schlinge kurz, Physio 4–12 Wochen; atraumatisch Physio zuerst, OP erst nach 6 Monaten.',
      'Nach OP gehen die Freigaben des Operateurs vor; Zeiten sind Konsens und Expertenmeinung.'
    ],
    ziele: [
      { t: 'Stabile Schulter im Alltag', doku: 'Stabilität der Schulter im Alltag', an: true },
      { t: 'Rückkehr zum Sport ohne erneute Luxation', doku: 'Rückkehr zum Sport ohne Reluxation', an: true },
      { t: 'Kraft Rotatorenmanschette und Skapula', doku: 'Kräftigung der Rotatorenmanschette und Skapulamuskulatur', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Stufenweise Annäherung an Abduktion/Außenrotation', info: 'nach OP sichere Zone bis Woche 3–4', doku: 'stufenweise Mobilisation in Abduktion und Außenrotation', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'Rotatorenmanschette und Skapula kräftigen', info: 'z. B. Watson-Programm bei atraumatischer Instabilität; nach OP Kraft ab Woche 6', doku: 'Kräftigung der Rotatorenmanschette und Skapulamuskulatur', ev: 'l', an: true },
        { t: 'Propriozeption', info: 'Stütz auf Ball, rhythmische Stabilisation', doku: 'propriozeptives Training', ev: 'e', an: true },
        { t: 'Plyometrie und sportspezifisch', info: 'vor Rückkehr zum Sport; CKCUEST; Kontaktsport nach OP meist Monat 4–6', doku: 'plyometrisches und sportspezifisches Training', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Schlinge kurz', info: 'nach Erstluxation meist bis 1 Woche; Schlinge in Außenrotation ohne gesicherten Vorteil', doku: 'Beratung zur kurzen Ruhigstellung', ev: 'l', an: false },
        { t: 'OP-Frage bei hohem Rezidivrisiko', info: 'junge Männer: Stabilisierung mit dem Schulterchirurgen besprechen', doku: 'Empfehlung fachärztlicher Vorstellung bei hohem Rezidivrisiko', ev: 'l', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Nach OP die sichere Zone und Freigaben des Operateurs beachten.',
      'Über 40 an eine begleitende Rotatorenmanschettenruptur denken (bei etwa 40 %).'
    ],
    warn: ['Taubheit seitlich am Oberarm oder Schwäche des Deltoideus (N. axillaris) → ärztlich abklären.'],
    aerztlich: [
      'Atraumatisch OP erst nach 6 Monaten Physio.',
      'Die S1-Leitlinie ist seit 03/2024 abgelaufen; Grundlage sind die BESS/BOA-Empfehlungen.'
    ],
    quellen: [
      { k: 'Q177', t: 'S1 Posttraumatische Schulterinstabilität 2019, abgelaufen' }, { k: 'Q178', t: 'BESS/BOA traumatische Instabilität 2015' }, { k: 'Q179', t: 'BESS/BOA atraumatische Instabilität 2019' }
    ]
  },
  {
    id: 'K-SH06', karte: 'SH06', icd: ['M19.01', 'Z96.61'], titel: 'Omarthrose und Schulterendoprothese', kurzTitel: 'Omarthrose / Schulter-TEP',
    dokuDiagnose: 'Omarthrose bzw. Z. n. Schulterendoprothese', bereich: 'Schulter', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['omarthrose', 'schulterarthrose', 'schulter tep', 'inverse prothese', 'schulterprothese', 'arthrose schulter'],
    untertitel: 'Inhalte aus der Wissenskarte SH06 (geprüft 21.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Arthrose des Schulterhauptgelenks mit Schmerz, Steife und Reiben (im Röntgen bei 16–20 % der Älteren).',
      'Fortgeschritten anatomische Prothese, bei defekter Rotatorenmanschette inverse Prothese.',
      'Konservativ Bewegung erhalten, Kräftigung, Aufklärung; Physio vor und nach OP.',
      'Anatomisch: Schlinge 4–6 Wochen, aktiv ab Woche 7, Kraft ab Woche 12. Invers ist der Deltoideus der Hauptmotor. Nachbehandlungsschemata der Klinik haben Vorrang.'
    ],
    ziele: [
      { t: 'Selbstversorgung', doku: 'Selbstständigkeit in der Selbstversorgung', an: true },
      { t: 'Haushalt und Hobby', doku: 'Wiederaufnahme von Haushalt und Freizeitaktivitäten', an: true },
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: false },
      { t: 'Beweglichkeit erhalten oder verbessern', doku: 'Verbesserung der Schulterbeweglichkeit', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Passiv und aktiv-assistiv nach Freigabe', info: 'anatomisch passiv ab Woche 1, Außenrotation erst bis 30–40°', doku: 'passive und aktiv-assistive Mobilisation nach Freigabe', ev: 'l', an: true }
      ],
      aktiv: [
        { t: 'Deltoideus-Training (invers)', info: 'Deltoideus ist der Hauptmotor', doku: 'Deltoideus-Training', ev: 'e', an: true },
        { t: 'Rotatorenmanschette (anatomisch)', info: 'aktiv ab Woche 7, Kraft ab Woche 12', doku: 'Kräftigung der Rotatorenmanschette', ev: 'l', an: true },
        { t: 'Alltagstraining', info: 'Hand zum Hinterkopf, Hand zum Rücken', doku: 'Alltagstraining', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Aufklärung', info: 'konservativ und vor OP', doku: 'Aufklärung zu Erkrankung und Belastung', ev: 'l', an: false },
        { t: 'Vorsichtsregeln nach inverser Prothese', info: 'keine Kombination aus Extension, Adduktion und Innenrotation in den ersten Wochen, nicht hochdrücken', doku: 'Beratung zu Bewegungsgrenzen nach inverser Prothese', ev: 'e', an: true }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Invers: keine Kombination aus Extension, Adduktion und Innenrotation in den ersten Wochen, nicht hochdrücken (Expertenmeinung).',
      'Anatomisch: Außenrotation anfangs nur bis 30–40°.',
      'Keine Hyaluronsäure.'
    ],
    warn: [],
    aerztlich: [
      'Anatomische Prothese bei fortgeschrittener Arthrose, inverse bei defekter Rotatorenmanschette.',
      'Keine deutsche Leitlinie; Grundlage sind AAOS 2020, APTA 2023 und ASSET 2020.'
    ],
    quellen: [
      { k: 'Q180', t: 'AAOS CPG Glenohumeral Osteoarthritis 2020' }, { k: 'Q181', t: 'APTA Physiotherapie nach Schulterprothese 2023' }, { k: 'Q182', t: 'ASSET-Konsens anatomische Prothese 2020' }
    ]
  },
  {
    id: 'K-SH07', karte: 'SH07', icd: ['S43.1', 'M19.01'], titel: 'AC-Gelenk-Verletzung und -Arthrose', kurzTitel: 'AC-Gelenk',
    dokuDiagnose: 'AC-Gelenk-Verletzung bzw. AC-Gelenk-Arthrose', bereich: 'Schulter', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['ac gelenk', 'acg', 'schultereckgelenk', 'tossy', 'rockwood', 'ac sprengung', 'ac arthrose'],
    untertitel: 'Inhalte aus der Wissenskarte SH07 (geprüft 21.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Schultereckgelenksprengung nach Sturz auf die Schulter, meist Männer 20–39; Einteilung Rockwood I–VI.',
      'Typ I–III meist konservativ, ab Typ IV meist OP; Typ III konservativ nach 1 Jahr gleich gut wie OP.',
      'AC-Arthrose: lokaler Schmerz oben auf der Schulter, besonders bei horizontaler Adduktion.',
      'Vorgehen wie bei der RM-Tendinopathie, endgradige Adduktion und Bankdrücken anfangs meiden.'
    ],
    ziele: [
      { t: 'Schmerzfreie Überkopfbewegung', doku: 'schmerzfreie Überkopfbewegung', an: true },
      { t: 'Schmerzfreie Querbewegung vor dem Körper', doku: 'schmerzfreie horizontale Adduktion', an: true },
      { t: 'Rückkehr zum Sport', doku: 'Rückkehr zum Sport', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Früh bewegen', info: 'Typ I–III nach kurzer Schlinge (3 Tage bis 2 Wochen)', doku: 'frühfunktionelle Mobilisation', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'Kräftigung wie SH01', info: 'Typ I–III innerhalb von 6 Wochen; nach OP Kraft ab Woche 12', doku: 'Kräftigung der Schulter- und Skapulamuskulatur', ev: 'e', an: true },
        { t: 'Sportspezifisch', info: 'Typ I–II nach 1–2, Typ III nach 4–7 Wochen; nach OP meist nach etwa 6 Monaten', doku: 'sportspezifisches Training', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Belastung anpassen', info: 'bei Arthrose; endgradige Adduktion und Bankdrücken anfangs meiden', doku: 'Beratung zur Belastungsanpassung', ev: 'e', an: true },
        { t: 'Schlinge kurz', info: 'Typ I–III 3 Tage bis 2 Wochen, nach OP meist 6 Wochen', doku: 'Beratung zur Ruhigstellung', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Endgradige Adduktion und Bankdrücken anfangs meiden.',
      'Dosierung ist Expertenmeinung; keine deutsche Leitlinie.'
    ],
    warn: [],
    aerztlich: [
      'Ab Typ IV meist OP.',
      'Arthrose: Injektion ultraschallgeführt, Resektion bei anhaltendem Schmerz.'
    ],
    quellen: [
      { k: 'Q183', t: 'ISAKOS-Konsens AC-Gelenk 2014' }, { k: 'Q184', t: 'Cochrane Tamaoki 2019' }
    ]
  },
  {
    id: 'K-SH08', karte: 'SH08', icd: ['S42.2'], titel: 'Proximale Humerusfraktur', kurzTitel: 'Humeruskopffraktur',
    dokuDiagnose: 'proximaler Humerusfraktur', bereich: 'Schulter', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['humeruskopffraktur', 'subkapitale humerusfraktur', 'proximale humerusfraktur', 'oberarmkopffraktur', 'oberarmbruch'],
    untertitel: 'Inhalte aus der Wissenskarte SH08 (geprüft 21.11.2026), Stationen nach Heilungsverlauf',
    abriss: [
      'Oberarmkopfbruch, meist bei älteren Frauen nach Sturz aus dem Stand; Indikatorfraktur der Osteoporose.',
      'Etwa die Hälfte kaum verschoben. Bei Älteren mit verschobenem Bruch bringt die OP keine bessere Funktion.',
      'Konservativ Schlinge kurz und passiv ab den ersten Tagen; aktiv bei Tuberculum-Beteiligung erst nach Anheilen.',
      'Sturzprävention und Osteoporose-Abklärung gehören dazu; die Freigaben des Operateurs gehen vor.'
    ],
    ziele: [
      { t: 'Selbstversorgung und Ankleiden', doku: 'Selbstständigkeit bei Selbstversorgung und Ankleiden', an: true },
      { t: 'Haushalt', doku: 'Wiederaufnahme der Haushaltstätigkeit', an: false },
      { t: 'Keine weiteren Stürze', doku: 'Sturzprävention', an: true },
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: false }
    ],
    stationen: { deton: ['Schutz und Lagerung', 'frühe Phase'], mobi: ['Mobilisation', 'im erlaubten Rahmen'], aktiv: ['Aktiv und Kraft', 'nach Heilung'], berat: ['Sturz und Alltag', 'Beratung'] },
    strang: {
      deton: [
        { t: 'Schlinge kurz', info: '1 Woche kurzfristig besser als 3', doku: 'kurzzeitige Ruhigstellung in der Schlinge', ev: 's', an: true },
        { t: 'Ellenbogen, Hand, HWS aktiv', info: 'von Anfang an', doku: 'aktive Bewegung der angrenzenden Gelenke', ev: 'e', an: true }
      ],
      mobi: [
        { t: 'Pendeln und passiv', info: 'ab den ersten Tagen bis zur Schmerzgrenze; Flexion und Außenrotation im erlaubten Rahmen', doku: 'passive Mobilisation im erlaubten Rahmen', ev: 's', an: true },
        { t: 'Aktiv-assistiv mit Stab', info: 'mit Tuberculum-Beteiligung oder nach Osteosynthese erst nach Anheilen der Tubercula', doku: 'aktiv-assistive Mobilisation', ev: 'l', an: false }
      ],
      aktiv: [
        { t: 'Kräftigung und Alltagstraining', info: 'nach knöcherner Heilung (Expertenmeinung)', doku: 'Kräftigung und Alltagstraining', ev: 'e', an: true },
        { t: 'Bein- und Gleichgewichtstraining', info: 'parallel; TUG oder Chair-Rising-Test', doku: 'Gleichgewichts- und Beinkrafttraining', ev: 'e', an: true }
      ],
      berat: [
        { t: 'Sturzprävention und Osteoporose', info: 'Abklärung anstoßen', doku: 'Beratung zur Sturzprävention, Empfehlung Osteoporose-Abklärung', ev: 'l', an: true },
        { t: 'Selbstversorgung mit einem Arm', info: 'Wohnsituation klären', doku: 'Beratung zur einarmigen Selbstversorgung', ev: 'e', an: false }
      ]
    },
    vorsicht: [
      'Passiv vor aktiv; aktiv bei Tuberculum-Beteiligung oder nach Osteosynthese erst nach Anheilen der Tubercula.',
      'Nach inverser Prothese Innenrotation meiden bis zur Kontrolle nach etwa 6 Wochen.',
      'Wochengrenzen nach OP sind Expertenmeinung; die Freigaben des Operateurs gehen vor.'
    ],
    warn: ['Taubheit über dem Deltoideus, fehlende Deltaaktivierung, Störungen von Puls, Sensibilität oder Kraft der Hand → ärztlich.'],
    aerztlich: [
      'Bei Älteren mit verschobenem Bruch bringt die OP keine bessere Funktion (Cochrane 2022, PROFHER).',
      'Die S1-Leitlinie ist seit 10/2022 abgelaufen.'
    ],
    quellen: [
      { k: 'Q185', t: 'S1 Oberarmkopffraktur 2017, abgelaufen' }, { k: 'Q186', t: 'Cochrane 2022' }, { k: 'Q187', t: 'PROFHER' },
      { k: 'Q07', t: '(Sturz und Osteoporose)' }
    ]
  },
  {
    id: 'K-SH09', karte: 'SH09', icd: ['M75.2', 'S43.4'], titel: 'Lange Bizepssehne und SLAP-Läsion', kurzTitel: 'Bizepssehne / SLAP',
    dokuDiagnose: 'Läsion der langen Bizepssehne bzw. SLAP-Läsion', bereich: 'Schulter', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['bizepssehne', 'slap', 'lbs', 'lange bizepssehne', 'bizepstenodese', 'tenotomie', 'pulley'],
    untertitel: 'Inhalte aus der Wissenskarte SH09 (geprüft 21.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Tendinopathie, Instabilität (Pulley) oder Ruptur der langen Bizepssehne oder SLAP-Läsion am Bizepsanker, oft bei Überkopfsportlern.',
      'Häufig mit Rotatorenmanschettenschaden (SLAP nur zu 28 % isoliert); kein Test sichert die Diagnose.',
      'Konservativ zuerst, etwa 3 Monate und rund 20 Einheiten.',
      'Isolierte Typ-II-SLAP: OP nicht besser als Schein-OP.'
    ],
    ziele: [
      { t: 'Schmerzfreie Überkopfbewegung', doku: 'schmerzfreie Überkopfbewegung', an: true },
      { t: 'Schmerzfreie Wurfbewegung', doku: 'schmerzfreie Wurfbewegung', an: true },
      { t: 'Kraft Flexion und Supination', doku: 'Kräftigung von Ellenbogenflexion und Supination', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Sleeper-Stretch oder Querdehnung', info: 'bei Innenrotationsdefizit (GIRD); 3–5 Wiederholungen täglich über 4 Wochen', doku: 'Dehnung der hinteren Schulterkapsel', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'Bizepsbelastung stufenweise', info: 'isometrisch, konzentrisch, exzentrisch', doku: 'progressive Belastung der Bizepssehne', ev: 'l', an: true },
        { t: 'Skapula, Rotatorenmanschette, Deltoideus', info: 'Außenrotation, Skapula', doku: 'Kräftigung der Rotatorenmanschette und Skapulamuskulatur', ev: 'l', an: true },
        { t: 'Wurfprogramm', info: 'stufenweise', doku: 'stufenweises Wurfprogramm', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Konservativ zuerst', info: 'etwa 3 Monate, rund 20 Einheiten (Konsens)', doku: 'Aufklärung zum konservativen Vorgehen', ev: 'l', an: false },
        { t: 'Nach Tenodese', info: 'etwa 6 Wochen keine Flexion und Supination gegen Widerstand (Expertenmeinung)', doku: 'Beratung zu Belastungsgrenzen nach Tenodese', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'SLAP-Tests nur als Hinweis (O’Brien LR+ 1,06).',
      'Rotatorenmanschette und Skapula immer mit untersuchen.',
      'Zeiten nach OP sind Expertenmeinung; die Freigaben des Operateurs gehen vor.'
    ],
    warn: [],
    aerztlich: [
      'Tenotomie oder Tenodese nach Alter und Anspruch; Popeye nach Tenotomie häufiger.',
      'Isolierte Typ-II-SLAP: OP nicht besser als Schein-OP.'
    ],
    quellen: [
      { k: 'Q08', t: 'S2k Rotatorenmanschettenruptur 2025, Empf. 28' }, { k: 'Q193', t: 'NEER Circle 2025, Konsens' }, { k: 'Q194', t: 'Physio-Delphi 2022' },
      { k: 'Q195', t: 'Schrøder 2017' }, { k: 'Q139', t: 'Hegedus 2012' }
    ]
  },
  {
    id: 'K-SH10', karte: 'SH10', icd: ['S42.0'], titel: 'Klavikulafraktur', kurzTitel: 'Klavikulafraktur',
    dokuDiagnose: 'Klavikulafraktur', bereich: 'Schulter', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['klavikulafraktur', 'claviculafraktur', 'schlüsselbeinbruch', 'schlüsselbeinfraktur', 'klavikula'],
    untertitel: 'Inhalte aus der Wissenskarte SH10 (geprüft 21.11.2026), Stationen nach Heilungsverlauf',
    abriss: [
      'Schlüsselbeinbruch, meist Schaft (65–80 %) nach Sturz auf die Schulter.',
      'Auch verschobene Schaftbrüche heilen meist konservativ; die Platte senkt die Pseudarthrose, bringt nach 1 Jahr aber keinen relevanten Funktionsvorteil.',
      'Konservativ Schlinge nach Komfort 2–6 Wochen, Elevation schmerzgeführt; nach Platte Woche 1–4 passiv bis 90°.',
      'Alle Zeiten sind Klinikprotokolle; die Freigaben des Operateurs gehen vor.'
    ],
    ziele: [
      { t: 'Volle Schulterfunktion', doku: 'Wiederherstellung der Schulterfunktion', an: true },
      { t: 'Rückkehr zur Arbeit', doku: 'Wiederaufnahme der Arbeit', an: true },
      { t: 'Rückkehr zum Sport', doku: 'Rückkehr zum Sport', an: false },
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: false }
    ],
    stationen: { deton: ['Schutz und Lagerung', 'frühe Phase'], mobi: ['Mobilisation', 'im erlaubten Rahmen'], aktiv: ['Aktiv und Kraft', 'nach Phase'], berat: ['Belastung und Alltag', 'Beratung'] },
    strang: {
      deton: [
        { t: 'Schlinge nach Komfort', info: '2–6 Wochen; Rucksackverband ohne Vorteil', doku: 'Ruhigstellung in der Schlinge nach Komfort', ev: 's', an: true },
        { t: 'Ellenbogen und Hand aktiv', info: 'von Anfang an', doku: 'aktive Bewegung von Ellenbogen und Hand', ev: 'e', an: true }
      ],
      mobi: [
        { t: 'Pendeln und aktiv-assistiv mit Stab', info: 'Elevation schmerzgeführt; nach Platte Woche 1–4 passiv bis 90°, ab Woche 5 aktiv; Hakenplatte bis etwa 90°', doku: 'Mobilisation der Schulter im erlaubten Rahmen', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'Skapula-Retraktion, Rudern, Rotatoren mit Band', info: 'nach Platte Kraft ab Woche 9–12', doku: 'Kräftigung der Skapula- und Rotatorenmuskulatur', ev: 'e', an: true },
        { t: 'Stütz und sportspezifisch', info: 'Sport nach Kriterien ab Monat 4–6', doku: 'Stütz- und sportspezifisches Training', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Lastgrenze', info: 'konservativ bis Woche 6 höchstens 0,5–1 kg', doku: 'Beratung zu Belastungsgrenzen', ev: 'e', an: true },
        { t: 'Kontaktsport erst nach Durchbau', info: 'nach 3 Monaten bei etwa 27 % noch nicht durchgebaut', doku: 'Beratung zur Rückkehr in den Kontaktsport', ev: 'e', an: false }
      ]
    },
    vorsicht: [
      'Konservativ bis Woche 6 höchstens 0,5–1 kg Last.',
      'Mit Hakenplatte Elevation nur bis etwa 90°, bis die Platte entfernt ist.',
      'Kontaktsport erst nach Röntgen-Durchbau.'
    ],
    warn: ['Atemnot, Kribbeln oder Schwäche im Arm, gespannte Haut über dem Bruch; nach 3–6 Monaten Bewegungsschmerz, Reiben oder Beweglichkeit im Bruch (Pseudarthrose) → ärztlich.'],
    aerztlich: [
      'Platte senkt die Pseudarthrose (11–15 % auf 1–3 %), aber ohne relevanten Funktionsvorteil nach 1 Jahr.',
      'Keine eigene AWMF-Leitlinie; Grundlage sind Cochrane und RCTs.'
    ],
    quellen: [
      { k: 'Q189', t: 'Cochrane 2019 OP gegen konservativ' }, { k: 'Q190', t: 'Cochrane 2016 konservative Maßnahmen' }, { k: 'Q191', t: 'Woltz 2017' }
    ]
  },
  {
    id: 'K-EB01', karte: 'EB01', icd: ['M77.1'], titel: 'Epicondylopathia radialis humeri (Tennisellenbogen)', kurzTitel: 'Tennisellenbogen',
    dokuDiagnose: 'Epicondylopathia radialis humeri', bereich: 'Ellenbogen', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['tennisellenbogen', 'epicondylitis lateralis', 'epicondylopathia radialis', 'laterale epikondylopathie', 'tennisarm', 'ecrb'],
    untertitel: 'Inhalte aus der Wissenskarte EB01 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Belastungsabhängige Tendinopathie der Handgelenkstrecker (besonders ECRB), Gipfel 40–60 Jahre, Risiko vor allem Kraft plus Wiederholung bei der Arbeit.',
      'Nach 1 Jahr bessern sich 83–91 %; lange Dauer und Nackenschmerz sind ungünstig.',
      'Kern sind progressive Übungen mit externer Last, seltener als täglich wirkte besser; Programm über 8–12 Wochen.',
      'Kortison verschlechtert den Verlauf und vervierfacht Rückfälle.'
    ],
    ziele: [
      { t: 'Greifen und Tragen ohne Schmerz', doku: 'schmerzfreies Greifen und Tragen', an: true },
      { t: 'Schmerzfreie Griffkraft steigern', doku: 'Steigerung der schmerzfreien Griffkraft', an: true },
      { t: 'Arbeit am PC oder handwerklich', doku: 'Belastbarkeit bei der Arbeit', an: true },
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: false }
    ],
    strang: {
      deton: [
        { t: 'Passive Maßnahmen', info: 'nicht ohne Übungen; nicht empfohlen als alleinige Therapie', doku: 'ergänzende Weichteiltechniken Unterarmextensoren', ev: 'e', an: false }
      ],
      mobi: [
        { t: 'MWM lateraler Gleit', info: 'schmerzfrei, 3–4 × 6–10; ergänzend', doku: 'Mobilisation mit Bewegung (MWM) Ellenbogen', ev: 's', an: false }
      ],
      aktiv: [
        { t: 'Isometrie Handgelenkstrecker', info: 'bei hoher Reizbarkeit 5 × 30–45 s (Expertenmeinung)', doku: 'isometrisches Training der Handgelenkstrecker', ev: 'e', an: false },
        { t: 'Exzentrisch betont mit Hantel oder Band', info: '3 × 15, Last steigern, jeden 2. Tag; Schmerz bis 4–5/10', doku: 'progressives exzentrisch betontes Training der Handgelenkstrecker', ev: 's', an: true },
        { t: 'Griffkraft, Pro- und Supination', info: 'mit Hammer', doku: 'Training von Griffkraft und Unterarmrotation', ev: 'e', an: false },
        { t: 'Schulter und Schulterblatt', info: 'mittrainieren', doku: 'Kräftigung von Schulter- und Skapulamuskulatur', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Aufklärung zum guten Verlauf', info: 'nichts hilft nachweislich schneller, Spritze erhöht Rückfälle', doku: 'Aufklärung zum Verlauf', ev: 's', an: true },
        { t: 'Arbeit und Alltag anpassen', info: 'Kraft plus Wiederholung reduzieren, Tastatur und Maus', doku: 'Beratung zur Belastungsanpassung in Arbeit und Alltag', ev: 'l', an: true },
        { t: 'Spange', info: 'kurzfristige Schmerzhilfe', doku: 'Epikondylitisspange als kurzfristige Schmerzhilfe', ev: 's', an: false }
      ]
    },
    vorsicht: [
      'Nicht empfohlen: Kortisonspritze routinemäßig (Rückfälle 54 %), Stoßwelle, PRP, Operation vor ausreichender konservativer Therapie.',
      'Passive Maßnahmen ohne Übungen.',
      'Dosierungen überwiegend Expertenmeinung.'
    ],
    warn: ['Trauma mit Verdacht auf Fraktur oder Luxation, Fieber, Rötung, Überwärmung, neurologische Ausfälle, Tumoranamnese, nächtlicher Ruheschmerz ohne Belastungsbezug → ärztlich; Klicken, Schnappen, Blockieren → Instabilität abklären.'],
    aerztlich: [
      'Nach 6 Monaten ohne Besserung andere Ursachen prüfen (Radialtunnel, posterolaterale Instabilität).',
      'Die S2k 033-019 ist nicht mehr verfügbar, 187-052 erst angemeldet.'
    ],
    quellen: [
      { k: 'Q12', t: 'JOSPT Lateral Elbow Pain 2022' }, { k: 'Q295', t: 'Coombes 2013 JAMA' }, { k: 'Q296', t: 'Karanasios 2021 BJSM' },
      { k: 'Q297', t: 'Bisset 2006 BMJ' }, { k: 'Q298', t: 'Pavlova 2023 Dosis' }
    ]
  },
  {
    id: 'K-EB02', karte: 'EB02', icd: ['M77.0'], titel: 'Epicondylopathia ulnaris humeri (Golferellenbogen)', kurzTitel: 'Golferellenbogen',
    dokuDiagnose: 'Epicondylopathia ulnaris humeri', bereich: 'Ellenbogen', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['golferellenbogen', 'epicondylitis medialis', 'epicondylopathia ulnaris', 'mediale epikondylopathie', 'golferarm'],
    untertitel: 'Inhalte aus der Wissenskarte EB02 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Tendinopathie der Flexor-Pronator-Gruppe am Epicondylus medialis, drei- bis viermal seltener als der Tennisellenbogen.',
      'Kraftarbeit ist der Hauptrisikofaktor; nach 3 Jahren sind 81 % erholt.',
      'N. ulnaris und UCL immer mit abgrenzen.',
      'Die Behandlung ist vom Tennisellenbogen übertragen und medial nicht belegt; Dosierung Expertenmeinung.'
    ],
    ziele: [
      { t: 'Schmerz senken (NAS)', doku: 'Schmerzreduktion', an: true },
      { t: 'Greifen und Kraftarbeit ohne Schmerz', doku: 'schmerzfreie Kraftarbeit', an: true },
      { t: 'Pronationskraft im Seitenvergleich', doku: 'Steigerung der Pronationskraft', an: false },
      { t: 'Rückkehr zu Sport und Arbeit', doku: 'Rückkehr zu Sport und Arbeit', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Dehnen der Flexoren', info: 'mittlere Reizbarkeit', doku: 'Dehnung der Unterarmflexoren', ev: 'u', an: false }
      ],
      aktiv: [
        { t: 'Isometrie im tolerierten Bereich', info: 'bei hoher Reizbarkeit', doku: 'isometrisches Training der Flexor-Pronator-Gruppe', ev: 'u', an: false },
        { t: 'Exzentrisch Handgelenkbeugung und Pronation', info: 'Last langsam steigern; übertragen vom Tennisellenbogen', doku: 'exzentrisches Training von Handgelenkflexion und Pronation', ev: 'u', an: true },
        { t: 'Schweres Widerstandstraining', info: 'Rückkehrphase: Griffkraft, Schulter', doku: 'Kräftigung von Griff und Schulter', ev: 'u', an: false }
      ],
      berat: [
        { t: 'Aufklärung und Last reduzieren', info: 'hoch reizbar: Kraftgriff und Pronation reduzieren', doku: 'Aufklärung und Belastungsanpassung', ev: 'u', an: true },
        { t: 'Technik und Geräte anpassen', info: 'bei schwerer Arbeit Belastung anpassen', doku: 'Beratung zu Technik und Arbeitsplatz', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Nicht empfohlen: wiederholte Kortisonspritzen (Effekt nach 6 Wochen weg, Atrophie möglich), Stoßwelle, Kinesio-Tape.',
      'Vor Kortisonspritze Ulnarisluxation klären.',
      'Keine eigene aktuelle Leitlinie; Einordnung nach Einzelstudien.'
    ],
    warn: ['Neurologische Ausfälle im Ulnarisgebiet, Instabilität oder akutes Valgustrauma, Hinweise auf Radikulopathie, Schwellung ohne passende Belastung → ärztlich.'],
    aerztlich: [
      'Kortison: nach 6 Wochen weniger Schmerz, nach 3 Monaten kein Unterschied.',
      'PRP und OP nur Fallserien.'
    ],
    quellen: [
      { k: 'Q472', t: 'See 2026 Review Exzentrik' }, { k: 'Q473', t: 'Stahl 1997 RCT Kortison' }, { k: 'Q474', t: 'Descatha 2003 Kohorte' },
      { k: 'Q296', t: 'Karanasios 2021 (lateral, Übertragung)' }, { k: 'Q477', t: 'ACOEM 2013 (ältere Leitlinie)' }
    ]
  },
  {
    id: 'K-EB03', karte: 'EB03', icd: ['G56.2'], titel: 'Kubitaltunnelsyndrom', kurzTitel: 'Kubitaltunnel',
    dokuDiagnose: 'Kubitaltunnelsyndrom', bereich: 'Ellenbogen', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['kubitaltunnelsyndrom', 'sulcus ulnaris syndrom', 'ulnaris', 'cuts', 'kribbeln kleinfinger', 'nervus ulnaris'],
    untertitel: 'Inhalte aus der Wissenskarte EB03 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Kompressionsneuropathie des N. ulnaris am Ellenbogen, zweithäufigstes Engpasssyndrom; Kribbeln im Ring- und Kleinfinger, später Schwäche der kleinen Handmuskeln.',
      'Aufklärung ist die eigentliche Therapie: im RCT 89,5 % nach 6 Monaten besser.',
      'Nachtschiene und Nervengleiten ohne belegten Zusatznutzen, nur als Angebot.',
      'Bei Schwäche, Atrophie oder ohne Fortschritt nach etwa 3 Monaten ärztlich; einfache Dekompression ist so gut wie Transposition.'
    ],
    ziele: [
      { t: 'Kribbeln und Nachtbeschwerden lindern', doku: 'Reduktion der Parästhesien', an: true },
      { t: 'Kraft der Handbinnenmuskeln erhalten', doku: 'Erhalt der Kraft der Handbinnenmuskulatur', an: true },
      { t: 'Beugehaltungen im Alltag selbst steuern', doku: 'Selbstmanagement im Alltag', an: true },
      { t: 'Geschicklichkeit der Hand', doku: 'Verbesserung der Handgeschicklichkeit', an: false }
    ],
    stationen: { deton: ['Entlastung', 'Nerv schonen'], mobi: ['Nervengleiten', 'Neurodynamik'], aktiv: ['Kraft', 'Hand und Griff'], berat: ['Aufklärung', 'Kern der Therapie'] },
    strang: {
      deton: [
        { t: 'Nachts Schiene oder Handtuch', info: 'Ellenbogen etwa 30–45° gebeugt; ohne belegten Zusatznutzen, als Angebot', doku: 'nächtliche Lagerung in leichter Ellenbogenbeugung', ev: 'u', an: false }
      ],
      mobi: [
        { t: 'Ulnaris-Slider', info: 'ohne Symptome, 5–10 Wdh., mehrmals täglich; Tensioner erst, wenn reizarm', doku: 'neurodynamische Gleittechniken N. ulnaris', ev: 'u', an: false },
        { t: 'HWS mitbehandeln', info: 'wenn reizarm', doku: 'Behandlung der HWS', ev: 'e', an: false }
      ],
      aktiv: [
        { t: 'Kraft Handbinnenmuskeln und Griff', info: 'wenn reizarm (Dosierung Expertenmeinung)', doku: 'Kräftigung der Handbinnenmuskulatur und Griffkraft', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Aufklärung', info: 'Ellenbogen nicht lange beugen (Handy, Telefon, Schlafen), nicht aufstützen, Pausen bei Dauerbeugung', doku: 'Aufklärung zur Vermeidung von Dauerbeugung und Druck', ev: 's', an: true },
        { t: 'Arbeitsplatz anpassen', info: 'reizarme Phase', doku: 'Arbeitsplatzberatung', ev: 'e', an: false },
        { t: 'Verlauf kontrollieren', info: 'ohne Fortschritt nach etwa 3 Monaten ärztlich', doku: 'Verlaufskontrolle von Sensibilität und Kraft', ev: 'e', an: true }
      ]
    },
    vorsicht: [
      'Nicht empfohlen: Kortisoninjektion, Ellenbogenorthesen allgemein, Transposition als Routine-Erst-OP.',
      'Normale NLG schließt nicht aus; Scratch-Collapse nicht als Suchtest.',
      'Einen hypermobilen Nerv ohne Beschwerden nicht behandeln.'
    ],
    warn: ['Atrophie der Interossei oder des Hypothenars, rasch zunehmende Parese, Ausfälle außerhalb des Ulnarisgebiets oder beidseits, Horner-Zeichen, Schulter-Arm-Schmerz bei Rauchern oder Gewichtsverlust, frisches Trauma → ärztlich.'],
    aerztlich: [
      'OP: einfache In-situ-Dekompression ist Standard, danach meist früh frei bewegen; nach Transposition nach Operateur.',
      'Die AWMF S3 005-009 ist abgelaufen und in Überarbeitung.'
    ],
    quellen: [
      { k: 'Q581', t: 'Svernlöv 2009 RCT konservativ' }, { k: 'Q580', t: 'Caliandro 2025 Cochrane' }, { k: 'Q582', t: 'Padua 2002 Spontanverlauf' },
      { k: 'Q583', t: 'Novak 1994 Provokationstests' }, { k: 'Q13', t: 'AWMF S3 005-009 v4.0 (abgelaufen, in Überarbeitung)' }
    ]
  },
  {
    id: 'K-EB04', karte: 'EB04', icd: ['S52.1'], titel: 'Radiuskopffraktur', kurzTitel: 'Radiuskopffraktur',
    dokuDiagnose: 'Radiuskopffraktur', bereich: 'Ellenbogen', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['radiuskopffraktur', 'radiusköpfchenfraktur', 'mason', 'ellenbogenbruch', 'radiuskopf'],
    untertitel: 'Inhalte aus der Wissenskarte EB04 (geprüft 22.11.2026), Stationen nach Heilungsverlauf',
    abriss: [
      'Häufigste Ellenbogenfraktur nach Sturz auf den ausgestreckten Arm, medianes Alter 43.',
      'Mason I und stabile II: etwa 48 h Schlinge, dann aktive Bewegung; ein gut angeleitetes Heimprogramm reicht.',
      'Für die Therapie zählen Stabilität und Begleitverletzung mehr als der Mason-Typ.',
      'Mason III wird ärztlich versorgt; nach OP aktiv spätestens ab Tag 14.'
    ],
    ziele: [
      { t: 'Volle Unterarmdrehung (Schlüssel, Teller)', doku: 'Wiederherstellung der Unterarmrotation', an: true },
      { t: 'Volle Streckung', doku: 'Verbesserung der Ellenbogenextension', an: true },
      { t: 'Kraft und Belastbarkeit', doku: 'Steigerung der Belastbarkeit', an: false },
      { t: 'Heimprogramm selbstständig', doku: 'selbstständiges Heimprogramm', an: false }
    ],
    stationen: { deton: ['Schutz', 'Tag 0–2'], mobi: ['Aktive Bewegung', 'ab Tag 3'], aktiv: ['Kräftigung', 'ab Woche 6–8'], berat: ['Heimprogramm und Grenzen', 'Beratung'] },
    strang: {
      deton: [
        { t: 'Schlinge etwa 48 h', info: 'Hand und Schulter bewegen', doku: 'kurzzeitige Ruhigstellung, Bewegung angrenzender Gelenke', ev: 's', an: true }
      ],
      mobi: [
        { t: 'Aktiv in alle Richtungen', info: 'ab Tag 3 Beugung, Streckung, Pro- und Supination mehrmals täglich', doku: 'aktive Mobilisation Ellenbogen und Unterarm', ev: 's', an: true },
        { t: 'Streckung gezielt', info: 'Woche 2–6 volle aktive Bewegung, dazu Isometrie', doku: 'gezielte Mobilisation in Extension', ev: 'e', an: false }
      ],
      aktiv: [
        { t: 'Kräftigung', info: 'ab Woche 6–8, Belastung steigern', doku: 'Kräftigung der Ellenbogen- und Unterarmmuskulatur', ev: 'e', an: true }
      ],
      berat: [
        { t: 'Heimprogramm anleiten', info: 'Termine bei Stagnation nach etwa 6 Wochen', doku: 'Anleitung Heimprogramm', ev: 's', an: true },
        { t: 'Sichere Stellung bei Bandverletzung', info: 'LCL: Pronation, keine Schulterabduktion, kein Varusstress; MCL: Supination, kein Valgus', doku: 'Beratung zu Schutzstellungen bei Bandverletzung', ev: 'e', an: false }
      ]
    },
    vorsicht: [
      'Nicht empfohlen: Gips in Beugung, 7 Tage Gips bei einfachen Frakturen, routinemäßige formale Physio bei minimal verschobenen Frakturen, Gelenkpunktion.',
      'Keine kräftige passive Dehnung gegen Schmerz (Expertenmeinung).',
      'Häufigkeiten und Phasengrenzen sind Expertenmeinung.'
    ],
    warn: ['Blockierte Unterarmdrehung, Wegschnappen in Streckung, Handgelenkschmerz (Essex-Lopresti), schwache Fingerstrecker, harte zunehmende Bewegungsgrenze → ärztlich; gespannter Unterarm mit Ruheschmerz (Kompartmentsyndrom) → sofort, Notruf 112.'],
    aerztlich: [
      'Mason III: Prothese besser als ORIF bei niedriger Evidenz.',
      'Steife: Quengel- oder dynamische Schiene ärztlich, 6–12 Monate Geduld.'
    ],
    quellen: [
      { k: 'Q418', t: 'Paschos 2013 RCT Mobilisation' }, { k: 'Q419', t: 'Egol 2018 RCT Heimprogramm' }, { k: 'Q420', t: 'Cochrane 2013 operative Verfahren' },
      { k: 'Q421', t: 'Ahmed Kamel 2024 Terrible Triad' }, { k: 'Q422', t: 'Lindenhovius 2012 Schienen' }
    ]
  },
  {
    id: 'K-EB05', karte: 'EB05', icd: ['S53.1'], titel: 'Ellenbogenluxation', kurzTitel: 'Ellenbogenluxation',
    dokuDiagnose: 'Z. n. Ellenbogenluxation', bereich: 'Ellenbogen', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['ellenbogenluxation', 'luxation ellenbogen', 'terrible triad', 'ellenbogen ausgekugelt', 'instabilität ellenbogen'],
    untertitel: 'Inhalte aus der Wissenskarte EB05 (geprüft 22.11.2026), Stationen nach Heilungsverlauf',
    abriss: [
      'Meist posteriore Luxation, Gipfel 10–19 Jahre, 44,5 % im Sport.',
      'Einfache Luxation: frühe aktive Bewegung ist Standard; Ruhigstellung über 3 Wochen führt häufiger zu Steife.',
      'Komplexe Luxation und Terrible Triad werden meist operiert, danach aktiv innerhalb von 14 Tagen.',
      'Reluxation selten, Steife und Restschmerz häufig. Phasen und Dosierung sind Expertenmeinung.'
    ],
    ziele: [
      { t: 'Bogen mindestens 30–130° schmerzfrei', doku: 'Wiederherstellung des funktionellen Bewegungsbogens', an: true },
      { t: 'Stabiles Gelenk ohne Instabilitätsgefühl', doku: 'Stabilität des Ellenbogens', an: true },
      { t: 'Rückkehr zu Arbeit und Sport', doku: 'Rückkehr zu Arbeit und Sport', an: false }
    ],
    stationen: { deton: ['Schutz', 'erste Tage'], mobi: ['Frühe Bewegung', 'Woche 1–3'], aktiv: ['Kräftigung', 'ab Woche 3'], berat: ['Grenzen und Rückkehr', 'Beratung'] },
    strang: {
      deton: [
        { t: 'Schiene nur kurz', info: 'zur Schmerzlinderung; nicht länger als 3 Wochen ruhigstellen', doku: 'kurzzeitige Schienenversorgung', ev: 's', an: true }
      ],
      mobi: [
        { t: 'Overhead-Übungen in Rückenlage', info: 'aktiv und aktiv-assistiv Flexion/Extension über Kopf; Woche 1–3', doku: 'aktive Mobilisation in Rückenlage über Kopf', ev: 's', an: true },
        { t: 'Unterarmdrehung', info: 'bei 90° Beugung mit Oberarm am Körper', doku: 'Mobilisation der Unterarmrotation', ev: 'e', an: false }
      ],
      aktiv: [
        { t: 'Kräftigung isometrisch, dann dynamisch', info: 'Woche 3–6; Bizeps, Trizeps, Unterarm, Schulter und Skapula', doku: 'Kräftigung der Ellenbogen-, Unterarm- und Schultermuskulatur', ev: 'e', an: true },
        { t: 'Stütz- und Zugbelastung', info: 'ab Woche 6–12, Sport nach Kriterien', doku: 'Stütz- und Zugbelastung', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Belastungsgrenzen', info: 'Woche 1–3 keine Varus- oder Valguslast, nicht stützen; Streckung anfangs nicht forcieren', doku: 'Beratung zu Belastungsgrenzen in der Bandheilung', ev: 'e', an: true },
        { t: 'Nach OP', info: 'Streckgrenze und Vorgaben des Operateurs', doku: 'Beachtung der Vorgaben des Operateurs', ev: 'e', an: false }
      ]
    },
    vorsicht: [
      'Nicht empfohlen: Ruhigstellung über 3 Wochen, routinemäßige OP der einfachen Luxation.',
      'Kein Bewegen im Sitzen mit Scharnierorthese bei instabilem Gelenk.',
      'Keine forcierte passive Dehnung früh, keine Varus- oder Valguslast während der Bandheilung.'
    ],
    warn: ['Kalte oder blasse Hand, zunehmende Schwellung mit Spannungsschmerz → sofort, Notruf 112; neues Taubheitsgefühl, Kraftverlust, erneutes Herausspringen, Wegrutschen, blockierte Drehung → ärztlich.'],
    aerztlich: [
      'Komplexe Luxation und Terrible Triad meist OP.',
      'AWMF 187-036 nur angemeldet, 012-034 abgelaufen.'
    ],
    quellen: [
      { k: 'Q664', t: 'Iordens 2017 FuncSiE-RCT' }, { k: 'Q665', t: 'Catapano 2022 Review Frühmobilisation' }, { k: 'Q666', t: 'Pott 2024 Review 1081 Fälle' },
      { k: 'Q668', t: 'Schreiber 2015 Overhead-Protokoll' }, { k: 'Q421', t: 'Ahmed Kamel 2024 Terrible Triad' }, { k: 'Q667', t: 'Anakwe 2011 Langzeitverlauf' }
    ]
  },
  {
    id: 'K-EB06', karte: 'EB06', icd: ['S46.2'], titel: 'Distale Bizepssehnenruptur', kurzTitel: 'Distale Bizepsruptur',
    dokuDiagnose: 'distaler Bizepssehnenruptur', bereich: 'Ellenbogen', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['bizepssehnenruptur', 'distale bizepssehne', 'bizepsriss', 'bizeps refixation', 'hook test'],
    untertitel: 'Inhalte aus der Wissenskarte EB06 (geprüft 22.11.2026), Stationen nach Heilungsverlauf',
    abriss: [
      'Abriss der distalen Bizepssehne an der Tuberositas radii, fast nur Männer um 45, Heben gegen Widerstand; Raucher häufiger.',
      'Ohne OP fehlt vor allem Supinationskraft. Frischer Verdacht zeitnah zum Operateur.',
      'Nach Refixation ist frühe Bewegung sicher; Kraft spätestens ab Woche 10.',
      'Phasen und Dosierung sind Expertenmeinung, die Vorgaben des Operateurs haben Vorrang.'
    ],
    ziele: [
      { t: 'Supinations- und Flexionskraft', doku: 'Wiederherstellung der Supinations- und Flexionskraft', an: true },
      { t: 'Freie Beweglichkeit', doku: 'freie Ellenbogenbeweglichkeit', an: true },
      { t: 'Rückkehr zu Beruf und Sport', doku: 'Rückkehr zu Beruf und Sport', an: false }
    ],
    stationen: { deton: ['Schutz', 'Woche 0–2'], mobi: ['Bewegung', 'nach Toleranz'], aktiv: ['Kraft', 'ab Woche 6'], berat: ['Grenzen und Rückkehr', 'Beratung'] },
    strang: {
      deton: [
        { t: 'Schlinge nach Bedarf', info: 'Woche 0–2; Schulter, Hand und Finger frei bewegen', doku: 'Schlinge nach Bedarf, Bewegung angrenzender Gelenke', ev: 'e', an: true }
      ],
      mobi: [
        { t: 'Aktiv-assistiv, dann aktiv', info: 'Woche 0–2 Pro- und Supination ohne Widerstand, Woche 2–6 aktiv in allen Ebenen; nach Toleranz', doku: 'frühfunktionelle Mobilisation nach Toleranz', ev: 's', an: true }
      ],
      aktiv: [
        { t: 'Kraft Flexion und Supination', info: 'Woche 6–12, isometrisch beginnen, dann dynamisch; spätestens ab Woche 10', doku: 'Kräftigung von Ellenbogenflexion und Supination', ev: 'e', an: true },
        { t: 'Schwere und exzentrische Lasten', info: 'ab Monat 3, Beruf und Sport', doku: 'berufs- und sportspezifisches Krafttraining', ev: 'e', an: false },
        { t: 'Konservativ: Synergisten kräftigen', info: 'Maximalkraft statt Ausdauer, M. brachialis, M. brachioradialis, M. supinator', doku: 'Kräftigung der synergistischen Muskulatur', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Keine Lasten mit gebeugtem Ellenbogen', info: 'Woche 2–6', doku: 'Beratung zu Belastungsgrenzen', ev: 'e', an: true },
        { t: 'Frischer Verdacht', info: 'zeitnah zum Operateur, Datum dokumentieren', doku: 'Empfehlung zeitnaher ärztlicher Vorstellung', ev: 'l', an: false }
      ]
    },
    vorsicht: [
      'Negativer Hook-Test schließt nichts aus.',
      'Keine Lasten mit gebeugtem Ellenbogen bis Woche 6.',
      'Phasenschema ist Expertenmeinung.'
    ],
    warn: ['Nach OP schwache Finger- und Daumenstreckung, Taubheit an den Fingern, zunehmend feste Drehung, Fieber, Rötung, Wundprobleme → ärztlich; gespannter Unterarm, kalte oder blasse Hand → Notruf 112.'],
    aerztlich: [
      'Ab 8 Wochen bis zur OP bei positivem Hook-Test in über 75 % Transplantat nötig.',
      'Komplikationen nach OP 25 %, schwere 4,6 %. Keine AWMF-Leitlinie.'
    ],
    quellen: [
      { k: 'Q568', t: 'Cuzzolin 2021 OP gegen konservativ' }, { k: 'Q570', t: 'Bergman 2021 RCT frühe Bewegung' }, { k: 'Q572', t: 'Luokkala 2020 Hook-Test und Zeitfenster' },
      { k: 'Q573', t: 'Boufadel 2025 Rückkehr in den Sport' }, { k: 'Q569', t: 'Amarasooriya 2020 Komplikationen' }
    ]
  },
  {
    id: 'K-EB07', karte: 'EB07', icd: ['M70.2'], titel: 'Bursitis olecrani', kurzTitel: 'Bursitis olecrani',
    dokuDiagnose: 'Bursitis olecrani', bereich: 'Ellenbogen', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['bursitis olecrani', 'schleimbeutelentzündung ellenbogen', 'studentenellenbogen', 'bursitis', 'ellenbogenspitze'],
    untertitel: 'Inhalte aus der Wissenskarte EB07 (Karte noch nicht vertieft), nach Vorgehen sortiert',
    abriss: [
      'Schleimbeutelentzündung an der Ellenbogenspitze durch Druck (Aufstützen), Trauma, Gicht oder Infektion.',
      'Physiotherapie spielt eine Nebenrolle; wichtig ist, eine Infektion zu erkennen.',
      'Vorgehen: Druck vermeiden, Kühlung, Kompression, Beweglichkeit erhalten.'
    ],
    ziele: [
      { t: 'Schwellung reduzieren', doku: 'Reduktion der Schwellung', an: true },
      { t: 'Beweglichkeit erhalten', doku: 'Erhalt der Ellenbogenbeweglichkeit', an: true },
      { t: 'Druck im Alltag vermeiden', doku: 'Vermeidung von Druckbelastung', an: false }
    ],
    stationen: { deton: ['Abschwellen', 'Kühlung und Kompression'] },
    strang: {
      deton: [
        { t: 'Kühlung und Kompression', info: 'laut Karte', doku: 'Kühlung und Kompression', ev: 'e', an: true }
      ],
      mobi: [
        { t: 'Beweglichkeit erhalten', info: 'aktiv im schmerzfreien Bereich', doku: 'Erhalt der Beweglichkeit', ev: 'e', an: true }
      ],
      aktiv: [],
      berat: [
        { t: 'Druck vermeiden', info: 'Polster, nicht aufstützen', doku: 'Beratung zur Druckentlastung (Polster)', ev: 'e', an: true }
      ]
    },
    leerText: { aktiv: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Physiotherapie spielt eine Nebenrolle; vorrangig ist das Erkennen einer Infektion.',
      'Karte noch nicht vertieft, keine Quellen.'
    ],
    warn: ['Rötung, Überwärmung, Fieber, Wunde → septische Bursitis, ärztlich.'],
    aerztlich: [],
    quellen: []
  },
  {
    id: 'K-EB08', karte: 'EB08', icd: ['M19.02'], titel: 'Ellenbogenarthrose', kurzTitel: 'Ellenbogenarthrose',
    dokuDiagnose: 'Ellenbogenarthrose', bereich: 'Ellenbogen', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['ellenbogenarthrose', 'cubarthrose', 'arthrose ellenbogen', 'streckdefizit', 'ellenbogenprothese'],
    untertitel: 'Inhalte aus der Wissenskarte EB08 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Arthrose des Ellenbogens, primär (Männer mit schwerer Armarbeit), posttraumatisch oder rheumatisch; mit Beschwerden bei 22,6 % ab 40.',
      'Schmerz am Bewegungsende, Streckdefizit, Blockaden; der N. ulnaris leidet oft mit.',
      'Keine kontrollierte Studie zur Physiotherapie; konservativ als erster Schritt nur nach Übersichten. Dosierungen sind Expertenmeinung.',
      'Wiederholte Blockaden oder Bogen unter etwa 80° gehören zum Ellenbogenchirurgen.'
    ],
    ziele: [
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: true },
      { t: 'Bewegungsbogen erhalten oder verbessern', doku: 'Verbesserung des Bewegungsbogens', an: true },
      { t: 'Alltag mit angepasster Belastung', doku: 'Belastbarkeit im Alltag', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Traktion und Gleiten humeroulnar', info: 'Mobilisation Grad III; nicht in einen harten Anschlag dehnen', doku: 'Traktion und Gleitmobilisation humeroulnar', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'Kräftigung im schmerzarmen Bereich', info: '2–3 × 10–15, 2–3 × pro Woche', doku: 'Kräftigung im schmerzarmen Bereich', ev: 'e', an: true }
      ],
      berat: [
        { t: 'Belastung anpassen', info: 'kein Schwerheben, keine längere Vibrationsarbeit', doku: 'Beratung zur Belastungsanpassung', ev: 'e', an: true },
        { t: 'Bei Ulnaris-Zeichen', info: 'lange Flexion meiden und ärztlich abklären', doku: 'Beratung zur Vermeidung langer Beugehaltungen', ev: 'e', an: false },
        { t: 'Nach Prothese', info: 'Hebegrenze des Operateurs übernehmen, fehlt sie, nachfragen', doku: 'Beachtung der Hebegrenze nach Prothese', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Nicht in einen harten Anschlag dehnen (hartes Endgefühl eher Osteophyten).',
      'Diclofenac-Hyaluronsäure am Ellenbogen im RCT ohne Effekt.'
    ],
    warn: ['Heißes, gerötetes Gelenk mit Fieber, rasch zunehmende Schwäche der Handbinnenmuskeln, neue Instabilität nach Trauma, Ruhe- und Nachtschmerz, Wundstörung nach Prothese → ärztlich.'],
    aerztlich: [
      'Arthroskopisches Debridement: Bogen 95→118°, Komplikationen 2,8 %.',
      'Keine AWMF-Leitlinie im Register.'
    ],
    quellen: [
      { k: 'Q675', t: 'Zumbansen 2025 Übersicht' }, { k: 'Q670', t: 'Sochacki 2017 Review Arthroskopie' }, { k: 'Q671', t: 'Sato 2020 Ulnaris bei Arthrose' },
      { k: 'Q673', t: 'Lim 2014 Bogen 80°' }, { k: 'Q674', t: 'Burden 2024 Hebegrenzen Prothese' }
    ]
  },
  {
    id: 'K-EB09', karte: 'EB09', icd: ['M24.52'], titel: 'Posttraumatische Ellenbogensteife', kurzTitel: 'Ellenbogensteife',
    dokuDiagnose: 'posttraumatischer Ellenbogensteife', bereich: 'Ellenbogen', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['ellenbogensteife', 'steifer ellenbogen', 'streckdefizit', 'quengelschiene', 'arthrolyse', 'kontraktur ellenbogen'],
    untertitel: 'Inhalte aus der Wissenskarte EB09 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Steif heißt mehr als 30° Streckdefizit oder unter 130° Flexion; der Funktionsbogen ist 30–130°, Handy und Gesicht brauchen eher 140°.',
      'Ohne Verknöcherung zuerst Übungen und Schiene, bei knöcherner Ursache früh OP.',
      'Statisch-progressive Schiene bringt im Mittel 38° Gewinn.',
      'Plateau unter 30–130° nach 3–6 Monaten trotz Schiene: Operateur.'
    ],
    ziele: [
      { t: 'Funktionsbogen 30–130° erreichen', doku: 'Verbesserung des Bewegungsbogens', an: true },
      { t: 'Alltag: Gesicht waschen, Handy ans Ohr', doku: 'Verbesserung alltagsrelevanter Funktionen', an: true },
      { t: 'Kraft im neuen Bewegungsbereich', doku: 'Kräftigung im erarbeiteten Bewegungsbereich', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Früh aktiv und aktiv-assistiv', info: 'lange Ruhigstellung vermeiden', doku: 'aktive und aktiv-assistive Mobilisation', ev: 's', an: true },
        { t: 'Endgradübungen und Gelenkmobilisation', info: 'keine ruckartige oder stark schmerzhafte Dehnung (Expertenmeinung)', doku: 'endgradige Gelenkmobilisation', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'Graded Motor Imagery', info: '2 × pro Woche über 6 Wochen plus Heimprogramm', doku: 'Graded Motor Imagery', ev: 's', an: false },
        { t: 'Kräftigung und Alltagsaufgaben', info: 'Gesicht waschen, Handy ans Ohr, Tastatur', doku: 'Kräftigung und alltagsorientiertes Training', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Quengelschiene bei Plateau', info: 'nach Verordnung, 3 × 30 min täglich je Richtung, 6–12 Monate oder bis zum Plateau', doku: 'Anleitung zur statisch-progressiven Schiene', ev: 's', an: true },
        { t: 'Verlauf messen', info: 'ab etwa 15° Bogen bzw. 11 QuickDASH-Punkten echte Veränderung', doku: 'Verlaufsdokumentation des Bewegungsbogens', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Keine ruckartige oder stark schmerzhafte Dehnung.',
      'Späte Mobilisation erhöht das Risiko heterotoper Ossifikation.'
    ],
    warn: ['Beweglichkeit nimmt wieder ab oder neues hartes Ende, neues Kribbeln oder Kraftverlust im Ulnarisgebiet, Schnappen, Rötung oder Fieber nach OP → ärztlich.'],
    aerztlich: [
      'Arthrolyse nach gescheiterter Reha 41° statt 17°; danach früh aktiv, CPM nach Verordnung.',
      'Keine AWMF-Leitlinie.'
    ],
    quellen: [
      { k: 'Q574', t: 'Müller 2013 Metaanalyse Schienen' }, { k: 'Q575', t: 'Siemensma 2023 EFORT-Review' }, { k: 'Q577', t: 'Birinci 2022 RCT Graded Motor Imagery' },
      { k: 'Q576', t: 'Guglielmetti 2020 RCT Arthrolyse gegen Reha' }, { k: 'Q579', t: 'Bauer 2012 HO-Risikofaktoren' }
    ]
  },
  {
    id: 'K-EB10', karte: 'EB10', icd: ['S52.0'], titel: 'Olekranonfraktur', kurzTitel: 'Olekranonfraktur',
    dokuDiagnose: 'Olekranonfraktur', bereich: 'Ellenbogen', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['olekranonfraktur', 'olecranonfraktur', 'zuggurtung', 'ellenbogenspitze bruch', 'olekranon'],
    untertitel: 'Inhalte aus der Wissenskarte EB10 (geprüft 22.11.2026), Stationen nach Heilungsverlauf',
    abriss: [
      'Bruch der Ellenbogenspitze, oft Frauen über 65 nach Bagatellsturz, meist Mayo 2A.',
      'Zuggurtung und Platte gleich gut; ab 75 konservativ ohne relevanten Funktionsnachteil.',
      'Früh bewegen, 6–8 Wochen nicht belasten; die Vorgabe des Operateurs hat Vorrang.',
      'Physiotherapie selbst ist nicht in Studien verglichen, Phasen sind Expertenmeinung.'
    ],
    ziele: [
      { t: 'Schmerzarmer Bogen für den Alltag', doku: 'Verbesserung des Bewegungsbogens für den Alltag', an: true },
      { t: 'Trizepskraft und Stütz nach Freigabe', doku: 'Kräftigung des M. triceps brachii', an: false },
      { t: 'Ödem reduzieren', doku: 'Ödemreduktion', an: false },
      { t: 'Ziele nach Gebrechlichkeit setzen', doku: 'Erhalt der Selbstständigkeit', an: true }
    ],
    stationen: { deton: ['Schutz', 'Woche 0–2'], mobi: ['Bewegung', 'ohne Last'], aktiv: ['Kraft', 'ab Woche 6–8'], berat: ['Vorgaben und Alltag', 'Beratung'] },
    strang: {
      deton: [
        { t: 'Schutz nach Vorgabe', info: 'nach Platte Schiene 7–10 Tage; Ödem, Schulter, Hand, Finger', doku: 'Schutz nach Vorgabe, Ödembehandlung', ev: 'e', an: true }
      ],
      mobi: [
        { t: 'Aktiv-assistiv ohne Gewicht', info: 'Beugung, Streckung, Pro- und Supination; nach Platte sofort aus der Schiene', doku: 'aktiv-assistive Mobilisation ohne Last', ev: 'e', an: true },
        { t: 'Aktives Bewegungsausmaß steigern', info: 'Woche 2–6, kein Stütz, kein Trizeps gegen Widerstand', doku: 'Steigerung des aktiven Bewegungsausmaßes', ev: 'e', an: false }
      ],
      aktiv: [
        { t: 'Trizeps isometrisch, dann dynamisch', info: 'ab Woche 6–8 nach Freigabe; Greifkraft, Stütz steigern', doku: 'Kräftigung von Trizeps und Griffkraft', ev: 'e', an: true },
        { t: 'Sport- und berufsspezifisch', info: 'ab etwa 3 Monaten', doku: 'berufs- und sportspezifisches Training', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Keine Belastung 6–8 Wochen', info: 'voll nach Frakturheilung', doku: 'Beratung zur Belastungskarenz', ev: 'e', an: true },
        { t: 'Konservativ bei Älteren', info: 'Schlinge zur Schmerzlinderung, früh nach Toleranz; volle Trizepskraft kein Ziel', doku: 'Beratung zum konservativen Vorgehen', ev: 's', an: false },
        { t: 'Druckschmerz über dem Draht', info: 'häufig, dokumentieren und an den Operateur melden', doku: 'Rückmeldung an den Operateur', ev: 'e', an: false }
      ]
    },
    vorsicht: [
      'Bis Woche 6 kein Stütz, kein Trizeps gegen Widerstand.',
      'Extensionstest schließt eine Olekranonfraktur nicht sicher aus.',
      'Alles Expertenmeinung aus OP-Protokollen.'
    ],
    warn: ['Fieber oder Rötung über dem Metall, offene Wunde, Ausfall des N. ulnaris → sofort ärztlich; Durchblutungsstörung der Hand, zunehmende Schwellung mit Spannungsschmerz → sofort, außerhalb der Sprechzeiten 112.'],
    aerztlich: [
      'Zuggurtung und Platte gleich gut, nach Zuggurtung häufiger Metallentfernung.',
      'Ab 75 konservativ ohne relevanten Funktionsnachteil. Keine AWMF-Leitlinie.'
    ],
    quellen: [
      { k: 'Q562', t: 'Duckworth 2017 RCT Platte vs. Zuggurtung' }, { k: 'Q563', t: 'Midtgaard 2025 RCT Zuggurtung vs. Platte' }, { k: 'Q564', t: 'Joshi 2025 SOFIE-RCT ab 75' },
      { k: 'Q565', t: 'Lima 2026 Metaanalyse Ältere' }, { k: 'Q566', t: 'Woolnough 2026 Kohorte Frailty' }
    ]
  },
  {
    id: 'K-HG01', karte: 'HG01', icd: ['S52.5'], titel: 'Distale Radiusfraktur', kurzTitel: 'Distale Radiusfraktur',
    dokuDiagnose: 'distaler Radiusfraktur', bereich: 'Handgelenk', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['radiusfraktur', 'distale radiusfraktur', 'handgelenkbruch', 'colles', 'radius loco typico', 'drf'],
    untertitel: 'Inhalte aus der Wissenskarte HG01 (geprüft 22.11.2026), Stationen nach Heilungsverlauf',
    abriss: [
      'Häufigste Fraktur des Menschen, typisch bei älteren Frauen nach Sturz auf die ausgestreckte Hand (Fragilitätsfraktur).',
      'Ab etwa 65 Jahren ist der Gips langfristig so gut wie die Platte.',
      'Reha-Evidenz niedrig; ein angeleitetes Heimprogramm ist die Basis, betreute Therapie bei Steife, Komplikationen oder CRPS-Zeichen.',
      'Für den Alltag reichen etwa 40° Extension und 40° Flexion.'
    ],
    ziele: [
      { t: 'Schmerzarme Beweglichkeit', doku: 'schmerzarme Handgelenkbeweglichkeit', an: true },
      { t: 'Griffkraft', doku: 'Steigerung der Griffkraft', an: true },
      { t: 'Alltag und Arbeit', doku: 'Wiederaufnahme von Alltag und Arbeit', an: true },
      { t: 'CRPS vermeiden', doku: 'Prävention eines CRPS', an: false }
    ],
    stationen: { deton: ['Schutz und Schwellung', 'im Gips'], mobi: ['Aktive Bewegung', 'nach Gips oder Platte'], aktiv: ['Kraft und Alltag', 'nach Freigabe'], berat: ['Heimprogramm', 'Osteoporose und Sturz'] },
    strang: {
      deton: [
        { t: 'Nachbargelenke bewegen', info: 'Gips meist 4 Wochen, nicht reponiert 1–3 Wochen; Finger, Ellenbogen, Schulter bewegen', doku: 'Bewegung der angrenzenden Gelenke', ev: 'l', an: true },
        { t: 'Schwellung', info: 'Hochlagern, Bewegen', doku: 'Ödemreduktion durch Hochlagern und Bewegung', ev: 'e', an: false }
      ],
      mobi: [
        { t: 'Finger und Daumen', info: 'voll beugen und strecken, Daumenopposition, Faustschluss, mehrmals täglich', doku: 'aktive Mobilisation von Fingern und Daumen', ev: 'e', an: true },
        { t: 'Handgelenk aktiv', info: 'Extension, Flexion, Radial- und Ulnarduktion, Pro- und Supination, 3 × 10; nach palmarer Platte innerhalb von 2 Wochen', doku: 'aktive Mobilisation von Handgelenk und Unterarm', ev: 's', an: true }
      ],
      aktiv: [
        { t: 'Griffkraft', info: 'Knete, Ball, Theraband, 3 × 10–15, steigernd; nach Freigabe (Expertenmeinung)', doku: 'Kräftigung der Griffkraft', ev: 'e', an: true },
        { t: 'Alltagsaufgaben', info: 'Glas, Schlüssel, Tasche tragen', doku: 'alltagsorientiertes Training', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Angeleitetes Heimprogramm', info: 'bei unkompliziertem Verlauf', doku: 'Anleitung Heimprogramm', ev: 'l', an: true },
        { t: 'Osteoporose und Sturzrisiko', info: 'ansprechen', doku: 'Beratung zu Osteoporose und Sturzprävention', ev: 'e', an: false }
      ]
    },
    vorsicht: [
      'Passive Maßnahmen ohne aktive Übungen nicht empfohlen (Eis, PEMF, Whirlpool, dynamische Schiene, passive Mobilisation).',
      'Vitamin C ist umstritten, keine aktuelle Leitlinienempfehlung.',
      'Übungen und Dosierungen sind Expertenmeinung.'
    ],
    warn: ['Zunehmende Taubheit Daumen bis Mittelfinger, Spannungsschmerz unter dem Gips, Fieber oder Wundrötung → dringend ärztlich; Daumen nicht streckbar (EPL) oder CRPS-Zeichen → ärztlich.'],
    aerztlich: [
      'Ab etwa 65 Jahren Gips langfristig so gut wie Platte.',
      'Die S2e ist seit 28.02.2026 abgelaufen und in Überarbeitung.'
    ],
    quellen: [
      { k: 'Q15', t: 'S2e Distale Radiusfraktur 2021, abgelaufen' }, { k: 'Q254', t: 'AAOS DRF 2020' }, { k: 'Q255', t: 'Cochrane Reha 2015' },
      { k: 'Q256', t: 'WRIST 2021' }, { k: 'Q257', t: 'Lee 2023 Frühmobilisation' }, { k: 'Q258', t: 'Harden 2010, Budapest' }
    ]
  },
  {
    id: 'K-HG02', karte: 'HG02', icd: ['G56.0'], titel: 'Karpaltunnelsyndrom', kurzTitel: 'Karpaltunnelsyndrom',
    dokuDiagnose: 'Karpaltunnelsyndrom', bereich: 'Handgelenk', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['karpaltunnelsyndrom', 'kts', 'cts', 'medianus', 'kribbeln hand nachts', 'karpaltunnel'],
    untertitel: 'Inhalte aus der Wissenskarte HG02 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Häufigstes Nervenengpasssyndrom: Kompression des N. medianus mit nächtlichem Kribbeln in Daumen, Zeige- und Mittelfinger, später Taubheit und Daumenballenschwäche.',
      'Häufiger bei Frauen, Schwangerschaft, Diabetes und Schilddrüsenerkrankung.',
      'Leicht bis mittel: Nachtschiene in Neutralstellung als Basis, ergänzend Nervengleiten und Aufklärung.',
      'Manuelle Therapie in 3 Sitzungen plus Heimprogramm war nach 1 und 4 Jahren so gut wie die OP.'
    ],
    ziele: [
      { t: 'Durchschlafen', doku: 'Reduktion nächtlicher Beschwerden', an: true },
      { t: 'Greifen ohne Taubheit', doku: 'Greifen ohne Parästhesien', an: true },
      { t: 'Kraft des Daumenballens erhalten', doku: 'Erhalt der Thenarkraft', an: false }
    ],
    stationen: { deton: ['Entlastung', 'Nachtschiene'], mobi: ['Gleiten', 'Nerv und Sehnen'], aktiv: ['Kraft', 'nach OP'], berat: ['Aufklärung', 'Belastung und Arbeitsplatz'] },
    strang: {
      deton: [
        { t: 'Nachtschiene in Neutralstellung', info: 'konsequent, nach 4–6 Wochen beurteilen', doku: 'Nachtschiene in Neutralstellung', ev: 's', an: true }
      ],
      mobi: [
        { t: 'Medianus-Slider und Sehnengleiten', info: '2–3x 10, mehrmals täglich', doku: 'neurodynamische Gleittechniken N. medianus und Sehnengleitübungen', ev: 'e', an: true },
        { t: 'Manuelle Therapie', info: '3 Sitzungen plus Heimprogramm', doku: 'Manuelle Therapie', ev: 's', an: false }
      ],
      aktiv: [
        { t: 'Nach OP', info: 'früh Finger bewegen, Narbenpflege, Kräftigung nach Wundheilung', doku: 'postoperative Mobilisation, Narbenpflege und Kräftigung', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Aufklärung zu Belastung', info: 'Tätigkeiten mit Beugung und Vibration', doku: 'Aufklärung zur Belastungsanpassung', ev: 'e', an: true },
        { t: 'Arbeitsplatz', info: 'neutrales Handgelenk, Pausen', doku: 'Arbeitsplatzberatung', ev: 'e', an: false }
      ]
    },
    vorsicht: [
      'Ultraschall, Laser, Akupunktur ohne Nutzen (AAOS 2024).',
      'Keine Routine-Schiene und keine Routine-Therapie nach OP.',
      'HWS (C6/C7) und Pronatorlogensyndrom ausschließen.'
    ],
    warn: ['Daumenballenatrophie, zunehmende Schwäche, dauerhafte Taubheit, akutes KTS nach Trauma oder Fraktur (dringend), Nacken-Arm-Schmerz mit Reflexausfall → ärztlich.'],
    aerztlich: [
      'Kortisoninjektion wirkt bis 3 Monate.',
      'Bei schwerem oder anhaltendem KTS operative Spaltung; OP öfter gebessert als Schiene.'
    ],
    quellen: [
      { k: 'Q14', t: 'AWMF S3 Karpaltunnelsyndrom 005-003' }, { k: 'Q334', t: 'AAOS/ASSH 2024' }, { k: 'Q335', t: 'Cochrane 2023 Schienen' },
      { k: 'Q336', t: 'Cochrane 2023 Kortison' }, { k: 'Q337', t: 'Cochrane 2024 OP vs. konservativ' }, { k: 'Q338', t: 'Fernández-de-las-Peñas 2015' }
    ]
  },
  {
    id: 'K-HG03', karte: 'HG03', icd: ['M65.4'], titel: 'Tendovaginitis stenosans de Quervain', kurzTitel: 'De Quervain',
    dokuDiagnose: 'Tendovaginitis stenosans de Quervain', bereich: 'Handgelenk', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['de quervain', 'quervain', 'tendovaginitis stenosans', 'sehnenscheidenentzündung daumen', 'finkelstein', 'mamma daumen'],
    untertitel: 'Inhalte aus der Wissenskarte HG03 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Engpass im ersten Strecksehnenfach (APL, EPB) mit Schmerz an der Daumenseite des Handgelenks.',
      'Häufig bei jungen Müttern (Babyheben) und bei Tätigkeiten mit Daumenspreizung und ulnarer Abwinkelung.',
      'Spritze plus Schiene ganztags lag in der Netzwerk-Metaanalyse vorn, Sicherheit niedrig; Handtherapie war gegen Spritze nicht signifikant schlechter.',
      'Das Trainingsprogramm ist Expertenmeinung.'
    ],
    ziele: [
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: true },
      { t: 'Heben und Greifen ohne Schmerz', doku: 'schmerzfreies Greifen und Heben', an: true },
      { t: 'Kraft der Daumenmuskeln', doku: 'Kräftigung der Daumenmuskulatur', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'MWM', info: 'besser als Maitland, nur kurzfristig und kleine Studie (n=28)', doku: 'Mobilisation mit Bewegung (MWM)', ev: 's', an: false }
      ],
      aktiv: [
        { t: 'Isometrie, dann leichte Kräftigung', info: 'Daumenmuskeln, dosiert (Expertenmeinung)', doku: 'Kräftigung der Daumenmuskulatur', ev: 'e', an: true }
      ],
      berat: [
        { t: 'Daumen-Handgelenk-Schiene', info: 'tagsüber bei belastenden Tätigkeiten, nachts nach Bedarf', doku: 'Daumen-Handgelenk-Schiene', ev: 's', an: true },
        { t: 'Belastungsanpassung und Hebetechnik', info: 'Babys mit dem Unterarm statt Daumen heben', doku: 'Beratung zu Belastung und Hebetechnik', ev: 'e', an: true }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Kein Nutzen: Kinesio-Taping, Hochintensitätslaser, PRP.',
      'Der übliche „Finkelstein“ mit Faust ist der Eichhoff-Test und bei Gesunden oft positiv.',
      'Rhizarthrose, Wartenberg, Intersektionssyndrom und Kahnbein abgrenzen.'
    ],
    warn: ['Sturz mit Druckschmerz in der Tabatière, Rötung, Überwärmung, Fieber, rasche Schwellung, mehrere Gelenke mit Morgensteifigkeit, zunehmende Taubheit, tastbarer Knoten, kein Ansprechen auf Spritze plus Schiene → ärztlich.'],
    aerztlich: [
      'Kortisoninjektion oft wirksam (gegen Placebo 78 vs. 25 %, NNT 2), Kombination mit Schiene besser.',
      'OP selten. Keine AWMF- und keine internationale Praxisleitlinie.'
    ],
    quellen: [
      { k: 'Q424', t: 'NMA 2026 konservative Therapie' }, { k: 'Q425', t: 'Cevik 2024 Spritze vs. Schiene' }, { k: 'Q426', t: 'Peters-Veluthamaningal 2009 RCT' },
      { k: 'Q427', t: 'Cavaleri 2016 Handtherapie vs. Spritze' }, { k: 'Q428', t: 'Qadir 2026 MWM' }
    ]
  },
  {
    id: 'K-HG04', karte: 'HG04', icd: ['S62.0'], titel: 'Skaphoidfraktur', kurzTitel: 'Skaphoidfraktur',
    dokuDiagnose: 'Skaphoidfraktur', bereich: 'Handgelenk', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['skaphoidfraktur', 'kahnbeinbruch', 'kahnbeinfraktur', 'scaphoid', 'tabatière'],
    untertitel: 'Inhalte aus der Wissenskarte HG04 (geprüft 22.11.2026), Stationen nach Heilungsverlauf',
    abriss: [
      'Kahnbeinbruch, 90 % der Handwurzelbrüche, meist junge Männer nach Sturz auf die Hand; das Röntgen ist oft unauffällig.',
      'Taillenfraktur bis 2 mm: erst Unterarmgips, OP nur bei bestätigter Pseudarthrose (SWIFFT).',
      'Nach CT-Freigabe erst Beweglichkeit, dann Kraft und Kontrolle, Stütz zuletzt.',
      'Zur Physiotherapie gibt es keinen RCT; Inhalte und Dosierung sind Expertenmeinung.'
    ],
    ziele: [
      { t: 'Beweglichkeit Handgelenk und Daumen', doku: 'Wiederherstellung der Handgelenkbeweglichkeit', an: true },
      { t: 'Griffkraft im Seitenvergleich', doku: 'Steigerung der Griffkraft', an: true },
      { t: 'Stütz und Sport nach Freigabe', doku: 'Rückkehr zu Stützbelastung und Sport', an: false }
    ],
    stationen: { deton: ['Schutz', 'im Gips'], mobi: ['Beweglichkeit', 'nach CT-Freigabe'], aktiv: ['Kraft', 'ohne Stütz'], berat: ['Belastungsstufen', 'Beratung'] },
    strang: {
      deton: [
        { t: 'Nachbargelenke und Daumen frei bewegen', info: 'Finger, Ellenbogen, Schulter mehrmals täglich kurze Serien, schmerzfrei; Ödemkontrolle', doku: 'Bewegung der angrenzenden Gelenke, Ödemkontrolle', ev: 'e', an: true }
      ],
      mobi: [
        { t: 'Aktive ROM', info: 'nach Freigabe schmerzarm (NAS ≤ 3), mehrmals täglich', doku: 'aktive Mobilisation von Handgelenk, Unterarm und Daumen', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'Kraftausdauer, dann Kraft', info: '2–3 × 15–20, steigern auf 3 × 8–12, 2–3× pro Woche, ohne Stütz', doku: 'Kräftigung der Unterarm- und Handmuskulatur', ev: 'e', an: true }
      ],
      berat: [
        { t: 'Stütz stufenweise', info: 'Aufstützen, Liegestütz, Sturz- und Kontaktbelastung nach ärztlicher Freigabe', doku: 'stufenweiser Belastungsaufbau nach Freigabe', ev: 'e', an: true },
        { t: 'Rückkehr zum Sport', info: 'konservativ im Mittel 9,6 Wochen, nach OP 7,3 Wochen', doku: 'Beratung zur Rückkehr zum Sport', ev: 's', an: false }
      ]
    },
    vorsicht: [
      'Keine Stütz-, Sturz- oder Kontaktbelastung vor nachgewiesener Heilung.',
      'Fraktur nicht nach unauffälligem Röntgen allein ausschließen; Heilung nicht nur am Röntgenbild festmachen.',
      'Nicht empfohlen: Routine-OP bei Taillenfraktur bis 2 mm, Daumeneinschluss als Pflicht, Oberarmgips.'
    ],
    warn: ['Sturz auf die Hand mit radialseitigem Druckschmerz und unauffälligem Röntgen → ärztlich, nicht ins Belastungstraining; nach Gipsende anhaltender Tabatièreschmerz oder Kraftverlust → ärztlich, CT.'],
    aerztlich: [
      'Höheres Pseudarthroserisiko bei verzögerter Diagnose, proximalem Pol, Dislokation, Rauchen, Diabetes.',
      'Nach 6 Wochen 90 % im CT geheilt. Keine eigene AWMF-Leitlinie.'
    ],
    quellen: [
      { k: 'Q442', t: 'SWIFFT 2020' }, { k: 'Q443', t: 'SWIFFT 5 Jahre 2026' }, { k: 'Q444', t: 'Cochrane 2015 Bildgebung' },
      { k: 'Q445', t: 'Huynh 2021 klinische Tests' }, { k: 'Q447', t: 'Clementson 2015 CT-Heilung' }
    ]
  },
  {
    id: 'K-HG05', karte: 'HG05', icd: ['S63.5'], titel: 'TFCC-Läsion', kurzTitel: 'TFCC-Läsion',
    dokuDiagnose: 'TFCC-Läsion', bereich: 'Handgelenk', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['tfcc', 'discus ulnocarpalis', 'ulnarer handgelenkschmerz', 'drug', 'tfcc riss', 'triangulärer faserknorpel'],
    untertitel: 'Inhalte aus der Wissenskarte HG05 (geprüft 22.11.2026), Stationen nach Heilungsverlauf',
    abriss: [
      'Verletzung oder Verschleiß des TFCC an der Kleinfingerseite des Handgelenks.',
      'Entscheidend ist die Stabilität des DRUG, nicht der MRT-Befund: auffällige Befunde steigen mit dem Alter von 27 % auf 49 %, auch ohne Beschwerden.',
      'Stabil und traumatisch: 6 Wochen Oberarmschiene mit gesperrter Unterarmdrehung, dann 2 Wochen Orthese.',
      'Kein RCT zur konservativen Therapie; das Übungsprogramm stammt aus einer Fallserie mit 10 Patienten.'
    ],
    ziele: [
      { t: 'Schmerzarme Drehung und Stütz (NRS)', doku: 'schmerzarme Unterarmrotation und Stützbelastung', an: true },
      { t: 'Stabilität des DRUG', doku: 'Verbesserung der Stabilität des distalen Radioulnargelenks', an: true },
      { t: 'Griffkraft im Seitenvergleich', doku: 'Steigerung der Griffkraft', an: false }
    ],
    stationen: { deton: ['Schutz', 'Schiene 6 Wochen'], mobi: ['Übergang', 'aktive Bewegung'], aktiv: ['Stabilität und Kraft', 'ab etwa Woche 9'], berat: ['Last und Weiterleitung', 'Beratung'] },
    strang: {
      deton: [
        { t: 'Oberarmschiene, Nachbargelenke frei', info: 'Finger, Ellenbogen außerhalb der Schiene, Schulter bewegen; Ödemkontrolle', doku: 'Ruhigstellung mit Bewegung der freien Gelenke', ev: 's', an: true }
      ],
      mobi: [
        { t: 'Aktive Bewegung', info: 'Pro- und Supination schmerzarm, Positionssinn mit geschlossenen Augen', doku: 'aktive Mobilisation und Propriozeption', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'Isometrie ECU und Pronator quadratus', info: '5–10 × 5–10 s, mehrmals täglich, NRS bis 3', doku: 'isometrisches Training ECU und M. pronator quadratus', ev: 'e', an: true },
        { t: 'Aufbau', info: 'Dart-Throwing-Motion, PNF, ECU dynamisch 3 × 10–15, Griffkraft, Stütz von Wand bis Liegestütz', doku: 'Stabilisations- und Krafttraining Handgelenk', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Impaktion: ulnare Last reduzieren', info: 'dann gestuft aufbauen (Expertenmeinung)', doku: 'Beratung zur Belastungsanpassung', ev: 'e', an: false },
        { t: 'Instabiles DRUG früh weiterleiten', info: 'dorsale Ulna-Subluxation: Handchirurg; nach OP Freigabe der Drehung erfragen', doku: 'Empfehlung handchirurgischer Vorstellung', ev: 's', an: false }
      ]
    },
    vorsicht: [
      'Kurze Unterarmschiene allein bei traumatischer Läsion nicht empfohlen.',
      'MRT-Befund nicht allein behandeln, Diagnose nicht auf einen Einzeltest stützen.',
      'Drehung nach Refixation nicht ohne Freigabe beüben.'
    ],
    warn: ['Fehlstellung oder hervorspringende Ulna, grob instabiles DRUG, Frakturverdacht, Ulnaris-Ausfälle, Rötung ohne Trauma, Ruhe- und Nachtschmerz → ärztlich.'],
    aerztlich: [
      'Bildgebung ärztlich: MR-Arthrographie besser als MRT, Arthroskopie ist Referenz.',
      'Keine AWMF-Leitlinie bekannt, Status wird nachgeprüft.'
    ],
    quellen: [
      { k: 'Q676', t: 'Xiao 2021 Oberarm- vs. Unterarmschiene' }, { k: 'Q677', t: 'Tay 2007 Fovea-Zeichen' }, { k: 'Q678', t: 'Chan 2014 TFCC-Befunde nach Alter' },
      { k: 'Q679', t: 'Smith 2012 MRT und MR-Arthrographie' }, { k: 'Q680', t: 'Chen 2021 WSRP' }
    ]
  },
  {
    id: 'K-HG06', karte: 'HG06', icd: ['S63.3'], titel: 'Skapholunäre Bandverletzung', kurzTitel: 'SL-Bandverletzung',
    dokuDiagnose: 'skapholunärer Bandverletzung', bereich: 'Handgelenk', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['sl band', 'skapholunär', 'scapholunär', 'sl ruptur', 'watson test', 'sl instabilität'],
    untertitel: 'Inhalte aus der Wissenskarte HG06 (Karte noch nicht vertieft), nach Vorgehen sortiert',
    abriss: [
      'Verletzung des wichtigsten Bandes der Handwurzel; unbehandelt droht eine fortschreitende Arthrose (SLAC).',
      'Konservativ bei Teilverletzung: Propriozeption und Kräftigung der stabilisierenden Muskeln (ECRL, FCR, APL).',
      'Das Konzept stammt aus Studien kleiner Fallzahl, die Evidenz ist niedrig. Operativ nach Vorgabe.'
    ],
    ziele: [
      { t: 'Stabilität der Handwurzel', doku: 'Verbesserung der karpalen Stabilität', an: true },
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: true },
      { t: 'Stütz und Greifen wieder belastbar', doku: 'Steigerung der Belastbarkeit beim Stützen und Greifen', an: false }
    ],
    strang: {
      deton: [],
      mobi: [],
      aktiv: [
        { t: 'Kräftigung ECRL, FCR, APL', info: 'gezielte Kräftigung der stabilisierenden Handgelenkmuskeln', doku: 'gezielte Kräftigung der stabilisierenden Handgelenkmuskulatur', ev: 'u', an: true },
        { t: 'Propriozeption', info: 'Ball, Gyroball', doku: 'propriozeptives Training', ev: 'u', an: true }
      ],
      berat: [
        { t: 'Stütz anfangs meiden', info: 'keine starke Extension mit Stütz', doku: 'Beratung zur Vermeidung von Stützbelastung in Extension', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.', mobi: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Anfangs starke Extension mit Stütz vermeiden.',
      'Karte noch nicht vertieft, keine Quellen; Evidenz niedrig.'
    ],
    warn: [],
    aerztlich: ['Operative Versorgung nach Vorgabe.'],
    quellen: []
  },
  {
    id: 'K-HG07', karte: 'HG07', icd: ['M19.03'], titel: 'Handgelenkarthrose', kurzTitel: 'Handgelenkarthrose',
    dokuDiagnose: 'Handgelenkarthrose', bereich: 'Handgelenk', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['handgelenkarthrose', 'arthrose handgelenk', 'slac', 'snac', 'radiokarpalarthrose', 'prc'],
    untertitel: 'Inhalte aus der Wissenskarte HG07 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Meist posttraumatisch: SLAC nach SL-Bandriss, SNAC nach Kahnbeinpseudarthrose, seltener nach Radiusfraktur.',
      'Belastungsschmerz, Steife und Kraftverlust.',
      'Konservativ Schmerzmittel, Schiene, Edukation und Übungen als Erstlinie; kein abgeschlossener RCT, Inhalte und Dosierungen sind Expertenmeinung.',
      'Ärztlich PRC oder 4CF, Denervation, Arthrodese als letzter Schritt; Restschmerz nach OP ist häufig.'
    ],
    ziele: [
      { t: 'Schmerz senken (NAS)', doku: 'Schmerzreduktion', an: true },
      { t: 'Griffkraft und Stabilität', doku: 'Verbesserung von Griffkraft und Stabilität', an: true },
      { t: 'Beweglichkeit erhalten', doku: 'Erhalt der Handgelenkbeweglichkeit', an: false },
      { t: 'Realistische Erwartungen an eine OP', doku: 'Klärung der Therapieerwartungen', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Aktive Bewegung', info: 'hoch reizbar mehrmals täglich 10–15 Wdh. bei NAS ≤ 3; nach PRC früh nach Freigabe', doku: 'aktive Mobilisation im schmerzarmen Bereich', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'Stabilität und Kraft', info: 'wenig reizbar: Unterarm/Handgelenk, Griffkraft, Propriozeption, 2–3 × pro Woche, 2–3 × 10–15; nach PRC Kraft ab 6 Wochen', doku: 'Stabilisations- und Krafttraining Handgelenk und Unterarm', ev: 'e', an: true }
      ],
      berat: [
        { t: 'Edukation und Orthese', info: 'Orthese bei Belastung, schmerzauslösende Tätigkeiten meiden', doku: 'Edukation und Orthesenberatung', ev: 'l', an: true },
        { t: 'Schmerz regelmäßig messen', info: 'Verlauf dokumentieren', doku: 'Verlaufskontrolle Schmerz', ev: 'e', an: false },
        { t: 'Nach Fusion', info: 'keine Belastung vor ärztlicher Freigabe', doku: 'Beratung zur Belastung nach Arthrodese', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Nach Fusion keine Belastung vor ärztlicher Freigabe.',
      'Injektionen nicht als wirksam belegt.'
    ],
    warn: ['Anhaltender radialseitiger Schmerz nach Sturz, zunehmender Schmerz oder Instabilität nach OP, mehrere geschwollene Gelenke, Fieber, CRPS-Zeichen → ärztlich.'],
    aerztlich: [
      'PRC oder 4CF im Stadium II, bei Stadium III keine PRC.',
      'Anhaltender Schmerz nach PRC 36,8 %, 4CF 40,9 %, totaler Fusion 45,5 %.',
      'Keine AWMF-Leitlinie.'
    ],
    quellen: [
      { k: 'Q550', t: 'Laulan 2015 Übersicht' }, { k: 'Q552', t: 'Larsson 2025 Denervations-RCT-Protokoll' }, { k: 'Q553', t: 'Hones 2024 Metaanalyse PRC vs 4CF' },
      { k: 'Q554', t: 'Edouard 2010 PRC frühe Mobilisation' }, { k: 'Q555', t: 'Lawson 2025 Veteranen' }
    ]
  },
  {
    id: 'K-HG08', karte: 'HG08', icd: ['M67.4'], titel: 'Ganglion', kurzTitel: 'Ganglion',
    dokuDiagnose: 'Ganglion am Handgelenk', bereich: 'Handgelenk', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['ganglion', 'überbein', 'handgelenkzyste', 'zyste handgelenk'],
    untertitel: 'Inhalte aus der Wissenskarte HG08 (Karte noch nicht vertieft), nach Vorgehen sortiert',
    abriss: [
      'Gutartige, flüssigkeitsgefüllte Zyste, meist dorsal am Handgelenk.',
      'Oft ohne Beschwerden und bildet sich häufig von selbst zurück.',
      'Physiotherapie meist nur nach operativer Entfernung: Beweglichkeit, Narbe, Kraft.'
    ],
    ziele: [
      { t: 'Beweglichkeit nach OP', doku: 'Wiederherstellung der Handgelenkbeweglichkeit', an: true },
      { t: 'Narbe geschmeidig', doku: 'Narbenmobilisation', an: false },
      { t: 'Kraft nach OP', doku: 'Kräftigung der Handmuskulatur', an: true }
    ],
    strang: {
      deton: [
        { t: 'Narbe', info: 'nach operativer Entfernung', doku: 'Narbenbehandlung', ev: 'e', an: false }
      ],
      mobi: [
        { t: 'Beweglichkeit', info: 'nach operativer Entfernung', doku: 'Mobilisation Handgelenk', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'Kraft', info: 'nach operativer Entfernung', doku: 'Kräftigung der Hand- und Unterarmmuskulatur', ev: 'e', an: true }
      ],
      berat: [
        { t: 'Aufklärung und Abwarten', info: 'bildet sich häufig von selbst zurück; Belastungsanpassung', doku: 'Aufklärung zum Spontanverlauf, Belastungsanpassung', ev: 'e', an: true }
      ]
    },
    vorsicht: [
      'Ohne OP ist Physiotherapie meist nicht nötig.',
      'Karte noch nicht vertieft, keine Quellen.'
    ],
    warn: [],
    aerztlich: [],
    quellen: []
  },
  {
    id: 'K-HG09', karte: 'HG09', icd: ['M89.0', 'G90.5'], titel: 'CRPS nach Handgelenkverletzung', kurzTitel: 'CRPS Hand',
    dokuDiagnose: 'CRPS nach Handgelenkverletzung', bereich: 'Handgelenk', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['crps', 'morbus sudeck', 'sudeck', 'komplexes regionales schmerzsyndrom', 'gmi', 'spiegeltherapie'],
    untertitel: 'Inhalte aus der Wissenskarte HG09 (geprüft 22.11.2026), Stationen nach Schmerzbehandlung',
    abriss: [
      'Komplexes regionales Schmerzsyndrom, am häufigsten nach distaler Radiusfraktur; Diagnose ärztlich nach den Budapest-Kriterien.',
      'Früh erkennen ist entscheidend: NRS ab 5/10 in Woche 1 nach Fraktur ist ein Warnzeichen. Viele bessern sich in 6–13 Monaten.',
      'Aktiv, schmerzarm und regelmäßig; dazu Graded Motor Imagery, Graded Exposure und interdisziplinäre Schmerztherapie.',
      'Alle Physiotherapie-Vergleiche haben sehr niedrige Evidenz.'
    ],
    ziele: [
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: true },
      { t: 'Hand im Alltag nutzen', doku: 'Steigerung des Handeinsatzes im Alltag', an: true },
      { t: 'Bewegungsangst abbauen', doku: 'Abbau von Bewegungsangst', an: false },
      { t: 'Ödem und Beweglichkeit verbessern', doku: 'Ödemreduktion und Verbesserung der Beweglichkeit', an: false }
    ],
    stationen: { deton: ['Desensibilisierung', 'Körperwahrnehmung'], mobi: ['Graded Motor Imagery', 'nach Protokoll'], aktiv: ['Aktive Nutzung', 'Graded Exposure'], berat: ['Aufklärung und Team', 'interdisziplinär'] },
    strang: {
      deton: [
        { t: 'Desensibilisierung', info: 'Berührungsempfindlichkeit schrittweise abbauen', doku: 'Desensibilisierung', ev: 'e', an: false }
      ],
      mobi: [
        { t: 'Graded Motor Imagery', info: 'je 2 Wochen Links-rechts-Erkennung, vorgestellte Bewegung, Spiegel; Tagesdosis nicht im Original geprüft', doku: 'Graded Motor Imagery', ev: 's', an: true }
      ],
      aktiv: [
        { t: 'Aktiv, schmerzarm, regelmäßig', info: 'Alltagsnutzung der Hand fördern, lange Schonung meiden', doku: 'aktive Bewegungstherapie im schmerzarmen Bereich', ev: 'e', an: true },
        { t: 'Graded Exposure', info: 'bei Bewegungsangst, höchstens 5 Sitzungen; nicht besser als Standard, aber gleich gut', doku: 'Graded Exposure', ev: 's', an: false }
      ],
      berat: [
        { t: 'Interdisziplinär mit Schmerztherapie', info: 'Arzt bei NRS ab 5/10 in Woche 1 informieren', doku: 'interdisziplinäre Abstimmung mit der Schmerztherapie', ev: 'l', an: true }
      ]
    },
    vorsicht: [
      'Keine schmerzhaften passiven Dehnungen.',
      'Vitamin C widersprüchlich und nicht signifikant; Verordnung ärztlich.',
      'Wortlaut der Budapest-Kriterien nicht im Original geprüft.'
    ],
    warn: ['Zunehmender Schmerz mit Spannung unter dem Gips → sofort ärztlich; Kribbeln Daumen bis Mittelfinger, Rötung, Fieber, Armschwellung → ärztlich.'],
    aerztlich: [
      'Diagnose nach Budapest-Kriterien (Sensitivität 0,99, Spezifität 0,68).',
      'Die AWMF 030-116 S1 ist abgelaufen und in Überarbeitung.'
    ],
    quellen: [
      { k: 'Q514', t: 'Moseley 2014 NRS Woche 1' }, { k: 'Q515', t: 'Harden 2010 Budapest' }, { k: 'Q516', t: 'Cochrane 2022 Physiotherapie' },
      { k: 'Q518', t: 'Moseley 2006 GMI' }, { k: 'Q519', t: 'Barnhoorn 2015 PEPT' }, { k: 'Q517', t: 'Evaniew 2015 Vitamin C' }
    ]
  },
  {
    id: 'K-HG10', karte: 'HG10', icd: ['S63.5'], titel: 'Handgelenkdistorsion', kurzTitel: 'Handgelenkdistorsion',
    dokuDiagnose: 'Handgelenkdistorsion', bereich: 'Handgelenk', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['handgelenkdistorsion', 'verstauchung handgelenk', 'distorsion handgelenk', 'handgelenk verstaucht'],
    untertitel: 'Inhalte aus der Wissenskarte HG10 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Verstauchung ohne Fraktur; die Distorsion ist eine Ausschlussdiagnose.',
      'Skaphoidfraktur und SL-Bandverletzung ausschließen, sie werden oft als Verstauchung verkannt; bei unauffälligem Röntgen liegt die Vortestwahrscheinlichkeit fürs Kahnbein bei etwa 25 %.',
      'Kurz schützen, früh bewegen, Kraft und Propriozeption aufbauen, Stütz schrittweise.',
      'Kein RCT zur reinen Distorsion; der Reha-Ablauf ist Expertenmeinung.'
    ],
    ziele: [
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: true },
      { t: 'Freie Beweglichkeit', doku: 'Wiederherstellung der Handgelenkbeweglichkeit', an: true },
      { t: 'Stütz und Greifen belastbar', doku: 'Steigerung der Belastbarkeit beim Stützen und Greifen', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Kurz schützen, früh bewegen', info: 'aktiv im schmerzarmen Bereich', doku: 'frühfunktionelle Mobilisation', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'Kraft und Propriozeption', info: 'aufbauend; bei SL-Instabilität mit NMES besser (30 Patienten)', doku: 'Kräftigung und propriozeptives Training', ev: 'e', an: true },
        { t: 'Stütz schrittweise', info: 'nach Verträglichkeit', doku: 'stufenweiser Aufbau der Stützbelastung', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Abgrenzung im Blick behalten', info: 'nach 3 Monaten anhaltender ulnarer oder dorsal-zentraler Schmerz → Handchirurgie', doku: 'Verlaufskontrolle und ggf. Empfehlung handchirurgischer Vorstellung', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Tests und MRT schließen SL- und TFCC-Verletzungen nicht sicher aus.',
      'Distorsion ist Ausschlussdiagnose.'
    ],
    warn: ['Tabatière-Druckschmerz auch bei unauffälligem Röntgen, Fehlstellung, Druckschmerz am distalen Radius, Hochenergietrauma, instabiles DRUG oder Klicken mit ulnarem Schmerz → ärztlich.'],
    aerztlich: ['Keine eigene AWMF-Leitlinie.'],
    quellen: [
      { k: 'Q556', t: 'Carpenter 2014 Kahnbein Metaanalyse' }, { k: 'Q445', t: 'Huynh 2021 Kahnbein-Tests' }, { k: 'Q557', t: 'Walenkamp 2015 Amsterdam Wrist Rules' },
      { k: 'Q558', t: 'Andersson 2015 Bandverletzungen' }, { k: 'Q561', t: 'Dağ 2025 RCT SL-Instabilität' }
    ]
  },
  {
    id: 'K-FI01', karte: 'FI01', icd: ['M18'], titel: 'Rhizarthrose', kurzTitel: 'Rhizarthrose',
    dokuDiagnose: 'Rhizarthrose', bereich: 'Finger', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['rhizarthrose', 'daumensattelgelenk', 'arthrose daumen', 'cmc arthrose', 'daumenarthrose'],
    untertitel: 'Inhalte aus der Wissenskarte FI01 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Arthrose des Daumensattelgelenks, häufig bei Frauen ab 50.',
      'Schmerz beim Spitz- und Schlüsselgriff und beim Öffnen von Gläsern; später Adduktionskontraktur und Überstreckung im Grundgelenk (Z-Deformität).',
      'Basis sind Aufklärung, Gelenkschutz, Übungen und eine Daumenorthese; die Kombination ist besser als jede Maßnahme allein.',
      'Die Schiene wirkt vor allem mittel- und langfristig, Übungen eher kurzfristig.'
    ],
    ziele: [
      { t: 'Gläser öffnen ohne starke Schmerzen', doku: 'Verbesserung der Greiffunktion im Alltag', an: true },
      { t: 'Schreiben und Handarbeit', doku: 'schmerzarmes Schreiben und Handarbeiten', an: true },
      { t: 'Pinchkraft steigern', doku: 'Steigerung der Pinchkraft', an: false },
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Dehnung des ersten Zwischenraums', info: 'gegen die Adduktionskontraktur', doku: 'Dehnung der ersten Kommissur', ev: 'e', an: false }
      ],
      aktiv: [
        { t: 'Stabilisierung des Daumens', info: 'erster dorsaler Interosseus und Opponens kräftigen, „C-Stellung“ statt Spitzgriff mit überstrecktem MCP', doku: 'stabilisierende Kräftigung der Daumenmuskulatur', ev: 'l', an: true }
      ],
      berat: [
        { t: 'Daumenorthese', info: 'starre CMC-MCP-Schiene am besten bewertet', doku: 'Versorgung mit Daumenorthese', ev: 's', an: true },
        { t: 'Gelenkschutz und Hilfsmittel', info: 'dicke Griffe, Hebelwirkung nutzen, Kraft auf große Gelenke verteilen', doku: 'Gelenkschutzschulung und Hilfsmittelberatung', ev: 'l', an: true },
        { t: 'Nach Resektionsarthroplastik', info: 'Ruhigstellung nach Vorgabe (oft 4–6 Wochen), dann Bewegung, Kraft ab etwa 8–12 Wochen', doku: 'Nachbehandlung nach Resektionsarthroplastik', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Kein Spitzgriff mit überstrecktem MCP üben.',
      'De Quervain abgrenzen.',
      'Intraartikuläres Kortison laut EULAR allgemein nicht.'
    ],
    warn: ['Rötung, Überwärmung, starke Schwellung, mehrere geschwollene Gelenke mit Morgensteifigkeit, nächtliches Kribbeln, Trauma mit Fehlstellung → ärztlich.'],
    aerztlich: [
      'Ärztlich: Injektion, OP (Resektionsarthroplastik, Prothese); keine RCTs Chirurgie gegen konservativ.',
      'AWMF 187-065 nur angemeldet.'
    ],
    quellen: [
      { k: 'Q54', t: 'EULAR 2018 Handarthrose' }, { k: 'Q361', t: 'ACR 2019' }, { k: 'Q362', t: 'Deveza 2021 COMBO' }, { k: 'Q363', t: 'Cochrane 2026 Chirurgie Rhizarthrose' }
    ]
  },
  {
    id: 'K-FI02', karte: 'FI02', icd: ['M15.1', 'M15.2'], titel: 'Fingerpolyarthrose (Heberden, Bouchard)', kurzTitel: 'Fingerpolyarthrose',
    dokuDiagnose: 'Fingerpolyarthrose', bereich: 'Finger', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['fingerpolyarthrose', 'heberden', 'bouchard', 'fingerarthrose', 'handarthrose', 'polyarthrose'],
    untertitel: 'Inhalte aus der Wissenskarte FI02 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Arthrose der Fingerendgelenke (Heberden) und Mittelgelenke (Bouchard) mit knotiger Verdickung, schubweiser Entzündung und verminderter Griffkraft.',
      'Abgrenzen von rheumatoider Arthritis, Psoriasisarthritis und CPPD.',
      'Kern sind Aufklärung, Gelenkschutz, Hilfsmittel und Übungen als Dauerprogramm; Übungen wirken kurzfristig, nach 24 Wochen kein Zusatznutzen.',
      'Keine AWMF-Leitlinie, maßgeblich ist EULAR 2018.'
    ],
    ziele: [
      { t: 'Schmerz senken (NRS)', doku: 'Schmerzreduktion', an: true },
      { t: 'Griffkraft und Faustschluss', doku: 'Verbesserung von Griffkraft und Faustschluss', an: true },
      { t: 'Alltag mit Gelenkschutz und Hilfsmitteln', doku: 'Selbstständigkeit im Alltag', an: true },
      { t: 'Steifigkeit verringern', doku: 'Reduktion der Steifigkeit', an: false }
    ],
    stationen: { deton: ['Wärme', 'vor den Übungen'] },
    strang: {
      deton: [
        { t: 'Wärme vor Übungen', info: 'Paraffin oder Moor; kurzfristig wirksam', doku: 'Wärmeanwendung vor der Übungstherapie', ev: 's', an: false }
      ],
      mobi: [
        { t: 'Faustschluss, Streckung, Sehnengleiten', info: 'dazu Daumenopposition, täglich kurz', doku: 'aktive Mobilisation der Fingergelenke und Sehnengleitübungen', ev: 's', an: true }
      ],
      aktiv: [
        { t: 'Griffkraft', info: 'Knetmasse oder Band, 2–3× pro Woche, Schmerz bis etwa NRS 3 (Dosierung Expertenmeinung)', doku: 'Kräftigung der Griffkraft', ev: 's', an: true }
      ],
      berat: [
        { t: 'Gelenkschutzschulung', info: 'Ansprechen 33 % vs. 21 % nach 6 Monaten', doku: 'Gelenkschutzschulung', ev: 's', an: true },
        { t: 'Hilfsmittelberatung', info: 'mittlerer Langzeiteffekt auf die Funktion', doku: 'Hilfsmittelberatung', ev: 's', an: false },
        { t: 'Im entzündlichen Schub', info: 'schonender dosieren und ärztlich abklären', doku: 'Belastungsanpassung im Schub', ev: 'e', an: false }
      ]
    },
    vorsicht: [
      'Laut französischer Leitlinie gegen Laser, Akupunktur, Kinesiotape.',
      'Schienen an DIP und PIP ohne RCT.'
    ],
    warn: ['Schwellung an Grund- oder Handgelenken, Morgensteifigkeit deutlich über 30 min, Wurstfinger, Haut- oder Nagelveränderungen, einzelnes heißes Gelenk, Fieber, Gewichtsverlust → ärztlich.'],
    aerztlich: ['Geschwollene, druckschmerzhafte IP-Gelenke zum Rheumatologen.'],
    quellen: [
      { k: 'Q54', t: 'EULAR 2018 Handarthrose' }, { k: 'Q502', t: 'Huang 2024 Übungen Metaanalyse' }, { k: 'Q503', t: 'Dziedzic 2015 SMILE-OA' },
      { k: 'Q504', t: 'Hennig 2015 Heimübungen' }, { k: 'Q506', t: 'Cheng 2026 Wärme' }, { k: 'Q507', t: 'Kjeken 2025 Evidenzreview' }
    ]
  },
  {
    id: 'K-FI03', karte: 'FI03', icd: ['M65.3'], titel: 'Schnellender Finger (Tendovaginitis stenosans)', kurzTitel: 'Schnellender Finger',
    dokuDiagnose: 'schnellendem Finger (Tendovaginitis stenosans)', bereich: 'Finger', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['schnellender finger', 'triggerfinger', 'schnappfinger', 'a1 ringband', 'tendovaginitis stenosans', 'digitus saltans'],
    untertitel: 'Inhalte aus der Wissenskarte FI03 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Beugesehne und A1-Ringband passen nicht mehr zusammen, der Finger schnappt oder bleibt in Beugung hängen; etwa 2 % der Bevölkerung, bei Diabetes bis 20 %.',
      'Blockierorthese und Kortisoninjektion sind bis 52 Wochen gleichwertig, die Kombination bringt nichts.',
      'Konservativ etwa 75 % Erfolg bei Grad 1–2, 60 % bei Grad 3.',
      'Ab Grad 3 und bei insulinpflichtigem Diabetes früher ärztlich bzw. handchirurgisch.'
    ],
    ziele: [
      { t: 'Finger ohne Schnappen bewegen', doku: 'Reduktion des Schnappphänomens', an: true },
      { t: 'Volle Streckung', doku: 'Verbesserung der Fingerextension', an: true },
      { t: 'Schmerzfreies Greifen', doku: 'schmerzfreies Greifen', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: 'Sehnengleiten', info: 'nur als Begleitung, Dosierung nicht belegt; nach OP früh', doku: 'Sehnengleitübungen', ev: 'u', an: false }
      ],
      aktiv: [
        { t: 'Nach OP', info: 'Narbe, Ödem, PIP-Streckung (Erfahrungswissen)', doku: 'postoperative Narben- und Ödembehandlung, PIP-Streckung', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Blockierorthese für ein Gelenk', info: 'Grad 1–2, mindestens 6 Wochen, besser 6–10, mind. 8 h/Tag, am besten 24 h; PIP eher besser als MCP', doku: 'Versorgung mit Blockierorthese', ev: 's', an: true },
        { t: 'Kräftiges Dauergreifen meiden', info: 'Tragezeit besprechen', doku: 'Beratung zur Belastungsanpassung', ev: 'e', an: true }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Keine Schiene routinemäßig zusätzlich zur Spritze.',
      'Gleitübungen, Stoßwelle, Manuelle Therapie ohne eigenen Wirknachweis.'
    ],
    warn: ['Kanavel-Zeichen, Rötung, Fieber → Sehnenscheidenphlegmone, sofort ärztlich (Notfall); Verlust der aktiven Beugung nach Trauma, Kind mit schnellendem Daumen → ärztlich.'],
    aerztlich: [
      'Offene Release mit niedrigster Rückfallquote (6,5 % gegen 38 % nach Injektion).',
      'Spritze versagt bei Insulinpflicht in 78 %.'
    ],
    quellen: [
      { k: 'Q430', t: 'Atthakomol 2023 RCT Schiene vs. Injektion' }, { k: 'Q431', t: 'Cochrane 2018 Chirurgie' }, { k: 'Q432', t: 'McKenna 2026 SR Schienen' },
      { k: 'Q433', t: 'Lunsford 2019 SR Orthesen' }, { k: 'Q434', t: 'APMR 2025 RCT Grad und Orthese' }, { k: 'Q435', t: 'Orthopedics 2018 Injektion bei Diabetes' }
    ]
  },
  {
    id: 'K-FI04', karte: 'FI04', icd: ['M72.0'], titel: 'Morbus Dupuytren', kurzTitel: 'Dupuytren',
    dokuDiagnose: 'Morbus Dupuytren', bereich: 'Finger', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['dupuytren', 'dupuytren kontraktur', 'palmarfibromatose', 'fasziektomie', 'kollagenase', 'nadelfasziotomie'],
    untertitel: 'Inhalte aus der Wissenskarte FI04 (geprüft 22.11.2026), Stationen nach dem Eingriff',
    abriss: [
      'Knoten und Stränge der Palmaraponeurose ziehen die Finger in Beugung, meist Ring- und Kleinfinger.',
      'Dehnen, Schienen und physikalische Therapie halten das Fortschreiten nicht auf; behandelt wird ärztlich, nach 2 Jahren hält die OP am besten.',
      'Physiotherapie nach dem Eingriff: Übungen, Ödem, Narbe, Warnzeichen; Dosis in keiner Studie angegeben.',
      'Rezidivrisiko mit allen Diathese-Faktoren 71 %, ohne 23 %.'
    ],
    ziele: [
      { t: 'Streckdefizit je Gelenk halten oder verringern', doku: 'Verbesserung der Fingerextension', an: true },
      { t: 'Voller Faustschluss', doku: 'Wiederherstellung des Faustschlusses', an: true },
      { t: 'Alltagsgriffe', doku: 'Verbesserung der Greiffunktion im Alltag', an: false }
    ],
    stationen: { deton: ['Wundphase', 'Ödem und Lagerung'], mobi: ['Streckung und Faust', 'nach Fadenzug'], aktiv: ['Alltagsgriffe', 'aktiv'], berat: ['Instruktion und Kontrolle', 'Beratung'] },
    strang: {
      deton: [
        { t: 'Hochlagern und Ödem', info: 'freie Gelenke aktiv bewegen', doku: 'Ödembehandlung und Hochlagerung', ev: 'e', an: true },
        { t: 'Narbenbehandlung', info: 'nach Wundschluss', doku: 'Narbenbehandlung', ev: 'e', an: false }
      ],
      mobi: [
        { t: 'Aktive und passive Streckung, Faustschluss', info: 'kurze Einheiten mehrmals am Tag, ohne Schmerzverstärkung (Expertenmeinung)', doku: 'aktive und passive Mobilisation in Extension, Faustschluss', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'Alltagsgriffe', info: 'nach Fadenzug', doku: 'alltagsorientiertes Greiftraining', ev: 'e', an: false }
      ],
      berat: [
        { t: 'Instruktion und Übungstherapie', info: 'älterer Konsens (HANDGUIDE)', doku: 'Instruktion Heimprogramm', ev: 'l', an: true },
        { t: 'Nachtschiene nur bei wiederkehrendem Streckdefizit', info: 'routinemäßig ohne Nutzen', doku: 'Nachtschiene bei wiederkehrendem Streckdefizit', ev: 's', an: false },
        { t: 'Streckdefizit dokumentieren', info: 'je Gelenk bei jeder Behandlung, Warnzeichen prüfen', doku: 'Verlaufsdokumentation des Streckdefizits', ev: 'e', an: false }
      ]
    },
    vorsicht: [
      'Routinemäßige Nachtschiene nach Fasziektomie ohne Nutzen.',
      'Dehnen oder Schienen im Frühstadium ohne Wirkungsnachweis.'
    ],
    warn: ['Nach dem Eingriff: Taubheit an einer Fingerseite oder blasser, kalter Finger → sofort zum Operateur; Rötung mit Überwärmung, unpassender Schmerz, Temperaturunterschied über 1 °C → ärztlich.'],
    aerztlich: [
      'Nadelfasziotomie, Kollagenase oder Fasziektomie; nach 2 Jahren 78 % OP, 65 % Kollagenase, 50 % Nadel erfolgreich.',
      'Nach Kollagenase Handtherapie vor allem bei Schmerz oder hohem Kraftbedarf. Keine AWMF-Leitlinie.'
    ],
    quellen: [
      { k: 'Q586', t: 'Räisänen 2024 DETECT' }, { k: 'Q587', t: 'Jerosch-Herold 2011 RCT Nachtschiene' }, { k: 'Q588', t: 'Yates 2024 Metaanalyse Orthesen PIP' },
      { k: 'Q589', t: 'Aglen 2026 RCT Handtherapie nach Kollagenase' }, { k: 'Q590', t: 'Hindocha 2006 Diathese' }, { k: 'Q591', t: 'HANDGUIDE-Konsens 2013 (älter)' }
    ]
  },
  {
    id: 'K-FI05', karte: 'FI05', icd: ['S66.0', 'S66.1'], titel: 'Beugesehnenverletzung', kurzTitel: 'Beugesehnenverletzung',
    dokuDiagnose: 'Z. n. Beugesehnennaht', bereich: 'Finger', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['beugesehnenverletzung', 'beugesehnennaht', 'fdp', 'fds', 'zone 2', 'place and hold', 'kleinert'],
    untertitel: 'Inhalte aus der Wissenskarte FI05 (geprüft 22.11.2026), Stationen nach dem Schema der Klinik',
    abriss: [
      'Durchtrennte Beugesehne, meist Schnittverletzung in Zone II, in 37 % mit Fingernerv, immer OP.',
      'Frühe kontrollierte Bewegung ist Standard; ob echt aktiv oder Place-and-Hold besser ist, ist offen.',
      'Es gilt ausschließlich das Schema der operierenden Klinik.',
      'Ruptur etwa 4 %; alle Studienvergleiche sind sehr gering gesichert.'
    ],
    ziele: [
      { t: 'Aktive Fingerbeugung (TAM)', doku: 'Verbesserung der aktiven Fingerbeweglichkeit', an: true },
      { t: 'Keine Ruptur, keine Verklebung', doku: 'Schutz der Sehnennaht', an: true },
      { t: 'Belastung und Handfunktion ab Woche 6', doku: 'Wiederherstellung der Handfunktion', an: false }
    ],
    stationen: { deton: ['Schutz', 'Schiene nach Klinik'], mobi: ['Kontrollierte Bewegung', 'nach Schema'], aktiv: ['Belastung', 'ab Woche 6'], berat: ['Schema und Kontrolle', 'Klinik geht vor'] },
    strang: {
      deton: [
        { t: 'Schiene nach Klinik', info: '5 Wochen durchgehend, dann 1 Woche nachts und in riskanten Situationen; kurze Schiene so gut wie lange', doku: 'Schienenversorgung nach Schema der Klinik', ev: 's', an: true }
      ],
      mobi: [
        { t: 'Aktive Beugung oder Place-and-Hold', info: 'statt rein passiv; aktiv im Teilbereich, nicht bis zur Faust; bei 2-Strang-Naht keine echte aktive Flexion und Extension', doku: 'frühe kontrollierte Mobilisation nach Schema der Klinik', ev: 's', an: true },
        { t: 'Bei Schwellung', info: 'Bewegungsbereich eher zurücknehmen als stärker drücken', doku: 'Anpassung des Bewegungsumfangs bei Schwellung', ev: 'e', an: false }
      ],
      aktiv: [
        { t: 'Belastung schrittweise', info: 'ab Woche 6; Zeitpunkt und Dosis nicht belegt', doku: 'schrittweiser Belastungsaufbau', ev: 'e', an: true }
      ],
      berat: [
        { t: 'Schema der Klinik', info: 'Wiederholungen und Frequenz nach Klinik; Daumen nach Klinik', doku: 'Durchführung nach Nachbehandlungsschema der Klinik', ev: 'l', an: true },
        { t: 'TAM dokumentieren', info: 'jede Behandlung', doku: 'Verlaufsdokumentation TAM', ev: 'e', an: false }
      ]
    },
    vorsicht: [
      'Keine Immobilisation über 3 Wochen bei Fingern.',
      'Bei 2-Strang-Naht keine echte aktive Flexion und Extension (mehr Rupturen).',
      'Echt aktiv gegen Place-and-Hold ist widersprüchlich; das Schema der Klinik geht vor.'
    ],
    warn: ['Plötzlicher Verlust der aktiven Beugung, oft mit Knacken (Reruptur) → sofort zum Operateur; Rötung, Überwärmung, Wundsekret → ärztlich.'],
    aerztlich: ['Immer OP; am Daumen 17 % Re-OP. Keine AWMF-Leitlinie.'],
    quellen: [
      { k: 'Q592', t: 'Cochrane 2021 Nachbehandlung' }, { k: 'Q593', t: 'IFSSH-Konsens 2026' }, { k: 'Q594', t: 'Chevalley 2024 RCT 5 Jahre' },
      { k: 'Q595', t: 'Bamford 2026 FIRST Schienen' }, { k: 'Q596', t: 'Xu 2023 Metaanalyse Zone II' }, { k: 'Q597', t: 'Trumble 2010 RCT Place-and-Hold' }
    ]
  },
  {
    id: 'K-FI06', karte: 'FI06', icd: ['S66.3', 'M20.0'], titel: 'Strecksehnenverletzung und Mallet-Finger', kurzTitel: 'Mallet / Strecksehne',
    dokuDiagnose: 'Strecksehnenverletzung (Mallet-Finger)', bereich: 'Finger', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['mallet finger', 'hammerfinger', 'strecksehnenverletzung', 'strecksehnenriss', 'stack schiene', 'knopflochdeformität'],
    untertitel: 'Inhalte aus der Wissenskarte FI06 (geprüft 22.11.2026), Stationen nach Heilungsverlauf',
    abriss: [
      'Mallet-Finger: Strecksehne über dem Endgelenk gerissen oder knöchern ausgerissen, das Endglied hängt.',
      'Meist Schiene, 6 Wochen (chronisch 8) ununterbrochen gestreckt; der Schienentyp ist fürs Ergebnis fast egal, Fertigschienen machen öfter Hautprobleme.',
      'Nach Naht in Zone V/VI früh bewegen mit RME-Orthese, Programm etwa 7 Wochen.',
      'Abschulung und Nachtschiene ohne RCT; Phasen sind Expertenmeinung.'
    ],
    ziele: [
      { t: 'Aktive Endgelenkstreckung', doku: 'Wiederherstellung der aktiven DIP-Extension', an: true },
      { t: 'Haut unter der Schiene gesund', doku: 'Hautschutz unter der Schiene', an: false },
      { t: 'Faustschluss nach Naht', doku: 'Verbesserung der Fingerflexion', an: true }
    ],
    stationen: { deton: ['Schutz', 'Schiene durchgehend'], mobi: ['Abschulung', 'ab Woche 6–8'], aktiv: ['Nach Naht', 'RME-Orthese'], berat: ['Schienenpflege', 'Beratung'] },
    strang: {
      deton: [
        { t: 'DIP ununterbrochen gestreckt', info: '6 Wochen, chronisch 8; länger bei bleibendem Streckdefizit', doku: 'Streckschiene DIP', ev: 's', an: true },
        { t: 'Ödem senken, PIP frei bewegen', info: 'währenddessen', doku: 'Ödembehandlung, freie Beweglichkeit PIP', ev: 'e', an: false }
      ],
      mobi: [
        { t: 'Abschulung', info: 'Schiene tagsüber stundenweise weglassen, DIP-Beugung im kleinen Bogen, nachts weiter schienen; bei neuem Streckdefizit zurück', doku: 'stufenweise Abschulung von der Schiene', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'Früh bewegen mit RME-Orthese', info: 'Zone V/VI: RME tagsüber plus Nachtorthese, etwa 7 Wochen; Flexionsdefizit gezielt behandeln', doku: 'frühfunktionelle Bewegung mit Relative-Motion-Orthese', ev: 's', an: true }
      ],
      berat: [
        { t: 'Schienenwechsel nur flach auf dem Tisch', info: 'Waschen ebenso; Haut bei jedem Termin kontrollieren', doku: 'Anleitung zu Schienenwechsel und Hautkontrolle', ev: 'e', an: true },
        { t: 'Schiene nach Haut und Mitarbeit wählen', info: 'Fertigschiene, die drückt, nicht weitertragen', doku: 'Beratung zur Schienenauswahl', ev: 's', an: false }
      ]
    },
    vorsicht: [
      'Nicht empfohlen: OP nur, weil sie sicherer wirkt, bei tendinösem oder kleinem knöchernem Mallet.',
      'Keine starre Ruhigstellung über Wochen nach Naht in Zone V/VI.',
      'Negativen Elson-Test bei offener Zone-III-Verletzung nicht als Entwarnung werten.'
    ],
    warn: ['Offene Wunde über dem PIP, beginnende Knopflochdeformität, großes Fragment oder palmare Subluxation, Druckstelle unter der Schiene, Infektzeichen → ärztlich.'],
    aerztlich: [
      'OP gegen konservativ: Rest-Streckdefizit 5,7° gegen 7,6°, Komplikationen 14,5 % gegen 12,8 %.',
      'Keine AWMF-Leitlinie.'
    ],
    quellen: [
      { k: 'Q598', t: 'Valdes 2015 konservative Mallet-Behandlung' }, { k: 'Q599', t: 'Witherow 2015 Schienentyp und Haut' }, { k: 'Q600', t: 'Lin 2018 OP gegen konservativ' },
      { k: 'Q602', t: 'Shaw 2023 Relative-Motion-Orthesen' }, { k: 'Q603', t: 'Cela-López 2026 RME-RCT' }
    ]
  },
  {
    id: 'K-FI07', karte: 'FI07', icd: ['S63.4'], titel: 'Skidaumen (ulnares Seitenband Daumengrundgelenk)', kurzTitel: 'Skidaumen',
    dokuDiagnose: 'Skidaumen (Läsion des ulnaren Seitenbandes am Daumengrundgelenk)', bereich: 'Finger', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['skidaumen', 'ulnares seitenband daumen', 'stener läsion', 'daumenbandriss', 'gamekeeper'],
    untertitel: 'Inhalte aus der Wissenskarte FI07 (Karte noch nicht vertieft), Stationen nach Heilungsverlauf',
    abriss: [
      'Verletzung des ulnaren Seitenbandes am Daumengrundgelenk, typisch beim Sturz mit Skistock.',
      'Bei Komplettruptur mit Stener-Läsion ist eine OP nötig.',
      'Teilruptur: Daumenschiene 4–6 Wochen, dann Bewegung und Kraft; Pinch-Belastung nach OP erst spät.'
    ],
    ziele: [
      { t: 'Stabiler Daumen beim Greifen', doku: 'Stabilität des Daumengrundgelenks', an: true },
      { t: 'Pinchkraft', doku: 'Steigerung der Pinchkraft', an: true },
      { t: 'Beweglichkeit IP und MCP', doku: 'Wiederherstellung der Daumenbeweglichkeit', an: false }
    ],
    stationen: { deton: ['Schutz', 'Daumenschiene'], mobi: ['Bewegung', 'IP früh, MCP später'], aktiv: ['Kraft', 'Pinch stufenweise'], berat: ['Grenzen', 'Beratung'] },
    strang: {
      deton: [
        { t: 'Daumenschiene', info: 'Teilruptur 4–6 Wochen, nach OP nach Vorgabe', doku: 'Ruhigstellung in Daumenschiene', ev: 'e', an: true }
      ],
      mobi: [
        { t: 'IP-Gelenk früh, später MCP', info: 'nach Schienenphase', doku: 'Mobilisation von IP- und MCP-Gelenk des Daumens', ev: 'e', an: true }
      ],
      aktiv: [
        { t: 'Pinchkraft stufenweise', info: 'nach OP erst spät (etwa 8–12 Wochen)', doku: 'stufenweise Kräftigung der Pinchkraft', ev: 'e', an: true }
      ],
      berat: [
        { t: 'Belastungsgrenzen', info: 'Pinch-Belastung nach Vorgabe', doku: 'Beratung zu Belastungsgrenzen', ev: 'e', an: false }
      ]
    },
    vorsicht: [
      'Valgus-Stresstest erst ärztlich nach Ausschluss einer Fraktur.',
      'Karte noch nicht vertieft, keine Quellen.'
    ],
    warn: [],
    aerztlich: ['Komplettruptur mit Stener-Läsion: OP nötig.'],
    quellen: []
  },
  {
    id: 'K-FI08', karte: 'FI08', icd: ['S62.3', 'S62.6'], titel: 'Mittelhand- und Fingerfrakturen', kurzTitel: 'Mittelhand-/Fingerfraktur',
    dokuDiagnose: 'Mittelhand- bzw. Fingerfraktur', bereich: 'Finger', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['mittelhandfraktur', 'boxerfraktur', 'fingerfraktur', 'metakarpalfraktur', 'grundgliedfraktur', 'buddy tape'],
    untertitel: 'Inhalte aus der Wissenskarte FI08 (geprüft 22.11.2026), Stationen nach Heilungsverlauf',
    abriss: [
      'Häufig, am häufigsten der Kleinfingerstrahl (Boxerfraktur, etwa 20 % aller Handfrakturen); die meisten heilen ohne OP.',
      'Entscheidend ist der Rotationsfehler, nicht der Röntgenwinkel; Abkippung bis 70° hängt nicht mit dem Ergebnis zusammen.',
      'Früh bewegen, so weit die Versorgung es erlaubt; bei der Boxerfraktur ist Buddy Taping so gut wie Gips.',
      'Ruhigstellungsdauer und Intrinsic-plus-Stellung sind Expertenmeinung.'
    ],
    ziele: [
      { t: 'Voller Faustschluss ohne Rotationsfehler', doku: 'Wiederherstellung des Faustschlusses', an: true },
      { t: 'Griffkraft im Seitenvergleich', doku: 'Steigerung der Griffkraft', an: true },
      { t: 'Rückkehr zu Arbeit und Sport', doku: 'Rückkehr zu Arbeit und Sport', an: false }
    ],
    stationen: { deton: ['Schutz', 'bis etwa Woche 3'], mobi: ['Mobilisation', 'etwa Woche 3 bis 6'], aktiv: ['Belastung', 'ab etwa Woche 6'], berat: ['Kontrolle und Schutz', 'Beratung'] },
    strang: {
      deton: [
        { t: 'Ödem und freie Gelenke', info: 'Hochlagern, Kompression, freie Gelenke mehrmals täglich; Rotation prüfen', doku: 'Ödembehandlung, Bewegung der freien Gelenke', ev: 'e', an: true }
      ],
      mobi: [
        { t: 'Sehnengleiten', info: 'gerade Faust, Hakenfaust, volle Faust; PIP und DIP isoliert', doku: 'Sehnengleitübungen und isolierte Gelenkmobilisation', ev: 's', an: true },
        { t: 'Streckung bei PIP-Streckdefizit', info: 'gezielt; nach OP Narbe', doku: 'gezielte Mobilisation in Extension, Narbenbehandlung', ev: 'e', an: false }
      ],
      aktiv: [
        { t: 'Griffkraft dosiert steigern', info: 'ab etwa Woche 6 nach Freigabe', doku: 'Kräftigung der Griffkraft', ev: 'e', an: true }
      ],
      berat: [
        { t: 'Versorgung erfragen', info: 'Tape, Schiene, Gips oder OP', doku: 'Abklärung der Versorgung', ev: 'e', an: false },
        { t: 'Schutzschiene für Kontaktsport', info: 'bei Bedarf', doku: 'Beratung zur Schutzschiene im Sport', ev: 'e', an: false }
      ]
    },
    vorsicht: [
      'Nicht empfohlen: Gips oder starre Schiene bei unkomplizierter Boxerfraktur, lange Ruhigstellung nach Osteosynthese ohne Grund.',
      'OP nicht nur wegen Abkippung bis 70° oder reiner Verkürzung.',
      'Wunde am Knöchel nicht als Bagatelle abtun.'
    ],
    warn: ['Wunde über dem Grundgelenk nach Faustschlag → ärztlich, mit Rötung oder Fieber sofort (Notfall); Finger überkreuzen im Faustschluss, offene oder verschobene Gelenkfraktur → ärztlich.'],
    aerztlich: [
      'Wichtigste OP-Indikation ist der Rotationsfehler.',
      'Reposition ohne Fixation bringt nur 5–9°. Keine AWMF-Leitlinie.'
    ],
    quellen: [
      { k: 'Q508', t: 'Pellatt 2019 Buddy Taping' }, { k: 'Q509', t: 'Retrouvey 2022 frühe Bewegung' }, { k: 'Q510', t: 'Boeckstyns 2021 Abkippung' },
      { k: 'Q511', t: 'Peyronson 2025 Spiralfrakturen' }, { k: 'Q512', t: 'Taha 2025 Umfrage Rotationsfehler' }
    ]
  },
  {
    id: 'K-FI09', karte: 'FI09', icd: ['S63.1', 'S63.6'], titel: 'PIP-Gelenk-Verletzung', kurzTitel: 'PIP-Verletzung',
    dokuDiagnose: 'PIP-Gelenk-Verletzung', bereich: 'Finger', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['pip verletzung', 'fingermittelgelenk', 'verstauchter finger', 'palmare platte', 'fingerluxation', 'buddy tape'],
    untertitel: 'Inhalte aus der Wissenskarte FI09 (Karte noch nicht vertieft), nach Vorgehen sortiert',
    abriss: [
      'Verletzung von Kapsel, Seitenbändern oder palmarer Platte am Fingermittelgelenk („verstauchter Finger“, Luxation beim Ballsport).',
      'Lange Schwellung und Steife sind häufig, eine Beugekontraktur droht.',
      'Buddy-Taping und früh aktive Bewegung; Streckung früh sichern, Ödem kontrollieren.'
    ],
    ziele: [
      { t: 'Volle Streckung sichern', doku: 'Erhalt der PIP-Extension', an: true },
      { t: 'Schwellung reduzieren', doku: 'Ödemreduktion', an: true },
      { t: 'Voller Faustschluss', doku: 'Wiederherstellung der Fingerflexion', an: false }
    ],
    strang: {
      deton: [
        { t: 'Ödem kontrollieren', info: 'Coban-Wickel', doku: 'Ödembehandlung mit Kompressionswickel', ev: 'e', an: true }
      ],
      mobi: [
        { t: 'Blocking-Übungen', info: 'isolierte Beugung PIP und DIP, aktive Streckung', doku: 'Blocking-Übungen und aktive Extension', ev: 'e', an: true }
      ],
      aktiv: [],
      berat: [
        { t: 'Buddy-Taping', info: 'früh aktive Bewegung', doku: 'Buddy-Taping', ev: 'e', an: true },
        { t: 'Schienen', info: 'nach dorsaler Luxation Streckblockschiene nach Vorgabe; Nachtschiene bei Streckdefizit', doku: 'Schienenversorgung nach Vorgabe', ev: 'e', an: false }
      ]
    },
    leerText: { aktiv: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Beugekontraktur droht: Streckung früh sichern.',
      'Karte noch nicht vertieft, keine Quellen.'
    ],
    warn: [],
    aerztlich: [],
    quellen: []
  },
  {
    id: 'K-FI10', karte: 'FI10', icd: ['M05', 'M06'], titel: 'Rheumatoide Arthritis der Hand', kurzTitel: 'RA Hand',
    dokuDiagnose: 'rheumatoider Arthritis der Hand', bereich: 'Finger', status: 'fachlich geprüft 27.11.2026', geprueft: true,
    stichworte: ['rheumatoide arthritis', 'rheuma hand', 'ra', 'polyarthritis', 'cp', 'sarah programm'],
    untertitel: 'Inhalte aus der Wissenskarte FI10 (geprüft 22.11.2026), nach Vorgehen sortiert',
    abriss: [
      'Entzündliche Polyarthritis, symmetrisch an Grund-, Mittel- und Handgelenken, 80 % Frauen, Morgensteifigkeit über 30 Minuten.',
      'Die medikamentöse Therapie läuft beim Rheumatologen.',
      'Physio: Handfunktion, Kraft, Gelenkschutz und Bewegung im Alltag; das SARAH-Programm verbessert die Handfunktion moderat.',
      'Gelenkschutz mit Verhaltenstraining senkt nach 4 Jahren die Deformitäten an MCP und Handgelenk.'
    ],
    ziele: [
      { t: 'Handfunktion im Alltag (MHQ)', doku: 'Verbesserung der Handfunktion im Alltag', an: true },
      { t: 'Kraft und Beweglichkeit der Hand', doku: 'Verbesserung von Kraft und Beweglichkeit der Hand', an: true },
      { t: 'Gelenkschutz umsetzen', doku: 'Umsetzung des Gelenkschutzes', an: true },
      { t: 'Heimprogramm dauerhaft', doku: 'selbstständiges Heimprogramm', an: false }
    ],
    strang: {
      deton: [],
      mobi: [
        { t: '7 Mobilitätsübungen', info: 'täglich zu Hause (SARAH)', doku: 'Mobilisation der Hand- und Fingergelenke', ev: 's', an: true }
      ],
      aktiv: [
        { t: '4 Kraftübungen', info: 'exzentrische Handgelenksextension, Faustschluss, Pinzettengriff, Fingeradduktion; Band, Ball, Knete in 8 Stufen nach Borg; 1–3 × 10 nur abgeleitet', doku: 'Kräftigung der Hand nach SARAH-Programm', ev: 's', an: true }
      ],
      berat: [
        { t: 'SARAH-Programm', info: 'stabil: 12 Wochen, 6 Termine, tägliches Heimprogramm', doku: 'Anleitung Heimprogramm nach SARAH', ev: 's', an: true },
        { t: 'Gelenkschutz mit Verhaltenstraining', info: 'Hilfsmittel, Energiesparen', doku: 'Gelenkschutzschulung', ev: 's', an: true },
        { t: 'Adhärenz', info: 'Planer, Tagebuch, gemeinsames Ziel, Nachtermin mit MHQ', doku: 'Strategien zur Therapietreue', ev: 's', an: false },
        { t: 'Im Schub', info: 'Rheumatologen informieren, Dosis senken, schmerzarm bewegen, keine Dauerschonung', doku: 'Belastungsanpassung im Schub', ev: 'e', an: false }
      ]
    },
    leerText: { deton: 'In der Karte nicht vorgesehen.' },
    vorsicht: [
      'Keine HWS-Manipulation; bedingt dagegen TENS und Chiropraktik (ACR 2022).',
      'Arbeitsschienen kosten Griffkraft, Ruheschienen ohne messbaren Effekt.'
    ],
    warn: ['HWS-Zeichen (Nacken- oder Hinterkopfschmerz, Kribbeln, Gangunsicherheit, Lhermitte, Schluckstörung) → ärztlich; akute Lähmung → 112; plötzlicher Sehnenausfall eines Fingers → zeitnah handchirurgisch; einzelnes heißes Gelenk mit Fieber → sofort.'],
    aerztlich: [
      'Medikamentöse Therapie beim Rheumatologen (frühe DMARDs, Treat-to-Target).',
      'AWMF 060-004 S3 2026 ist medikamentös ausgerichtet, nichtmedikamentöser Teil noch prüfen.'
    ],
    quellen: [
      { k: 'Q436', t: 'Lamb 2015 SARAH' }, { k: 'Q437', t: 'Cochrane 2018 Handübungen' }, { k: 'Q438', t: 'Hammond & Freeman 2004 Gelenkschutz' },
      { k: 'Q439', t: 'ACR 2022 (England 2023)' }, { k: 'Q440', t: 'Joaquim & Appenzeller 2014 HWS' }, { k: 'Q441', t: 'AWMF 060-004 S3 2026' }
    ]
  }
);


/* Kachelbild Werkzeuge (KI-erstellt, ChatGPT, 27.11.2026) */
window.WZ_BILD = window.WZ_BILD || {};
window.WZ_BILD.dk = "data:image/webp;base64,UklGRvYyAABXRUJQVlA4IOoyAABw5wCdASqQAZABPkkijkUioiESSh14KASEs7dwsxhbMHt9V70fK6vz9HX6j7ne2D+ZvQ78QD4G+YD+Yf4L9p/fU9C/939QD+Yf8brG/QA8tj9s/hN/b39m/bI1Y+YFzixp9SfzzQVy99pepf89/P/9f/Ce0z+z8E/mVqKe4OALAR9i/+j6WPyPm1/E/5f/s+4H+t3/Q+232y/Ee+//8L9rPgE/n/9+/7X+j947/F/br0r/U/sO/sX6dHsc/dD//+73+5hU7JS31ot94a4IZKW+tFvvDXA7fcy5dvvDXBDJS3z2ryhs1XEOi33hrgdvvrRb68ZEXqh3y0taBb3KS/kgmNuY+ZTq2kSGxYaysjb6Noz9w8itK0yfWhdRNw+fIbK+Z8KepmXgWcmZVsvNGxjpBZQ25/f94jwXyVEbgKr/ERZXSi7WZpx4xp1SEYL7/P26TCwiWe3DnW91kWr251D+DkqyJnHYKrbDpO6vNAskU8WujECiQqpLTpNEa3UwsYtkBFvP9XZBDCxe2hayH+n1Xzbr4vPc4hQrwyVGbCNaS0oluwYhh7EgEUWOdi+11ZitPOwgCesp7SKWtCOseYyFlhmMLtlJjqBbnI5bYLsDLacSNDdRf6bQiooTo/zsdmgqVKwHLiXknyJBd/Ja9FP0ifK+FLH4BgZtdVzQYab3UhwByX3AF/nt9i+3sA9oKMTluvCkSt2acifjvh2o+2dpSuqQv8PVDxNgafE6oq9X0pf+MtSnydbgk3BOK1bqQV/af5ABZ9bc1H7y08i9MMIYXWNhex5OCKBQ072hq8WOWP3cPzXhrECa/gV/zqaGzuHCZLcNiXJGSv0nwErCVVIoNzAtYOYNkPBAzqonIyZsXjUathOTpuOiEP5+2sin5FPm5n5QKzTwfw3UM+v/uMKblvliIJzevEw742JqgstIG9TwRxG5o/foVtWHAv3N5/ymBVkK47O7QfIrfriUcOXZf0ffxGMhHR/7noLDhvyA4BIdQHEwFANRsJpwaWNXkWPf7BPGva7jIPM4DjuPgbCD2pg0vMTgwfasu7XHGUh5hFjGgwQdCyb0bz2ayGK09Wo/6ywsB+Yx6oDcd0nVggsVTfn+EOeiOVUfwu2YapTLrs6dDEUnj/gn3dXz4WkbD1MbtGIlEjT925PW8aOxlfZ7VMMugibFAfrU0gHNFKNafC7J9mjXpJsdYtwhJUkhJ9GS2ubahrkszveYDCFuHERJp30yMaC0InvDEWhmRweBBmR/yWCLsjG1tT/tBhF16rq+1nH879c2ACGBnhQw80VkK5hje0x5IJ8Hlj4lZqasYrl7Q5h9f9tAumGaKmiXc52oxekiKMFLVF/Rv0Tl/lXEL/JezIh8YVahpDMm0eEO0i2y0bDoprJ6G1h3H3105ldPF23MOPartxS5R4wHU1yRH1ogZvD3ayt0f8QA1U0VsYrMGu5n0qdEC3mnSVQgyBHmI9iV1iQqhsJjkziLUgJYAXv1cuhgqtqtrR+BWBGcv64QjafGLLMS9gYmGbeTvj99OSxuwHT+VCLf0Ow8mUCbriScMWuPACpj9stpqC5P5R54MqYYmXyccBIsiIrb4c887tWKoXThJRZf+/vMr8GvXnLu3HLIWSxF4fV1G++PruiUKHDUVtP4KdteYnNp8q4n8SV5yl/iQzDW1tq40jwBTWyOiZL1vw3bbd1pP906SBz5wq7C+7g9Do+KYjaJoeZQcsQpuy4ekHxIBD02n3IWFIIHh1+S/bYnG82kM++zgSHmeinhtVkvzDDymWFAfeKb0ReoRnvIkK2Vwkwjr0+kBA/HDzRywE4yDkC5HB+uzm+1GXZ5WSU8eyVM8RkkRXakeV9Ic88Hv8EBhvyEn6s0T5UPakObmNZdYnX3IAfe058XRbuRwyfJZzOjmrDWdeme8ny76jhJPz3p5SMEUGZAfGva9tdB/1C1hOAcqbk4BkzwDbgtmrD6S7i1Zgd+l4YhhfBlLnsPICAzOAWBh5Duw/EYm2LUZJxIJlUl1qPOVF7R81umIMGcQhqyTa8nYTD8wZ9giRqwDftxSaxBjePHOOW3cAh6xBQkraauj1LYZftEpBt6zGJiiL0OdhdmxWpXrCtlJvU+rJg+DrFCVtVaxVdclwLhkzaLxJNQEqjxraWAf25j+3LmrHsKdRIe6ybRFgRdvvC1mNK+jsmcNcc5P/M4sP1FYsq4iAPcWrarzWbpLOJ7aygeBpm0QNQqijUl127SivFLACGSJL7GJyp9gH/W3/yasenepjBxsjWS0DtiidMLDagRj34G5m51sEG5keaa/Eb/B41879KGRyUAIzpPfkxm84+lV77mjf/WUF44WLuLOC3wVq3LqoZ/dudW4X2+riEOgmtGJXWbe3CDSlYZBLznQZJ9pA7wN3pkzlGZi/I2vKxR5Kn9OE8OA1zgSyK6uq9QVWtaiKWHVw1vqCrPnITOc5znOc6BZw+0ElhDGQAA/v5dkmALWVIADc4ADYYAAAAAAAFlWLx8MJp96//BYTfk/XnouPd68EEeUFitnuaevS9Xk5nM87wAAAADaMa/Mc45vD4sJZtnYojIU0YdiZus3+1vGyQ78k/m6seRuaeBgQ60I9YGAgxe9TMly4YgjYGDq+uzTbdWGAGwiwpuLcoG3wbQ4Douqa4UGWvy1wsIEdhcWzXblpCRR+fyly9HCO//m9MS7l87KqJ3BZi1KyJf5mGUGBrzY4f8A14oORp/UMTsJlEgNYoTeTVKADA7VgYKVlLMfGGXUK4Imq70ch0Ta/cvNPKIlT+3OAL7fmnCp8OVj2L+woRGm3UKmkImxYUrgJteRnh0pzv1r/ZgBEMectk6pPX+yFs1Zpzr2QmT0d0Th5tFzHKFOgE/TNLtkALEeZ+JH2i4Jl4/uGlP8z05SASHn4fgBunMSNLx7kErQr1/K8wAWTxgDMDGGlfT+2fCX033+f5MLeXFZ+UvckBNPC7Xh+LwZs+16yz1Ug/geAxFfYgFGJ2aIOUPRh06VCU36m8IAQ0H7ntQnBd/t+7t/CZNyqvp0DzUkfTk3cWEl2h9S/ZErn0aXIc6hvlqzHKcGlVljaoGBa5zXA9430407scGNZrEJ189qIvhxuRKtzFpWujIWiG+P8DuSnAVpWPVaOWupAgixxTxh+S9fVV3dJy8lqq09hWIKlU2mu/x21yq3C+ZbKFHRehHss82OdpCfRW026Wlr5uhOJoUH1vmplSaMW89zM478OQiEctNFzhR3KEqDSiddApTJThzOzYEhOyVuOMe0grlYhB4OVBp7yG8va7QDCTvleEXJau/uNROHkw66cqJ0Znn2pnsy6CVvxwvxL17uKij0BRUeuD/4Ywfhhxvvq0XLtlZmH+xzedkbHdzanBKJNTr3UtjOSGUG/HxV+aUQ0wLWqCzOvwUpBzEg7/qrCaYB+2SxK+f39dFN6XlMo29fH0B9fbke0G4jnVQEXWNE4QhEzhrBcL4ILR8mk6j2I8AwlmF0cxodsQLeaMjQaupyiELLmxkK8F82gbFUQsnv+0nKb7cajmIXcyZFUltf3VR6Lbvt9mAsql6iYgb8NlK4/IBVKyfLoH3WaRomis8BpfTl3Q55zOYI1MvUTLvWoFAZ+x9ntVllhlJXd6IYA49/vTwvYsHSbhzqFKwEISEkMxV9LKqeLQks0t2A9T1Yoq63L3mmbt2TOnIMKFsHVN/D9Nm6RSH+Z4mm/Kt911MfZYMQGgKqIJn2zLHv+K2D/hxMSIOGntOizCWp38lGwI8EE9S4HzIUx99hOa03/0pn6tepozEE8qRNSywy3irf5Dsu7huJHg7ty1z8ADLFF9XLwXUMUIwHpuHYnIvpdUUl2WC7qktRYVoISUwNJtl/cuQhMksos0kiJlWlOM7nnRl62x5ufA571kFlMw1DzedIT+HAyKbU39HHd7YNPMPWUpVeScHWdhy+wvCiTcFa4MGEAzM7OjUgz6YmItQcknEN1BAGfHZviZquhtz9Xbx7Ta+ZREfYyb4LFN264/dBtU9MV3eJD0xMdX59dPL9sgM4Cuw+luwjVyimIlraUqOpQ/c+JIQtnBUsxZFvn+SjslqxgrJ1lQz/BenbCvSNrYU9miBYoc72JqTquftyiKk6xUIVlz3Xd3hz7wHNaNTsirXvLqKqoR26eLLUC+a4hXGjdxtr2NaSjBkJcijfXbTMtdYlrGLu50C8FkAqW2Ph4MHq57nB34C4xkqmIAORvyjqtwmYRQ+4bHTYgy1lpfIC8ehzl3qzdWN9agjJkkzlWUzIoRmtiz2DnPzENAYJ6LkJ24c/cArzAYyPvw1zJRuhIV+Vomrg/2vCEOCr0iU7eZtKVdmi/pKftR9+VquczSlhqQ0HOd9quE7dh2D3HqEfN64+pf4rgw7OaoT92mEpWqFWmG0/zWEllc5TuvrNGzGWBM77C2z3C1qwZ48MPJB8WynSSRW3Jy8CddO1Lhmf2r3fxBbh2ZWBPzHS+Q+gpz4BsyuLZrzdNFpo9zlWWY+g49jCmqgLIErpzumetaHsTyn6Wcnf0VL2G9U4aLtZhSk7+FJgBE5PRgI/ZAfQUC60OjJCcyN4Y1AuXtUBJVqpZFgOpIfpvUA7g0vi7I7/H2HUOx8im+QP/w9iBSEhfICTgp/8I7OpKw36MJ5fESktwEUOfLhlx8fZZ7UBJDsFc3F3fycqP8kx2Wdjf/erk3ejwwrSx4483U/Z83gmC4IGA8kFKg873bUJAfWkIHOlRwR+IuS1HBo/QmHtShLUOTvtN768xnH2Gfa90TpdmTf0vhc6pOM+1KIevE3OVyXTIlkPsWymS+qwL+lO7M8X6wGNAezyfbjkE0tw369/MXi7zeV/mNrCNOwKnYfqQmSjZ++yYqWP8Itw95qjf8u7KhKngojLIbb5NZWkKcgqXe9lDa0XoUQrjIySbFRFAnzyxylvOxF34l2ZPPf8E8WgvvFmj9OMmnAt6zzdDru5WX6ZsXyMedlrZsYWpYa8HNziLytoGKe4quDN6xd+MHbvBxMcjHG+xc6U2VT0SAmTVGd7Ces2GK2TKrNza5kJA+EJuBaO9MgqvzsVuhOdS1Et5/nO7duHYM1xk8jrn1Ny6jV2ubSemaFLfYBH8Hb1jpqUe/HkzB82Z3dHqgLzkTTHZgsBDzjgXjYqT3Wycn+ybwBqAe+1UoupYBIPo2Qf1QZHJB22e2Gh2dLW+Ab5jLzsXrc7uRntci3BfXAkK92uAC+DzeeL7ov9DzIMEBgIE0tPgvH7n13CtgH3hknY8NvOyU5SdALnI3wmFwn+I8L2HVMjzkeNv53dkM4qQ75rDNiNiJekBVgiE3CWO2G2G90636kVUGqOxQX/OqBgRz/u+ZfunCquO7W7WFq0nZ67Ne6Q1goNVuUCHfhAss5aLJX+ABNtOhHVu3kucZuPDMKe206gTljB7OLFD/lGgWGfKnYnm102X8abhqr5p+7OCr32sm6kPph0eE6NwA1xTyHR85y/bn82xnx1460FXqNJJAfVOMFdkfLkfM5mVfW8P8ML6nGTun2ttOODgOZFqUVUm5zXgfy5KG4uzxjRt4/W+/neNweXxZ2h6Y3yQ31M2Ss8DS13lECjnenR18ojGG29e/AIIEgN50uGFrsmU6nkiAnPAuTg9lto6800aSbJCuFAsusmFRGaQMKSjA5y9eg+p1T80/SYo/QBJ1nwXd1qXtrhTaIF895pB1sfGJwkKlDp13MsHe23YiHeAPBVcvfsA91wTWelg6oAy+3mwaoo13qLvkUtd5Y/r303SeEv+H/9I3SbbAhFmtJzQZvkN+iRF0ocvEqdWabpVakk6VviG7qefrZ5o/9qJHZGLf7uuygALiNfJ7Buq5NsSNpHpNYPwgVUVDxtd+wFNXk8zWbrsubhRMkFZp7jUU3dxXbgGdbvfQJdnhIGAxpFIO6i2DhBenqb96yOT6i8i8X42PWBkDIO92RRA77wQZGG3t4fNy+VgOkO5raRHO40yC9wFKZ+Lhto0FTYuTvKh21T0ZGandjt4OHo5j3pUvE+bggI5ufeZDlST04qR3ip+alYcnLecQMNFCPKcYrWTMqU6gQQmgtvm1HPe2391m4tnMShP2zH8RqB3kyinlyAh/Sb/ftoPnPTNUnSro6kB+C3uPcpxFj2t/kRj1SgQCTYcKRbWf3a68o9MWJ2TFWkvrPw9ZLp/o1wKlynt6jQrPwZC3R8pENriBtzU2Jf+IGOpsLDVrtESr8yJfrU0CNmPcs0DYngCqgOq1EdspnK6D2Tey6Gy57F0ntfO2Tbm8SJPd1KQ5fdgFr4aToD6w37vXuNVZ7a+D5SLG/Wh5oOGUP4f8LAQrmMqHm2uewP/75X5Mo3600GJ19W0bl6K9HRex13z+D7ErUmJBtGhrKWcRQ8kFhduGE50vANVa/Ttz8Y0spTwP1LiOiYBhhn7bczw6GIGQNTPbEO0XrDff0PReamBkOZCtqOVAwiVQ0Mhm6V4Kj780rKj2OdNLy0LDrp8gf3+HPgCi2qbeg8A3vbsIva4HkBQUQpaV27cCHFy3Pa9t/0bEYP5+u3dAMILp0giQNdofxNjYXR5syOpo5EZyTwjy6cYNj3I2MHydYqMJOVp205jtnwuSMB3ddiJvDy3xSf82fOcXH9RuUpOfrMKoZFfpMEgraJ9auLDuCGps0LAUIRKtZCq/u7DHgMaTrs+UFhOiKf93tHqXbEMLWIDC34W6Bt0/lA69FyQBiv+a1iklZe6W4/XY3vpDLQYla97qln0ATWeLTcqKQAmV3WTibStbiOe6X0TnXIv/IrPRxuZS2WPEsUF89pY5Hawm27lznT+yIrlKUP+xBeEY2antH6bgZVvzz0NyuTx2NsxqOm6S4F9ofoys/ih91+0BhS1SkLP+UYhp8Zcs15DBmBK15RhES/G+YrJRogaTulKJHEkfaZ8UqukQ74hD9PixzPxgDdE7xUvqE0/OV8C44Ea0a60I7AEcgDt1PPly/wFh5/1rPSDFiBRFNGwqQhEcp3qXhDZ6CcK+AukOkOv7rkXYNLvFz2X6TYtrQ9hi8BaO9v9HTN9fQemxFklljVDnfQMFd76cBdLQSNBBhnIkdM+WsQnhtBeDEwxAzfzLgarQuob5Ic/s50Ofe/jV4p+0Ll/fmGUVvqf5IsN4VF91EhsjJb8xpvWFUNzLhNB2ZtC2JV8pBLg1u995Z/mAF+t0ngUXmp80PGC9s9z6yX9TmD28hbdRhNc6Z+DGR9/SsAp5D6VtTB2FWwn46THTEe0WLZp3NwFPm3QaioL9GguGopXXJcw2bZIZcEGxdaFf2kQZKMVLE3QUI00p0XiYxHRuMk0LDVFdNAEfV/fPaaCydNxGK+ZNVTJ9EaPHY6jrM1TUtcsMJWxc2bxyN/CQLlbGV7ZEsZjj9ITtKtuOpSAuU+La1UemjHbWybkqCpJt6gMBq0CFFvzRdu2moSSXdVgr4wJX9V6trDAefxQv2G0HzBM4yJHF7ae3LexWT12FiG8zHLxm5fOn7NtxLNkGUJCOQp6jwNLoat97+GsGhLBcCba2+w3zqUCjWb89iKZJM1bTs0+SkMbFh/lpgU/7UbHVaLBjoupzNgnMrHAaKpd0SoOBriRjk4PBZY2csNaAa4EYWq0xhAB7m/Y1EsZfZU4IxoTDQCZ2b+6mKIh04/7QnyUryo99luBD3ZBOtAE8gdJUIOXOqUndrpID/wZdHS/aYJFMmdKSjUhDPYh/zNMJZCgOJm7gTY6KwcO3fthrljVQvZMLrLZU0ulgGGjvqJq9Yl2cVA4j+K6hT53DvOeWvtsRZ0i4VfdXssXxTvA4mFsVRpq9t5+7pZ2W6oxm22Cql2Llo8YfXZIU80uIucp7ZlBru2EtiQiQRzh+4z1VZuT+QjEEwaakpY7IRIafMTCKof6yG250ec9WJiGj+up3KFNFP0Ybbi7NayLO/Bdkm+NgD6B2o25ZiFx+leNoMANoD92UaqsIJnfcAmp45z7USFZ5WZGk8Ee2VYUkMjNbuC5znG6Q7s28CYEyi4l+E+vU77csBLSRHPRBYcq4bB90dn7XILunHeJSe+vnTjaZaphQE7v3b1lGTIdsjr1Nxgq1UMavI9Zy2DBz3R/9Hcr6OqTYCpItEHLGLyhlAIdDJ0CYIaTy5HHVVd7xl8g7Jl2xEGdNyHq2KzWqTyeJXUfohkqS0Wzr8Za+hzAIAeG/sNUM7iUeq1Fy+F8T8HvKTfk1ZPrw5RWOHJJ1aulIki09ubXZk27H5BngSs7vd4cmtezbc3UCORmBc2XRvJH98vBsEwt6VQkJBSQybz1LIwtFcHf5FfTX4B0rwRDX3bZjYr9i3Cw59TI1/Kn1HXgyyor3E7TJTafOeMLlV9obxVrQHjQnrlxvmeHpXZPudzd3c4MsA5V+cxDGQd7fhMLQHijMfVLPtOiUFF5ORRc2kesWyonoR0dfQE2bJZ8puo66plsCynFh23Lhkrzn3xMLagzS1bkL7PomUuXXiNllRsPihwntB42NFcfXjIndun68/dFmTj1FKYXHKbItUZYmTHzRbRpGb0KJ2i+CjEv+TvOoTZurVkprFW5v9w7skRW3TVyOvx/24JPwlpk8aCIK3pXL6fKhnbP6Rn/pIMgnNIplLMZtwbLm9gDGuxPkN+SfkY82QUL+LXK3QxhjxDND+Kd5qPQuWMY8cas5beMAkz+cboymrTks/W59F7ERN29RkuY4PBmyXoVzHWTh1C3Z8Jepf5y1X7Nj3H2/8wnBfnesMZBX5D0Lpb9ObDmDz9d5/5woF3Iq48O9J6QsqtwAKTFFL6Yz+kkukSfrSSVDGDY8pG1sAmIqWZHeHz+CPkF9KTfIGRZHa3323eYpSfwzSpXD3Tk4TPzxmT1Y08EZwY6RVelZ1Tc4NXJiZkT3etdgKoXNheveCljDqERfZW1jYjIoRzQj6Yuh01nOJ+v+s0HV1sYWm0gdHpt+QtrGPIRoXiLKGZ3zQNv5z6tNhVye9kP+WixD8L082Qutst9V5cLAl2172XkyNAZqXQ07Fr06xIBfO9QDFst+G42m608AK/JqZ5xajtVfH9pzUn2bMNMY8cD3eQRsVlH8lAEEp7yl5P5tO9ASbSrlgNN3tE5da9gOeQdDx3YASe7hWThQesFqAM6h4w2nbOJJbCD6DC1q/DDdXqIVVtJIOdmtcmxGmBaG8SbluEF9qXD5LgLNcU5CyPO3dXGfK7e8K47QImVEbhZaWz7H6eoSiIl3uZZpgn8O20nEklS8fE5rmgDs8n7mk7PnM195ECJHYO0hKZJRDUcXkBwgh3OuA8IOpsmn+yzo6NPQB3qz1aS/wf00TiT35z+O6ll13YSAhTBI4ccF7tTw98q2D9RGm6WpqHgDNfF2UkQdDhVLViQMbkU1eR1Dqcbi8o5N1KULZkwVOslmgkAdnVyuMS0lFS59OuQSi+U4MtDFfWULeTsV8uhQtbAjiAdFP7J18ogm38jANp9m1fdMw8rjbL6TV1vv+9Sa7QNCDBxNro+zE+vZO1qBDfZJ9J0QhUDI827bDQUDu3mJuV80RzINMXxEgGPZsuypp9GEk7s03+85mXEIBIZOaSnAMlyzzszlypohSMmmly0XuIkOem2yBceSa3Xg/HM0htU5cpVsB/32YwL3v+Ov8PBjgExczQQUqs79F9AI3SgRL7Dlw/DV34pUWVn78S8vXSM3NDYv7JJgzy8s2UsRQs9GdAUPEuJGxe0BABf1B1CGhUnlKPMpphZlCd2XNzhV4NpFqVGUAM3toQM+RyjediVzOgENhiLaHC9fk1cOnGoBmf/lrREFBThFf1ujFprDmA2H8WDGH7jFAJgnEwspKiLoGvakiVdVbZRva0x/NzkYkJpqsynPoeIPeDY6z1xrKeRHtt70obffqXNDJhEukqrVloaUzQvAdKLhQPcf+PtN8hVneGpC3pK7w5WK9V4+kA8R0vpr+7F4lqgdjj1HMO/oqJSvkkwMe/dHGnAfXt6AYc/U5LfYT8lb983qUgVT4ABHRQeDdFIDnx4c8qh34O8lZjiDiZLyPrkvmi9BeElE+9X+c+bjcRcC7+s+2kqulvI68VIKsWVqu4jnOauirLutH3rP9eP5rZsE9MntEyzkObV3n/WFRCU9CtTeHfwGAKudWpWocT4jK4Rw/OjPvFhCkLPmGSV96pT3S0Z+W89WAVNFQvvtODd/bZxnZk9J35NbqpCvnVk9qW/vS/nUyNF6upMTPJAZlqvMOL5BaM6gw/4YYFOr/RHmHinK74ltGs1s7YfAiwRWVILsulSvuG1Ff92Dnc6YPu6ppr13h6Nx1QtLHDcH0nlwvVHWcw71UVX3j5FmxZ7D9Bkja92bnS/O1E+oeJZ23PVYj7qBElLBfyz1z52THcmFbX2CQC6oS/P8eSl2B8Dif1qN6OXBzxG9w6d7K//I6B/qNtcozgQegaHCUyUN+VWZltCzf5Mdb3hpfwS1Up4mztEwNDP1Ib8DJW6ZnY3IM1OB5XmZCcCjQ/37pX1xgqdYOBSCsdLKptHEIC0apQUGl+pHPfGfrqbOxxRVo6t37l9iFVMJuouEF23Toxvst0Ydqw1ns097yfxZ4hT8kH3Naj6h8JvAVyCHZxqsEGRQ3Sxhl1B4/VAhDay6foN0CaDD1XEHq3Ck2A89p+FqPV0EAAmqwhgDO35WU+T3FjPETX8ZkiMQAag0HFFnLdvXmDkt9NzdYc4QnE/Anp8EigKBy4rUEJlz1c5FcFhpz55/puePRtHdLn9Vhwoe82xtA0z1kkqIoTQRo08WoI3q6fdBNiHaIduhB1xaLEMEPMHypICV47rANBxO2MZUM/aG24SdT/iJAdf6d/NqXoftCb/qWeJlA1YfgZ/Z+o7GrZSr0gvT1XaYWGYbijBuQrhciGNShRea+5OdWPBzs1+uANQ26CeDtsOoVDSZsge6NtXlFxtuYDThzFYsL/FPkOvO1UzCcE5x0EIFrDTlwLX2ogMddUscuKoDOEW5KatHVc6utCW7rtBm1brR+nLVHUrB7+gp9NPF7yiHXHv4YgoRJVObeURBM1fIcOi4us2QwaEwsUXLR/RWnV5dhI7mHtaVfXmmvrvO4ehD+cbAIieTuKJtwTj9NVO4Q64WV68kZPgyH1AzG0vA7LGCwnEmYauBQd71O25Rt0f4FyQ9tn7Tb4XSXu/i92PYuGjk6r30nWbPs5RZPRmN3qgkFYyxMT8auHn9LWDjEFpy/BC65WEPVz+hTRBw0FMIqchLGg5iZof8Y0auUEli/4iRBUusKI7jZYn4igEBudQK0W821r5bYqnfNiuUGX+zEeVUvbl3Az4Ke9Uu7EhwLXVdl5q8ylwf97VJ1H2Ncul5B6em/S2dWuHiVh5x7OD4v0SpwNMj7beCBmnkjMZf/mQIw6JWNxURWrYhD38IjWnQvspQG9MqQHv0gO+cVUJMabPihFvoLiHxRupDe92DHiC1Tnhhvs86I9yh+j1WbgruemoT64+TMbYbMk5FcgPjvXXtQguxggmqgWpgu3cHifrtR53gCDgAeIPf2W6BLVZncgafv5i+b8hxf7xdrrpicKiw9/eULZjzS4arSPL+DSvl/W0HpLp7Yty6Qc+T92jlWgl/uA9cSQT6PFwE3JsTMGFporbjcqiREtIgxNWqizQZdoXU8b3ZQzoUv35J0osLoRbw/7IUjtBGycepQTKQ9XljvOnv/wPF11KHdAi5p7et0XA60DJ8Q4OEhY17sqBjW98e94YXp8hpH7vJOJY/zVbgaX9aNDhFKOOwsSIjPdHGzwfDKhqENcvVg5RebTd9lK9DobYl/JSFFg6ZCQqb8g5liKOYtKChVz7QksFpFs6dRjH7mTNDe0UVKZK00aELbjZ8aJTZ5Gr22xy/hHpAd/GLPhFkMg183rlGuwS9KGsji6t4SLUY5e3hE/Xcqhn4rJuBxmzLM3wemaZjRZFFxqX8ybC4uqInV+MRO1T4PfRKbL+Tad2B72GjOr3/S/T25y/dBYT2Ai/0nMCDL/LXW7dwPQNFybK15g8sFDB4etNxm9OlbYp/2zD9vTZkJLQIcA2gb8Lw9g7vEbdXM8OCle0DDBjEMCU8P2+srJAYlbfiRXwtgwSj11J6rvTOVN4+Dc+S7olNCnKVwgredRYbs4N+HO3X/5fikTtLNT/NTFY+WwH1xhVciATEJQMX6BQ5OblsBQSujBO6IkQe9g9+69xMRtHJMXEWpAaktSfCLeN7+wFB4XPLZwaEUkv60jGezW/WTliQSMxf35gHBqoTmPlTofZZkuMhPuUT6Oz9Eyd1ZbrWE9sB816kYxK61174Z1blQnB9QFWZDAE5GUpKaYCed7uLbfMZy8m61SOBRW3JvTd9ZOaaE/v5IkQf+z/EosdHDipnwiQNt5rI0KQ34K1ajL5w/G4h21evavZFbGevfOTdXEAFe8CTh9E9/vGBpbsjT22MELK7AgT/Dje0Y2aPQuEFVHSgyDevJgXeP7tq5yEPRptieeZoJeldiG4bIFOiqb/Pm0knI5rP11x2voLFcPxjTY6LL7mUfyVTLuDUUR/C2YEB2TClEKgfRHF38U2FTvnncUFC0jffypeWZU9FBe/Kqkns1zKT3L8sKhgZr6o/XOSmQAIzYzIbaiypBXdYGnZbUyObodNcp+a3AuvJYzjTWHCBEYGrR9jY28EStazgipMYeOAkozH9bAAYXX7Rs84kT2eRehlA52zsZYkN8OA/Rq6ODRGyNSvhrpzGa/frW88SnJzWa/e5cpW/tvS1E1EWjpeF3OKHgL/53Gjk3hqJpjEhMBRunl5MaD2wRlnZXvw2XSIeUkQJsWkckpAPpAJwIGWtGx8fN38Me4h6qxITYMS6x1RvtLKG+PxIp+q/FVQaYM1grhb2ktSIHpLZrxbtfutk692MwRQ8WQnCfb4VSjOU6JSVNhCfkvMIafTsvh36RD3UqJ8c9zSKaQV/TmkJsYQF5jfq5K7A37KmOnAKXAxi22aHn24gGq8vu3cs5n+rIfppXOcOfFnL1cp0EqdSYgdMRpCh1pgUa4LbPSkDLZOgWvZuLqhp7GwBjIyOhXlEkwP+XHkCErMGAuW5QNwDpLuQhGSaFN0hzPf1YwzzWve5JhRfjBE8WKp/dKQyFTtn/2E/ocmICMsbOw8G7dkZHq4ludMz1A2arKi8t9tPTW6v2spW2BDV4kNOy5Af9pvxhJlX22MHXFHoxN8Hjfgl184dgAchLrvDJYeI56U3HOS0U6KR0LfPNJyFn3VDzqbOTRFaSp8vUnkSxZ/uu5hk4C1OdnmKbxxTqXMmChpBJlxmKKX3cXFledyDtW6LqPj0f8Yf2asDP8mMFiJi3rWaT6j0YuGM+ogcRun2f2N/bx7vJhEczLKKiZXkt2NPpXXtcYNt9H7QH0QqZYqrFwyfdAYFiFW5rYJN+jxY7X2QstulgSQF3Nl92rDCZeLSBqNfBVNzi/1jTyeTWIE0c2F0FxIZSsExmAKEI7ML+naf5Waf+3rWwA+JDgeiZZ6hX5VCuafvzR7/3ogwmyvvSH4CdH3P0MSKZE9P6x38G/PKK+Jox+vVkUDYQKoWwPlMjGK/MG3OT7XO4mO++tLcjyNvfstnVvpZRZ1nkKnmc/fsOZL2wq5QYc6StSSyJXJY5JG5rFOUQeMw6anE+S5JWYmBlvPUrKboo0zBl6WPGozhaDHtA7OD7hZEhmVKi8JFJOFJieNC+aKlLbrfw5gTZPSEb5cHJEeeNZhTXnm0a/S6Bg1l23aVNV/a038BvSo1b8FH7+L9IgJM6ruJMuMwxpAdSoAmz2BHmkHSunUc3f8sS0KU51kEphVEiT4mfgQZ2ZC4FbfucWoaJkUgmn8PaToeBkfPQn+ZeA/S0UtB6K1EvQ2+ck4HqFLeoOPdaKYhehjKAMu/8BBHMwwQasK+mg7ES1k27VfxEFtGUr0oY4Opehu6mcToWttMP1Gvg7+XJlRg7w6KfwbS+kqoGF8affCqa2R4gvwJbOyyUkubJAf7IgxUxijVlOXHyqWDu9jc0qaaX1SONGttwr4f1ZI0V0xmuR1HXdDFcf7ye/QJ1jRwLqIXCkRj8VGQhj0Ef9WQ0SImQe1MhQx5injFbvUymPACqZp1i1tRlpVhnd3QC0+OeJ8cWnc9tPIUNs5bUZbjxQYGag+IR7hQDjeauYWhOjsQi9iSK6BIupBk3KMW+bErYX8abX1Xozq7j2GiZ9Ku5LaP384IrI/XpwDIX49dzAtH5mv0HC8gdaxUjLN+W6i2tyXsZENFvEDo8zlMXGptMi5EF1wwqe0BRIn+ELFealMWJep6b1pP/3of5G9FeH3AvDxE6G8nG0GSweS0UVlm1dMUqYs+0Thp/hWSbNCbkbcc/0wdvtYBHgLINfz+S3zyDXk75+A6++d4CGt69sKagDx/fX/q+iBT1n6HG8IJ+v5XsRy4a1Wj1TDuYGO9sqXd2EMUAktiqI/qhFDLctoeUS9frlY44nC89TmEMHCXSd/FomIxcXjQpU2UOq8vthPYaNdceSAewInZgN9zM+SYcsJ24hcKCAt9BK5/xRJkLm4ZBtN/xy3Mrghi/Bfs1Dro+mLWUlSvyWVW+ouRFm1zrvKvXPYvcCfbA0sfK5LnhSxzqRCkHHfpGCaaN4loOcA72Wnkz5HySEnnuqiJjQSRB5AmYEnL6jvchkwUm2VqS0ZtivOprbpK5diDvBjEcf9Nu6VzkFwoe5htObYfIy9WB0xARhreIfZ//bMqIhQNnqOWmgQ3c9cycTtIeKFaWImZXEll8YMmOqGwY5iQgYyAH2eew2c2oRjSFupMle2oRIVdQRz5ULuWXtIMG+qIj46BJJnJvoZF5tJMsHDFJx4Hu1bKf+ReO8wQWw6I3ACLUuR30ba1jvJqNudNwkeDHq9nbs4QUW9jefM64qkhcOmIo9dVdbgWwsRpHjHPUMsbrNliH5J9S4PwW+T5SlNduvA/4bzdM2zHKRM46GgN14CccAZKiVkfqkVh256Pw+9Ge7jRZwH1qL/1F78HzwC7xueZHIulSMdwuIkJ2iumqu5sVuHwedXMke1GIXoMBYLa0KqnjrZa4t0zLHVMwVclvJN6B7IdYjGtG5KhCg1uaQR4Hw8mhqE+rCNSTfgHpyx/3DKjM6c7wPr7k/+gfHPn6Kz+Cv994ZrlHON6SA8TCchCQ+Z7tRP2wJEEySAHibV3q+7CtBBg2/PcKn/hyCZvmQkpnzMu8yQjLKQrlwe5uHR5Js68FaKwfXfsnsQwfLWCjR3SnhALi7jb+edWCMz6TEr1LoD0Dym/rg3MrhmK6LaxyDuB5mjqODR9RHjrZWDvDyarnC3YYlHHbI7xcjFEp9+FswqyrzJ//wY98eglNZPhYaR5lniurnoaYw72B1TtAuX1sCrff+Fdd5ky+bjthcnid1ZbjQM141wq1QAZYi35OrITW8e6XlRm7ay+vcJRJEWhejn+w/6jPw5MfqAPh/LzEZSlZ56CSTaymcOQ7iGwzwxlF/xYgpMIlWSmMFK9lepnzRwcpzXdyeTsw0cbcAUR9ZFNOBIEJkmwHTmqP7+j1WAMs4bvcMPs+A5bxQhK3PSw5AIygRTjFclbejXqCMreGToH6u6F7Y9GZQbiLPObuK2YLtP51gf/gS7gOuoAYadWB5FzYytMeQYMNNgqdFGAAB8jFAi+6vbjbpdh/UeAz1EYSZXYpVhYQ+wv5Q/twLVe+ps/fR4QIOQijieKgt7SNtbp3oP1dIFeTIQfnux5A6vI2c1XRsBhbPSgX1veXUVMkpLRHkHQFNbNCxuDrvQ0BzlvJQ2aR5YKBGJklYQrNnhPLht/OfM9EyVQ6XDA1xqB6kF8IcTgp0FsxUPztVxKtNvyNSq4ZbVocBnT5sIrQ83QH2ZYiGKhvLnmq78JOV8Vj/jF7D7sFJpCt5DpeRw8dZYHi7yRytVp1tzQl7/AvyFO0hsSgC76z83paHu4qoA6ZLQr2UdX2tha38J5t0huKDOvo9LLs59SRPWr3ziDZImlHOJZxvnPWolqdOSmpRPrlHh9r3RcVvR+FD5eu8otjRp1IJ7slSbZl9huvQXFws7lb4W0miVinjKbyfct3P0QzxpUA2UJQSsEwHXnGl+LcOhkwLDPZs48jSgA/TkUqtct1adwLbp9bbolCySrdKMAJM4WlWZ/HSO8Xcw34cnnyLHFEubZaH//TYY8SgxYIoL3iwvLRH1tcyjCrC15/IsGPY8rUHjSjtkFV3FviMOPNqku5POFMv2NBwMBpg114c2s9L7TnaT69fGdxPxT0GYr0tl0DVqw/w+jYCcoHg2eagZg27xCTosKyO50uVLFzdtz7nkvUNouvLMsxvk+wjxjO8kdiLeh/loBhaNOxBWkjNwbwWppG6p3fKjWrwQZVsOzUfSzA36grgCaY1H/P+RQ30G6/eJsMtKAsRwayrn7G79IqCdCF8Vn+BO3rLPYjSFjvnau6NuCRiX+4ORrWJR0e9yPo3QRiTVTXl6FvdII86/04Y7fidoc2hMakElP6dw1DlkTXFxpIuVvcxFhO9nTX+PJ9gx7SPxYUuv3+jbAmBbroFKubgLmm5aw0dm8hvnYsTUljB2i7fSLUG04Ts3FTPUoaooMmVkdsn+wU8BhaacYRkbKygcRIPhr9qv1WIhrmtr/1eduCcnbjIch36ooCEmo/qBEGNkoW+x6MlAtMblOwnW+p2thhhFTyumvt/UDIS/sFXYyexjDZhpTLHr5XY4mq5RxM5IY+8GzRSWGb0/bcpfs5nsnSEADgNr7JfalTwghPrginF94gMLafbnTgNhNUxcAAAADe3ROxpBEG21F5w4NpbrjbQgzJAQ5Y0Anm+2U1Y7eJbaFZyFcDoxufIPwpi8cBZBC8Ovd2JH3+wn3plf+EzKcO9lGoe3u3NxCOuAMNiv8L5s8rYg4dWWAr3OMxd+FraZoKPDG9cpWORz4yNIK+lfLbyKbXcdRxIfcAV9+/aQYplv6pHaYjPOuzubW19WfwWylGruk2T3/2ispBgnKn6Zg+YFFmaBEhyE56jD6JQMUZ2qGcpRXUIPRGhzeD2zOT832JeGBWybQp1nCI8dfGsp2o5ozbOuOE/CnA9+YKS44MfYtTBVYTfo9HJ9InLtssCMUjmqsGa6fpNohccrTmnosPrYgwm+bTyS8i0pMh1Ky6QcqmoUCKgaFf/0XH5ksUthDJ3Uoi6kj9WR8ysM9WanCzWU+3zzghqgUxWmphGjEkF8RODwqHxo84H8AKiWLw/kNjZDwBUG6JqljDQAABexLW38r9QCNkOsrVPOrDz/1qtJQWBszJLjHUkY92P9qvNAMqqBDoncpnwAnwAAAAAAAAAAAAAAAAAAAAAAAAAA==";
