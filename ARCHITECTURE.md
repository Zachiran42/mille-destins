# Bibliothèque et récits

`docs/index.html`, `library.js` et `library.css` affichent le catalogue des modules réellement disponibles. Le premier est `histoires/le-rang-zero/module.js`. Il déclare son identifiant stable, les métadonnées de la carte, sa validation et la manière de résumer une progression.

`histoires/le-rang-zero/story.js` contient le graphe et les textes ; `engine.js` est le moteur déterministe indépendant du DOM ; `game.js` rend l’interface. Il n’existe aucun appel à un modèle ni génération de récit en cours de partie. Toutes les branches et fins sont écrites et embarquées.

## Stockage

`storage.js` possède une fabrique testable avec un adaptateur. Le navigateur utilise `mille-destins.library.v1` ; Android utilise SharedPreferences par le pont Java local. Un document versionné contient une entrée par identifiant : enveloppe courante et copie précédente, chacune étiquetée avec l’histoire et la date. Une sauvegarde d’un module relit le document et conserve les autres entrées. La validation de domaine appartient au module.

La copie globale protège contre un document JSON illisible ; la copie propre à un récit protège sa récupération lorsqu’un autre récit a été enregistré depuis. Un document illisible sans copie n’est pas écrasé implicitement. Une restauration explicite depuis l’accueil permet de le remplacer. Une copie de prototype navigateur `rangzero.v1`, si présente et valide, est migrée sans effacer la source.

L’export de récit utilise `format: mille-destins-story`, `version: 1`, `storyId` et `payload`. Celui de bibliothèque utilise `format: mille-destins-library`, `version: 1` et la liste des carnets. Les imports ne modifient rien pendant la prévisualisation. Ils refusent les identifiants inconnus, doublons, formats incompatibles, données incohérentes et fichiers de plus de 2 Mio. La bibliothèque valide l’ensemble avant de l’écrire d’un seul coup ; les récits absents du fichier sont conservés. Ces fichiers ne sont pas chiffrés : ils contiennent vos choix, pas de données de compte.

Une désinstallation efface les données privées Android. Exporter avant de désinstaller. La sauvegarde n’est pas synchronisée entre appareils. Éviter de jouer simultanément dans plusieurs onglets : il n’y a pas de résolution de conflits entre deux parties ouvertes sur la même histoire.

## Android

Un WebView charge les fichiers embarqués via une origine HTTPS interceptée. Le manifeste ne demande aucune permission. Les accès fichier et contenu, cookies et navigation distante sont bloqués ; la politique CSP limite les scripts aux fichiers locaux et interdit les connexions. Le sélecteur système ne s’ouvre que pour un export ou import déclenché par le joueur. SharedPreferences écrit le document et sa copie dans une transaction `commit()`.

L’ajout d’un récit exige : un nouvel identifiant, des fichiers locaux et une validation de domaine, son enregistrement dans l’accueil, ses tests et ses ressources dans la prochaine release APK. Le registre et le stockage ont été testés avec deux modules synthétiques indépendants ; la release ne contient qu’un récit jouable.
