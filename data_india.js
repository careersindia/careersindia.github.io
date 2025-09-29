// =================================================================
// == THIS IS THE COMPLETE TEMPLATE FOR data_india.js ==
// =================================================================

// PART 1: Paste your main list of Indian scholarships here.
// Find 'const indianScholarshipsData = [...]' in your old file and paste
// the objects from inside that array here.
// ============================================================================

const allScholarships =  [
    // Example:
    // { 
    //     name: "Prime Minister's Research Fellowship (PMRF)", 
    //     country: "India", 
    //     features: "For PhD at top Indian institutions", 
    //     website: "#" 
    // },
    // PASTE YOUR DATA HERE
    // ===================================
  {
        country: "USA",
        name: "Fulbright-Nehru Master's Fellowships",
        features: "Flagship US-India program. Covers full tuition, living stipend, airfare, and health insurance for a master's degree. Worth often exceeds $100,000.",
        yearStarted: "1950",
        featuredIn: "Forbes, QS, THE, all major study abroad publications",
        website: "http://www.usief.org.in"
    },
    {
        country: "USA",
        name: "Tata Scholarship - Cornell University",
        features: "Specifically for Indian undergraduate students. Provides full tuition funding for 8 semesters. Recipients must commit to working in India post-graduation.",
        yearStarted: "2012",
        featuredIn: "QS, Times Higher Education, major Indian educational news",
        website: "https://admissions.cornell.edu"
    },
    {
        country: "USA",
        name: "Knight-Hennessy Scholars at Stanford University",
        features: "Prestigious graduate-level scholarship for any field at Stanford. Covers full tuition and provides stipends for living and academic expenses. Many Indian recipients.",
        yearStarted: "2016",
        featuredIn: "Forbes, highly prestigious global scholarship lists",
        website: "https://knight-hennessy.stanford.edu/"
    },
    {
        country: "USA",
        name: "Stanford Reliance Dhirubhai Fellowship",
        features: "Specifically for Indian students to pursue an MBA at Stanford. Covers tuition and fees (approx. $150,000). Students must return to India within two years of graduation.",
        yearStarted: "2008",
        featuredIn: "Major business school and MBA rankings (Poets&Quants, Forbes)",
        website: "https://www.gsb.stanford.edu"
    },
    {
        country: "USA",
        name: "AAUW International Fellowships",
        features: "Awarded to women for full-time study or research in the US. India is consistently one of the top recipient countries. Master's: $20,000, Doctoral: $25,000.",
        yearStarted: "1917",
        featuredIn: "Major scholarship portals for women in STEM and research",
        website: "https://www.aauw.org"
    },
    {
        country: "USA",
        name: "Hubert H. Humphrey Fellowship Program",
        features: "For mid-career professionals from developing countries, including India. Non-degree program. Covers tuition, travel, stipend, and professional development funds.",
        yearStarted: "1978",
        featuredIn: "US Department of State educational portals, professional development forums",
        website: "https://www.humphreyfellowship.org/"
    },
    {
        country: "USA",
        name: "Rotary Peace Fellowships",
        features: "For Master's degrees at premier universities (e.g., Duke, UNC). Covers tuition, room and board, and travel. Strong focus on peace and conflict resolution. Strong Indian alumni network.",
        yearStarted: "1999",
        featuredIn: "Global peace and development organization listings",
        website: "https://www.rotary.org"
    },
    // UK
    // ===================================
    {
        country: "UK",
        name: "Chevening Scholarships",
        features: "UK government's global scholarship for a one-year master's degree. Covers full tuition, a living stipend, and travel costs. India has one of the largest programs.",
        yearStarted: "1983",
        featuredIn: "QS, Forbes, THE - One of the most famous scholarships globally",
        website: "https://www.chevening.org"
    },
    {
        country: "UK",
        name: "Rhodes Scholarships for India at University of Oxford",
        features: "World's most prestigious postgraduate scholarship. Five scholarships are awarded to Indians annually for study at Oxford. Covers all fees and provides a living stipend.",
        yearStarted: "1902",
        featuredIn: "Consistently ranked as the #1 most prestigious scholarship globally",
        website: "https://www.rhodeshouse.ox.ac.uk"
    },
    {
        country: "UK",
        name: "Gates Cambridge Scholarship",
        features: "For postgraduate study at the University of Cambridge. Covers full cost of studying, including tuition, stipend, and travel. Highly competitive with many Indian awardees.",
        yearStarted: "2000",
        featuredIn: "QS, Forbes, THE, on par with Rhodes for prestige",
        website: "https://www.gatescambridge.org/"
    },
    {
        country: "UK",
        name: "Commonwealth Scholarship and Fellowship Plan",
        features: "For Master's and PhD studies for students from Commonwealth countries. Covers tuition fees, stipends, and airfare. Worth is typically over $50,000.",
        yearStarted: "1959",
        featuredIn: "QS, Times Higher Education, and government portals",
        website: "https://cscuk.fcdo.gov.uk"
    },
    {
        country: "UK",
        name: "GREAT Scholarships - India",
        features: "Jointly funded by the UK government's GREAT Britain Campaign and UK universities. Offers a minimum of £10,000 towards tuition fees for one-year master's courses.",
        yearStarted: "2017",
        featuredIn: "British Council, Study UK portals",
        website: "https://study-uk.britishcouncil.org"
    },
    {
        country: "UK",
        name: "Felix Scholarships",
        features: "Specifically for academically outstanding Indian graduate students for study at Oxford, Reading, and SOAS. Covers 100% of course fees and a stipend for living costs.",
        yearStarted: "1991",
        featuredIn: "Highly regarded in India for UK study",
        website: "https://www.felixscholarship.org/"
    },
    {
        country: "UK",
        name: "Saltire Scholarships - Scotland",
        features: "For students from Canada, China, India, Japan, Pakistan, and USA to study in Scotland. Offers up to 50 awards, each worth £8,000 towards master's tuition fees.",
        yearStarted: "2009",
        featuredIn: "Study in Scotland official portals",
        website: "https://www.scotland.org"
    },
    // ===================================
    // Australia
    // ===================================
    {
        country: "Australia",
        name: "Australia Awards Scholarships",
        features: "Australian Government's flagship program for Master's and PhD. Covers full tuition, travel, living allowance, and health cover. Aims to build leaders.",
        yearStarted: "1980s",
        featuredIn: "All major government and study abroad rankings",
        website: "https://www.dfat.gov.au"
    },
    {
        country: "Australia",
        name: "Research Training Program (RTP) Scholarships",
        features: "Australian government-funded, administered by universities for research Master's and PhDs. Covers tuition fees and provides a stipend. Open to international students.",
        yearStarted: "2017 (replaced previous schemes)",
        featuredIn: "Top-tier university research portals, QS, THE",
        website: "https://www.education.gov.au"
    },
    {
        country: "Australia",
        name: "Melbourne Research Scholarship",
        features: "Awarded by the University of Melbourne for high-achieving research students. Provides full tuition fee offset and a living stipend of approx. AUD $37,000 per year.",
        yearStarted: "Varies (long-standing)",
        featuredIn: "QS World University Rankings, THE (as a feature of a top university)",
        website: "https://scholarships.unimelb.edu.au"
    },
    {
        country: "Australia",
        name: "University of Sydney International Scholarship",
        features: "Attracts top quality international postgraduate students. Covers tuition fees and provides a living stipend for research degrees. Worth over AUD $40,000 per year.",
        yearStarted: "Varies",
        featuredIn: "Major university ranking sites and study abroad portals",
        website: "https://www.sydney.edu.au"
    },
    {
        country: "Australia",
        name: "ANU Chancellor's International Scholarship",
        features: "Offered by Australian National University. Provides a 25% or 50% tuition fee scholarship for a diverse range of undergraduate and postgraduate programs.",
        yearStarted: "Varies",
        featuredIn: "ANU is a Go8 university, regularly featured in global rankings",
        website: "https://www.anu.edu.au"
    },
    {
        country: "Australia",
        name: "Destination Australia Program",
        features: "Government-funded scholarship to study in regional Australia. For domestic and international students. Provides AUD $15,000 per year for study and living expenses.",
        yearStarted: "2019",
        featuredIn: "Australian government education portals like Study Australia",
        website: "https://www.education.gov.au"
    },
    {
        country: "Australia",
        name: "Adelaide Global Academic Excellence Scholarship",
        features: "Offered by the University of Adelaide. A 50% tuition fee reduction for international students across various undergraduate and postgraduate programs.",
        yearStarted: "Varies",
        featuredIn: "University ranking sites, as a feature of a Go8 university",
        website: "https://international.adelaide.edu.au"
    },
    // ===================================
    // Germany
    // ===================================
    {
        country: "Germany",
        name: "DAAD Scholarships (Multiple Programs)",
        features: "Wide range of scholarships for Master's/PhD. Covers living costs (approx. €934/month), insurance, and travel. Public universities are tuition-free.",
        yearStarted: "1925",
        featuredIn: "The most well-known scholarship body for Germany, featured globally",
        website: "https://www.daad.in"
    },
    {
        country: "Germany",
        name: "Deutschlandstipendium National Scholarship Programme",
        features: "Public-private partnership. Provides €300 per month from the government and private sponsors. Awarded by universities to talented students regardless of nationality.",
        yearStarted: "2011",
        featuredIn: "Study in Germany, DAAD, and all major German university websites",
        website: "https://www.deutschlandstipendium.de"
    },
    {
        country: "Germany",
        name: "Heinrich Böll Foundation Scholarships",
        features: "For students who align with the German Green Party's values. For Master's and PhD. Provides approx. €850 per month plus allowances. Open to all nationalities.",
        yearStarted: "1997",
        featuredIn: "Political science and social sciences academic circles",
        website: "https://www.boell.de"
    },
    {
        country: "Germany",
        name: "Konrad-Adenauer-Stiftung (KAS) Scholarships",
        features: "For international students with strong interest in politics. For Master's and PhD. Provides a monthly stipend of approx. €934 and various allowances.",
        yearStarted: "1955",
        featuredIn: "Political and social science scholarship lists",
        website: "https://www.kas.de"
    },
    {
        country: "Germany",
        name: "Humboldt Research Fellowship",
        features: "Highly prestigious fellowship for postdoctoral researchers. Provides a monthly fellowship of €2,670 to €3,170. For a long-term research stay in Germany.",
        yearStarted: "1953",
        featuredIn: "Top-tier global research and academic publications (Nature, Science)",
        website: "https://www.humboldt-foundation.de"
    },
    {
        country: "Germany",
        name: "Bayer Foundation Fellowships",
        features: "For students and young professionals in life sciences, medicine, and data science. Various fellowship types with funding up to €20,000. India is a focus country.",
        yearStarted: "Varies by fellowship",
        featuredIn: "Science and medical research news (FierceBiotech, etc.)",
        website: "https://www.bayer-foundation.com"
    },
    {
        country: "Germany",
        name: "Friedrich Ebert Stiftung Scholarship",
        features: "For students with a commitment to social and political goals in the spirit of social democracy. Provides a monthly stipend and comprehensive seminar program.",
        yearStarted: "1925",
        featuredIn: "Scholarship lists for social sciences and humanities",
        website: "https://www.fes.de"
    },
    // ===================================
    // New Zealand
    // ===================================
    {
        country: "New Zealand",
        name: "Manaaki New Zealand Scholarships",
        features: "Government scholarship covering full tuition, living allowance (~NZD $531/week), setup allowance, insurance, and travel. For developing countries, including India.",
        yearStarted: "1950s (as Colombo Plan)",
        featuredIn: "Official government resources and major study abroad portals",
        website: "https://www.nzscholarships.govt.nz/"
    },
    {
        country: "New Zealand",
        name: "University of Auckland International Student Excellence Scholarship",
        features: "For new international undergraduate and postgraduate students. Offers up to NZD $10,000 towards compulsory tuition fees.",
        yearStarted: "2016",
        featuredIn: "THE, QS (as feature of NZ's top-ranked university)",
        website: "https://www.auckland.ac.nz"
    },
    {
        country: "New Zealand",
        name: "Victoria University of Wellington Tongarewa Scholarship",
        features: "Celebrates the university's commitment to its international community. Tuition fee scholarships of NZD $5,000 or $10,000 for undergraduate and postgraduate students.",
        yearStarted: "Varies",
        featuredIn: "Major New Zealand education portals",
        website: "https://www.wgtn.ac.nz"
    },
    {
        country: "New Zealand",
        name: "University of Otago International Master's Research Scholarship",
        features: "Provides a stipend of NZD $18,204 per annum plus a tuition fee waiver for thesis Master's students.",
        yearStarted: "Varies",
        featuredIn: "Research-focused scholarship portals",
        website: "https://www.otago.ac.nz"
    },
    {
        country: "New Zealand",
        name: "University of Canterbury International First Year Scholarship",
        features: "For top-achieving international students starting an undergraduate degree. Valued at $10,000, $15,000 or $20,000.",
        yearStarted: "Varies",
        featuredIn: "Undergraduate study abroad portals",
        website: "https://www.canterbury.ac.nz"
    },
    {
        country: "New Zealand",
        name: "AUT Doctoral Scholarships",
        features: "Auckland University of Technology offers these to high-achieving research students. Covers full tuition fees and an annual stipend of approx. NZD $30,000.",
        yearStarted: "Varies",
        featuredIn: "PhD and doctoral study portals",
        website: "https://www.aut.ac.nz"
    },
    {
        country: "New Zealand",
        name: "Lincoln University International Taught Master Merit Scholarships",
        features: "Provides up to NZD $10,000 towards the tuition fees for Master's programmes. Based on academic merit.",
        yearStarted: "Varies",
        featuredIn: "Specialized university portals (e.g., for agriculture and environmental science)",
        website: "https://www.lincoln.ac.nz"
    },
    // ===================================
    // Europe (Non-Germany)
    // ===================================
    {
        country: "Europe (Multiple)",
        name: "Erasmus Mundus Joint Masters Scholarships",
        features: "EU-funded. Study a Master's in at least two European countries. Covers tuition, travel, and a living allowance of ~€1,400 per month.",
        yearStarted: "2004",
        featuredIn: "Extremely well-regarded in all European education rankings",
        website: "https://www.eacea.ec.europa.eu"
    },
    {
        country: "France",
        name: "Eiffel Excellence Scholarship Programme",
        features: "French Ministry for Europe and Foreign Affairs program for Master's and PhD. Doesn't cover tuition but provides a monthly allowance, return ticket, and health insurance.",
        yearStarted: "1999",
        featuredIn: "Campus France, major scholarship lists for Europe",
        website: "https://www.campusfrance.org"
    },
    {
        country: "Switzerland",
        name: "Swiss Government Excellence Scholarships",
        features: "For foreign scholars and artists. Aimed at PhD and postdoctoral researchers. Provides a monthly stipend, tuition waiver, health insurance, and travel allowance.",
        yearStarted: "Varies (long history)",
        featuredIn: "Highly prestigious government scholarship lists",
        website: "https://www.sbfi.admin.ch"
    },
    {
        country: "Netherlands",
        name: "Holland Scholarship",
        features: "For non-EEA international students for Bachelor's or Master's. A one-off payment of €5,000 in the first year of studies. Financed by Dutch Ministry of Education.",
        yearStarted: "2015",
        featuredIn: "Study in Holland official government portal",
        website: "https://www.studyinnl.org"
    },
    {
        country: "Sweden",
        name: "Swedish Institute Scholarships for Global Professionals (SISGP)",
        features: "Fully funded scholarship for Master's level studies. Covers tuition, living expenses, insurance, and travel grants. India is an eligible country.",
        yearStarted: "Varies",
        featuredIn: "Study in Sweden official portals, sustainability and development forums",
        website: "https://si.se"
    },
    {
        country: "Belgium",
        name: "VLIR-UOS Scholarships",
        features: "For students from developing countries (including India) for Master's programmes at Flemish universities. Covers tuition, allowance, accommodation, and travel.",
        yearStarted: "Varies",
        featuredIn: "Development studies and international cooperation portals",
        website: "https://www.vliruos.be"
    },
    {
        country: "France",
        name: "Charpak Scholarship Program",
        features: "French government scholarship in India for Master's level. Provides a monthly stipend, student visa fee waiver, and assistance in finding affordable accommodation.",
        yearStarted: "Varies",
        featuredIn: "Campus France India, specifically targeted at Indians",
        website: "https://www.inde.campusfrance.org"
    },
    // ===================================
    // Singapore
    // ===================================
    {
        country: "Singapore",
        name: "Dr Goh Keng Swee (GKS) Scholarship",
        features: "Private-sector scholarship for undergraduate study at top Singaporean universities (NUS, NTU, etc.). Covers tuition, airfare, and annual living allowance of ~S$6,500.",
        yearStarted: "1995",
        featuredIn: "Well-known scholarship for the Asia-Pacific region",
        website: "https://abs.org.sg"
    },
    {
        country: "Singapore",
        name: "Singapore International Graduate Award (SINGA)",
        features: "For PhD studies in science and engineering at NUS, NTU, or A*STAR. Covers full tuition, provides a monthly stipend (S$2,200, increases to S$2,700), and travel grant.",
        yearStarted: "2006",
        featuredIn: "Top-tier global PhD and research portals (Nature, Science)",
        website: "https://www.a-star.edu.sg"
    },
    {
        country: "Singapore",
        name: "NUS Research Scholarships",
        features: "For outstanding graduate students pursuing research-based Master's & PhD degrees at National University of Singapore. Covers full tuition and a monthly stipend.",
        yearStarted: "Varies",
        featuredIn: "QS, THE (as a feature of Asia's top university)",
        website: "https://nusgs.nus.edu.sg"
    },
    {
        country: "Singapore",
        name: "NTU Research Scholarship (RSS)",
        features: "For prospective PhD students at Nanyang Technological University. Covers full tuition and provides a monthly living stipend.",
        yearStarted: "Varies",
        featuredIn: "Major global university rankings and engineering/tech portals",
        website: "https://www.ntu.edu.sg"
    },
    {
        country: "Singapore",
        name: "INSEAD Syngenta Endowed Scholarship(s) for Emerging Country Leaders",
        features: "For MBA students at INSEAD (Singapore campus) from developing nations. Awarded based on merit and financial need. Value of €25,000.",
        yearStarted: "Varies",
        featuredIn: "Financial Times, Forbes, top MBA program rankings",
        website: "https://www.insead.edu"
    },
    {
        country: "Singapore",
        name: "SMU ASEAN Undergraduate Scholarship",
        features: "For outstanding undergraduate students from ASEAN nations and India. Covers annual tuition fees and provides an annual living allowance of S$5,800.",
        yearStarted: "Varies",
        featuredIn: "Undergraduate study in Asia portals",
        website: "https://admissions.smu.edu.sg"
    },
    {
        country: "Singapore",
        name: "A*STAR Graduate Scholarship (AGS)",
        features: "For PhD or EngD studies at NUS, NTU, SUTD or SMU. Provides full tuition support, monthly stipend, and other allowances. Strong focus on research.",
        yearStarted: "2001",
        featuredIn: "Scientific research and development publications",
        website: "https://www.a-star.edu.sg"
    },
    // ===================================
    // UAE
    // ===================================
    {
        country: "UAE",
        name: "MBZUAI Graduate Scholarships",
        features: "For Master's/PhD in Artificial Intelligence. Offers 100% tuition waiver, monthly stipend, accommodation, and health insurance. Open to all nationalities.",
        yearStarted: "2019",
        featuredIn: "Gaining rapid recognition in the field of AI and tech education",
        website: "https://mbzuai.ac.ae"
    },
    {
        country: "UAE",
        name: "Khalifa University Scholarships",
        features: "For graduate students (Master's and PhD). Provides full tuition coverage, a monthly stipend, medical insurance, and support for attending international conferences.",
        yearStarted: "2007",
        featuredIn: "QS, THE (as UAE's top-ranked university)",
        website: "https://www.ku.ac.ae"
    },
    {
        country: "UAE",
        name: "NYU Abu Dhabi Scholarships",
        features: "NYU Abu Dhabi is a need-blind university. It provides financial support in the form of grants and scholarships that meets 100% of demonstrated need for all students.",
        yearStarted: "2010",
        featuredIn: "Forbes, US News (as a top liberal arts college)",
        website: "https://nyuad.nyu.edu"
    },
    {
        country: "UAE",
        name: "American University of Sharjah (AUS) Scholarships",
        features: "Offers a range of scholarships for undergraduate students, from merit-based grants (20-50% tuition waiver) to full financial grants covering 100% of tuition and fees.",
        yearStarted: "1997",
        featuredIn: "QS World University Rankings for the Middle East",
        website: "https://www.aus.edu"
    },
    {
        country: "UAE",
        name: "Masdar Institute Scholarship (part of Khalifa University)",
        features: "Historically famous for sustainability research. Now integrated with KU, the scholarship benefits remain: full tuition, stipend, housing, and travel expenses.",
        yearStarted: "2007",
        featuredIn: "Renewable energy and sustainability publications",
        website: "https://www.ku.ac.ae"
    },
    {
        country: "UAE",
        name: "University of Dubai Scholarships",
        features: "Offers merit-based partial tuition scholarships for undergraduate and graduate students, including a 30% scholarship for Indian high school curriculum students with high scores.",
        yearStarted: "1997",
        featuredIn: "Regional business and technology education portals",
        website: "https://ud.ac.ae"
    },
    {
        country: "UAE",
        name: "Canadian University Dubai Scholarships for Indian Students",
        features: "Offers a range of financial support, including specific merit awards for students from CBSE or other Indian education boards, providing up to a 50% tuition waiver.",
        yearStarted: "2006",
        featuredIn: "Study abroad portals focused on Indian students",
        website: "https://www.cud.ac.ae"
    },
    // ===================================
    // Middle East (Non-UAE)
    // ===================================
    {
        country: "Saudi Arabia",
        name: "King Abdullah University of Science and Technology (KAUST) Fellowship",
        features: "Extremely generous scholarship for MS and PhD students. Covers full tuition, provides a very high annual living stipend (from $20,000 to $30,000), housing, and medical.",
        yearStarted: "2009",
        featuredIn: "Nature Index, global research rankings (known as the 'House of Wisdom')",
        website: "https://www.kaust.edu.sa"
    },
    {
        country: "Qatar",
        name: "Qatar University Scholarships",
        features: "Offers a range of scholarships for international students, including a competitive award that covers tuition fees and provides university accommodation.",
        yearStarted: "1977",
        featuredIn: "QS Arab Region Rankings, THE",
        website: "https://www.qu.edu.qa"
    },
    {
        country: "Saudi Arabia",
        name: "King Fahd University of Petroleum and Minerals (KFUPM) Scholarship",
        features: "Fully funded scholarship for MS and PhD students. Covers full tuition, provides a monthly stipend, free housing, medical care, and a prepaid airline ticket.",
        yearStarted: "1963",
        featuredIn: "Top engineering and petroleum industry publications",
        website: "https://dgs.kfupm.edu.sa/"
    },
    {
        country: "Qatar",
        name: "Hamad Bin Khalifa University (HBKU) Scholarship",
        features: "Part of Qatar Foundation. Offers merit-based funding for its graduate programs, often covering tuition and providing a stipend for living expenses.",
        yearStarted: "2010",
        featuredIn: "Education City and Qatar Foundation publications",
        website: "https://www.hbku.edu.qa"
    },
    {
        country: "Israel",
        name: "Weizmann Institute of Science - Feinberg Graduate School Fellowships",
        features: "All MSc and PhD students at this world-renowned research institute receive full fellowships, covering tuition and providing a generous living stipend. No application needed.",
        yearStarted: "1958",
        featuredIn: "Nature, Science, top global rankings for life sciences and research",
        website: "https://www.weizmann.ac.il"
    },
    {
        country: "Saudi Arabia",
        name: "King Saud University Scholarship",
        features: "Offers fully funded scholarships for graduate students. Includes a monthly stipend, free housing, healthcare, and an annual vacation ticket.",
        yearStarted: "1957",
        featuredIn: "Major regional university rankings",
        website: "https://dgs.ksu.edu.sa"
    },
    {
        country: "Lebanon",
        name: "American University of Beirut (AUB) Scholarships",
        features: "AUB offers numerous merit and need-based scholarships for graduate students. India is a key recruitment country. Awards vary from partial to full tuition support.",
        yearStarted: "1866",
        featuredIn: "QS Arab Region Rankings (often ranked #1), THE",
        website: "https://www.aub.edu.lb"
    }
];









// This final line makes the data available to your build.js factory script.
module.exports = { allScholarships };