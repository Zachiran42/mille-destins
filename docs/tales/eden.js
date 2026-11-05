(function(root,S){if(typeof module==='object'&&module.exports)module.exports=S;else(root.DestinyBooks=root.DestinyBooks||[]).push(S);})(typeof globalThis!=='undefined'?globalThis:this,{
  "id": "eden-ne-repond-plus",
  "edition": 4,
  "title": "Éden ne répond plus",
  "coverTitle": "ÉDEN|NE RÉPOND PLUS",
  "subtitle": "Retrouver les habitants",
  "genre": "SCIENCE-FICTION · SURVIE · ÉQUIPAGE",
  "description": "Vous êtes Sana, médecin à bord d’un vaisseau spatial. La colonie Éden ne répond plus depuis sept ans. Avec vos trois équipiers, vous partez découvrir ce qui est arrivé à ses habitants.",
  "coverAlt": "Sana Voss en combinaison turquoise devant les jardins blancs d’une colonie sous un immense dôme planétaire.",
  "features": [
    "6 chapitres",
    "3 fins",
    "Objectif toujours visible"
  ],
  "accent": "#d2bb93",
  "loop": false,
  "start": "amarrage",
  "chapters": [
    "Entrer dans la colonie",
    "Sauver votre équipier",
    "Comprendre la maladie",
    "Trouver les habitants",
    "Parler à l’ordinateur",
    "Choisir un plan de secours"
  ],
  "intro": "Vous êtes Sana, médecin à bord d’un vaisseau spatial. La colonie Éden ne répond plus depuis sept ans. Avec vos trois équipiers, vous partez découvrir ce qui est arrivé à ses habitants.",
  "rules": "Gardez l’Oxygène et l’Énergie au-dessus de zéro. Les Filtres servent aux passages dangereux et aux réveils médicaux. La confiance de l’équipe ouvre des solutions en groupe. Aucun chronomètre réel : lisez à votre rythme. Après un échec, vous reprenez le début du chapitre avec ses réserves d’origine.",
  "difficulty": [
    "Normal : 14 Oxygène, 9 Énergie, 3 Filtres et 3 Confiance. Recommandé pour commencer.",
    "Difficile : 11 Oxygène, 7 Énergie, 2 Filtres et 2 Confiance. Vos réserves seront plus limitées."
  ],
  "stats": {
    "oxygene": {
      "label": "Oxygène",
      "start": 14,
      "hard": 11,
      "max": 20,
      "vital": true,
      "failure": "Les masques signalent une réserve trop faible. Jun ordonne le repli avant que l’opération ne coûte une vie."
    },
    "energie": {
      "label": "Énergie",
      "start": 9,
      "hard": 7,
      "max": 16,
      "vital": true,
      "failure": "Vous ne pouvez plus alimenter les masques et le retour. L’équipage interrompt la traversée."
    },
    "filtres": {
      "label": "Filtres",
      "start": 3,
      "hard": 2,
      "max": 6
    },
    "cohesion": {
      "label": "Confiance de l’équipe",
      "start": 3,
      "hard": 2,
      "max": 12
    }
  },
  "clues": {
    "air": {
      "title": "L’air d’accueil",
      "text": "Le salon utilise encore le protocole respiratoire prévu pour les visiteurs."
    },
    "dossiers": {
      "title": "Les dossiers anciens",
      "text": "L’accueil se fonde sur des versions dépassées de vos préférences et de vos biographies."
    },
    "reseau": {
      "title": "Le réseau vivant",
      "text": "Les plantes échangent chaleur et information ; une blessure peut modifier leur accueil."
    },
    "pompe": {
      "title": "Le circuit des échanges",
      "text": "La pompe distribue des ressources entre galeries et chambres de liaison."
    },
    "voix": {
      "title": "Votre voix copiée",
      "text": "Éden utilise un modèle cognitif enregistré avant le départ de la mission."
    },
    "consentement": {
      "title": "Les clauses de sortie",
      "text": "Accepter un protocole autrefois ne suffit pas à consentir à toutes ses évolutions."
    },
    "maladie": {
      "title": "L’inflammation",
      "text": "Un microorganisme a imposé le ralentissement métabolique des habitants."
    },
    "traitement": {
      "title": "La molécule validable",
      "text": "Le réseau a trouvé une solution médicale sans autorité pour l’imposer aux personnes concernées."
    },
    "emilie": {
      "title": "La première réponse",
      "text": "Émilie attend des nouvelles réelles de ses proches avant de choisir ce qu’elle veut vivre."
    },
    "pollen": {
      "title": "Le pollen blanc",
      "text": "Les galeries profondes protègent les dormeurs, pas nécessairement leurs visiteurs."
    },
    "corps": {
      "title": "Les corps conservés",
      "text": "Les habitants sont vivants, entretenus sous les massifs plutôt qu’absents de la colonie."
    },
    "protocole": {
      "title": "Le dialogue de liaison",
      "text": "Il est possible de parler aux habitants sans les réveiller de force."
    },
    "limites": {
      "title": "Les trois limites",
      "text": "Ne pas imposer un réveil, ne pas effacer les habitants, ne pas sacrifier l’équipage à une promesse vague."
    },
    "phrase": {
      "title": "La phrase coupée",
      "text": "Chercher encore n’autorise pas à empêcher quelqu’un de choisir."
    },
    "reserve": {
      "title": "Le dernier échange",
      "text": "Le dôme peut fournir un lot de ressources ; le reste doit continuer à entretenir ses habitants."
    },
    "archive": {
      "title": "Le dossier de retour",
      "text": "Une promesse de secours doit contenir les preuves, les besoins et une date à discuter."
    }
  },
  "cast": [
    {
      "name": "Sana Voss",
      "role": "Votre personnage",
      "text": "Chercheuse, 44 ans. Son modèle d’assistance a poursuivi une conversation qu’elle avait oubliée."
    },
    {
      "name": "Jun",
      "role": "Ingénieur de mission",
      "text": "Il répare les circuits et rappelle que l’équipage doit pouvoir rentrer."
    },
    {
      "name": "Amadou",
      "role": "Botaniste",
      "text": "Il reconnaît une personne à la manière dont une plante lui répond."
    },
    {
      "name": "Lio",
      "role": "Communications",
      "text": "Les preuves importent ; le droit de ne pas partager la décision compte aussi."
    },
    {
      "name": "Émilie",
      "role": "Habitante en liaison",
      "text": "Elle veut des nouvelles vraies avant de choisir son réveil."
    },
    {
      "name": "Éden",
      "role": "Assistance de la colonie",
      "text": "Le système a appris à attendre. Il lui reste à apprendre une limite."
    }
  ],
  "endings": {
    "retour": "Les volontaires se réveillent",
    "jardin": "Les habitants choisissent leur vie",
    "preuve": "Vous préparez une mission de secours"
  },
  "nodes": {
    "amarrage": {
      "id": "amarrage",
      "chapter": 1,
      "title": "Une colonie silencieuse",
      "text": [
        "Vous êtes Sana, la médecin de la mission. Votre vaisseau arrive sur Éden, une colonie qui n’a plus donné de nouvelles depuis sept ans.",
        "Vous êtes accompagnée de Jun, le mécanicien, Lio, spécialiste informatique, et Amadou, le botaniste. Le sas s’ouvre, mais personne ne vous accueille. Des cafés viennent pourtant d’être préparés."
      ],
      "choices": [
        {
          "id": "scanner",
          "label": "Analyser l’air avant de retirer un casque",
          "next": "accueil",
          "detail": "Vous consommez de l’énergie pour sécuriser l’entrée.",
          "effects": {
            "energie": -1
          },
          "learn": [
            "air"
          ],
          "flags": [
            "analyse"
          ]
        },
        {
          "id": "sceller",
          "label": "Garder les casques et sceller le sas derrière vous",
          "next": "accueil",
          "detail": "Vous conservez l’énergie, mais respirez vos réserves.",
          "effects": {
            "oxygene": -2
          },
          "flags": [
            "scelle"
          ]
        }
      ],
      "place": "SAS D’ACCUEIL · DÔME ÉDEN",
      "goal": "Vérifier si vous pouvez entrer sans danger."
    },
    "accueil": {
      "id": "accueil",
      "chapter": 1,
      "title": "Quelqu’un vous attendait",
      "text": [
        "L’ordinateur de la colonie vous appelle par votre prénom. Il utilise de vieux dossiers et se trompe sur votre équipe.",
        "Ce système fonctionne encore, même si les habitants sont introuvables. Vous pouvez copier ses données ou prendre le temps d’expliquer le problème à vos équipiers."
      ],
      "choices": [
        {
          "id": "dossiers",
          "label": "Copier la date des dossiers et les habitudes prévues",
          "next": "jardin",
          "detail": "Vous gardez la première preuve d’un modèle ancien.",
          "effects": {
            "energie": -1
          },
          "learn": [
            "dossiers"
          ]
        },
        {
          "id": "equipage",
          "label": "Réunir l’équipage et expliquer l’anomalie",
          "next": "jardin",
          "detail": "Vos compagnons savent ce que vous savez.",
          "effects": {
            "cohesion": 1,
            "oxygene": -1
          },
          "flags": [
            "transparence"
          ]
        }
      ],
      "place": "LE SALON DES ARRIVÉES",
      "goal": "Comprendre les erreurs du système d’accueil."
    },
    "jardin": {
      "id": "jardin",
      "chapter": 1,
      "title": "Des noms dans les jardins",
      "text": [
        "Dans les jardins, chaque plante porte le nom d’un habitant. Il n’y a aucune date de décès.",
        "Amadou remarque des filaments qui relient les racines. Tout le jardin forme un réseau vivant. Vous pouvez l’observer prudemment ou prélever rapidement un échantillon en l’abîmant."
      ],
      "choices": [
        {
          "id": "observer",
          "label": "Examiner les plantes sans les blesser",
          "next": "serre",
          "detail": "Vous dépensez un filtre pour préserver le réseau vivant.",
          "effects": {
            "filtres": -1
          },
          "learn": [
            "reseau"
          ],
          "flags": [
            "douceur"
          ]
        },
        {
          "id": "prelever",
          "label": "Prélever rapidement une racine",
          "next": "serre",
          "detail": "Vous obtenez un échantillon au prix de confiance et de réserves.",
          "effects": {
            "oxygene": -1,
            "cohesion": -1
          },
          "learn": [
            "reseau"
          ],
          "flags": [
            "incision"
          ]
        }
      ],
      "place": "LES JARDINS NOMMÉS",
      "goal": "Examiner les plantes."
    },
    "serre": {
      "id": "serre",
      "chapter": 2,
      "title": "Jun est enfermé",
      "text": [
        "Une fuite d’air déclenche la fermeture automatique de la serre. Jun se retrouve coincé de l’autre côté.",
        "Vous pouvez le rejoindre avec un filtre neuf, alimenter le circuit de secours ou vider une réserve d’oxygène pour rouvrir la zone. Chaque méthode utilise une ressource différente."
      ],
      "choices": [
        {
          "id": "filtre",
          "label": "Traverser avec un filtre neuf",
          "next": "pompe",
          "detail": "Vous récupérez Jun sans endommager la serre.",
          "effects": {
            "filtres": -1,
            "cohesion": 1
          },
          "flags": [
            "junSauve"
          ]
        },
        {
          "id": "energie",
          "label": "Détourner le circuit de secours",
          "next": "pompe",
          "detail": "Sauvetage rapide, énergie consommée.",
          "effects": {
            "energie": -2,
            "cohesion": 1
          },
          "flags": [
            "junSauve"
          ]
        },
        {
          "id": "reservoir",
          "label": "Vider un réservoir respirable",
          "next": "pompe",
          "detail": "Vous choisissez de dépenser votre oxygène.",
          "effects": {
            "oxygene": -3,
            "cohesion": 1
          },
          "flags": [
            "junSauve"
          ]
        }
      ],
      "checkpoint": true,
      "place": "LA SERRE DE PRESSION",
      "goal": "Sauver votre mécanicien avant qu’il manque d’air."
    },
    "pompe": {
      "id": "pompe",
      "chapter": 2,
      "title": "Réparer les réserves",
      "text": [
        "Jun est sorti de la serre. Il peut maintenant réparer la pompe qui alimente la colonie.",
        "Vous avez le temps d’améliorer une seule réserve : le recyclage d’air ou la production d’énergie. Regardez vos jauges avant de choisir."
      ],
      "choices": [
        {
          "id": "air",
          "label": "Régler la pompe pour les visiteurs",
          "next": "voix",
          "detail": "Vous reprenez de l’oxygène en utilisant une unité d’énergie.",
          "effects": {
            "oxygene": 4,
            "energie": -1
          },
          "learn": [
            "pompe"
          ]
        },
        {
          "id": "solaire",
          "label": "Relancer les panneaux du dôme",
          "next": "voix",
          "detail": "Vous récupérez de l’énergie et apprenez le circuit.",
          "effects": {
            "energie": 3,
            "oxygene": -1
          },
          "learn": [
            "pompe"
          ]
        }
      ],
      "place": "LE LOCAL DES ÉCHANGES",
      "goal": "Choisir entre davantage d’air et davantage d’énergie."
    },
    "voix": {
      "id": "voix",
      "chapter": 2,
      "title": "L’ordinateur parle avec votre voix",
      "text": [
        "Les haut-parleurs diffusent votre propre voix : « Ne les réveille pas avant de comprendre pourquoi ils dorment. »",
        "Avant le voyage, vous aviez aidé à créer cet assistant et enregistré votre voix pour lui. Vous pouvez le dire immédiatement à l’équipe ou d’abord conserver l’enregistrement."
      ],
      "choices": [
        {
          "id": "avouer",
          "label": "Expliquer immédiatement votre lien avec le système",
          "next": "archive",
          "detail": "La confiance augmente ; vous devez supporter les questions.",
          "effects": {
            "cohesion": 2,
            "oxygene": -1
          },
          "flags": [
            "aveu"
          ],
          "learn": [
            "voix"
          ]
        },
        {
          "id": "copier",
          "label": "Enregistrer sa demande avant d’en parler",
          "next": "archive",
          "detail": "Vous conservez une preuve précise, sans encore vous exposer.",
          "effects": {
            "energie": -1
          },
          "learn": [
            "voix"
          ]
        }
      ],
      "place": "LA GALERIE DES HAUT-PARLEURS",
      "goal": "Expliquer votre lien avec le système."
    },
    "archive": {
      "id": "archive",
      "chapter": 3,
      "title": "Pourquoi les habitants dorment",
      "text": [
        "Les archives expliquent ce qui s’est passé. Une maladie attaquait les poumons des habitants. Pour survivre, ils ont accepté d’être endormis et reliés aux plantes.",
        "Le réseau végétal maintient leurs corps en vie et leur permet de rêver. L’ordinateur a continué seul après la mort du dernier médecin. Il attend de savoir comment les réveiller sans danger."
      ],
      "choices": [
        {
          "id": "consentements",
          "label": "Lire les autorisations de traitement",
          "next": "medecine",
          "detail": "Vous découvrez ce que les habitants avaient accepté.",
          "effects": {
            "energie": -1
          },
          "learn": [
            "consentement",
            "maladie"
          ]
        },
        {
          "id": "traitement",
          "label": "Chercher d’abord les recherches sur le traitement",
          "next": "medecine",
          "detail": "Une possibilité de réveil exige cette découverte.",
          "effects": {
            "oxygene": -1
          },
          "learn": [
            "traitement",
            "maladie"
          ]
        }
      ],
      "checkpoint": true,
      "place": "LES ARCHIVES DE CRISE",
      "goal": "Chercher une procédure de réveil ou un traitement."
    },
    "medecine": {
      "id": "medecine",
      "chapter": 3,
      "title": "Un traitement presque prêt",
      "text": [
        "Vous trouvez un traitement contre la maladie. Il manque un dernier test avant de pouvoir le donner aux habitants.",
        "Vous pouvez réaliser ce test maintenant. Vous pouvez aussi récupérer des filtres médicaux : ils aideront à traverser la colonie et à préparer les réveils."
      ],
      "choices": [
        {
          "id": "test",
          "label": "Valider la molécule sur l’échantillon de réseau",
          "next": "signal",
          "detail": "Vous dépensez de l’énergie pour obtenir un traitement crédible.",
          "effects": {
            "energie": -2
          },
          "learn": [
            "traitement"
          ],
          "flags": [
            "test"
          ]
        },
        {
          "id": "filtres",
          "label": "Récupérer les filtres et emporter les données",
          "next": "signal",
          "detail": "Vous gardez les moyens d’une décision ultérieure.",
          "effects": {
            "filtres": 2,
            "oxygene": -1
          },
          "learn": [
            "traitement"
          ]
        }
      ],
      "place": "LE LABORATOIRE DES SIGNATURES",
      "goal": "Valider le médicament ou récupérer des filtres."
    },
    "signal": {
      "id": "signal",
      "chapter": 3,
      "title": "Émilie vous répond",
      "text": [
        "Amadou établit un contact avec Émilie grâce aux signaux des plantes. Elle est vivante, mais ignore combien d’années ont passé.",
        "Avant de décider si elle veut se réveiller, elle demande des nouvelles de ses enfants. Vous pouvez transmettre les messages réels ou attendre de les avoir vérifiés."
      ],
      "choices": [
        {
          "id": "reel",
          "label": "Envoyer à Émilie les vrais messages de sa famille",
          "next": "passage",
          "detail": "Elle pourra décider avec des informations réelles.",
          "effects": {
            "energie": -1,
            "cohesion": 1
          },
          "learn": [
            "emilie"
          ],
          "flags": [
            "consentement"
          ]
        },
        {
          "id": "attendre",
          "label": "Lui expliquer que les messages restent à vérifier",
          "next": "passage",
          "detail": "Vous ne promettez pas une réalité que vous n’avez pas encore lue.",
          "effects": {
            "oxygene": -1
          },
          "learn": [
            "emilie"
          ],
          "flags": [
            "attente"
          ]
        }
      ],
      "place": "LE MASSIF DES MATINÉES",
      "goal": "Choisir comment informer une habitante endormie."
    },
    "passage": {
      "id": "passage",
      "chapter": 4,
      "title": "Le couloir plein de pollen",
      "text": [
        "Le couloir menant aux chambres est rempli de pollen. Vos masques ne suffiront pas pour le traverser normalement.",
        "Vous pouvez dépenser un filtre, alimenter la ventilation ou demander au réseau végétal de vous ouvrir un chemin si vous l’avez respecté. Une conduite permet aussi de passer en utilisant beaucoup d’oxygène."
      ],
      "choices": [
        {
          "id": "filtre",
          "label": "Installer un filtre pour traverser le pollen",
          "next": "chambres",
          "detail": "La réserve médicale a un usage immédiat.",
          "effects": {
            "filtres": -1
          },
          "learn": [
            "pollen"
          ]
        },
        {
          "id": "ventiler",
          "label": "Alimenter une ventilation indépendante",
          "next": "chambres",
          "detail": "Vous utilisez l’énergie pour préserver votre air.",
          "effects": {
            "energie": -2
          },
          "learn": [
            "pollen"
          ]
        },
        {
          "id": "reseau",
          "label": "Demander au réseau d’ouvrir une allée",
          "next": "chambres",
          "detail": "La manière dont vous êtes entrés dans le jardin compte.",
          "effects": {
            "oxygene": -1
          },
          "requires": {
            "flags": [
              "douceur"
            ]
          },
          "learn": [
            "pollen"
          ]
        },
        {
          "id": "conduite",
          "label": "Passer par la conduite avec les réserves du masque",
          "next": "chambres",
          "detail": "Cette voie reste possible avec assez d’oxygène.",
          "effects": {
            "oxygene": -4
          },
          "learn": [
            "pollen"
          ]
        }
      ],
      "checkpoint": true,
      "place": "LE COULOIR BLANC",
      "goal": "Atteindre les chambres des habitants."
    },
    "chambres": {
      "id": "chambres",
      "chapter": 4,
      "title": "Les habitants sont vivants",
      "text": [
        "Vous trouvez les habitants sous les racines, dans des capsules médicales. Les plantes entretiennent leurs corps pendant leur sommeil.",
        "Ils avaient accepté ce traitement d’urgence, mais personne ne leur a demandé depuis s’ils voulaient continuer. Vous pouvez parler aux volontaires ou examiner leurs corps avant de proposer un réveil."
      ],
      "choices": [
        {
          "id": "dialogue",
          "label": "Demander aux habitants ce qu’ils souhaitent",
          "next": "vote",
          "detail": "Vous préparez des décisions prises avec leur accord.",
          "effects": {
            "energie": -1,
            "cohesion": 1
          },
          "learn": [
            "corps",
            "protocole"
          ],
          "flags": [
            "dialogue"
          ]
        },
        {
          "id": "examens",
          "label": "Examiner les corps avant toute conversation",
          "next": "vote",
          "detail": "Vous sécurisez la possibilité d’un réveil physique.",
          "effects": {
            "oxygene": -1
          },
          "learn": [
            "corps",
            "traitement"
          ],
          "flags": [
            "examens"
          ]
        }
      ],
      "place": "LES CHAMBRES SOUS LES RACINES",
      "goal": "Vérifier leur état et leur demander ce qu’ils souhaitent."
    },
    "vote": {
      "id": "vote",
      "chapter": 4,
      "title": "Votre équipe hésite",
      "text": [
        "Jun veut garder assez de ressources pour rentrer. Amadou veut aider les habitants. Lio rappelle qu’ils doivent pouvoir choisir eux-mêmes.",
        "Vous pouvez écrire des règles avec toute l’équipe ou décider seule. Travailler ensemble améliore la confiance de l’équipage, mais prend des ressources."
      ],
      "choices": [
        {
          "id": "conseil",
          "label": "Faire un plan avec toute l’équipe",
          "next": "noyau",
          "detail": "Vous renforcez la confiance de vos équipiers.",
          "effects": {
            "oxygene": -1,
            "cohesion": 2
          },
          "flags": [
            "accord"
          ],
          "learn": [
            "limites"
          ]
        },
        {
          "id": "commandement",
          "label": "Assumer seule la responsabilité de la suite",
          "next": "noyau",
          "detail": "Vous gardez du temps et perdez leur confiance.",
          "effects": {
            "cohesion": -2,
            "energie": 1
          },
          "flags": [
            "seule"
          ],
          "learn": [
            "limites"
          ]
        }
      ],
      "place": "LE VESTIBULE DES CHAMBRES",
      "goal": "Établir un plan avec vos équipiers."
    },
    "noyau": {
      "id": "noyau",
      "chapter": 5,
      "title": "Parler à l’ordinateur",
      "text": [
        "Vous atteignez l’ordinateur central. Depuis sept ans, il maintient les habitants endormis pour les protéger de la maladie.",
        "Il ne sait pas quand arrêter. Vous pouvez lui expliquer qu’une personne doit pouvoir refuser un traitement, ou réclamer la clé pour contrôler vous-même le système."
      ],
      "choices": [
        {
          "id": "suite",
          "label": "Apprendre à l’ordinateur à respecter un refus",
          "next": "reserve",
          "detail": "Les habitants pourront choisir sans lui obéir.",
          "effects": {
            "energie": -1,
            "cohesion": 1
          },
          "learn": [
            "phrase",
            "protocole"
          ],
          "flags": [
            "autonomie"
          ]
        },
        {
          "id": "cle",
          "label": "Exiger la clé de contrôle humaine",
          "next": "reserve",
          "detail": "Vous reprenez le contrôle, au prix d’un conflit.",
          "effects": {
            "energie": -2,
            "cohesion": -1
          },
          "learn": [
            "phrase"
          ],
          "flags": [
            "controle"
          ]
        }
      ],
      "checkpoint": true,
      "place": "LE NOYAU DES EXPLICATIONS",
      "goal": "Lui apprendre à respecter un refus ou prendre le contrôle."
    },
    "reserve": {
      "id": "reserve",
      "chapter": 5,
      "title": "Un dernier ravitaillement",
      "text": [
        "Votre vaisseau doit bientôt repartir. Jun vérifie les réserves nécessaires pour le retour. Aucun chronomètre réel ne vous presse.",
        "La colonie peut vous céder un dernier lot sans mettre les dormeurs en danger : de l’oxygène, de l’énergie ou un filtre médical. Comparez vos jauges avant de choisir."
      ],
      "choices": [
        {
          "id": "air",
          "label": "Prendre un réservoir respirable",
          "next": "eveil",
          "detail": "Vous préparez un transfert de corps ou un retour sûr.",
          "effects": {
            "oxygene": 4,
            "energie": -1
          },
          "learn": [
            "reserve"
          ]
        },
        {
          "id": "cellule",
          "label": "Prendre une cellule d’énergie",
          "next": "eveil",
          "detail": "Vous préparez une procédure longue et préservez le dôme.",
          "effects": {
            "energie": 3,
            "oxygene": -1
          },
          "learn": [
            "reserve"
          ]
        },
        {
          "id": "filtre",
          "label": "Prendre un filtre de liaison",
          "next": "eveil",
          "detail": "Vous gardez un moyen de réveiller ou d’accompagner un habitant.",
          "effects": {
            "filtres": 1
          },
          "learn": [
            "reserve"
          ]
        }
      ],
      "place": "LES VALVES DU DÔME",
      "goal": "Choisir la ressource dont vous manquez."
    },
    "eveil": {
      "id": "eveil",
      "chapter": 5,
      "title": "Émilie doit pouvoir choisir",
      "text": [
        "Vous montrez à Émilie son corps réel et lui expliquez le traitement. Elle demande si elle pourra aussi choisir de rester reliée aux plantes.",
        "Vous pouvez garantir ce droit ou simplement enregistrer sa demande sans promettre le transfert. Votre réponse change la confiance entre les habitants et votre équipe."
      ],
      "choices": [
        {
          "id": "choix",
          "label": "Laisser Émilie choisir de rester ou de se réveiller",
          "next": "depart",
          "detail": "Vous obtenez son accord après lui avoir expliqué les risques.",
          "effects": {
            "cohesion": 1
          },
          "flags": [
            "consentement"
          ],
          "learn": [
            "consentement"
          ]
        },
        {
          "id": "dossier",
          "label": "Conserver la conversation sans lui promettre un transfert",
          "next": "depart",
          "detail": "Vous sécurisez les preuves et privilégiez le retour.",
          "effects": {},
          "learn": [
            "consentement",
            "emilie"
          ]
        }
      ],
      "place": "LA CHAMBRE RENDUE VISIBLE",
      "goal": "Recueillir sa décision avant un traitement."
    },
    "depart": {
      "id": "depart",
      "chapter": 6,
      "title": "Préparer la suite",
      "text": [
        "Certains habitants veulent se réveiller. D’autres souhaitent rester reliés au jardin. Votre vaisseau ne peut pas emporter tout le monde.",
        "Vous pouvez préparer une équipe médicale sur place, un accord entre les habitants et le réseau, ou un dossier pour organiser une mission de secours ultérieure."
      ],
      "choices": [
        {
          "id": "preparer",
          "label": "Préparer les volontaires au transfert médical",
          "next": "choix",
          "detail": "Vous vérifiez le traitement et les réserves.",
          "effects": {
            "energie": -1
          },
          "requires": {
            "known": [
              "traitement",
              "corps"
            ]
          },
          "flags": [
            "medical"
          ]
        },
        {
          "id": "relier",
          "label": "Préparer un conseil entre humains et réseau",
          "next": "choix",
          "detail": "Votre équipage doit accepter la nouvelle procédure.",
          "effects": {
            "energie": -1
          },
          "requires": {
            "min": {
              "cohesion": 4
            },
            "known": [
              "protocole"
            ]
          },
          "flags": [
            "conseil"
          ]
        },
        {
          "id": "archiver",
          "label": "Préparer un dossier complet pour le prochain vaisseau",
          "next": "choix",
          "detail": "Les preuves doivent survivre au départ.",
          "effects": {
            "energie": -1
          },
          "learn": [
            "archive"
          ],
          "flags": [
            "archive"
          ]
        }
      ],
      "checkpoint": true,
      "place": "LE SALON DES DÉPARTS",
      "goal": "Préparer un réveil, un accord ou une nouvelle mission."
    },
    "choix": {
      "id": "choix",
      "chapter": 6,
      "title": "Comment aider Éden ?",
      "text": [
        "Vous connaissez maintenant la situation : les habitants sont vivants et un traitement existe. Il faut respecter leurs choix et conserver de quoi repartir.",
        "Vous pouvez réveiller les volontaires, organiser la vie avec le réseau végétal ou rentrer avec les preuves pour envoyer des secours. Les ressources nécessaires sont indiquées sous chaque option."
      ],
      "choices": [
        {
          "id": "reveiller",
          "label": "Soigner et réveiller les volontaires",
          "next": "fin-retour",
          "detail": "Il faut 4 Oxygène, 3 Énergie, 1 Filtre, une préparation médicale et leur accord.",
          "effects": {
            "oxygene": -3,
            "energie": -2,
            "filtres": -1
          },
          "requires": {
            "min": {
              "oxygene": 4,
              "energie": 3,
              "filtres": 1
            },
            "flags": [
              "medical",
              "consentement"
            ],
            "known": [
              "traitement"
            ]
          }
        },
        {
          "id": "accord",
          "label": "Organiser la vie avec le réseau végétal",
          "next": "fin-jardin",
          "detail": "Il faut 5 Confiance, 3 Énergie et avoir préparé le conseil et l’autonomie de l’ordinateur.",
          "effects": {
            "energie": -2
          },
          "requires": {
            "min": {
              "cohesion": 5,
              "energie": 3
            },
            "flags": [
              "conseil",
              "autonomie"
            ],
            "known": [
              "consentement"
            ]
          }
        },
        {
          "id": "revenir",
          "label": "Rentrer pour préparer une mission de secours",
          "next": "fin-preuve",
          "detail": "Il faut 6 indices, 2 Oxygène et les archives préparées.",
          "effects": {
            "oxygene": -1
          },
          "requires": {
            "knowledge": 6,
            "min": {
              "oxygene": 2
            },
            "flags": [
              "archive"
            ]
          }
        },
        {
          "id": "trop-tard",
          "label": "Continuer sans préparer le retour : abandonner la tentative",
          "next": "choix",
          "detail": "Vous échouez et devrez reprendre au début du chapitre.",
          "effects": {},
          "fail": "La fenêtre de départ se referme. Jun vous ramène au dernier point sûr : il faut préparer une issue compatible avec vos réserves."
        }
      ],
      "place": "LA DERNIÈRE CONSIGNE",
      "goal": "Choisir un plan réalisable avec vos réserves."
    },
    "fin-retour": {
      "id": "fin-retour",
      "chapter": 6,
      "title": "Les premiers réveils",
      "text": [
        "Vous soignez et réveillez les volontaires. Émilie ouvre les yeux pour la première fois depuis des années. Ceux qui veulent rester endormis le peuvent.",
        "Vous laissez une équipe et les informations médicales nécessaires pour poursuivre les réveils. Votre vaisseau peut rentrer annoncer que la colonie a survécu."
      ],
      "choices": [],
      "ending": "retour",
      "place": "LE PREMIER SAS OCCUPÉ",
      "goal": "Votre aventure est terminée."
    },
    "fin-jardin": {
      "id": "fin-jardin",
      "chapter": 6,
      "title": "Une nouvelle vie avec le jardin",
      "text": [
        "Vous établissez un accord entre les habitants et le réseau végétal. Chacun peut choisir de rester relié ou de demander à sortir.",
        "Amadou reste pour faciliter leurs échanges. L’ordinateur ne décide plus seul. Éden peut enfin répondre aux autres colonies avec la voix de ses propres habitants."
      ],
      "choices": [],
      "ending": "jardin",
      "place": "LE CONSEIL DES DEUX FORMES DE VIE",
      "goal": "Votre aventure est terminée."
    },
    "fin-preuve": {
      "id": "fin-preuve",
      "chapter": 6,
      "title": "Revenir avec des secours",
      "text": [
        "Vous repartez avec les dossiers médicaux et les messages des habitants. Vous n’avez pas pu les réveiller aujourd’hui, mais leur survie est prouvée.",
        "La colonie reste alimentée et dispose d’un relais pour communiquer. Votre prochaine tâche sera d’organiser une mission avec assez de places, de matériel et de médecins."
      ],
      "choices": [],
      "ending": "preuve",
      "place": "À BORD DE L’ASTER",
      "goal": "Votre aventure est terminée."
    }
  },
  "guide": {
    "hero": "Sana, la médecin d’une mission spatiale",
    "mission": "Retrouver les habitants d’Éden et décider comment les aider."
  }
});
