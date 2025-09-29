const universities_part_1 = [
    // --- France (Unranked) ---
    { id: 'universiteAngers', name: 'Université d\'Angers', link: 'https://www.univ-angers.fr', ranking: 'Unranked', country: 'France' },
    { id: 'universiteAvignon', name: 'Avignon Université', link: 'https://univ-avignon.fr', ranking: 'Unranked', country: 'France' },
    { id: 'universiteBretagneSud', name: 'Université Bretagne Sud', link: 'https://www.univ-ubs.fr', ranking: 'Unranked', country: 'France' },
    { id: 'universiteClermontAuvergne', name: 'Université Clermont Auvergne', link: 'https://www.uca.fr', ranking: 'Unranked', country: 'France' },
    { id: 'universiteLeMans', name: 'Le Mans Université', link: 'https://www.univ-lemans.fr', ranking: 'Unranked', country: 'France' },
    { id: 'universiteReims', name: 'Université de Reims Champagne-Ardenne', link: 'https://www.univ-reims.fr', ranking: 'Unranked', country: 'France' },
    { id: 'universitePicardie', name: 'Université de Picardie Jules Verne', link: 'https://www.u-picardie.fr', ranking: 'Unranked', country: 'France' },
    { id: 'universiteLaRochelle', name: 'La Rochelle Université', link: 'https://www.univ-larochelle.fr', ranking: 'Unranked', country: 'France' },
    { id: 'universiteLumiereLyon2', name: 'Université Lumière Lyon 2', link: 'https://www.univ-lyon2.fr', ranking: 'Unranked (Social Sciences)', country: 'France' },
    { id: 'universiteToulouseJeanJaures', name: 'Université Toulouse - Jean Jaurès', link: 'https://www.univ-tlse2.fr', ranking: 'Unranked (Arts & Humanities)', country: 'France' },
    { id: 'universitePau', name: 'Université de Pau et des Pays de l\'Adour', link: 'https://www.univ-pau.fr', ranking: 'Unranked', country: 'France' },
    { id: 'universiteSavoie', name: 'Université Savoie Mont Blanc', link: 'https://www.univ-smb.fr', ranking: 'Unranked', country: 'France' },
    { id: 'insee', name: 'ENSAE Paris (part of IP Paris)', link: 'https://www.ensae.fr', ranking: 'Unranked (Grande École)', country: 'France' },
    { id: 'audencia', name: 'Audencia Business School', link: 'https://www.audencia.com', ranking: 'Unranked (Business School)', country: 'France' },
    { id: 'neoma', name: 'NEOMA Business School', link: 'https://neoma-bs.com', ranking: 'Unranked (Business School)', country: 'France' },

    // --- Spain (Unranked) ---
    { id: 'ua', name: 'Universidad de Alicante', link: 'https://www.ua.es', ranking: 'Unranked', country: 'Spain' },
    { id: 'udc', name: 'Universidade da Coruña', link: 'https://www.udc.es', ranking: 'Unranked', country: 'Spain' },
    { id: 'ujaen', name: 'Universidad de Jaén', link: 'https://www.ujaen.es', ranking: 'Unranked', country: 'Spain' },
    { id: 'ull', name: 'Universidad de La Laguna', link: 'https://www.ull.es', ranking: 'Unranked', country: 'Spain' },
    { id: 'unileon', name: 'Universidad de León', link: 'https://www.unileon.es', ranking: 'Unranked', country: 'Spain' },
    { id: 'um', name: 'Universidad de Murcia', link: 'https://www.um.es', ranking: 'Unranked', country: 'Spain' },
    { id: 'unirioja', name: 'Universidad de La Rioja', link: 'https://www.unirioja.es', ranking: 'Unranked', country: 'Spain' },
    { id: 'unizar', name: 'Universidad de Zaragoza', link: 'https://www.unizar.es', ranking: 'Unranked', country: 'Spain' },
    { id: 'upo', name: 'Universidad Pablo de Olavide', link: 'https://www.upo.es', ranking: 'Unranked', country: 'Spain' },
    { id: 'uvigo', name: 'Universidade de Vigo', link: 'https://www.uvigo.gal', ranking: 'Unranked', country: 'Spain' },

    // --- Italy (Unranked) ---
    { id: 'unibg', name: 'University of Bergamo', link: 'https://www.unibg.it', ranking: 'Unranked', country: 'Italy' },
    { id: 'unibs', name: 'University of Brescia', link: 'https://www.unibs.it', ranking: 'Unranked', country: 'Italy' },
    { id: 'unica', name: 'University of Cagliari', link: 'https://www.unica.it', ranking: 'Unranked', country: 'Italy' },
    { id: 'unife', name: 'University of Ferrara', link: 'https://www.unife.it', ranking: 'Unranked', country: 'Italy' },
    { id: 'unipr', name: 'University of Parma', link: 'https://www.unipr.it', ranking: 'Unranked', country: 'Italy' },
    { id: 'unisa', name: 'University of Salerno', link: 'https://www.unisa.it', ranking: 'Unranked', country: 'Italy' },
    { id: 'unisr', name: 'Vita-Salute San Raffaele University', link: 'https://www.unisr.it', ranking: 'Unranked (Medical)', country: 'Italy' },
    { id: 'univpm', name: 'Polytechnic University of Marche', link: 'https://www.univpm.it', ranking: 'Unranked', country: 'Italy' },
    { id: 'iuav', name: 'Università Iuav di Venezia', link: 'https://www.iuav.it', ranking: 'Unranked (Architecture & Design)', country: 'Italy' },

    // --- Netherlands (Unranked - Primarily Universities of Applied Sciences) ---
    { id: 'hanzeUAS', name: 'Hanze University of Applied Sciences, Groningen', link: 'https://www.hanze.nl', ranking: 'Unranked (Applied Sciences)',country: 'Netherlands' },
    { id: 'hva', name: 'Amsterdam University of Applied Sciences (HvA)', link: 'https://www.amsterdamuas.com', ranking: 'Unranked (Applied Sciences)',country: 'Netherlands' },
    { id: 'saxionUAS', name: 'Saxion University of Applied Sciences', link: 'https://www.saxion.edu', ranking: 'Unranked (Applied Sciences)',country: 'Netherlands' },
    { id: 'fontysUAS', name: 'Fontys University of Applied Sciences', link: 'https://fontys.edu', ranking: 'Unranked (Applied Sciences)',country: 'Netherlands' },
    { id: 'nhlStendenUAS', name: 'NHL Stenden University of Applied Sciences', link: 'https://www.nhlstenden.com', ranking: 'Unranked (Applied Sciences)',country: 'Netherlands' },
    { id: 'hanUAS', name: 'HAN University of Applied Sciences', link: 'https://www.han.nl', ranking: 'Unranked (Applied Sciences)',country: 'Netherlands' },
    { id: 'hagueUAS', name: 'The Hague University of Applied Sciences', link: 'https://www.thehagueuniversity.com', ranking: 'Unranked (Applied Sciences)',country: 'Netherlands' },
    { id: 'rotterdamUAS', name: 'Rotterdam University of Applied Sciences', link: 'https://www.rotterdamuas.com', ranking: 'Unranked (Applied Sciences)',country: 'Netherlands' },
    { id: 'zuydUAS', name: 'Zuyd University of Applied Sciences', link: 'https://www.zuyd.nl', ranking: 'Unranked (Applied Sciences)',country: 'Netherlands' },

    // --- Switzerland (Unranked - Primarily Universities of Applied Sciences) ---
    { id: 'zhaw', name: 'Zurich University of Applied Sciences (ZHAW)', link: 'https://www.zhaw.ch', ranking: 'Unranked (Applied Sciences)', country: 'Switzerland' },
    { id: 'hesso', name: 'University of Applied Sciences and Arts Western Switzerland (HES-SO)', link: 'https://www.hes-so.ch', ranking: 'Unranked (Applied Sciences)', country: 'Switzerland' },
    { id: 'bfh', name: 'Bern University of Applied Sciences (BFH)', link: 'https://www.bfh.ch', ranking: 'Unranked (Applied Sciences)', country: 'Switzerland' },
    { id: 'fhnw', name: 'University of Applied Sciences and Arts Northwestern Switzerland (FHNW)', link: 'https://www.fhnw.ch', ranking: 'Unranked (Applied Sciences)', country: 'Switzerland' },
    { id: 'hslu', name: 'Lucerne University of Applied Sciences and Arts (HSLU)', link: 'https://www.hslu.ch', ranking: 'Unranked (Applied Sciences)', country: 'Switzerland' },
    { id: 'usi', name: 'Università della Svizzera italiana (USI)', link: 'https://www.usi.ch', ranking: 'Unranked', country: 'Switzerland' },
];




