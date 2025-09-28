// =================================================================
// THIS IS THE FINAL, CORRECTED, AND WORKING app.js FILE
// =================================================================

console.log("Checkpoint 1: app.js has loaded and is running.");

// --- The 'DOMContentLoaded' wrapper has been REMOVED from around this code ---

console.log("Checkpoint 2: Running code immediately. Now checking for data variables...");

// --- CRITICAL DATA VERIFICATION STEP ---
if (typeof originalData === 'undefined' || typeof universities_part_1 === 'undefined') {
    console.error("FATAL ERROR: A required data variable is missing from data.js. The script cannot continue.");
    const displayArea = document.getElementById('scholarship-display');
    if (displayArea) {
        displayArea.innerHTML = '<p class="placeholder-text">Error: Could not initialize data. Please contact support.</p>';
    }
    // Use 'throw' to halt execution completely if data is missing
    throw new Error("Missing critical data from data.js");
}

console.log("Checkpoint 3: All key data variables exist. Starting data processing...");

// --- YOUR DATA PROCESSING LOGIC ---
const allUsaSimple = [...universities_part_1, ...universities_part_2, ...universities_part_3, ...universities_part_4, ...universities_part_5, ...universities_part_6, ...universities_part_7, ...universities_part_8, ...universities_part_9, ...universities_part_10, ...universities_part_11, ...universities_part_12, ...universities_part_13, ...universities_part_14, ...universities_part_15, ...universities_part_16, ...universities_part_17, ...universities_part_18, ...universities_part_19, ...universities_part_20];
const allEuropeSimple = [...universities_europe, ...universities_europe_unranked];
const generateUniqueId = (name) => {
    const coreName = name.split(',').length > 1 ? name.split(',')[1].trim() : name.trim();
    return coreName.toLowerCase().replace(/[^a-z0-9]/g, '');
};
const scholarshipMap = new Map();
Object.values(originalData).flat().forEach(scholarship => {
    if (scholarship && scholarship["Host Country and University"]) {
        const id = generateUniqueId(scholarship["Host Country and University"]);
        scholarshipMap.set(id, scholarship);
    }
});
const transformAndAdd = (simpleList, countryOrRegion) => {
    if (typeof simpleList === 'undefined' || !Array.isArray(simpleList)) return;
    simpleList.forEach(uni => {
        if (uni && uni.name) {
            const id = generateUniqueId(uni.name);
            if (!scholarshipMap.has(id)) {
                const hostString = uni.country ? `${countryOrRegion}, ${uni.name}, ${uni.country}` : `${countryOrRegion}, ${uni.name}`;
                scholarshipMap.set(id, { "Scholarship Name": `${uni.name} - General Merit Scholarship`, "Host Country and University": hostString, "University Rankings": { "Ranking": uni.ranking || "Not Available" }, "Website": uni.link, "Level of Study": "Undergraduate and Postgraduate", "Eligibility Criteria": { "General": "Based on strong academic performance. Considered upon admission." }, "Application Deadline": "Varies. Check university website.", "Value/Inclusions": "Varies. Check website.", "Application Process": "Automatic with admission application.", "Required Documents": { "Standard university application documents required.": true }, "Establishment date of the University": "Not specified in this entry" });
            }
        }
    });
};
transformAndAdd(allUsaSimple, 'USA');
transformAndAdd(allEuropeSimple, 'Europe');
transformAndAdd(universities_germany, 'Germany');
const allScholarships = Array.from(scholarshipMap.values());

console.log("Checkpoint 4: Data processing finished. Final scholarship count:", allScholarships.length);

// --- YOUR FILTERING AND DISPLAY LOGIC ---
const countrySelect = document.getElementById('country-select');
const levelSelect = document.getElementById('level-select');
const dateSelect = document.getElementById('date-select');
const sortButton = document.getElementById('sort-by-qs-btn');
const displayArea = document.getElementById('scholarship-display');
const topIndianScholarshipsBtn = document.getElementById('topIndianScholarshipsBtn');
let currentDisplayedScholarships = [...allScholarships];

