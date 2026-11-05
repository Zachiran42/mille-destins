(function(root,S){if(typeof module==='object'&&module.exports)module.exports=S;else root.RangStory=S;})(typeof globalThis!=='undefined'?globalThis:this,{
  "chapters": [
    [
      "Le premier donjon",
      "Découvrez votre pouvoir et retrouvez la surface."
    ],
    [
      "Les habitants disparus",
      "Aidez Léonie à chercher sa sœur."
    ],
    [
      "Le refuge",
      "Préparez vos pouvoirs et choisissez un objet magique."
    ],
    [
      "Les prisonniers",
      "Trouvez les captifs sous la bibliothèque."
    ],
    [
      "La ville en danger",
      "Sauvez Nima et préparez le dernier combat."
    ],
    [
      "Le maître du donjon",
      "Battez le Régent et décidez du sort des captifs."
    ]
  ],
  "cast": [
    {
      "id": "ari",
      "name": "Ari Veyr",
      "role": "Votre personnage",
      "portrait": 0,
      "desc": "Vous êtes un coursier. Votre nouveau pouvoir Écho vous permet de combattre et de gagner des niveaux."
    },
    {
      "id": "nima",
      "name": "Nima Ossan",
      "role": "La médecin de votre équipe",
      "portrait": 1,
      "desc": "Nima soigne les blessés et peut vous aider avant certains combats si elle vous fait confiance."
    },
    {
      "id": "soren",
      "name": "Soren Daal",
      "role": "Le combattant de votre équipe",
      "portrait": 2,
      "desc": "Soren connaît les monstres. Il peut vous entraîner et affaiblir le dernier ennemi."
    },
    {
      "id": "veilleuse",
      "name": "La Veilleuse",
      "role": "Votre guide dans le donjon",
      "portrait": 3,
      "desc": "Cette femme connaît les règles du donjon et vous donne des conseils."
    },
    {
      "id": "leonie",
      "name": "Léonie Ardent",
      "role": "L’archiviste qui cherche sa sœur",
      "portrait": 4,
      "desc": "Léonie cherche Ione, sa sœur disparue. Ses recherches vous aident à comprendre les captures."
    },
    {
      "id": "kael",
      "name": "Kael Var",
      "role": "Le représentant des autorités",
      "portrait": 5,
      "desc": "Kael propose de l’argent et de la puissance contre une dette magique. Cette dette renforce le dernier ennemi."
    }
  ],
  "nodes": {
    "c1": {
      "id": "c1",
      "chapter": 1,
      "title": "Une porte sous la ville",
      "text": [
        "Vous êtes Ari, le porteur de matériel de l’équipe. Vous n’avez encore aucun pouvoir. Nima, la médecin, et Soren, le combattant, vous accompagnent dans une station abandonnée.",
        "Une porte magique apparaît sur les rails. Derrière elle se trouve un donjon : un lieu rempli de monstres. Vous pouvez examiner la porte ou protéger Nima pendant l’entrée."
      ],
      "choices": [
        {
          "id": "inspect",
          "label": "Examiner la porte magique",
          "detail": "Lucidité +1 : vous comprenez mieux le donjon.",
          "to": "c1sigil",
          "effects": {
            "insight": 1,
            "flags": [
              "firstLaw"
            ]
          },
          "requires": {}
        },
        {
          "id": "shield",
          "label": "Passer devant Nima",
          "detail": "Lien avec Nima +1. Une éclisse vous blesse : −6 PV.",
          "to": "c1sigil",
          "effects": {
            "hp": -6,
            "nima": 1,
            "flags": [
              "protectedNima"
            ]
          },
          "requires": {}
        }
      ],
      "goal": "Entrer dans le donjon avec votre équipe."
    },
    "c1sigil": {
      "id": "c1sigil",
      "chapter": 1,
      "title": "Votre premier pouvoir",
      "text": [
        "Le sol s’effondre. Un chien fait de verre vous attaque. Votre arme se met à briller et un message apparaît devant vos yeux : « Pouvoir Écho débloqué ».",
        "Écho est une attaque magique. Elle vous permet de blesser ce monstre. Pour la première fois, vous pouvez combattre et gagner de l’expérience."
      ],
      "choices": [
        {
          "id": "face",
          "label": "Combattre le chien de verre",
          "detail": "Votre premier combat. Vous jouez deux actions, puis l’ennemi attaque.",
          "to": "fightHound",
          "effects": {},
          "requires": {}
        }
      ],
      "art": "archive",
      "goal": "Vaincre le monstre qui bloque le quai."
    },
    "fightHound": {
      "id": "fightHound",
      "chapter": 1,
      "title": "Le chien de verre",
      "text": [
        "Le chien de verre vous barre le passage.",
        "Il annonce son attaque avant de frapper. Regardez ses dégâts prévus, puis choisissez vos actions."
      ],
      "choices": [],
      "enemy": "hound",
      "next": "c1rescue",
      "art": "archive",
      "arenaTitle": "Le quai brisé",
      "goal": "Survivre à votre premier combat."
    },
    "c1rescue": {
      "id": "c1rescue",
      "chapter": 1,
      "title": "Nima est coincée",
      "text": [
        "Le chien est vaincu. Votre niveau augmente : votre nouveau pouvoir peut progresser.",
        "Mais Nima a la jambe coincée sous une poutre. Vous pouvez utiliser un soin, dépenser de la magie ou la dégager en vous blessant. Elle sera sauvée dans les trois cas ; le coût change."
      ],
      "choices": [
        {
          "id": "potion",
          "label": "Utiliser une de vos potions pour Nima",
          "detail": "Potion −1. Lien avec Nima +2. Elle retiendra votre geste.",
          "to": "c1bell",
          "effects": {
            "potions": -1,
            "nima": 2,
            "flags": [
              "nimaSaved"
            ]
          },
          "requires": {
            "potions": 1
          }
        },
        {
          "id": "echo",
          "label": "Découper la poutre avec l’Écho",
          "detail": "Mana −8, dette +1. Nima est sauvée, mais votre pouvoir prend une empreinte.",
          "to": "c1bell",
          "effects": {
            "mp": -8,
            "debt": 1,
            "nima": 1,
            "flags": [
              "nimaSaved"
            ]
          },
          "requires": {
            "mp": 8
          }
        },
        {
          "id": "carry",
          "label": "La dégager à mains nues",
          "detail": "PV −14. Lien avec Soren +1. Nima est sauvée.",
          "to": "c1bell",
          "effects": {
            "hp": -14,
            "soren": 1,
            "flags": [
              "nimaSaved"
            ]
          },
          "requires": {}
        }
      ],
      "goal": "Libérer la médecin sans épuiser vos réserves."
    },
    "c1bell": {
      "id": "c1bell",
      "chapter": 1,
      "title": "Le gardien de la sortie",
      "text": [
        "Un automate avec une cloche à la place de la tête bloque l’escalier. Son armure semble solide.",
        "Une femme aux cheveux blancs vous conseille d’observer ses attaques. On l’appelle la Veilleuse. Elle connaît les monstres du donjon."
      ],
      "choices": [
        {
          "id": "warden",
          "label": "Briser le gardien",
          "detail": "Ennemi blindé. Lire sa faille et garder avant le carillon vous aidera.",
          "to": "fightBell",
          "effects": {},
          "requires": {}
        }
      ],
      "goal": "Battre le gardien pour quitter la station."
    },
    "fightBell": {
      "id": "fightBell",
      "chapter": 1,
      "title": "Le gardien à la cloche",
      "text": [
        "Le gardien lève son marteau.",
        "Lire sa faille facilite vos attaques. La Garde réduit les dégâts de son prochain coup."
      ],
      "choices": [],
      "enemy": "warden",
      "next": "c1end",
      "art": "archive",
      "goal": "Utiliser la défense face aux grosses attaques."
    },
    "c1end": {
      "id": "c1end",
      "chapter": 1,
      "title": "Faut-il révéler votre pouvoir ?",
      "text": [
        "Votre équipe retrouve la surface. Vous avez survécu et gagné des niveaux.",
        "Kael, un représentant des autorités, veut enregistrer votre pouvoir. Il vous offre de l’argent, mais cet accord ajoutera une dette magique. Plus cette dette monte, plus votre dernier ennemi sera puissant."
      ],
      "choices": [
        {
          "id": "report",
          "label": "Déclarer votre pouvoir aux autorités",
          "detail": "Or +15, dette +1, confiance de Soren −1. La dette renforce le dernier ennemi.",
          "to": "c2",
          "effects": {
            "gold": 15,
            "debt": 1,
            "soren": -1,
            "flags": [
              "registered"
            ]
          },
          "requires": {}
        },
        {
          "id": "hide",
          "label": "Garder cette progression secrète",
          "detail": "Lien avec Soren +1. Vous conservez l’initiative.",
          "to": "c2",
          "effects": {
            "soren": 1,
            "flags": [
              "hiddenEcho"
            ]
          },
          "requires": {}
        }
      ],
      "goal": "Décider si les autorités doivent connaître votre progression."
    },
    "c2": {
      "id": "c2",
      "chapter": 2,
      "title": "Un marché risqué",
      "text": [
        "À l’infirmerie, Nima soigne vos blessures. Kael revient avec une offre : de l’argent en échange d’une nouvelle dette magique.",
        "Vous pouvez aussi acheter des soins ou écouter Léonie, une archiviste qui enquête sur les personnes disparues."
      ],
      "choices": [
        {
          "id": "leonie",
          "label": "Écouter Léonie parler de sa sœur disparue",
          "detail": "Lucidité +1. Vous découvrez une piste pour retrouver les captifs.",
          "to": "c2leonie",
          "effects": {
            "insight": 1
          },
          "requires": {}
        },
        {
          "id": "market",
          "label": "Acheter des soins avant de repartir",
          "detail": "Or −12, potions +2.",
          "to": "c2leonie",
          "effects": {
            "gold": -12,
            "potions": 2
          },
          "requires": {
            "gold": 12
          }
        },
        {
          "id": "pact",
          "label": "Signer la prime exceptionnelle",
          "detail": "Or +25, dette +2. Certains ennemis sauront exploiter ce contrat.",
          "to": "c2leonie",
          "effects": {
            "gold": 25,
            "debt": 2,
            "flags": [
              "kaelPact"
            ]
          },
          "requires": {}
        }
      ],
      "checkpoint": true,
      "goal": "Préparer la prochaine expédition."
    },
    "c2leonie": {
      "id": "c2leonie",
      "chapter": 2,
      "title": "La sœur disparue de Léonie",
      "text": [
        "Léonie vous montre une photo. Sa sœur Ione en a disparu, comme si elle n’avait jamais été là.",
        "Elle pense que les monstres retiennent Ione dans le donjon. Un détour dangereux permettrait de récupérer sa plaque d’identité. La route directe évite ce combat."
      ],
      "choices": [
        {
          "id": "detour",
          "label": "Prendre le détour avec Léonie",
          "detail": "Combat supplémentaire. Expérience et une preuve à récupérer.",
          "to": "c2optional",
          "effects": {
            "leonie": 1
          },
          "requires": {}
        },
        {
          "id": "direct",
          "label": "Suivre la route officielle",
          "detail": "Conserver vos ressources, mais laisser une preuve derrière vous.",
          "to": "c2bossIntro",
          "effects": {},
          "requires": {}
        }
      ],
      "goal": "Choisir si vous aidez Léonie à trouver une preuve."
    },
    "c2optional": {
      "id": "c2optional",
      "chapter": 2,
      "title": "Un combat sur le détour",
      "text": [
        "Des chiens de verre occupent l’atelier.",
        "La preuve que Léonie cherche se trouve ici. Il faut les vaincre pour la récupérer."
      ],
      "choices": [],
      "enemy": "hound",
      "tier": 1,
      "xp": 55,
      "next": "c2proof",
      "art": "archive",
      "enemyName": "Chien de verre rémanent",
      "goal": "Vaincre les monstres pour retrouver la plaque."
    },
    "c2proof": {
      "id": "c2proof",
      "chapter": 2,
      "title": "La plaque d’Ione",
      "text": [
        "Vous récupérez une plaque portant le nom d’Ione, la sœur de Léonie. Elle prouve qu’Ione a bien existé.",
        "Vous pouvez la garder pour l’enquête ou l’échanger contre de l’argent et un soin. Léonie vous en voudra si vous la vendez."
      ],
      "choices": [
        {
          "id": "keep",
          "label": "Conserver la plaque comme preuve",
          "detail": "Lucidité +1, preuve d’Ione. Elle comptera aux archives.",
          "to": "c2bossIntro",
          "effects": {
            "insight": 1,
            "flags": [
              "ioneProof"
            ]
          },
          "requires": {}
        },
        {
          "id": "trade",
          "label": "Échanger la plaque contre des réserves",
          "detail": "Or +18, potions +1. Lien avec Léonie −1.",
          "to": "c2bossIntro",
          "effects": {
            "gold": 18,
            "potions": 1,
            "leonie": -1,
            "flags": [
              "soldProof"
            ]
          },
          "requires": {}
        }
      ],
      "goal": "Garder une preuve ou obtenir des provisions."
    },
    "c2bossIntro": {
      "id": "c2bossIntro",
      "chapter": 2,
      "title": "Le monstre qui vole les noms",
      "text": [
        "Un monstre couvert de plaques d’identité bloque le passage. On l’appelle le percepteur : il capture les habitants et utilise leur énergie.",
        "Il veut maintenant vous prendre à votre tour. Son attaque peut aussi vider votre mana, la réserve de vos pouvoirs magiques."
      ],
      "choices": [
        {
          "id": "fight",
          "label": "Refuser la saisie",
          "detail": "Premier adversaire majeur. Ses taxes drainent le mana ; sa sentence exige une défense.",
          "to": "fightCollector",
          "effects": {},
          "requires": {}
        }
      ],
      "art": "archive",
      "goal": "Vaincre le percepteur."
    },
    "fightCollector": {
      "id": "fightCollector",
      "chapter": 2,
      "title": "Le percepteur",
      "text": [
        "Le percepteur prépare son attaque.",
        "Observez les dégâts et le mana qu’il va vous retirer avant de choisir vos actions."
      ],
      "choices": [],
      "enemy": "collector",
      "next": "c2end",
      "art": "archive",
      "goal": "Protéger votre santé et votre mana."
    },
    "c2end": {
      "id": "c2end",
      "chapter": 2,
      "title": "Que faire de son énergie ?",
      "text": [
        "Le percepteur est vaincu. Son noyau contient l’énergie des personnes qu’il a capturées.",
        "Vous pouvez libérer cette énergie pour aider les victimes. L’absorber vous rendra plus fort, mais augmentera votre dette magique."
      ],
      "choices": [
        {
          "id": "free",
          "label": "Libérer les empreintes humaines",
          "detail": "Dette −1, lien avec Léonie +1.",
          "to": "c3",
          "effects": {
            "debt": -1,
            "leonie": 1,
            "flags": [
              "namesFreed"
            ]
          },
          "requires": {}
        },
        {
          "id": "absorb",
          "label": "Absorber toute la structure",
          "detail": "Expérience +45, dette +2, puissance permanente +2.",
          "to": "c3",
          "effects": {
            "xp": 45,
            "debt": 2,
            "power": 2,
            "flags": [
              "collectorAbsorbed"
            ]
          },
          "requires": {}
        }
      ],
      "goal": "Choisir entre libérer les prisonniers et gagner du pouvoir."
    },
    "c3": {
      "id": "c3",
      "chapter": 3,
      "title": "Une pause au refuge",
      "text": [
        "Votre équipe rejoint une bibliothèque transformée en refuge. Vous savez maintenant que les monstres utilisent des habitants prisonniers.",
        "Avant de repartir, vous pouvez vous entraîner avec Soren, enquêter avec Léonie ou aider Nima à soigner les réfugiés."
      ],
      "choices": [
        {
          "id": "train",
          "label": "S’entraîner avec Soren",
          "detail": "Lien avec Soren +2, expérience +15.",
          "to": "c3choice",
          "effects": {
            "soren": 2,
            "xp": 15
          },
          "requires": {}
        },
        {
          "id": "study",
          "label": "Étudier les effacements avec Léonie",
          "detail": "Lucidité +1 et lien avec Léonie +1.",
          "to": "c3choice",
          "effects": {
            "insight": 1,
            "leonie": 1
          },
          "requires": {}
        },
        {
          "id": "care",
          "label": "Aider Nima à soigner les réfugiés",
          "detail": "Lien avec Nima +2. Potions +1.",
          "to": "c3choice",
          "effects": {
            "nima": 2,
            "potions": 1
          },
          "requires": {}
        }
      ],
      "checkpoint": true,
      "goal": "Vous renforcer avant de descendre plus bas."
    },
    "c3choice": {
      "id": "c3choice",
      "chapter": 3,
      "title": "Deux routes vers les reliques",
      "text": [
        "Des objets magiques sont conservés sous la bibliothèque. L’un d’eux pourrait vous aider pour la suite.",
        "Le chemin principal est gardé par un monstre. Un passage plus étroit l’évite, mais vous coûtera de la santé."
      ],
      "choices": [
        {
          "id": "ink",
          "label": "Descendre dans le réservoir d’encre",
          "detail": "Adversaire optionnel, puis choix d’un artefact.",
          "to": "c3optional",
          "effects": {},
          "requires": {}
        },
        {
          "id": "margin",
          "label": "Prendre le passage étroit",
          "detail": "Vous évitez le combat, mais perdez 7 PV.",
          "to": "c3artifact",
          "effects": {
            "hp": -7
          },
          "requires": {}
        }
      ],
      "art": "archive",
      "goal": "Choisir un combat ou un passage dangereux."
    },
    "c3optional": {
      "id": "c3optional",
      "chapter": 3,
      "title": "Le monstre de la réserve",
      "text": [
        "Un monstre utilise son chant pour absorber votre mana.",
        "Gardez assez de magie pour l’attaquer et défendez-vous quand il prépare son coup le plus fort."
      ],
      "choices": [],
      "enemy": "cantor",
      "tier": 1,
      "xp": 65,
      "next": "c3artifact",
      "art": "archive",
      "goal": "Vaincre le gardien du chemin principal."
    },
    "c3artifact": {
      "id": "c3artifact",
      "chapter": 3,
      "title": "Un objet pour votre façon de jouer",
      "text": [
        "Vous atteignez une vitrine contenant trois objets magiques. Vous ne pouvez en emporter qu’un.",
        "L’Ancre améliore votre défense. Le Prisme augmente vos dégâts. La Fontaine donne davantage de mana et vous aide à le récupérer."
      ],
      "choices": [
        {
          "id": "anchor",
          "label": "L’Ancre de cuivre",
          "detail": "Défense +2. La garde devient votre refuge le plus fiable.",
          "to": "c3warden",
          "effects": {
            "relic": "anchor"
          },
          "requires": {}
        },
        {
          "id": "prism",
          "label": "Le Prisme fêlé",
          "detail": "Attaque +3. Vos frappes deviennent plus franches.",
          "to": "c3warden",
          "effects": {
            "relic": "prism"
          },
          "requires": {}
        },
        {
          "id": "well",
          "label": "La Fontaine muette",
          "detail": "Mana maximal +10 et récupération par concentration +2.",
          "to": "c3warden",
          "effects": {
            "relic": "well"
          },
          "requires": {}
        }
      ],
      "art": "archive",
      "goal": "Choisir un seul bonus permanent."
    },
    "c3warden": {
      "id": "c3warden",
      "chapter": 3,
      "title": "Le gardien se réveille",
      "text": [
        "Dès que vous prenez une relique, un automate se relève.",
        "Il bloque la sortie de la réserve. Votre nouvel objet est déjà actif pendant ce combat."
      ],
      "choices": [],
      "enemy": "warden",
      "tier": 1,
      "xp": 85,
      "next": "c3end",
      "art": "archive",
      "enemyName": "Sentinelle de la réserve",
      "goal": "Vaincre le gardien pour emporter votre objet."
    },
    "c3end": {
      "id": "c3end",
      "chapter": 3,
      "title": "Une attaque plus puissante",
      "text": [
        "Vous découvrez la Rupture : une attaque très forte qui demande de la préparation. Elle devient accessible au niveau 5.",
        "L’utiliser ajoute une dette magique si vous n’avez pas son talent de maîtrise. Soren vous propose de tirer une leçon de ses erreurs, ou de tester votre force tout de suite."
      ],
      "choices": [
        {
          "id": "learn",
          "label": "Mémoriser l’erreur de Soren",
          "detail": "Lucidité +1 et lien avec Soren +1.",
          "to": "c4",
          "effects": {
            "insight": 1,
            "soren": 1
          },
          "requires": {}
        },
        {
          "id": "test",
          "label": "Tester la Rupture sur un sceau vivant",
          "detail": "Expérience +25, dette +1.",
          "to": "c4",
          "effects": {
            "xp": 25,
            "debt": 1,
            "power": 1
          },
          "requires": {}
        }
      ],
      "goal": "Comprendre le risque de votre nouveau pouvoir."
    },
    "c4": {
      "id": "c4",
      "chapter": 4,
      "title": "Les archives souterraines",
      "text": [
        "Sous la bibliothèque, votre équipe découvre les archives du donjon. C’est ici que sont conservés les noms des habitants capturés.",
        "Vous pouvez étudier les documents, présenter la plaque d’Ione si vous l’avez gardée, ou forcer le passage avec votre pouvoir."
      ],
      "choices": [
        {
          "id": "read",
          "label": "Étudier les documents des archives",
          "detail": "Mana −10, lucidité +2. Vous préparez le combat contre le chef.",
          "to": "c4trial",
          "effects": {
            "mp": -10,
            "insight": 2,
            "flags": [
              "archiveRead"
            ]
          },
          "requires": {
            "mp": 10
          }
        },
        {
          "id": "proof",
          "label": "Montrer la plaque d’Ione",
          "detail": "Lucidité +1, préparation contre l’archiviste.",
          "to": "c4trial",
          "effects": {
            "insight": 1,
            "flags": [
              "archiveRead"
            ]
          },
          "requires": {
            "flags": [
              "ioneProof"
            ]
          }
        },
        {
          "id": "force",
          "label": "Ouvrir le passage avec votre pouvoir",
          "detail": "Dette +1, puissance +1. Vous ne trouvez pas d’indice sur le chef.",
          "to": "c4trial",
          "effects": {
            "debt": 1,
            "power": 1
          },
          "requires": {}
        }
      ],
      "checkpoint": true,
      "art": "archive",
      "goal": "Trouver où les habitants sont retenus."
    },
    "c4trial": {
      "id": "c4trial",
      "chapter": 4,
      "title": "Le passage gardé",
      "text": [
        "Des plaques d’identité pendent au-dessus de l’eau. Vous reconnaissez des noms de votre quartier.",
        "Un monstre vous empêche d’aller plus loin. Derrière lui se trouve la salle où les habitants sont retenus."
      ],
      "choices": [
        {
          "id": "cantor",
          "label": "Déchirer le silence",
          "detail": "Combat. Gardez du mana pour ce qui attend derrière.",
          "to": "fightCantor",
          "effects": {},
          "requires": {}
        }
      ],
      "art": "archive",
      "goal": "Atteindre la salle des prisonniers."
    },
    "fightCantor": {
      "id": "fightCantor",
      "chapter": 4,
      "title": "Le voleur de mana",
      "text": [
        "Le monstre prépare un chant qui peut épuiser votre mana.",
        "Concentration vous permet de récupérer du mana pendant le combat."
      ],
      "choices": [],
      "enemy": "cantor",
      "tier": 1,
      "next": "c4before",
      "art": "archive",
      "goal": "Vaincre le monstre avant de manquer de magie."
    },
    "c4before": {
      "id": "c4before",
      "chapter": 4,
      "title": "Se soigner avant le chef",
      "text": [
        "Le chef des archives bloque la dernière galerie. Il ne vous a pas encore attaqué.",
        "Vous pouvez demander de l’aide à Nima si elle vous fait assez confiance, utiliser une potion ou garder vos réserves pour plus tard."
      ],
      "choices": [
        {
          "id": "heal",
          "label": "Partager les réserves de Nima",
          "detail": "PV +30, mana +12. Disponible si votre lien atteint 2.",
          "to": "fightArchive",
          "effects": {
            "hp": 30,
            "mp": 12,
            "nima": -1,
            "flags": [
              "nimaReserveUsed"
            ]
          },
          "requires": {
            "nima": 2
          }
        },
        {
          "id": "potion",
          "label": "Prendre un soin de votre sac",
          "detail": "Potion −1, PV +34.",
          "to": "fightArchive",
          "effects": {
            "potions": -1,
            "hp": 34
          },
          "requires": {
            "potions": 1
          }
        },
        {
          "id": "keep",
          "label": "Conserver tout pour la traversée",
          "detail": "Entrer avec vos ressources actuelles.",
          "to": "fightArchive",
          "effects": {},
          "requires": {}
        }
      ],
      "art": "archive",
      "goal": "Choisir vos soins avant le prochain combat."
    },
    "fightArchive": {
      "id": "fightArchive",
      "chapter": 4,
      "title": "Le chef des archives",
      "text": [
        "L’archiviste protège la salle où les habitants sont enfermés.",
        "Les renseignements trouvés dans les archives peuvent vous aider à comprendre sa défense."
      ],
      "choices": [],
      "enemy": "archive",
      "next": "c4end",
      "art": "archive",
      "goal": "Vaincre le gardien des prisonniers."
    },
    "c4end": {
      "id": "c4end",
      "chapter": 4,
      "title": "Les habitants sont encore vivants",
      "text": [
        "Vous trouvez enfin les disparus, dont Ione. Ils sont vivants, mais leur énergie est enfermée dans un système magique appelé le Registre.",
        "Vous pouvez promettre de les libérer. Vous pouvez aussi prendre une part de leur énergie pour devenir plus puissant, au prix d’une nouvelle dette."
      ],
      "choices": [
        {
          "id": "promise",
          "label": "Promettre de libérer les noms",
          "detail": "Lien avec Léonie +2. Votre résolution comptera au seuil final.",
          "to": "c5",
          "effects": {
            "leonie": 2,
            "flags": [
              "promiseFreedom"
            ]
          },
          "requires": {}
        },
        {
          "id": "power",
          "label": "Prélever une part de leur puissance",
          "detail": "Expérience +50, dette +2, puissance +2.",
          "to": "c5",
          "effects": {
            "xp": 50,
            "debt": 2,
            "power": 2,
            "flags": [
              "namesTaken"
            ]
          },
          "requires": {}
        }
      ],
      "goal": "Choisir ce que vous ferez pour les captifs."
    },
    "c5": {
      "id": "c5",
      "chapter": 5,
      "title": "Le danger atteint la ville",
      "text": [
        "À la surface, une rue entière a disparu. Le Registre capture maintenant des quartiers, et les habitants oublient ceux qui manquent.",
        "Kael vous propose davantage de pouvoir en échange d’une grosse dette. Vous pouvez refuser, ou négocier des soins si vous avez assez de lucidité."
      ],
      "choices": [
        {
          "id": "refuse",
          "label": "Refuser le rang et protéger le refuge",
          "detail": "Dette −1. Lien avec Nima +1.",
          "to": "c5choice",
          "effects": {
            "debt": -1,
            "nima": 1,
            "flags": [
              "councilRefused"
            ]
          },
          "requires": {}
        },
        {
          "id": "bargain",
          "label": "Négocier du matériel sans prêter serment",
          "detail": "Or −15, potions +2. Disponible avec lucidité 4.",
          "to": "c5choice",
          "effects": {
            "gold": -15,
            "potions": 2,
            "flags": [
              "bargained"
            ]
          },
          "requires": {
            "gold": 15,
            "insight": 4
          }
        },
        {
          "id": "accept",
          "label": "Accepter le rang proposé",
          "detail": "Puissance +3, dette +3. Kael vous donnera une clé.",
          "to": "c5choice",
          "effects": {
            "power": 3,
            "debt": 3,
            "flags": [
              "councilAccepted"
            ]
          },
          "requires": {}
        }
      ],
      "checkpoint": true,
      "goal": "Préparer votre retour au donjon."
    },
    "c5choice": {
      "id": "c5choice",
      "chapter": 5,
      "title": "Nima commence à disparaître",
      "text": [
        "Nima devient transparente. Le Registre essaie de la capturer parce qu’elle a aidé ses prisonniers.",
        "Vous pouvez lui donner une part de votre santé, utiliser votre lien avec elle ou prendre l’énergie des captifs. Les trois solutions la sauvent, avec des coûts différents."
      ],
      "choices": [
        {
          "id": "scar",
          "label": "Lui donner une part de votre santé",
          "detail": "Santé maximale −10, dette −1. Nima est sauvée.",
          "to": "c5hunter",
          "effects": {
            "scar": 10,
            "debt": -1,
            "nima": 2,
            "flags": [
              "nimaAnchored"
            ]
          },
          "requires": {}
        },
        {
          "id": "bond",
          "label": "La sauver grâce à votre lien",
          "detail": "Mana −12. Il faut 4 points de confiance avec Nima.",
          "to": "c5hunter",
          "effects": {
            "mp": -12,
            "nima": 1,
            "flags": [
              "nimaAnchored"
            ]
          },
          "requires": {
            "mp": 12,
            "nima": 4
          }
        },
        {
          "id": "borrow",
          "label": "Prélever l’énergie des noms captifs",
          "detail": "Puissance +2, dette +2. Nima est protégée, mais elle le saura.",
          "to": "c5hunter",
          "effects": {
            "power": 2,
            "debt": 2,
            "nima": -2,
            "flags": [
              "nimaAnchored",
              "borrowedLives"
            ]
          },
          "requires": {}
        }
      ],
      "goal": "Sauver votre amie."
    },
    "c5hunter": {
      "id": "c5hunter",
      "chapter": 5,
      "title": "Un ennemi vous a suivi",
      "text": [
        "Un nouveau percepteur entre dans le refuge. Cette fois, il vient pour vous.",
        "Il faut le vaincre avant de repartir vers le maître du donjon."
      ],
      "choices": [],
      "enemy": "collector",
      "tier": 1,
      "xp": 105,
      "next": "c5end",
      "art": "archive",
      "enemyName": "Percepteur de votre contrat",
      "goal": "Protéger le refuge."
    },
    "c5end": {
      "id": "c5end",
      "chapter": 5,
      "title": "Qui vous accompagnera ?",
      "text": [
        "Vous connaissez désormais la position du Régent, le maître du donjon. Le vaincre vous donnera accès au Registre.",
        "Nima peut préparer des soins. Soren peut affaiblir la défense du dernier ennemi. Léonie vous aide à garder en tête les personnes à sauver."
      ],
      "choices": [
        {
          "id": "nima",
          "label": "Demander à Nima de vous accompagner",
          "detail": "Lien de 3 requis. Une réserve de soin vous attendra avant le régent.",
          "to": "c6",
          "effects": {
            "flags": [
              "nimaCompanion"
            ]
          },
          "requires": {
            "nima": 3
          }
        },
        {
          "id": "soren",
          "label": "Emmener Soren comme garde du seuil",
          "detail": "Lien de 3 requis. Sa préparation réduit la défense finale.",
          "to": "c6",
          "effects": {
            "flags": [
              "sorenCompanion"
            ]
          },
          "requires": {
            "soren": 3
          }
        },
        {
          "id": "leonie",
          "label": "Emmener Léonie et sa liste",
          "detail": "Lucidité +1. Elle portera les noms que vous devrez sauver.",
          "to": "c6",
          "effects": {
            "insight": 1,
            "flags": [
              "leonieCompanion"
            ]
          },
          "requires": {}
        }
      ],
      "goal": "Choisir votre allié pour la dernière expédition."
    },
    "c6": {
      "id": "c6",
      "chapter": 6,
      "title": "Vers le maître du donjon",
      "text": [
        "Votre équipe atteint la porte du Régent. Il contrôle le Registre et l’énergie des habitants capturés.",
        "Traverser sa barrière vous coûtera de la santé et du mana. Après cela, vous pourrez encore vous préparer avant le combat."
      ],
      "choices": [
        {
          "id": "prepare",
          "label": "Préparer votre dernière traversée",
          "detail": "Franchir le dernier cercle : −18 PV et −8 mana.",
          "to": "c6prepare",
          "effects": {
            "hp": -18,
            "mp": -8
          },
          "requires": {}
        }
      ],
      "checkpoint": true,
      "art": "archive",
      "goal": "Franchir la dernière barrière."
    },
    "c6prepare": {
      "id": "c6prepare",
      "chapter": 6,
      "title": "Une dernière préparation",
      "text": [
        "Le Régent vous attend dans la salle suivante. Votre dette magique lui donne de la force : plus elle est élevée, plus le combat sera dur.",
        "Si Nima vous accompagne, elle peut vous soigner. Sinon, vous pouvez dépenser un soin et de l’argent, ou entrer avec vos réserves actuelles."
      ],
      "choices": [
        {
          "id": "nimaHeal",
          "label": "Accepter la dernière préparation de Nima",
          "detail": "PV +25, mana +15. Disponible si Nima vous accompagne.",
          "to": "fightRegent",
          "effects": {
            "hp": 25,
            "mp": 15,
            "flags": [
              "lastPreparation"
            ]
          },
          "requires": {
            "flags": [
              "nimaCompanion"
            ]
          }
        },
        {
          "id": "supplies",
          "label": "Dépenser un soin et vos dernières pièces",
          "detail": "Or −10, potion −1. PV +34, mana +12.",
          "to": "fightRegent",
          "effects": {
            "gold": -10,
            "potions": -1,
            "hp": 34,
            "mp": 12
          },
          "requires": {
            "gold": 10,
            "potions": 1
          }
        },
        {
          "id": "enter",
          "label": "Entrer avec vos ressources actuelles",
          "detail": "Dernier combat. Le régent renforce ses intentions à chaque phase.",
          "to": "fightRegent",
          "effects": {},
          "requires": {}
        }
      ],
      "art": "archive",
      "goal": "Vérifier vos réserves avant le combat final."
    },
    "fightRegent": {
      "id": "fightRegent",
      "chapter": 6,
      "title": "Le Régent",
      "text": [
        "Le Régent vous affronte avec trois barrières successives.",
        "À chaque nouvelle phase, il devient plus dangereux. Regardez son attaque prévue avant de dépenser vos deux actions."
      ],
      "choices": [],
      "enemy": "regent",
      "next": "finalChoice",
      "art": "archive",
      "goal": "Vaincre le maître du donjon."
    },
    "finalChoice": {
      "id": "finalChoice",
      "chapter": 6,
      "title": "Que faire du Registre ?",
      "text": [
        "Le Régent est vaincu. Vous contrôlez maintenant le Registre, le système qui retient les habitants et leur énergie.",
        "Vous pouvez le détruire pour libérer tout le monde, le garder sous surveillance pour organiser les retours, ou prendre la place du Régent et conserver toute sa puissance."
      ],
      "choices": [
        {
          "id": "free",
          "label": "Détruire le Registre et libérer tout le monde",
          "detail": "Fin de libération. Il faut 5 lucidité et une dette de 4 au maximum.",
          "to": "endingFree",
          "effects": {
            "ending": "free"
          },
          "requires": {
            "insight": 5,
            "maxDebt": 4
          }
        },
        {
          "id": "bind",
          "label": "Garder le Registre pour organiser les retours",
          "detail": "Fin de gardien. Il faut un lien fort ou avoir promis de sauver les captifs.",
          "to": "endingKeeper",
          "effects": {
            "ending": "keeper"
          },
          "requires": {
            "anyOf": [
              {
                "anyBond": 4
              },
              {
                "flags": [
                  "promiseFreedom"
                ]
              }
            ]
          }
        },
        {
          "id": "rule",
          "label": "Prendre la place du Régent",
          "detail": "Fin de souverain. Vous gardez la puissance et le contrôle du Registre.",
          "to": "endingRegent",
          "effects": {
            "ending": "regent"
          },
          "requires": {}
        }
      ],
      "art": "archive",
      "goal": "Décider du sort des prisonniers et de votre pouvoir."
    },
    "endingFree": {
      "id": "endingFree",
      "chapter": 6,
      "title": "Tout le monde revient",
      "text": [
        "Vous détruisez le Registre. Les habitants prisonniers et les rues disparues reviennent dans la ville. Ione retrouve sa sœur Léonie.",
        "Vous gardez votre pouvoir Écho, mais abandonnez la puissance volée aux captifs. Vous avez sauvé la ville sans devenir son nouveau maître."
      ],
      "choices": [],
      "ending": true,
      "art": "city",
      "goal": "Votre aventure est terminée."
    },
    "endingKeeper": {
      "id": "endingKeeper",
      "chapter": 6,
      "title": "Le gardien des retours",
      "text": [
        "Vous gardez le Registre pour libérer les habitants progressivement. Vos compagnons vous aident à le contrôler.",
        "Vous restez puissant, mais devez revenir chaque jour pour assurer les retours. Vous avez accepté cette responsabilité pour protéger la ville."
      ],
      "choices": [],
      "ending": true,
      "art": "archive",
      "goal": "Votre aventure est terminée."
    },
    "endingRegent": {
      "id": "endingRegent",
      "chapter": 6,
      "title": "Le nouveau maître",
      "text": [
        "Vous prenez la place du Régent. Le Registre vous obéit et votre puissance devient immense.",
        "Vous commencez à rendre des habitants à leur famille. Mais vous gardez seul le contrôle du système qui les avait capturés. Vos amis espèrent que vous saurez les écouter."
      ],
      "choices": [],
      "ending": true,
      "art": "archive",
      "goal": "Votre aventure est terminée."
    }
  },
  "start": "c1",
  "guide": {
    "hero": "Ari, un coursier qui découvre des pouvoirs",
    "mission": "Retrouver les habitants disparus et arrêter le maître du donjon."
  },
  "intro": "Vous êtes Ari. Vous accompagnez une équipe dans un donjon sous la ville. Vous y découvrez un pouvoir qui vous permet enfin de gagner des niveaux. Mais les monstres utilisent des habitants prisonniers pour devenir plus forts.",
  "description": "Vous êtes Ari. Vous accompagnez une équipe dans un donjon sous la ville. Vous y découvrez un pouvoir qui vous permet enfin de gagner des niveaux. Mais les monstres utilisent des habitants prisonniers pour devenir plus forts.",
  "subtitle": "Sauver les habitants disparus"
});