// --- Data for French Universities ---
// --- Data for European Universities (France, Spain, Italy, Netherlands, Switzerland) ---
const universities_part_2 = [
    // --- France ---
    { id: 'universitePsl', name: 'Université PSL (Paris Sciences & Lettres)', link: 'https://psl.eu', ranking: 'QS World: #24', country: 'France' },
    { id: 'institutPolytechniqueParis', name: 'Institut Polytechnique de Paris', link: 'https://www.ip-paris.fr', ranking: 'QS World: #38', country: 'France' },
    { id: 'sorbonneUniversite', name: 'Sorbonne University', link: 'https://www.sorbonne-universite.fr', ranking: 'QS World: #59', country: 'France' },
    { id: 'universiteParisSaclay', name: 'Université Paris-Saclay', link: 'https://www.universite-paris-saclay.fr', ranking: 'QS World: #71', country: 'France' },
    { id: 'ecoleNormaleSuperieureLyon', name: 'Ecole Normale Supérieure de Lyon', link: 'https://www.ens-lyon.fr', ranking: 'QS World: #184', country: 'France' },
    { id: 'ecoleDesPonts', name: 'Ecole des Ponts ParisTech', link: 'https://www.ecoledesponts.fr', ranking: 'QS World: #192', country: 'France' },
    { id: 'universiteParisCite', name: 'Université Paris Cité', link: 'https://u-paris.fr', ranking: 'QS World: #236', country: 'France' },
    { id: 'sciencesPo', name: 'Sciences Po', link: 'https://www.sciencespo.fr', ranking: 'QS World: #319' , country: 'France'},
    { id: 'universiteParis1PantheonSorbonne', name: 'Université Paris 1 Panthéon-Sorbonne', link: 'https://www.pantheonsorbonne.fr', ranking: 'QS World: #328', country: 'France' },
    { id: 'universiteGrenobleAlpes', name: 'Université Grenoble Alpes', link: 'https://www.univ-grenoble-alpes.fr', ranking: 'QS World: #347' , country: 'France'},
    { id: 'universiteStrasbourg', name: 'Université de Strasbourg', link: 'https://www.unistra.fr', ranking: 'QS World: #421', country: 'France' },
    { id: 'insaLyon', name: 'INSA Lyon (Institut National des Sciences Appliquées)', link: 'https://www.insa-lyon.fr', ranking: 'QS World: #455', country: 'France' },
    { id: 'universiteBordeaux', name: 'Université de Bordeaux', link: 'https://www.u-bordeaux.fr', ranking: 'QS World: #465', country: 'France' },
    { id: 'aixMarseilleUniversite', name: 'Aix-Marseille Université', link: 'https://www.univ-amu.fr', ranking: 'QS World: #481', country: 'France' },
    { id: 'universiteMontpellier', name: 'Université de Montpellier', link: 'https://www.umontpellier.fr', ranking: 'QS World: #511-520', country: 'France' },
    { id: 'hecParis', name: 'HEC Paris', link: 'https://www.hec.edu', ranking: 'QS World (Business): Top Tier', country: 'France' },
    { id: 'essecBusinessSchool', name: 'ESSEC Business School', link: 'https://www.essec.edu', ranking: 'QS World (Business): Top Tier' , country: 'France'},

    // --- Spain ---
    { id: 'ucm', name: 'Universidad Complutense de Madrid (UCM)', link: 'https://www.ucm.es', ranking: 'QS World: #164', country: 'Spain'},
    { id: 'ub', name: 'Universitat de Barcelona (UB)', link: 'https://www.ub.edu', ranking: 'QS World: #164', country: 'Spain'},
    { id: 'uab', name: 'Universitat Autònoma de Barcelona', link: 'https://www.uab.cat', ranking: 'QS World: #175', country: 'Spain' },
    { id: 'uam', name: 'Universidad Autónoma de Madrid', link: 'https://www.uam.es', ranking: 'QS World: #199', country: 'Spain' },
    { id: 'unav', name: 'University of Navarra', link: 'https://www.unav.edu', ranking: 'QS World: #280', country: 'Spain' },
    { id: 'upf', name: 'Universitat Pompeu Fabra (Barcelona)', link: 'https://www.upf.edu', ranking: 'QS World: #310', country: 'Spain' },
    { id: 'uc3m', name: 'Universidad Carlos III de Madrid (UC3M)', link: 'https://www.uc3m.es', ranking: 'QS World: #319', country: 'Spain' },
    { id: 'upc', name: 'Universitat Politècnica de Catalunya', link: 'https://www.upc.edu', ranking: 'QS World: #371', country: 'Spain' },
    { id: 'upv', name: 'Universitat Politècnica de València', link: 'https://www.upv.es', ranking: 'QS World: #436', country: 'Spain' },
    { id: 'ieUniversity', name: 'IE University', link: 'https://www.ie.edu', ranking: 'QS World: #438', country: 'Spain' },
    { id: 'ugr', name: 'Universidad de Granada', link: 'https://www.ugr.es', ranking: 'QS World: #478', country: 'Spain' },
    { id: 'us', name: 'Universidad de Sevilla', link: 'https://www.us.es', ranking: 'QS World: #525', country: 'Spain' },
    { id: 'uv', name: 'Universitat de València', link: 'https://www.uv.es', ranking: 'QS World: #571-580' , country: 'Spain'},
    { id: 'usal', name: 'Universidad de Salamanca', link: 'https://www.usal.es', ranking: 'QS World: #611-620', country: 'Spain' },

    // --- Italy ---
    { id: 'polimi', name: 'Politecnico di Milano', link: 'https://www.polimi.it', ranking: 'QS World: #111', country: 'Italy' },
    { id: 'sapienza', name: 'Sapienza University of Rome', link: 'https://www.uniroma1.it', ranking: 'QS World: #132', country: 'Italy' },
    { id: 'unibo', name: 'Alma Mater Studiorum - University of Bologna', link: 'https://www.unibo.it', ranking: 'QS World: #154', country: 'Italy' },
    { id: 'unipd', name: 'Università di Padova', link: 'https://www.unipd.it', ranking: 'QS World: #219', country: 'Italy' },
    { id: 'polito', name: 'Politecnico di Torino', link: 'https://www.polito.it', ranking: 'QS World: #252', country: 'Italy' },
    { id: 'unimi', name: 'University of Milan', link: 'https://www.unimi.it', ranking: 'QS World: #276', country: 'Italy' },
    { id: 'unina', name: 'University of Naples - Federico II', link: 'https://www.unina.it', ranking: 'QS World: #335', country: 'Italy' },
    { id: 'unipi', name: 'University of Pisa', link: 'https://www.unipi.it', ranking: 'QS World: #335', country: 'Italy' },
    { id: 'unifi', name: 'University of Florence', link: 'https://www.unifi.it', ranking: 'QS World: #348', country: 'Italy' },
    { id: 'unito', name: 'University of Turin', link: 'https://www.unito.it', ranking: 'QS World: #364', country: 'Italy' },
    { id: 'unitn', name: 'University of Trento', link: 'https://www.unitn.it', ranking: 'QS World: #429', country: 'Italy' },
    { id: 'unipv', name: 'University of Pavia', link: 'https://www.unipv.it', ranking: 'QS World: #460', country: 'Italy' },

    // --- Netherlands (Holland) ---
    { id: 'tuDelft', name: 'Delft University of Technology', link: 'https://www.tudelft.nl', ranking: 'QS World: #47',country: 'Netherlands' },
    { id: 'uva', name: 'University of Amsterdam', link: 'https://www.uva.nl', ranking: 'QS World: #53',country: 'Netherlands' },
    { id: 'uu', name: 'Utrecht University', link: 'https://www.uu.nl', ranking: 'QS World: #107',country: 'Netherlands' },
    { id: 'wur', name: 'Wageningen University & Research', link: 'https://www.wur.nl', ranking: 'QS World: #124',country: 'Netherlands' },
    { id: 'leiden', name: 'Leiden University', link: 'https://www.universiteitleiden.nl', ranking: 'QS World: #126',country: 'Netherlands' },
    { id: 'tuEindhoven', name: 'Eindhoven University of Technology', link: 'https://www.tue.nl', ranking: 'QS World: #127',country: 'Netherlands' },
    { id: 'rug', name: 'University of Groningen', link: 'https://www.rug.nl', ranking: 'QS World: #139',country: 'Netherlands' },
    { id: 'vuAmsterdam', name: 'Vrije Universiteit Amsterdam', link: 'https://vu.nl', ranking: 'QS World: #207',country: 'Netherlands' },
    { id: 'erasmus', name: 'Erasmus University Rotterdam', link: 'https://www.eur.nl', ranking: 'QS World: #208',country: 'Netherlands' },
    { id: 'utwente', name: 'University of Twente', link: 'https://www.utwente.nl', ranking: 'QS World: #210',country: 'Netherlands' },
    { id: 'maastricht', name: 'Maastricht University', link: 'https://www.maastrichtuniversity.nl', ranking: 'QS World: #256',country: 'Netherlands' },

    // --- Switzerland ---
    { id: 'ethZurich', name: 'ETH Zurich', link: 'https://ethz.ch', ranking: 'QS World: #7', country: 'Switzerland' },
    { id: 'epfl', name: 'EPFL (Swiss Federal Institute of Technology Lausanne)', link: 'https://www.epfl.ch', ranking: 'QS World: #36', country: 'Switzerland'  },
    { id: 'uzh', name: 'University of Zurich', link: 'https://www.uzh.ch', ranking: 'QS World: #91', country: 'Switzerland'  },
    { id: 'unige', name: 'University of Geneva', link: 'https://www.unige.ch', ranking: 'QS World: #128', country: 'Switzerland'  },
    { id: 'unibe', name: 'University of Bern', link: 'https://www.unibe.ch', ranking: 'QS World: #139', country: 'Switzerland'  },
    { id: 'unil', name: 'University of Lausanne', link: 'https://www.unil.ch', ranking: 'QS World: #221', country: 'Switzerland'  },
    { id: 'unibas', name: 'University of Basel', link: 'https://www.unibas.ch', ranking: 'QS World: #223', country: 'Switzerland'  },
    { id: 'unisg', name: 'University of St.Gallen (HSG)', link: 'https://www.unisg.ch', ranking: 'QS World: #436', country: 'Switzerland'  },
    { id: 'unifr', name: 'University of Fribourg', link: 'https://www.unifr.ch', ranking: 'QS World: #571-580', country: 'Switzerland'  },
];




