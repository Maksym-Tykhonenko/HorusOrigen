const quiz = [
    {
        name: 'Ancient Greece',
        image: require('../assets/quiz/topics/1.png'),
        topics: [
            {
                location: "Acropolis of Athens",
                image: require('../assets/quiz/locations/1.png'),
                modalMessage: "Hello! Welcome to the Acropolis of Athens, the heart of ancient Greek civilization! To uncover all the artifacts, you need to complete this quiz. Are you ready to test your knowledge about ancient Greece? Good luck!",
                quiz: {
                    artifactName: 'Statue of Athena',
                    artifactImage: require('../assets/artifacts/1.png'),
                    finalText: 'Congratulations! You have found a statuette of Athena. This goddess was a symbol of wisdom and military prowess, she was considered the patroness of Athens.',
                    questions: [
                            {
                                question: "What is the most famous temple on the Athenian Acropolis?",
                                options: [
                                    { answer: "Parthenon", correct: true },
                                    { answer: "Temple of Zeus", correct: false },
                                    { answer: "Temple of Apollo", correct: false },
                                    { answer: "Erechtheion", correct: false },
                                ],
                            },
                            {
                                question: "Which goddess was the patroness of Athens?",
                                options: [
                                    { answer: "Aphrodite", correct: false },
                                    { answer: "Hera", correct: false },
                                    { answer: "Athena", correct: true },
                                    { answer: "Artemis", correct: false },
                                ],
                            },
                            {
                                question: "What architectural style was used in the construction of the Parthenon?",
                                options: [
                                    { answer: "Doric", correct: true },
                                    { answer: "Ionic", correct: false },
                                    { answer: "Corinthian", correct: false },
                                    { answer: "Composite", correct: false },
                                ],
                            },
                            {
                                question: "Who was the chief architect of the Parthenon?",
                                options: [
                                    { answer: "Ictinus", correct: true },
                                    { answer: "Phidias", correct: false },
                                    { answer: "Lysippus", correct: false },
                                    { answer: "Pericles", correct: false },
                                ],
                            },
                            {
                                question: "What is the name of the festival in honor of Athena?",
                                options: [
                                    { answer: "Panathenaea", correct: true },
                                    { answer: "Dionysia", correct: false },
                                    { answer: "Isthmian Games", correct: false },
                                    { answer: "Olympic Games", correct: false },
                                ],
                            },
                            {
                                question: "What material was used to build the Parthenon?",
                                options: [
                                    { answer: "Limestone", correct: false },
                                    { answer: "Marble", correct: true },
                                    { answer: "Sandstone", correct: false },
                                    { answer: "Granite", correct: false },
                                ],
                            },
                            {
                                question: "What is depicted on the eastern pediment of the Parthenon?",
                                options: [
                                    { answer: "The Battle of Troy", correct: false },
                                    { answer: "The Birth of Athena", correct: true },
                                    { answer: "Theseus and the Minotaur", correct: false },
                                    { answer: "Victory over the Persians", correct: false },
                                ],
                            },
                            {
                                question: "What statue stood inside the Parthenon?",
                                options: [
                                    { answer: "Statue of Zeus", correct: false },
                                    { answer: "Statue of Poseidon", correct: false },
                                    { answer: "Statue of Athena", correct: true },
                                    { answer: "Statue of Apollo", correct: false },
                                ],
                            },
                            {
                                question: "In what year was the construction of the Parthenon completed?",
                                options: [
                                    { answer: "447 BC", correct: false },
                                    { answer: "432 BC", correct: true },
                                    { answer: "500 BC", correct: false },
                                    { answer: "300 BC", correct: false },
                                ],
                            },
                            {
                                question: "What sacred tree was a symbol of Athena?",
                                options: [
                                    { answer: "Pine", correct: false },
                                    { answer: "Olive", correct: true },
                                    { answer: "Cypress", correct: false },
                                    { answer: "Laurel", correct: false },
                                ],
                            },
                    ]
                }
            },
            {
                location: "Oracle at Delphi",
                image: require('../assets/quiz/locations/2.png'),
                modalMessage: "Hello! Welcome to the Oracle at Delphi, a sacred site of prophecy! To obtain unique artifacts, start this quiz! Are you ready to learn more about ancient Greece? Good luck!",
                quiz: {
                    artifactName: 'Omphalos Stone',
                    artifactImage: require('../assets/artifacts/2.png'),
                    finalText: 'Congratulations! You have found the omphalos stone, which the ancient Greeks considered the center of the world. It symbolized the connection between gods and humans.',
                    questions: [
                        {
                            question: "To whom was the temple at Delphi dedicated?",
                            options: [
                                { answer: "Zeus", correct: false },
                                { answer: "Apollo", correct: true },
                                { answer: "Athena", correct: false },
                                { answer: "Hera", correct: false },
                            ],
                        },
                        {
                            question: "What was the name of the priestess who delivered the prophecies at Delphi?",
                            options: [
                                { answer: "Sibyl", correct: false },
                                { answer: "Pythia", correct: true },
                                { answer: "Artemis", correct: false },
                                { answer: "Aphrodite", correct: false },
                            ],
                        },
                        {
                            question: "What natural phenomenon influenced the prophecies of Pythia?",
                            options: [
                                { answer: "Geothermal vapors", correct: true },
                                { answer: "Wind", correct: false },
                                { answer: "Solar eclipse", correct: false },
                                { answer: "Volcanic eruption", correct: false },
                            ],
                        },
                        {
                            question: "What animal was the symbol of Apollo?",
                            options: [
                                { answer: "Lion", correct: false },
                                { answer: "Dolphin", correct: true },
                                { answer: "Eagle", correct: false },
                                { answer: "Bull", correct: false },
                            ],
                        },
                        {
                            question: "What was the name of the stone that was considered the center of the world at Delphi?",
                            options: [
                                { answer: "Omphalos", correct: true },
                                { answer: "Propylaea", correct: false },
                                { answer: "Erechtheion", correct: false },
                                { answer: "Parthenon", correct: false },
                            ],
                        },
                        {
                            question: "How often did the Pythia prophecy?",
                            options: [
                                { answer: "Once a year", correct: false },
                                { answer: "Once a month", correct: true },
                                { answer: "Once a day", correct: false },
                                { answer: "Once a week", correct: false },
                            ],
                        },
                        {
                            question: "Which king consulted the Oracle before his campaign against Persia?",
                            options: [
                                { answer: "Alexander the Great", correct: true },
                                { answer: "Darius", correct: false },
                                { answer: "Pericles", correct: false },
                                { answer: "Leonidas", correct: false },
                            ],
                        },
                        {
                            question: "In which region are Delphi located?",
                            options: [
                                { answer: "Attica", correct: false },
                                { answer: "Phocis", correct: true },
                                { answer: "Boeotia", correct: false },
                                { answer: "Peloponnese", correct: false },
                            ],
                        },
                        {
                            question: "What is depicted on the temple of Apollo at Delphi?",
                            options: [
                                { answer: "Pegasus", correct: false },
                                { answer: "Laurel wreath", correct: true },
                                { answer: "Sphinx", correct: false },
                                { answer: "Trojan horse", correct: false },
                            ],
                        },
                        {
                            question: "Who, according to legend, founded the Oracle at Delphi?",
                            options: [
                                { answer: "Heracles", correct: false },
                                { answer: "Apollo", correct: true },
                                { answer: "Zeus", correct: false },
                                { answer: "Perseus", correct: false },
                            ],
                        },
                    ]
                }
            },
            {
                location: "Temple of Zeus at Olympia",
                image: require('../assets/quiz/locations/3.png'),
                modalMessage: "Hello! Welcome to the Temple of Zeus at Olympia, where the ancient Olympic Games were held! To uncover all the artifacts, you need to take this quiz. Are you ready for new discoveries about ancient Greece? Good luck!",
                quiz: {
                    artifactName: 'Sculpture of Zeus',
                    artifactImage: require('../assets/artifacts/3.png'),
                    finalText: 'Congratulations! You have found a miniature replica of the statue of Zeus. It was one of the Seven Wonders of the World and symbolized the strength and majesty of the god of thunder.',
                    questions: [
                        {
                            question: "To whom was the temple in Olympia dedicated?",
                            options: [
                                { answer: "Zeus", correct: true },
                                { answer: "Apollo", correct: false },
                                { answer: "Athena", correct: false },
                                { answer: "Poseidon", correct: false },
                            ],
                        },
                        {
                            question: "Who created the statue of Zeus in the temple?",
                            options: [
                                { answer: "Michelangelo", correct: false },
                                { answer: "Phidias", correct: true },
                                { answer: "Polykleitos", correct: false },
                                { answer: "Praxiteles", correct: false },
                            ],
                        },
                        {
                            question: "What material was used to decorate the statue of Zeus?",
                            options: [
                                { answer: "Marble", correct: false },
                                { answer: "Bronze", correct: false },
                                { answer: "Ivory and gold", correct: true },
                                { answer: "Stone", correct: false },
                            ],
                        },
                        {
                            question: "To which of the wonders of the world does the statue of Zeus belong?",
                            options: [
                                { answer: "Three wonders", correct: false },
                                { answer: "Five wonders", correct: false },
                                { answer: "Seven wonders", correct: true },
                                { answer: "Ten wonders", correct: false },
                            ],
                        },
                        {
                            question: "What festival was held in honor of Zeus at Olympia?",
                            options: [
                                { answer: "Panathenaea", correct: false },
                                { answer: "Olympic Games", correct: true },
                                { answer: "Isthmian Games", correct: false },
                                { answer: "Dionysia", correct: false },
                            ],
                        },
                        {
                            question: "How many columns supported the Temple of Zeus?",
                            options: [
                                { answer: "34", correct: true },
                                { answer: "24", correct: false },
                                { answer: "50", correct: false },
                                { answer: "12", correct: false },
                            ],
                        },
                        {
                            question: "What happened to the statue of Zeus after the fall of the Roman Empire?",
                            options: [
                                { answer: "It was destroyed", correct: false },
                                { answer: "Transported to Constantinople", correct: true },
                                { answer: "Buried underground", correct: false },
                                { answer: "Converted into a church", correct: false },
                            ],
                        },
                        {
                            question: "Where was Olympia located in Ancient Greece?",
                            options: [
                                { answer: "Peloponnesus", correct: true },
                                { answer: "Attica", correct: false },
                                { answer: "Thessaly", correct: false },
                                { answer: "Ionia", correct: false },
                            ],
                        },
                        {
                            question: "What title did Zeus hold in Olympia?",
                            options: [
                                { answer: "Zeus Olympian", correct: true },
                                { answer: "Zeus Thunderer", correct: false },
                                { answer: "Zeus King", correct: false },
                                { answer: "Zeus Warrior", correct: false },
                            ],
                        },
                        {
                            question: "What sport was the most important at the Olympic Games?",
                            options: [
                                { answer: "Wrestling", correct: false },
                                { answer: "Running", correct: true },
                                { answer: "Discus throw", correct: false },
                                { answer: "Javelin throw", correct: false },
                            ],
                        },
                    ]
                }
            },
        ],
    },
    {
        name: 'Ancient Rome',
        image: require('../assets/quiz/topics/2.png'),
        topics: [
            {
                location: "Colosseum",
                image: require('../assets/quiz/locations/4.png'),
                modalMessage: "Hello! Welcome to the Colosseum, the magnificent amphitheater of Rome! To uncover all the artifacts, you need to complete this quiz. Are you ready to test your knowledge about ancient Rome? Good luck!",
                quiz: {
                    artifactName: 'Gladiator Sword',
                    artifactImage: require('../assets/artifacts/4.png'),
                    finalText: 'Congratulations! You have found an ancient gladiator`s sword. This weapon was used in battles in the arena of the Colosseum, where brave warriors fought for their lives.',
                    questions: [
                        {
                            question: "What was the Colosseum built for?",
                            options: [
                                { answer: "Theater", correct: false },
                                { answer: "Gladiatorial fights", correct: true },
                                { answer: "Shopping center", correct: false },
                                { answer: "Temple", correct: false },
                            ],
                        },
                        {
                            question: "Which emperor started the construction of the Colosseum?",
                            options: [
                                { answer: "Augustus", correct: false },
                                { answer: "Nero", correct: false },
                                { answer: "Vespasian", correct: true },
                                { answer: "Trajan", correct: false },
                            ],
                        },
                        {
                            question: "How many spectators could the Colosseum hold?",
                            options: [
                                { answer: "5,000", correct: false },
                                { answer: "20,000", correct: false },
                                { answer: "50,000", correct: true },
                                { answer: "100,000", correct: false },
                            ],
                        },
                        {
                            question: "What was the original name of the Colosseum?",
                            options: [
                                { answer: "Amphitheater of Vespasian", correct: true },
                                { answer: "Theater of Nero", correct: false },
                                { answer: "Forum of Trajan", correct: false },
                                { answer: "Palatine Theater", correct: false },
                            ],
                        },
                        {
                            question: "How many stories did the Colosseum have?",
                            options: [
                                { answer: "One", correct: false },
                                { answer: "Two", correct: false },
                                { answer: "Three", correct: true },
                                { answer: "Four", correct: false },
                            ],
                        },
                        {
                            question: "What material was used to build the Colosseum?",
                            options: [
                                { answer: "Granite", correct: false },
                                { answer: "Brick", correct: false },
                                { answer: "Limestone and concrete", correct: true },
                                { answer: "Marble", correct: false },
                            ],
                        },
                        {
                            question: "What was the function of the velarium located above the Colosseum?",
                            options: [
                                { answer: "Raising gladiators", correct: false },
                                { answer: "Protection from the sun", correct: true },
                                { answer: "Organizing naval battles", correct: false },
                                { answer: "Ventilation", correct: false },
                            ],
                        },
                        {
                            question: "What types of battles were held in the Colosseum?",
                            options: [
                                { answer: "Legionnaire battles", correct: false },
                                { answer: "Gladiatorial fights", correct: true },
                                { answer: "Olympic games", correct: false },
                                { answer: "Beast hunts", correct: false },
                            ],
                        },
                        {
                            question: "Which emperor banned gladiatorial fights?",
                            options: [
                                { answer: "Nero", correct: false },
                                { answer: "Constantine the Great", correct: true },
                                { answer: "Tiberius", correct: false },
                                { answer: "Julius Caesar", correct: false },
                            ],
                        },
                        {
                            question: "What was located beneath the Colosseum arena?",
                            options: [
                                { answer: "Stage", correct: false },
                                { answer: "Rooms for gladiators", correct: false },
                                { answer: "Underground chambers with mechanisms", correct: true },
                                { answer: "Temple", correct: false },
                            ],
                        },
                    ]
                }
            },
            {
                location: "Roman Forum",
                image: require('../assets/quiz/locations/5.png'),
                modalMessage: "Hello! Welcome to the Roman Forum, the political and social heart of Rome! To obtain unique artifacts, start this quiz! Are you ready to learn more about the history of Rome? Good luck!",
                quiz: {
                    artifactName: 'Ancient Roman Coin',
                    artifactImage: require('../assets/artifacts/5.png'),
                    finalText: 'Congratulations! You have found an ancient Roman coin used in the markets and trading areas of the Roman Forum.',
                    questions: [
                        {
                            question: "What was the Roman Forum in Ancient Rome?",
                            options: [
                                { answer: "Palace", correct: false },
                                { answer: "Market and public center", correct: true },
                                { answer: "Arena", correct: false },
                                { answer: "Park", correct: false },
                            ],
                        },
                        {
                            question: "Which temple is located in the Roman Forum?",
                            options: [
                                { answer: "Temple of Zeus", correct: false },
                                { answer: "Temple of Saturn", correct: true },
                                { answer: "Temple of Apollo", correct: false },
                                { answer: "Temple of Mars", correct: false },
                            ],
                        },
                        {
                            question: "What location in the Forum was central for political speeches?",
                            options: [
                                { answer: "Tabularium", correct: false },
                                { answer: "Rostra", correct: true },
                                { answer: "Temple of Vesta", correct: false },
                                { answer: "Arch of Triumph", correct: false },
                            ],
                        },
                        {
                            question: "What was the Curia in Ancient Rome?",
                            options: [
                                { answer: "Market", correct: false },
                                { answer: "Meeting place of the Senate", correct: true },
                                { answer: "Palace", correct: false },
                                { answer: "Gladiatorial arena", correct: false },
                            ],
                        },
                        {
                            question: "Who was the first emperor whose triumph passed through the Roman Forum?",
                            options: [
                                { answer: "Julius Caesar", correct: false },
                                { answer: "Augustus", correct: true },
                                { answer: "Tiberius", correct: false },
                                { answer: "Nero", correct: false },
                            ],
                        },
                        {
                            question: "What was located on the Via Sacra that runs through the Roman Forum?",
                            options: [
                                { answer: "Craftsmen's stalls", correct: false },
                                { answer: "Triumphs of emperors", correct: true },
                                { answer: "Gladiator battles", correct: false },
                                { answer: "Trade fairs", correct: false },
                            ],
                        },
                        {
                            question: "Which temple was dedicated to the goddess Vesta in the Roman Forum?",
                            options: [
                                { answer: "Temple of Athena", correct: false },
                                { answer: "Temple of Vesta", correct: true },
                                { answer: "Temple of Juno", correct: false },
                                { answer: "Temple of Venus", correct: false },
                            ],
                        },
                        {
                            question: "Which building was constructed to store state archives?",
                            options: [
                                { answer: "Curia", correct: false },
                                { answer: "Tabularium", correct: true },
                                { answer: "Basilica Julia", correct: false },
                                { answer: "Flavian Palace", correct: false },
                            ],
                        },
                        {
                            question: "What is the Roman Forum in the modern world?",
                            options: [
                                { answer: "Palace", correct: false },
                                { answer: "Tourist attraction", correct: true },
                                { answer: "Parliament", correct: false },
                                { answer: "Shopping center", correct: false },
                            ],
                        },
                        {
                            question: "When did the use of the Forum as the central place of Rome end?",
                            options: [
                                { answer: "300 AD", correct: false },
                                { answer: "600 AD", correct: true },
                                { answer: "1500 AD", correct: false },
                                { answer: "100 BC", correct: false },
                            ],
                        },
                    ]
                }
            },
            {
                location: "Pantheon",
                image: require('../assets/quiz/locations/6.png'),
                modalMessage: "Hello! Welcome to the Pantheon, the temple of all Roman gods! To uncover all the artifacts, you need to take this quiz. Are you ready for new discoveries about ancient Rome? Good luck!",
                quiz: {
                    artifactName: 'Miniature of the Pantheon',
                    artifactImage: require('../assets/artifacts/6.png'),
                    finalText: 'Congratulations! You have received a miniature replica of the Pantheon - a magnificent temple that remains the best-preserved building of ancient Rome.',
                    questions: [
                        {
                            question: "The Pantheon in Rome was a temple for:",
                            options: [
                                { answer: "One god", correct: false },
                                { answer: "All gods", correct: true },
                                { answer: "Emperors", correct: false },
                                { answer: "Gladiators", correct: false },
                            ],
                        },
                        {
                            question: "What architectural features impressed visitors at the Pantheon?",
                            options: [
                                { answer: "Tall columns", correct: false },
                                { answer: "Round dome with an oculus", correct: true },
                                { answer: "Mosaics on the walls", correct: false },
                                { answer: "Vaulting", correct: false },
                            ],
                        },
                        {
                            question: "Which emperor completed the construction of the Pantheon?",
                            options: [
                                { answer: "Augustus", correct: false },
                                { answer: "Hadrian", correct: true },
                                { answer: "Nero", correct: false },
                                { answer: "Trajan", correct: false },
                            ],
                        },
                        {
                            question: "What is the oculus in the Pantheon?",
                            options: [
                                { answer: "Sculpture", correct: false },
                                { answer: "Window in the dome", correct: true },
                                { answer: "Fountain", correct: false },
                                { answer: "Column", correct: false },
                            ],
                        },
                        {
                            question: "The Pantheon was later converted into:",
                            options: [
                                { answer: "Museum", correct: false },
                                { answer: "Church", correct: true },
                                { answer: "Palace", correct: false },
                                { answer: "Forum", correct: false },
                            ],
                        },
                        {
                            question: "The diameter of the Pantheon dome is:",
                            options: [
                                { answer: "15 meters", correct: false },
                                { answer: "30 meters", correct: true },
                                { answer: "50 meters", correct: false },
                                { answer: "60 meters", correct: false },
                            ],
                        },
                        {
                            question: "Who was the first known patron of the Pantheon?",
                            options: [
                                { answer: "Julius Caesar", correct: false },
                                { answer: "Marcus Agrippa", correct: true },
                                { answer: "Constantine", correct: false },
                                { answer: "Caligula", correct: false },
                            ],
                        },
                        {
                            question: "What material was used to create the Pantheon dome?",
                            options: [
                                { answer: "Bronze", correct: false },
                                { answer: "Stone", correct: false },
                                { answer: "Concrete", correct: true },
                                { answer: "Marble", correct: false },
                            ],
                        },
                        {
                            question: "Which building inspired the architecture of the Pantheon?",
                            options: [
                                { answer: "Parthenon", correct: true },
                                { answer: "Temple of Saturn", correct: false },
                                { answer: "Temple of Venus", correct: false },
                                { answer: "Basilica Nova", correct: false },
                            ],
                        },
                        {
                            question: "When was the Pantheon converted into a Christian church?",
                            options: [
                                { answer: "4th century AD", correct: false },
                                { answer: "7th century AD", correct: true },
                                { answer: "12th century AD", correct: false },
                                { answer: "15th century AD", correct: false },
                            ],
                        },
                    ]
                }
            },
        ],    
    },
    {
        name: 'Maya Civilization',
        image: require('../assets/quiz/topics/3.png'),
        topics: [
            {
                location: "Chichen Itza",
                image: require('../assets/quiz/locations/7.png'),
                modalMessage: "Hello! Welcome to Chichen Itza, one of the most significant cities of the Maya civilization! To uncover all the artifacts, you need to complete this quiz. Are you ready to test your knowledge about Maya culture? Good luck!",
                quiz: {
                    artifactName: 'Golden Medallion of Kukulkan',
                    artifactImage: require('../assets/artifacts/7.png'),
                    finalText: 'Congratulations! You have found the golden medallion depicting Kukulkan - the feathered serpent, the god of wind and water worshiped by the Maya.',
                    questions: [
                        {
                            question: "Chichen Itza was the main city of which civilization?",
                            options: [
                                { answer: "Incas", correct: false },
                                { answer: "Aztecs", correct: false },
                                { answer: "Maya", correct: true },
                                { answer: "Olmecs", correct: false },
                            ],
                        },
                        {
                            question: "What is the most famous structure in Chichen Itza?",
                            options: [
                                { answer: "Temple of the Sun", correct: false },
                                { answer: "Great Pyramid", correct: false },
                                { answer: "Temple of Kukulkan", correct: true },
                                { answer: "Temple of the Jaguar", correct: false },
                            ],
                        },
                        {
                            question: "Which god was the main divine figure for the inhabitants of Chichen Itza?",
                            options: [
                                { answer: "Chac", correct: false },
                                { answer: "Kukulkan", correct: true },
                                { answer: "Huracan", correct: false },
                                { answer: "Tezcatlipoca", correct: false },
                            ],
                        },
                        {
                            question: "What natural phenomenon is associated with the Pyramid of Kukulkan during the equinox?",
                            options: [
                                { answer: "Total eclipse", correct: false },
                                { answer: "Appearance of the serpent's silhouette", correct: true },
                                { answer: "Volcanic eruption", correct: false },
                                { answer: "River flow", correct: false },
                            ],
                        },
                        {
                            question: "What is a 'Cenote' in Chichen Itza?",
                            options: [
                                { answer: "Pyramid", correct: false },
                                { answer: "Ritual water body", correct: true },
                                { answer: "Temple", correct: false },
                                { answer: "Ball game area", correct: false },
                            ],
                        },
                        {
                            question: "What sport was popular in Chichen Itza?",
                            options: [
                                { answer: "Gladiatorial combat", correct: false },
                                { answer: "Ball game", correct: true },
                                { answer: "Wrestling", correct: false },
                                { answer: "Fire jumping", correct: false },
                            ],
                        },
                        {
                            question: "How many steps does the Pyramid of Kukulkan have?",
                            options: [
                                { answer: "91", correct: true },
                                { answer: "100", correct: false },
                                { answer: "120", correct: false },
                                { answer: "150", correct: false },
                            ],
                        },
                        {
                            question: "What does the serpent that 'descends' the Pyramid of Kukulkan during the equinox symbolize?",
                            options: [
                                { answer: "Spirit of the warrior", correct: false },
                                { answer: "Divine power of Kukulkan", correct: true },
                                { answer: "Sun", correct: false },
                                { answer: "Moon", correct: false },
                            ],
                        },
                        {
                            question: "What function did the Observatory in Chichen Itza serve?",
                            options: [
                                { answer: "Religious", correct: false },
                                { answer: "Astronomical observations", correct: true },
                                { answer: "Military", correct: false },
                                { answer: "Trade", correct: false },
                            ],
                        },
                        {
                            question: "Chichen Itza is located in modern-day:",
                            options: [
                                { answer: "Colombia", correct: false },
                                { answer: "Peru", correct: false },
                                { answer: "Mexico", correct: true },
                                { answer: "Guatemala", correct: false },
                            ],
                        },
                    ]
                }
            },
            {
                location: "Palenque",
                image: require('../assets/quiz/locations/8.png'),
                modalMessage: "Hello! Welcome to Palenque, famous for its architectural masterpieces! To obtain unique artifacts, start this quiz! Are you ready to learn more about the Maya civilization? Good luck!",
                quiz: {
                    artifactName: 'Stone Mask of King Pakal',
                    artifactImage: require('../assets/artifacts/8.png'),
                    finalText: 'Congratulations! You have found the stone mask of King Pakal, which was used in rituals honoring great rulers of the Maya civilization.',
                    questions: [
                        {
                            question: "Palenque was the capital of which Maya state?",
                            options: [
                                { answer: "Tikal", correct: false },
                                { answer: "Lacanja", correct: true },
                                { answer: "Copan", correct: false },
                                { answer: "Uxmal", correct: false },
                            ],
                        },
                        {
                            question: "Which king was the most famous ruler of Palenque?",
                            options: [
                                { answer: "King Kukulkan", correct: false },
                                { answer: "King Pakal", correct: true },
                                { answer: "King Ahau", correct: false },
                                { answer: "King Hunak", correct: false },
                            ],
                        },
                        {
                            question: "What type of art was particularly developed in Palenque?",
                            options: [
                                { answer: "Sculpture", correct: false },
                                { answer: "Architecture", correct: true },
                                { answer: "Literature", correct: false },
                                { answer: "Music", correct: false },
                            ],
                        },
                        {
                            question: "Which temple was built in honor of King Pakal?",
                            options: [
                                { answer: "Temple of the Jaguar", correct: false },
                                { answer: "Temple of Inscriptions", correct: true },
                                { answer: "Temple of the Sun", correct: false },
                                { answer: "Temple of the Moon", correct: false },
                            ],
                        },
                        {
                            question: "Where was King Pakal buried?",
                            options: [
                                { answer: "In a pyramid", correct: false },
                                { answer: "In a temple", correct: false },
                                { answer: "In the Temple of Inscriptions", correct: true },
                                { answer: "In an underground tomb", correct: false },
                            ],
                        },
                        {
                            question: "Which deity was the most important in Palenque?",
                            options: [
                                { answer: "Kukulkan", correct: false },
                                { answer: "Huracan", correct: false },
                                { answer: "Chac", correct: true },
                                { answer: "Tezcatlipoca", correct: false },
                            ],
                        },
                        {
                            question: "Which river flowed near Palenque?",
                            options: [
                                { answer: "Usumacinta River", correct: true },
                                { answer: "Chiapas River", correct: false },
                                { answer: "Yucatan River", correct: false },
                                { answer: "Tikal River", correct: false },
                            ],
                        },
                        {
                            question: "What astronomical knowledge did the Maya have in Palenque?",
                            options: [
                                { answer: "Phases of the moon", correct: false },
                                { answer: "Solar and lunar eclipses", correct: true },
                                { answer: "Planetary positions", correct: false },
                                { answer: "Comet movements", correct: false },
                            ],
                        },
                        {
                            question: "Which part of the temples in Palenque was impressive for its complexity?",
                            options: [
                                { answer: "Foundations", correct: false },
                                { answer: "Decorative panels", correct: true },
                                { answer: "Underground tunnels", correct: false },
                                { answer: "Roofs", correct: false },
                            ],
                        },
                        {
                            question: "Which modern country is located at the site of Palenque?",
                            options: [
                                { answer: "Peru", correct: false },
                                { answer: "Mexico", correct: true },
                                { answer: "Guatemala", correct: false },
                                { answer: "Honduras", correct: false },
                            ],
                        },
                    ]
                }
            },
            {
                location: "Tikal",
                image: require('../assets/quiz/locations/9.png'),
                modalMessage: "Hello! Welcome to Tikal, one of the largest cities of the Maya! To uncover all the artifacts, you need to take this quiz. Are you ready for new discoveries about Maya culture? Good luck!",
                quiz: {
                    artifactName: 'Stone with Maya Hieroglyphs',
                    artifactImage: require('../assets/artifacts/9.png'),
                    finalText: 'Congratulations! You have found a stone with ancient Maya hieroglyphs, which can tell a lot about life in Tikal and the rituals of this great civilization.',
                    questions: [
                        {
                            question: "Tikal was the largest city of which civilization?",
                            options: [
                                { answer: "Incas", correct: false },
                                { answer: "Maya", correct: true },
                                { answer: "Aztecs", correct: false },
                                { answer: "Olmecs", correct: false },
                            ],
                        },
                        {
                            question: "How many pyramids were located in Tikal?",
                            options: [
                                { answer: "2", correct: false },
                                { answer: "5", correct: false },
                                { answer: "6", correct: true },
                                { answer: "10", correct: false },
                            ],
                        },
                        {
                            question: "Which god was especially revered in Tikal?",
                            options: [
                                { answer: "Kukulkan", correct: false },
                                { answer: "Huracan", correct: false },
                                { answer: "Chac", correct: true },
                                { answer: "Quetzalcoatl", correct: false },
                            ],
                        },
                        {
                            question: "What was the main function of the pyramids in Tikal?",
                            options: [
                                { answer: "Burial and ritual site", correct: true },
                                { answer: "Military fortresses", correct: false },
                                { answer: "Trade centers", correct: false },
                                { answer: "Residential houses", correct: false },
                            ],
                        },
                        {
                            question: "What title did the rulers of Tikal bear?",
                            options: [
                                { answer: "Quetzalcoatl", correct: false },
                                { answer: "Shaw", correct: true },
                                { answer: "Pakal", correct: false },
                                { answer: "Tlatoani", correct: false },
                            ],
                        },
                        {
                            question: "Tikal is located in modern-day:",
                            options: [
                                { answer: "Mexico", correct: false },
                                { answer: "Guatemala", correct: true },
                                { answer: "Peru", correct: false },
                                { answer: "Bolivia", correct: false },
                            ],
                        },
                        {
                            question: "Which main pyramid in Tikal is called the 'Temple of the Great Jaguar'?",
                            options: [
                                { answer: "Pyramid I", correct: true },
                                { answer: "Pyramid II", correct: false },
                                { answer: "Pyramid III", correct: false },
                                { answer: "Pyramid IV", correct: false },
                            ],
                        },
                        {
                            question: "What materials were used to build the pyramids in Tikal?",
                            options: [
                                { answer: "Granite and marble", correct: false },
                                { answer: "Stone and limestone", correct: true },
                                { answer: "Brick and wood", correct: false },
                                { answer: "Sand and clay", correct: false },
                            ],
                        },
                        {
                            question: "What was the main function of the 'Acropolis' in Tikal?",
                            options: [
                                { answer: "Trade center", correct: false },
                                { answer: "Burial site for rulers", correct: true },
                                { answer: "Defensive fortress", correct: false },
                                { answer: "Palace of rulers", correct: false },
                            ],
                        },
                        {
                            question: "What natural phenomenon was used for predictions in Tikal?",
                            options: [
                                { answer: "Phases of the moon", correct: false },
                                { answer: "Solar eclipses", correct: true },
                                { answer: "Rainy seasons", correct: false },
                                { answer: "River tides", correct: false },
                            ],
                        },
                    ]
                }
            },
        ],    
    },
    {
        name: 'Mesopotamian Civilization',
        image: require('../assets/quiz/topics/4.png'),
        topics: [
            {
                location: "Ur",
                image: require('../assets/quiz/locations/10.png'),
                modalMessage: "Hello! Welcome to the location of Ur, one of the most important cities of ancient Sumer. To uncover all the artifacts, you need to complete this quiz. Are you ready to test your knowledge about Sumerian civilization? Good luck!",
                quiz: {
                    artifactName: 'Golden Scepter of the Sumerian Ruler',
                    artifactImage: require('../assets/artifacts/10.png'),
                    finalText: 'Congratulations! You have found the golden scepter of the Sumerian ruler, symbolizing the power and wealth of Sumerian civilization.',
                    questions: [
                        {
                            question: "Ur was an important city of which civilization?",
                            options: [
                                { answer: "Incas", correct: false },
                                { answer: "Hittites", correct: false },
                                { answer: "Sumerians", correct: true },
                                { answer: "Aztecs", correct: false },
                            ],
                        },
                        {
                            question: "Which of these structures is located in Ur?",
                            options: [
                                { answer: "Ziggurat", correct: true },
                                { answer: "Palace", correct: false },
                                { answer: "Observatory", correct: false },
                                { answer: "Temple of Kukulkan", correct: false },
                            ],
                        },
                        {
                            question: "Which important river flows through Mesopotamia?",
                            options: [
                                { answer: "Nile", correct: false },
                                { answer: "Tigris", correct: true },
                                { answer: "Amazon", correct: false },
                                { answer: "Ganges", correct: false },
                            ],
                        },
                        {
                            question: "What artifact was found in the tomb of the ruler of Ur?",
                            options: [
                                { answer: "Golden wreath", correct: false },
                                { answer: "Golden mask", correct: false },
                                { answer: "Bag of jewels", correct: true },
                                { answer: "Sword", correct: false },
                            ],
                        },
                        {
                            question: "What writing system did the Sumerians use?",
                            options: [
                                { answer: "Latin", correct: false },
                                { answer: "Pictographic", correct: false },
                                { answer: "Cuneiform", correct: true },
                                { answer: "Egyptian hieroglyphs", correct: false },
                            ],
                        },
                        {
                            question: "Which cultures developed in Mesopotamia?",
                            options: [
                                { answer: "Sumerian, Akkadian", correct: true },
                                { answer: "Indian, Chinese", correct: false },
                                { answer: "Greek, Roman", correct: false },
                                { answer: "Aztec, Inca", correct: false },
                            ],
                        },
                        {
                            question: "Which deity was considered the chief god in Sumerian religion?",
                            options: [
                                { answer: "Nabu", correct: false },
                                { answer: "Marduk", correct: false },
                                { answer: "Anu", correct: true },
                                { answer: "Cherub", correct: false },
                            ],
                        },
                        {
                            question: "What significant event occurred in Ur in the 3rd millennium BC?",
                            options: [
                                { answer: "Conquest of Egypt", correct: false },
                                { answer: "Flourishing trade", correct: true },
                                { answer: "Beginning of war", correct: false },
                                { answer: "Emergence of a new religion", correct: false },
                            ],
                        },
                        {
                            question: "What did the ziggurat represent?",
                            options: [
                                { answer: "Palace", correct: false },
                                { answer: "Temple", correct: true },
                                { answer: "Fortress", correct: false },
                                { answer: "City", correct: false },
                            ],
                        },
                        {
                            question: "Which of these technologies was developed in Mesopotamia?",
                            options: [
                                { answer: "Clock", correct: false },
                                { answer: "Water mill", correct: false },
                                { answer: "Writing", correct: true },
                                { answer: "Telephone", correct: false },
                            ],
                        },
                    ]
                }
            },
            {
                location: "Babylon",
                image: require('../assets/quiz/locations/11.png'),
                modalMessage: "Hello! Welcome to Babylon - the city where one of the most influential cultures of the ancient world was born. To obtain unique artifacts, start this quiz! Are you ready to test your knowledge about the history of Babylon? Good luck!",
                quiz: {
                    artifactName: 'Cuneiform Tablet with the Code of Hammurabi',
                    artifactImage: require('../assets/artifacts/11.png'),
                    finalText: 'Congratulations! You have found a cuneiform tablet with the Code of Hammurabi, which contains important laws and regulations of ancient Babylon.',
                    questions: [
                        {
                            question: "Which of these cultures was represented in Babylon?",
                            options: [
                                { answer: "Assyrian", correct: false },
                                { answer: "Akkadian", correct: false },
                                { answer: "Babylonian", correct: true },
                                { answer: "Indian", correct: false },
                            ],
                        },
                        {
                            question: "Which of these structures is located in Babylon?",
                            options: [
                                { answer: "Ziggurat", correct: true },
                                { answer: "Palace", correct: false },
                                { answer: "Temple of Isis", correct: false },
                                { answer: "Observatory", correct: false },
                            ],
                        },
                        {
                            question: "Who was a famous ruler of Babylon?",
                            options: [
                                { answer: "Hammurabi", correct: true },
                                { answer: "Nabopolassar", correct: false },
                                { answer: "Nebuchadnezzar", correct: false },
                                { answer: "Sargon", correct: false },
                            ],
                        },
                        {
                            question: "What important legislative code was compiled in Babylon?",
                            options: [
                                { answer: "Code of Hammurabi", correct: true },
                                { answer: "Justinian Code", correct: false },
                                { answer: "Lycurgus Code", correct: false },
                                { answer: "Plato's Code", correct: false },
                            ],
                        },
                        {
                            question: "Which of these cultures was conquered by Babylon?",
                            options: [
                                { answer: "Egyptian", correct: false },
                                { answer: "Assyrian", correct: true },
                                { answer: "Minoan", correct: false },
                                { answer: "Celtic", correct: false },
                            ],
                        },
                        {
                            question: "Which deity was worshiped in Babylon?",
                            options: [
                                { answer: "Nabu", correct: true },
                                { answer: "Amun", correct: false },
                                { answer: "Zeus", correct: false },
                                { answer: "Odysseus", correct: false },
                            ],
                        },
                        {
                            question: "Which achievements are associated with Babylon?",
                            options: [
                                { answer: "Development of medical science", correct: false },
                                { answer: "Development of mathematics", correct: true },
                                { answer: "Invention of literature", correct: false },
                                { answer: "Construction of arches", correct: false },
                            ],
                        },
                        {
                            question: "What important mode of transportation was used in Babylon?",
                            options: [
                                { answer: "Water transport", correct: false },
                                { answer: "Camel", correct: false },
                                { answer: "Horse", correct: true },
                                { answer: "Elephants", correct: false },
                            ],
                        },
                        {
                            question: "What significant event occurred in Babylon in the 6th century BC?",
                            options: [
                                { answer: "Fall of Rome", correct: false },
                                { answer: "Conquest of Persia", correct: true },
                                { answer: "Victory over Greece", correct: false },
                                { answer: "Emergence of a new religion", correct: false },
                            ],
                        },
                        {
                            question: "What architectural feature is notable in Babylon?",
                            options: [
                                { answer: "Towers", correct: true },
                                { answer: "Underground temples", correct: false },
                                { answer: "Medieval castles", correct: false },
                                { answer: "Roman forums", correct: false },
                            ],
                        },
                    ]
                }
            },
            {
                location: "Nineveh",
                image: require('../assets/quiz/locations/12.png'),
                modalMessage: "Hello! Welcome to Nineveh, the capital of Assyria! This place is famous for its vast libraries and architectural masterpieces. To uncover all the artifacts, you need to take this quiz. Are you ready for new discoveries? Good luck!",
                quiz: {
                    artifactName: 'Scepter of Ashurbanipal',
                    artifactImage: require('../assets/artifacts/12.png'),
                    finalText: 'Congratulations! You have found the scepter of Ashurbanipal, symbolizing the greatness and power of the Assyrian ruler.',
                    questions: [
                        {
                            question: "Which of these cultures was represented in Nineveh?",
                            options: [
                                { answer: "Assyrian", correct: true },
                                { answer: "Babylonian", correct: false },
                                { answer: "Sumerian", correct: false },
                                { answer: "Indian", correct: false },
                            ],
                        },
                        {
                            question: "Which important river flows through Nineveh?",
                            options: [
                                { answer: "Nile", correct: false },
                                { answer: "Tigris", correct: true },
                                { answer: "Euphrates", correct: false },
                                { answer: "Amazon", correct: false },
                            ],
                        },
                        {
                            question: "What architectural structure was known in Nineveh?",
                            options: [
                                { answer: "Ziggurat", correct: false },
                                { answer: "Palace of Ashurbanipal", correct: true },
                                { answer: "Temple of Isis", correct: false },
                                { answer: "Observatory", correct: false },
                            ],
                        },
                        {
                            question: "What type of art was popular in Nineveh?",
                            options: [
                                { answer: "Painting", correct: false },
                                { answer: "Sculpture", correct: true },
                                { answer: "Mosaic", correct: false },
                                { answer: "Graphic", correct: false },
                            ],
                        },
                        {
                            question: "What significant event occurred in Nineveh in the 7th century BC?",
                            options: [
                                { answer: "Fall of Troy", correct: false },
                                { answer: "Conquest of Egypt", correct: true },
                                { answer: "Emergence of a new religion", correct: false },
                                { answer: "War with Persia", correct: false },
                            ],
                        },
                        {
                            question: "Who was a famous ruler of Nineveh?",
                            options: [
                                { answer: "Ashurbanipal", correct: true },
                                { answer: "Hammurabi", correct: false },
                                { answer: "Nebuchadnezzar", correct: false },
                                { answer: "Sargon", correct: false },
                            ],
                        },
                        {
                            question: "What type of literature was popular in Nineveh?",
                            options: [
                                { answer: "Epics", correct: true },
                                { answer: "Poetry", correct: false },
                                { answer: "Drama", correct: false },
                                { answer: "Novel", correct: false },
                            ],
                        },
                        {
                            question: "Which animals were considered sacred in Nineveh?",
                            options: [
                                { answer: "Lions", correct: true },
                                { answer: "Jaguars", correct: false },
                                { answer: "Pelicans", correct: false },
                                { answer: "Dolphins", correct: false },
                            ],
                        },
                        {
                            question: "Which deity was worshiped in Nineveh?",
                            options: [
                                { answer: "Ishtar", correct: true },
                                { answer: "Nabu", correct: false },
                                { answer: "Amun", correct: false },
                                { answer: "Zeus", correct: false },
                            ],
                        },
                        {
                            question: "What technology was developed in Nineveh?",
                            options: [
                                { answer: "Airplane", correct: false },
                                { answer: "Wheel", correct: true },
                                { answer: "Telephone", correct: false },
                                { answer: "Television", correct: false },
                            ],
                        },
                    ]
                }
            },
        ],    
    }
];

export default quiz;
