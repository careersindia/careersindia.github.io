// =================================================================================
// == FINAL, COMPLETE app_country.js WITH ALL FEATURES WORKING ==
// =================================================================================

console.log("Country-specific app logic is running.");

if (typeof allScholarships !== 'undefined') {
    console.log("Initial data loaded. Scholarship count:", allScholarships.length);
} else {
    console.error("FATAL ERROR: The 'allScholarships' variable was not found. Check your data file (e.g., data_usa.js).");
    throw new Error("Missing 'allScholarships' data.");
}

// Get all the HTML elements
const levelSelect = document.getElementById('level-select');
const dateSelect = document.getElementById('date-select');
const sortButton = document.getElementById('sort-by-qs-btn');
const indianScholarshipsBtn = document.getElementById('indianScholarshipsBtn');
const displayArea = document.getElementById('scholarship-display');

let currentDisplayedScholarships = [...allScholarships];

function applyFilters() {
    let filteredScholarships = allScholarships;
    const level = levelSelect.value;
    const date = dateSelect.value;
    if (level !== 'all') {
        filteredScholarships = filteredScholarships.filter(s => {
            const levelData = s["Level of Study"];
            if (!levelData) return false;
            if (Array.isArray(levelData)) { return levelData.some(item => item.toLowerCase().includes(level)); }
            if (typeof levelData === 'string') { return levelData.toLowerCase().includes(level); }
            return false;
        });
    }
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

function getQsRank(scholarship) {
    const rankings = scholarship["University Rankings"];
    if (typeof rankings !== 'object' || rankings === null) return Infinity;
    const qsKey = Object.keys(rankings).find(key => key.includes("QS World") || key.includes("Ranking"));
    if (!qsKey) return Infinity;
    const rankingString = rankings[qsKey] || "";
    const match = rankingString.match(/\d+/);
    return match ? parseInt(match[0], 10) : Infinity;
}

function sortByQsRanking() {
    currentDisplayedScholarships.sort((a, b) => getQsRank(a) - getQsRank(b));
    displayFilterResults(currentDisplayedScholarships);
}

// THIS IS THE FIX: This function now correctly uses the loaded data
function displayIndianScholarships() {
    if (typeof indianScholarshipsData === 'undefined' || !Array.isArray(indianScholarshipsData)) {
        displayArea.innerHTML = '<p class="placeholder-text">Special report for Indian scholarships is not available for this country.</p>';
        console.error("Error: The 'indianScholarshipsData' variable was not found. Make sure 'data_india_special.js' is loaded in the HTML.");
        return;
    }
    
    displayArea.innerHTML = '';
    let contentToDisplay = '';
    indianScholarshipsData.forEach(scholarship => {
        contentToDisplay += `<div class="scholarship-card"><h3 class="scholarship-title">${scholarship.name || 'N/A'}</h3><table class="details-table"><tbody><tr><td>Country</td><td>${scholarship.country || 'N/A'}</td></tr><tr><td>Features</td><td>${scholarship.features || 'N/A'}</td></tr><tr><td>Website</td><td><a href="${scholarship.website || '#'}" target="_blank" rel="noopener noreferrer">Visit Site</a></td></tr></tbody></table></div>`;
    });
    displayArea.innerHTML = contentToDisplay;
}

function displayFilterResults(scholarships) {
    displayArea.innerHTML = '';
    if (scholarships.length === 0) {
        displayArea.innerHTML = '<p class="placeholder-text">No scholarships match your criteria.</p>';
        return;
    }
    scholarships.forEach(s => {
        const card = document.createElement('div');
        card.className = 'scholarship-card';
        const get = (key) => s[key] || 'N/A';
        const formatValueAsList = (value) => {
            if (typeof value !== 'object' || value === null) { return value || 'N/A'; }
            return `<ul>${Object.entries(value).map(([key, val]) => `<li><strong>${key}:</strong> ${val === true ? 'Yes' : val}</li>`).join('')}</ul>`;
        };
        card.innerHTML = `<h3 class="scholarship-title">${get("Scholarship Name")}</h3><table class="details-table"><tbody><tr><td>Host</td><td>${get("Host Country and University")}</td></tr><tr><td>Rankings</td><td>${formatValueAsList(s["University Rankings"])}</td></tr><tr><td>Website</td><td><a href="${get("Website")}" target="_blank">${get("Website")}</a></td></tr><tr><td>Level</td><td>${get("Level of Study")}</td></tr><tr><td>Eligibility</td><td>${formatValueAsList(s["Eligibility Criteria"])}</td></tr><tr><td>Deadline</td><td>${get("Application Deadline")}</td></tr><tr><td>Value</td><td>${get("Value/Inclusions")}</td></tr><tr><td>Application</td><td>${get("Application Process")}</td></tr><tr><td>Documents</td><td>${formatValueAsList(s["Required Documents"])}</td></tr><tr><td>Established</td><td>${get("Establishment date of the University")}</td></tr></tbody></table>`;
        displayArea.appendChild(card);
    });
}

// --- Attach all event listeners WITH SAFETY CHECKS ---
if (levelSelect) levelSelect.addEventListener('change', applyFilters);
if (dateSelect) dateSelect.addEventListener('change', applyFilters);
if (sortButton) sortButton.addEventListener('click', sortByQsRanking);
if (indianScholarshipsBtn) {
    indianScholarshipsBtn.addEventListener('click', displayIndianScholarships);
}

// Run the initial filters to display the main country data on page load
applyFilters();