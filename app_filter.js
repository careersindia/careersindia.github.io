// =================================================================================
// == COMPLETE app_filter.js SCRIPT FOR FILTERING AND SORTING STATIC PAGES ==
// =================================================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log("Static page loaded. Initializing filters...");

    // 1. Get all the HTML elements we need
    const levelSelect = document.getElementById('level-select');
    const dateSelect = document.getElementById('date-select');
    const sortButton = document.getElementById('sort-by-qs-btn');
    const indianScholarshipsBtn = document.getElementById('indianScholarshipsBtn');
    const displayArea = document.getElementById('scholarship-display');
    
    // Get all the scholarship cards that were pre-built into the HTML
    const allScholarshipCards = Array.from(displayArea.querySelectorAll('.scholarship-card'));

    if (allScholarshipCards.length === 0) {
        console.log("No scholarship cards found on the page. Stopping filter script.");
        return;
    }
    
    console.log(`Found ${allScholarshipCards.length} scholarship cards to manage.`);

    // 2. We need to read the data from each card so we can filter it.
    // We'll store this data in a clean array of objects.
    const allScholarshipsData = allScholarshipCards.map(card => {
        const get = (selector, attribute = 'textContent') => {
            const element = card.querySelector(selector);
            return element ? element[attribute].trim() : '';
        };

        const rankText = get('.rank-data');
        const rankMatch = rankText.match(/\d+/);

        return {
            element: card, // Keep a reference to the original HTML element
            level: get('.level-data'),
            year: parseInt(get('.year-data'), 10) || 0,
            qsRank: rankMatch ? parseInt(rankMatch[0], 10) : Infinity
        };
    });

    // --- All filter, sort, and display functions ---

    function applyFilters() {
        const levelFilter = levelSelect.value;
        const dateFilter = dateSelect.value;

        allScholarshipsData.forEach(scholarship => {
            let isVisible = true;

            // Level of Study Filter
            if (levelFilter !== 'all' && !scholarship.level.toLowerCase().includes(levelFilter)) {
                isVisible = false;
            }

            // Establishment Date Filter
            if (dateFilter !== 'all') {
                const year = scholarship.year;
                if (!year) {
                    isVisible = false;
                } else {
                    switch (dateFilter) {
                        case 'before-1500': if (year >= 1500) isVisible = false; break;
                        case '1500-1700': if (year < 1500 || year > 1700) isVisible = false; break;
                        case '1700-1900': if (year < 1700 || year > 1900) isVisible = false; break;
                        case '1900-2000': if (year < 1900 || year > 2000) isVisible = false; break;
                        case 'after-2000': if (year <= 2000) isVisible = false; break;
                    }
                }
            }

            // Show or hide the card based on the filters
            scholarship.element.style.display = isVisible ? 'block' : 'none';
        });
    }

    function sortByQsRanking() {
        // Sort the data array based on the QS rank
        allScholarshipsData.sort((a, b) => a.qsRank - b.qsRank);

        // Re-order the actual HTML elements in the display area
        allScholarshipsData.forEach(scholarship => {
            displayArea.appendChild(scholarship.element);
        });
        
        // Re-apply filters to ensure visibility is correct
        applyFilters();
    }
    
    // --- Attach all event listeners ---
    if (levelSelect) levelSelect.addEventListener('change', applyFilters);
    if (dateSelect) dateSelect.addEventListener('change', applyFilters);
    if (sortButton) sortButton.addEventListener('click', sortByQsRanking);

    // The Indian Scholarships button is more complex with this static method.
    // For now, it's best to link it to a separate, dedicated page.
    if (indianScholarshipsBtn) {
        indianScholarshipsBtn.addEventListener('click', () => {
            // This can link to a future pre-built page for Indian scholarships
            alert("This feature will be available on a dedicated page.");
        });
    }
    
    console.log("Filters are now active.");
});