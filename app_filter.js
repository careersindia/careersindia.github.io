// =================================================================================
// == FINAL, COMPLETE app_filter.js WITH CORRECTED FILTER LOGIC ==
// =================================================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log("Static page loaded. Initializing interactive filters...");

    // 1. Get all the interactive HTML elements
    const levelSelect = document.getElementById('level-select');
    const dateSelect = document.getElementById('date-select');
    const sortButton = document.getElementById('sort-by-qs-btn');
    const displayArea = document.getElementById('scholarship-display');
    
    // 2. Get all the scholarship cards that were pre-built into the HTML
    const allScholarshipCards = Array.from(displayArea.querySelectorAll('.scholarship-card'));

    if (allScholarshipCards.length === 0) {
        console.log("No scholarship cards found on the page. Stopping filter script.");
        // If no cards, ensure placeholder is shown if it was meant to be shown
        // and prevent errors from trying to process empty data.
        showPlaceholder(true); 
        return;
    }
    
    console.log(`Found ${allScholarshipCards.length} scholarship cards to manage.`);

    // 3. Read the hidden data from each card into a clean JavaScript array.
    const allScholarshipsData = allScholarshipCards.map((card, index) => {
        const get = (className) => {
            const element = card.querySelector('.' + className);
            return element ? element.textContent.trim() : '';
        };

        const rankText = get('rank-data');
        const rankMatch = rankText.match(/\d+/);

        return {
            element: card,
            // Ensure level is lowercased for consistent matching.
            // Split by comma or 'and' to handle multiple levels like "undergraduate and postgraduate"
            level: get('level-data').toLowerCase().split(/,\s*| and /).map(s => s.trim()), 
            year: parseInt(get('year-data'), 10) || 0,
            qsRank: rankMatch ? parseInt(rankMatch[0], 10) : Infinity,
            originalIndex: index
        };
    });

    // Helper to manage the "No results found" message
    function showPlaceholder(show) {
        let placeholder = displayArea.querySelector('.placeholder-text');
        if (show && !placeholder) {
            displayArea.insertAdjacentHTML('beforeend', '<p class="placeholder-text">No scholarships match your criteria on this page.</p>');
        } else if (!show && placeholder) {
            placeholder.remove();
        }
    }

    // =========================================================================
    // == BUG FIX: THIS IS THE NEW, CORRECTED applyFilters FUNCTION ==
    // =========================================================================
    function applyFilters() {
        const levelFilter = levelSelect.value;
        const dateFilter = dateSelect.value;
        let visibleCount = 0;

        allScholarshipsData.forEach(scholarship => {
            let matchesLevel = false;
            let matchesDate = false;

            // --- LEVEL OF STUDY FILTER (CORRECTED LOGIC) ---
            if (levelFilter === 'all') {
                matchesLevel = true;
            } else {
                // Check if ANY of the scholarship's levels match the filter value
                if (scholarship.level.includes(levelFilter)) {
                    matchesLevel = true;
                }
            }

            // --- ESTABLISHMENT DATE FILTER (CORRECTED LOGIC) ---
            if (dateFilter === 'all') {
                matchesDate = true;
            } else {
                const year = scholarship.year;
                if (year && year > 0) {
                    switch (dateFilter) {
                        case 'before-1500': if (year < 1500) matchesDate = true; break;
                        case '1500-1700': if (year >= 1500 && year <= 1700) matchesDate = true; break;
                        case '1700-1900': if (year > 1700 && year <= 1900) matchesDate = true; break;
                        case '1900-2000': if (year > 1900 && year <= 2000) matchesDate = true; break;
                        case 'after-2000': if (year > 2000) matchesDate = true; break;
                    }
                }
            }

            // A card is visible ONLY if it matches BOTH active filters.
            const isVisible = matchesLevel && matchesDate;

            // Show or hide the actual HTML card
            scholarship.element.style.display = isVisible ? 'block' : 'none';
            if (isVisible) visibleCount++;
        });
        
        // Handle the "No results found" message
        showPlaceholder(visibleCount === 0);
    }

    // --- SORT FUNCTION (Unchanged - scope is current page) ---
    function sortByQsRanking() {
        allScholarshipsData.sort((a, b) => {
            // Handle Infinity ranks for non-ranked items
            if (a.qsRank === Infinity && b.qsRank === Infinity) {
                return a.originalIndex - b.originalIndex; // Maintain original order if both unranked
            }
            if (a.qsRank === Infinity) return 1; // Unranked comes after ranked
            if (b.qsRank === Infinity) return -1; // Ranked comes before unranked

            if (a.qsRank < b.qsRank) return -1;
            if (a.qsRank > b.qsRank) return 1;
            return a.originalIndex - b.originalIndex; // Stable sort for same ranks
        });
        
        // Re-append elements in the new sorted order
        allScholarshipsData.forEach(scholarship => {
            displayArea.appendChild(scholarship.element);
        });
        console.log("Sorting complete.");
    }
    
    // --- Attach Event Listeners to the Controls ---
    if (levelSelect) levelSelect.addEventListener('change', applyFilters);
    if (dateSelect) dateSelect.addEventListener('change', applyFilters);
    if (sortButton) sortButton.addEventListener('click', sortByQsRanking);

    // Apply filters once on load to ensure initial state is correct (e.g., if any filter
    // had a default value other than 'all' or if we want to immediately filter based on URL params).
    // For now, with default 'all' selected, this just ensures everything is visible.
    applyFilters(); 
    
    console.log("Interactive filters are now active.");
});