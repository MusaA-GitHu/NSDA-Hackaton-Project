console.log()

// --- DATA CONSTANTS ---

const ETHIOPIAN_UNIVERSITIES = [
    "Addis Ababa University", "Adama Science and Technology University", "Addis Ababa Science and Technology University",
    "Jimma University", "Haramaya University", "University of Gondar", "Bahir Dar University", "Hawassa University",
    "Mekelle University", "Arba Minch University", "Wollo University", "Wolkite University", "Ambo University",
    "Jigjiga University", "Dire Dawa University", "Debre Berhan University", "Debre Markos University",
    "Wachemo University", "Wolleso University", "Meda Walabu University", "Bule Hora University", "Axum University",
    "Adigrat University", "Woldia University", "Samara University", "Mettu University", "Assosa University",
    "Gambella University", "Raya University", "Oda Bultum University", "Werabe University", "Bonga University",
    "Jinka University", "Kotebe University of Education", "Rift Valley University", "Unity University", "St. Mary's University"
];

const AZKAR_LIST = [
    // Morning Azkar
    { text: "Ayat al-Kursi", count: 1, type: 'morning' },
    { text: "Surah Al-Ikhlas (3x)", count: 3, type: 'morning' },
    { text: "Surah Al-Falaq (3x)", count: 3, type: 'morning' },
    { text: "Surah An-Nas (3x)", count: 3, type: 'morning' },
    { text: "Asbahna wa asbahal-mulk...", count: 1, type: 'morning' },
    // Evening Azkar
    { text: "Amsayna wa amsal-mulk...", count: 1, type: 'evening' },
    { text: "Ayat al-Kursi", count: 1, type: 'evening' },
    { text: "Surah Al-Ikhlas (3x)", count: 3, type: 'evening' },
];

// Sample Upcoming Events Data
const UPCOMING_EVENTS = [
    { id: 1, title: "Weekly Halaqat: Tafsir of Surah Al-Baqarah", date: "2025-12-05", time: "6:00 PM", location: "Main Hall, Addis Ababa University", description: "Join us for our weekly halaqat where we discuss the meanings and lessons from Surah Al-Baqarah.", image: "images/real/study/study2.jpg" },
    { id: 2, title: "Islamic Finance Workshop", date: "2025-12-08", time: "2:00 PM", location: "Conference Room, Haramaya University", description: "Learn about Islamic banking principles and ethical finance practices.", image: "images/real/events/event-bg.jpg" },
    { id: 3, title: "Community Iftar Gathering", date: "2025-12-12", time: "5:30 PM", location: "University Mosque Courtyard", description: "Break your fast with fellow students and community members during this special iftar gathering.", image: "images/real/events/iftar1.jpg" },
    { id: 4, title: "Youth Leadership Summit", date: "2025-12-15", time: "9:00 AM", location: "Student Center, Bahir Dar University", description: "A leadership development program focusing on Islamic values and community service.", image: "images/real/community/community2.jpg" },
    { id: 5, title: "Arabic Language Circle", date: "2025-12-18", time: "4:00 PM", location: "Library Study Room 3", description: "Practice conversational Arabic with fellow students in a relaxed, supportive environment.", image: "images/real/study/study1.jpg" }
];

