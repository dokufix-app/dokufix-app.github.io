// Doku-Fix: Hausaufgaben (Heimübungsprogramm mit Bildern der Ausgangs- und Endstellung).
// Reines DOM-Modul. Die App ruft HA.karte (Verlauf, Kurz-Doku) und HA.panel (Mehr) auf.
// Programme liegen nur in der Einheit des Patienten (va.haProg) bzw. ohne Patient im Speicher der Seite.
(function () {
  'use strict';
  // [id, Name, Zusatz, Regionen, Ausgangsstellung, Hilfsmittel, Text fürs Blatt]
  const K = [
    ['bruecke', 'Brücke', 'Rückenlage', 'hue ruecken', 'liegen', 'ohne', 'Rückenlage, Knie angestellt. Becken langsam anheben, bis Oberschenkel und Rumpf eine Linie bilden, kurz halten und langsam absenken.'],
    ['bruecke-einbeinig', 'Brücke einbeinig', 'Rückenlage', 'hue', 'liegen', 'ohne', 'Wie die Brücke, ein Bein bleibt dabei gestreckt in der Luft. Das Becken bleibt gerade und kippt nicht zur Seite.'],
    ['seitlage-abspreizen', 'Bein abspreizen in Seitlage', 'Matte oder Bett', 'hue', 'liegen', 'ohne', 'Auf der Seite liegen, unteres Bein leicht gebeugt. Das obere Bein gestreckt nach oben führen, die Fußspitze zeigt nach vorn.'],
    ['muschel-loopband', 'Muschel mit Loopband', 'Seitlage', 'hue', 'liegen', 'band', 'Seitlage, Knie gebeugt, Band um die Oberschenkel. Das obere Knie öffnen, die Füße bleiben zusammen, das Becken kippt nicht nach hinten.'],
    ['bauchlage-hueftstreckung', 'Hüftstreckung in Bauchlage', 'Matte oder Bett', 'hue', 'liegen', 'ohne', 'Bauchlage, Stirn auf den Händen. Ein gestrecktes Bein eine Handbreit anheben, ohne ins Hohlkreuz zu gehen.'],
    ['fersenschub', 'Fersenschub', 'Rückenlage', 'knie hue', 'liegen', 'ohne', 'Rückenlage, die Ferse auf der Unterlage langsam Richtung Gesäß ziehen und wieder strecken. Nur so weit, wie es angenehm ist.'],
    ['quadrizeps-rolle', 'Quadrizeps anspannen mit Rolle', 'Handtuchrolle unter dem Knie', 'knie', 'liegen', 'ohne', 'Rolle unter das Knie legen. Kniekehle in die Rolle drücken, sodass sich die Ferse leicht hebt, 5 Sekunden halten.'],
    ['gestrecktes-bein-heben', 'Gestrecktes Bein heben', 'Rückenlage', 'knie hue', 'liegen', 'ohne', 'Ein Bein angestellt, das andere gestreckt. Oberschenkel anspannen und das gestreckte Bein bis auf Kniehöhe des anderen heben.'],
    ['bein-gleiten', 'Bein zur Seite gleiten', 'Rückenlage, früh nach OP', 'hue', 'liegen', 'ohne', 'Rückenlage, Beine gestreckt. Ein Bein auf der Unterlage zur Seite gleiten lassen und zurückholen, die Fußspitze zeigt zur Decke.'],
    ['aufstehen-stuhl', 'Aufstehen vom Stuhl', 'Sitz zum Stand', 'hue knie', 'sitz', 'ohne', 'Vorn auf die Stuhlkante setzen, Füße hüftbreit. Mit leichter Vorlage aufstehen und langsam wieder hinsetzen, möglichst ohne Hände.'],
    ['kniestreckung-sitz', 'Kniestreckung im Sitz', 'Stuhl', 'knie', 'sitz', 'ohne', 'Aufrecht sitzen. Ein Knie langsam strecken, Fußspitze zu sich ziehen, kurz halten und langsam absenken.'],
    ['kniebeugung-sitz', 'Kniebeugung im Sitz', 'Stuhl', 'knie', 'sitz', 'ohne', 'Aufrecht sitzen. Den Fuß unter dem Stuhl so weit wie angenehm nach hinten ziehen, kurz halten und zurück.'],
    ['abduktion-sitz-loopband', 'Abduktion im Sitz mit Loopband', 'Stuhl, Loopband', 'hue', 'sitz', 'band', 'Band oberhalb der Knie. Die Knie gegen das Band nach außen drücken, die Füße bleiben stehen.'],
    ['adduktion-ball', 'Adduktion mit Ball', 'Ball zwischen den Knien', 'hue', 'sitz', 'ball', 'Ball zwischen die Knie klemmen. Knie zusammendrücken, 5 Sekunden halten, lösen.'],
    ['bein-abspreizen', 'Abduktion im Stand', 'an der Küchenzeile', 'hue', 'stand', 'ohne', 'Aufrecht an der Küchenzeile festhalten. Das gestreckte Bein zur Seite führen, der Oberkörper bleibt gerade.'],
    ['knieheben-fuss-hoch', 'Knie heben, Fuß hochgezogen', 'an der Küchenzeile', 'hue', 'stand', 'ohne', 'An der Küchenzeile festhalten. Ein Knie bis Hüfthöhe anheben, Fußspitze zu sich ziehen, langsam absetzen.'],
    ['ferse-zum-po', 'Kniebeugung im Stand', 'Ferse zum Po', 'knie hue', 'stand', 'ohne', 'An der Küchenzeile festhalten. Die Ferse Richtung Gesäß führen, das Knie zeigt nach unten.'],
    ['hueftstreckung-stand', 'Hüftstreckung im Stand', 'an der Küchenzeile', 'hue', 'stand', 'ohne', 'An der Küchenzeile festhalten. Das gestreckte Bein nach hinten führen, ohne ins Hohlkreuz zu gehen.'],
    ['seitschritte-loopband', 'Seitschritte mit Loopband', 'Loopband', 'hue', 'stand', 'band', 'Band um die Unterschenkel, leicht in die Knie gehen. Seitliche Schritte machen, das Band bleibt gespannt.'],
    ['mini-kniebeuge', 'Mini-Kniebeuge', 'an der Küchenzeile', 'knie hue', 'stand', 'ohne', 'Hüftbreit stehen. Gesäß nach hinten schieben und leicht in die Knie gehen, die Knie zeigen über die Füße.'],
    ['stufe-hoch', 'Stufe hoch am Geländer', 'Treppenstufe', 'knie hue', 'stand', 'ohne', 'Am Geländer festhalten. Mit einem Fuß auf die Stufe steigen und das andere Bein nachziehen, langsam zurück.'],
    ['stufe-abwaerts', 'Stufe abwärts', 'Treppenstufe', 'knie', 'stand', 'ohne', 'Auf der Stufe stehen, festhalten. Ein Bein langsam nach unten führen und die Ferse antippen, das Knie zeigt über den Fuß.'],
    ['zehenstand', 'Zehenstand', 'an der Küchenzeile', 'fuss gg', 'stand', 'ohne', 'Hüftbreit stehen, möglichst wenig festhalten. Langsam auf die Zehen hoch und langsam absenken.'],
    ['fersenstand', 'Fersenstand', 'an der Küchenzeile', 'fuss gg', 'stand', 'ohne', 'An der Küchenzeile stehen. Beide Fußspitzen anheben, sodass Sie auf den Fersen stehen, langsam absetzen.'],
    ['einbeinstand', 'Einbeinstand', 'an der Küchenzeile', 'fuss hue gg', 'stand', 'ohne', 'Fingerspitzen an die Küchenzeile. Ein Bein anheben und 20 bis 30 Sekunden stehen, das Becken bleibt waagerecht.'],
    ['wadendehnung-wand', 'Wadendehnung an der Wand', 'Wand', 'fuss', 'stand', 'ohne', 'Hände an die Wand, ein Bein nach hinten. Ferse bleibt am Boden, Becken nach vorn schieben, 30 Sekunden halten.'],
    ['fusswippe', 'Fußwippe im Sitz', 'Stuhl', 'fuss', 'sitz', 'ohne', 'Aufrecht sitzen. Abwechselnd die Fersen und die Fußspitzen anheben.'],
    ['handtuch-zehen', 'Handtuch mit den Zehen greifen', 'barfuß, Stuhl', 'fuss', 'sitz', 'ohne', 'Barfuß sitzen, Handtuch vor dem Fuß. Mit den Zehen das Handtuch zu sich heranziehen, die Ferse bleibt am Boden.'],
    ['fusspumpe', 'Fußpumpe', 'Rückenlage', 'fuss', 'liegen', 'ohne', 'Rückenlage, Beine gestreckt. Beide Fußspitzen kräftig zu sich ziehen, dann weit wegstrecken, zügig im Wechsel.'],
    ['wadenheben-exzentrisch', 'Wadenheben exzentrisch an der Stufe', 'Treppenstufe, Geländer', 'fuss', 'stand', 'ohne', 'Mit den Vorfüßen auf die Stufenkante stellen, am Geländer halten. Mit beiden Beinen auf die Zehen hoch, dann nur auf dem betroffenen Bein die Ferse langsam unter die Kante absenken, Knie gestreckt.'],
    ['plantarfaszie-dehnen', 'Fußsohle dehnen', 'Stuhl, barfuß', 'fuss', 'sitz', 'ohne', 'Den Fuß auf das andere Knie legen. Die Zehen mit der Hand Richtung Schienbein ziehen, bis die Fußsohle spannt, 30 Sekunden halten.'],
    ['kurzfuss', 'Kurzfuß', 'Stuhl, barfuß', 'fuss', 'sitz', 'ohne', 'Barfuß sitzen, der Fuß steht flach. Den Großzehenballen Richtung Ferse ziehen, sodass sich das Fußgewölbe hebt. Die Zehen bleiben lang und krallen nicht, 5 Sekunden halten.'],
    ['sprunggelenk-band', 'Fuß nach außen drehen gegen Band', 'Stuhl, Theraband', 'fuss', 'sitz', 'band', 'Band als Schlaufe um beide Vorfüße, die Fersen stehen. Den Fuß gegen das Band nach außen drehen, die Ferse bleibt auf der Stelle, langsam zurück.'],
    ['becken-kippen', 'Becken kippen', 'Rückenlage', 'ruecken', 'liegen', 'ohne', 'Rückenlage, Knie angestellt. Den unteren Rücken flach auf die Unterlage drücken und wieder lösen.'],
    ['knie-brust', 'Knie zur Brust', 'Rückenlage', 'ruecken hue', 'liegen', 'ohne', 'Rückenlage. Ein Knie mit beiden Händen zur Brust ziehen, 20 Sekunden halten, Seite wechseln.'],
    ['knie-pendeln', 'Knie zur Seite pendeln', 'Rückenlage', 'ruecken', 'liegen', 'ohne', 'Rückenlage, Knie angestellt, Arme seitlich. Beide Knie langsam zu einer Seite sinken lassen, die Schultern bleiben liegen.'],
    ['dead-bug', 'Dead Bug', 'Rückenlage', 'ruecken', 'liegen', 'ohne', 'Rückenlage, Beine angehoben, Arme zur Decke. Einen Arm und das gegenüberliegende Bein strecken, der Rücken bleibt flach.'],
    ['katzenbuckel', 'Katzenbuckel und Hohlkreuz', 'Vierfüßlerstand', 'ruecken', 'vierf', 'ohne', 'Vierfüßlerstand. Den Rücken rund machen, dann sanft durchhängen lassen, langsam im Wechsel.'],
    ['vierfuessler-diagonal', 'Arm und Bein diagonal', 'Vierfüßlerstand', 'ruecken hue', 'vierf', 'ohne', 'Vierfüßlerstand. Einen Arm nach vorn und das gegenüberliegende Bein nach hinten strecken, der Rücken bleibt gerade.'],
    ['paeckchensitz', 'Päckchensitz', 'aus dem Vierfüßlerstand', 'ruecken', 'vierf', 'ohne', 'Aus dem Vierfüßlerstand das Gesäß Richtung Fersen schieben, die Arme bleiben lang. Ruhig atmen.'],
    ['offenes-buch', 'Offenes Buch', 'Seitlage', 'ruecken schulter', 'liegen', 'ohne', 'Seitlage, Knie gebeugt, Arme nach vorn. Den oberen Arm im Bogen nach hinten öffnen, der Blick folgt der Hand, die Knie bleiben liegen.'],
    ['unterarmstuetz-knie', 'Unterarmstütz auf den Knien', 'Bauchlage', 'ruecken', 'liegen', 'ohne', 'Auf Unterarme und Knie stützen. Becken anheben, bis Schultern, Becken und Knie eine Linie bilden, halten.'],
    ['rueckenstrecker', 'Rückenstrecker in Bauchlage', 'Bauchlage', 'ruecken', 'liegen', 'ohne', 'Bauchlage, Stirn zur Matte. Kopf und Brust eine Handbreit anheben, der Blick bleibt zur Matte, die Hände stützen nicht.'],
    ['bws-ball', 'BWS aufrichten mit Ball', 'Stuhl, Ball', 'ruecken', 'sitz', 'ball', 'Vorgebeugt sitzen, Ball an den Füßen. Den Ball mit gestreckten Armen über den Kopf führen und dabei aufrichten, der Blick folgt dem Ball.'],
    ['bws-aufrichtung-hantel', 'BWS-Aufrichtung mit Kurzhanteln', 'Stuhl, Kurzhanteln', 'ruecken schulter', 'sitz', 'hantel', 'Aufrecht sitzen. Arme gestreckt in Y-Form über den Kopf führen, Daumen zeigen nach hinten, Brustbein anheben.'],
    ['rotation-hantel', 'Rotation im Sitz mit Kurzhantel', 'Stuhl, Kurzhantel', 'ruecken', 'sitz', 'hantel', 'Aufrecht sitzen, Hanteln auf den Oberschenkeln. Oberkörper aufdrehen und einen Arm diagonal nach oben führen, der Blick folgt.'],
    ['rudern-tuer', 'Rudern an der Türklinke', 'Theraband, Stuhl', 'ruecken schulter', 'sitz', 'band', 'Band um die Türklinke. Ellenbogen eng am Körper nach hinten ziehen, Schulterblätter zusammen, aufrecht bleiben.'],
    ['hueftbeuger-dehnen', 'Hüftbeuger dehnen', 'Halbkniestand am Stuhl', 'hue ruecken', 'stand', 'ohne', 'Halbkniestand, eine Hand am Stuhl. Becken nach vorn schieben, Po leicht anspannen, kein Hohlkreuz, 30 Sekunden halten.'],
    ['pendeln', 'Pendeln', 'vorgebeugt an der Küchenzeile', 'schulter', 'stand', 'ohne', 'Vorgebeugt mit einer Hand abstützen. Den anderen Arm locker hängen und klein vor und zurück pendeln lassen.'],
    ['tisch-gleiten', 'Arm auf dem Tisch gleiten', 'Tisch, Handtuch', 'schulter', 'sitz', 'ohne', 'Am Tisch sitzen, Hand auf einem Handtuch. Den Arm nach vorn schieben, der Oberkörper geht leicht mit.'],
    ['wand-hochwandern', 'An der Wand hochwandern', 'Wand', 'schulter', 'stand', 'ohne', 'Vor der Wand stehen. Mit den Fingern die Wand hochwandern, so weit es geht, ohne die Schulter hochzuziehen.'],
    ['stab-rueckenlage', 'Arme mit Stab über den Kopf', 'Rückenlage, Stab', 'schulter', 'liegen', 'stab', 'Rückenlage, Stab in beiden Händen. Die gestreckten Arme über den Kopf führen, der gesunde Arm hilft mit.'],
    ['aussenrotation-stab', 'Außenrotation mit Stab', 'Stuhl, Stab, Handtuchrolle', 'schulter', 'sitz', 'stab', 'Ellenbogen am Körper. Mit der anderen Hand den Unterarm über den Stab nach außen schieben.'],
    ['aussenrotation-theraband', 'Außenrotation mit Theraband', 'Theraband an der Türklinke', 'schulter', 'stand', 'band', 'Seitlich zur Tür stehen, Band an der Klinke. Ellenbogen mit Handtuchrolle am Körper, Unterarm vor dem Bauch. Den Unterarm nach außen drehen, der Ellenbogen bleibt am Körper.'],
    ['innenrotation-theraband', 'Innenrotation mit Theraband', 'Theraband an der Türklinke', 'schulter', 'stand', 'band', 'Seitlich zur Tür stehen, Band an der Klinke. Ellenbogen mit Handtuchrolle am Körper, Unterarm nach außen gedreht. Die Hand zum Bauch führen, der Ellenbogen bleibt am Körper.'],
    ['band-auseinander', 'Band auseinanderziehen', 'Theraband', 'schulter ruecken', 'stand', 'band', 'Band mit beiden Händen halten, Arme gestreckt nach vorn auf Schulterhöhe. Die Arme zur Seite öffnen und die Schulterblätter zusammenziehen, langsam zurück.'],
    ['seitheben-hantel', 'Seitheben mit Kurzhanteln', 'Kurzhanteln', 'schulter', 'stand', 'hantel', 'Aufrecht stehen, Arme neben dem Körper. Die gestreckten Arme leicht schräg vor dem Körper bis Schulterhöhe heben, Daumen zeigen nach oben, Schultern bleiben unten.'],
    ['armheben-hantel', 'Arm nach vorn heben mit Kurzhantel', 'Stuhl, Kurzhantel', 'schulter', 'sitz', 'hantel', 'Aufrecht sitzen, Hand mit der Hantel auf dem Oberschenkel. Den gestreckten Arm nach vorn bis Schulterhöhe heben, Daumen oben, langsam absenken.'],
    ['aussenrotation-seitlage', 'Außenrotation in Seitlage', 'Matte, Kurzhantel, Handtuchrolle', 'schulter', 'liegen', 'hantel', 'Auf der Seite liegen, oberer Ellenbogen mit Handtuchrolle an der Taille. Den Unterarm mit der Hantel vom Bauch nach oben drehen, der Ellenbogen bleibt liegen.'],
    ['wand-liegestuetz', 'Liegestütz an der Wand', 'Wand', 'schulter', 'stand', 'ohne', 'Eine Armlänge vor der Wand stehen, Hände auf Schulterhöhe an die Wand. Die Arme beugen, bis die Brust nah an der Wand ist, der Körper bleibt gerade. Zurückdrücken.'],
    ['dehnung-quer', 'Dehnung quer vor der Brust', 'Stuhl', 'schulter', 'sitz', 'ohne', 'Aufrecht sitzen. Den Arm waagerecht quer vor die Brust führen, die andere Hand zieht ihn am Oberarm sanft heran. Schulter bleibt unten, 20 bis 30 Sekunden halten.'],
    ['brust-tuerrahmen', 'Brustmuskel dehnen im Türrahmen', 'Türrahmen', 'schulter ruecken', 'stand', 'ohne', 'Seitlich in den Türrahmen stellen, die Hand hinten auf Schulterhöhe an den Rahmen legen. Einen Schritt nach vorn machen, bis vorn in der Brust ein Ziehen kommt, 20 bis 30 Sekunden halten.'],
    ['pnf-diagonale-theraband', 'Diagonale nach oben mit Theraband', 'Stuhl, Theraband unter dem Fuß', 'schulter', 'sitz', 'band', 'Band unter den gegenüberliegenden Fuß klemmen, Faust neben der anderen Hüfte, Daumen nach unten. Den gestreckten Arm schräg nach oben außen führen, Hand öffnen und aufdrehen, der Blick folgt der Hand.'],
    ['antirotation', 'Antirotation im Sitz mit Theraband', 'Stuhl, Theraband an der Türklinke', 'ruecken', 'sitz', 'band', 'Seitlich zur Tür sitzen, Band an der Klinke, Bandende mit beiden Händen vor dem Brustbein. Die Hände gerade nach vorn schieben, einige Sekunden halten, langsam zurück. Der Oberkörper dreht nicht mit.'],
    ['ferse-rausschieben', 'Ferse rausschieben im Wechsel', 'Matte', 'ruecken hue', 'liegen', 'ohne', 'Rückenlage, beide Beine gestreckt. Im Wechsel eine Ferse nach unten schieben und die andere etwas hochziehen, die Knie bleiben gestreckt. Die Bewegung kommt aus dem Becken.'],
    ['kinn-einziehen', 'Kinn einziehen im Sitz', 'Stuhl', 'hws kiefer', 'sitz', 'ohne', 'Aufrecht sitzen, Blick geradeaus. Das Kinn waagerecht nach hinten ziehen (Doppelkinn), ohne zu nicken. Kurz halten, locker lassen.'],
    ['kopfnicken', 'Kopfnicken in Rückenlage', 'Matte, flaches Handtuch', 'hws', 'liegen', 'ohne', 'Rückenlage, Kopf auf einem flachen Handtuch. Ganz leicht mit dem Kinn Richtung Brust nicken, der Hinterkopf bleibt liegen. 5 bis 10 Sekunden halten.'],
    ['trapez-dehnung', 'Dehnung oberer Trapezmuskel', 'Stuhl', 'hws schulter', 'sitz', 'ohne', 'Aufrecht sitzen, eine Hand hält die Sitzkante. Die andere Hand legt sich über den Kopf und zieht ihn sanft zur Gegenseite, das Gesicht bleibt nach vorn. 20 bis 30 Sekunden halten.'],
    ['levator-dehnung', 'Dehnung Schulterblattheber', 'Stuhl', 'hws schulter', 'sitz', 'ohne', 'Aufrecht sitzen, eine Hand hält die Sitzkante. Den Kopf zur Gegenseite drehen und Richtung Achsel neigen, die andere Hand am Hinterkopf hilft sanft nach. 20 bis 30 Sekunden halten.'],
    ['schultern-hochziehen', 'Schultern hochziehen und senken', 'Stuhl', 'hws schulter', 'sitz', 'ohne', 'Aufrecht sitzen, Arme hängen locker. Beide Schultern zu den Ohren ziehen, kurz halten und langsam ganz nach unten sinken lassen.'],
    ['nacken-halten', 'Nacken halten gegen die Hand', 'Stuhl', 'hws', 'sitz', 'ohne', 'Aufrecht sitzen, Hand seitlich an den Kopf legen. Den Kopf gegen die Hand drücken, die Hand hält dagegen, der Kopf bewegt sich nicht. 5 bis 10 Sekunden halten, Seite wechseln.'],
    ['kopf-heben-bauchlage', 'Kopf heben in Bauchlage', 'Matte', 'hws', 'liegen', 'ohne', 'Bauchlage, Stirn auf den übereinandergelegten Händen. Den Kopf mit eingezogenem Kinn wenige Zentimeter abheben, Blick nach unten. Kurz halten, ablegen.'],
    ['ellenbogen-beugen', 'Ellenbogen beugen und strecken', 'Stuhl', 'hand', 'sitz', 'ohne', 'Aufrecht sitzen, Arm hängt neben dem Körper. Die Hand zur Schulter führen, der Oberarm bleibt am Körper, langsam wieder strecken.'],
    ['unterarm-drehen', 'Unterarm drehen', 'Tisch', 'hand', 'sitz', 'ohne', 'Am Tisch sitzen, Unterarm liegt auf, Ellenbogen nah am Körper. Die Hand von Handfläche unten nach Handfläche oben drehen und zurück.'],
    ['bizeps-hantel', 'Ellenbogen beugen mit Kurzhantel', 'Stuhl, Kurzhantel', 'hand schulter', 'sitz', 'hantel', 'Aufrecht sitzen, Arm mit der Hantel hängt neben dem Körper, Handfläche nach vorn. Den Ellenbogen beugen, bis die Hantel vor der Schulter ist, langsam absenken.'],
    ['handgelenk-senken', 'Handgelenk langsam senken mit Kurzhantel', 'Tisch, Kurzhantel', 'hand', 'sitz', 'hantel', 'Unterarm auf dem Tisch, Hand mit der Hantel über der Kante, Handrücken oben. Die Hand ganz langsam nach unten sinken lassen, mit der anderen Hand wieder hochheben.'],
    ['dehnung-unterarm-strecker', 'Dehnung der Unterarm-Streckmuskeln', 'Stuhl', 'hand', 'sitz', 'ohne', 'Arm gestreckt nach vorn, Handrücken oben. Die Hand nach unten beugen, die andere Hand drückt sie sanft weiter. 20 bis 30 Sekunden halten.'],
    ['dehnung-unterarm-beuger', 'Dehnung der Unterarm-Beugemuskeln', 'Stuhl', 'hand', 'sitz', 'ohne', 'Arm gestreckt nach vorn, Hand nach oben aufstellen wie ein Stopp-Zeichen. Die andere Hand zieht die Finger sanft zurück. 20 bis 30 Sekunden halten.'],
    ['handgelenk-heben', 'Handgelenk heben und senken', 'Tisch', 'hand', 'sitz', 'ohne', 'Unterarm flach auf dem Tisch, Hand über der Kante. Die Hand im Handgelenk nach oben heben, der Unterarm bleibt liegen. Langsam wieder sinken lassen.'],
    ['faust', 'Faust schließen und öffnen', 'Tisch', 'hand', 'sitz', 'ohne', 'Unterarm auf dem Tisch. Die Finger weit spreizen, dann eine feste Faust machen, Daumen außen. Langsam abwechseln.'],
    ['ball-druecken', 'Ball drücken', 'Tisch, weicher Ball', 'hand', 'sitz', 'ball', 'Einen weichen Ball in die Hand nehmen. Mit der ganzen Hand fest zusammendrücken, kurz halten, locker lassen.'],
    ['daumen-finger', 'Daumen zu den Fingerkuppen', 'Tisch', 'hand', 'sitz', 'ohne', 'Ellenbogen auf dem Tisch, Hand offen. Mit der Daumenkuppe nacheinander jede Fingerkuppe berühren, zuletzt den kleinen Finger.'],
    ['sehnengleiten', 'Sehnengleiten', 'Tisch', 'hand', 'sitz', 'ohne', 'Ellenbogen auf dem Tisch, Hand gerade nach oben. Die Finger zur Hakenfaust einrollen, die Grundgelenke bleiben gestreckt. Wieder strecken.'],
    ['tyler-twist', 'Tyler Twist mit Flexbar', 'Stuhl, Flexbar', 'hand', 'sitz', 'stab', 'Den Stab vor dem Körper halten: betroffene Hand mit gestrecktem Handgelenk, die andere Hand dreht den Stab ein. Arme nach vorn strecken und die betroffene Hand ganz langsam nachgeben lassen, bis der Stab gerade ist.'],
    ['unterarm-drehen-hantel', 'Unterarm drehen mit Kurzhantel', 'Tisch, Kurzhantel', 'hand', 'sitz', 'hantel', 'Unterarm auf dem Tisch, Handfläche oben, die Hantel nur an einem Ende halten. Langsam nach innen drehen, bis die Handfläche zum Boden zeigt, und zurück. Der Unterarm bleibt liegen.'],
    ['hammer-heben', 'Hammer heben', 'Tisch, Hammer', 'hand', 'sitz', 'ohne', 'Unterarm auf dem Tisch, Daumenseite oben, Hammer am Stielende halten. Den Hammerkopf im Handgelenk anheben und langsam wieder senken.'],
    ['finger-spreizen-band', 'Finger spreizen gegen Gummiband', 'Tisch, Gummiband', 'hand', 'sitz', 'band', 'Ein Gummiband um die Fingerspitzen legen. Die Finger gegen den Zug weit auseinanderspreizen, kurz halten, langsam zurück.'],
    ['wandsitz', 'Wandsitz', 'Wand', 'knie', 'stand', 'ohne', 'Rücken an die Wand, Füße etwa eine Fußlänge vor der Wand. An der Wand nach unten rutschen, bis die Knie etwa 60 Grad gebeugt sind, die Knie bleiben über den Füßen. 20 bis 30 Sekunden halten.'],
    ['kniestreckung-band', 'Kniestreckung gegen Band', 'Tischbein, Theraband', 'knie', 'stand', 'band', 'Band um ein schweres Tischbein und hinten um die Kniekehle. Das Band zieht das Knie leicht nach vorn. Knie gegen das Band ganz durchstrecken, kurz halten, langsam lösen.'],
    ['ausfallschritt', 'Ausfallschritt nach vorn', 'Stand', 'knie hue', 'stand', 'ohne', 'Hände in die Hüften. Einen großen Schritt nach vorn machen und das hintere Knie Richtung Boden senken. Das vordere Knie bleibt über dem Fuß, der Oberkörper aufrecht. Zurück in den Stand.'],
    ['oberschenkel-rueckseite-dehnen', 'Oberschenkelrückseite dehnen', 'Stuhl', 'knie hue', 'sitz', 'ohne', 'Vorn auf der Stuhlkante sitzen, ein Bein gestreckt, Ferse am Boden, Fußspitze hoch. Mit geradem Rücken aus der Hüfte nach vorn neigen, bis es hinten im Oberschenkel zieht. 30 Sekunden halten.'],
    ['oberschenkel-vorderseite-dehnen', 'Oberschenkelvorderseite dehnen', 'an der Küchenzeile', 'knie hue', 'stand', 'ohne', 'An der Küchenzeile festhalten. Den Fuß hinter dem Körper greifen und die Ferse Richtung Gesäß ziehen. Knie bleiben nebeneinander, kein Hohlkreuz. 30 Sekunden halten.'],
    ['hochdruecken-bauchlage', 'Hochdrücken in Bauchlage', 'Matte', 'ruecken', 'liegen', 'ohne', 'Bauchlage, Hände neben den Schultern. Mit den Armen den Oberkörper hochdrücken, Becken und Beine bleiben auf der Matte, der untere Rücken hängt locker durch. Kurz oben bleiben, langsam ablegen.'],
    ['nervengleiten-sitz', 'Nervengleiten im Sitz', 'Stuhl', 'ruecken', 'sitz', 'ohne', 'Locker gerundet sitzen, Kopf nach vorn gebeugt. Gleichzeitig den Kopf heben und ein Knie strecken, dann gleichzeitig Kopf senken und Knie beugen. Locker im Wechsel, ohne Schmerz.'],
    ['tandemstand', 'Tandemstand', 'an der Küchenzeile', 'fuss hue gg', 'stand', 'ohne', 'An der Küchenzeile stehen. Die Füße genau hintereinander stellen, die Ferse berührt die Zehen des hinteren Fußes. 20 bis 30 Sekunden stehen, möglichst wenig festhalten.'],
    ['einbeinstand-kissen', 'Einbeinstand auf dem Kissen', 'Kissen, Küchenzeile', 'fuss hue gg', 'stand', 'ohne', 'Auf ein dickes Kissen stellen, an der Küchenzeile festhalten. Ein Bein anheben und 20 bis 30 Sekunden stehen, das Becken bleibt waagerecht.'],
    ['tandemgang', 'Tandemgang', 'an der Küchenzeile', 'gg', 'stand', 'ohne', 'An der Küchenzeile entlang gehen. Jeden Fuß genau vor den anderen setzen, die Ferse berührt die Zehen. Blick nach vorn, 10 Schritte, zurück.'],
    ['einbeinstand-augen-zu', 'Einbeinstand mit geschlossenen Augen', 'an der Küchenzeile', 'gg', 'stand', 'ohne', 'Neben der Küchenzeile auf einem Bein stehen, die Hand knapp über der Platte. Dann die Augen schließen und 10 bis 20 Sekunden stehen. Nur üben, wenn der Einbeinstand mit offenen Augen sicher klappt.'],
    ['gewichtsverlagerung', 'Gewicht seitlich verlagern', 'vor der Küchenzeile', 'gg hue', 'stand', 'ohne', 'Etwas breiter als hüftbreit stehen. Das Gewicht langsam auf ein Bein verlagern, das Becken schiebt sich über den Fuß, der Oberkörper bleibt aufrecht. Zur anderen Seite im Wechsel.'],
    ['hindernis-steigen', 'Über ein Hindernis steigen', 'Handtuch, Küchenzeile', 'gg', 'stand', 'ohne', 'Ein gerolltes Handtuch quer auf den Boden legen, an der Küchenzeile festhalten. Mit gebeugtem Knie darüber steigen und zurück, im Wechsel rechts und links.'],
    ['zehengang', 'Zehengang', 'an der Küchenzeile', 'gg fuss', 'stand', 'ohne', 'An der Küchenzeile auf den Zehenspitzen entlang gehen, die Fersen bleiben oben. Aufrecht bleiben, 10 Schritte, zurück.'],
    ['kopfdrehen-stand', 'Kopf drehen im Stand', 'vor der Küchenzeile', 'gg', 'stand', 'ohne', 'Mit eng geschlossenen Füßen vor der Küchenzeile stehen. Den Kopf langsam nach rechts und links drehen, der Rumpf bleibt gerade. Bei Schwindel kurz pausieren.'],
    ['seitwaerts-gehen', 'Seitwärts gehen', 'an der Küchenzeile', 'gg hue', 'stand', 'ohne', 'Hände in die Hüften, vor der Küchenzeile stehen. 10 Schritte zur Seite gehen, die Fußspitzen zeigen nach vorn, dann 10 Schritte zurück.'],
    ['rueckwaerts-gehen', 'Rückwärts gehen', 'an der Küchenzeile', 'gg', 'stand', 'ohne', 'Eine Hand an der Küchenzeile. 10 Schritte rückwärts gehen, zuerst den Vorfuß aufsetzen, Blick nach vorn. Umdrehen, Hand wechseln, zurück.'],
    ['tandemgang-rueckwaerts', 'Tandemgang rückwärts', 'an der Küchenzeile', 'gg', 'stand', 'ohne', 'An der Küchenzeile festhalten. Rückwärts gehen und jeden Fuß direkt hinter den anderen setzen, die Zehen berühren die Ferse. 10 Schritte, zurück.'],
    ['achterlauf', 'Gehen und Wenden (Achterlauf)', 'zwei Stühle', 'gg', 'stand', 'ohne', 'Zwei Stühle etwa zwei Meter auseinanderstellen. In normalem Tempo eine Acht um die Stühle gehen, einmal im und einmal gegen den Uhrzeigersinn wenden.'],
    ['blickstabilisation', 'Blick halten, Kopf drehen', 'Stuhl, Karte', 'gg hws', 'sitz', 'ohne', 'Eine Karte mit einem Punkt auf Augenhöhe halten. Den Punkt fest anschauen und den Kopf zügig nach rechts und links drehen, der Punkt bleibt scharf. 1 Minute, 3-mal täglich. Leichter Schwindel ist erlaubt, er soll nach der Übung abklingen.'],
    ['gehen-kopfdrehen', 'Gehen mit Kopfdrehen', 'Flur', 'gg', 'stand', 'ohne', 'Im Flur geradeaus gehen und dabei den Kopf im Wechsel nach rechts und links drehen, der Körper geht gerade weiter. Anfangs nah an der Wand gehen.'],
    ['greifen-stand', 'Weit greifen im Stand', 'an der Küchenzeile', 'gg', 'stand', 'ohne', 'Vor der Küchenzeile stehen. Weit nach vorn über die Platte greifen, als würden Sie einen Becher holen, die Fersen bleiben am Boden. Langsam zurück in den aufrechten Stand.'],
    ['schritte-alle-richtungen', 'Schritte in alle Richtungen', 'an der Küchenzeile', 'gg', 'stand', 'ohne', 'Eine Hand an der Küchenzeile. Mit einem Bein zügig einen großen Schritt nach vorn, zur Seite, schräg nach hinten und nach hinten machen und jeweils zurück, wie die Zeiger einer Uhr. Seite wechseln.'],
    ['lippenbremse', 'Lippenbremse', 'Sitz', 'atem', 'sitz', 'ohne', 'Durch die Nase einatmen. Dann langsam durch die locker aufeinanderliegenden Lippen ausatmen, ohne die Wangen aufzublasen. Die Ausatmung ist etwa doppelt so lang wie die Einatmung. Auch bei Belastung und Atemnot anwenden.'],
    ['kutschersitz', 'Kutschersitz', 'Stuhl', 'atem', 'sitz', 'ohne', 'Vorn auf dem Stuhl sitzen, Oberkörper locker nach vorn, beide Unterarme auf die Oberschenkel stützen. Schultern hängen lassen und mit der Lippenbremse ausatmen. Hilft bei Atemnot.'],
    ['torwartstellung', 'Torwartstellung', 'Stand', 'atem', 'stand', 'ohne', 'Knie leicht beugen, Oberkörper mit geradem Rücken nach vorn neigen, die Hände oberhalb der Knie auf die Oberschenkel stützen. Mit der Lippenbremse ausatmen. Gut unterwegs, wenn die Luft knapp wird.'],
    ['abstuetzen-tisch', 'Abstützen am Tisch', 'Tisch', 'atem', 'stand', 'ohne', 'Vor einen Tisch stellen, den Oberkörper leicht nach vorn neigen und beide Unterarme auf die Tischplatte stützen. Schultern locker lassen und mit der Lippenbremse ausatmen.'],
    ['bauchatmung', 'Bauchatmung in Rückenlage', 'Matte oder Bett', 'atem', 'liegen', 'ohne', 'Rückenlage, Knie angestellt. Eine Hand auf den Bauch, eine auf die Brust. Durch die Nase einatmen, sodass sich die Bauchhand hebt und die Brusthand fast ruhig bleibt. Langsam ausatmen.'],
    ['flankenatmung', 'Tief in die Flanken atmen', 'Stuhl', 'atem', 'sitz', 'ohne', 'Aufrecht sitzen, die Hände seitlich auf die unteren Rippen legen. Tief durch die Nase einatmen und die Rippen gegen die Hände weiten, kurz halten, langsam ausatmen. 3 bis 4 tiefe Atemzüge, dann ruhig weiteratmen.'],
    ['huffing-kissen', 'Huffing und Abhusten mit Kissen', 'Stuhl, Kissen', 'atem', 'sitz', 'ohne', 'Ein Kissen fest gegen den Bauch oder die Narbe drücken. Tief einatmen und mit weit offenem Mund kräftig aushauchen, wie beim Anhauchen einer Brille. Ein- bis zweimal wiederholen, dann bei Bedarf abhusten.'],
    ['halbmond-dehnlage', 'Halbmond-Dehnlage', 'Matte oder Bett', 'atem ruecken', 'liegen', 'ohne', 'Rückenlage. Arme über den Kopf und Beine zur selben Seite legen, sodass der Körper einen Bogen bildet. Ruhig in die gedehnte Flanke atmen, 30 bis 60 Sekunden, Seite wechseln.'],
    ['kiefer-ruhelage', 'Kieferruhelage', 'Sitz', 'kiefer', 'sitz', 'ohne', 'Lippen locker zu, Zähne leicht auseinander, die Zungenspitze liegt oben am Gaumen direkt hinter den oberen Schneidezähnen. Diese Lage mehrmals am Tag prüfen, vor allem wenn Sie merken, dass Sie die Zähne zusammenbeißen.'],
    ['oeffnen-zunge-gaumen', 'Kontrolliert öffnen mit Zunge am Gaumen', 'Sitz, Spiegel', 'kiefer', 'sitz', 'ohne', 'Zungenspitze oben an den Gaumen legen. Den Mund langsam und gerade öffnen, nur so weit, wie die Zunge oben bleiben kann, langsam schließen. Am besten vor dem Spiegel, ohne Schmerz.'],
    ['oeffnen-finger-gelenk', 'Öffnen mit Fingern an den Kiefergelenken', 'Sitz', 'kiefer', 'sitz', 'ohne', 'Zeige- und Mittelfinger leicht vor die Ohren auf die Kiefergelenke legen. Den Mund langsam und gerade öffnen und schließen, beide Seiten sollen sich gleich bewegen, ohne Knacken und ohne Schmerz.'],
    ['isometrisch-oeffnen', 'Mund öffnen gegen die Faust', 'Sitz', 'kiefer', 'sitz', 'ohne', 'Die Faust unter das Kinn legen. Mit dem Kinn leicht gegen die Faust drücken, als wollten Sie den Mund öffnen, ohne dass er sich bewegt. 5 Sekunden halten, lösen.'],
    ['isometrisch-seitlich', 'Kiefer seitlich gegen die Hand', 'Sitz', 'kiefer', 'sitz', 'ohne', 'Die flache Hand seitlich an den Unterkiefer legen. Den Unterkiefer leicht gegen die Hand schieben, ohne dass er sich bewegt. 5 Sekunden halten, lösen, Seite wechseln.'],
    ['kiefer-seitschieben', 'Unterkiefer zur Seite schieben', 'Holzspatel', 'kiefer', 'sitz', 'ohne', 'Einen Holzspatel locker zwischen die Schneidezähne legen, nicht fest zubeißen. Den Unterkiefer langsam zur Seite schieben und zurück, im Wechsel rechts und links.'],
    ['kiefer-vorschieben', 'Unterkiefer vorschieben', 'Sitz', 'kiefer', 'sitz', 'ohne', 'Mund einen Spalt öffnen. Den Unterkiefer langsam gerade nach vorn schieben, bis die unteren Zähne vor den oberen stehen, und langsam zurück. Ohne Schmerz.'],
    ['masseter-lockern', 'Kaumuskel lockern', 'Sitz', 'kiefer', 'sitz', 'ohne', 'Die Fingerkuppen auf die Wangen zwischen Wangenknochen und Kieferwinkel legen. Mit kleinen Kreisen den Kaumuskel massieren, der Mund ist dabei locker einen Spalt offen. 1 bis 2 Minuten.'],
    ['seitstuetz-knie', 'Seitstütz auf den Knien', 'Matte', 'ruecken hue', 'liegen', 'ohne', 'Seitlage, auf den Unterarm stützen, der Ellenbogen liegt unter der Schulter, die Knie sind gebeugt. Die Hüfte anheben, bis Kopf, Hüfte und Knie in einer Linie sind, 10 bis 20 Sekunden halten, ablegen. Seite wechseln.'],
    ['sleeper-stretch', 'Sleeper Stretch', 'Matte oder Bett', 'schulter', 'liegen', 'ohne', 'Auf der zu dehnenden Seite liegen, Oberarm 90 Grad nach vorn, Ellenbogen gebeugt, Unterarm zeigt zur Decke. Mit der anderen Hand den Unterarm sanft Richtung Unterlage drücken, bis es hinten in der Schulter zieht. 30 Sekunden halten, kein Schmerz vorn in der Schulter.'],
    ['wand-slides', 'Unterarme an der Wand hochschieben', 'Wand', 'schulter', 'stand', 'ohne', 'Vor der Wand stehen, die Unterarme liegen senkrecht an der Wand, Ellenbogen auf Schulterhöhe. Die Unterarme langsam nach oben in ein Y schieben, die Schultern bleiben unten, langsam zurück.'],
    ['zehen-ball-greifen', 'Zehen um den Ball krallen', 'barfuß, kleiner Ball', 'fuss', 'stand', 'ball', 'Leicht festhalten, ein kleiner Ball liegt unter den Zehen. Die Zehen um den Ball krallen, kurz halten und wieder lang machen. Die Ferse bleibt am Boden.'],
    ['zehenstand-ball', 'Zehenstand mit Ball zwischen den Fersen', 'Ball, Küchenzeile', 'fuss', 'stand', 'ball', 'Beide Hände leicht an der Küchenzeile, ein kleiner Ball klemmt zwischen den Fersen. Langsam auf die Zehen hoch, der Ball bleibt zwischen den Fersen, die Fersen kippen nicht nach außen. Langsam absenken.'],
    ['fersenheben-sitz', 'Fersenheben im Sitz', 'Stuhl', 'fuss', 'sitz', 'ohne', 'Aufrecht sitzen, beide Füße stehen flach. Die Fersen langsam anheben, Ballen und Zehen bleiben am Boden, kurz halten und langsam absenken.'],
    ['fuss-beugen-sitz', 'Fuß beugen und strecken, Bein angehoben', 'Stuhl, barfuß', 'fuss', 'sitz', 'ohne', 'Aufrecht sitzen, ein Bein gestreckt anheben. Die Fußspitze kräftig zu sich ziehen, dann weit wegstrecken, ruhig im Wechsel. Zwischendurch den Fuß auch in beide Richtungen kreisen.'],
    ['kurzfuss-knie-vor', 'Kurzfuß mit Knie nach vorn', 'barfuß, Küchenzeile', 'fuss', 'stand', 'ohne', 'Kleine Schrittstellung, der Fuß vorn baut einen Kurzfuß auf (Gewölbe heben, Zehen lang). Das Knie langsam nach vorn über den zweiten Zeh schieben, die Ferse bleibt unten und das Gewölbe bleibt stehen. Langsam zurück.'],
    ['fuss-ueber-ball', 'Fuß über den Ball heben', 'barfuß, kleiner Ball, Küchenzeile', 'fuss gg', 'stand', 'ball', 'Leicht festhalten, ein kleiner Ball liegt neben dem Fuß. Den Fuß kontrolliert über den Ball heben und auf der anderen Seite absetzen, ohne ihn zu berühren, dann zurück.'],
    ['ball-rollen-fusssohle', 'Ball unter der Fußsohle rollen', 'barfuß, kleiner Ball', 'fuss', 'stand', 'ball', 'Leicht festhalten, ein kleiner Ball liegt unter dem Vorfuß. Den Ball mit leichtem Druck vom Vorfuß bis zur Ferse und zurück rollen.'],
    ['rumpfrotation-diagonale-sitz', 'Diagonale mit Rumpfdrehung im Sitz', 'Stuhl, Theraband', 'ruecken schulter', 'sitz', 'band', 'Aufrecht vorn auf dem Stuhl sitzen, das Theraband unter dem linken Fuß fixieren, das Ende in der rechten Hand. Mit gestrecktem Arm zur Außenseite des linken Knies greifen, der Oberkörper dreht mit. Dann den gestreckten Arm gegen das Band diagonal nach rechts oben ziehen, der Daumen zeigt nach hinten, und den Oberkörper zur gleichen Seite mitdrehen. Langsam zurück, danach Seite wechseln.'],
    ['fersenschub-bett', 'Ferse über das Laken ziehen', 'im Bett', 'hue knie', 'liegen', 'ohne', 'Rückenlage im Bett, Beine gestreckt. Eine Ferse langsam über das Laken zum Gesäß ziehen, Knie und Hüfte beugen sich dabei. Die Ferse bleibt auf der Unterlage. Langsam wieder ausstrecken, dann das andere Bein.'],
    ['knie-fallen-bett', 'Knie zur Seite fallen lassen und zurückholen', 'im Bett', 'hue', 'liegen', 'ohne', 'Rückenlage im Bett, beide Beine angestellt. Die Knie langsam nach außen sinken lassen, so weit es angenehm ist. Dann die Knie aktiv wieder zusammenführen, bis sie nach oben zeigen.'],
    ['knie-loopband-bett', 'Knie gegen das Loopband nach außen', 'im Bett, Loopband', 'hue', 'liegen', 'band', 'Rückenlage im Bett, beide Beine angestellt, das Loopband liegt knapp über den Knien. Die Knie gegen das Band nach außen drücken, kurz halten und langsam zurück. Die Füße bleiben flach auf der Matratze.'],
    ['bruecke-bett', 'Brücke im Bett', 'im Bett', 'hue ruecken', 'liegen', 'ohne', 'Rückenlage im Bett, beide Beine angestellt, Arme neben dem Körper. Das Becken anheben, bis Knie, Hüfte und Schultern eine Linie bilden. Kurz halten und langsam ablegen. Die Füße drücken fest in die Matratze.'],
    ['arme-heben-bett', 'Arme heben, Faust schließen', 'im Bett', 'schulter atem', 'liegen', 'ohne', 'Rückenlage im Bett, Arme neben dem Körper. Beim Einatmen beide gestreckten Arme zur Decke heben und die Hände zur Faust schließen, beim Ausatmen langsam senken und die Hände öffnen.'],
    ['beinpresse-band-bett', 'Bein gegen das Band strecken', 'im Bett, Theraband', 'knie hue', 'liegen', 'band', 'Rückenlage im Bett, das Band liegt um eine Fußsohle, die Enden in den Händen. Das Bein zur Brust beugen und dann gegen das Band schräg nach vorn ausstrecken. Langsam zurück.'],
    ['wadenpresse-band-bett', 'Fuß gegen das Band nach unten drücken', 'im Bett, Theraband', 'fuss', 'liegen', 'band', 'Rückenlage im Bett, Bein gestreckt, das Band liegt um den Vorfuß, die Enden in den Händen. Die Fußspitze gegen das Band nach unten drücken wie auf ein Gaspedal, dann langsam wieder zu sich ziehen.'],
    ['auf-seite-drehen', 'Auf die Seite drehen', 'im Bett', 'ruecken', 'liegen', 'ohne', 'Rückenlage. Das Bein auf der Gegenseite anstellen und den Arm quer über die Brust legen. Knie und Schulter gemeinsam zur Seite drehen, mit der Hand vor der Brust abstützen. Langsam zurück in die Rückenlage.'],
    ['nach-oben-rutschen', 'Im Bett nach oben rutschen', 'im Bett', 'hue ruecken', 'liegen', 'ohne', 'Rückenlage, beide Beine angestellt, Hände neben der Hüfte. Das Becken leicht anheben und sich mit den Füßen ein Stück Richtung Kopfteil schieben. Becken ablegen, wiederholen, bis der Kopf auf dem Kissen liegt.'],
    ['aufsetzen-bettkante', 'Über die Seite an die Bettkante aufsetzen', 'im Bett', 'ruecken', 'liegen', 'ohne', 'Auf die Seite drehen, die Unterschenkel über die Bettkante schieben. Mit dem unteren Unterarm und der oberen Hand von der Matratze wegdrücken und den Oberkörper aufrichten, bis du sicher an der Bettkante sitzt.'],
    ['schneidemesser-bettkante', 'Schneidemesser an der Bettkante', 'Bettkante', 'hand atem', 'sitz', 'ohne', 'Aufrecht an der Bettkante sitzen, Füße fest am Boden, Oberarme am Körper, Unterarme angebeugt, Daumen nach oben. Mit den Händen kleine, schnelle Hackbewegungen auf und ab machen. Nur nach Freigabe durch Arzt oder Therapeut.'],
    ['aufstehen-bettkante', 'Aufstehen von der Bettkante', 'Bettkante', 'hue knie', 'sitz', 'ohne', 'An der Bettkante sitzen, Füße hüftbreit etwas hinter den Knien. Oberkörper nach vorn neigen, mit den Händen abdrücken und aufstehen. Kurz stehen, dann langsam wieder hinsetzen. Nur nach Freigabe durch Arzt oder Therapeut.'],
    ['wade-dehnen-handtuch-bett', 'Wade dehnen mit Handtuch im Bett', 'im Bett, Handtuch', 'fuss', 'sitz', 'ohne', 'Langsitz im Bett, Rücken angelehnt, Beine gestreckt. Ein Handtuch um den Vorfuß legen und die Fußspitze damit zu dir ziehen, das Knie bleibt gestreckt. 30 Sekunden halten.'],
    ['kurzfuss-band', 'Kurzfuß gegen den Bandzug', 'barfuß, langes Loopband, Tischbein', 'fuss', 'stand', 'band', 'Loopband an einem Tischbein auf der Innenseite befestigen. Die Schlaufe hinten tief um das Fersenbein legen, beide Stränge außen um den Knöchel nach vorn und quer über das Sprunggelenk zur Innenseite führen (einer knapp über dem Knöchel, einer darunter). Gegen den Zug das Fußgewölbe anheben, Zehen bleiben lang am Boden. Kurz halten, lösen.'],
    ['einbeinstand-tippen-band', 'Einbeinstand mit Tippen, Bandzug', 'barfuß, langes Loopband, Tischbein', 'fuss gg', 'stand', 'band', 'Band wie beim Kurzfuß anlegen, auf dem Bein mit dem Band stehen. Mit dem freien Fuß weit nach vorn und schräg außen tippen und zurück. Das Standknie bleibt über dem Fuß, das Gewölbe sinkt nicht ein.'],
    ['zehenstand-flasche-band', 'Zehenstand halten, Flasche um den Körper', 'barfuß, langes Loopband, Wasserflasche', 'fuss gg', 'stand', 'band', 'Band wie beim Kurzfuß anlegen, einbeinig in den Zehenstand gehen und halten. Dabei eine Wasserflasche um den Körper herum von einer Hand in die andere reichen. Die Ferse bleibt oben, der Knöchel kippt nicht nach innen.'],
    ['wadenheben-stufe-band', 'Wadenheben einbeinig an der Stufe, Bandzug', 'barfuß, langes Loopband, Stufe', 'fuss', 'stand', 'band', 'Band wie beim Kurzfuß anlegen, mit dem Vorfuß auf die Stufenkante stellen, eine Hand an der Wand. Einbeinig hoch auf den Ballen und langsam wieder absenken. Der Knöchel bleibt gerade.'],
    ['stufe-abwaerts-band', 'Stufe abwärts mit Bandzug', 'barfuß, langes Loopband, Stufe', 'fuss knie', 'stand', 'band', 'Band wie beim Kurzfuß anlegen, mit diesem Fuß auf der Stufe stehen. Das Knie langsam beugen und den anderen Fuß vor der Stufe absenken, bis die Ferse fast den Boden berührt. Knie über dem zweiten Zeh, Gewölbe bleibt stehen.'],
    ['fuss-innen-band', 'Fuß nach innen drehen gegen das Band', 'Stuhl, Theraband', 'fuss', 'sitz', 'band', 'Aufrecht sitzen, das Band außen neben dem Fuß befestigen und um den Vorfuß legen. Die Fußspitze gegen das Band nach innen und leicht nach oben drehen, die Ferse bleibt am Boden. Langsam zurück.'],
    ['handgelenk-strecken-band', 'Handgelenk strecken gegen das Band', 'Tisch, Loopband, Tennisball', 'hand', 'sitz', 'band', 'Am Tisch sitzen, der Ellenbogen steht auf dem Tisch, der Unterarm senkrecht, Handfläche nach vorn. Das Band liegt hinten um die Ellenbogenspitze, kreuzt sich über dem Ellenbogen und liegt oben um den Ball in der Faust. Aus der Beugung das Handgelenk langsam nach hinten strecken, noch langsamer zurück. Der Unterarm bleibt senkrecht.'],
    ['unterarm-aussen-band', 'Unterarm nach außen drehen gegen das Band', 'Tisch, Loopband, Tennisball', 'hand', 'sitz', 'band', 'Unterarm flach auf dem Tisch, Ellenbogen am Körper, Handfläche nach unten. Das Band ist um den Ball gewickelt, kommt an der Kleinfingerseite aus der Faust und liegt um die Tischecke. Die Handfläche gegen den Zug nach oben drehen, langsam zurück. Der Ellenbogen bleibt liegen.'],
    ['unterarm-innen-stab-band', 'Unterarm nach innen drehen mit Stab und Band', 'Tisch, Loopband, Kochlöffel oder kurzer Stab', 'hand', 'sitz', 'band', 'Unterarm auf dem Tisch, Daumen oben, den Stab am unteren Ende senkrecht halten. Das Band liegt als Schlaufe um den Ellenbogen, beide Stränge laufen zum oberen Stabende. Den Stab langsam nach innen kippen, bis die Handfläche zum Tisch zeigt, langsam zurück. Je höher das Band am Stab sitzt, desto schwerer.'],
    ['serratus-push-wand', 'Serratus-Push an der Wand', 'Wand', 'schulter', 'stand', 'ohne', 'Eine knappe Armlänge vor der Wand stehen, die Hände auf Schulterhöhe an die Wand, die Arme bleiben gestreckt. Die Brust zwischen den Schultern etwas zur Wand sinken lassen, dann die Wand wegdrücken, bis die Schulterblätter nach vorn gleiten und der obere Rücken leicht rund wird. Die Ellenbogen bleiben gerade.'],
    ['serratus-push-unterarmstuetz', 'Serratus-Push im Unterarmstütz', 'Matte', 'schulter ruecken', 'liegen', 'ohne', 'Unterarmstütz auf den Fußspitzen, die Ellenbogen unter den Schultern, der Körper in einer Linie. Die Brust zwischen den Schultern sinken lassen, dann die Unterarme in den Boden drücken, bis der obere Rücken rund wird. Becken und Beine bleiben in Linie.'],
    ['loop-armheben-sitz', 'Arme heben mit Loopband im Sitz', 'Stuhl, Mini-Loopband', 'schulter', 'sitz', 'band', 'Aufrecht sitzen, das Loopband um beide Handgelenke. Die Ellenbogen 90° gebeugt am Körper, die Unterarme zeigen nach vorn. Die Hände nach außen gegen das Band drücken und so halten. Dann beide Oberarme nach vorn heben, bis sie waagerecht stehen, die Unterarme zeigen nach oben. Langsam zurück, die Spannung im Band bleibt.'],
  ];
  const KAT = K.map(([id, n, z, r, p, h, t]) => ({ id, n, z, r: r.split(' '), p, h, t }));
  const BY = Object.fromEntries(KAT.map((x) => [x.id, x]));
  const REG = [['hue', 'Hüfte'], ['knie', 'Knie'], ['fuss', 'Fuß'], ['ruecken', 'Rücken'], ['hws', 'HWS'], ['schulter', 'Schulter'], ['hand', 'Ellenbogen/Hand'], ['gg', 'Gleichgewicht'], ['atem', 'Atmung'], ['kiefer', 'Kiefer']];
  const POS = [['liegen', 'Liegen'], ['vierf', 'Vierfüßler'], ['sitz', 'Sitz'], ['stand', 'Stand']];
  const HM = [['ohne', 'ohne'], ['band', 'Band'], ['ball', 'Ball'], ['hantel', 'Hantel'], ['stab', 'Stab']];
  const SER = [1, 2, 3], WDH = [8, 10, 12, 15, 20];
  const VOR = {
    hue: ['bruecke', 'seitlage-abspreizen', 'bein-abspreizen', 'aufstehen-stuhl', 'muschel-loopband', 'hueftstreckung-stand'],
    knie: ['kniestreckung-sitz', 'quadrizeps-rolle', 'mini-kniebeuge', 'stufe-hoch', 'fersenschub', 'kniestreckung-band', 'wandsitz'],
    fuss: ['zehenstand', 'einbeinstand', 'fusswippe', 'wadendehnung-wand', 'sprunggelenk-band', 'kurzfuss'],
    ruecken: ['becken-kippen', 'knie-brust', 'katzenbuckel', 'offenes-buch', 'bws-ball', 'hochdruecken-bauchlage'],
    hws: ['kinn-einziehen', 'kopfnicken', 'trapez-dehnung', 'levator-dehnung', 'nacken-halten'],
    hand: ['unterarm-drehen', 'faust', 'ball-druecken', 'dehnung-unterarm-strecker', 'handgelenk-senken'],
    kiefer: ['kiefer-ruhelage', 'oeffnen-zunge-gaumen', 'isometrisch-oeffnen', 'masseter-lockern', 'kinn-einziehen'],
    atem: ['lippenbremse', 'kutschersitz', 'bauchatmung', 'flankenatmung', 'huffing-kissen'],
    gg: ['einbeinstand', 'tandemstand', 'gewichtsverlagerung', 'tandemgang', 'hindernis-steigen', 'einbeinstand-kissen'],
    schulter: ['pendeln', 'tisch-gleiten', 'wand-hochwandern', 'stab-rueckenlage', 'aussenrotation-stab']
  };
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  // Nahaufnahme, wie das Hilfsmittel angelegt wird (eine für mehrere Übungen)
  const NAH = { 'kurzfuss-band': 'band-steigbuegel', 'einbeinstand-tippen-band': 'band-steigbuegel', 'zehenstand-flasche-band': 'band-steigbuegel', 'wadenheben-stufe-band': 'band-steigbuegel', 'stufe-abwaerts-band': 'band-steigbuegel', 'handgelenk-strecken-band': 'band-ellenbogen-ball', 'unterarm-aussen-band': 'band-ball-tischecke', 'unterarm-innen-stab-band': 'band-ellenbogen-stab' };
  const NAHTXT = { 'band-steigbuegel': 'So legst du das Band an: Die Schlaufe liegt hinten tief um das Fersenbein. Beide Stränge laufen außen um den Knöchel nach vorn und quer über das Sprunggelenk, einer knapp über dem Knöchel, einer darunter, und von dort gespannt zur Innenseite. Das Band zieht den Fuß nach innen, du hältst mit dem Gewölbe dagegen', 'band-ellenbogen-ball': 'So legst du das Band an: Ein Ende der Schlaufe liegt hinten um die Ellenbogenspitze. Beide Stränge kreuzen sich über dem Ellenbogen und laufen an der Handflächenseite des Unterarms nach oben. Das andere Ende liegt um den Ball in der Faust. Auf dem Handrücken liegt kein Band', 'band-ball-tischecke': 'So legst du das Band an: Ein Ende der Schlaufe einmal um den Ball wickeln und den Ball in die Faust nehmen. Das Band kommt an der Kleinfingerseite aus der Faust und läuft flach an der Tischkante entlang. Das andere Ende liegt um die Tischecke auf der Seite des Übungsarms', 'band-ellenbogen-stab': 'So legst du das Band an: Die Schlaufe liegt um den Ellenbogen. Beide Stränge laufen schräg nach oben zum oberen Ende des Stabs und liegen dort um den Stab. Je höher das Band am Stab sitzt, desto schwerer wird die Übung' };
  const nahBild = (n) => window.HA_BILD?.[`nah-${n}`] || `heimuebungen/heim-nah-${n}.webp`;
  const bild = (id, s) => window.HA_BILD?.[`${id}-${s}`] || `heimuebungen/heim-${id}-${s}.webp`;
  const dos = (x) => `${x.s} × ${x.w}`;
  const liste = (prog) => (prog ?? []).filter((x) => BY[x.id]).map((x) => `${BY[x.id].n} ${dos(x)}${x.h ? ` (${x.h})` : ''}`);
  // Kleiner Clip (Start → Ende → Start, 4 s) für die Kacheln im Fenster „Übung hinzufügen“
  const clip = (id) => window.HA_CLIP?.[id] || `heimuebungen/clip-${id}.mp4`;
  const clipKachel = (id) => `<div class="ha-paar hc"><video muted loop playsinline preload="auto" poster="${bild(id, 'start')}" src="${clip(id)}" aria-hidden="true"></video></div>`;
  const paarZwei = (id) => `<div class="ha-paar"><img src="${bild(id, 'start')}" alt="" loading="lazy"><img src="${bild(id, 'ende')}" alt="" loading="lazy"></div>`;
  // Ein Bild, das langsam zwischen Start und Ende wechselt (Druck nutzt paarZwei)
  const paar = (id) => window.HA_EIN !== false
    ? `<div class="ha-paar hw"><img src="${bild(id, 'start')}" alt="" loading="lazy"><img class="hw-e" src="${bild(id, 'ende')}" alt="" loading="lazy"><span class="hw-l" aria-hidden="true"><i>Start</i><i>Ende</i></span></div>`
    : `<div class="ha-paar"><img src="${bild(id, 'start')}" alt="" loading="lazy"><img src="${bild(id, 'ende')}" alt="" loading="lazy"></div>`;

  // Regionen aus dem Erstbefund des Patienten (für Vorschläge)
  function regionen(P) {
    const out = [];
    for (const st of P?.erstbefund?.stellen ?? []) {
      const r = String(st.region ?? st.name ?? '').toUpperCase();
      const k = /(KIEFER|TMJ)/.test(r) ? 'kiefer' : /(HWS|HALS|NACKEN)/.test(r) ? 'hws' : /(ELLENBOGEN|HANDGELENK|HAND|FINGER|DAUMEN)/.test(r) ? 'hand' : /H(Ü|UE)FT/.test(r) ? 'hue' : /KNIE/.test(r) ? 'knie' : /(SPRUNG|FU(SS|ß)|ZEH|OSG|USG)/.test(r) ? 'fuss' : /(LWS|BWS|WIRBEL|R(Ü|UE)CK|ISG|BECKEN)/.test(r) ? 'ruecken' : /SCHULTER/.test(r) ? 'schulter' : null;
      if (k && !out.includes(k)) out.push(k);
    }
    const d = String(P?.erstbefund?.diagnose ?? '').toUpperCase();
    if (/(SCHWINDEL|STURZ|GLEICHGEWICHT|GANGUNSICHER|ATAXIE|POLYNEURO|PARKINSON)/.test(d) && !out.includes('gg')) out.push('gg');
    if (/(CMD|KIEFER|KRANIOMAND|CRANIOMAND|TMJ|TMD|BRUX)/.test(d) && !out.includes('kiefer')) out.push('kiefer');
    if (/(COPD|ASTHMA|LUNGE|PNEUMO|EMPHYSEM|BRONCH|ATEM|DYSPNO|MUKOVISZ|THORAKOTOM|STERNOTOM|BYPASS)/.test(d) && !out.includes('atem')) out.push('atem');
    return out;
  }
  function letztes(P, o) {
    const E = (P?.verlauf?.einheiten ?? []).filter((e) => e !== o && e.id !== o?.id && e.va?.haProg?.length);
    E.sort((a, b) => String(b.datum ?? '').localeCompare(String(a.datum ?? '')));
    return E[0] ? JSON.parse(JSON.stringify(E[0].va.haProg)) : null;
  }


  // ---------- Vorschlag: Heimübung aus den Übungen der Therapie (Kurz-Doku) ----------
  const NORM = (s) => String(s ?? '').toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss');
  const TAGS = [
    ['habd', /abdukt|abspreiz|seitschritt|side ?steps?|seitwaerts gehen|muschel|clam|monster ?walk/],
    ['hext', /hueft\w*streck|hueft\w*extens|extensoren|bruecke|bridge|gesaess|glute|hip ?thrust|kreuzheben|deadlift|kickback|bein nach hinten|beinpresse|kniebeuge|squat|lunge|ausfallschritt|step-?up|stufe hoch|aufstehen/],
    ['hadd', /addukt/],
    ['hflex', /hueftbeug\w*(?! dehn)|knie heben|marsch|hueft\w*flex/],
    ['kext', /quadri|kniestreck|beinpresse|kniebeuge|squat|lunge|ausfallschritt|step-?(up|down)|stufe|aufstehen|wandsitz|beinstrecker/],
    ['kflex', /ischio|kniebeugung|beinbeuger|leg ?curl|ferse zum po/],
    ['wade', /wade|zehenstand|fersenheben|plantarflex|triceps surae/],
    ['fuss', /kurzfuss|short foot|zehen\b|zehen |fusssohle|fussbinnen|fussgewoelbe/],
    ['gg', /einbein|gleichgewicht|tandem|balance|propriozep|kissen|wackel/],
    ['rumpf', /rumpf|dead ?bug|stuetz|plank|pallof|antirotation|bauchmusk/],
    ['rot', /rotation|rumpfdreh|offenes buch/],
    ['sar', /aussenrot/],
    ['skap', /rudern|\brow\b|latzieh|latzug|schulterblatt|skapula|reverse fly/],
    ['shoch', /seitheben|ueberkopf|arm heben|wand-?slides|unterarme an der wand|pnf|diagonale|schulterpresse|frontheben/],
    ['hws', /\bhws\b|nacken|kinn|halswirbel/],
    ['hand', /ellenbogen|handgelenk|unterarm|bizeps|trizeps|epicond|greif/]
  ];
  const tagsVon = (txt) => { const t = NORM(txt), t2 = t.replace(/(aussen|innen)rotation/g, ''); return TAGS.filter(([k, r]) => r.test(k === 'rot' ? t2 : t)).map(([k]) => k); };
  const POSRE = [['vierf', /vierfuess/], ['liegen', /liegen|rueckenlage|bauchlage|seitlage|bruecke|bridge|matte|am bett/], ['sitz', /sitz|beinpresse|stuhl|beinstrecker|beinbeuger/], ['stand', /stand|stehen|seitschritt|side ?step|kniebeuge|squat|lunge|ausfallschritt|step|stufe|gehen|zehenstand|wadenheben|einbein|kreuzheben|kabelzug|zugmaschine|monster|an der wand|an der treppe/]];
  const posVon = (txt) => { const t = NORM(txt); const h = POSRE.find(([, r]) => r.test(t)); return h ? h[0] : null; };
  // feste Zuordnung für die wichtigsten Heimübungen, sonst aus Name und Text
  const MV = {
    'bruecke': 'hext', 'bruecke-einbeinig': 'hext', 'seitlage-abspreizen': 'habd', 'muschel-loopband': 'habd sar', 'bauchlage-hueftstreckung': 'hext',
    'fersenschub': 'kflex hflex', 'quadrizeps-rolle': 'kext', 'gestrecktes-bein-heben': 'hflex kext', 'bein-gleiten': 'habd', 'aufstehen-stuhl': 'kext hext',
    'kniestreckung-sitz': 'kext', 'kniebeugung-sitz': 'kflex', 'abduktion-sitz-loopband': 'habd', 'adduktion-ball': 'hadd', 'bein-abspreizen': 'habd',
    'knieheben-fuss-hoch': 'hflex', 'ferse-zum-po': 'kflex', 'hueftstreckung-stand': 'hext', 'seitschritte-loopband': 'habd', 'mini-kniebeuge': 'kext hext',
    'stufe-hoch': 'kext hext', 'stufe-abwaerts': 'kext', 'einbeinstand': 'gg habd', 'vierfuessler-diagonal': 'hext rumpf', 'wandsitz': 'kext',
    'kniestreckung-band': 'kext', 'ausfallschritt': 'kext hext', 'tandemstand': 'gg', 'einbeinstand-kissen': 'gg habd', 'gewichtsverlagerung': 'gg habd',
    'seitwaerts-gehen': 'habd gg', 'seitstuetz-knie': 'habd rumpf', 'zehenstand': 'wade', 'wadenheben-exzentrisch': 'wade', 'fersenheben-sitz': 'wade',
    'zehenstand-ball': 'wade', 'kurzfuss': 'fuss', 'kurzfuss-knie-vor': 'fuss kext', 'zehen-ball-greifen': 'fuss', 'fuss-ueber-ball': 'fuss gg',
    'ball-rollen-fusssohle': 'fuss', 'fuss-beugen-sitz': 'wade', 'rumpfrotation-diagonale-sitz': 'rot shoch',
    'fersenschub-bett': 'kflex hflex', 'knie-fallen-bett': 'hadd habd', 'knie-loopband-bett': 'habd', 'bruecke-bett': 'hext',
    'arme-heben-bett': 'shoch', 'beinpresse-band-bett': 'kext hext', 'wadenpresse-band-bett': 'wade', 'nach-oben-rutschen': 'hext', 'aufsetzen-bettkante': 'rumpf', 'schneidemesser-bettkante': 'hand', 'aufstehen-bettkante': 'kext hext', 'kurzfuss-band': 'fuss', 'einbeinstand-tippen-band': 'fuss gg', 'zehenstand-flasche-band': 'wade gg', 'wadenheben-stufe-band': 'wade', 'stufe-abwaerts-band': 'kext fuss', 'fuss-innen-band': 'fuss', 'serratus-push-wand': 'skap', 'serratus-push-unterarmstuetz': 'skap rumpf', 'loop-armheben-sitz': 'sar shoch'
  };
  const DEHN = /dehn|dehnlage|stretch/;
  const heimTags = (x) => MV[x.id] ? MV[x.id].split(' ') : (DEHN.test(NORM(x.n)) ? [] : tagsVon(x.n + ' ' + x.z));
  const POSWORT = { stand: 'im Stand', sitz: 'im Sitz', liegen: 'im Liegen', vierf: 'im Vierfüßler' };
  // ueb: [{n: Name, t: Zusatztext}] aus der Kurz-Doku (Katalog, eigene Übungen, KGG)
  function vorschlaege(ueb, prog, n = 3) {
    const hat = new Set((prog ?? []).map((x) => x.id));
    const T = (ueb ?? []).map((u) => ({ n: u.n, tags: tagsVon(u.n + ' ' + (u.t ?? '')), pos: posVon(u.n + ' ' + (u.t ?? '')), band: /loop|band|theraband|kabel/.test(NORM(u.n + ' ' + (u.t ?? ''))) })).filter((u) => u.tags.length).flatMap((u) => u.tags.map((t) => ({ ...u, tags: [t] })));
    if (!T.length) return [];
    const kand = KAT.filter((x) => !hat.has(x.id)).map((x) => ({ x, tg: heimTags(x) })).filter((k) => k.tg.length);
    const wertung = (u, k) => { const ov = u.tags.filter((t) => k.tg.includes(t)).length; if (!ov) return 0; return ov * 3 + (u.pos && u.pos === k.x.p ? 4 : 0) + (u.band && k.x.h === 'band' ? 1 : 0) - (k.tg.length - ov) * 0.5; };
    const raus = [], genommen = new Set();
    // erst je Therapieübung die beste, dann nach Gesamtwertung auffüllen
    for (let runde = 0; raus.length < n && runde < n; runde++) {
      for (const u of T) {
        if (raus.length >= n) break;
        let best = null, bw = 0;
        for (const k of kand) { if (genommen.has(k.x.id)) continue; const w = wertung(u, k); if (w > bw) { bw = w; best = k; } }
        if (best) { genommen.add(best.x.id); raus.push({ id: best.x.id, grund: u.n + (u.pos && u.pos === best.x.p ? ' ' + POSWORT[u.pos] : '') }); }
      }
    }
    return raus;
  }
  const vorBlock = (opt) => {
    const V = vorschlaege(opt.ueb, opt.prog);
    if (!V.length) return '';
    return `<div class="ha-tv"><div class="ha-tv-k"><b>Passt als Heimübung</b><small>Vorschlag zu den Übungen von heute</small></div>${V.map((v) => `<div class="ha-tv-z"><img src="${bild(v.id, 'ende')}" alt=""><span><b>${esc(BY[v.id].n)}</b><small>weil: ${esc(v.grund)}</small></span><button type="button" class="ha-tv-plus" data-a="vor" data-id="${v.id}" aria-label="${esc(BY[v.id].n)} übernehmen">${IC.plus}</button></div>`).join('')}${V.length > 1 ? `<button type="button" class="ha-kn zwei ha-tv-alle" data-a="voralle" data-ids="${V.map((v) => v.id).join(' ')}">Alle ${V.length} übernehmen</button>` : ''}</div>`;
  };

  // ---------- Karte (Verlauf, Kurz-Doku, Mehr) ----------
  function karte(el, opt) {
    const prog = opt.prog ?? [];
    el.className = 'ha-karte' + (opt.kompakt ? ' kompakt' : '');
    let html;
    if (opt.kompakt) {
      html = prog.length
        ? `<div class="ha-stapel">${prog.slice(0, 3).map((x) => `<img src="${bild(x.id, 'ende')}" alt="">`).join('')}</div><div class="ha-k-txt"><b>${prog.length} ${prog.length === 1 ? 'Übung' : 'Übungen'}</b><small>${esc(liste(prog).slice(0, 2).join(', '))}${prog.length > 2 ? ' …' : ''}</small></div><button type="button" class="ha-kn zwei" data-a="neu">Bearbeiten</button><button type="button" class="ha-kn zwei" data-a="druck">Blatt</button>`
        : `<div class="ha-k-txt"><b>Noch keine Übungen</b><small>Mit Bildern auswählen</small></div><button type="button" class="ha-kn" data-a="neu">+ Übung</button>`;
    } else {
      const offen = el.__offen;
      html = `<div class="ha-kopf"><b>Hausaufgaben${prog.length ? ' · ' + prog.length + (prog.length === 1 ? ' Übung' : ' Übungen') : ''}</b><button type="button" class="ha-kn zwei" data-a="neu">+ Übung</button></div>`
        + (prog.length ? `<div class="ha-raster">${prog.map((x, i) => { const k = BY[x.id]; if (!k) return ''; return `<div class="ha-ue${offen === i ? ' auf' : ''}"><button type="button" class="ha-ue-k" data-a="auf" data-i="${i}">${paar(x.id)}<span class="ha-ue-n">${esc(k.n)}<b class="ha-pille">${dos(x)} ✎</b></span></button>${offen === i ? `<div class="ha-dos">${stepper(x, i)}<button type="button" class="ha-weg" data-a="weg" data-i="${i}">Übung entfernen</button></div>` : ''}</div>` }).join('')}</div>`
          : `<p class="ha-leer">Noch keine Übungen. Über „+ Übung“ nach Region auswählen${opt.P && regionen(opt.P).length ? ', Vorschläge passend zum Befund stehen oben' : ''}.</p>`)
        + (prog.length ? `<div class="ha-fuss"><button type="button" class="ha-kn" data-a="druck">Blatt zeigen</button><button type="button" class="ha-kn zwei" data-a="druck">Drucken / Teilen</button></div>` : '');
    }
    html += vorBlock(opt);
    if (el.__html !== html) { el.innerHTML = html; el.__html = html; }
    el.__opt = opt;
    el.onclick = (ev) => {
      const b = ev.target.closest('[data-a]'); if (!b) return;
      const o = el.__opt, pr = o.prog ?? [];
      const a = b.dataset.a, i = +b.dataset.i, p = JSON.parse(JSON.stringify(pr));
      if (a === 'neu') return blatt(o);
      if (a === 'vor' || a === 'voralle') { const ids = a === 'vor' ? [b.dataset.id] : b.dataset.ids.split(' '); for (const id of ids) if (BY[id] && !p.some((x) => x.id === id)) p.push({ id, s: 3, w: 10 }); el.__html = null; o.prog = p; karte(el, o); return o.setze(p); }
      if (a === 'druck') return druck(pr);
      if (a === 'auf') { el.__offen = el.__offen === i ? null : i; return karte(el, o); }
      if (/^[sw][+-]$/.test(a)) { const k = a[0]; p[i][k] = Math.max(1, Math.min(k === 's' ? 10 : 99, p[i][k] + (a[1] === '+' ? 1 : -1))); }
      if (a === 'weg') { p.splice(i, 1); el.__offen = null; }
      o.prog = p; karte(el, o);
      o.setze(p);
    };
    el.onchange = (ev) => {
      const f = ev.target.closest('.hq-zahl'); if (!f) return;
      const o = el.__opt, p = JSON.parse(JSON.stringify(o.prog ?? [])), k = f.dataset.k, n = parseInt(f.value, 10);
      if (n >= 1) p[+f.dataset.i][k] = Math.min(k === 's' ? 10 : 99, n);
      el.__html = null; o.prog = p; karte(el, o); o.setze(p);
    };
    el.onfocusin = (ev) => { if (ev.target.classList?.contains('hq-zahl')) ev.target.select(); };
    el.onkeydown = (ev) => { if (ev.key === 'Enter' && ev.target.classList?.contains('hq-zahl')) ev.target.blur(); };
  }

  // ---------- Blatt von unten: Übung hinzufügen ----------
  let ST = { reg: null, pos: null, hm: null, q: '' };
  function blatt(opt) {
    let prog = JSON.parse(JSON.stringify(opt.prog ?? []));
    const regs = regionen(opt.P);
    if (!ST.reg) ST.reg = regs[0] ?? 'hue';
    const huelle = document.createElement('div');
    huelle.className = 'ha-ueber';
    document.body.append(huelle);
    const zu = () => { huelle.remove(); document.removeEventListener('keydown', taste) };
    const taste = (e) => { if (e.key === 'Escape') zu() };
    document.addEventListener('keydown', taste);
    const hat = (id) => prog.some((x) => x.id === id);
    const dv = 'd2';
    const kachel = (k) => `<div class="ha-ka hz-ka${hat(k.id) ? ' drin' : ''}${ST.info === k.id ? ' offen' : ''}"><button type="button" class="hz-auf" data-a="info" data-id="${k.id}" aria-expanded="${ST.info === k.id}" aria-label="Details zu ${esc(k.n)}">${clipKachel(k.id)}<span class="ha-ue-n">${esc(k.n)}<small>${esc(k.z)}</small></span></button><button type="button" class="hz-play" aria-label="Bewegung von ${esc(k.n)} abspielen"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z"/></svg></button><button type="button" class="hz-plus" data-a="add" data-id="${k.id}" aria-label="${hat(k.id) ? 'Aus dem Programm nehmen' : 'Zum Programm'}">${hat(k.id) ? '✓' : '+'}</button></div>`;
    const regName = (r) => REG.find((x) => x[0] === r)?.[1] ?? r;
    const detail = (k, cls, nav) => { const d = hat(k.id), inV = VORL.filter((t) => t.ids.includes(k.id)).map((t) => t.n);
      return `<section class="hz ${cls}" aria-label="${esc(k.n)}">
<div class="hz-kopf">${nav ?? ''}<div class="hz-tt"><h4>${esc(k.n)}</h4><small>${esc(k.z)}</small></div><button type="button" class="hz-zu" data-a="info" data-id="${k.id}" aria-label="Details schließen">${IC.weg}</button></div>
<div class="hz-bilder"><figure><img src="${bild(k.id, 'start')}" alt="Ausgangsstellung"><figcaption>Start</figcaption></figure><figure><img src="${bild(k.id, 'ende')}" alt="Endstellung"><figcaption>Ende</figcaption></figure>${NAH[k.id] ? `<figure class="hz-nah"><div class="hz-nah-b"><img src="${nahBild(NAH[k.id])}" alt="Nahaufnahme: so wird das Band angelegt"><figcaption>Nahaufnahme</figcaption></div><p><b>So legst du das Band an</b>${esc(NAHTXT[NAH[k.id]].replace(/^So legst du das Band an: /, ''))}.</p></figure>` : ''}</div>
<div class="hz-film" aria-hidden="true"><img src="${bild(k.id, 'start')}" alt=""><img class="hz-film-e" src="${bild(k.id, 'ende')}" alt=""><span class="hz-film-l"><i>Start</i><i>Ende</i></span></div>
<div class="hz-meta"><span>${k.r.map(regName).join(', ')}</span><span>${esc(POS.find((x) => x[0] === k.p)?.[1] ?? '')}</span><span>${k.h === 'ohne' ? 'ohne Hilfsmittel' : esc(HM.find((x) => x[0] === k.h)?.[1] ?? '')}</span></div>
<div class="hz-txt"><h5>So geht’s</h5><p>${esc(k.t)}</p></div>
<dl class="hz-dl"><div><dt>Startdosis</dt><dd>3 × 10</dd></div>${inV.length ? `<div><dt>In Vorlagen</dt><dd>${inV.map(esc).join(', ')}</dd></div>` : ''}</dl>
<button type="button" class="hz-los${d ? ' drin' : ''}" data-a="add" data-id="${k.id}">${d ? IC.hak + 'Im Programm · entfernen' : IC.plus + 'Zum Programm'}</button>
</section>`; };

    const male = () => {
      const sc = huelle.querySelector('.ha-sheet')?.scrollTop ?? 0;
      setTimeout(() => { const sh = huelle.querySelector('.ha-sheet'); if (sh) sh.scrollTop = sc; });
      const q = ST.q.trim().toLowerCase();
      let L = KAT.filter((k) => q ? (k.n + ' ' + k.z).toLowerCase().includes(q) : k.r.includes(ST.reg));
      if (!q && ST.pos) L = L.filter((k) => k.p === ST.pos);
      if (!q && ST.hm) L = L.filter((k) => k.h === ST.hm);
      const vor = q ? [] : regs.flatMap((r) => VOR[r] ?? []).filter((id, i, a) => a.indexOf(id) === i && !hat(id)).slice(0, 3).map((id) => BY[id]);
      const chip = (gr, [k, t]) => `<button type="button" class="ha-chip" aria-pressed="${ST[gr] === k}" data-a="f" data-g="${gr}" data-v="${k}">${t}</button>`;
      const bv = 'b2';
      const nReg = (r) => KAT.filter((k) => k.r.includes(r)).length;
      const such = `<label class="hx-such">${IC.lupe}<input class="ha-such" type="search" placeholder="Übung suchen" aria-label="Übung suchen" value="${esc(ST.q)}"></label>`;
      const tabs = `<div class="hx-tabs" role="tablist">${REG.map(([k, t]) => `<button type="button" role="tab" aria-selected="${!q && ST.reg === k}" data-a="f" data-g="reg" data-v="${k}">${t}<small>${nReg(k)}</small></button>`).join('')}</div>`;
      const fAnz = (ST.pos ? 1 : 0) + (ST.hm ? 1 : 0);
      const fertig = `<button type="button" class="hx-fertig" data-a="zu">Fertig${prog.length ? `<span>${prog.length}</span>` : ''}</button>`;
      const titel = q ? `${L.length} Treffer für „${esc(ST.q.trim())}“` : `${esc(REG.find((x) => x[0] === ST.reg)?.[1])}${ST.pos ? ' · ' + POS.find((x) => x[0] === ST.pos)[1] : ''}${ST.hm ? ' · ' + HM.find((x) => x[0] === ST.hm)[1] : ''} · ${L.length} ${L.length === 1 ? 'Übung' : 'Übungen'}`;
      const leer = '<p class="ha-leer">Keine Übung passt. Filter lösen oder anders suchen.</p>';
      const vorBox = vor.length ? `<section class="hx-vor"><h5>Passend zum Befund</h5><div class="ha-liste">${vor.map(kachel).join('')}</div></section>` : '';
      let inhalt = '';
      {
        const grp = (t, gr, L2) => `<div class="hx2-gr"><h5>${t}</h5><div>${L2.map((r) => chip(gr, r)).join('')}</div></div>`;
        const nav = `<div class="hx2-nav" role="navigation">${REG.map(([k, t]) => `<button type="button" aria-current="${!q && ST.reg === k}" data-a="f" data-g="reg" data-v="${k}"><span>${t}</span><small>${nReg(k)}</small></button>`).join('')}${grp('Ausgangsstellung', 'pos', POS)}${grp("Hilfsmittel", "hm", HM)}</div>`;
        const stapel = prog.slice(0, 4).map((x) => BY[x.id] ? `<img src="${bild(x.id, 'ende')}" alt="">` : '').join('');
        inhalt = `<div class="hx-kopf"><b>Übung hinzufügen</b><button type="button" class="hx-text" data-a="zu">Schließen</button></div><div class="hx2">${nav}<div class="hx2-rechts">${such}${q ? '' : vorBox}<p class="ha-zahl">${titel}</p><div class="ha-liste">${L.map(kachel).join('') || leer}</div></div></div>${dv === 'd2' && ST.info && BY[ST.info] ? (() => { const i = L.findIndex((x) => x.id === ST.info), vo = L[i - 1], na = L[i + 1]; return `<div class="hz2-dim" data-a="info" data-id="${ST.info}"></div>${detail(BY[ST.info], 'hz2', `<span class="hz2-nav"><button type="button" class="hp-ic" data-a="info2" data-id="${vo?.id ?? ''}"${vo ? '' : ' disabled'} aria-label="Vorherige Übung">${IC.zurueck}</button><button type="button" class="hp-ic hz-vor" data-a="info2" data-id="${na?.id ?? ''}"${na ? '' : ' disabled'} aria-label="Nächste Übung">${IC.zurueck}</button></span>`)}`; })() : ''}<div class="hx2-leiste"><span class="hx2-stapel">${stapel}</span><span class="hx2-n">${prog.length ? `<b>${prog.length}</b> im Programm` : 'Noch keine Übung gewählt'}</span><button type="button" class="hx2-ok" data-a="zu"${prog.length ? '' : ' disabled'}>Fertig</button></div>`;
      }
      huelle.innerHTML = `<div class="ha-dim" data-a="zu"></div><div class="ha-sheet hx hx-${bv} hz-${dv}${ST.info ? ' hz-auf-an' : ''}" role="dialog" aria-label="Übung hinzufügen"><div class="ha-griff"></div>${inhalt}</div>`;
      // Clip läuft nur, solange Maus oder Stift über der Kachel ist; sonst steht das Startbild
      if (!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) huelle.querySelectorAll('.hz-ka').forEach((ka) => {
        const v = ka.querySelector('.hc video'); if (!v) return; v.muted = true;
        const an = () => { v.play?.().catch(() => {}); }, aus = () => { v.pause?.(); try { v.currentTime = 0 } catch { } };
        // nur Maus und Stift: mit dem Finger würde das Antippen zugleich die Details öffnen
        ka.addEventListener('pointerenter', (e) => { if (e.pointerType !== 'touch') an(); }); ka.addEventListener('pointerleave', aus); ka.addEventListener('pointercancel', aus);
        // Abspielknopf (Finger): Clip einmal abspielen, nochmal tippen stoppt
        const pk = ka.querySelector('.hz-play');
        if (pk) pk.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation();
          if (!v.paused) { aus(); pk.classList.remove('an'); return; }
          v.loop = false; try { v.currentTime = 0 } catch { } an(); pk.classList.add('an');
          v.onended = () => { pk.classList.remove('an'); v.loop = true; try { v.currentTime = 0 } catch { } }; });
      });
      // Detailkarte aus dem verschobenen, scrollenden Fenster lösen, damit sie in der Bildschirmmitte steht
      huelle.querySelectorAll('.ha-sheet .hz2-dim, .ha-sheet .hz2').forEach((x) => huelle.appendChild(x));
      { const sh = huelle.querySelector('.ha-sheet'); if (sh) { sh.scrollTop = sc; requestAnimationFrame(() => { sh.scrollTop = sc; }); } }
      const nv = huelle.querySelector('.hx2-nav'), akt = nv?.querySelector('[aria-current="true"]');
      if (nv && akt && nv.scrollWidth > nv.clientWidth) nv.scrollLeft = akt.offsetLeft - (nv.clientWidth - akt.offsetWidth) / 2;
      const s = huelle.querySelector('.ha-such');
      s.oninput = () => { ST.q = s.value; const pos = s.selectionStart; male(); const n = huelle.querySelector('.ha-such'); n.focus(); try { n.setSelectionRange(pos, pos) } catch { } };
    };
    huelle.onchange = (ev) => {
      const f = ev.target.closest('.hq-zahl'); if (!f) return;
      const k = f.dataset.k, n = parseInt(f.value, 10), i = +f.dataset.i;
      if (n >= 1) prog[i][k] = Math.min(k === 's' ? 10 : 99, n);
      opt.setze(JSON.parse(JSON.stringify(prog))); opt.prog = prog; male();
    };
    huelle.addEventListener('focusin', (ev) => { if (ev.target.classList?.contains('hq-zahl')) ev.target.select(); });
    huelle.addEventListener('keydown', (ev) => { if (ev.key === 'Enter' && ev.target.classList?.contains('hq-zahl')) ev.target.blur(); });
    huelle.onclick = (ev) => {
      const b = ev.target.closest('[data-a]'); if (!b) return;
      const a = b.dataset.a;
      if (a === 'zu') return zu();
      if (a === 'fo') { ST.fOffen = !ST.fOffen; return male(); }
      if (a === 'info') {
        // iPad schickt nach dem Öffnen manchmal einen zweiten Klick hinterher, der auf dem Abdunkler landet: kurz danach nicht schließen
        if (ST.info && Date.now() - (ST.infoAuf || 0) < 500) return;
        ST.info = ST.info === b.dataset.id ? null : b.dataset.id; if (ST.info) ST.infoAuf = Date.now(); return male(); }
      if (a === 'info2') { ST.info = b.dataset.id || ST.info; return male(); }
      if (a === 'f') { const g = b.dataset.g, v = b.dataset.v || null; ST[g] = g === 'reg' ? v : (ST[g] === v ? null : v); if (g === 'reg') { ST.q = ''; } return male(); }
      if (a === 'raus' || /^[sw][+-]$/.test(a)) {
        const i = +b.dataset.i, k = a[0], max = k === 's' ? 10 : 99;
        if (a === 'raus') prog.splice(i, 1); else prog[i][k] = Math.max(1, Math.min(max, prog[i][k] + (a[1] === '+' ? 1 : -1)));
        opt.setze(JSON.parse(JSON.stringify(prog))); opt.prog = prog; return male();
      }
      if (a === 'add') {
        const id = b.dataset.id;
        prog = hat(id) ? prog.filter((x) => x.id !== id) : [...prog, { id, s: 3, w: 10 }];
        opt.setze(JSON.parse(JSON.stringify(prog)));
        opt.prog = prog;
        male();
      }
    };
    male();
  }

  // ---------- Blatt für den Patienten (Druck, PDF, AirDrop über das Teilen-Menü) ----------
  function druck(prog, oft) {
    const d = new Date(), dat = `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}.${d.getFullYear()}`;
    const w = document.createElement('div');
    w.className = 'ha-druck';
    w.innerHTML = `<div class="ha-druck-leiste"><button type="button" class="ha-kn" data-a="p">Drucken / Teilen</button><button type="button" class="ha-kn zwei" data-a="zu">Schließen</button></div>
<div class="ha-a4"><div class="ha-a4-kopf"><div><small>Physiotherapie</small><h1>Ihr Heimprogramm</h1></div><div class="ha-a4-dat">${dat}<br><span>Name: ____________________</span></div></div>
<p class="ha-a4-intro">Bitte üben Sie ${esc(oft || 'täglich')} in Ruhe. Die Bilder zeigen die Ausgangsstellung links und die Endstellung rechts.</p>
${prog.filter((x) => BY[x.id]).map((x, i) => { const k = BY[x.id]; return `<div class="ha-a4-ue"><div class="ha-a4-bild">${paarZwei(x.id)}${NAH[x.id] ? `<div class="ha-a4-nah"><img src="${nahBild(NAH[x.id])}" alt=""><span>So das Band anlegen</span></div>` : ''}</div><div class="ha-a4-txt"><h2>${i + 1}. ${esc(k.n)}</h2><p class="ha-a4-dos">${x.s} Serien × ${x.w} Wiederholungen</p><p>${esc(k.t)}</p>${x.h ? `<p class="ha-a4-hinw">${esc(x.h)}</p>` : ''}<div class="ha-a4-wo">${['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map((t) => `<span>${t}</span>`).join('')}</div></div></div>` }).join('')}
<div class="ha-a4-fuss"><p><b>Sicherheit:</b> Langsam und kontrolliert üben, ruhig weiteratmen. Bei Schwindel oder Unsicherheit eine feste Stütze nutzen.</p><p><b>Schmerz:</b> Leichtes Ziehen ist in Ordnung. Stärkere Schmerzen, die nach dem Üben anhalten, bitte beim nächsten Termin ansprechen.</p></div></div>`;
    document.body.append(w);
    document.body.classList.add('ha-print');
    const zu = () => { w.remove(); document.body.classList.remove('ha-print') };
    w.onclick = (ev) => { const b = ev.target.closest('[data-a]'); if (!b) return; if (b.dataset.a === 'zu') zu(); if (b.dataset.a === 'p') window.print(); };
  }

  // ---------- Mehr › Hausaufgaben (ohne Patient) ----------
  // Vorlagen: eigene Zusammenstellung, Entwurf (fachlich prüfen)
  const VORL = [
    ['Hüft-TEP, frühe Phase', ['bein-gleiten', 'fersenschub', 'quadrizeps-rolle', 'bruecke', 'aufstehen-stuhl']],
    ['Knie-Arthrose', ['kniestreckung-sitz', 'quadrizeps-rolle', 'aufstehen-stuhl', 'mini-kniebeuge', 'stufe-hoch']],
    ['Kreuzschmerz', ['becken-kippen', 'knie-brust', 'katzenbuckel', 'bruecke', 'vierfuessler-diagonal']],
    ['Schulter, eingeschränkte Beweglichkeit', ['pendeln', 'tisch-gleiten', 'wand-hochwandern', 'stab-rueckenlage', 'aussenrotation-stab']],
    ['Gleichgewicht und Sturzvorbeugung', ['aufstehen-stuhl', 'tandemstand', 'einbeinstand', 'seitwaerts-gehen', 'tandemgang', 'zehenstand']],
    ['Gleichgewicht, fortgeschritten', ['einbeinstand-kissen', 'einbeinstand-augen-zu', 'tandemgang-rueckwaerts', 'achterlauf', 'schritte-alle-richtungen', 'hindernis-steigen']],
    ['Schwindel', ['blickstabilisation', 'kopfdrehen-stand', 'gehen-kopfdrehen', 'tandemstand', 'einbeinstand']],
    ['Haltung und Brustwirbelsäule', ['bws-ball', 'rudern-tuer', 'offenes-buch', 'bws-aufrichtung-hantel']],
    ['Tennisellenbogen', ['handgelenk-senken', 'tyler-twist', 'dehnung-unterarm-strecker', 'unterarm-drehen-hantel', 'hammer-heben', 'finger-spreizen-band', 'handgelenk-strecken-band', 'unterarm-aussen-band']],
    ['Golferellenbogen', ['dehnung-unterarm-beuger', 'ball-druecken', 'faust', 'unterarm-drehen-hantel', 'hammer-heben', 'unterarm-innen-stab-band']],
    ['Nackenschmerz', ['kinn-einziehen', 'kopfnicken', 'trapez-dehnung', 'levator-dehnung', 'nacken-halten']],
    ['Kiefer (CMD)', ['kiefer-ruhelage', 'oeffnen-zunge-gaumen', 'oeffnen-finger-gelenk', 'isometrisch-oeffnen', 'masseter-lockern', 'kinn-einziehen']],
    ['Atemnot, COPD', ['lippenbremse', 'kutschersitz', 'torwartstellung', 'abstuetzen-tisch', 'bauchatmung']],
    ['Atmung nach OP', ['flankenatmung', 'huffing-kissen', 'bauchatmung', 'fusspumpe', 'halbmond-dehnlage']],
    ['Achillessehne', ['wadenheben-exzentrisch', 'wadendehnung-wand', 'zehenstand', 'einbeinstand']],
    ['Im Bett (bettlägerig)', ['fusspumpe', 'fersenschub-bett', 'knie-fallen-bett', 'knie-loopband-bett', 'bruecke-bett', 'arme-heben-bett', 'beinpresse-band-bett', 'auf-seite-drehen']],
    ['Achillessehne nach OP, frühe Phase', ['fuss-beugen-sitz', 'fersenheben-sitz', 'kurzfuss-knie-vor', 'fuss-ueber-ball', 'zehen-ball-greifen', 'zehenstand-ball']],
    ['Fersenschmerz (Plantarfasziitis)', ['plantarfaszie-dehnen', 'wadendehnung-wand', 'kurzfuss', 'handtuch-zehen', 'zehenstand']],
    ['Sprunggelenk nach Umknicken', ['fusswippe', 'sprunggelenk-band', 'zehenstand', 'einbeinstand', 'einbeinstand-kissen']],
    ['Ischias', ['nervengleiten-sitz', 'hochdruecken-bauchlage', 'becken-kippen', 'knie-brust', 'katzenbuckel']]
  ].map(([n, ids]) => ({ n, ids: ids.filter((id) => BY[id]) }));
  const IC = {
    lupe: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/></svg>',
    filter: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M7 12h10M10 18h4"/></svg>',
    zurueck: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>',
    haus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z"/></svg>',
    plus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
    blatt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/></svg>',
    teilen: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12M8 7l4-4 4 4"/><path d="M6 11v9h12v-9"/></svg>',
    weiter: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>',
    weg: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    minus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/></svg>',
    hoch: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"/></svg>',
    hak: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    text: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/></svg>',
    stern: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h12v16l-6-4-6 4z"/></svg>'
  };
  let frei = [];
  let oft = 'täglich';
  const OFT = ['täglich', '2× täglich', '3× pro Woche', '5× pro Woche'];
  const EKEY = 'doku-fix-ha-vorlagen';
  const eigene = () => { try { return JSON.parse(localStorage.getItem(EKEY) || '[]').filter((t) => t && Array.isArray(t.ids)).map((t) => ({ ...t, ids: t.ids.filter((id) => BY[id]) })) } catch { return [] } };
  const eigeneSpeichern = (L) => { try { localStorage.setItem(EKEY, JSON.stringify(L.slice(0, 20))) } catch { } };
  const feld = (x, i, k, min, max, wort) => `<div class="hq-st"><button type="button" data-a="${k}-" data-i="${i}" aria-label="${wort} weniger"${x[k] <= min ? ' disabled' : ''}>${IC.minus}</button><label><input class="hq-zahl" type="text" inputmode="numeric" pattern="[0-9]*" maxlength="2" data-k="${k}" data-i="${i}" value="${x[k]}" aria-label="${wort}"><span>${wort}</span></label><button type="button" data-a="${k}+" data-i="${i}" aria-label="${wort} mehr"${x[k] >= max ? ' disabled' : ''}>${IC.plus}</button></div>`;
  const stepper = (x, i) => `<div class="hq-step">${feld(x, i, 's', 1, 10, 'Serien')}${feld(x, i, 'w', 1, 99, 'Wdh.')}</div>`;
  const variante = () => 'c2';
  function panel(el) {
    const v = variante();
    const setze = (p) => { frei = p; male(); };
    const opt = () => ({ prog: frei, setze });
    const zeile = (x, i) => `<li class="hp-z"><img src="${bild(x.id, 'ende')}" alt=""><span class="hp-n">${esc(BY[x.id].n)}<small>${esc(BY[x.id].z)}</small></span><button type="button" class="hp-dos" data-a="dos" data-i="${i}">${dos(x)}</button><button type="button" class="hp-ic" data-a="weg" data-i="${i}" aria-label="Entfernen">${IC.weg}</button></li>`;
    const leiste = () => `<div class="hp-leiste"><span><b>${frei.length}</b> ${frei.length === 1 ? 'Übung' : 'Übungen'}</span><button type="button" class="hp-ic" data-a="leeren" aria-label="Programm leeren"${frei.length ? '' : ' disabled'}>${IC.weg}</button><button type="button" class="hp-kn" data-a="druck"${frei.length ? '' : ' disabled'}>${IC.blatt}Blatt erstellen</button></div>`;
    const vorl = () => `<ul class="hp-vl">${VORL.map((t, i) => `<li><button type="button" data-a="vorlage" data-i="${i}"><span class="hp-stapel">${t.ids.slice(0, 3).map((id) => `<img src="${bild(id, 'ende')}" alt="">`).join('')}</span><span class="hp-n">${esc(t.n)}<small>${t.ids.length} Übungen</small></span><i>${IC.weiter}</i></button></li>`).join('')}</ul>`;
    let html;
    const eig = eigene();
    const mosaik = (ids) => `<span class="hq-mos">${ids.slice(0, 4).map((id) => `<img src="${bild(id, 'ende')}" alt="">`).join('')}</span>`;
    const segs = (x, i) => `<div class="hq-segs"><span class="hq-lab">Serien</span><span></span><span class="hq-lab">Wiederholungen</span><div class="ha-seg">${SER.map((v2) => `<button type="button" aria-pressed="${x.s === v2}" data-a="ds" data-i="${i}" data-v="${v2}">${v2}</button>`).join('')}</div><span class="hq-mal">×</span><div class="ha-seg">${WDH.map((v2) => `<button type="button" aria-pressed="${x.w === v2}" data-a="dw" data-i="${i}" data-v="${v2}">${v2}</button>`).join('')}</div></div>`;
    const leiste2 = () => `<div class="hp-leiste"><span><b>${frei.length}</b> ${frei.length === 1 ? 'Übung' : 'Übungen'}</span><button type="button" class="hp-ic" data-a="leeren" aria-label="Programm leeren"${frei.length ? '' : ' disabled'}>${IC.weg}</button><button type="button" class="hp-kn zwei" data-a="kopie"${frei.length ? '' : ' disabled'}>${el.__kopiert ? IC.hak + 'Kopiert' : IC.text + 'Text'}</button><button type="button" class="hp-kn" data-a="druck"${frei.length ? '' : ' disabled'}>${IC.blatt}Blatt</button></div>`;
    const leer = `<button type="button" class="hp-start" data-a="neu"><span class="hp-start-ic">${IC.plus}</span><span><b>Übungen auswählen</b><small>oder oben eine Vorlage antippen</small></span></button>`;
    const alleV = [...eig.map((t, i) => ({ ...t, eig: i })), ...VORL.map((t, i) => ({ ...t, vi: i }))];
    const vAkt = (t) => t.eig != null ? `data-a="eig" data-i="${t.eig}"` : `data-a="vorlage" data-i="${t.vi}"`;
    const anz = (n) => `${n} ${n === 1 ? 'Übung' : 'Übungen'}`;
    const reihe = (x, i, gross) => `<li class="hy-z${gross ? ' gross' : ''}"><span class="hy-nr">${i + 1}</span><div class="hy-bild">${paar(x.id)}</div><div class="hy-txt"><b>${esc(BY[x.id].n)}</b><small>${esc(BY[x.id].z)}</small>${gross ? `<p>${esc(BY[x.id].t)}</p>` : ''}</div><div class="hy-dos">${stepper(x, i)}</div><div class="hy-akt"><button type="button" class="hp-ic klein" data-a="hoch" data-i="${i}" aria-label="Nach oben"${i ? '' : ' disabled'}>${IC.hoch}</button><button type="button" class="hp-ic klein" data-a="weg" data-i="${i}" aria-label="Entfernen">${IC.weg}</button></div></li>`;
    const merk = frei.length ? `<button type="button" class="hp-link hq-merk" data-a="merken">${IC.stern}Als eigene Vorlage merken</button>` : '';
    const leerY = `<button type="button" class="hy-leer" data-a="neu"><span class="hp-start-ic">${IC.plus}</span><b>Übungen auswählen</b><small>aus ${KAT.length} Übungen mit Bildern, oder eine Vorlage laden</small></button>`;
    const aktionen = `<div class="hy-akts"><button type="button" class="hp-kn zwei" data-a="kopie"${frei.length ? '' : ' disabled'}>${el.__kopiert ? IC.hak + 'Kopiert' : IC.text + 'Text kopieren'}</button><button type="button" class="hp-kn" data-a="druck"${frei.length ? '' : ' disabled'}>${IC.blatt}Blatt erstellen</button></div>`;
    const PRE = [[3, 8], [3, 10], [3, 15]];
    const reihe2 = (x, i) => { const k = BY[x.id], hOffen = el.__hinw === i || x.h; return `<li class="hy-z gross"><span class="hy-nr">${i + 1}</span><div class="hy-bild">${paar(x.id)}</div><div class="hy-txt"><b>${esc(k.n)}</b><small>${esc(k.z)}</small><p>${esc(k.t)}</p></div><div class="hy-dos"><div class="hy-dz">${stepper(x, i)}<div class="hy-pre" role="group" aria-label="Schnellwahl">${PRE.map(([s2, w2]) => `<button type="button" data-a="preset" data-i="${i}" data-v="${s2}x${w2}" aria-pressed="${x.s === s2 && x.w === w2}">${s2} × ${w2}</button>`).join('')}</div></div>${hOffen ? `<div class="hy-hz"><input class="hy-hinw" data-i="${i}" maxlength="140" placeholder="Hinweis für den Patienten, z. B. nur bis zur Schmerzgrenze" value="${esc(x.h || '')}" aria-label="Hinweis für den Patienten"><button type="button" class="hp-ic klein" data-a="hinwweg" data-i="${i}" aria-label="Hinweis entfernen">${IC.weg}</button></div>` : `<button type="button" class="hy-hplus" data-a="hinw" data-i="${i}">${IC.plus}Hinweis für den Patienten</button>`}</div><div class="hy-akt"><button type="button" class="hp-ic klein" data-a="hoch" data-i="${i}" aria-label="Nach oben"${i ? '' : ' disabled'}>${IC.hoch}</button><button type="button" class="hp-ic klein hy-runter" data-a="runter" data-i="${i}" aria-label="Nach unten"${i < frei.length - 1 ? '' : ' disabled'}>${IC.hoch}</button><button type="button" class="hp-ic klein" data-a="weg" data-i="${i}" aria-label="Entfernen">${IC.weg}</button></div></li>`; };
    const merkZ = el.__merken ? `<div class="hy-merk"><input class="hq-in" maxlength="40" placeholder="Name der Vorlage, z. B. Knie nach OP Woche 2" aria-label="Name der Vorlage"><button type="button" class="hp-kn" data-a="speichern">Merken</button><button type="button" class="hp-link" data-a="merkzu">Abbrechen</button></div>` : merk;
    const vKarten = `<div class="hy-vgrid">${alleV.map((t) => `<button type="button" class="hq-vk" ${vAkt(t)}>${mosaik(t.ids)}<b>${esc(t.n)}</b><small>${anz(t.ids.length)}${t.eig != null ? ' · eigene' : ''}</small></button>`).join('')}</div>`;
    html = `<div class="hp hy hy-2">
<div class="hy-top"><div class="hy-zahl"><b>${frei.length}</b><span>${frei.length === 1 ? 'Übung' : 'Übungen'}</span></div>${frei.length ? `<div class="hy-oft" role="group" aria-label="Wie oft üben"><span>Üben</span>${OFT.map((o) => `<button type="button" data-a="oft" data-v="${o}" aria-pressed="${oft === o}">${o}</button>`).join('')}</div>` : '<span class="hy-sp"></span>'}${aktionen}</div>
${frei.length ? `<div class="hy-chips"><span>Vorlage dazu</span>${alleV.map((t) => `<button type="button" class="hy-chip" ${vAkt(t)}><img src="${bild(t.ids[0], 'ende')}" alt="">${esc(t.n)}</button>`).join('')}</div>
<ol class="hy-liste gross">${frei.map(reihe2).join('')}</ol>
<div class="hy-unten"><button type="button" class="hy-plus" data-a="neu">${IC.plus}Übung hinzufügen</button>${merkZ}<span class="hy-sp"></span><button type="button" class="hp-link warn" data-a="leeren">Programm leeren</button></div>` : `${leerY}<div class="hy-sk" style="margin-top:22px"><h4>Oder mit einer Vorlage beginnen</h4><span class="hp-hint">Entwurf, fachlich prüfen</span></div>${vKarten}`}</div>`;
    if (el.__html !== html) { el.innerHTML = html; el.__html = html; }
    function male() { el.__html = null; panel(el); }
    el.onclick = (ev) => {
      const b = ev.target.closest('[data-a]'); if (!b || b.disabled) return;
      const a = b.dataset.a, i = +b.dataset.i;
      if (a === 'neu') return blatt(opt());
      if (a === 'druck') return druck(frei, oft);
      if (a === 'oft') { oft = b.dataset.v; return male(); }
      if (a === 'runter' && i < frei.length - 1) { const p = frei.slice(); [p[i + 1], p[i]] = [p[i], p[i + 1]]; return setze(p); }
      if (a === 'preset') { const p = JSON.parse(JSON.stringify(frei)); const [s2, w2] = b.dataset.v.split('x'); p[i].s = +s2; p[i].w = +w2; return setze(p); }
      if (a === 'hinw') { el.__hinw = i; male(); el.querySelector(`.hy-hinw[data-i="${i}"]`)?.focus(); return; }
      if (a === 'hinwweg') { const p = JSON.parse(JSON.stringify(frei)); delete p[i].h; el.__hinw = null; return setze(p); }
      if (a === 'leeren') return setze([]);
      if (a === 'weg') { const p = frei.slice(); p.splice(i, 1); return setze(p); }
      if (a === 'vorlagen') { el.__vorl = !el.__vorl; return male(); }
      if (a === 'vorlage') { const ids = VORL[i].ids; const p = frei.slice(); for (const id of ids) if (!p.some((x) => x.id === id)) p.push({ id, s: 3, w: 10 }); el.__vorl = false; return setze(p); }
      const vk = (k) => k[0] === 'e' ? eigene()[+k.slice(1)] : VORL[+k.slice(1)];
      if (a === 's-' || a === 's+' || a === 'w-' || a === 'w+' || a === 'ds' || a === 'dw') { const p = JSON.parse(JSON.stringify(frei)); const x = p[i]; if (a === 's-') x.s--; if (a === 's+') x.s++; if (a === 'w-') x.w = Math.max(1, x.w - 1); if (a === 'w+') x.w = Math.min(99, x.w + 1); if (a === 's+') x.s = Math.min(10, x.s);  if (a === 'ds') x.s = +b.dataset.v; if (a === 'dw') x.w = +b.dataset.v; return setze(p); }
      if (a === 'hoch' && i > 0) { const p = frei.slice(); [p[i - 1], p[i]] = [p[i], p[i - 1]]; return setze(p); }
      if (a === 'eig') { const t = eigene()[i]; return setze(JSON.parse(JSON.stringify(t.prog))); }
      if (a === 'vauf') { el.__vorOffen = el.__vorOffen === b.dataset.k ? null : b.dataset.k; return male(); }
      if (a === 'vneu' || a === 'vdazu') { const t = vk(b.dataset.k); const neuP = t.prog ? JSON.parse(JSON.stringify(t.prog)) : t.ids.map((id) => ({ id, s: 3, w: 10 })); const p = a === 'vneu' ? neuP : [...frei, ...neuP.filter((y) => !frei.some((x) => x.id === y.id))]; el.__vorOffen = null; return setze(p); }
      if (a === 'vloesch') { const L = eigene(); L.splice(+b.dataset.k.slice(1), 1); eigeneSpeichern(L); el.__vorOffen = null; return male(); }
      if (a === 'merken') { if (variante() === 'a1') { const n = 'Eigene Vorlage ' + (eigene().length + 1); eigeneSpeichern([{ n, ids: frei.map((x) => x.id), prog: frei }, ...eigene()]); return male(); } el.__merken = true; male(); el.querySelector('.hq-in')?.focus(); return; }
      if (a === 'merkzu') { el.__merken = false; return male(); }
      if (a === 'speichern') { const n = (el.querySelector('.hq-in')?.value || '').trim() || 'Eigene Vorlage'; eigeneSpeichern([{ n, ids: frei.map((x) => x.id), prog: frei }, ...eigene()]); el.__merken = false; return male(); }
      if (a === 'kopie') { const t = (variante() === 'c2' ? `Heimprogramm ${oft}: ` : '') + liste(frei).join('; '); try { navigator.clipboard?.writeText(t) } catch { } el.__kopiert = true; male(); setTimeout(() => { el.__kopiert = false; male(); }, 1600); return; }
      if (a === 'dos') { const p = JSON.parse(JSON.stringify(frei)); const x = p[i]; const W = WDH.indexOf(x.w); if (W < WDH.length - 1) x.w = WDH[W + 1]; else { x.w = WDH[0]; x.s = x.s % 3 + 1; } return setze(p); }
    };
    el.onchange = (ev) => {
      const hw = ev.target.closest('.hy-hinw');
      if (hw) { const p = JSON.parse(JSON.stringify(frei)); const t = hw.value.trim(); if (t) p[+hw.dataset.i].h = t.slice(0, 140); else delete p[+hw.dataset.i].h; el.__hinw = null; el.__html = null; return setze(p); }
      const f = ev.target.closest('.hq-zahl'); if (!f) return;
      const k = f.dataset.k, max = k === 's' ? 10 : 99, n = parseInt(f.value, 10);
      const p = JSON.parse(JSON.stringify(frei)); const x = p[+f.dataset.i];
      if (n >= 1) x[k] = Math.min(max, n);
      el.__html = null; setze(p);
    };
    el.onfocusin = (ev) => { if (ev.target.classList?.contains('hq-zahl')) ev.target.select(); };
    el.onkeydown = (ev) => { if (ev.key === 'Enter' && (ev.target.classList?.contains('hq-zahl') || ev.target.classList?.contains('hy-hinw'))) ev.target.blur(); };
  }

  // ---------- Vollbild: Hausaufgaben öffnen sich aus der Zeile in Mehr über den ganzen Bildschirm ----------
  function vollbild(von) {
    if (document.querySelector('.hv')) return;
    const r = von?.getBoundingClientRect?.(), W = innerWidth, H = innerHeight;
    const aus = r ? `inset(${r.top}px ${W - r.right}px ${H - r.bottom}px ${r.left}px round 14px)` : 'inset(8% 8% 8% 8% round 22px)';
    const ruhig = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const v = document.createElement('div');
    v.className = 'hv'; v.setAttribute('role', 'dialog'); v.setAttribute('aria-modal', 'true'); v.setAttribute('aria-label', 'Hausaufgaben');
    v.innerHTML = `<div class="hv-kopf"><button type="button" class="hv-zu" aria-label="Zurück zu Mehr">${IC.zurueck}<span>Mehr</span></button></div><div class="hv-inhalt"><div class="hv-titel"><span class="hv-ic">${IC.haus}</span><div><h2>Hausaufgaben</h2><p>Übungsprogramm mit Bildern, Blatt drucken oder teilen</p></div></div><div class="hv-panel"></div></div>`;
    document.body.appendChild(v);
    const alt = document.documentElement.style.overflow; document.documentElement.style.overflow = 'hidden';
    panel(v.querySelector('.hv-panel'));
    const lauf = (von2, nach, fertig) => {
      if (ruhig) { v.style.opacity = nach === 'auf' ? 1 : 0; return fertig?.(); }
      const a = v.animate(nach === 'auf'
        ? [{ clipPath: aus, opacity: .6 }, { clipPath: 'inset(0px 0px 0px 0px round 0px)', opacity: 1 }]
        : [{ clipPath: 'inset(0px 0px 0px 0px round 0px)', opacity: 1 }, { clipPath: aus, opacity: 0 }],
        { duration: nach === 'auf' ? 420 : 300, easing: nach === 'auf' ? 'cubic-bezier(.32,.72,0,1)' : 'cubic-bezier(.4,0,.6,1)', fill: 'both' });
      const inh = v.querySelector('.hv-inhalt');
      if (nach === 'auf') inh.animate([{ transform: 'translateY(14px) scale(.985)', opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 380, delay: 60, easing: 'cubic-bezier(.23,1,.32,1)', fill: 'backwards' });
      a.onfinish = () => fertig?.();
    };
    const zu = () => {
      if (document.querySelector('.ha-ueber, .ha-druck')) return;
      document.removeEventListener('keydown', taste);
      lauf(null, 'zu', () => { v.remove(); document.documentElement.style.overflow = alt; von?.focus?.(); });
    };
    const taste = (e) => { if (e.key === 'Escape') zu(); };
    document.addEventListener('keydown', taste);
    v.querySelector('.hv-zu').onclick = zu;
    lauf(null, 'auf', () => v.querySelector('.hv-zu').focus({ preventScroll: true }));
  }

  window.HA = { vollbild, KAT, BY, REG, liste, letztes, regionen, karte, panel, blatt, druck, vorschlaege, anzahl: KAT.length };

  // ---------- Stil ----------
  const css = `.ha-paar.hw{display:block;position:relative}.ha-paar.hw img{width:100%}.ha-paar.hw .hw-e{position:absolute;inset:0;height:100%;animation:hz-film 3.2s ease-in-out infinite}
.hw-l i{position:absolute;left:6px;top:6px;padding:2px 7px;border-radius:8px;background:rgba(255,255,255,.88);font-size:.6875rem;font-weight:650;font-style:normal;color:var(--schrift,#1a1a1a);animation:hw-inv 3.2s ease-in-out infinite}.hw-l i:last-child{animation-name:hz-film}

.ha-paar .hw-l i{right:auto;bottom:auto;width:auto;height:auto;display:block;border-radius:8px;background:rgba(255,255,255,.88);color:var(--schrift,#1a1a1a);font-size:.6875rem;line-height:1.3}
.ha-paar .hw-l i:last-child{left:6px}
@keyframes hw-inv{0%,35%{opacity:1}50%,85%{opacity:0}100%{opacity:1}}
.ha-paar.hw::after,.ha-paar.hc::after{display:none!important}
@media (prefers-reduced-motion:reduce){.ha-paar.hw .hw-e,.hw-l i{animation:none}.hw-l i:last-child{display:none}}
.hz-ka{padding:0;display:block;transition:transform 160ms ease-out,box-shadow 200ms ease}
.hz-ka .hz-auf{display:block;width:100%;padding:7px 7px 9px;border:0;background:none;font:inherit;color:inherit;text-align:left;cursor:pointer;border-radius:12px}
.hz-ka:active{transform:scale(.98)}.hz-ka.offen{box-shadow:0 0 0 2px var(--tape,#4f6d10)}
.hz-ka .ha-ue-n{padding-right:36px}
.hz-play{display:none;position:absolute;top:13px;right:13px;width:38px;height:38px;border-radius:19px;border:0;background:rgba(255,255,255,.9);color:var(--tape,#4f6d10);place-items:center;cursor:pointer;box-shadow:0 1px 4px rgba(0,0,0,.12);transition:transform 160ms ease-out}
.hz-play svg{width:18px;height:18px;fill:currentColor;margin-left:2px}.hz-play:active{transform:scale(.92)}.hz-play.an{background:var(--tape,#4f6d10);color:#fff}
@media (hover:none){.hz-ka{position:relative}.hz-play{display:grid}}
@media (prefers-reduced-motion:reduce){.hz-play{display:none!important}}
.hz-plus{position:absolute;right:10px;bottom:10px;width:30px;height:30px;border-radius:15px;border:0;background:var(--tape,#4f6d10);color:#fff;font:inherit;font-size:18px;display:grid;place-items:center;cursor:pointer;transition:transform 160ms ease-out}
.hz-plus:active{transform:scale(.92)}.hz-ka.drin .hz-plus{background:#ddf6a2;color:#2f4208;font-size:15px}
.hz{background:var(--flaeche,#fff);border-radius:18px;padding:16px;display:grid;gap:12px;box-shadow:0 1px 2px rgba(0,0,0,.06),0 12px 32px -18px rgba(30,45,10,.35)}
.hz svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.hz-kopf{display:flex;align-items:flex-start;gap:10px}.hz-tt{flex:1;min-width:0}.hz h4{margin:0;font-size:1.25rem;letter-spacing:-.01em;line-height:1.2}.hz-tt small{color:var(--schrift2,#5f6556)}
.hz-zu{width:36px;height:36px;border-radius:18px;border:0;background:var(--grund,#f3f5ee);display:grid;place-items:center;cursor:pointer;color:var(--schrift2,#5f6556);flex:none}
.hz-nah{grid-column:1/-1;display:grid;grid-template-columns:minmax(0,34%) minmax(0,1fr);gap:14px;align-items:center;background:var(--flaeche2,#f1eee9);border-radius:14px;padding:8px}.hz-nah-b{position:relative}.hz-bilder .hz-nah img{width:100%;aspect-ratio:4/5;object-fit:cover;border-radius:10px;display:block}.hz-nah p{margin:0;font-size:.9375rem;line-height:1.4;color:var(--schrift2,#5f6556)}.hz-nah p b{display:block;color:var(--schrift,#1a1a1a);margin-bottom:4px}
.ha-a4-nah{position:relative;margin-top:4px}.ha-a4-nah img{width:28%;aspect-ratio:4/5;object-fit:cover;border-radius:6px;display:block}.ha-a4-nah span{position:absolute;left:4px;top:4px;font-size:8pt;background:rgba(255,255,255,.9);padding:1px 5px;border-radius:5px}
.hz-bilder{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:0}.hz-bilder figure{margin:0;position:relative}.hz-bilder img{width:100%;aspect-ratio:16/9;object-fit:cover;border-radius:12px;display:block;background:#e9e4e1}
.hz-bilder figcaption,.hz-film-l i{position:absolute;left:8px;top:8px;padding:3px 9px;border-radius:9px;background:rgba(255,255,255,.88);font-size:.75rem;font-weight:650;color:var(--schrift,#1a1a1a);font-style:normal}
.hz-film{display:none;position:relative}.hz-film img{width:100%;aspect-ratio:16/9;object-fit:cover;border-radius:14px;display:block}.hz-film .hz-film-e{position:absolute;inset:0;animation:hz-film 3.2s ease-in-out infinite}
.hz-film-l i:last-child{left:auto;right:8px;animation:hz-film 3.2s ease-in-out infinite}.hz-film-l i:first-child{animation:hz-film 3.2s ease-in-out infinite reverse}
@keyframes hz-film{0%,35%{opacity:0}50%,85%{opacity:1}100%{opacity:0}}
@media (prefers-reduced-motion:reduce){.hz-film .hz-film-e,.hz-film-l i{animation:none}}
.hz-meta{display:flex;flex-wrap:wrap;gap:6px}.hz-meta span{padding:4px 10px;border-radius:10px;background:var(--grund,#f3f5ee);font-size:.8125rem;color:var(--schrift2,#5f6556)}.hz-meta span:empty{display:none}
.hz-txt h5{margin:0 0 4px!important}.hz-txt p{margin:0;line-height:1.5;font-size:.9375rem;max-width:62ch}
.hz-dl{display:flex;gap:24px;margin:0}.hz-dl dt{font-size:.75rem;color:var(--schrift2,#5f6556)}.hz-dl dd{margin:2px 0 0;font-weight:600}
.hz-los{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:46px;border:0;border-radius:14px;background:var(--tape,#4f6d10);color:#fff;font:inherit;font-weight:650;cursor:pointer;transition:transform 160ms ease-out}
.hz-los:active{transform:scale(.98)}.hz-los.drin{background:var(--grund,#f3f5ee);color:var(--tape,#4f6d10)}
.hz2-dim{position:fixed;inset:0;background:rgba(20,24,16,.32);z-index:5;animation:hz-dim .2s ease-out}
@keyframes hz-dim{from{opacity:0}}
.hz2{position:fixed;z-index:6;left:50%;top:50%;width:min(640px,92vw);max-height:86vh;overflow:auto;transform:translate(-50%,-50%);animation:hz-pop .26s cubic-bezier(.23,1,.32,1)}
@keyframes hz-pop{from{opacity:0;transform:translate(-50%,-48%) scale(.96)}}
.hz2 .hz-bilder{display:grid}.hz2 .hz-film{display:none}
.hz2-nav{display:flex;gap:4px;order:3}.hz2 .hz-kopf{align-items:center}.hz-vor svg{transform:rotate(180deg)}.hz2-nav button:disabled{opacity:.3}
.hy-2 .hy-top{position:sticky;top:64px;z-index:3;margin:0 -12px;padding:10px 12px;border-radius:18px;background:color-mix(in srgb,var(--grund,#f3f5ee) 88%,transparent);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px)}
.hy-sp{flex:1}
.hy-oft{display:flex;align-items:center;gap:4px;padding:4px;border-radius:14px;background:var(--flaeche,#fff);box-shadow:0 1px 2px rgba(0,0,0,.05);flex-wrap:wrap}
.hy-oft span{font-size:.8125rem;font-weight:650;color:var(--schrift2,#5f6556);padding:0 6px 0 8px}
.hy-oft button{min-height:34px;padding:0 12px;border:0;border-radius:10px;background:none;font:inherit;font-size:.875rem;color:var(--schrift,#1a1a1a);cursor:pointer;transition:background 160ms ease}
.hy-oft button[aria-pressed="true"]{background:var(--tape,#4f6d10);color:#fff}
.hy-dz{display:flex;align-items:center;gap:10px;flex-wrap:wrap}.hy-dz .hq-step{flex:1 1 300px;max-width:360px}
.hy-pre{display:flex;gap:4px}.hy-pre button{min-height:34px;padding:0 10px;border-radius:10px;border:1px solid var(--rahmen,#d6dacb);background:var(--flaeche,#fff);font:inherit;font-size:.8125rem;font-weight:600;color:var(--schrift2,#5f6556);cursor:pointer;font-variant-numeric:tabular-nums;transition:transform 160ms ease-out}
.hy-pre button:active{transform:scale(.96)}.hy-pre button[aria-pressed="true"]{border-color:var(--tape,#4f6d10);color:var(--tape,#4f6d10);background:color-mix(in srgb,var(--tape,#4f6d10) 9%,var(--flaeche,#fff))}
.hy-hplus{display:inline-flex;align-items:center;gap:4px;margin-top:8px;min-height:32px;padding:0 4px;border:0;background:none;font:inherit;font-size:.8125rem;font-weight:600;color:var(--tape,#4f6d10);cursor:pointer}.hy-hplus svg{width:14px;height:14px}
.hy-hz{display:flex;align-items:center;gap:6px;margin-top:8px}
.hy-hinw,.hy-merk .hq-in{flex:1;min-width:0;height:40px;border-radius:10px;border:0;background:var(--grund,#f3f5ee);padding:0 12px;font:inherit;font-size:.9375rem;color:inherit}
.hy-hinw:focus,.hy-merk .hq-in:focus{outline:none;box-shadow:inset 0 0 0 2px var(--tape,#4f6d10)}
.hy-runter svg{transform:rotate(180deg)}
.hy-liste.gross .hy-z{align-items:start}.hy-liste.gross .hy-akt{align-self:center}
.hy-merk{display:flex;align-items:center;gap:8px;flex:1 1 360px}
.hy-vgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px}
.ha-a4-hinw{font-weight:600}
@container (max-width:520px){.hy-2 .hy-liste.gross .hy-z{grid-template-columns:minmax(0,1fr) 36px;grid-template-areas:"b a" "t t" "d d"}.hy-2 .hy-txt{align-self:start}.hy-vgrid{grid-template-columns:1fr 1fr}.hy-vgrid .hq-vk b{font-size:.875rem}.hy-2 .hy-top{top:56px}.hy-oft{width:100%;order:3}.hy-pre{width:100%}.hy-pre button{flex:1}.hy-dz .hq-step{max-width:none}}
.hy-grid{display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:28px;align-items:start}
.hy-sk{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:0 0 10px}
.hy-sk h3{margin:0;font-size:1.25rem;letter-spacing:-.01em}.hy-sk h3 span{font-size:.9375rem;font-weight:500;color:var(--schrift2,#5f6556);margin-left:6px}.hy-sk h4{margin:0;font-size:.9375rem}
.hy-liste{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px}
.hy-z{display:grid;grid-template-columns:22px 168px minmax(0,1fr) 300px 40px;align-items:center;gap:14px;background:var(--flaeche,#fff);border-radius:16px;padding:10px 12px;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.hy-nr{font-weight:650;color:var(--schrift2,#5f6556);text-align:center;font-variant-numeric:tabular-nums}
.hy-bild .ha-paar{border-radius:10px;overflow:hidden}
.hy-txt{min-width:0}.hy-txt b{display:block;font-weight:650;line-height:1.25}.hy-txt small{display:block;color:var(--schrift2,#5f6556);font-size:.8125rem;margin-top:2px}.hy-txt p{margin:6px 0 0;font-size:.875rem;line-height:1.4;color:var(--schrift2,#5f6556)}
.hy-dos .hq-step{grid-template-columns:1fr 1fr}
.hy-akt{display:flex;flex-direction:column;gap:2px;align-items:center}.hy-akt button:disabled{opacity:.25}
.hy-seite{position:sticky;top:76px}
.hy-vl{list-style:none;margin:0;padding:6px;display:flex;flex-direction:column;gap:2px;background:var(--flaeche,#fff);border-radius:16px}
.hy-vl button{display:flex;align-items:center;gap:10px;width:100%;padding:8px;border:0;background:none;border-radius:12px;font:inherit;color:inherit;text-align:left;cursor:pointer;transition:background 160ms ease,transform 160ms ease-out}
.hy-vl button:active{transform:scale(.98);background:var(--grund,#f3f5ee)}
.hy-vl .hq-mos{width:64px;height:44px;flex:none}
.hy-vl span:not(.hq-mos){flex:1;min-width:0}.hy-vl b{display:block;font-size:.9375rem;font-weight:600;line-height:1.25}.hy-vl small{color:var(--schrift2,#5f6556);font-size:.8125rem}
.hy-vl i{color:var(--tape,#4f6d10);display:grid}
.hy-leer{display:flex;flex-direction:column;align-items:center;gap:6px;width:100%;padding:36px 20px;border:1.5px dashed color-mix(in srgb,var(--tape,#4f6d10) 45%,transparent);border-radius:18px;background:none;font:inherit;color:var(--schrift,#1a1a1a);cursor:pointer}
.hy-leer .hp-start-ic{background:var(--tape,#4f6d10);color:#fff}.hy-leer b{font-size:1.0625rem}.hy-leer small{color:var(--schrift2,#5f6556)}
.hy-top{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}
.hy-zahl{display:flex;align-items:baseline;gap:8px}.hy-zahl b{font-size:2rem;font-variant-numeric:tabular-nums}.hy-zahl span{color:var(--schrift2,#5f6556)}
.hy-akts{display:flex;gap:8px}
.hy-chips{display:flex;align-items:center;gap:8px;overflow-x:auto;scrollbar-width:none;padding:2px 0 4px}
.hy-chips>span{font-size:.8125rem;font-weight:650;color:var(--schrift2,#5f6556);flex:none;margin-right:2px}
.hy-chip{flex:none;display:inline-flex;align-items:center;gap:8px;min-height:40px;padding:4px 14px 4px 4px;border-radius:20px;border:0;background:var(--flaeche,#fff);box-shadow:0 1px 2px rgba(0,0,0,.06);font:inherit;font-size:.875rem;font-weight:600;color:var(--schrift,#1a1a1a);cursor:pointer;transition:transform 160ms ease-out}
.hy-chip:active{transform:scale(.97)}.hy-chip img{width:44px;height:32px;object-fit:cover;border-radius:16px}
.hy-liste.gross .hy-z{grid-template-columns:22px 240px minmax(0,1fr) 40px;grid-template-areas:"n b t a" "n b d a"}
.hy-liste.gross .hy-nr{grid-area:n}.hy-liste.gross .hy-bild{grid-area:b}.hy-liste.gross .hy-txt{grid-area:t;align-self:end}.hy-liste.gross .hy-dos{grid-area:d;align-self:start;max-width:360px}.hy-liste.gross .hy-akt{grid-area:a}
.hy-unten{display:flex;align-items:center;gap:16px;flex-wrap:wrap}
.hy-plus{display:inline-flex;align-items:center;gap:6px;min-height:44px;padding:0 16px;border-radius:14px;border:1.5px dashed color-mix(in srgb,var(--tape,#4f6d10) 45%,transparent);background:none;font:inherit;font-weight:600;color:var(--tape,#4f6d10);cursor:pointer}
.hy-3 .hy-grid{grid-template-columns:minmax(0,1fr) minmax(0,1fr);margin-top:8px}
.hy-liste.kompakt{gap:8px}
.hy-z.k{grid-template-columns:64px minmax(0,1fr) auto;gap:10px;padding:8px 10px}
.hy-z.k img{width:64px;height:44px;object-fit:cover;border-radius:9px}.hy-z.k .hy-dos{grid-column:1/-1}.hy-z.k .hy-akt{flex-direction:row}
.hy-vorschau{position:sticky;top:76px;display:flex;flex-direction:column;gap:12px}
.hy-papier{background:#fff;color:#1a1a1a;border-radius:6px;padding:18px 18px 10px;box-shadow:0 1px 2px rgba(0,0,0,.06),0 18px 40px -22px rgba(20,40,10,.4);max-height:62vh;overflow:auto;font-size:.8125rem}
.hy-pk{display:flex;justify-content:space-between;align-items:baseline;border-bottom:1.5px solid #4f6d10;padding-bottom:6px;margin-bottom:4px}.hy-pk b{font-size:1rem}.hy-pk span{color:#5f6556}
.hy-pu{display:grid;grid-template-columns:120px 1fr;gap:10px;padding:10px 0;border-bottom:1px solid #e9ebe4}.hy-pu b{font-size:.875rem}.hy-pu em{display:inline-block;margin-left:8px;font-style:normal;font-weight:650;color:#4f6d10}.hy-pu p{margin:4px 0 0;line-height:1.4;color:#3d4236}
.hy-pleer{color:#5f6556;padding:24px 0;text-align:center}
.hy-vorschau .hy-akts .hp-kn{flex:1;justify-content:center}
@container (max-width:900px){.hy-z{grid-template-columns:22px 140px minmax(0,1fr) 40px;grid-template-areas:"n b t a" "n b d a"}.hy-nr{grid-area:n}.hy-bild{grid-area:b}.hy-txt{grid-area:t;align-self:end}.hy-dos{grid-area:d}.hy-akt{grid-area:a}}
@container (max-width:780px){.hy-grid,.hy-3 .hy-grid{grid-template-columns:1fr}.hy-seite,.hy-vorschau{position:static}.hy-papier{max-height:none}}
@container (max-width:520px){.hy-z,.hy-liste.gross .hy-z{grid-template-columns:110px minmax(0,1fr) 36px;grid-template-areas:"b t a" "d d d";padding:10px}.hy-nr{display:none}.hy-txt p{display:none}.hy-liste.gross .hy-dos{max-width:none}.hy-akts{width:100%}.hy-akts .hp-kn{flex:1;justify-content:center}.hy-pu{grid-template-columns:90px 1fr}}
.hx svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none}
.ha-sheet.hx{padding-top:8px;max-height:92vh;container-type:inline-size}
@media (min-width:700px){.ha-sheet.hx{left:50%;right:auto;width:min(940px,96vw);transform:translateX(-50%);animation:hx-hoch .34s cubic-bezier(.32,.72,0,1)}}
@keyframes hx-hoch{from{transform:translate(-50%,100%)}to{transform:translate(-50%,0)}}
.hx-kopf{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:48px}.hx-kopf b{font-size:1.375rem;letter-spacing:-.01em}
.hx-fertig,.hx2-ok{display:inline-flex;align-items:center;gap:8px;min-height:40px;padding:0 16px;border:0;border-radius:20px;background:var(--tape,#4f6d10);color:#fff!important;font:inherit;font-weight:650;cursor:pointer;transition:transform 160ms ease-out}
.hx-fertig span{min-width:22px;height:22px;border-radius:11px;background:rgba(255,255,255,.22);display:grid;place-items:center;font-size:.8125rem;font-variant-numeric:tabular-nums}
.hx-fertig:active,.hx2-ok:active,.hx-tabs button:active,.hx3-t:active{transform:scale(.97)}
.hx-text{border:0;background:none;font:inherit;font-weight:600;color:var(--tape,#4f6d10);min-height:44px;cursor:pointer}
.hx-such{display:flex;align-items:center;gap:8px;flex:1;height:44px;border-radius:12px;background:var(--grund,#f3f5ee);padding:0 12px;color:var(--schrift2,#5f6556);margin:8px 0}
.hx-such .ha-such{margin:0;padding:0;height:100%;background:none;flex:1;font-size:1rem}
.hx-tabs{display:flex;gap:4px;padding:4px;border-radius:14px;background:var(--grund,#f3f5ee);overflow-x:auto;scrollbar-width:none;margin:2px 0 4px}
.hx-tabs::-webkit-scrollbar{display:none}
.hx-tabs button{flex:1 0 auto;display:inline-flex;align-items:baseline;justify-content:center;gap:5px;min-height:40px;padding:0 14px;border:0;border-radius:10px;background:none;font:inherit;font-weight:600;font-size:.9375rem;color:var(--schrift2,#5f6556);cursor:pointer;transition:background 160ms ease,color 160ms ease,transform 160ms ease-out}
.hx-tabs button small{font-weight:500;font-size:.75rem;opacity:.7;font-variant-numeric:tabular-nums}
.hx-tabs button[aria-selected="true"]{background:var(--flaeche,#fff);color:var(--schrift,#1a1a1a);box-shadow:0 1px 3px rgba(0,0,0,.1)}
.hx-vor{margin:12px 0 2px;padding:12px;border-radius:16px;background:color-mix(in srgb,var(--tape,#4f6d10) 8%,var(--flaeche,#fff))} .hx .hz-ka{background:var(--flaeche,#fff);box-shadow:0 0 0 1px var(--linie,#e1e4d8),0 1px 3px rgba(30,45,10,.07)} .hx .hz-ka.offen{box-shadow:0 0 0 2px var(--tape,#4f6d10)} .hx .hz-ka .hz-auf{padding:7px 7px 12px} .hx .hz-plus{right:12px;bottom:14px}
.hx h5{margin:0 0 8px;font-size:.8125rem;font-weight:650;color:var(--schrift2,#5f6556);letter-spacing:.01em}
.hx .ha-liste{grid-template-columns:repeat(auto-fill,minmax(210px,1fr))}
.hx2{display:grid;grid-template-columns:236px 1fr;gap:20px;align-items:start;padding-bottom:84px}
.hx2-nav{position:sticky;top:0;display:flex;flex-direction:column;gap:2px;padding-top:8px}
.hx2-nav>button{display:flex;flex-direction:row;justify-content:space-between;align-items:center;min-height:44px;padding:0 12px;border:0;border-radius:12px;background:none;font:inherit;font-size:1rem;font-weight:600;color:var(--schrift,#1a1a1a);cursor:pointer;text-align:left}
.hx2-nav>button small{color:var(--schrift2,#5f6556);font-weight:500;font-variant-numeric:tabular-nums}
.hx2-nav>button[aria-current="true"]{background:color-mix(in srgb,var(--tape,#4f6d10) 13%,var(--flaeche,#fff));color:var(--tape,#4f6d10)}
.hx2-gr{margin-top:16px;padding:0 4px}.hx2-gr>div{display:flex;flex-wrap:wrap;gap:6px}.hx2-gr .ha-chip{min-height:34px;font-size:.8125rem}
.hx2-rechts{min-width:0}
.hx2-leiste{position:sticky;bottom:calc(-18px - env(safe-area-inset-bottom));margin:0 -18px calc(-18px - env(safe-area-inset-bottom));display:flex;align-items:center;gap:12px;padding:12px 18px calc(12px + env(safe-area-inset-bottom));background:color-mix(in srgb,var(--flaeche,#fff) 90%,transparent);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);border-top:1px solid var(--rahmen,#d6dacb)}
.hx2-stapel{display:flex}.hx2-stapel img{width:44px;height:30px;object-fit:cover;border-radius:7px;border:2px solid var(--flaeche,#fff);margin-left:-14px}.hx2-stapel img:first-child{margin-left:0}
.hx2-n{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--schrift2,#5f6556)}.hx2-n b{color:var(--schrift,#1a1a1a);font-variant-numeric:tabular-nums}
.hx2-ok:disabled{opacity:.4}
@container (max-width:640px){.hx2{grid-template-columns:1fr;gap:6px}.hx2-nav{position:static;flex-direction:row;flex-wrap:nowrap;overflow-x:auto;gap:4px;padding:0;scrollbar-width:none}.hx2-nav>button{flex:none;gap:6px}.hx2-gr{display:none}}
.hv{position:fixed;inset:0;z-index:2147482000;background:var(--grund,#f3f5ee);color:var(--schrift,#1a1a1a);overflow:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;will-change:clip-path}
.hv svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none}
.hv-kopf{position:sticky;top:0;z-index:2;padding:calc(10px + env(safe-area-inset-top)) 16px 8px;background:color-mix(in srgb,var(--grund,#f3f5ee) 86%,transparent);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px)}
.hv-zu{display:inline-flex;align-items:center;gap:2px;min-height:44px;padding:0 10px 0 4px;border:0;background:none;font:inherit;font-size:1.0625rem;font-weight:600;color:var(--tape,#4f6d10);cursor:pointer;border-radius:12px;transition:transform 160ms ease-out}
.hv-zu:active{transform:scale(.97)}
.hv-inhalt{max-width:1100px;margin:0 auto;padding:4px 24px calc(120px + env(safe-area-inset-bottom))}
.hv-titel{display:flex;align-items:center;gap:14px;margin:4px 0 18px}
.hv-titel h2{margin:0;font-size:2rem;line-height:1.1;letter-spacing:-.01em}.hv-titel p{margin:4px 0 0;color:var(--schrift2,#5f6556);font-size:.9375rem}
.hv-ic{width:52px;height:52px;border-radius:16px;background:var(--flaeche,#fff);display:grid;place-items:center;color:var(--tape,#4f6d10);box-shadow:0 1px 2px rgba(0,0,0,.06)}.hv-ic svg{width:26px;height:26px}
@media (max-width:620px){.hv-inhalt{padding:0 16px calc(110px + env(safe-area-inset-bottom))}.hv-titel h2{font-size:1.625rem}.hv-ic{width:44px;height:44px;border-radius:14px}}

.ha-karte{background:var(--flaeche,#fff);border-radius:16px;padding:14px;box-shadow:0 0 0 2px var(--tape,#4f6d10);margin-top:10px}
.ha-kopf{display:flex;align-items:center;justify-content:space-between;gap:10px;font-size:1.0625rem}
.ha-kn{min-height:44px;padding:0 16px;border-radius:12px;border:0;background:var(--tape,#4f6d10);color:#fff;font:inherit;font-weight:600;cursor:pointer;display:inline-flex;align-items:center;justify-content:center}
.ha-kn.zwei{background:var(--flaeche,#fff);color:var(--tape,#4f6d10);box-shadow:inset 0 0 0 1.5px var(--rahmen,#d6dacb)}
.ha-kn:active,.ha-ka:active,.ha-chip:active{transform:scale(.97)}
.ha-raster{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:10px;margin:12px 0;align-items:start}
.ha-ue{background:var(--grund,#f3f5ee);border-radius:12px;padding:7px}
.ha-ue-k{all:unset;display:block;width:100%;cursor:pointer}
.ha-paar{display:grid;grid-template-columns:1fr 1fr;gap:3px;border-radius:8px;overflow:hidden;position:relative;background:#e9e4e1}
.ha-paar img{width:100%;aspect-ratio:16/9;object-fit:cover;display:block}
.ha-paar.hc{display:block}.ha-paar.hc video{pointer-events:none;width:100%;aspect-ratio:16/9;object-fit:cover;display:block;background:#e9e4e1}
.ha-paar:after{content:'›';position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:20px;height:20px;border-radius:10px;background:#fff;color:var(--tape,#4f6d10);font-weight:700;display:grid;place-items:center;font-size:15px;box-shadow:0 1px 3px rgba(0,0,0,.2)}
.ha-ue-n{display:block;font-size:.875rem;margin-top:6px;line-height:1.25;color:var(--schrift,#1a1a1a)}
.ha-ue-n b{color:var(--tape,#4f6d10);font-weight:650;margin-left:6px}
.ha-ue-n small{display:block;color:var(--schrift2,#5f6556);font-size:.75rem}
.ha-dos{display:grid;gap:6px;margin-top:8px;font-size:.8125rem;color:var(--schrift2,#5f6556)}
.ha-seg{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:4px}
.ha-seg button{min-height:40px;border-radius:10px;border:1px solid var(--rahmen,#d6dacb);background:var(--flaeche,#fff);font:inherit;font-weight:600;color:var(--schrift,#1a1a1a);cursor:pointer}
.ha-seg button[aria-pressed="true"]{background:var(--tape,#4f6d10);border-color:var(--tape,#4f6d10);color:#fff}
.ha-weg{background:none;border:0;color:#c0392b;font:inherit;font-weight:600;padding:6px 0;cursor:pointer;justify-self:start}
.ha-fuss{display:flex;gap:8px;flex-wrap:wrap}
.ha-leer{color:var(--schrift2,#5f6556);font-size:.9375rem;margin:10px 0}
.ha-karte.kompakt{display:flex;align-items:center;gap:12px;padding:10px 12px}
.ha-karte.kompakt{flex-wrap:wrap}.ha-tv{flex-basis:100%;margin-top:10px;padding-top:10px;border-top:1px solid var(--linie,#e3e5dc)}.ha-tv-k{display:flex;align-items:baseline;gap:8px;margin-bottom:4px}.ha-tv-k b{font-size:.9375rem}.ha-tv-k small{color:var(--schrift2,#5f6556);font-size:.8125rem}.ha-tv-z{display:flex;align-items:center;gap:10px;padding:6px 0}.ha-tv-z img{width:64px;height:36px;object-fit:cover;border-radius:6px;flex:none}.ha-tv-z span{flex:1;min-width:0;display:flex;flex-direction:column}.ha-tv-z span b{font-size:.9375rem;font-weight:600}.ha-tv-z small{color:var(--schrift2,#5f6556);font-size:.8125rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ha-tv-plus{width:44px;height:44px;border-radius:12px;border:0;background:var(--tape,#4f6d10);color:#fff;display:grid;place-items:center;flex:none}.ha-tv-plus:active{transform:scale(.94)}.ha-tv-plus svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:2.4;stroke-linecap:round}.ha-tv-alle{margin-top:6px;width:100%}
.ha-stapel{display:flex}.ha-stapel img{width:64px;height:36px;object-fit:cover;border-radius:6px;border:2px solid #fff;margin-left:-14px}.ha-stapel img:first-child{margin-left:0}
.ha-k-txt{flex:1;min-width:0;display:flex;flex-direction:column}.ha-k-txt small{color:var(--schrift2,#5f6556);font-size:.8125rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ha-ueber{position:fixed;inset:0;z-index:2147483000}
.ha-dim{position:absolute;inset:0;background:rgba(26,26,26,.3)}
.ha-sheet{position:absolute;left:0;right:0;bottom:0;max-height:88vh;overflow:auto;background:var(--flaeche,#fff);color:var(--schrift,#1a1a1a);border-radius:22px 22px 0 0;padding:10px 18px calc(18px + env(safe-area-inset-bottom));box-shadow:0 -10px 30px rgba(0,0,0,.15);animation:ha-hoch .28s cubic-bezier(.32,.72,0,1)}
@keyframes ha-hoch{from{transform:translateY(100%)}to{transform:none}}
@media (min-width:761px){.ha-sheet{left:50%;width:min(760px,96vw);transform:translateX(-50%);animation:none}}
.ha-griff{width:40px;height:5px;border-radius:3px;background:#d2d5ca;margin:0 auto 10px}
.ha-sk{display:flex;justify-content:space-between;align-items:center;font-size:1.375rem}
.ha-fertig{background:none;border:0;color:var(--tape,#4f6d10);font:inherit;font-size:1.0625rem;font-weight:600;cursor:pointer;min-height:44px}
.ha-such{width:100%;box-sizing:border-box;height:44px;border-radius:12px;border:0;background:var(--grund,#f3f5ee);padding:0 14px;font:inherit;margin:10px 0;color:inherit}
.ha-vor{background:color-mix(in srgb,var(--tape,#4f6d10) 10%,var(--flaeche,#fff));border-radius:14px;padding:12px;margin-bottom:12px}
.ha-vor-t{display:flex;justify-content:space-between;gap:8px;font-size:.9375rem;margin-bottom:8px}.ha-vor-t span{color:var(--schrift2,#5f6556)}
.ha-filter{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0}
.ha-trenn{width:1px;background:var(--rahmen,#d6dacb);margin:4px 4px}
.ha-chip{min-height:36px;padding:0 13px;border-radius:18px;border:1px solid var(--rahmen,#d6dacb);background:var(--flaeche,#fff);font:inherit;font-size:.875rem;color:var(--schrift,#1a1a1a);cursor:pointer;display:inline-flex;align-items:center;gap:6px}
.ha-chip[aria-pressed="true"]{background:var(--tape,#4f6d10);border-color:var(--tape,#4f6d10);color:#fff}
.ha-chip.statisch{cursor:default}
.ha-zahl{font-size:.8125rem;font-weight:600;color:var(--schrift2,#5f6556);margin:12px 2px 6px}
.ha-liste{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px}
.ha-ka{position:relative;text-align:left;border:0;background:var(--grund,#f3f5ee);border-radius:12px;padding:7px;font:inherit;cursor:pointer;color:inherit}
.ha-ka i{position:absolute;right:10px;bottom:10px;width:26px;height:26px;border-radius:13px;background:var(--tape,#4f6d10);color:#fff;font-style:normal;display:grid;place-items:center;font-size:17px}
.ha-ka.drin i{background:#ddf6a2;color:#2f4208;font-size:14px}
.ha-ka .ha-ue-n{padding-right:32px}
.ha-pille{display:inline-block;background:color-mix(in srgb,var(--tape,#4f6d10) 12%,transparent);border-radius:8px;padding:1px 7px}
.ha-im{background:var(--grund,#f3f5ee);border-radius:14px;padding:6px 10px 10px;margin-bottom:12px}
.ha-im-z{display:grid;grid-template-columns:56px 1fr auto;align-items:center;gap:8px;padding:6px 0;border-top:1px solid var(--rahmen,#d6dacb)}
.ha-im-z:first-of-type{border-top:0}
.ha-im-z img{width:56px;height:32px;object-fit:cover;border-radius:6px}
.ha-im-n{font-size:.875rem;line-height:1.2}.ha-im-z .hq-step{grid-column:1/-1;grid-template-columns:1fr 1fr}.ha-im-z .hq-st{background:var(--flaeche,#fff)}.ha-im-z .hq-zahl{background:var(--grund,#f3f5ee)}
.ha-im .ha-seg button{min-height:36px;min-width:36px;padding:0 6px}
.ha-x{color:var(--schrift2,#5f6556)}
.ha-raus{width:36px;height:36px;border-radius:18px;border:0;background:none;color:var(--schrift2,#5f6556);font-size:16px;cursor:pointer}
@media (max-width:620px){.ha-im-z img{width:48px;height:27px}}
.ha-hinw{font-size:.8125rem;color:var(--schrift2,#5f6556);margin:12px 2px 0;line-height:1.4}
.ha-druck{position:fixed;inset:0;z-index:2147483001;background:#e9ebe4;overflow:auto;padding:12px}
.ha-druck-leiste{display:flex;gap:8px;justify-content:flex-end;max-width:794px;margin:0 auto 10px;position:sticky;top:0}
.ha-a4{background:#fff;color:#1a1a1a;max-width:794px;margin:0 auto;padding:32px 36px;box-sizing:border-box;font-size:13px}
.ha-a4-kopf{display:flex;justify-content:space-between;align-items:flex-end;border-bottom:1.5px solid #4f6d10;padding-bottom:10px}
.ha-a4-kopf small{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#4f6d10}
.ha-a4-kopf h1{font-size:26px;margin:2px 0 0}
.ha-a4-dat{text-align:right;color:#4a4d44}.ha-a4-dat span{display:inline-block;margin-top:6px}
.ha-a4-intro{color:#4a4d44;margin:10px 0 4px}
.ha-a4-ue{display:grid;grid-template-columns:1.25fr 1fr;gap:16px;padding:12px 0;border-bottom:1px solid #e1e4d8;break-inside:avoid}
.ha-a4-ue h2{font-size:15px;margin:0}
.ha-a4-dos{color:#4f6d10;font-weight:650;margin:3px 0 6px}
.ha-a4-txt p{margin:0 0 6px;line-height:1.45}
.ha-a4-wo{display:flex;gap:4px;margin-top:6px}.ha-a4-wo span{width:26px;height:26px;border:1px solid #c9ccc0;border-radius:6px;font-size:9px;color:#8a8d82;display:grid;place-items:start center;padding-top:2px;box-sizing:border-box}
.ha-a4-fuss{margin-top:14px;font-size:11.5px;color:#4a4d44;line-height:1.45}.ha-a4-fuss p{margin:0 0 4px}
.mh-ha{--f:#4f6d10}
.hp-ic.klein{width:34px;height:34px}
.hp-link.warn{color:#b3261e!important}
.hq-mos{display:grid;grid-template-columns:1fr 1fr;gap:2px;border-radius:10px;overflow:hidden;flex:none;background:#e9e4e1}
.hq-mos img{width:100%;aspect-ratio:16/9;object-fit:cover;display:block}
.hq-karus{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(168px,46%);gap:10px;overflow-x:auto;scroll-snap-type:x mandatory;padding:2px 2px 10px;margin:0 -2px;scrollbar-width:none}
.hq-karus::-webkit-scrollbar{display:none}
.hq-vk{scroll-snap-align:start;display:flex;flex-direction:column;gap:2px;text-align:left;border:0;cursor:pointer;background:var(--flaeche,#fff);border-radius:16px;padding:8px 8px 12px;box-shadow:0 1px 2px rgba(0,0,0,.04),0 6px 16px -10px rgba(20,40,10,.22)}
.hq-vk .hq-mos{width:100%;margin-bottom:8px}
.hq-vk b{font-size:.9375rem;font-weight:620;line-height:1.2;margin:0 4px;text-wrap:balance}.hq-vk small{font-size:.75rem;color:var(--schrift2,#5f6556);margin:0 4px}
.hq-raster{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px}
.hq-kachel{background:var(--flaeche,#fff);border-radius:16px;padding:8px;display:flex;flex-direction:column;gap:8px;box-shadow:0 1px 2px rgba(0,0,0,.04),0 6px 16px -10px rgba(20,40,10,.2)}
.hq-kachel .ha-paar{border-radius:10px}
.hq-kk{display:flex;align-items:flex-start;justify-content:space-between;gap:4px;padding:0 2px 0 4px}.hq-kk b{font-size:.9375rem;font-weight:620;line-height:1.2;padding-top:6px}
.hq-step{display:grid;gap:6px}
.hq-st{display:grid;grid-template-columns:40px 1fr 40px;align-items:center;background:var(--grund,#f3f5ee);border-radius:12px;min-height:40px}
.hq-st label{display:flex;align-items:baseline;justify-content:center;gap:5px;font-size:.875rem;color:var(--schrift2,#5f6556);cursor:text}.hq-zahl{width:2.6ch;min-height:32px;border:0;border-radius:8px;background:var(--flaeche,#fff);box-shadow:inset 0 0 0 1px var(--rahmen,#d6dacb);text-align:center;font:inherit;font-size:1rem;font-weight:650;color:var(--schrift,#1a1a1a);font-variant-numeric:tabular-nums;padding:0 2px}.hq-zahl:focus{outline:none;box-shadow:inset 0 0 0 2px var(--tape,#4f6d10)}
.hq-st button{height:40px;border:0;background:none;cursor:pointer;color:var(--tape,#4f6d10)!important;display:grid;place-items:center;border-radius:12px}
.hq-st button:disabled{opacity:.3;cursor:default}
.hq-plus{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;min-height:180px;border:1.5px dashed color-mix(in srgb,var(--tape,#4f6d10) 45%,transparent);border-radius:16px;background:none;cursor:pointer;color:var(--tape,#4f6d10)!important;font-weight:600}
.hq-plus svg{width:26px;height:26px}
.hq-merk{align-self:flex-start;margin:-6px 4px 0}
.hq-chips{display:flex;gap:8px;overflow-x:auto;padding:2px 2px 8px;scrollbar-width:none}.hq-chips::-webkit-scrollbar{display:none}
.hq-chip{display:inline-flex;align-items:center;gap:8px;flex:none;min-height:44px;padding:0 14px 0 5px;border-radius:22px;border:0;cursor:pointer;background:var(--flaeche,#fff);font-size:.875rem;font-weight:550;box-shadow:inset 0 0 0 1px var(--rahmen,#d6dacb)}
.hq-chip img{width:34px;height:34px;border-radius:17px;object-fit:cover}
.hq-liste{list-style:none;margin:0;padding:0;display:grid;gap:10px}
.hq-liste>li{background:var(--flaeche,#fff);border-radius:16px;padding:10px;box-shadow:0 1px 2px rgba(0,0,0,.04),0 6px 16px -10px rgba(20,40,10,.2)}
.hq-kopf{display:grid;grid-template-columns:auto 1fr auto;gap:8px;align-items:start}
.hq-nr{width:26px;height:26px;border-radius:13px;background:var(--tape,#4f6d10);color:#fff;font-size:.8125rem;font-weight:700;display:grid;place-items:center;font-variant-numeric:tabular-nums}
.hq-bild .ha-paar{border-radius:10px}
.hq-name{display:block;font-size:1rem;font-weight:620;margin:8px 2px 8px 34px}
.hq-segs{display:grid;grid-template-columns:auto auto 1fr;gap:6px;align-items:center;margin-left:34px}
.hq-segs .ha-seg button{min-height:38px;min-width:38px}
.hq-mal{color:var(--schrift2,#5f6556)}
.hq-lab{font-size:.75rem;color:var(--schrift2,#5f6556);margin-bottom:-2px}
.hq-3 .hp-n small{display:none}.hq-3 .hp-z{gap:8px;padding-left:4px}.hq-3 .hp-z img{width:60px;height:34px}
.hq-pf{display:flex;flex-direction:column}
.hq-merkzeile{display:flex;gap:8px;align-items:center;margin:10px 4px 0}
.hq-in{flex:1;min-width:0;height:44px;border-radius:12px;border:1px solid var(--rahmen,#d6dacb);background:var(--flaeche,#fff);padding:0 12px;font:inherit;color:inherit}
.hq-vl .hq-vz{display:flex;align-items:center;gap:12px;width:100%;min-height:68px;padding:8px 14px 8px 8px;border:0;background:none;cursor:pointer;text-align:left}
.hq-vl .hq-mos{width:84px}
.hq-chev{color:var(--schrift2,#8a8d82);display:grid;transition:transform 200ms cubic-bezier(.23,1,.32,1)}
.hq-vl li.auf .hq-chev{transform:rotate(90deg)}
.hq-vor{padding:0 14px 14px 104px}
.hq-vor ul{list-style:none;margin:0 0 10px;padding:0;display:grid;gap:6px}
.hq-vor li{display:flex;align-items:center;gap:10px;font-size:.875rem;border:0!important}
.hq-vor img{width:48px;height:27px;object-fit:cover;border-radius:6px}
.hq-vk2{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
.hq-vor{animation:hq-auf 220ms cubic-bezier(.23,1,.32,1)}
@keyframes hq-auf{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
@container (max-width:460px){.hq-3 .hp-z img{display:none}.hq-segs{grid-template-columns:1fr;margin-left:0}.hq-segs .hq-mal,.hq-segs>span:nth-child(2){display:none}.hq-segs .ha-seg:first-of-type{grid-row:2}.hq-segs .hq-lab:nth-child(3){grid-row:3}.hq-segs .ha-seg:last-child{grid-row:4}.hq-name{margin-left:2px}.hq-vor{padding-left:14px}.hq-karus{grid-auto-columns:62%}}
@media (prefers-reduced-motion:reduce){.hq-vor{animation:none}.hq-chev{transition:none}}

.hp{display:flex;flex-direction:column;gap:18px;margin-top:4px;container-type:inline-size}
.hp h4{margin:0;font-size:.8125rem;font-weight:650;letter-spacing:.02em;color:var(--schrift2,#5f6556)}
.hp-sk{display:flex;align-items:baseline;justify-content:space-between;margin:0 4px 8px}
.hp-hint{font-size:.75rem;color:var(--schrift2,#5f6556)}
.hp svg,.hq-st svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none}
.hp button{font:inherit;color:inherit;-webkit-tap-highlight-color:transparent}
.hp button:active:not(:disabled){transform:scale(.97)}
.hp button{transition:transform 140ms cubic-bezier(.23,1,.32,1),background-color 140ms ease}
.hp-start{display:flex;align-items:center;gap:14px;width:100%;text-align:left;border:0;cursor:pointer;background:var(--tape,#4f6d10);color:#fff!important;border-radius:18px;padding:18px;box-shadow:0 8px 20px -12px rgba(79,109,16,.6)}
.hp-start b{display:block;font-size:1.0625rem;font-weight:650}.hp-start small{display:block;opacity:.85;font-size:.8125rem;margin-top:2px;line-height:1.3}
.hp-start-ic{width:44px;height:44px;border-radius:22px;background:rgba(255,255,255,.18);display:grid;place-items:center;flex:none}
.hp-vl,.hp-liste{list-style:none;margin:0;padding:0;background:var(--flaeche,#fff);border-radius:16px;box-shadow:0 1px 2px rgba(0,0,0,.04),0 6px 16px -10px rgba(20,40,10,.18);overflow:hidden}
.hp-vl li+li,.hp-liste li+li{border-top:1px solid var(--rahmen,#e1e4d8)}
.hp-vl button{display:flex;align-items:center;gap:12px;width:100%;min-height:64px;padding:8px 14px;border:0;background:none;cursor:pointer;text-align:left}
.hp-vl i{color:var(--schrift2,#8a8d82);display:grid}
.hp-stapel{display:flex;flex:none}.hp-stapel img{width:46px;height:30px;object-fit:cover;border-radius:7px;border:2px solid var(--flaeche,#fff);margin-left:-16px;box-shadow:0 1px 3px rgba(0,0,0,.12)}.hp-stapel img:first-child{margin-left:0}
.hp-n{flex:1;min-width:0;font-size:.9375rem;font-weight:550;line-height:1.25}.hp-n small{display:block;font-weight:400;font-size:.8125rem;color:var(--schrift2,#5f6556)}
.hp-z{display:flex;align-items:center;gap:12px;padding:8px 8px 8px 12px;min-height:60px}
.hp-z img{width:72px;height:41px;object-fit:cover;border-radius:8px;flex:none;background:#e9e4e1}
.hp-dos{border:0;cursor:pointer;min-height:36px;padding:0 12px;border-radius:18px;background:color-mix(in srgb,var(--tape,#4f6d10) 12%,var(--flaeche,#fff));color:var(--tape,#4f6d10)!important;font-weight:650;font-variant-numeric:tabular-nums;white-space:nowrap}
.hp-ic{width:40px;height:40px;border:0;border-radius:20px;background:none;cursor:pointer;color:var(--schrift2,#8a8d82)!important;display:grid;place-items:center;flex:none}
.hp-link{display:inline-flex;align-items:center;gap:4px;border:0;background:none;cursor:pointer;color:var(--tape,#4f6d10)!important;font-weight:600;min-height:36px}
.hp-leiste{position:sticky;bottom:8px;display:flex;align-items:center;gap:8px;background:color-mix(in srgb,var(--flaeche,#fff) 92%,transparent);backdrop-filter:saturate(1.4) blur(12px);-webkit-backdrop-filter:saturate(1.4) blur(12px);border-radius:16px;padding:8px 8px 8px 16px;box-shadow:0 1px 2px rgba(0,0,0,.05),0 10px 24px -14px rgba(20,40,10,.35)}
.hp-leiste span{white-space:nowrap;flex:1;font-size:.9375rem;color:var(--schrift2,#5f6556)}.hp-leiste b{color:var(--schrift,#1a1a1a);font-variant-numeric:tabular-nums}
.hp-kn{white-space:nowrap;display:inline-flex;align-items:center;gap:6px;min-height:44px;padding:0 16px;border-radius:12px;border:0;cursor:pointer;background:var(--tape,#4f6d10);color:#fff!important;font-weight:600}
.hp-kn.zwei{background:var(--flaeche,#fff);color:var(--tape,#4f6d10)!important;box-shadow:inset 0 0 0 1.5px var(--rahmen,#d6dacb)}
.hp-kn:disabled{opacity:.4;cursor:default}
.hp-tb{display:flex;gap:8px;align-items:center}.hp-sp{flex:1}
.hp-papier{background:#fff;color:#1a1a1a;border-radius:6px;padding:22px 20px;box-shadow:0 1px 2px rgba(0,0,0,.06),0 18px 40px -22px rgba(20,40,10,.4);min-height:420px}
.hp-pk{display:flex;justify-content:space-between;align-items:baseline;border-bottom:1.5px solid #4f6d10;padding-bottom:8px;margin-bottom:6px}.hp-pk b{font-size:1.25rem;font-weight:700;letter-spacing:-.01em}.hp-pk span{font-size:.8125rem;color:#5f6556;font-variant-numeric:tabular-nums}
.hp-pu{display:grid;grid-template-columns:150px 1fr auto;gap:12px;padding:12px 0;border-bottom:1px solid #e9ebe4;align-items:start}
.hp-pu .ha-paar:after{display:none}
.hp-pu b{display:block;font-size:.9375rem}.hp-pu p{margin:6px 0 0;font-size:.8125rem;line-height:1.4;color:#4a4d44}.hp-pu .hp-dos{margin-top:6px;min-height:30px;font-size:.8125rem}
.hp-leer{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;width:100%;min-height:300px;margin-top:12px;border:1.5px dashed #c9ccc0;border-radius:12px;background:none;cursor:pointer;color:#4f6d10!important}
.hp-leer svg{width:28px;height:28px}.hp-leer small{color:#5f6556;font-size:.8125rem}
.hp-wahl{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.hp-wahl button{display:flex;flex-direction:column;align-items:flex-start;gap:2px;border:0;cursor:pointer;background:var(--flaeche,#fff);border-radius:18px;padding:10px 10px 14px;text-align:left;box-shadow:0 1px 2px rgba(0,0,0,.04),0 6px 16px -10px rgba(20,40,10,.2)}
.hp-wahl b{font-size:1rem;font-weight:650;margin:10px 4px 0}.hp-wahl small{font-size:.8125rem;color:var(--schrift2,#5f6556);margin:0 4px}
.hp-wahl-bild{display:block;width:100%;border-radius:12px;overflow:hidden}
.hp-wahl .ha-paar{border-radius:12px}.hp-wahl .ha-paar img{aspect-ratio:4/3}
.hp-mosaik{display:grid;grid-template-columns:1fr 1fr;gap:3px}.hp-mosaik img{width:100%;aspect-ratio:8/3;object-fit:cover;display:block}
.hp-vbox{margin-top:-4px}
@container (max-width:460px){.hp-pu{grid-template-columns:1fr auto}.hp-pu .ha-paar{grid-column:1/-1}.hp-wahl b{font-size:.9375rem}}

@media print{body.ha-print>*:not(.ha-druck){display:none!important}body.ha-print .ha-druck{position:static;background:#fff;padding:0;overflow:visible}body.ha-print .ha-druck-leiste{display:none}.ha-a4{max-width:none;padding:0}@page{size:A4;margin:14mm}}
@media (max-width:560px){.ha-a4{padding:20px 16px}.ha-a4-ue{grid-template-columns:1fr}}
`;
  const st = document.createElement('style'); st.textContent = css; document.head.append(st);
})();
