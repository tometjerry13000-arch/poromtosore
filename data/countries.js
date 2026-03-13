// data/countries.js
const countries = {
    spain: {
        name: "Espagne",
        dance: "Flamenco",
        palmColors: { left: "#ff0000", right: "#000000" },
        finalOutfit: {
            description: "robe de flamenco traditionnelle revisitée",
            colors: ["rouge passion", "noir profond"],
            elements: ["volants superposés", "décolleté plongeant", "dos nu", "fente latérale", "traîne"],
            accessories: ["peigne en argent", "rose rouge", "châle à franges", "castagnettes"]
        },
        hairFluo: ["rouge fluo", "rose fluo", "violet fluo"],
        background: "tablao flamenco avec rideaux rouges, ambiance andalouse",
        danceMoves: {
            part1: ["zapateados légers", "braceos amples", "floreo - rotations des poignets", "jeux de doigts complexes"],
            part2: ["zapateados puissants", "braceos majestueux", "jeux avec les volants", "tours complets"]
        }
    },turkey: {
    name: "🇹🇷 Turquie",
    dance: "Danse du Ventre / Oriental",
    palmColors: { left: "#e11d48", right: "#f59e0b" },
    finalOutfit: {
        description: "tenue de danseuse orientale turque",
        colors: ["rouge profond", "or ottoman"],
        elements: ["corset brodé", "jupe longue fendue", "voiles légers", "ceinture à sequins", "transparences"],
        accessories: ["pièces d'or", "bracelets de cheville", "voile de tête", "doigts de zills"]
    },
    hairFluo: ["rouge feu", "or", "ambre"],
    background: "palais ottoman, hamam traditionnel, rues d'Istanbul la nuit",
    danceMoves: {
        part1: [
            "ondulations lentes du ventre - danse du ventre classique",
            "vibrations d'épaules rapides",
            "rotations de hanches circulaires",
            "jeux de voile sensuels"
        ],
        part2: [
            "shimmies explosifs - vibrations de hanches ultra-rapides",
            "mouvements de serpent avec les bras",
            "jeux avec les pièces d'or qui tintent",
            "tours gracieux avec voiles flottants"
        ]
    }
},mexico: {
    name: "🇲🇽 Mexique",
    dance: "Jarabe Tapatío / Folklorique",
    palmColors: { left: "#ef4444", right: "#22c55e" },
    finalOutfit: {
        description: "robe de danseuse folklorique mexicaine",
        colors: ["rouge mexicain", "vert émeraude", "blanc"],
        elements: ["jupe longue à volants", "broderies colorées", "rubans dans les cheveux", "décolleté élégant"],
        accessories: ["fleurs dans les cheveux", "bracelets en argent", "châle brodé", "castagnettes"]
    },
    hairFluo: ["rouge", "rose", "vert"],
    background: "place de village mexicain, soirée de fête, lumières colorées",
    danceMoves: {
        part1: [
            "jeux de pieds rythmés - zapateado mexicain",
            "mouvements de jupe amples et circulaires",
            "tours gracieux avec la jupe qui virevolte",
            "poses de fierté"
        ],
        part2: [
            "accélérations des frappes de pieds",
            "la jupe tourbillonne comme une fleur",
            "jeux avec les rubans dans les cheveux",
            "cambrures spectaculaires"
        ]
    }
},cuba: {
    name: "🇨🇺 Cuba",
    dance: "Salsa / Casino Cubain",
    palmColors: { left: "#f97316", right: "#3b82f6" },
    finalOutfit: {
        description: "tenue de danseuse de salsa cubaine",
        colors: ["orange tropical", "bleu caraïbe"],
        elements: ["robe courte volantée", "strass", "franges", "dos nu", "jambes galbées"],
        accessories: ["fleurs tropicales", "boucles d'oreilles créoles", "chaussures à talons"]
    },
    hairFluo: ["orange", "rose", "turquoise"],
    background: "rue de La Havane, vieilles voitures, coucher de soleil sur la mer",
    danceMoves: {
        part1: [
            "mouvements de hanches latéraux typiques de la salsa",
            "jeux de pieds rapides",
            "bras gracieux",
            "regards charmeurs"
        ],
        part2: [
            "tours rapides et stylés",
            "déhanchés endiablés",
            "jeux avec la robe qui tournoie",
            "poses de reine de la salsa"
        ]
    }
},neptune: {
    name: "🌊 NEPTUNE",
    dance: "Danse des Abysses",
    palmColors: { left: "#1e3c72", right: "#2a5298" },
    finalOutfit: {
        description: "tenue de créature des profondeurs de Neptune",
        colors: ["bleu abyssal", "argent lunaire", "turquoise"],
        elements: ["écailles holographiques", "voiles d'eau", "cristaux de glace", "effet aqueux"],
        accessories: ["couronne de corail", "bijoux de perles", "voiles flottants"]
    },
    hairFluo: ["bleu électrique", "argent", "turquoise"],
    background: "profondeurs de l'océan de Neptune, bulles, créatures bioluminescentes",
    danceMoves: {
        part1: [
            "mouvements flottants comme dans l'eau",
            "ondulations lentes",
            "gestes de sirène",
            "poses aquatiques"
        ],
        part2: [
            "danse sous-marine accélérée",
            "jeux avec les bulles lumineuses",
            "mouvements de tentacules",
            "apnée sensuelle"
        ]
    }
},sun: {
    name: "☀️ SOLEIL",
    dance: "Danse Stellaire",
    palmColors: { left: "#ff0", right: "#ff8c00" },
    finalOutfit: {
        description: "tenue de déesse solaire",
        colors: ["jaune éclatant", "orange brûlé", "or pur"],
        elements: ["rayons de lumière", "paillettes dorées", "effet feu", "transparences chaudes"],
        accessories: ["couronne solaire", "bracelets de lumière", "sandales dorées"]
    },
    hairFluo: ["jaune fluo", "orange", "or"],
    background: "surface du soleil, éruptions solaires, lumière aveuglante",
    danceMoves: {
        part1: [
            "mouvements de flamme",
            "ondulations de chaleur",
            "poses rayonnantes"
        ],
        part2: [
            "danse explosive",
            "mouvements de rayons",
            "éruptions d'énergie"
        ]
    }
},
    brazil: {
        name: "Brésil",
        dance: "Samba",
        palmColors: { left: "#00ff00", right: "#ffff00" },
        finalOutfit: {
            description: "costume de danseuse de samba",
            colors: ["vert émeraude", "jaune soleil"],
            elements: ["body moulant", "plumes spectaculaires", "paillettes", "franges"],
            accessories: ["coiffe de plumes", "bottes à plateforme", "créoles dorées"]
        },
        hairFluo: ["vert fluo", "jaune fluo", "rose fluo"],
        background: "carnaval brésilien, plumes, confettis, lumières colorées",
        danceMoves: {
            part1: ["roulements de hanches lents", "vibrations d'épaules", "jeux de pieds rapides"],
            part2: ["roulements de hanches ultra-rapides", "vibrations de fessiers", "jeux avec les plumes"]
        }
    },
    morocco: {
        name: "Maroc",
        dance: "Danse Orientale",
        palmColors: { left: "#0000ff", right: "#ffd700" },
        finalOutfit: {
            description: "caftan de cérémonie marocain",
            colors: ["bleu Majorelle", "or"],
            elements: ["velours brodé", "décolleté plongeant", "dos nu", "fente latérale"],
            accessories: ["ceinture dorée", "bijoux en or", "colliers superposés"]
        },
        hairFluo: ["bleu électrique", "fuchsia", "violet"],
        background: "palais marocain, zelliges, lampes en cuivre",
        danceMoves: {
            part1: ["ondulations lentes du bassin", "vibrations d'épaules", "vagues du ventre"],
            part2: ["ondulations profondes", "shimmies rapides", "jeux avec les fentes du caftan"]
        }
    },
    senegal: {
        name: "Sénégal",
        dance: "Sabar",
        palmColors: { left: "#00ff00", right: "#ffd700" },
        finalOutfit: {
            description: "tenue traditionnelle sénégalaise",
            colors: ["vert", "or"],
            elements: ["haut corset brodé", "jupe longue fendue", "tissu wax"],
            accessories: ["bijoux en or massif", "ceinture de perles", "tresses ornées"]
        },
        hairFluo: ["vert fluo", "or fluo", "jaune fluo"],
        background: "savane africaine, tissus wax, tambours",
        danceMoves: {
            part1: ["vibrations d'épaules rapides", "secousses de hanches", "mouvements de tête fiers"],
            part2: ["vibrations intenses d'épaules", "secousses de fessiers", "jeux avec les tresses"]
        }
    },
    japan: {
        name: "Japon",
        dance: "Geisha Moderne",
        palmColors: { left: "#ff0000", right: "#ffd700" },
        finalOutfit: {
            description: "kimono de cérémonie moderne",
            colors: ["rouge vermillon", "or"],
            elements: ["soie brodée", "décolleté élégant", "dos nu", "manches longues"],
            accessories: ["obi en satin", "épingles à cheveux", "éventail"]
        },
        hairFluo: ["rouge fluo", "rose fluo", "bleu électrique"],
        background: "jardin japonais, paravents shoji, fleurs de cerisier",
        danceMoves: {
            part1: ["gestes lents et contrôlés", "angles de mains parfaits", "pas glissés", "jeux de nuque"],
            part2: ["mouvements d'éventail", "découverte de la nuque", "jeux avec le kimono"]
        }
    },
    india: {
        name: "Inde",
        dance: "Bollywood",
        palmColors: { left: "#ff6600", right: "#ff00ff" },
        finalOutfit: {
            description: "lehenga de cérémonie bollywoodien",
            colors: ["orange brûlé", "rose fuchsia"],
            elements: ["soie brodée", "choli court", "volants", "broderies d'or"],
            accessories: ["bijoux en or", "bangles", "maang tikka"]
        },
        hairFluo: ["rose fluo", "orange fluo", "violet"],
        background: "palais indien, tentures chamarrées, lumières chaudes",
        danceMoves: {
            part1: ["rotations des poignets", "ondulations de la taille", "inclinaisons de tête"],
            part2: ["rotations complètes", "jeux avec les volants", "expressions faciales expressives"]
        }
    },
    china: {
        name: "Chine",
        dance: "Danse Traditionnelle",
        palmColors: { left: "#ff0000", right: "#ffd700" },
        finalOutfit: {
            description: "qipao moderne revisité",
            colors: ["rouge impérial", "or"],
            elements: ["soie brodée", "col mandarin", "fentes latérales", "décolleté"],
            accessories: ["éventail", "épingles à cheveux", "bijoux en jade"]
        },
        hairFluo: ["rouge fluo", "or fluo", "rose"],
        background: "jardin chinois, lampions, soie rouge",
        danceMoves: {
            part1: ["gestes gracieux des mains", "pas glissés", "postures élégantes"],
            part2: ["jeux d'éventail", "mouvements de manches longues", "tours gracieux"]
        }
    },
    greece: {
        name: "Grèce",
        dance: "Danse Antique",
        palmColors: { left: "#0000ff", right: "#ffffff" },
        finalOutfit: {
            description: "tenue grecque moderne",
            colors: ["bleu Égée", "blanc"],
            elements: ["robe fluide", "drapés", "ceinture dorée", "fente"],
            accessories: ["couronne de laurier", "bijoux en or", "feuilles d'olivier"]
        },
        hairFluo: ["bleu électrique", "blanc perlé", "or"],
        background: "colonnes grecques, mer Égée, lumière méditerranéenne",
        danceMoves: {
            part1: ["pas lents et solennels", "bras levés au ciel", "poses de statue"],
            part2: ["cercles gracieux", "cambrures de déesse", "drapés flottants"]
        }
    },
    alien: {
        name: "👽 EXTRA-TERRESTRE",
        dance: "Danse Galactique",
        palmColors: { left: "#00ffff", right: "#ff00ff" },
        finalOutfit: {
            description: "tenue extra-terrestre futuriste",
            colors: ["cyan extraterrestre", "magenta cosmique"],
            elements: ["body moulant irisée", "effet métal liquide", "paillettes cosmiques", "écailles holographiques"],
            accessories: ["antennes lumineuses", "bijoux en cristal lunaire", "bottes argentées"]
        },
        hairFluo: ["bleu électrique", "violet néon", "rose cosmique", "argent métallique"],
        background: "vaisseau spatial, galaxie lointaine, nébuleuses colorées",
        danceMoves: {
            part1: ["mouvements robotiques lents", "ondulations extraterrestres", "gestes hypnotiques"],
            part2: ["mouvements fluides comme l'apesanteur", "vibrations cosmiques", "jeux avec la lumière"]
        }
    },fairy: {
    name: "🧚 FÉE MAGIQUE",
    dance: "Danse Féerique",
    palmColors: { left: "#f0f", right: "#ffd700" },
    finalOutfit: {
        description: "tenue de fée enchantée",
        colors: ["rose féerique", "or magique", "blanc lunaire"],
        elements: ["voiles transparents irisés", "corset brodé de fleurs lumineuses", "jupe en pétales magiques", "ailes de libellule géantes"],
        accessories: ["couronne de fleurs lumineuses", "baguette magique à étoile", "poudre de fée scintillante", "bijoux en cristal de lune"]
    },
    hairFluo: ["rose fluo", "or", "violet"],
    background: "forêt enchantée la nuit, arbres lumineux, champignons phosphorescents, château de princesse rose et violet avec tours en sucre d'orge, rivière de lumière, nuages en forme d'animaux",
    danceMoves: {
        part1: [
            "mouvements aériens et légers",
            "gestes gracieux comme le vol d'un papillon",
            "poses éthérées"
        ],
        part2: [
            "danse avec les ailes qui battent doucement",
            "vols planés à quelques centimètres du sol",
            "jeux avec la poudre de fée"
        ]
    }
},vampire: {
    name: "🧛 VAMPIRE SÉDUCTRICE",
    dance: "Danse Vampirique",
    palmColors: { left: "#8b0000", right: "#000" },
    finalOutfit: {
        description: "tenue de vampire gothique ultra-sexy",
        colors: ["rouge sang", "noir profond", "argent"],
        elements: ["robe longue en velours noir", "décolleté plongeant", "cape de vampire doublée de rouge", "dentelle noire", "transparences"],
        accessories: ["crocs apparents", "yeux rouges lumineux", "médaillon ancien", "gants en dentelle", "chauve-souris apprivoisée"]
    },
    hairFluo: ["rouge", "noir", "argent"],
    background: "château maudit sur une falaise, cimetière gothique avec croix anciennes, pleine lune rouge, brume épaisse, chauves-souris dans le ciel, intérieur de château avec candélabres, cercueil ancien",
    danceMoves: {
        part1: [
            "mouvements lents et hypnotiques",
            "grâces féline",
            "regards perçants"
        ],
        part2: [
            "danse avec la cape qui virevolte",
            "attaques gracieuses",
            "poses de prédatrice"
        ]
    }
},specialforces: {
    name: "🔫 FORCES SPÉCIALES",
    dance: "Danse Commando",
    palmColors: { left: "#2d5a27", right: "#8b4513" },
    finalOutfit: {
        description: "tenue de forces spéciales tactique ultra-sexy",
        colors: ["vert camouflage", "noir tactique", "kaki"],
        elements: [
            "deux pièces tactique : haut type sport ultra-moulant dévoilant le ventre", 
            "short tactique très court avec ceinturon", 
            "bottes de combat montantes lacées", 
            "gants tactiques sans doigts", 
            "genouillères stylisées"
        ],
        accessories: [
            "casque tactique avec visière infrarouge et lunettes de vision nocturne", 
            "fusil d'assaut stylisé", 
            "pistolet à la cuisse", 
            "gourde de combat", 
            "talkie-walkie", 
            "ceinturon avec munitions", 
            "tatouages militaires temporaires",
            "camouflage de guerre sur les joues"
        ]
    },
    hairFluo: ["vert fluo", "orange", "rouge"],
    background: "zone de combat urbaine, hélicoptère militaire en arrière-plan, fumée de combat, lumières de projecteurs, nuit éclairée par des fusées éclairantes, Jeep militaire, tentes de campagne",
    danceMoves: {
        part1: [
            "mouvements de combat stylisés",
            "poses de tireur d'élite",
            "roulades au sol"
        ],
        part2: [
            "danse guerrière",
            "enchaînements commando",
            "jeux avec les armes (stylisés et sécuritaires)"
        ]
    }
},santasexy: {
    name: "🎅 PÈRE NOËL SEXY",
    dance: "Danse de Noël",
    palmColors: { left: "#ff0000", right: "#ffffff" },
    finalOutfit: {
        description: "tenue de père noël ultra-sexy deux pièces",
        colors: ["rouge de Noël", "blanc neige", "or"],
        elements: [
            "haut type bustier rouge avec bordure en fausse fourrure blanche", 
            "shorty très court rouge assorti avec ceinture noire brillante", 
            "bottes hautes en cuir rouge à talons aiguilles", 
            "gants longs blancs en satin", 
            "ceinture large en cuir noir avec boucle dorée"
        ],
        accessories: [
            "bonnet de père noël rouge avec pompon blanc (porté élégamment)",
            "fausse barbe blanche en fourrure (optionnelle, peut être tenue à la main)",
            "lunettes de soleil rouges stylisées",
            "ceinturon en cuir noir",
            "petit sac de cadeaux scintillant",
            "guirlandes lumineuses LED autour de la taille",
            "boucles d'oreilles en forme de flocon de neige",
            "collier avec petit grelot"
        ]
    },
    hairFluo: ["rouge", "blanc", "or", "argent"],
    background: "soirée de Noël chic, sapin décoré avec guirlandes et boules dorées, cheminée avec feu, cadeaux emballés, lumières de fête, neige qui tombe par la fenêtre, ambiance chaleureuse rouge et or",
    danceMoves: {
        part1: [
            "mouvements sensuels de Noël",
            "jeux avec le bonnet",
            "poses de cadeaux"
        ],
        part2: [
            "danse festive endiablée",
            "jeux avec les guirlandes lumineuses",
            "tours sensuels"
        ]
    }
},elfsexy: {
    name: "🧝 LUTIN DE NOËL SEXY",
    dance: "Danse des Lutins",
    palmColors: { left: "#00ff00", right: "#ff0000" },
    finalOutfit: {
        description: "tenue de lutin de Noël ultra-sexy deux pièces",
        colors: ["vert sapin", "rouge", "or"],
        elements: [
            "haut corset vert à lacets rouges", 
            "micro-short vert avec ceinture dorée", 
            "collants résille vert et rouge", 
            "bottines à talons vertes avec grelots",
            "manches longues transparentes"
        ],
        accessories: [
            "chapeau de lutin pointu à grelot",
            "oreilles de lutin pointues",
            "ceinture à grelots",
            "canne en sucre d'orge géante",
            "guirlandes lumineuses",
            "maquillage scintillant vert et rouge"
        ]
    },
    hairFluo: ["vert fluo", "rouge", "or"],
    background: "atelier du père noël, jouets, cadeaux, lumières de Noël, neige",
    danceMoves: {
        part1: [
            "mouvements espiègles",
            "jeux avec la canne en sucre"
        ],
        part2: [
            "danse malicieuse",
            "jeux avec les grelots"
        ]
    }
},// STYLES DESSIN ANIMÉ - À AJOUTER DANS countries.js

animemanga: {
    name: "🎌 STYLE MANGA",
    dance: "Danse Anime",
    palmColors: { left: "#ff99cc", right: "#99ccff" },
    finalOutfit: {
        description: "tenue de personnage d'anime japonais",
        colors: ["rose sakura", "bleu ciel", "blanc"],
        elements: [
            "robe de magical girl avec jupe courte à volants", 
            "nœud géant dans le dos", 
            "gants longs blancs", 
            "bottes hautes blanches"
        ],
        accessories: [
            "baguette magique en forme d'étoile",
            "rubans dans les cheveux",
            "oreilles de chat (nekomimi)",
            "yeux immenses et brillants typiques des anime",
            "étoiles scintillantes autour d'elle"
        ]
    },
    hairFluo: ["rose", "bleu", "violet", "argent"],
    background: "monde fantastique d'anime, ciel étoilé, lune géante, cerisiers en fleurs, pétales qui flottent",
    danceMoves: {
        part1: [
            "mouvements gracieux d'animé",
            "poses de magical girl"
        ],
        part2: [
            "danse dynamique d'opening d'anime",
            "transformations stylisées"
        ]
    }
},

cartoonclassic: {
    name: "🎬 STYLE CARTOON",
    dance: "Danse Cartoon",
    palmColors: { left: "#ffff00", right: "#ff0000" },
    finalOutfit: {
        description: "tenue de princesse Disney revisité",
        colors: ["jaune canari", "rouge", "bleu royal"],
        elements: [
            "robe de princesse cartoon avec jupe bouffante", 
            "corset ajusté", 
            "gants longs de cartoon", 
            "chaussures à talons typiques"
        ],
        accessories: [
            "tiare scintillante",
            "gants blancs sans doigts",
            "sourire ultra-bright cartoon",
            "grands yeux expressifs",
            "petits animaux amis imaginaires"
        ]
    },
    hairFluo: ["blond", "roux", "noir"],
    background: "château de conte de fées, arc-en-ciel, nuages mignons, forêt enchantée",
    danceMoves: {
        part1: [
            "mouvements exagérés de cartoon",
            "poses de princesse"
        ],
        part2: [
            "danse joyeuse de film d'animation",
            "sauts légers"
        ]
    }
},

comicshero: {
    name: "💥 STYLE COMICS",
    dance: "Danse Super-Héroïne",
    palmColors: { left: "#0000ff", right: "#ff0000" },
    finalOutfit: {
        description: "tenue de super-héroïne de comics",
        colors: ["bleu", "rouge", "jaune"],
        elements: [
            "justaucorps moulant de super-héroïne", 
            "cape flottante", 
            "bottes de combat", 
            "ceinture utilitaire"
        ],
        accessories: [
            "masque de super-héroïne",
            "emblème sur la poitrine",
            "bracelets de force",
            "armure légère stylisée",
            "effets de motion comics"
        ]
    },
    hairFluo: ["bleu", "rouge", "argent"],
    background: "ville futuriste, gratte-ciels, éclairs, explosion colorée façon comics",
    danceMoves: {
        part1: [
            "poses de super-héros",
            "mouvements puissants"
        ],
        part2: [
            "combat chorégraphié",
            "vols stylisés"
        ]
    }
},

sketchstyle: {
    name: "✏️ STYLE ESQUISSE",
    dance: "Danse Croquis",
    palmColors: { left: "#000000", right: "#888888" },
    finalOutfit: {
        description: "personnage sorti d'un carnet de croquis",
        colors: ["noir", "blanc", "gris"],
        elements: [
            "tenue avec effet crayonné", 
            "traits de crayon apparents", 
            "texture papier", 
            "ombres hachurées"
        ],
        accessories: [
            "effet gomme",
            "traits de construction",
            "auréole de dessin",
            "crayon magique flottant"
        ]
    },
    hairFluo: ["noir", "blanc", "argent"],
    background: "feuille de papier, carnet de croquis, taches d'encre, matériel de dessin géant",
    danceMoves: {
        part1: [
            "mouvements saccadés comme un dessin animé ancien",
            "poses de modèle vivant"
        ],
        part2: [
            "danse qui semble dessinée en direct",
            "effets de gommage"
        ]
    }
},marvelreal: {
    name: "🦸 MARVEL RÉALISTE",
    dance: "Danse Super-Héroïque",
    palmColors: { left: "#ed1d24", right: "#02458c" },
    finalOutfit: {
        description: "costume de super-héroïne Marvel ultra-sexy",
        colors: ["rouge Marvel", "bleu nuit", "or"],
        elements: [
            "combinaison moulante en latex effet cuir rouge et bleu", 
            "découpes stratégiques sur les côtés", 
            "ceinture utilitaire dorée", 
            "bottes de combat montantes", 
            "gants tactiques sans doigts"
        ],
        accessories: [
            "masque de justicière (peut être relevé sur le front)",
            "armure légère sur les épaules",
            "emblème stylisé sur la poitrine",
            "bracelets de combat métalliques",
            "cape légère détachable",
            "ceinturon avec accessoires de combat"
        ]
    },
    hairFluo: ["rouge", "bleu", "or", "argent"],
    background: "toit de gratte-ciel la nuit, ville vue du ciel, éclairs, héliport, lumières urbaines",
    danceMoves: {
        part1: [
            "poses de super-héroïne",
            "mouvements de combat stylisés",
            "regards déterminés"
        ],
        part2: [
            "danse guerrière",
            "enchaînements dynamiques",
            "poses victorieuses"
        ]
    }
},cosmicreal: {
    name: "🌌 COSMIQUE",
    dance: "Danse Galactique",
    palmColors: { left: "#4b0082", right: "#00ffff" },
    finalOutfit: {
        description: "tenue de gardienne cosmique",
        colors: ["violet profond", "cyan", "argent"],
        elements: [
            "combinaison irisée effet galaxies", 
            "cristaux lumineux intégrés", 
            "armure légère chromée", 
            "cape d'énergie", 
            "bottes à talons argentées"
        ],
        accessories: [
            "diadème cosmique lumineux",
            "bijoux en cristal lunaire",
            "gants énergétiques transparents",
            "ceinture de force stellaire",
            "tatouages lumineux temporaires",
            "paillettes cosmiques sur la peau"
        ]
    },
    hairFluo: ["violet", "bleu", "argent", "rose"],
    background: "nébuleuse galactique, étoiles, planètes lointaines, aurores cosmiques",
    danceMoves: {
        part1: [
            "mouvements flottants",
            "gestes de création d'énergie"
        ],
        part2: [
            "danse d'énergie cosmique",
            "poses de gardienne de l'univers"
        ]
    }
},dcreal: {
    name: "⚡ DC RÉALISTE",
    dance: "Danse DC",
    palmColors: { left: "#000000", right: "#ffdf00" },
    finalOutfit: {
        description: "costume de super-héroïne DC ultra-sexy",
        colors: ["noir", "or", "argent"],
        elements: [
            "combinaison moulante en cuir noir avec reflets métalliques", 
            "ceinture dorée à motifs", 
            "bottes de combat à talons", 
            "gants longs en cuir"
        ],
        accessories: [
            "tiare ou diadème métallique",
            "lasso décoratif",
            "cape noire doublée d'or",
            "bracelets de force",
            "emblème doré sur la poitrine",
            "maquillage smoky eye intense"
        ]
    },
    hairFluo: ["noir", "or", "argent"],
    background: "ville gothique la nuit, éclairs, toits d'immeubles, pleine lune",
    danceMoves: {
        part1: [
            "poses puissantes",
            "mouvements de combat"
        ],
        part2: [
            "danse de guerrière",
            "enchaînements dynamiques"
        ]
    }
},warriorcosmic: {
    name: "⚔️ GUERRIÈRE COSMIQUE",
    dance: "Danse de Combat Stellaire",
    palmColors: { left: "#ff4500", right: "#00ced1" },
    finalOutfit: {
        description: "armure de guerrière cosmique",
        colors: ["orange cosmique", "turquoise", "or"],
        elements: [
            "armure légère en métal chromé", 
            "justaucorps moulant effet énergie", 
            "jambières et épaulières stylisées", 
            "bottes de combat renforcées"
        ],
        accessories: [
            "casque de combat ouvert",
            "épée énergétique décorative",
            "bouclier énergétique",
            "tatouages de guerre lumineux",
            "cape d'énergie flottante",
            "cristaux de pouvoir"
        ]
    },
    hairFluo: ["orange", "turquoise", "or"],
    background: "champ de bataille cosmique, explosion d'étoiles, vaisseaux en arrière-plan",
    danceMoves: {
        part1: [
            "mouvements de combat",
            "poses guerrières"
        ],
        part2: [
            "danse de victoire",
            "enchaînements martiaux"
        ]
    }
},cowgirl: {
    name: "🤠 COWGIRL",
    dance: "Danse Country",
    palmColors: { left: "#8b4513", right: "#d2691e" },
    finalOutfit: {
        description: "tenue de cowgirl sexy",
        colors: ["marron", "beige", "turquoise"],
        elements: [
            "haut en daim frangé dévoilant le ventre", 
            "short très court en jean", 
            "bottes de cowboy à talons", 
            "ceinturon à grosses boucles"
        ],
        accessories: [
            "chapeau de cowboy",
            "foulard coloré autour du cou",
            "étoile de shérif",
            "pistolet factice à la ceinture",
            "lasso décoratif",
            "gants en dentelle"
        ]
    },
    hairFluo: ["blond", "roux", "marron"],
    background: "saloon du Far West, désert au coucher du soleil, cactus, chevaux au loin, village de cowboy",
    danceMoves: {
        part1: [
            "mouvements de rodéo",
            "poses de cowgirl"
        ],
        part2: [
            "danse country endiablée",
            "jeux avec le lasso"
        ]
    }
},pirate: {
    name: "🏴‍☠️ PIRATE",
    dance: "Danse des Pirates",
    palmColors: { left: "#000000", right: "#b8860b" },
    finalOutfit: {
        description: "tenue de pirate sexy",
        colors: ["noir", "or", "rouge"],
        elements: [
            "haut corset noir lacé", 
            "jupe longue fendue ou short boucanier", 
            "bottes de pirate à talons", 
            "ceinture large en cuir"
        ],
        accessories: [
            "chapeau de pirate avec tête de mort",
            "cache-œil (optionnel)",
            "sabre décoratif",
            "bijoux en or (boucles d'oreilles anneaux)",
            "tatouages de pirate temporaires",
            "carte au trésor"
        ]
    },
    hairFluo: ["noir", "rouge", "or"],
    background: "bateau pirate, île déserte, coucher de soleil sur l'océan, coffre au trésor ouvert",
    danceMoves: {
        part1: [
            "mouvements de marin",
            "poses de flibustière"
        ],
        part2: [
            "danse de taverne",
            "jeux avec le sabre"
        ]
    }
},princess: {
    name: "👸 PRINCESSE ROYALE",
    dance: "Danse de Cour",
    palmColors: { left: "#ff69b4", right: "#ffd700" },
    finalOutfit: {
        description: "robe de princesse digne d'un conte de fées",
        colors: ["rose royal", "or", "blanc perle"],
        elements: [
            "robe longue en tulle et satin", 
            "corset brodé de perles", 
            "jupe volumineuse à volants", 
            "gants longs en satin blanc"
        ],
        accessories: [
            "tiare ou couronne étincelante",
            "collier de perles",
            "boucles d'oreilles en diamant",
            "éventail précieux",
            "petit sceptre",
            "voile léger"
        ]
    },
    hairFluo: ["blond", "rose", "argent"],
    background: "château royal, salle de bal, lustres en cristal, jardins à la française",
    danceMoves: {
        part1: [
            "révérences gracieuses",
            "poses royales"
        ],
        part2: [
            "valse élégante",
            "tours de princesse"
        ]
    }
},siren: {
    name: "🧜‍♀️ SIRÈNE",
    dance: "Danse Aquatique",
    palmColors: { left: "#00ced1", right: "#7fffd4" },
    finalOutfit: {
        description: "tenue de sirène féérique",
        colors: ["turquoise", "vert d'eau", "argent"],
        elements: [
            "haut coquillage scintillant", 
            "queue de sirène (ou jupe longue effet écailles)", 
            "voiles légers irisés", 
            "bijoux de perles"
        ],
        accessories: [
            "couronne de coquillages",
            "bijoux en nacre",
            "fleurs aquatiques dans les cheveux",
            "éventail en forme de vague",
            "paillettes holographiques"
        ]
    },
    hairFluo: ["turquoise", "vert", "bleu", "argent"],
    background: "océan profond, récif de corail, bulles, lumière sous-marine, épave mystérieuse",
    danceMoves: {
        part1: [
            "mouvements flottants",
            "gestes de nage"
        ],
        part2: [
            "danse sous-marine",
            "jeux avec les vagues"
        ]
    }
},venetian: {
    name: "🎭 MASQUÉ VÉNITIEN",
    dance: "Danse de Carnaval",
    palmColors: { left: "#800080", right: "#daa520" },
    finalOutfit: {
        description: "tenue de carnaval vénitien luxueuse",
        colors: ["pourpre", "or", "noir"],
        elements: [
            "robe longue en velours pourpre", 
            "corset brodé d'or", 
            "manches bouffantes", 
            "jupons volumineux"
        ],
        accessories: [
            "MASQUE VÉNITIEN somptueux (orné de plumes et dorures)",
            "éventail en dentelle",
            "gants longs",
            "collier précieux",
            "ombrelle décorative",
            "plumes dans les cheveux"
        ]
    },
    hairFluo: ["violet", "or", "rouge"],
    background: "Venise la nuit, canaux, gondoles, palais illuminés, masques partout",
    danceMoves: {
        part1: [
            "démarche mystérieuse",
            "jeux avec le masque"
        ],
        part2: [
            "danse de bal masqué",
            "tours gracieux"
        ]
    }
},witchenchant: {
    name: "🧙‍♀️ SORCIÈRE ENVOÛTEUSE",
    dance: "Danse de Sortilège",
    palmColors: { left: "#663399", right: "#228b22" },
    finalOutfit: {
        description: "tenue de sorcière envoûtante",
        colors: ["violet sombre", "vert émeraude", "noir"],
        elements: [
            "robe longue en velours vert émeraude", 
            "cape doublée de violet", 
            "corset en cuir noir", 
            "bottines à talons"
        ],
        accessories: [
            "chapeau pointu élégant",
            "médaillon ancien",
            "baguette magique stylisée",
            "fioles décoratives",
            "bijoux en argent",
            "maquillage vert et violet"
        ]
    },
    hairFluo: ["vert", "violet", "noir"],
    background: "forêt mystique, clair de lune, potions qui bouillonnent, champignons lumineux",
    danceMoves: {
        part1: [
            "gestes d'incantation",
            "poses mystérieuses"
        ],
        part2: [
            "danse rituelle",
            "jeux avec la baguette"
        ]
    }
},cavewoman: {
    name: "🦴 FEMME DES CAVERNES",
    dance: "Danse Primitive",
    palmColors: { left: "#8b5a2b", right: "#d2691e" },
    finalOutfit: {
        description: "tenue de femme des cavernes ultra-sexy",
        colors: ["marron terre", "beige", "orange"],
        elements: [
            "haut en fourrure animale (tigre à dents de sabre)", 
            "micro-short en peau de bête", 
            "bottes en fourrure lacées", 
            "bandeaux en cuir autour des bras"
        ],
        accessories: [
            "collier de dents d'animaux",
            "coiffage avec plumes et os",
            "tatouages tribaux temporaires",
            "hache de pierre décorative",
            "lance stylisée",
            "peintures de guerre sur le visage",
            "os dans les cheveux"
        ]
    },
    hairFluo: ["roux", "brun", "orange", "blond"],
    background: "caverne préhistorique, feu de camp, peintures rupestres, mammouths au loin, forêt primitive, volcan",
    danceMoves: {
        part1: [
            "mouvements de chasse",
            "poses guerrières primitives",
            "gestes tribaux"
        ],
        part2: [
            "danse rituelle autour du feu",
            "mouvements de combat primitif",
            "célébration de chasse"
        ]
    }
},primalwarrior: {
    name: "🔥 GUERRIÈRE PRIMITIVE",
    dance: "Danse de Guerre",
    palmColors: { left: "#b22222", right: "#000000" },
    finalOutfit: {
        description: "tenue de guerrière primitive",
        colors: ["rouge terre", "noir", "ocre"],
        elements: [
            "haut en cuir brut", 
            "jupe frangée en peau", 
            "jambières en fourrure", 
            "bracelets en os"
        ],
        accessories: [
            "masque tribal",
            "peintures de guerre rouges et noires",
            "lance de combat",
            "bouclier en bois décoré",
            "trophées (crânes d'animaux)",
            "coiffe en plumes d'aigle"
        ]
    },
    hairFluo: ["rouge", "noir", "orange"],
    background: "bataille primitive, volcan en éruption, ciel de cendres",
    danceMoves: {
        part1: [
            "cris de guerre mimés",
            "mouvements de combat"
        ],
        part2: [
            "danse de victoire",
            "célébration tribale"
        ]
    }
},elf: {
    name: "🧝 ELFE SYLVAINE",
    dance: "Danse Enchantée",
    palmColors: { left: "#7cfc00", right: "#daa520" },
    finalOutfit: {
        description: "tenue d'elfe féérique",
        colors: ["vert forêt", "or", "argent"],
        elements: [
            "robe légère en feuilles et voiles verts", 
            "corset en cuir végétal", 
            "jambières en lianes dorées", 
            "bottes en fibres naturelles"
        ],
        accessories: [
            "oreilles pointues d'elfe",
            "couronne de feuilles lumineuses",
            "arc et flèches décoratifs",
            "bijoux en cristaux de lune",
            "poudre de fée scintillante",
            "tatouages elfiques lumineux"
        ]
    },
    hairFluo: ["vert", "or", "argent", "bleu"],
    background: "forêt enchantée, arbres centenaires, rivière magique, champignons géants, lueurs féeriques",
    danceMoves: {
        part1: [
            "mouvements gracieux et légers",
            "poses féeriques"
        ],
        part2: [
            "danse enchantée",
            "jeux avec la magie des bois"
        ]
    }
},darkelf: {
    name: "⚡ ELFE NOIR",
    dance: "Danse des Ombres",
    palmColors: { left: "#4a0e4e", right: "#000000" },
    finalOutfit: {
        description: "tenue d'elfe noir ténébreux",
        colors: ["violet sombre", "noir", "argent"],
        elements: [
            "robe en voiles noirs irisés", 
            "corset en cuir violet", 
            "jambières en écailles sombres", 
            "bottes à talons argentées"
        ],
        accessories: [
            "oreilles pointues d'elfe noir",
            "diadème de cornes stylisées",
            "bijoux en obsidienne",
            "maquillage sombre et intense",
            "cape d'ombre légère",
            "runes sombres sur la peau"
        ]
    },
    hairFluo: ["violet", "noir", "argent", "bleu nuit"],
    background: "forêt ténébreuse, brume épaisse, ruines anciennes, lune rouge, château maudit",
    danceMoves: {
        part1: [
            "mouvements félins et mystérieux",
            "poses d'ombre"
        ],
        part2: [
            "danse des ténèbres",
            "jeux avec l'obscurité"
        ]
    }
},athena: {
    name: "🦸 ATHÉNA",
    dance: "Danse de la Sagesse",
    palmColors: { left: "#c0c0c0", right: "#ffd700" },
    finalOutfit: {
        description: "tenue de déesse Athéna",
        colors: ["argent", "or", "blanc"],
        elements: [
            "robe longue en soie blanche drapée", 
            "armure légère en métal argenté", 
            "sandales dorées lacées", 
            "ceinture tressée or"
        ],
        accessories: [
            "casque corinthien stylisé (peut être tenu)",
            "lance décorative",
            "bouclier rond orné de la tête de Méduse",
            "bijoux en or (collier, bracelets)",
            "couronne de laurier",
            "chouette sacrée (accessoire)"
        ]
    },
    hairFluo: ["or", "argent", "blanc"],
    background: "temple grec antique, colonnes de marbre, ciel bleu méditerranéen, mont Olympe",
    danceMoves: {
        part1: [
            "poses de déesse",
            "mouvements majestueux"
        ],
        part2: [
            "danse guerrière sacrée",
            "jeux avec la lance et le bouclier"
        ]
    }
},valkyrie: {
    name: "⚔️ VALKYRIE",
    dance: "Danse du Valhalla",
    palmColors: { left: "#cd7f32", right: "#c0c0c0" },
    finalOutfit: {
        description: "tenue de guerrière Valkyrie",
        colors: ["bronze", "argent", "rouge"],
        elements: [
            "armure légère en métal bronze", 
            "cuirasse ornée de runes", 
            "jupe en cuir avec lanières", 
            "bottes de combat nordiques"
        ],
        accessories: [
            "casque ailé stylisé",
            "épée viking décorative",
            "bouclier rond runique",
            "cape rouge doublée de fourrure",
            "tresses avec perles",
            "tatouages nordiques temporaires"
        ]
    },
    hairFluo: ["roux", "blond", "argent"],
    background: "champ de bataille nordique, fjords, aurores boréales, Valhalla, drakkars",
    danceMoves: {
        part1: [
            "poses guerrières",
            "mouvements de combat"
        ],
        part2: [
            "danse de victoire",
            "célébration guerrière"
        ]
    }
},zombie: {
    name: "🧟 ZOMBIE APOCALYPSE",
    dance: "Danse Macabre",
    palmColors: { left: "#228b22", right: "#8b0000" },
    finalOutfit: {
        description: "tenue de survivante apocalyptique",
        colors: ["vert cimetière", "rouge sang", "noir"],
        elements: [
            "vêtements déchirés style survivante", 
            "haut en lambeaux", 
            "short en jean usé", 
            "bottes de combat", 
            "ceinturon tactique"
        ],
        accessories: [
            "maquillage de zombie (peau verte, cernes, faux sang)",
            "lentilles de contact blanches",
            "fausses blessures",
            "armes de survie décoratives",
            "sac à dos d'apocalypse",
            "masque à gaz stylisé (autour du cou)"
        ]
    },
    hairFluo: ["vert", "rouge", "gris"],
    background: "ville en ruines, voitures brûlées, barbelés, ciel gris, horde de zombies au loin, feu de camp de survivants",
    danceMoves: {
        part1: [
            "démarche chancelante",
            "mouvements de zombie"
        ],
        part2: [
            "danse de survie",
            "combats contre les infectés"
        ]
    }
},uranus: {
    name: "💚 URANUS",
    dance: "Danse Glacée",
    palmColors: { left: "#7fffd4", right: "#b0e0e6" },
    finalOutfit: {
        description: "tenue de créature des glaces d'Uranus",
        colors: ["vert pâle", "bleu glacier", "argent"],
        elements: [
            "combinaison irisée effet glace", 
            "cristaux de glace intégrés", 
            "cape de givre", 
            "bottes glacées"
        ],
        accessories: [
            "couronne de glace",
            "bijoux en cristal gelé",
            "maquillage bleuté givré",
            "paillettes holographiques",
            "halo de lumière froide"
        ]
    },
    hairFluo: ["vert pâle", "bleu", "argent"],
    background: "planète Uranus, anneaux glacés, tempêtes de glace, lointaines étoiles",
    danceMoves: {
        part1: [
            "mouvements lents et cristallins",
            "poses gelées"
        ],
        part2: [
            "danse de glace",
            "éclats de cristal"
        ]
    }
},mercury: {
    name: "☄️ MERCURE",
    dance: "Danse du Soleil",
    palmColors: { left: "#ff8c00", right: "#ff4500" },
    finalOutfit: {
        description: "tenue de créature de Mercure",
        colors: ["orange brûlé", "rouge feu", "or"],
        elements: [
            "combinaison effet lave", 
            "paillettes incandescentes", 
            "cape de feu", 
            "bottes de feu"
        ],
        accessories: [
            "couronne solaire",
            "bijoux de flammes",
            "maquillage chaud et brillant",
            "effets de chaleur"
        ]
    },
    hairFluo: ["orange", "rouge", "or"],
    background: "planète Mercure, surface brûlante, soleil géant, rivières de lave",
    danceMoves: {
        part1: [
            "mouvements de flamme",
            "poses brûlantes"
        ],
        part2: [
            "danse de feu",
            "éruptions d'énergie"
        ]
    }
},witchfashion: {
    name: "🧪 SORCIÈRE FASHION",
    dance: "Danse Moderne Sorcière",
    palmColors: { left: "#800080", right: "#c0c0c0" },
    finalOutfit: {
        description: "tenue de sorcière moderne et chic",
        colors: ["pourpre", "argent", "noir"],
        elements: [
            "robe courte en velours côtelé pourpre", 
            "ceinture large en cuir argenté", 
            "bottes hautes à talons", 
            "gants longs en dentelle noire"
        ],
        accessories: [
            "chapeau de sorcière mini version",
            "collier à plusieurs rangs",
            "boucles d'oreilles en forme de lune",
            "bagues argentées",
            "maquillage glam rock"
        ]
    },
    hairFluo: ["violet", "argent", "rouge"],
    background: "bar branché, ambiance tamisée, boules à facettes, lumières pourpres",
    danceMoves: {
        part1: [
            "poses glamour",
            "mouvements de club"
        ],
        part2: [
            "danse moderne",
            "jeux de séduction"
        ]
    }
},
};