// UPDATED: New structure uses 'category' for main filter and 'subCategory' for detail
const BOOKS = [
    // SHARIA CATEGORY
    { id: 1, title: "The Noble Quran", category: "Sharia", subCategory: "Quran", lang: "Arabic", url: "https://www.muslim-library.com/dl/books/ar0101.pdf", color: "#d1fae5" },
    { id: 2, title: "Riyad as-Salihin", category: "Sharia", subCategory: "Hadith", lang: "English", url: "https://ia803100.us.archive.org/10/items/riyad-us-saliheen-dar-us-salam-saudi-arabia/Riyad-us-Saliheen-Dar-us-Salam-Saudi-Arabia.pdf", color: "#dbeafe" },
    { id: 3, title: "Tafsiira Quraanaa", category: "Sharia", subCategory: "Tafsir", lang: "Afaan Oromo", url: "https://ia802908.us.archive.org/21/items/tafsiira-quraanaa-afaan-oromootiin/Tafsiira%20Quraanaa%20Afaan%20Oromootiin.pdf", color: "#ffedd5" },
    { id: 4, title: "Ar Raheeq Al Makhtum", category: "Sharia", subCategory: "Seerah", lang: "English", url: "https://ia801902.us.archive.org/14/items/the-sealed-nectar-ar-raheeq-al-makhtum/The-Sealed-Nectar-Ar-Raheeq-Al-Makhtum.pdf", color: "#dcfce7" },
    { id: 5, title: "Fiqh As-Sunnah", category: "Sharia", subCategory: "Fiqh", lang: "Arabic", url: "https://ia802300.us.archive.org/21/items/FP11023/11023.pdf", color: "#fef9c3" },
    { id: 10, title: "Amharic Fiqh Notes", category: "Sharia", subCategory: "Fiqh", lang: "Amharic", url: "https://ia902900.us.archive.org/21/items/amharic-fiqh-book-1/Amharic%20Fiqh%20Book%201.pdf", color: "#ffe4e6" },
    
    // ACADEMIC CATEGORY
    { id: 6, title: "Differential Equations Module", category: "Academic", subCategory: "Module", lang: "English", url: "https://ia802608.us.archive.org/19/items/differential-equations-for-engineers/Differential%20Equations%20for%20Engineers.pdf", color: "#f3e8ff" },
    { id: 7, title: "CS Entrance Exam 2023", category: "Academic", subCategory: "Exam", lang: "English", url: "https://ia904700.us.archive.org/3/items/gate-cs-2023-question-paper-and-answer-key/GATE-CS-2023-Question-Paper-and-Answer-Key.pdf", color: "#f3f4f6" },
    { id: 11, title: "Physics 101 PPT Slides", category: "Academic", subCategory: "PPT", lang: "English", url: "https://ia801309.us.archive.org/20/items/introduction-to-physics/Introduction%20to%20Physics.pdf", color: "#fae8ff" },
    { id: 12, title: "Intro to Economics Reference", category: "Academic", subCategory: "Reference", lang: "English", url: "https://ia601404.us.archive.org/32/items/principles-of-economics-2e-86v2tqj/Principles%20of%20Economics-2e-86V2tqj.pdf", color: "#e0f2f1" },
    
    // GENERAL KNOWLEDGE CATEGORY
    { id: 8, title: "Psychology of Learning", category: "General Knowledge", subCategory: "Psychology", lang: "English", url: "https://ia803004.us.archive.org/22/items/the-psychology-of-learning/The%20Psychology%20of%20Learning.pdf", color: "#fee2e2" },
    { id: 9, title: "7 Habits Summary", category: "General Knowledge", subCategory: "Self Development", lang: "English", url: "https://ia601805.us.archive.org/2/items/the-7-habits-of-highly-effective-people-powerful-lessons-in-personal-change/The%207%20Habits%20of%20Highly%20Effective%20People%20-%20Powerful%20Lessons%20in%20Personal%20Change.pdf", color: "#fff0f5" },
];

const HALAQAT_SCHEDULE = [
    { topic: "Tafsir (Afaan Oromo)", time: "After Maghrib", day: "Monday", sheikh: "Ustaz Ahmed" },
    { topic: "Bulugh al-Maram", time: "After Isha", day: "Tuesday", sheikh: "Ustaz Mohammed" },
    { topic: "Tafsir (Amharic)", time: "After Asr", day: "Wednesday", sheikh: "Ustaz Jemal" },
    { topic: "Usul al-Fiqh", time: "Weekend Morning", day: "Saturday", sheikh: "Dr. Ibrahim" },
    { topic: "Quran Correction", time: "Daily", day: "Everyday", sheikh: "Recitation Committee" }
];

const SECTORS = [
    { id: 'daawa', name: "Da'awa Sector", icon: 'mic' },
    { id: 'academic', name: "Academic Sector", icon: 'book' },
    { id: 'info', name: "Information Sector", icon: 'info' },
    { id: 'charity', name: "Charity Sector", icon: 'heart' },
    { id: 'social', name: "Social Sector", icon: 'users' },
];

const PRAYER_TIMES = [
    { name: "Fajr", time: "05:12 AM" },
    { name: "Dhuhr", time: "12:25 PM" },
    { name: "Asr", time: "03:45 PM" },
    { name: "Maghrib", time: "06:15 PM" },
    { name: "Isha", time: "07:30 PM" },
];

// --- APP STATE (for Azkar counting) ---
// Initialize state for tracking Azkar progress. Keys are zikr text, values are current count.
const azkarState = {};

