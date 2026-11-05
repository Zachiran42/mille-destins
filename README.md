# Mille Destins 0.3.0

Cette version rend les quatre histoires plus faciles à comprendre : 98 passages réécrits, phrases courtes, objectifs concrets, repères visibles et choix expliqués. La difficulté des épreuves et les branches restent identiques. Les sauvegardes 0.1.0 et 0.2.0 restent compatibles : aucun identifiant ni format de carnet ne change.

# Mille Destins

Une bibliothèque d’histoires illustrées dont vous êtes le héros. **Quatre histoires complètes sont disponibles dans l’édition 0.3.0**, chacune avec trois fins et son carnet indépendant. **Le Rang Zéro — Les noms engloutis** est le premier récit de la collection. Le lecteur incarne Ari Veyr, un coursier dont l’aptitude apprend les lois des monstres. Sa puissance grandit, ses décisions laissent des liens et des dettes.

[Jouer dans le navigateur](https://zachiran42.github.io/mille-destins/) · [APK Android](https://github.com/Zachiran42/mille-destins/releases/latest/download/mille-destins-0.3.0.apk) · [Cercle Store](https://zachiran42.github.io/cercle-store/)

![Le Rang Zéro](docs/histoires/le-rang-zero/assets/keyart.png)

## Les quatre récits

- **Le Rang Zéro** : six chapitres, 37 passages, progression, combats tactiques et trois fins.
- **La Treizième Heure** : six chapitres, 21 passages et trois fins ; enquête à boucles, découvertes persistantes, confiance et charges magiques.
- **La Couronne des Dévorés** : six chapitres, 20 passages et trois fins ; pouvoirs empruntés, duels à ouvertures, volonté et soutiens.
- **Éden ne répond plus** : six chapitres, 20 passages et trois fins ; oxygène, énergie, filtres et confiance de l’équipage.
- Progression de niveaux, six aptitudes, trois reliques, alliances et choix avec conséquences annoncées.
- Combats au tour par tour : deux actions, une intention ennemie visible, garde, mana, marques, interruptions et boss à phases.
- Deux difficultés : Normal et Difficile. Aucun chronomètre de lecture. Reprise au début du chapitre et réattribution des aptitudes aux points sûrs.
- Illustrations originales, six personnages visuellement distincts, codex, historique des décisions, texte agrandi et ambiance sonore facultative.
- Bibliothèque commune, carnet et copie de secours séparés pour chaque histoire, export/import d’un récit ou de la bibliothèque entière.

L’APK contient tous les textes, illustrations et sons synthétisés. **Aucun compte, publicité, service distant ou permission Internet.** La page web nécessite une connexion pour charger ses fichiers. Les sauvegardes web et Android sont séparées et se transfèrent par les fichiers JSON exportés.

Les trois nouveaux récits sont des aventures courtes, d’environ 940 à 1 010 mots chacune sur l’ensemble de leurs branches. Une traversée en lit une partie ; les boucles et les autres fins invitent à rejouer. Ils utilisent des décisions narratives à ressources plutôt que le combat au tour par tour du Rang Zéro. La suite envisagée est une aventure shōnen originale : voir [ROADMAP.md](ROADMAP.md).

## Lancer et vérifier

Node.js 20 ou ultérieur, sans dépendance externe :

```sh
node scripts/serve.cjs
node --test tests/engine.test.cjs tests/storage.test.cjs tests/tales.test.cjs
node --check docs/library.js
node --check docs/histoires/le-rang-zero/game.js
```

Le serveur affiche son adresse locale (`PORT` peut changer le port). Les 35 contrôles couvrent les routes complètes dans les deux difficultés, les douze fins (trois par histoire), les ressources, les phases, les intentions, les sauvegardes, la récupération et l’indépendance des histoires. Le solveur de test ne fait pas partie des fichiers embarqués dans le jeu.

Vérifications navigateur : affichage mobile et bureau, ouverture des quatre récits, décisions et découvertes, reprise après rechargement et export/import avec confirmation. Le combat, le niveau et les aptitudes du Rang Zéro restent couverts par les tests de la première édition. **Pas encore testé sur un téléphone physique** : le bouton Retour Android, le sélecteur natif de documents et les reprises après arrêt forcé restent à confirmer sur appareil.

## Compiler l’APK

Android 8+ (API 26), Android System WebView à jour. Pas de dépendance à une architecture CPU. Outils requis : JDK 21, android.jar API 36, Android Build Tools avec aapt2, d8, zipalign et apksigner.

1. Copier `.toolchain.example.json` en `.toolchain.json` et renseigner les chemins locaux.
2. Fournir sa propre clé de signature hors du dépôt. Définir `MINIGAMES_KEYSTORE_PASSWORD` dans l’environnement.
3. Lancer depuis PowerShell :

```powershell
./scripts/build.ps1 -KeyStore C:/cles/application.jks -KeyAlias milledestins
```

Les releases utilisent la même signature de développement ; la mise à jour 0.3.0 conserve le nom de paquet et les carnets 0.1.0. Conserver la même clé pour les mises à jour ; les clés et mots de passe ne sont pas distribués dans les sources. Le script vérifie la signature et l’alignement.

## Ajouter une histoire

Voir [ARCHITECTURE.md](ARCHITECTURE.md). La bibliothèque fournit le registre et la persistance ; chaque module possède son moteur, son contenu, ses règles de validation et son interface. L’import d’un carnet vérifie son identifiant avant de proposer un remplacement. L’import complet valide tous les carnets avant une seule écriture.

## Licence et illustrations

Code, textes et ressources distribués sous [MIT](LICENSE). Les images sont générées avec l’outil ImageGen intégré ; direction artistique et briefs dans [ART-DIRECTION.md](ART-DIRECTION.md). L’univers, les personnages et l’intrigue sont originaux. Le manhwa de progression est une référence de genre ; aucune licence, aucun personnage ni dessin de Solo Leveling n’est utilisé.
