// =========================================================================
// == FINAL, COMPLETE build.js SCRIPT (Corrected HTML Generation) ==
// =========================================================================

const fs = require('fs');

// --- Configuration (YOU WILL CHANGE THIS SECTION FOR EACH COUNTRY) ---
const ITEMS_PER_PAGE = 100;
const DATA_FILE_PATH = './data_india.js';       // <-- Set this to the country you are building
const TEMPLATE_FILE_PATH = './template.html';
const OUTPUT_FILE_PREFIX = 'scholarships_india'; // <-- Set this to the country you are building
const PAGE_MAIN_TITLE = 'SCHOLARSHIPS FOR INDIANS'; // <-- Set this to the country you are building

console.log(`Starting PAGINATED build process for: ${OUTPUT_FILE_PREFIX}`);

// 1. Load the raw data from your data file
const { allScholarships } = require(DATA_FILE_PATH);
if (!allScholarships || !Array.isArray(allScholarships)) {
    console.error(`\nFATAL ERROR: Could not find a valid 'allScholarships' array in ${DATA_FILE_PATH}.`);
    process.exit(1);
}
console.log(`Loaded ${allScholarships.length} total scholarships.`);

// 2. Calculate the total number of pages needed
const totalPages = Math.ceil(allScholarships.length / ITEMS_PER_PAGE);
console.log(`Calculated ${totalPages} pages with up to ${ITEMS_PER_PAGE} items per page.`);

// 3. Load the HTML template
const templateHtml = fs.readFileSync(TEMPLATE_FILE_PATH, 'utf-8');

// =========================================================================
// == THIS IS THE NEW, CORRECTED HTML GENERATION FUNCTION ==
// =========================================================================
const createCardHtml = (s) => {
    // This function intelligently determines which data format is being used.
    
    // --- Data Extraction Logic ---
    const isDetailedFormat = s.hasOwnProperty('Scholarship Name'); // Check if it's the old, detailed format
    
    const scholarshipName = isDetailedFormat ? s["Scholarship Name"] : s.name;
    const host = isDetailedFormat ? s["Host Country and University"] : s.country;
    const website = isDetailedFormat ? s["Website"] : s.website;
    const level = isDetailedFormat ? s["Level of Study"] : s.level; // 'level' might not exist in India data, will default to N/A
    const deadline = isDetailedFormat ? s["Application Deadline"] : s.deadline;
    const value = isDetailedFormat ? s["Value/Inclusions"] : s.value;
    const application = isDetailedFormat ? s["Application Process"] : s.process;
    const established = isDetailedFormat ? s["Establishment date of the University"] : s.yearStarted;
    
    // Helper to format object/list data
    const formatValueAsList = (value) => {
        if (typeof value !== 'object' || value === null) return value || 'N/A';
        return `<ul>${Object.entries(value).map(([key, val]) => `<li><strong>${key}:</strong> ${val === true ? 'Yes' : val}</li>`).join('')}</ul>`;
    };

    // Special handling for Eligibility and Rankings
    let eligibilityHtml = 'N/A';
    if (isDetailedFormat) {
        eligibilityHtml = formatValueAsList(s["Eligibility Criteria"]);
    } else if (s.features) {
        eligibilityHtml = s.features; // Use the 'features' property for the simple format
    }

    let rankingsHtml = 'N/A';
    if (isDetailedFormat && s["University Rankings"]) {
        rankingsHtml = formatValueAsList(s["University Rankings"]);
    } else if (s.featuredIn) {
        rankingsHtml = `Featured In: ${s.featuredIn}`; // Use 'featuredIn' for simple format
    }
    
    let documentsHtml = 'N/A';
    if (isDetailedFormat && s["Required Documents"]) {
        documentsHtml = formatValueAsList(s["Required Documents"]);
    }

    // --- Final HTML Assembly ---
    return `
        <div class="scholarship-card">
            <!-- Hidden data for filtering -->
            <span class="level-data" style="display:none;">${level || 'N/A'}</span>
            <span class="year-data" style="display:none;">${established || 'N/A'}</span>
            <span class="rank-data" style="display:none;">N/A</span>

            <h3 class="scholarship-title">${scholarshipName || 'N/A'}</h3>
            <table class="details-table">
                <tbody>
                    <tr><td>Host</td><td>${host || 'N/A'}</td></tr>
                    <tr><td>Rankings / Featured In</td><td>${rankingsHtml}</td></tr>
                    <tr><td>Website</td><td><a href="${website || '#'}" target="_blank" rel="noopener noreferrer">${website || 'N/A'}</a></td></tr>
                    <tr><td>Level</td><td>${level || 'N/A'}</td></tr>
                    <tr><td>Eligibility / Features</td><td>${eligibilityHtml}</td></tr>
                    <tr><td>Deadline</td><td>${deadline || 'N/A'}</td></tr>
                    <tr><td>Value</td><td>${value || 'N/A'}</td></tr>
                    <tr><td>Application</td><td>${application || 'N/A'}</td></tr>
                    <tr><td>Documents</td><td>${documentsHtml}</td></tr>
                    <tr><td>Established</td><td>${established || 'N/A'}</td></tr>
                </tbody>
            </table>
        </div>
    `;
};


// --- The rest of the script is the same ---

for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
    process.stdout.write(`Processing page ${currentPage} of ${totalPages}...\r`);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const pageScholarships = allScholarships.slice(startIndex, endIndex);
    const allCardsHtml = pageScholarships.map(createCardHtml).join('\n');
    let paginationHtml = '<div class="pagination">';
    if (currentPage > 1) {
        const prevPageFile = (currentPage - 1 === 1) ? `/${OUTPUT_FILE_PREFIX}.html` : `/${OUTPUT_FILE_PREFIX}_page_${currentPage - 1}.html`;
        paginationHtml += `<a href="${prevPageFile}">&laquo; Previous Page</a>`;
    }
    paginationHtml += `<span> Page ${currentPage} of ${totalPages} </span>`;
    if (currentPage < totalPages) {
        paginationHtml += `<a href="/${OUTPUT_FILE_PREFIX}_page_${currentPage + 1}.html">Next Page &raquo;</a>`;
    }
    paginationHtml += '</div>';
    const isFirstPage = currentPage === 1;
    const pageTitle = isFirstPage ? PAGE_MAIN_TITLE : `${PAGE_MAIN_TITLE} (Page ${currentPage} of ${totalPages})`;
    let finalHtml = templateHtml.replace('<!--PAGE_TITLE_HERE-->', pageTitle);
    finalHtml = finalHtml.replace('<!--SCHOLARSHIP_CARDS_HERE-->', allCardsHtml);
    finalHtml = finalHtml.replace('<!--PAGINATION_LINKS_HERE-->', paginationHtml);
    const outputFileName = isFirstPage ? `./${OUTPUT_FILE_PREFIX}.html` : `./${OUTPUT_FILE_PREFIX}_page_${currentPage}.html`;
    fs.writeFileSync(outputFileName, finalHtml);
    if(isFirstPage) {
        fs.copyFileSync(`./${OUTPUT_FILE_PREFIX}.html`, `./${OUTPUT_FILE_PREFIX}_page_1.html`);
    }
}

console.log(`\n\nSUCCESS! All paginated files for '${OUTPUT_FILE_PREFIX}' have been created.`);