// --- INITIALIZATION ---
const translations = {
    en: {
        // Nav
        navHome: "Home",
        navAbout: "About",
        navLibrary: "Library",
        navHalaqat: "Halaqat",
        navEvents: "Events",
        navSectors: "Join Sectors",
        navSignIn: "Sign In",
        navSignUp: "Sign Up",
        // Hero
        heroTitle: "Seek Knowledge, Serve Humanity",
        heroSubtitle: "The official portal for Ethiopian Muslim students. Join circles of knowledge, participate in charity, and connect with your community.",
        heroBtnJoin: "Join the Jemea",
        heroBtnEvents: "See Upcoming Events",
        // Home Page
        upcomingEvents: "Upcoming Events & Announcements",
        eventsPlaceholder: "Featured events slider will be implemented here.",
        explorePortal: "Explore Our Portal",
        prayerTimes: "Prayer Times",
        dailyAzkar: "Daily Azkar",
        azkarMorning: "Morning",
        azkarEvening: "Evening",
        language: "Language",
    },
    ar: {
        navHome: "الرئيسية",
        navAbout: "حول",
        navLibrary: "المكتبة",
        navHalaqat: "الحلقات",
        navEvents: "الفاعاليات",
        navSectors: "انضم للقطاعات",
        navSignIn: "تسجيل الدخول",
        navSignUp: "تسجيل جديد",
        heroTitle: "اطلب العلم، اخدم الإنسانية",
        heroSubtitle: "البوابة الرسمية للطلاب المسلمين الإثيوبيين. انضم إلى حلقات العلم، وشارك في الأعمال الخيرية، وتواصل مع مجتمعك.",
        heroBtnJoin: "انضم إلى الجمعية",
        heroBtnEvents: "شاهد الفعاليات القادمة",
        upcomingEvents: "الفاعاليات والإعلانات القادمة",
        eventsPlaceholder: "سيتم تنفيذ.ToolStripItem تمرير الأحداث المميزة هنا.",
        explorePortal: "استكشف بوابتنا",
        prayerTimes: "أوقات الصلاة",
        dailyAzkar: "الأذكار اليومية",
        azkarMorning: "الصباح",
        azkarEvening: "المساء",
        language: "اللغة",
    },
    am: {
        navHome: "ዋና ገጽ",
        navAbout: "ስለ እኛ",
        navLibrary: "ห้องสมุด",
        navHalaqat: "Halaqat",
        navEvents: "ክስተቶች",
        navSectors: "ክፍልን ይቀላቀሉ",
        navSignIn: "ግባ",
        navSignUp: "ይመዝገibu",
        heroTitle: "ዕውቀትን ፈልጉ፣ ሰብአawiነትን አገልግሉ",
        heroSubtitle: "የኢትዮጵያ ሙስሊム ተማሪዎች ይፋዊ መግቢያ። የእውቀት κύκሎችን ይቀላቀሉ፣ በበጎ አድራጎት ይሳተፉ እና ከማህበረሰብዎ ጋር ይገናኙ።",
        heroBtnJoin: "ጀመዓውን ይቀላቀሉ",
        heroBtnEvents: "መጪ ክስተቶችን ይመልከቱ",
        upcomingEvents: "መጪ ክስተቶች እና ማስታወቂያዎች",
        eventsPlaceholder: "ተለይተው የቀረቡ የክስተቶች ተንሸራታች እዚህ ይተገበራል።",
        explorePortal: "ገፆቻችንን ያስሱ",
        prayerTimes: "የ铮ሎት ጊዜያት",
        dailyAzkar: "ዕለታዊ አዝካር",
        azkarMorning: "Morning",
        azkarEvening: "Evening",
        language: "ቋንቋ",
    },
    om: {
        navHome: "Fuullee",
        navAbout: "Waa'ee",
        navLibrary: "Mana Kitaabaa",
        navHalaqat: "Halaqaat",
        navEvents: "Tattaaffiiwwan",
        navSectors: "Damee Itti Makami",
        navSignIn: "Seeni",
        navSignUp: "Galmaa'i",
        heroTitle: "Beekumsa Barbaadaa, Uummata Tajaajilaa",
        heroSubtitle: "Xaroon barattoota Muslimaa Itoophiyaa kan offiziyaala. Marsaa beekumsaa irratti hirmaadhaa, tola-ooltummaatti qooda fudhadhaa, fi hawaasa keessan waliin wal qunnamaa.",
        heroBtnJoin: "Jemea'atti Makami",
        heroBtnEvents: "Tattaaffiiwwan Dhufan Ilaali",
        upcomingEvents: "Tattaaffiiwwan Dhufanii fi Beeksifoota",
        eventsPlaceholder: "Slideriin tattaaffiiwwan filatamoo asitti ni hojjetama.",
        explorePortal: "Xaroon keenya Sakatta'i",
        prayerTimes: "Yeroo Salaataa",
        dailyAzkar: "Azkaara Guyyaa",
        azkarMorning: "Ganama",
        azkarEvening: "Galagala",
        language: "Afaan",
    }
};