function applyFilters() { /* Your functions are here, unchanged */ 
    let filteredScholarships = allScholarships;
    const country = countrySelect.value;
    const level = levelSelect.value;
    const date = dateSelect.value;
    if (country !== 'all') { filteredScholarships = filteredScholarships.filter(s => s["Host Country and University"].toLowerCase().startsWith(country)); }
    if (level !== 'all') { filteredScholarships = filteredScholarships.filter(s => s["Level of Study"].toLowerCase().includes(level)); }
    if (date !== 'all') {
        filteredScholarships = filteredScholarships.filter(s => {
            const year = parseInt(s["Establishment date of the University"]);
            if (isNaN(year)) return false;
            switch (date) {
                case 'before-1500': return year < 1500;
                case '1500-1700': return year >= 1500 && year <= 1700;
                case '1700-1900': return year > 1700 && year <= 1900;
                case '1900-2000': return year > 1900 && year <= 2000;
                case 'after-2000': return year > 2000;
                default: return true;
            }
        });
    }
    currentDisplayedScholarships = filteredScholarships;
    displayFilterResults(currentDisplayedScholarships);
}

function getQsRank(scholarship) { /* Your functions are here, unchanged */ 
    const rankings = scholarship["University Rankings"];
    if (typeof rankings !== 'object' || rankings === null) return Infinity;
    const qsKey = Object.keys(rankings).find(key => key.includes("QS World"));
    if (!qsKey) return Infinity;
    const rankingString = rankings[qsKey] || "";
    const match = rankingString.match(/\d+/);
    return match ? parseInt(match[0], 10) : Infinity;
}
function sortByQsRanking() { /* Your functions are here, unchanged */ 
    currentDisplayedScholarships.sort((a, b) => getQsRank(a) - getQsRank(b));
    displayFilterResults(currentDisplayedScholarships);
}
function displayFilterResults(scholarships) {
    console.log("Checkpoint 5: Display function called with", scholarships.length, "items.");
    displayArea.innerHTML = '';
    if (scholarships.length === 0) { displayArea.innerHTML = '<p class="placeholder-text">No scholarships match your criteria.</p>'; return; }
    scholarships.forEach(s => {
        const card = document.createElement('div');
        card.className = 'scholarship-card';
        const formatObjectAsList = (obj) => { if (typeof obj !== 'object' || obj === null) return obj; return `<ul>${Object.entries(obj).map(([key, value]) => `<li><strong>${key}:</strong> ${value === true ? '' : value}</li>`).join('')}</ul>`; };
        card.innerHTML = `<h3 class="scholarship-title">${s["Scholarship Name"]}</h3><table class="details-table"><tbody><tr><td>Host</td><td>${s["Host Country and University"]}</td></tr><tr><td>Rankings</td><td>${formatObjectAsList(s["University Rankings"])}</td></tr><tr><td>Website</td><td><a href="${s["Website"]}" target="_blank">${s["Website"]}</a></td></tr><tr><td>Level</td><td>${s["Level of Study"]}</td></tr><tr><td>Eligibility</td><td>${formatObjectAsList(s["Eligibility Criteria"])}</td></tr><tr><td>Deadline</td><td>${s["Application Deadline"]}</td></tr><tr><td>Value</td><td>${s["Value/Inclusions"]}</td></tr><tr><td>Application</td><td>${s["Application Process"]}</td></tr><tr><td>Documents</td><td>${formatObjectAsList(s["Required Documents"])}</td></tr><tr><td>Established</td><td>${s["Establishment date of the University"]}</td></tr></tbody></table>`;
        displayArea.appendChild(card);
    });
}
function displayIndianScholarships() { /* Your functions are here, unchanged */ 
    if (typeof indianScholarshipsData === 'undefined' || !Array.isArray(indianScholarshipsData)) { console.error("indianScholarshipsData is missing!"); return; }
    displayArea.innerHTML = '';
    let contentToDisplay = '';
    indianScholarshipsData.forEach(scholarship => {
        contentToDisplay += `<div class="scholarship-card"><h3 class="scholarship-title">${scholarship.name}</h3><table class="details-table"><tbody><tr><td>Country</td><td>${scholarship.country}</td></tr><tr><td>Features for Indian Students</td><td>${scholarship.features}</td></tr><tr><td>Year Started</td><td>${scholarship.yearStarted}</td></tr><tr><td>Regularly Featured In</td><td>${scholarship.featuredIn}</td></tr><tr><td>Website</td><td><a href="${scholarship.website}" target="_blank" rel="noopener noreferrer">Visit Site</a></td></tr></tbody></table></div>`;
    });
    displayArea.innerHTML = contentToDisplay;
}

countrySelect.addEventListener('change', applyFilters);
levelSelect.addEventListener('change', applyFilters);
dateSelect.addEventListener('change', applyFilters);
sortButton.addEventListener('click', sortByQsRanking);
topIndianScholarshipsBtn.addEventListener('click', displayIndianScholarships);
applyFilters();