const detailedEuropeScholarships = [
  {
    "Scholarship Name": "Eiffel Excellence Scholarship Program",
    "Host Country and University": "France, at various French higher education institutions.",
    "University Rankings": {
        "Note": "Not applicable (multiple institutions). The scholarship is tenable at top French universities like PSL University (QS 2025: 24th) and Institut Polytechnique de Paris (QS 2025: 59th)."
    },
    "Website": "https://www.campusfrance.org",
    "Level of Study": "Postgraduate (Master's and PhD)",
    "Eligibility Criteria": {
      "Academic Requirements": "Open to candidates with an outstanding academic record. Applications are submitted by French higher education institutions, not by the students themselves. [1, 2]",
      "Standardized Test Scores": "Language proficiency requirements are determined by the host institution and the program of study. [1]",
      "Field of Study": "Master's level: Science and Technology, Humanities and Social Sciences. PhD level: Science and Technology, and Life Sciences. [1]",
      "Other": "Open to all international students. Candidates with dual nationality, one of which is French, are not eligible. [1]"
    },
    "Application Deadline": "The call for applications usually opens in October and closes in early January. Institutions have their own internal deadlines. [1]",
    "Value/Inclusions": "For Master's students, a monthly allowance of €1,181. For PhD students, a monthly allowance of €1,700. The scholarship also covers international return travel, health insurance, and cultural activities. It does not cover tuition fees. [1]",
    "Application Process": "Students must first gain admission to a Master's or PhD program at a French university. The university then decides whether to nominate the student for the Eiffel Scholarship. [1]",
    "Required Documents": {
      "All documents required for university admission": "The university uses these for the nomination.",
      "CV or Resume": "Required. [1]",
      "Academic Transcripts": "Required. [1]",
      "Statement of Purpose (SOP)": "Often required by the university for admission.",
      "Letters of Recommendation (LORs)": "Often required by the university for admission."
    },
    "How old the scholarship is": "The program was established by the French Ministry for Europe and Foreign Affairs in 1999. [2]",
    "Age limit": "Up to 25 years old for Master's level and up to 30 years old for PhD level at the time of the application campaign. [1]",
    "Establishment date of the University": "Not applicable (multiple institutions)."
  },
  {
    "Scholarship Name": "Swiss Government Excellence Scholarships for Foreign Scholars and Artists",
    "Host Country and University": "Switzerland, at all Swiss cantonal universities, universities of applied sciences, and the two federal institutes of technology. [3]",
    "University Rankings": {
        "Note": "Not applicable (multiple institutions). Key participating universities include ETH Zurich (QS 2025: 7th) and EPFL (QS 2025: 26th)."
    },
    "Website": "https://www.sbfi.admin.ch",
    "Level of Study": "Postgraduate (PhD, Postdoctoral, Research Fellowships) and Fine Arts (Master's). [3]",
    "Eligibility Criteria": {
      "Academic Requirements": "A Master's degree or equivalent for PhD applicants. A PhD degree for postdoctoral applicants. Must have a high level of academic achievement. [3]",
      "Standardized Test Scores": "Language proficiency depends on the chosen study program (German, French, Italian, or English).",
      "Field of Study": "All academic fields are available for research, PhD, and postdoctoral scholarships. Arts scholarships are limited to students from countries with which Switzerland has a specific agreement. [3]",
      "Other": "Open to students from over 180 countries. A research proposal and a letter of acceptance from a host professor are crucial. [3]"
    },
    "Application Deadline": "Varies by country, but typically falls between September and December. Applications are submitted to the Swiss Embassy in the applicant's home country. [3]",
    "Value/Inclusions": "A monthly stipend (CHF 1,920 for research and arts Master's; CHF 3,500 for postdoctoral), exemption from tuition fees, mandatory Swiss health insurance, a one-time lump sum for a flight ticket, and a special lodging allowance. [4]",
    "Application Process": "Obtain the application package from the Swiss Embassy in your home country. Find a host professor at a Swiss university and get a letter of acceptance. Submit the completed application form and required documents to the Swiss Embassy. [3]",
    "Required Documents": {
      "Application Form": "Official FCS application form. [3]",
      "CV or Resume": "With a list of academic publications. [3]",
      "Motivation Letter": "A comprehensive letter of motivation. [3]",
      "Research Proposal": "A detailed research proposal is required for PhD and research tracks. [3]",
      "Letters of Recommendation (LORs)": "Two confidential letters of recommendation from professors. [3]",
      "Letter of Acceptance": "A letter from an academic host professor at the chosen Swiss university is required. [3]"
    },
    "How old the scholarship is": "This is a long-standing program offered annually by the Swiss Confederation. [4]",
    "Age limit": "No specific age limit, but PhD degree should not be older than three years for postdoc applicants. [3]",
    "Establishment date of the University": "Not applicable (multiple institutions)."
  },
  {
    "Scholarship Name": "NL Scholarship (formerly Holland Scholarship)",
    "Host Country and University": "Netherlands, at various Dutch research universities and universities of applied sciences.",
    "University Rankings": {
        "Note": "Not applicable (multiple institutions). Key participating universities include TU Delft (QS 2025: 49th) and University of Amsterdam (QS 2025: 55th)."
    },
    "Website": "https://www.studyinholland.nl",
    "Level of Study": "Undergraduate (Bachelor's) and Postgraduate (Master's)",
    "Eligibility Criteria": {
      "Academic Requirements": "Must meet the specific admission requirements of the chosen Dutch institution. [5]",
      "Standardized Test Scores": "English proficiency (IELTS/TOEFL) is required as per the program's standards.",
      "Field of Study": "Varies by institution. Most fields of study are covered.",
      "Other": "For non-EEA international students who have not previously studied in the Netherlands. [5]"
    },
    "Application Deadline": "Typically February 1 or May 1. Students must check the specific deadline of their chosen institution. [5]",
    "Value/Inclusions": "A one-time amount of €5,000 in the first year of studies. This is not a full tuition fee waiver but a contribution towards study costs. [5]",
    "Application Process": "Apply for admission to a Bachelor's or Master's program at one of the participating Dutch universities. Concurrently, apply for the NL Scholarship directly at the institution. [5]",
    "Required Documents": {
      "All documents required for university admission": "Required for the main application.",
      "Motivation Letter": "Often required for the scholarship application, detailing why you should be selected.",
      "CV or Resume": "May be required by the institution."
    },
    "How old the scholarship is": "Established to promote the Netherlands as a study destination.",
    "Age limit": "No specific age limit.",
    "Establishment date of the University": "Not applicable (multiple institutions)."
  },
  {
    "Scholarship Name": "Italian Government Scholarship for Foreign Students",
    "Host Country and University": "Italy, at various Italian higher education institutions.",
    "University Rankings": {
        "Note": "Not applicable (multiple institutions). Key participating universities include Politecnico di Milano (QS 2025: 111th) and University of Bologna (QS 2025: 133rd)."
    },
    "Website": "https://studyinitaly.esteri.it",
    "Level of Study": "Postgraduate (Master's), PhD, and Research projects.",
    "Eligibility Criteria": {
      "Academic Requirements": "Requires a Bachelor's degree for Master's programs and a Master's degree for PhD programs. [7]",
      "Standardized Test Scores": "For English-taught courses, a B2 level of English (IELTS/TOEFL) is required. For Italian-taught courses, a B2 level of Italian is needed. [7]",
      "Field of Study": "A wide range of programs offered at public Italian institutions.",
      "Other": "Open to students from a specific list of eligible countries. [7]"
    },
    "Application Deadline": "The call for applications is usually published in the spring, with a deadline typically in June. [7]",
    "Value/Inclusions": "Exemption from tuition fees, a monthly stipend of €900, and health and medical insurance for the duration of the grant. [7]",
    "Application Process": "Apply online through the 'Study in Italy' portal. You do not need a prior letter of acceptance from the university to apply for the scholarship. [7]",
    "Required Documents": {
      "Application Form": "Online application.",
      "Academic Transcripts": "Required.",
      "CV or Resume": "Required.",
      "Motivation Letter": "Required.",
      "Proof of Language Proficiency": "Required for either English or Italian.",
      "Letters of Recommendation (LORs)": "May be required."
    },
    "How old the scholarship is": "An annual scholarship program funded by the Ministry of Foreign Affairs and International Cooperation (MAECI). [7]",
    "Age limit": "Applicants for Master's Degree/Higher Education in Arts, Music, and Dance (AFAM) Programmes/ Italian Language and Culture advanced Courses should not be over 28 years old. For PhD Programmes, applicants should not be over 30. [7]",
    "Establishment date of the University": "Not applicable (multiple institutions)."
  },
  {
    "Scholarship Name": "Sciences Po Emile Boutmy Scholarship",
    "Host Country and University": "France, Sciences Po.",
    "University Rankings": {
        "QS World University Rankings (2025)": "350th",
        "QS World University Rankings by Subject (2024) - Politics & International Studies": "2nd"
    },
    "Website": "https://www.sciencespo.fr",
    "Level of Study": "Undergraduate and Postgraduate (Master's)",
    "Eligibility Criteria": {
      "Academic Requirements": "Awarded to students with excellent academic credentials and a profile that matches the program. [6]",
      "Standardized Test Scores": "Must meet the English or French language requirements for the chosen program.",
      "Field of Study": "All programs offered at Sciences Po.",
      "Other": "For non-European Union students who are first-time applicants. [6]"
    },
    "Application Deadline": "Undergraduate deadline is typically in late February, and the Master's deadline is in late November. [6]",
    "Value/Inclusions": "Can range from a partial tuition grant of a few thousand euros to a full tuition waiver covering the entire duration of the program. For example, it can be €14,210 per year for the three years of the Bachelor's program or €13,000 per year for the two years of the Master's. [6]",
    "Application Process": "Indicate your interest in the Emile Boutmy scholarship in the 'Financial Information' section of your Sciences Po application. There is no separate application form. [6]",
    "Required Documents": {
      "Proof of income and financial situation": "Documents detailing family income are required. [6]",
      "All documents for Sciences Po admission": "The application is judged holistically."
    },
    "How old the scholarship is": "Named after the founder of Sciences Po to attract top international students. [6]",
    "Age limit": "No specific age limit.",
    "Establishment date of the University": "1872"
  },
  {
    "Scholarship Name": "ETH Zurich Excellence Scholarship & Opportunity Programme (ESOP)",
    "Host Country and University": "Switzerland, ETH Zurich.",
    "University Rankings": {
        "QS World University Rankings (2025)": "7th",
        "THE World University Rankings (2024)": "11th"
    },
    "Website": "https://ethz.ch",
    "Level of Study": "Postgraduate (Master's)",
    "Eligibility Criteria": {
      "Academic Requirements": "Must have graduated with a Bachelor's degree from a university with excellent results (top 10% of your programme). [8]",
      "Standardized Test Scores": "Must meet the English language requirements for the Master's program. GRE may be required.",
      "Field of Study": "All Master's degree programs offered at ETH Zurich.",
      "Other": "Open to national and international students. A pre-proposal for your Master's thesis is a key part of the application. [8]"
    },
    "Application Deadline": "The application window is from November 1 to December 15, alongside the Master's program application. [8]",
    "Value/Inclusions": "Covers the full study and living costs during the Master's degree. It includes a grant of CHF 12,000 per semester and a tuition fee waiver. [8]",
    "Application Process": "Apply for a Master's program at ETH Zurich and complete the separate application for the ESOP scholarship through the eApply portal. [8]",
    "Required Documents": {
      "ESOP Application Form": "Required via the eApply portal. [8]",
      "Pre-proposal for Master's Thesis": "A detailed proposal is a mandatory and critical part of the application. [8]",
      "Letters of Recommendation (LORs)": "Two reference letters are required. [8]",
      "Academic Transcripts": "Required."
    },
    "How old the scholarship is": "ETH Zurich's flagship scholarship for Master's students.",
    "Age limit": "No specific age limit.",
    "Establishment date of the University": "1855"
  },
  {
    "Scholarship Name": "Bocconi University Merit and International Awards",
    "Host Country and University": "Italy, Bocconi University.",
    "University Rankings": {
        "QS World University Rankings (2025)": "154th",
        "QS World University Rankings by Subject (2024) - Business & Management Studies": "7th"
    },
    "Website": "https://www.unibocconi.eu",
    "Level of Study": "Undergraduate and Postgraduate (Master's)",
    "Eligibility Criteria": {
      "Academic Requirements": "Awarded based on outstanding academic achievement. The primary factor is the candidate's performance in the admission test (Bocconi test, SAT, or ACT) and/or previous GPA. [9]",
      "Standardized Test Scores": "A strong performance in the SAT/ACT or the Bocconi online test is crucial for consideration. [9]",
      "Field of Study": "All Bachelor of Science and Master of Science programs offered at Bocconi.",
      "Other": "Open to both Italian and international applicants. [9]"
    },
    "Application Deadline": "No separate application is needed. You are automatically considered when you apply for admission to Bocconi by the specified deadlines (several rounds from January to April). [9]",
    "Value/Inclusions": "The Merit Award includes a full tuition and fees waiver, worth up to approximately €14,000 per year. The Bocconi International Award offers a 50% tuition reduction. [9]",
    "Application Process": "Complete and submit the application for admission to your chosen program at Bocconi University. The Admissions Committee will evaluate all candidates and grant the awards to the most meritorious students. [9]",
    "Required Documents": {
      "All documents for Bocconi admission": "Used for scholarship assessment.",
      "Standardized Test Scores (SAT/ACT)": "A key component of the evaluation."
    },
    "How old the scholarship is": "Bocconi has a long tradition of providing merit-based aid to exceptional students.",
    "Age limit": "No specific age limit.",
    "Establishment date of the University": "1902"
  },
  {
    "Scholarship Name": "University of Amsterdam Merit Scholarship (AMS)",
    "Host Country and University": "Netherlands, University of Amsterdam.",
    "University Rankings": {
        "QS World University Rankings (2025)": "55th",
        "THE World University Rankings (2024)": "61st"
    },
    "Website": "https://www.uva.nl",
    "Level of Study": "Postgraduate (Master's)",
    "Eligibility Criteria": {
      "Academic Requirements": "Applicants must have graduated in the top 10% of their class. [10]",
      "Standardized Test Scores": "Must meet the English proficiency requirements (IELTS/TOEFL).",
      "Field of Study": "Varies by faculty. Many Master's programs participate, but not all. Check the faculty's specific page. [10]",
      "Other": "For outstanding students from outside the European Economic Area (EEA). [10]"
    },
    "Application Deadline": "Varies by faculty, but often in January or early March for programs starting in September. [10]",
    "Value/Inclusions": "A partial tuition fee waiver. The scholarship amount can range from €2,000 to €25,000, depending on the faculty and the tuition fee of the program. [10]",
    "Application Process": "Submit an application for a Master's programme. The process for the scholarship application varies by faculty; some require a separate application, while for others, you are automatically considered. [10]",
    "Required Documents": {
      "All documents for Master's admission": "Required.",
      "Motivation Letter": "Often required, explaining your academic excellence and reasons for deserving the scholarship. [10]",
      "Letter of Recommendation (LOR)": "A letter from a dean, teacher, or academic supervisor. [10]"
    },
    "How old the scholarship is": "A well-established merit scholarship at the university.",
    "Age limit": "No specific age limit.",
    "Establishment date of the University": "1632"
  },
  {
    "Scholarship Name": "University of Geneva Excellence Master Fellowships",
    "Host Country and University": "Switzerland, University of Geneva.",
    "University Rankings": {
        "QS World University Rankings (2025)": "102nd",
        "THE World University Rankings (2024)": "131st"
    },
    "Website": "https://www.unige.ch",
    "Level of Study": "Postgraduate (Master's)",
    "Eligibility Criteria": {
      "Academic Requirements": "Must have an excellent academic record and be among the top 10% of your Bachelor's program. [11]",
      "Standardized Test Scores": "Must meet the language requirements of the chosen Master's program (French or English).",
      "Field of Study": "All Master's programs offered by the Faculty of Science. [11]",
      "Other": "Open to students of any university. You must have successfully completed your Bachelor's degree or be close to completing it. [11]"
    },
    "Application Deadline": "The deadline is typically February 28th each year. [11]",
    "Value/Inclusions": "A grant amounting to CHF 10,000 to CHF 15,000 per year. It is awarded for one year and extended for the regular duration of the chosen Master’s programme if the applicant is academically successful. [11]",
    "Application Process": "Apply online through the University of Geneva's scholarship portal. This is a separate application from your Master's program admission. [11]",
    "Required Documents": {
      "CV or Resume": "Required. [11]",
      "Academic Transcripts": "Transcript of exams passed during the bachelor education. [11]",
      "Motivation Letter": "A 2-page essay describing your academic achievements and motivation. [11]",
      "Letters of Recommendation (LORs)": "Two letters of recommendation from former professors. [11]",
      "Passport copy": "Required."
    },
    "How old the scholarship is": "An established fellowship program to attract talented science students.",
    "Age limit": "No specific age limit.",
    "Establishment date of the University": "1559"
  },
  {
    "Scholarship Name": "Spanish Government Scholarships",
    "Host Country and University": "Spain, various Spanish institutions.",
    "University Rankings": {
        "Note": "Not applicable (multiple institutions)."
    },
    "Website": "https://www.aecid.gob.es",
    "Level of Study": "Postgraduate (Master's), Research",
    "Eligibility Criteria": {
      "Academic Requirements": "Varies depending on the specific scholarship program. Generally requires a Bachelor's degree with a good academic record. [12]",
      "Standardized Test Scores": "Proficiency in Spanish (DELE) is often required, although some programs may be offered in English. [12]",
      "Field of Study": "A wide variety of fields, often with a focus on development cooperation, arts, and culture. [12]",
      "Other": "Often targeted at citizens of specific countries, particularly from Latin America, Africa, and Asia. [12]"
    },
    "Application Deadline": "Varies significantly by program. The main AECID scholarship call is typically announced annually.",
    "Value/Inclusions": "Can range from a monthly stipend to full coverage of tuition, travel, and insurance. The value depends on the specific award. [12]",
    "Application Process": "Applications are usually submitted online through the portal of the Spanish Agency for International Development Cooperation (AECID). [12]",
    "Required Documents": {
      "Application Form": "Official online form.",
      "CV or Resume": "Required.",
      "Academic Transcripts": "Required.",
      "Motivation Letter": "A statement of purpose is typically necessary.",
      "Proof of Language Proficiency": "Required for Spanish or English."
    },
    "How old the scholarship is": "This is an annual government-funded program.",
    "Age limit": "Varies by program.",
    "Establishment date of the University": "Not applicable (multiple institutions)."
  },
  {
    "Scholarship Name": "HEC Paris MBA Scholarship for Excellence",
    "Host Country and University": "France, HEC Paris.",
    "University Rankings": {
        "QS World University Rankings (2025)": "46th",
        "Financial Times Global MBA Ranking (2024)": "12th"
    },
    "Website": "https://www.hec.edu",
    "Level of Study": "Postgraduate (MBA)",
    "Eligibility Criteria": {
      "Academic Requirements": "Must be admitted to the HEC Paris MBA program. Awarded to exceptional candidates who demonstrate academic excellence, strong leadership skills, and a clear career progression. [13]",
      "Standardized Test Scores": "A high GMAT/GRE score is a key factor for consideration. [13]",
      "Field of Study": "Master of Business Administration.",
      "Other": "Open to all international students. Candidates are assessed holistically based on their application profile."
    },
    "Application Deadline": "You are automatically considered for this scholarship upon admission. MBA application deadlines are in multiple rounds throughout the year.",
    "Value/Inclusions": "A partial fee waiver. The amount varies and is determined by the admissions committee based on the strength of the application.",
    "Application Process": "There is no separate application. All admitted MBA students are automatically considered for this scholarship. [13]",
    "Required Documents": {
      "All documents for HEC Paris MBA admission": "Including essays, GMAT/GRE scores, LORs, and interview performance are used for evaluation."
    },
    "How old the scholarship is": "A long-standing merit scholarship at one of the world's top business schools.",
    "Age limit": "No specific age limit.",
    "Establishment date of the University": "1881"
  },
  {
    "Scholarship Name": "University of Twente Scholarship (UTS)",
    "Host Country and University": "Netherlands, University of Twente.",
    "University Rankings": {
        "QS World University Rankings (2025)": "213rd",
        "THE World University Rankings (2024)": "184th"
    },
    "Website": "https://www.utwente.nl",
    "Level of Study": "Postgraduate (Master's)",
    "Eligibility Criteria": {
      "Academic Requirements": "Must have been (provisionally) admitted to a qualifying UT Master's programme. Must have a student number. [14]",
      "Standardized Test Scores": "Must meet the English proficiency requirements (IELTS 6.5 or TOEFL iBT 90). [14]",
      "Field of Study": "Most Master's programmes offered at the University of Twente.",
      "Other": "For excellent students from both EU/EEA and non-EU/EEA countries. [14]"
    },
    "Application Deadline": "There are two application rounds, with deadlines typically on February 1 and May 1. [14]",
    "Value/Inclusions": "A partial tuition waiver, with the scholarship amount ranging from €3,000 to €22,000 for one year. [14]",
    "Application Process": "Apply for a Master's programme. Once you have a conditional admission letter, you can apply for the scholarship with your student number. [14]",
    "Required Documents": {
      "All documents for Master's admission": "Required to get the admission letter first.",
      "Scholarship Application": "A separate online application for the scholarship."
    },
    "How old the scholarship is": "An established scholarship to attract excellent students.",
    "Age limit": "No specific age limit.",
    "Establishment date of the University": "1961"
  },
  {
    "Scholarship Name": "ENS International Selection Scholarship",
    "Host Country and University": "France, École Normale Supérieure (ENS).",
    "University Rankings": {
        "QS World University Rankings (2025) - As part of PSL Research University": "24th",
        "THE World University Rankings (2024) - As part of PSL Research University": "40th"
    },
    "Website": "https://www.ens.psl.eu",
    "Level of Study": "Postgraduate (Master's)",
    "Eligibility Criteria": {
      "Academic Requirements": "Must have a strong undergraduate record in the relevant field. [15]",
      "Standardized Test Scores": "Proficiency in French is not mandatory but highly recommended. Proficiency in English is required.",
      "Field of Study": "Sciences (Mathematics, Physics, Chemistry, Biology, Geosciences, Computer Science) and Arts & Humanities (all disciplines). [15]",
      "Other": "For international students who have not lived in France for more than 10 months during the year of application. [15]"
    },
    "Application Deadline": "Deadlines are typically in December for Sciences and Arts & Humanities. [15]",
    "Value/Inclusions": "A monthly stipend of approximately €1,000 for 3 years, accommodation on the ENS campus, and access to the ENS diploma. [15]",
    "Application Process": "Apply online through the ENS portal. The selection process involves a written and oral examination for shortlisted candidates. [15]",
    "Required Documents": {
      "Application Form": "Online application.",
      "CV or Resume": "Required.",
      "Motivation Letter": "Required.",
      "Study Proposal": "A proposal of your intended studies at ENS. [15]",
      "Academic Transcripts": "Required.",
      "Letters of Recommendation (LORs)": "Two to four letters of recommendation. [15]"
    },
    "How old the scholarship is": "A highly prestigious and long-running scholarship to recruit top international students.",
    "Age limit": "Must be under 26 years old when applying. [15]",
    "Establishment date of the University": "1794"
  },
  {
    "Scholarship Name": "University of Bologna Study Grants for International Students (Unibo Action 1 & 2)",
    "Host Country and University": "Italy, University of Bologna.",
    "University Rankings": {
        "QS World University Rankings (2025)": "133rd",
        "THE World University Rankings (2024)": "155th"
    },
    "Website": "https://www.unibo.it",
    "Level of Study": "Undergraduate (Bachelor's) and Postgraduate (Master's)",
    "Eligibility Criteria": {
      "Academic Requirements": "Based on academic merit as demonstrated by performance on standardized tests (SAT for Bachelor's, GRE for Master's). [16]",
      "Standardized Test Scores": "A valid SAT, TOLC, or GRE test score is mandatory for consideration. [16]",
      "Field of Study": "All first-cycle (Bachelor's) and second-cycle (Master's) degree programs offered at the university. [16]",
      "Other": "Open to all international students who are not citizens of Italy. [16]"
    },
    "Application Deadline": "There are multiple application rounds, with deadlines typically in late spring. [16]",
    "Value/Inclusions": "Action 2 provides a full tuition fee waiver. Action 1 provides a study grant of €11,000 gross. [16]",
    "Application Process": "No separate application is required. Students are automatically considered for the grant based on the scores of their admission tests (SAT/GRE/TOLC) submitted during their program application. [16]",
    "Required Documents": {
      "All documents for university admission": "Used for assessment.",
      "SAT/GRE/TOLC scores": "The primary basis for the scholarship award."
    },
    "How old the scholarship is": "This is the university's main merit-based scholarship for international students.",
    "Age limit": "No specific age limit.",
    "Establishment date of the University": "1088"
  },
  {
    "Scholarship Name": "EPFL Excellence Fellowships",
    "Host Country and University": "Switzerland, École Polytechnique Fédérale de Lausanne (EPFL).",
    "University Rankings": {
        "QS World University Rankings (2025)": "26th",
        "THE World University Rankings (2024)": "33rd"
    },
    "Website": "https://www.epfl.ch",
    "Level of Study": "Postgraduate (Master's)",
    "Eligibility Criteria": {
      "Academic Requirements": "Must have achieved outstanding academic results during their undergraduate studies. [17]",
      "Standardized Test Scores": "Must meet the English proficiency requirements for the chosen Master's program.",
      "Field of Study": "All Master's programs offered at EPFL. [17]",
      "Other": "Open to all students, both Swiss and international. [17]"
    },
    "Application Deadline": "Applications can be submitted from early November to December 15th. [17]",
    "Value/Inclusions": "A grant of CHF 10,000 per semester, reservation of a room in a student residence, and a tuition fee waiver. [17]",
    "Application Process": "Students who wish to be considered must apply for an EPFL Master's program and check a box in their application form indicating their interest in the fellowship. [17]",
    "Required Documents": {
      "All documents for EPFL Master's admission": "Used for evaluation.",
      "Motivation Letter": "A specific motivation letter for the fellowship may be required.",
      "Letters of Recommendation (LORs)": "Three letters of recommendation are required for the main application."
    },
    "How old the scholarship is": "EPFL's flagship scholarship program for Master's students.",
    "Age limit": "No specific age limit.",
    "Establishment date of the University": "1853 (as a private school), 1969 (as a federal institute)"
  },
  {
    "Scholarship Name": "TU Delft Excellence Scholarships",
    "Host Country and University": "Netherlands, Delft University of Technology (TU Delft).",
    "University Rankings": {
        "QS World University Rankings (2025)": "49th",
        "THE World University Rankings (2024)": "48th"
    },
    "Website": "https://www.tudelft.nl",
    "Level of Study": "Postgraduate (Master's)",
    "Eligibility Criteria": {
      "Academic Requirements": "Must have a cumulative GPA of 80% or higher of the scale maximum in their Bachelor's degree from an internationally renowned university. [18]",
      "Standardized Test Scores": "Must meet the university's English language proficiency requirements.",
      "Field of Study": "All MSc programmes at TU Delft. [18]",
      "Other": "For excellent international applicants admitted to a TU Delft MSc programme. [18]"
    },
    "Application Deadline": "The deadline is typically February 1st for most scholarships. [18]",
    "Value/Inclusions": "Multiple scholarship types are available, such as the Justus & Louise van Effen scholarship, which provides a full tuition fee waiver and a contribution to living expenses. [18]",
    "Application Process": "Apply for a Master's program at TU Delft. Concurrently, complete the separate scholarship application form and upload it with your Master's application. [18]",
    "Required Documents": {
      "All documents for Master's admission": "Required.",
      "Scholarship Application Form": "A specific form must be completed.",
      "Motivation Letter": "A detailed essay (1,000-1,500 words) is required for the scholarship application. [18]"
    },
    "How old the scholarship is": "A key program to attract the world's best students to Delft.",
    "Age limit": "No specific age limit.",
    "Establishment date of the University": "1842"
  },
  {
    "Scholarship Name": "Orange Tulip Scholarship Programme",
    "Host Country and University": "Netherlands, at various Dutch higher education institutions.",
    "University Rankings": {
        "Note": "Not applicable (multiple institutions). Key participating universities include University of Twente (QS 2025: 213rd) and Tilburg University (QS 2025: 376th)."
    },
    "Website": "https://www.studyinholland.nl",
    "Level of Study": "Undergraduate (Bachelor's) and Postgraduate (Master's)",
    "Eligibility Criteria": {
      "Academic Requirements": "Must meet the specific academic requirements of the Dutch institution you are applying to. [19]",
      "Standardized Test Scores": "English proficiency (IELTS/TOEFL) is required.",
      "Field of Study": "Varies by participating institution and country.",
      "Other": "Specifically for talented students from certain non-EEA countries, such as India, Indonesia, South Africa, and others. The list of countries can change annually. [19]"
    },
    "Application Deadline": "Varies by country and institution, but typically ranges from February to May. Check the Nuffic Neso office website for your specific country. [19]",
    "Value/Inclusions": "A partial or full tuition fee waiver. The exact amount varies greatly per institution. It does not typically cover living costs. [19]",
    "Application Process": "First, apply for admission to a program at a participating Dutch university. Then, apply for the Orange Tulip Scholarship through the Nuffic Neso office in your country. [19]",
    "Required Documents": {
      "Proof of admission": "A (conditional) admission letter from the Dutch university.",
      "CV or Resume": "Required.",
      "Motivation Letter": "Required.",
      "Academic Transcripts": "Required.",
      "Letters of Recommendation (LORs)": "May be required."
    },
    "How old the scholarship is": "A well-known scholarship program managed by Nuffic Neso offices worldwide.",
    "Age limit": "Varies by country, typically between 18-35 years old. [19]",
    "Establishment date of the University": "Not applicable (multiple institutions)."
  },
  {
    "Scholarship Name": "University of Padua International Excellence Scholarship",
    "Host Country and University": "Italy, University of Padua.",
    "University Rankings": {
        "QS World University Rankings (2025)": "236th",
        "THE World University Rankings (2024)": "201-250th"
    },
    "Website": "https://www.unipd.it",
    "Level of Study": "Undergraduate (Bachelor's) and Postgraduate (Master's)",
    "Eligibility Criteria": {
      "Academic Requirements": "Awarded to highly talented prospective international students with an excellent academic background. [20]",
      "Standardized Test Scores": "Not the primary basis, but language proficiency for the chosen course is required.",
      "Field of Study": "All Bachelor's and Master's degree programs taught in English at the university. [20]",
      "Other": "For non-Italian citizens holding a non-Italian secondary school diploma or Bachelor's degree. [20]"
    },
    "Application Deadline": "Typically in early May for most programs. There may be an earlier deadline in February for some courses. [20]",
    "Value/Inclusions": "A full tuition fee waiver plus a gross amount of €8,000 per academic year. [20]",
    "Application Process": "No separate application is needed. You are automatically considered when you apply for admission to one of the eligible degree programs. [20]",
    "Required Documents": {
      "All documents for university admission": "Used for scholarship assessment, including CV, motivation letter, and transcripts."
    },
    "How old the scholarship is": "The university's flagship merit scholarship for international students.",
    "Age limit": "No specific age limit.",
    "Establishment date of the University": "1222"
  },
  {
    "Scholarship Name": "University of Lausanne (UNIL) Master’s Grants for Foreign Students",
    "Host Country and University": "Switzerland, University of Lausanne (UNIL).",
    "University Rankings": {
        "QS World University Rankings (2025)": "150th",
        "THE World University Rankings (2024)": "149th"
    },
    "Website": "https://www.unil.ch",
    "Level of Study": "Postgraduate (Master's)",
    "Eligibility Criteria": {
      "Academic Requirements": "Must have graduated from a foreign university with a degree considered equivalent to a Bachelor's at UNIL and have a very good academic record. [21]",
      "Standardized Test Scores": "A minimum B2 level in French or English depending on the program's language of instruction. [21]",
      "Field of Study": "All Master's programmes offered at UNIL, except for a few specific programs like the Master of Medicine. [21]",
      "Other": "For international students who have not previously been enrolled at UNIL. [21]"
    },
    "Application Deadline": "The deadline to apply is November 1st to start studies in the following academic year. [21]",
    "Value/Inclusions": "A fixed grant of CHF 1,600 per month for the complete duration of the Master's program. [21]",
    "Application Process": "Apply online through the UNIL admissions department portal. This is a separate application for the grant. [21]",
    "Required Documents": {
      "Application Form": "Official scholarship application form. [21]",
      "CV or Resume": "Required.",
      "Motivation Letter": "Required.",
      "Academic Transcripts": "Copy of the university degree and all transcripts.",
      "Letters of Recommendation (LORs)": "Two letters of recommendation from former professors. [21]"
    },
    "How old the scholarship is": "An established grant to promote access to Master's education for international students.",
    "Age limit": "No specific age limit.",
    "Establishment date of the University": "1537"
  },
  {
    "Scholarship Name": "INSEAD MBA Scholarships",
    "Host Country and University": "France (and Singapore), INSEAD Business School.",
    "University Rankings": {
        "Financial Times Global MBA Ranking (2024)": "2nd",
        "QS Global MBA Rankings (2024)": "2nd"
    },
    "Website": "https://www.insead.edu",
    "Level of Study": "Postgraduate (MBA)",
    "Eligibility Criteria": {
      "Academic Requirements": "Must be admitted to the INSEAD MBA program. Scholarships are awarded based on various criteria: merit, nationality, gender, professional background, leadership potential, or financial need.",
      "Standardized Test Scores": "A competitive GMAT/GRE score is required for admission.",
      "Field of Study": "Master of Business Administration.",
      "Other": "A wide variety of scholarships are available, some for specific nationalities (e.g., Indian, French) or profiles (e.g., women, social entrepreneurs)."
    },
    "Application Deadline": "Varies by scholarship and admission round. There are multiple rounds throughout the year.",
    "Value/Inclusions": "Varies significantly, from €10,000 to over €40,000 as a partial tuition fee waiver.",
    "Application Process": "After submitting your MBA application and paying the application fee, you gain access to the scholarship application portal where you can apply for multiple scholarships by submitting specific essays.",
    "Required Documents": {
      "Scholarship Essays": "Specific essays are required for each scholarship you apply for.",
      "Financial Profile": "A detailed financial profile is required for need-based scholarships.",
      "All documents for INSEAD MBA admission": "Used for evaluation."
    },
    "How old the scholarship is": "INSEAD has a very extensive and long-standing scholarship portfolio.",
    "Age limit": "No specific age limit.",
    "Establishment date of the University": "1957"
  },
  {
    "Scholarship Name": "Politecnico di Milano Merit-Based Scholarships",
    "Host Country and University": "Italy, Politecnico di Milano.",
    "University Rankings": {
        "QS World University Rankings (2025)": "111th",
        "QS World University Rankings by Subject (2024) - Engineering & Technology": "18th"
    },
    "Website": "https://www.polimi.it",
    "Level of Study": "Postgraduate (Master's)",
    "Eligibility Criteria": {
      "Academic Requirements": "Awarded based on the evaluation of the candidate's previous university education and its alignment with the Master's program requirements. A high GPA is essential. [22]",
      "Standardized Test Scores": "Language proficiency for the chosen program (English or Italian) is required. GRE is not mandatory but can be a plus.",
      "Field of Study": "All Master of Science programs in Engineering, Architecture, and Design. [22]",
      "Other": "For talented international students admitted to a Master of Science program. [22]"
    },
    "Application Deadline": "No separate application required. You are automatically considered with your program application. Deadlines are typically in November and March for different intakes. [22]",
    "Value/Inclusions": "Three tiers of scholarships: Platinum (€10,000 gross per year + tuition waiver), Gold (€5,000 per year + tuition waiver), and Silver (full tuition fee waiver). [22]",
    "Application Process": "Apply online for a Master's program at Politecnico di Milano. The scholarship committee evaluates all eligible candidates and the scholarship is awarded along with the admission offer. [22]",
    "Required Documents": {
      "All documents for Master's admission": "Including academic transcripts, CV, motivation letter, and portfolio (for design/architecture). [22]"
    },
    "How old the scholarship is": "A well-established, multi-tiered scholarship program at Italy's top technical university.",
    "Age limit": "No specific age limit.",
    "Establishment date of the University": "1863"
  },
  {
    "Scholarship Name": "Leiden University Excellence Scholarship (LexS)",
    "Host Country and University": "Netherlands, Leiden University.",
    "University Rankings": {
        "QS World University Rankings (2025)": "141st",
        "THE World University Rankings (2024)": "77th"
    },
    "Website": "https://www.universiteitleiden.nl",
    "Level of Study": "Postgraduate (Master's)",
    "Eligibility Criteria": {
      "Academic Requirements": "Must have achieved excellent academic results in your previous studies, which must be relevant to the programme for which you are applying. [23]",
      "Standardized Test Scores": "Must meet the university's English language proficiency requirements.",
      "Field of Study": "All Master's programmes at Leiden University (with a few exceptions). [23]",
      "Other": "For outstanding non-EEA/non-EFTA students. [23]"
    },
    "Application Deadline": "Deadlines are typically February 1st for programs starting in September. [23]",
    "Value/Inclusions": "Three levels of awards: €10,000 of the tuition fee, €15,000 of the tuition fee, or a full tuition fee waiver. [23]",
    "Application Process": "First, apply online for admission to a Master's programme at Leiden University. Then, indicate your interest in the LExS scholarship in the scholarship section of the online application. [23]",
    "Required Documents": {
      "Motivation Letter for LExS": "A specific letter of motivation (max. 500 words) for the scholarship must be uploaded in the online application. [23]",
      "All documents for university admission": "Required for the main application."
    },
    "How old the scholarship is": "A long-standing excellence scholarship to attract top talent from outside Europe.",
    "Age limit": "No specific age limit.",
    "Establishment date of the University": "1575"
  },
  {
    "Scholarship Name": "Utrecht University Excellence Scholarship",
    "Host Country and University": "Netherlands, Utrecht University.",
    "University Rankings": {
        "QS World University Rankings (2025)": "105th",
        "THE World University Rankings (2024)": "66th"
    },
    "Website": "https://www.uu.nl",
    "Level of Study": "Postgraduate (Master's)",
    "Eligibility Criteria": {
      "Academic Requirements": "Must have graduated in the top 10% of your graduating class from your undergraduate program. [24]",
      "Standardized Test Scores": "Must meet the English language requirements for the chosen program.",
      "Field of Study": "A wide range of Master's programs.",
      "Other": "For highly talented prospective non-EEA students. [24]"
    },
    "Application Deadline": "The deadline to apply is typically January 31st. [24]",
    "Value/Inclusions": "The scholarship can be awarded as either a full tuition fee waiver or a tuition fee waiver plus an additional €11,000 for living expenses. [24]",
    "Application Process": "After applying for an eligible Master's program, you can proceed with the scholarship application via the Osiris online application portal. [24]",
    "Required Documents": {
      "Proof of Ranking": "An official document from your university proving you are in the top 10% of your graduating class (e.g., a statement, transcript, or reference letter). [24]",
      "Letter of Recommendation (LOR)": "Required.",
      "All documents for Master's admission": "Required."
    },
    "How old the scholarship is": "Utrecht's premier merit scholarship for international students.",
    "Age limit": "No specific age limit.",
    "Establishment date of the University": "1636"
  },
  {
    "Scholarship Name": "The Graduate Institute of Geneva Scholarships",
    "Host Country and University": "Switzerland, The Graduate Institute, Geneva (IHEID).",
    "University Rankings": {
        "QS World University Rankings by Subject (2024) - Politics & International Studies": "22nd",
        "QS World University Rankings by Subject (2024) - Development Studies": "15th"
    },
    "Website": "https://www.graduateinstitute.ch",
    "Level of Study": "Postgraduate (Master's and PhD)",
    "Eligibility Criteria": {
      "Academic Requirements": "Must be admitted to a Master's or PhD program at the Institute. Scholarships are awarded based on a combination of academic merit and demonstrated financial need.",
      "Standardized Test Scores": "Must meet the language requirements of the program (English or French).",
      "Field of Study": "International and Development Studies, International Affairs, International Law, International Economics, Anthropology and Sociology, International History and Politics.",
      "Other": "Open to all nationalities. A detailed financial aid application is required."
    },
    "Application Deadline": "The scholarship application is integrated into the program application, which typically has a mid-November deadline.",
    "Value/Inclusions": "Can range from a partial tuition waiver to a full scholarship of CHF 20,000 per year, which covers tuition and contributes to living costs. Some special scholarships may also include housing.",
    "Application Process": "Complete the financial aid request section as part of your online application for admission. You must provide detailed information about your financial circumstances.",
    "Required Documents": {
      "Financial Aid Application": "An integrated part of the main application form, requiring details on income, assets, and expenses.",
      "Supporting Financial Documents": "You may be asked to provide documents to justify your financial situation."
    },
    "How old the scholarship is": "Financial aid has been a core part of the Institute's mission for many years.",
    "Age limit": "No specific age limit.",
    "Establishment date of the University": "1927"
  }
];