// Wrap functions in a self-executing anonymous function to prevent global scope pollution,
// but explicitly attach required functions to the window object for inline HTML event handlers.

(function() {
    
    // --- NAVIGATION LOGIC ---
    function navigateTo(sectionId) {
        // Hide all sections
        const sections = document.querySelectorAll('main > section');
        sections.forEach(sec => {
            sec.classList.remove('active-section');
            sec.classList.add('hidden-section');
        });

        // Show target section
        const target = document.getElementById(sectionId);
        // Handle About sub-pages logic (Mission/Vision/Object)
        if(sectionId === 'mission' || sectionId === 'vision' || sectionId === 'objectives') {
            loadAboutContent(sectionId);
            document.getElementById('about').classList.remove('hidden-section');
            document.getElementById('about').classList.add('active-section');
        } else if (target) {
            target.classList.remove('hidden-section');
            target.classList.add('active-section');
        }

        // Close sidebar if open
        document.getElementById('mobile-menu').classList.add('hidden');
        
        // Hide mobile events submenu
        const mobileEventsSubmenu = document.getElementById('mobile-events-submenu');
        if (mobileEventsSubmenu) {
            mobileEventsSubmenu.style.display = 'none';
        }
        
        // Refresh icons (sometimes needed when unhiding)
        lucide.createIcons();
        window.scrollTo(0,0);
    }

    // Function to toggle mobile events submenu
    function toggleMobileEventsSubmenu() {
        const submenu = document.getElementById('mobile-events-submenu');
        if (submenu) {
            submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
        }
    }

    function toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
    }

    // --- ACCESSIBILITY HELPERS ---
    function handleKeydown(event, action) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); // Prevent scrolling on spacebar
            action();
        }
    }

    // --- I18N & LANGUAGE SWITCHING ---
    function setLanguage(lang) {
        const html = document.documentElement;
        html.lang = lang;
        html.dir = lang === 'ar' ? 'rtl' : 'ltr';

        const elements = document.querySelectorAll('[data-i18n-key]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n-key');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Persist user's choice
        localStorage.setItem('userLanguage', lang);

        // Sync both language switchers
        document.getElementById('lang-select-nav').value = lang;
    }

    // --- DATA POPULATION ---

    function setAzkarTab(type) {
        document.getElementById('azkar-tab-morning').classList.toggle('active', type === 'morning');
        document.getElementById('azkar-tab-evening').classList.toggle('active', type === 'evening');
        populateAzkar(type);
    }

    function populateAzkar(type = 'morning') {
        const container = document.getElementById('azkar-container');
        const filteredAzkar = AZKAR_LIST.filter(zikr => zikr.type === type);

        if (filteredAzkar.length === 0) {
            container.innerHTML = `<p class="empty-state-message">No Azkar for this time.</p>`;
            return;
        }

        container.innerHTML = filteredAzkar.map((zikr, index) => {
            // Initialize state for each zikr
            const zikrId = `${zikr.text}-${zikr.type}`;
            azkarState[zikrId] = azkarState[zikrId] || 0;

            const targetCount = zikr.count > 1 ? `(${zikr.count}x)` : '';
            return `
                <div class="zikr-item" data-zikr-target="${zikr.count}" data-zikr-id="${index}" onclick="trackZikr('${zikrId}', ${zikr.count}, this)">
                    ${zikr.text.replace(targetCount, '')}
                    <span class="zikr-count">${azkarState[zikrId]} / ${zikr.count}</span>
                </div>
            `;
        }).join('');
    }
    function trackZikr(zikrId, targetCount, itemElement) {
        let currentCount = azkarState[zikrId] || 0;
        const countElement = itemElement.querySelector('.zikr-count');

        if (currentCount < targetCount) {
            currentCount++;
            azkarState[zikrId] = currentCount;
            countElement.textContent = `${currentCount} / ${zikr.count}`;
            
            // Add completion class
            if (currentCount === targetCount) {
                itemElement.classList.add('completed');
                countElement.textContent = 'Done!';
            }
        }
    }

    function populatePrayerTimes() {
        const homeList = document.getElementById('home-prayer-list');
        const eventsList = document.getElementById('events-prayer-list');
        
        const prayerHTML = PRAYER_TIMES.map(p => `<li><span>${p.name}</span> <span>${p.time}</span></li>`).join('');

        if (homeList) {
            homeList.innerHTML = prayerHTML;
        }
        if (eventsList) {
            eventsList.innerHTML = prayerHTML;
        }
    }
    function populateUniversities() {
        const select = document.getElementById('uni-select');
        ETHIOPIAN_UNIVERSITIES.forEach(uni => {
            const option = document.createElement('option');
            option.value = uni;
            option.textContent = uni;
            select.appendChild(option);
        });
    }

    // --- FORM HANDLING ---

    function setGender(gender) {
        // Update Tabs
        document.getElementById('tab-male').classList.toggle('active', gender === 'male');
        document.getElementById('tab-female').classList.toggle('active', gender === 'female');
        
        // Update Alert Box
        const alertBox = document.getElementById('gender-alert');
        alertBox.className = `alert-box ${gender}`;
        alertBox.textContent = `You are registering for the ${gender === 'male' ? "Brothers'" : "Sisters'"} Portal.`;
        
        // Update Input
        document.getElementById('gender-input').value = gender === 'male' ? 'Male' : 'Female';
    }

    function toggleUniversityField() {
        const level = document.getElementById('edu-level').value;
        const uniContainer = document.getElementById('uni-dropdown-container');
        if (level === 'University') {
            uniContainer.style.display = 'block';
        } else {
            uniContainer.style.display = 'none';
        }
    }

    // New: Handle Sign-up Form Submission
    function handleSignupSubmit(event) {
        event.preventDefault();
        const form = document.getElementById('signup-form');
        const submitButton = form.querySelector('button[type="submit"]');

        // Simple validation check
        const inputs = form.querySelectorAll('input, select');
        let isValid = true;
        inputs.forEach(input => {
            if (input.type !== 'submit' && input.type !== 'button' && input.required && !input.value) {
                isValid = false;
            }
        });

        if (!isValid) {
            // In a real app, this would show specific error messages.
            console.error("Please fill out all required fields.");
            showModal('Registration Failed', 'Please complete all required fields before submitting.', 'error');
            return;
        }

        // Simulate form processing
        submitButton.textContent = "Registering...";
        submitButton.disabled = true;

        setTimeout(() => {
            submitButton.textContent = "Register Account";
            submitButton.disabled = false;
            
            // Display success message using a modal
            showModal('Registration Successful', 'Jazak Allahu Khair! Your registration is complete. You will receive an email confirmation soon.', 'success');
            
            // Optional: Reset form
            form.reset();
        }, 1500);
    }
    
    // Helper function to show a custom modal (replacing alert())
    function showModal(title, message, type) {
        let modal = document.getElementById('custom-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'custom-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 id="modal-title"></h3>
                        <button class="close-btn" onclick="document.getElementById('custom-modal').classList.remove('active')">&times;</button>
                    </div>
                    <p id="modal-message"></p>
                    <button class="btn btn-primary" onclick="document.getElementById('custom-modal').classList.remove('active')">Close</button>
                </div>
            `;
            document.body.appendChild(modal);
        }
        
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-message').textContent = message;
        
        // Apply type-specific styling via classes
        const modalHeader = modal.querySelector('.modal-header');
        modalHeader.classList.remove('success', 'error', 'info'); // Reset classes
        if (type) {
            modalHeader.classList.add(type);
        }
        modal.classList.add('active');
    }

    // --- SECTORS HANDLING ---

    function setSectorTab(gender) {
        // Update Tabs
        document.getElementById('sector-tab-male').classList.toggle('active', gender === 'male');
        document.getElementById('sector-tab-female').classList.toggle('active', gender === 'female');
        
        // Update Button Styles inside cards (re-render)
        renderSectors(gender);
    }

    function renderSectors(gender) {
        const container = document.getElementById('sectors-grid');
        
        container.innerHTML = SECTORS.map(s => `
            <div class="sector-card ${gender}">
                <div class="sector-icon">
                    <i data-lucide="${s.icon}"></i>
                </div>
                <h3>${s.name}</h3>
                <p style="color:#666; font-size:0.9rem; margin:10px 0;">Register to volunteer for the ${gender === 'male' ? 'Brothers' : 'Sisters'} team.</p>
                <button class="btn btn-outline" onclick="showModal('Sector Application', 'You have expressed interest in the ${s.name}. We will contact you soon!', 'success')">Join Team</button>
            </div>
        `).join('');
        lucide.createIcons();
    }

    // --- LIBRARY LOGIC ---

    function filterLibrary() {
        // Get filter values from the new IDs
        const langFilter = document.getElementById('lib-lang').value;
        const mainCatFilter = document.getElementById('lib-main-cat').value;

        // Populate sub-category dropdown based on main category
        const subCatSelect = document.getElementById('lib-sub-cat');
        subCatSelect.innerHTML = '<option value="All">All Sub-Categories</option>'; // Reset

        if (mainCatFilter !== 'All') {
            const subCategories = [...new Set(BOOKS.filter(b => b.category === mainCatFilter).map(b => b.subCategory))];
            subCategories.forEach(subCat => {
                const option = document.createElement('option');
                option.value = subCat;
                option.textContent = subCat;
                subCatSelect.appendChild(option);
            });
            subCatSelect.style.display = 'inline-block';
        } else {
            subCatSelect.style.display = 'none';
        }

        const subCatFilter = subCatSelect.value;
        renderLibrary(langFilter, mainCatFilter, subCatFilter);
    }

    function renderLibrary(langFilter = 'All', mainCatFilter = 'All', subCatFilter = 'All') {
        const container = document.getElementById('library-grid');
        const subCatSelect = document.getElementById('lib-sub-cat');

        // Show/hide sub-category dropdown
        subCatSelect.style.display = mainCatFilter === 'All' ? 'none' : 'inline-block';
        
        const filtered = BOOKS.filter(book => 
            (langFilter === 'All' || book.lang === langFilter) && 
            (mainCatFilter === 'All' || book.category === mainCatFilter) &&
            (subCatFilter === 'All' || book.subCategory === subCatFilter)
        );

        if(filtered.length === 0) {
            container.innerHTML = '<p class="empty-state-message">No books found matching your filters.</p>';
            return;
        }

        container.innerHTML = filtered.map(book => `
            <div class="book-card">
                <div class="book-cover" style="background-color: ${book.color || 'var(--color-border)'}; cursor:pointer;"
                     onclick="window.open('${book.url}', '_blank')"
                     onkeydown="handleKeydown(event, () => window.open('${book.url}', '_blank'))">
                    <i data-lucide="book-open" size="48"></i>
                </div>
                <div class="book-info">
                    <!-- Display main category and subcategory for context -->
                    <div class="book-cat">${book.category} (${book.subCategory})</div>
                    <h3>${book.title}</h3>
                    <div class="book-meta">
                        <small>${book.lang}</small>
                        <button class="btn btn-small" onclick="window.open('${book.url}', '_blank')">Open Online</button>
                    </div>
                </div>
            </div>
        `).join('');
        lucide.createIcons();
    }

    // --- HALAQAT ---

    function renderHalaqat() {
        const tbody = document.getElementById('halaqat-body');
        tbody.innerHTML = HALAQAT_SCHEDULE.map(item => `
            <tr>
                <td><strong>${item.topic}</strong></td>
                <td class="halaqa-day">${item.day}</td>
                <td>${item.time}</td>
                <td>${item.sheikh}</td>
                <td><button class="btn btn-small" onclick="showModal('Halaqa Enrollment', 'You have expressed interest in the Halaqa: ${item.topic}.', 'success')">Join</button></td>
            </tr>
        `).join('');
    }

    // --- ABOUT CONTENT ---

    function loadAboutContent(type) {
        if(type === 'mission') {
            const missionContent = document.querySelector('#content-mission');
            if (missionContent) {
                missionContent.innerHTML = `
                <div class="about-image-container">
                    <img src="images/real/community/community1.jpg" alt="Community gathering" class="about-image" onerror="this.style.display='none'">
                </div>
                <p>The Muslim Student Jama’a Portal is dedicated to nurturing a united, spiritually grounded community of Muslim students across Ethiopian campuses. Our mission is to empower students intellectually, socially, and spiritually by providing authentic Islamic resources, meaningful study circles, and opportunities for service. We offer access to Qur’an and Hadith study, halaqat, and community outreach, while promoting academic excellence and Islamic values.</p>`;
            }
        } else if (type === 'vision') {
            const visionContent = document.querySelector('#content-vision');
            if (visionContent) {
                visionContent.innerHTML = `
                <div class="about-image-container">
                    <img src="images/real/events/event-bg.jpg" alt="Future vision" class="about-image" onerror="this.style.display='none'">
                </div>
                <p>We envision a future in which Muslim students in Ethiopia are deeply rooted in their faith, confident in their identity, and equipped to serve as compassionate and principled leaders. Through this portal, we aim to inspire a generation that balances Islamic knowledge with academic achievement, builds strong bonds across campuses, and contributes positively to society in line with Islamic ethics.</p>`;
            }
        } else {
            const objectivesContent = document.querySelector('#content-objectives');
            if (objectivesContent) {
                objectivesContent.innerHTML = `
                <div class="about-image-container">
                    <img src="images/real/study/study1.jpg" alt="Study session" class="about-image" onerror="this.style.display='none'">
                </div>
                <ul>
                <li><strong>Promote Da’wah and Spiritual Development:</strong> Facilitate halaqat (study circles) on Qur’an, Tafsir, Fiqh, and other Islamic sciences. Encourage peer-led learning, mentorship, and outreach.</li>
                <li><strong>Support Academic Growth:</strong> Provide resources and peer networks to help students integrate faith and scholarship. Encourage mentoring, study groups, and academic projects rooted in Islamic values.</li>
                <li><strong>Deliver Islamic Education:</strong> Create a digital Library containing Qur’an, Hadith, Tafsir, and Sirah in multiple languages (Afaan Oromo, Amharic, English, Arabic). Develop structured learning opportunities (halaqat, lecture series, study materials).</li>
                <li><strong>Strengthen Community Engagement:</strong> Build a safe, inclusive space for students to connect, share, and grow together. Organize events, discussions, and collaborative activities to enhance social unity.</li>
                </ul>`;
            }
        }
        
        // Refresh icons after content update
        lucide.createIcons();
    }
    
    // Function to handle about section tab switching
    function showAboutTab(tabName) {
        // Hide all content sections
        const contentSections = document.querySelectorAll('.about-content');
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show the selected content section
        const targetContent = document.getElementById(`content-${tabName}`);
        if (targetContent) {
            targetContent.classList.add('active');
        }
        
        // Remove active class from all tabs
        const tabs = document.querySelectorAll('.about-tab');
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Add active class to the clicked tab
        const activeTab = document.getElementById(`tab-${tabName}`);
        if (activeTab) {
            activeTab.classList.add('active');
        }
        
        // Load content for the selected tab
        loadAboutContent(tabName);
    }
    
    // --- BANNER ROTATOR ---
    function initBannerRotator() {
        const quotes = document.querySelectorAll('.banner-quote');
        if (quotes.length === 0) return;

        let currentQuoteIndex = 0;

        setInterval(() => {
            // Remove active class from current quote
            quotes[currentQuoteIndex].classList.remove('active');

            // Get next quote index
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;

            // Add active class to next quote
            quotes[currentQuoteIndex].classList.add('active');
        }, 7000); // Change quote every 7 seconds
    }

    // --- UPCOMING EVENTS ---
    function renderUpcomingEvents(containerId = 'events-slider-placeholder') {
        const container = document.getElementById(containerId);
        
        if (!container) return;
        
        if (UPCOMING_EVENTS.length === 0) {
            container.innerHTML = '<p>No upcoming events at this time. Please check back later.</p>';
            return;
        }
        
        // Sort events by date
        const sortedEvents = [...UPCOMING_EVENTS].sort((a, b) => new Date(a.date) - new Date(b.date));
        
        container.innerHTML = `
            <div class="events-slider">
                ${sortedEvents.map(event => `
                    <div class="event-card">
                        <div class="event-date">
                            <div class="event-day">${new Date(event.date).getDate()}</div>
                            <div class="event-month">${new Date(event.date).toLocaleString('default', { month: 'short' })}</div>
                        </div>
                        <div class="event-details">
                            <h4>${event.title}</h4>
                            <p class="event-time"><i data-lucide="clock"></i> ${event.time}</p>
                            <p class="event-location"><i data-lucide="map-pin"></i> ${event.location}</p>
                            <p class="event-description">${event.description}</p>
                        </div>
                        ${event.image ? `<div class="event-image">
                            <img src="${event.image}" alt="${event.title}" onerror="this.style.display='none'">
                        </div>` : ''}
                    </div>
                `).join('')}
            </div>
        `;
        
        // Refresh icons
        lucide.createIcons();
    }

    // --- EVENTS DROPDOWN ---
    function renderEventsDropdown() {
        const dropdown = document.getElementById('events-dropdown');
        const mobileSubmenu = document.getElementById('mobile-events-submenu');
        
        if (!dropdown || !mobileSubmenu) return;
        
        // Get next 3 upcoming events
        const sortedEvents = [...UPCOMING_EVENTS].sort((a, b) => new Date(a.date) - new Date(b.date));
        const nextEvents = sortedEvents.slice(0, 3);
        
        if (nextEvents.length === 0) {
            dropdown.innerHTML = '<a href="#" onclick="navigateTo(\'events\')">No upcoming events</a>';
            mobileSubmenu.innerHTML = '<a href="#" onclick="navigateTo(\'events\')">No upcoming events</a>';
            return;
        }
        
        // Desktop dropdown
        dropdown.innerHTML = nextEvents.map(event => `
            <a href="#" onclick="navigateTo('events'); return false;">
                <div style="padding: 8px 16px; border-bottom: 1px solid var(--color-border);">
                    <div style="font-weight: 600; font-size: 14px;">${event.title}</div>
                    <div style="font-size: 12px; color: var(--color-text-light); margin-top: 4px;">
                        ${new Date(event.date).toLocaleDateString()} at ${event.time}
                    </div>
                </div>
            </a>
        `).join('') + `<a href="#" onclick="navigateTo('events')" style="text-align: center; padding: 8px; font-weight: 600; color: var(--color-primary);">View All Events</a>`;
        
        // Mobile submenu
        mobileSubmenu.innerHTML = nextEvents.map(event => `
            <a href="#" onclick="navigateTo('events'); return false;">
                <div style="padding: 8px 0; font-size: 14px;">
                    <div style="font-weight: 600;">${event.title}</div>
                    <div style="font-size: 12px; color: var(--color-text-light); margin-top: 2px;">
                        ${new Date(event.date).toLocaleDateString()} at ${event.time}
                    </div>
                </div>
            </a>
        `).join('');
    }

    // --- EVENTS SECTION ---
    function renderEventsSection() {
        // This function will populate the events section with upcoming events
        const eventsSection = document.getElementById('events');
        if (!eventsSection) return;
        
        // Create a container for upcoming events
        const upcomingEventsContainer = document.createElement('div');
        upcomingEventsContainer.className = 'card';
        upcomingEventsContainer.innerHTML = `
            <div class="card-header">
                <h3>Upcoming Events</h3>
            </div>
            <div class="events-list">
                ${UPCOMING_EVENTS.map(event => `
                    <div class="event-item">
                        <div class="event-item-date">
                            <strong>${new Date(event.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</strong>
                            <small>${event.time}</small>
                        </div>
                        <div class="event-item-details">
                            <h4>${event.title}</h4>
                            <p>${event.description}</p>
                            <div class="event-meta">
                                <span><i data-lucide="map-pin"></i> ${event.location}</span>
                            </div>
                            ${event.image ? `<div class="event-item-image">
                                <img src="${event.image}" alt="${event.title}" onerror="this.style.display='none'">
                            </div>` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        
        // Insert after the prayer times card
        const prayerCard = eventsSection.querySelector('.prayer-card');
        if (prayerCard) {
            prayerCard.after(upcomingEventsContainer);
        } else {
            eventsSection.appendChild(upcomingEventsContainer);
        }
        
        // Refresh icons
        lucide.createIcons();
    }

    // --- INITIAL EXECUTION ---
    
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Icons
    lucide.createIcons();
    
    // Populate Initial Data
    initBannerRotator(); // Start the banner
    populateAzkar('morning'); // Default to morning
    populatePrayerTimes();
    populateUniversities();
    renderLibrary(); // Initial render with 'All'
    renderHalaqat();
    renderSectors('male'); // Default to male sectors
    
    // Render upcoming events in home section
    renderUpcomingEvents('events-slider-placeholder');
    
    // Render events in events section
    renderEventsSection();
    
    // Render events dropdown in navigation
    renderEventsDropdown();
    
    // Attach form submission listener
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignupSubmit);
    }
    
    // Set language from local storage or default to 'en'
    const userLang = localStorage.getItem('userLanguage') || 'en';
    document.getElementById('lang-select-nav').value = userLang;
    setLanguage(userLang);

    // Handle initial hash routing or default to home
    navigateTo('home');
});

    // Function to handle map loading errors
    function handleMapError() {
        const mapFallback = document.getElementById('map-fallback');
        if (mapFallback) {
            mapFallback.style.display = 'block';
        }
    }
    
    // Initialize map error handling
    function initMapHandling() {
        const mapIframe = document.querySelector('.map-container iframe');
        if (mapIframe) {
            mapIframe.addEventListener('error', handleMapError);
        }
    }
    
    // Call initMapHandling when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        initMapHandling();
    });
    
    // --- Expose functions to the global scope for inline HTML event handlers ---
    window.setLanguage = setLanguage;
    window.navigateTo = navigateTo;
    window.toggleMobileMenu = toggleMobileMenu;
    window.handleKeydown = handleKeydown; // Expose for accessibility
    window.setGender = setGender;
    window.toggleUniversityField = toggleUniversityField;
    window.setSectorTab = setSectorTab;
    window.filterLibrary = filterLibrary;
    window.trackZikr = trackZikr; // New exposed function
    window.setAzkarTab = setAzkarTab;
    window.showModal = showModal; // New exposed function
    window.toggleMobileEventsSubmenu = toggleMobileEventsSubmenu; // New exposed function
    window.showAboutTab = showAboutTab; // Expose about tab function
    window.handleMapError = handleMapError; // Expose map error function

})(); // End of self-executing function

                                        
