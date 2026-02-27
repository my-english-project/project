// ==========================================
// BASE DE DATOS DEL CURSO
// ==========================================
// Este archivo contiene solo la estructura de datos del plan de estudios.

const courseData = {
    basic: {
        title: "BASIC LEVELS",
        subtitle: "(A1 - A2) Basic I, II, III, IV",
        theme: "btn-basic",
        cefrDesc: [
            { title: "LEVEL A1", text: "The student is able to understand and use everyday expressions and very basic phrases aimed at satisfying immediate needs. They can introduce themselves and others, ask for and give basic personal information about their home, belongings, and people they know." },
            { title: "LEVEL A2", text: "The student is able to understand sentences and frequently used expressions related to areas of most immediate relevance (e.g., very basic personal and family information, shopping, local geography, employment)." }
        ],
        levels: {
            basic1: {
                title: "BASIC I",
                topics: [
                    "Greetings and introductions", "The alphabet and basic pronunciation", "Numbers, days, months, and dates", "Definite/indefinite articles", "Verbs to be and have got", "Basic questions (What’s your name? Where are you from?)", "Nationalities and professions", "Vocabulary: family, colors, classroom objects, jobs, sports, food, drinks", "Possessive adjectives and pronouns", "Simple present tense", "Nouns: singular and plural", "Telling the time / prepositions of time: at, on, in", "Adjective + noun", "Describing people"
                ]
            },
            basic2: {
                title: "BASIC II",
                topics: [
                    "Review: verbs in simple present", "Prepositions of place", "There is / There are", "This / That / These / Those", "Affirmative, negative, and interrogative sentences with do/does", "Reading and writing simple descriptions", "Have / Has", "Adverbs of frequency", "How much / How many / Some / Any", "Prepositions: in, on, under, next to", "Was / Were", "Simple past (regular and irregular verbs)", "Can / Can’t", "Want, like, would like, love, hate", "Object pronouns", "Adverbs", "Verbs + nouns", "Giving directions / restaurant dialogue / shopping"
                ]
            },
            basic3: {
                title: "BASIC III",
                topics: [
                    "Review: simple past verbs (regular and irregular)", "Time expressions: last, yesterday, ago", "Simple present and present progressive", "Present progressive as future", "Future: will / going to", "Comparatives and superlatives", "A / some", "Review: much / many", "Reading, writing, and speaking about holidays and celebrations", "Describing types of weather"
                ]
            },
            basic4: {
                title: "BASIC IV",
                topics: [
                    "Modal verbs: should, must, have to", "Review: future with going to and will", "Past continuous", "Vocabulary: health, media, airport", "Writing simple emails, personal descriptions, stories, experiences", "Infinitive as an objective", "Simple past vs. past continuous", "Past participle verbs", "Present perfect: ever / never; yet / already / just", "Interviews", "Describing feelings and emotions"
                ]
            }
        }
    },
    intermediate: {
        title: "INTERMEDIATE LEVELS",
        subtitle: "(B1 - B2) Intermediate I, II, III, IV",
        theme: "btn-inter",
        cefrDesc: [
            { title: "LEVEL B1", text: "The student can understand the main points of clear standard input on familiar matters regularly encountered in work, school, leisure, etc. They can deal with most situations likely to arise while traveling in an area where the language is spoken." },
            { title: "LEVEL B2", text: "The student can understand the main ideas of complex texts on both concrete and abstract topics, including technical discussions in their field of specialization. They can interact with native speakers with a degree of fluency and spontaneity." }
        ],
        levels: {
            inter1: {
                title: "INTERMEDIATE I",
                topics: [
                    "Review of verb tenses: present, past, and future", "Verb patterns (want to, enjoy + -ing, etc.)", "First conditional", "Present perfect vs. past simple", "Vocabulary: work, travel, technology", "Writing informal emails and messages", "A few / a little / a lot / lots of", "Something, someone, somewhere", "Review: future intentions", "As…as", "For / since", "-ed / -ing adjectives", "Synonyms and antonyms", "Connectors with adverbs, time expressions"
                ]
            },
            inter2: {
                title: "INTERMEDIATE II",
                topics: [
                    "Second conditional", "Reported speech (introductory)", "Past modal verbs (could have, should have)", "Expressions with get, common phrasal verbs", "Vocabulary: relationships, environment", "Comprehension of more complex texts", "Present perfect progressive", "Passive voice", "Time clauses: while, when, until", "Exclamations with so / such", "Linking ideas with: and, still, just, unfortunately", "Present perfect vs. present perfect progressive"
                ]
            },
            inter3: {
                title: "INTERMEDIATE III",
                topics: [
                    "Passive voice in different tenses", "Reported speech (advanced)", "Perfect tenses (present/past/future perfect)", "Sentences with wish / if only", "Vocabulary: politics, science", "Short argumentative essays", "Used to", "Future possibilities: may, might, could", "Lifestyles / comparing customs in different countries", "Prefixes and suffixes", "Talking about yourself / job interview", "Fears and phobias"
                ]
            },
            inter4: {
                title: "INTERMEDIATE IV",
                topics: [
                    "Mixed conditionals", "Third conditional", "Relative clauses (defining / non-defining)", "Reflexive pronouns", "Formal and informal discourse", "Complex connectors (although, in spite of, etc.)", "Reading academic texts and opinion articles", "Oral production with fluency and accuracy", "Might have done / could have done / should have done", "All / Everything; each / other", "Compound nouns", "Phrasal verbs with out and up", "Linking ideas: anyway / naturally / fortunately"
                ]
            }
        }
    },
    advanced: {
        title: "ADVANCED LEVELS",
        subtitle: "(C1) Advanced I, II, III, IV",
        theme: "btn-adv",
        cefrDesc: [
            { title: "LEVEL C1", text: "The student can understand a wide range of demanding, longer texts, and recognize implicit meaning. They can express themselves fluently and spontaneously without much obvious searching for expressions. They can use language flexibly and effectively for social, academic, and professional purposes." }
        ],
        levels: {
            adv1: {
                title: "ADVANCED I",
                topics: [
                    "Subjunctive and formal structures", "Complex narrative tenses", "Idiomatic expressions", "Inversion for emphasis", "Critical reading of long texts", "Debating social and ethical topics", "Future forms detailed", "Expressions of quantity detailed", "Modals and related verbs detailed", "Expressing habits", "Prefixes and antonyms", "Discussion: pros and cons of living abroad", "A CV", "Correcting mistakes", "Talking about your favorite book or film", "Homonyms / homophones", "Conjunctions: whenever / so that / even though", "Business expressions", "Numbers, fractions, decimals, dates, time, phone numbers"
                ]
            },
            adv2: {
                title: "ADVANCED II",
                topics: [
                    "Collocations and verbal collocations", "Nominalization", "Academic vocabulary", "Structured essay writing", "Reformulation and paraphrasing", "Formal presentations with visual support", "Modal auxiliary verbs: could have been / might have done", "Hypothesizing: I wish / I’d rather / If only", "Determiners: each, every, no, none, both, either", "Review of all tenses", "Review of active and passive voice", "Linking words and expressions: as soon as, eventually", "Linking and commenting: personally, anyway, hopefully", "The reunion discussion"
                ]
            },
            adv3: {
                title: "ADVANCED III",
                topics: [
                    "English for business and academic contexts", "Report and formal email writing techniques", "Meetings, negotiations, and presentations", "Specialized technical vocabulary", "Competency-based language assessment", "Phrasal verbs with up and down", "Idiomatic collocations", "Finding things in common", "Pronunciation focus", "Phrasal verbs with on and off", "Discussing economic growth", "Report writing", "Summarizing a listening", "Giving an overview of key information in a text", "Researching a period in history", "Talking about things that make people happy"
                ]
            },
            adv4: {
                title: "ADVANCED IV",
                topics: [
                        "Simulation of international exams (CAE, IELTS C1)", "Complex and critical argumentation", "Production of specialized speeches and essays", "Mastery of registers (formal/informal)", "Personalized feedback for improvement", "Relatives and participles detailed", "Future forms", "Future in the past", "Linking devices: thus / furthermore / meanwhile", "Homonyms, homophones, and homographs", "Metaphorical language", "Tags and replies", "Debating an issue", "Describing and evaluating", "Exchanging information about a reading text"
                ]
            }
        }
    }
};