const allSimpleEuropeUniversities = [
    ...universities_part_1, ...universities_part_2
];

// Second, create a "transformer" function that converts a simple university into a full scholarship object.
const transformSimpleToFull = (simpleUniversity) => {
    return {
        "Scholarship Name": `${simpleUniversity.name} - General Merit Scholarship`,
        "Host Country and University": `Europe, ${simpleUniversity.name}`,
        "University Rankings": { "Ranking": simpleUniversity.ranking || "Not Available" },
        "Website": simpleUniversity.link,
        "Level of Study": "Undergraduate and Postgraduate",
        "Eligibility Criteria": { "General": "Based on strong academic performance. Considered upon admission." },
        "Application Deadline": "Varies. Check university website.",
        "Value/Inclusions": "Varies by department and profile. Check website for details.",
        "Application Process": "Often automatic with admission application. Verify with the university.",
        "Required Documents": { "Standard university application documents required.": true },
        "Establishment date of the University": "Not specified in this entry"
    };
};

// Third, apply the transformer to every simple university to create a new list of full scholarships.
const transformedScholarships = allSimpleEuropeUniversities.map(transformSimpleToFull);

// Finally, create the single 'allScholarships' variable by combining the two lists.
// This is the ONLY variable that the rest of the application will see.
const allScholarships = [...detailedEuropeScholarships, ...transformedScholarships];

console.log(`Europe data processed. Total scholarships: ${allScholarships.length}`);
// Add this one line to the very end of your data_usa.js file
module.exports = { allScholarships };





















