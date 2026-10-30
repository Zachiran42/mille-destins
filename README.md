# Mille Destins

Une bibliothèque d’histoires illustrées dont vous êtes le héros. **Le Rang Zéro — Les noms engloutis** est le premier récit jouable de cette version. Le lecteur incarne Ari Veyr, un coursier dont l’aptitude apprend les lois des monstres. Sa puissance grandit, ses décisions laissent des liens et des dettes.

[Jouer dans le navigateur](https://zachiran42.github.io/mille-destins/) · [APK Android](https://github.com/Zachiran42/mille-destins/releases/latest/download/mille-destins-0.1.0.apk) · [Cercle Store](https://zachiran42.github.io/cercle-store/)

![Le Rang Zéro](docs/histoires/le-rang-zero/assets/keyart.png)

## Première édition

- Une seule histoire disponible : arc I terminé, six chapitres, 37 passages, jusqu’à dix combats et trois fins.
- Progression de niveaux, six aptitudes, trois reliques, alliances et choix avec conséquences annoncées.
- Combats au tour par tour : deux actions, une intention ennemie visible, garde, mana, marques, interruptions et boss à phases.
- Deux difficultés exigeantes : Épreuve et Impitoyable. Aucun chronomètre de lecture. Reprise au début du chapitre et réattribution des aptitudes aux points sûrs.
- Illustrations originales, six personnages visuellement distincts, codex, historique des décisions, texte agrandi et ambiance sonore facultative.
- Bibliothèque commune, carnet et copie de secours séparés pour chaque histoire, export/import d’un récit ou de la bibliothèque entière.

L’APK contient tous les textes, illustrations et sons synthétisés. **Aucun compte, publicité, service distant ou permission Internet.** La page web nécessite une connexion pour charger ses fichiers. Les sauvegardes web et Android sont séparées et se transfèrent par les fichiers JSON exportés.

Il s’agit d’une courte aventure narrative avec des embranchements, pas d’un monde ouvert ni d’une campagne infinie. Les prochaines histoires seront ajoutées quand elles seront jouables ; aucun faux titre n’occupe la bibliothèque.

## Lancer et vérifier

Node.js 20 ou ultérieur, sans dépendance externe :

```sh
node scripts/serve.cjs
node --test tests/engine.test.cjs tests/storage.test.cjs
node --check docs/library.js
node --check docs/histoires/le-rang-zero/game.js
```

Le serveur affiche son adresse locale (`PORT` peut changer le port). Les 19 contrôles couvrent les routes complètes dans les deux difficultés, les trois fins, les ressources, les phases, les intentions, les sauvegardes, la récupération et l’indépendance des histoires. Le solveur de test ne fait pas partie des fichiers embarqués dans le jeu.

Vérifications manuelles : affichage mobile et bureau dans le navigateur, début de chapitre, premier combat, niveau et aptitude, retour bibliothèque, reprise après rechargement, export/import avec confirmation. **Pas encore testé sur un téléphone physique** : le bouton Retour Android, le sélecteur natif de documents et les reprises après arrêt forcé restent à confirmer sur appareil.

## Compiler l’APK

Android 8+ (API 26), Android System WebView à jour. Pas de dépendance à une architecture CPU. Outils requis : JDK 21, android.jar API 36, Android Build Tools avec aapt2, d8, zipalign et apksigner.

1. Copier `.toolchain.example.json` en `.toolchain.json` et renseigner les chemins locaux.
2. Fournir sa propre clé de signature hors du dépôt. Définir `MINIGAMES_KEYSTORE_PASSWORD` dans l’environnement.
3. Lancer depuis PowerShell :

```powershell
./scripts/build.ps1 -KeyStore C:/cles/application.jks -KeyAlias milledestins
```

La release initiale utilise une signature de développement. Conserver la même clé pour les mises à jour ; les clés et mots de passe ne sont pas distribués dans les sources. Le script vérifie la signature et l’alignement.

## Ajouter une histoire

Voir [ARCHITECTURE.md](ARCHITECTURE.md). La bibliothèque fournit le registre et la persistance ; chaque module possède son moteur, son contenu, ses règles de validation et son interface. L’import d’un carnet vérifie son identifiant avant de proposer un remplacement. L’import complet valide tous les carnets avant une seule écriture.

## Licence et illustrations

Code, textes et ressources distribués sous [MIT](LICENSE). Les images sont générées avec l’outil ImageGen intégré ; direction artistique et briefs dans [ART-DIRECTION.md](ART-DIRECTION.md). L’univers, les personnages et l’intrigue sont originaux. Le manhwa de progression est une référence de genre ; aucune licence, aucun personnage ni dessin de Solo Leveling n’est utilisé.
