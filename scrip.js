
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

// UPDATED: New structure uses 'category' for main filter and 'subCategory' for detail
const BOOKS = [
    // SHARIA CATEGORY
    { id: 1, title: "The Noble Quran", category: "Sharia", subCategory: "Quran", lang: "Arabic", url: "https://www.muslim-library.com/dl/books/ar0101.pdf", color: "#d1fae5" },
    { id: 2, title: "Riyad as-Salihin", category: "Sharia", subCategory: "Hadith", lang: "English", url: "https://ia803100.us.archive.org/10/items/riyad-us-saliheen-dar-us-salam-saudi-arabia/Riyad-us-Saliheen-Dar-us-Salam-Saudi-Arabia.pdf", color: "#dbeafe" },
    { id: 3, title: "Tafsiira Quraanaa", category: "Sharia", subCategory: "Tafsir", lang: "Afaan Oromo", url: "https://ia802908.us.archive.org/21/items/tafsiira-quraanaa-afaan-oromootiin/Tafsiira%20Quraanaa%20Afaan%20Oromootiin.pdf", color: "#ffedd5" },
    { id: 4, title: "Ar Raheeq Al Makhtum", category: "Sharia", subCategory: "Seerah", lang: "English", url: "https://ia801902.us.archive.org/14/items/the-sealed-nectar-ar-raheeq-al-makhtum/The-Sealed-Nectar-Ar-Raheeq-Al-Makhtum.pdf", color: "#dcfce7" },
    { id: 5, title: "Fiqh As-Sunnah", category: "Sharia", subCategory: "Fiqh", lang: "Arabic", url: "https://ia802300.us.archive.org/2/items/FP11023/11023.pdf", color: "#fef9c3" },
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
        navEvents: "الفعاليات",
        navSectors: "انضم للقطاعات",
        navSignIn: "تسجيل الدخول",
        navSignUp: "تسجيل جديد",
        heroTitle: "اطلب العلم، اخدم الإنسانية",
        heroSubtitle: "البوابة الرسمية للطلاب المسلمين الإثيوبيين. انضم إلى حلقات العلم، وشارك في الأعمال الخيرية، وتواصل مع مجتمعك.",
        heroBtnJoin: "انضم إلى الجمعية",
        heroBtnEvents: "شاهد الفعاليات القادمة",
        upcomingEvents: "الفعاليات والإعلانات القادمة",
        eventsPlaceholder: "سيتم تنفيذแถบ تمرير الأحداث المميزة هنا.",
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
        navSignUp: "ይመዝገቡ",
        heroTitle: "ዕውቀትን ፈልጉ፣ ሰብአዊነትን አገልግሉ",
        heroSubtitle: "የኢትዮጵያ ሙስሊም ተማሪዎች ይፋዊ መግቢያ። የእውቀት κύκሎችን ይቀላቀሉ፣ በበጎ አድራጎት ይሳተፉ እና ከማህበረሰብዎ ጋር ይገናኙ።",
        heroBtnJoin: "ጀመዓውን ይቀላቀሉ",
        heroBtnEvents: "መጪ ክስተቶችን ይመልከቱ",
        upcomingEvents: "መጪ ክስተቶች እና ማስታወቂያዎች",
        eventsPlaceholder: "ተለይተው የቀረቡ የክስተቶች ተንሸራታች እዚህ ይተገበራል።",
        explorePortal: "порталаችንን ያስሱ",
        prayerTimes: "የጸሎት ጊዜያት",
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
        
        // Refresh icons (sometimes needed when unhiding)
        lucide.createIcons();
        window.scrollTo(0,0);
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
            countElement.textContent = `${currentCount} / ${targetCount}`;
            
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
        const title = document.getElementById('about-title');
        const content = document.getElementById('about-content');
        
        if(type === 'mission') {
            title.innerText = "Our Mission";
            content.innerHTML = "<p>The Muslim Student Jama’a Portal is dedicated to nurturing a united, spiritually grounded community of Muslim students across Ethiopian campuses. Our mission is to empower students intellectually, socially, and spiritually by providing authentic Islamic resources, meaningful study circles, and opportunities for service. We offer access to Qur’an and Hadith study, halaqat, and community outreach, while promoting academic excellence and Islamic values.</p>";
        } else if (type === 'vision') {
            title.innerText = "Our Vision";
            content.innerHTML = "<p>We envision a future in which Muslim students in Ethiopia are deeply rooted in their faith, confident in their identity, and equipped to serve as compassionate and principled leaders. Through this portal, we aim to inspire a generation that balances Islamic knowledge with academic achievement, builds strong bonds across campuses, and contributes positively to society in line with Islamic ethics.</p>";
        } else {
            title.innerText = "Our Objectives";
            content.innerHTML = `
            <h3>Promote Da’wah and Spiritual Development</h3>
            <ul>
                <li>Facilitate halaqat (study circles) on Qur’an, Tafsir, Fiqh, and other Islamic sciences.</li>
                <li>Encourage peer-led learning, mentorship, and outreach.</li>
            </ul>
            <h3>Support Academic Growth</h3>
            <ul>
                <li>Provide resources and peer networks to help students integrate faith and scholarship.</li>
                <li>Encourage mentoring, study groups, and academic projects rooted in Islamic values.</li>
            </ul>
            <h3>Deliver Islamic Education</h3>
            <ul>
                <li>Create a digital Library containing Qur’an, Hadith, Tafsir, and Sirah in multiple languages (Afaan Oromo, Amharic, English, Arabic).</li>
                <li>Develop structured learning opportunities (halaqat, lecture series, study materials).</li>
            </ul>
            <h3>Strengthen Community Engagement</h3>
            <ul>
                <li>Build a safe, inclusive space for students to connect, share, and grow together.</li>
                <li>Organize events, discussions, and collaborative activities to enhance social unity.</li>
            </ul>`;
        }
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


})(); // End of self-executing function
=======
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

const BOOKS = [
    // SHARIA CATEGORY
    { id: 1, title: "The Noble Quran", category: "Sharia", subCategory: "Quran", lang: "Arabic", url: "pdfs/The Noble Quran.pdf", color: "#d1fae5" },
    { id: 2, title: "Riyad as-Salihin", category: "Sharia", subCategory: "Hadith", lang: "English", url: "pdfs/Riyad as-Salihin.pdf", color: "#dbeafe" },
    { id: 3, title: "Tafsiira Quraanaa", category: "Sharia", subCategory: "Tafsir", lang: "Afaan Oromo", url: "pdfs/Tafsiira Quraanaa.pdf", color: "#ffedd5" },
    { id: 4, title: "Ar Raheeq Al Makhtum", category: "Sharia", subCategory: "Seerah", lang: "English", url: "pdfs/Ar Raheeq Al Makhtum.pdf", color: "#dcfce7" },
    { id: 5, title: "Fiqh As-Sunnah", category: "Sharia", subCategory: "Fiqh", lang: "Arabic", url: "pdfs/Fiqh As-Sunnah.pdf", color: "#fef9c3" },
    { id: 10, title: "Amharic Fiqh Notes", category: "Sharia", subCategory: "Fiqh", lang: "Amharic", url: "pdfs/Amharic Fiqh Notes.pdf", color: "#ffe4e6" },

    // ACADEMIC CATEGORY
    { id: 6, title: "Differential Equations Module", category: "Academic", subCategory: "Module", lang: "English", url: "pdfs/Differential Equations Module.pdf", color: "#f3e8ff" },
    { id: 7, title: "CS Entrance Exam 2023", category: "Academic", subCategory: "Exam", lang: "English", url: "pdfs/CS Entrance Exam 2023.pdf", color: "#f3f4f6" },
    { id: 11, title: "Physics 101 PPT Slides", category: "Academic", subCategory: "PPT", lang: "English", url: "pdfs/Physics 101 PPT Slides.pdf", color: "#fae8ff" },
    { id: 12, title: "Intro to Economics Reference", category: "Academic", subCategory: "Reference", lang: "English", url: "pdfs/Intro to Economics Reference.pdf", color: "#e0f2f1" },

    // GENERAL KNOWLEDGE CATEGORY
    { id: 8, title: "Psychology of Learning", category: "General Knowledge", subCategory: "Psychology", lang: "English", url: "pdfs/Psychology of Learning.pdf", color: "#fee2e2" },
    { id: 9, title: "7 Habits Summary", category: "General Knowledge", subCategory: "Self Development", lang: "English", url: "pdfs/7 Habits Summary.pdf", color: "#fff0f5" },
];

const HALAQAT_SCHEDULE = [
    { topic: "Tafsir (Afaan Oromo)", time: "After Maghrib", day: "Monday", sheikh: "Ustaz Ahmed" },
    { topic: "Bulugh al-Maram", time: "After Isha", day: "Tuesday", sheikh: "Ustaz Mohammed" },
    { topic: "Tafsir (Amharic)", time: "After Asr", day: "Wednesday", sheikh: "Ustaz Nuru" },
    { topic: "Arba'in", time: "Weekend Morning", day: "Saturday", sheikh: "Ustaz Ibrahim" },
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
        // About Page
        aboutTitle: "About Us",
        aboutTabMission: "Our Mission",
        aboutTabVision: "Our Vision",
        aboutTabObjectives: "Our Objectives",
        aboutMissionText: "The Muslim Student Jama’a Portal is dedicated to nurturing a united, spiritually grounded community of Muslim students across Ethiopian campuses. Our mission is to empower students intellectually, socially, and spiritually by providing authentic Islamic resources, meaningful study circles, and opportunities for service. We offer access to Qur’an and Hadith study, halaqat, and community outreach, while promoting academic excellence and Islamic values.",
        aboutVisionText: "We envision a future where we have built a thriving community of Muslim scholars and leaders, deeply rooted in their faith and making positive contributions to society in line with Islamic ethics.",
        aboutObjectivesList: "<li>Promote Da’wah and spiritual development through study circles and outreach.</li><li>Support academic growth by helping students integrate faith and scholarship.</li><li>Deliver authentic Islamic education via a digital library and structured learning.</li><li>Strengthen community engagement by building a safe, inclusive digital space for students.</li>"
    },
    ar: {
        navHome: "الرئيسية",
        navAbout: "حول",
        navLibrary: "المكتبة",
        navHalaqat: "الحلقات",
        navEvents: "الفعاليات",
        navSectors: "انضم للقطاعات",
        navSignIn: "تسجيل الدخول",
        navSignUp: "تسجيل جديد",
        heroTitle: "اطلب العلم، اخدم الإنسانية",
        heroSubtitle: "البوابة الرسمية للطلاب المسلمين الإثيوبيين. انضم إلى حلقات العلم، وشارك في الأعمال الخيرية، وتواصل مع مجتمعك.",
        heroBtnJoin: "انضم إلى الجمعية",
        heroBtnEvents: "شاهد الفعاليات القادمة",
        upcomingEvents: "الفعاليات والإعلانات القادمة",
        eventsPlaceholder: "سيتم تنفيذแถบ تمرير الأحداث المميزة هنا.",
        explorePortal: "استكشف بوابتنا",
        prayerTimes: "أوقات الصلاة",
        dailyAzkar: "الأذكار اليومية",
        azkarMorning: "الصباح",
        azkarEvening: "المساء",
        language: "اللغة",
        // About Page
        aboutTitle: "من نحن",
        aboutTabMission: "مهمتنا",
        aboutTabVision: "رؤيتنا",
        aboutTabObjectives: "أهدافنا",
        aboutMissionText: "بوابة جماعة الطلاب المسلمين مكرسة لرعاية مجتمع موحد وراسخ روحياً من الطلاب المسلمين في الجامعات الإثيوبية. مهمتنا هي تمكين الطلاب فكرياً واجتماعياً وروحياً من خلال توفير الموارد الإسلامية الأصيلة وحلقات الدراسة الهادفة وفرص الخدمة. نحن نوفر الوصول إلى دراسة القرآن والحديث، الحلقات، والتواصل المجتمعي، مع تعزيز التميز الأكاديمي والقيم الإسلامية.",
        aboutVisionText: "نتصور مستقبلاً حيث نبني مجتمعًا مزدهرًا من العلماء والقادة المسلمين، متجذرين بعمق في عقيدتهم ويقدمون مساهمات إيجابية للمجتمع تتماشى مع الأخلاق الإسلامية.",
        aboutObjectivesList: "<li>تعزيز الدعوة والتنمية الروحية من خلال حلقات الدراسة والتواصل.</li><li>دعم النمو الأكاديمي من خلال مساعدة الطلاب على دمج الإيمان والمنح الدراسية.</li><li>تقديم التعليم الإسلامي الأصيل عبر مكتبة رقمية وتعلم منظم.</li><li>تعزيز المشاركة المجتمعية من خلال بناء مساحة رقمية آمنة وشاملة للطلاب.</li>"
    },
    am: {
        navHome: "ዋና ገጽ",
        navAbout: "ስለ እኛ",
        navLibrary: "ห้องสมุด",
        navHalaqat: "Halaqat",
        navEvents: "ክስተቶች",
        navSectors: "ክፍልን ይቀላቀሉ",
        navSignIn: "ግባ",
        navSignUp: "ይመዝገቡ",
        heroTitle: "ዕውቀትን ፈልጉ፣ ሰብአዊነትን አገልግሉ",
        heroSubtitle: "የኢትዮጵያ ሙስሊም ተማሪዎች ይፋዊ መግቢያ። የእውቀት ክበቦችን ይቀላቀሉ፣ በበጎ አድራጎት ይሳተፉ እና ከማህበረሰብዎ ጋር ይገናኙ።",
        heroBtnJoin: "ጀመዓውን ይቀላቀሉ",
        heroBtnEvents: "መጪ ክስተቶችን ይመልከቱ",
        upcomingEvents: "መጪ ክስተቶች እና ማስታወቂያዎች",
        eventsPlaceholder: "ተለይተው የቀረቡ የክስተቶች ተንሸራታች እዚህ ይተገበራል።",
        explorePortal: "порталаችንን ያስሱ",
        prayerTimes: "የጸሎት ጊዜያት",
        dailyAzkar: "ዕለታዊ አዝካር",
        azkarMorning: "ጠዋት",
        azkarEvening: "ምሽት",
        language: "ቋንቋ",
        // About Page
        aboutTitle: "ስለ እኛ",
        aboutTabMission: "ተልዕኳችን",
        aboutTabVision: "ራዕያችን",
        aboutTabObjectives: "አላማዎቻችን",
        aboutMissionText: "የሙስሊም ተማሪዎች ጀመዓ ፖርታል በኢትዮጵያ ካምፓሶች ውስጥ የተባበረ፣ በመንፈሳዊ የጸና የሙስሊም ተማሪዎች ማህበረሰብን ለማፍራት ቁርጠኛ ነው። ተልእኳችን ትክክለኛ ኢስላማዊ ሀብቶችን፣ ትርጉም ያለው የጥናት ክበቦችን እና የአገልግሎት እድሎችን በመስጠት ተማሪዎችን በእውቀት، በማህበራዊ እና በመንፈሳዊ ማብቃት ነው።",
        aboutVisionText: "በእምነታቸው ውስጥ በጥልቅ የሰፈሩ እና ለህብረተሰቡ አወንታዊ አስተዋፅዖ የሚያደርጉ የበለጸጉ የሙስሊም ምሁራን እና መሪዎች ማህበረሰብን የምንገነባበትን የወደፊት ጊዜ እንገምታለን።",
        aboutObjectivesList: "<li>በጥናት ክበቦች እና ግንኙነቶች አማካኝነት ዳዕዋን እና መንፈሳዊ እድገትን ማሳደግ።</li><li>ተማሪዎች እምነትን እና ትምህርትን እንዲያዋህዱ በመርዳት የአካዳሚክ እድገትን መደገፍ።</li><li>በዲጂታል ላይብረሪ እና በተደራጀ ትምህርት ትክክለኛ ኢስላማዊ ትምህርት መስጠት።</li><li>ለተማሪዎች ደህንነቱ የተጠበቀ እና ሁሉን አቀፍ ዲጂታል ቦታ በመገንባት የማህበረሰብ ተሳትፎን ማጠናከር።</li>"
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
        heroSubtitle: "Poortaala ofiishaala barattoota muslimaa Itiyoophiyaati. iddoo beekumsa keessaa hammaarattan, hojii tola ooltummaa irra qooda itti fudhadhattan, hawaasa keessan waliinis itti wal qunnamtan.",
        heroBtnJoin: "Jama'atti Makami",
        heroBtnEvents: "Taateewwan Dhufan Ilaali",
        upcomingEvents: "Taatewwan Dhufanii fi Beeksisa",
        eventsPlaceholder: "Slideriin taateewwan filatamoo asitti ni hojjetama.",
        explorePortal: "Xaroon keenya Sakatta'i",
        prayerTimes: "Yeroo Salaataa",
        dailyAzkar: "Azkaara Guyyaa",
        azkarMorning: "Ganamaa",
        azkarEvening: "Galgalaa",
        language: "Afaan",
        // About Page
        aboutTitle: "Waa'ee Keenya",
        aboutTabMission: "Ergama Keenya",
        aboutTabVision: "Mul'ata Keenya",
        aboutTabObjectives: "Kaayyoo Keenya",
        aboutMissionText: "Poortaalli Jama'aa Barattoota Muslimaa Itoophiyaa keessatti  barattoota Muslimaa tokkoome, amantiidhaan cime ijaaruuf kan murteeffateedha. Ergamni keenya barattoota muslima gama barnootaan, diinagdeen, hawaasummaa fi amantaadhaan cime uumuu fi garee qo'annoo fi qorannoo hawaasaaf tajaajilaa jennuu dandahu ijaaruudha.",
        aboutVisionText: "Fuulduratti hawaasa hayyootaa fi geggeessitoota Muslimaa amantii isaaniitti cichanii fi hawaasaaf gumaacha gaarii godhan kan ijaarru ni argina.",
        aboutObjectivesList: "<li>Garee qo'annoo fi qunnamtii uumuun da'waa fi gudina amantii guddisuu.</li><li>Barattoonni amantii fi barnoota akka wal simsiisan gargaaruun gudina barnootaa deeggaruu.</li><li>Mana kitaabaa dijitaalaa fi barnoota qindaa'een barnoota Islaamaa dhugaa kennuu.</li><li>Barattootaaf iddoo dijitaalaa nageenya qabuu fi hunda hammate ijaaruun hirmaannaa hawaasaa cimsuu.</li>"
    }
};

(function() {
    // --- PDF Viewer State ---
    const pdfState = {
        pdfDoc: null,
        pageNum: 1,
        pageRendering: false,
        pageNumPending: null,
        scale: 1.2,
        pdfUrl: ''
    };

    // --- DOM Elements ---
    // Defer querying PDF viewer elements until needed to avoid errors when the viewer
    // markup is not present on the page.
    let pdfViewer = null;
    let pdfCanvas = null;
    let pdfCtx = null;
    let pageNumInput = null;
    let pageCountSpan = null;
    let thumbnailContainer = null;

    // --- PDF Viewer Core Functions ---
    function renderPage(num) {
        if (!pdfState.pdfDoc || !pdfCanvas || !pdfCtx) return;
        pdfState.pageRendering = true;
        pdfState.pdfDoc.getPage(num).then(function(page) {
            const viewport = page.getViewport({ scale: pdfState.scale });
            pdfCanvas.height = viewport.height;
            pdfCanvas.width = viewport.width;

            const renderContext = {
                canvasContext: pdfCtx,
                viewport: viewport
            };
            const renderTask = page.render(renderContext);

            renderTask.promise.then(function() {
                pdfState.pageRendering = false;
                if (pdfState.pageNumPending !== null) {
                    renderPage(pdfState.pageNumPending);
                    pdfState.pageNumPending = null;
                }
                if (pageNumInput) pageNumInput.value = num;
                updateThumbnailSelection();
            });
        });
    }

    function queueRenderPage() {
        if (pdfState.pageRendering) {
            pdfState.pageNumPending = pdfState.pageNum;
        } else {
            renderPage(pdfState.pageNum);
        }
    }

    async function loadPdf(url) {
        try {
        // Ensure PDF-related DOM elements are available before proceeding.
        pdfViewer = pdfViewer || document.getElementById('pdf-viewer');
        pdfCanvas = pdfCanvas || document.getElementById('pdf-canvas');
        pdfCtx = (pdfCanvas && pdfCanvas.getContext) ? pdfCanvas.getContext('2d') : null;
        pageNumInput = pageNumInput || document.getElementById('page-num-input');
        pageCountSpan = pageCountSpan || document.getElementById('page-count');
        thumbnailContainer = thumbnailContainer || document.getElementById('thumbnail-container');

        const { pdfjsLib } = globalThis;
        pdfjsLib.GlobalWorkerOptions.workerSrc = `pdfjs/build/pdf.worker.mjs`;
        const loadingTask = pdfjsLib.getDocument(url);
        pdfState.pdfDoc = await loadingTask.promise;
        pdfState.pageNum = 1;
        pdfState.pdfUrl = url;

        const downloadLink = document.getElementById('download-pdf');
        if (downloadLink) {
            downloadLink.href = url;
            downloadLink.setAttribute('download', url.split('/').pop());
        }

        if (pdfViewer) pdfViewer.classList.remove('hidden-section');
        if (pageCountSpan) pageCountSpan.textContent = pdfState.pdfDoc.numPages;
        if (pageNumInput) pageNumInput.max = pdfState.pdfDoc.numPages;

        renderPage(pdfState.pageNum);
        await generateThumbnails();

        document.addEventListener('keydown', handleKeyPress);

        } catch (error) {
            console.error('Error loading PDF:', error);
            showModal('Error', 'Failed to load PDF. Please check the file path and ensure the file is not corrupted.', 'error');
        }
    }

    async function generateThumbnails() {
        if (!thumbnailContainer || !pdfState.pdfDoc) return;
        thumbnailContainer.innerHTML = ''; // Clear previous thumbnails
        for (let i = 1; i <= pdfState.pdfDoc.numPages; i++) {
            const page = await pdfState.pdfDoc.getPage(i);
            const viewport = page.getViewport({ scale: 0.2 });
            const thumbCanvas = document.createElement('canvas');
            const thumbCtx = thumbCanvas.getContext('2d');
            thumbCanvas.height = viewport.height;
            thumbCanvas.width = viewport.width;
            thumbCanvas.classList.add('thumbnail');
            thumbCanvas.dataset.page = i;

            const renderContext = {
                canvasContext: thumbCtx,
                viewport: viewport
            };
            await page.render(renderContext).promise;

            thumbCanvas.addEventListener('click', () => handleThumbnailClick(i));
            thumbnailContainer.appendChild(thumbCanvas);
        }
        updateThumbnailSelection();
    }

    // --- PDF Viewer Event Handlers ---
    function onPrevPage() {
        if (pdfState.pageNum <= 1) return;
        pdfState.pageNum--;
        queueRenderPage();
    }

    function onNextPage() {
        if (pdfState.pageNum >= pdfState.pdfDoc.numPages) return;
        pdfState.pageNum++;
        queueRenderPage();
    }

    function zoomIn() {
        pdfState.scale += 0.2;
        renderPage(pdfState.pageNum);
    }

    function zoomOut() {
        if (pdfState.scale <= 0.4) return;
        pdfState.scale -= 0.2;
        renderPage(pdfState.pageNum);
    }

    function handlePageInputChange() {
        let num = parseInt(pageNumInput.value);
        if (num > 0 && num <= pdfState.pdfDoc.numPages) {
            pdfState.pageNum = num;
            queueRenderPage();
        } else {
            pageNumInput.value = pdfState.pageNum;
        }
    }

    function closePdfViewer() {
        if (pdfViewer) pdfViewer.classList.add('hidden-section');
        pdfState.pdfDoc = null;
        pdfState.pdfUrl = '';
        if (thumbnailContainer) thumbnailContainer.innerHTML = '';
        document.removeEventListener('keydown', handleKeyPress);
    }

    function updateThumbnailSelection() {
        document.querySelectorAll('#thumbnail-container .thumbnail').forEach((thumb, index) => {
            thumb.classList.toggle('active', index + 1 === pdfState.pageNum);
        });
    }

    function handleThumbnailClick(pageNumber) {
        pdfState.pageNum = pageNumber;
        queueRenderPage();
    }

    function handleKeyPress(e) {
        if (!pdfViewer || pdfViewer.classList.contains('hidden-section')) return;
        switch (e.key) {
            case 'ArrowRight':
                onNextPage();
                break;
            case 'ArrowLeft':
                onPrevPage();
                break;
            case 'Escape':
                closePdfViewer();
                break;
        }
    }

    function initPdfViewer() {
        const prevBtn = document.getElementById('prev-page');
        const nextBtn = document.getElementById('next-page');
        const zoomInBtn = document.getElementById('zoom-in');
        const zoomOutBtn = document.getElementById('zoom-out');
        const closeBtn = document.getElementById('close-pdf-viewer');

        if (prevBtn) prevBtn.addEventListener('click', onPrevPage);
        if (nextBtn) nextBtn.addEventListener('click', onNextPage);
        if (zoomInBtn) zoomInBtn.addEventListener('click', zoomIn);
        if (zoomOutBtn) zoomOutBtn.addEventListener('click', zoomOut);
        if (closeBtn) closeBtn.addEventListener('click', closePdfViewer);

        // Ensure pageNumInput references the current DOM element if present
        pageNumInput = pageNumInput || document.getElementById('page-num-input');
        if (pageNumInput) pageNumInput.addEventListener('change', handlePageInputChange);
    }

    // --- General App Logic ---
    function navigateTo(sectionId) {
        document.querySelectorAll('main > section').forEach(sec => {
            sec.classList.add('hidden-section');
            sec.classList.remove('active-section');
        });

        const target = document.getElementById(sectionId);
        if (['about', 'mission', 'vision', 'objectives'].includes(sectionId)) {
            const tabToShow = sectionId === 'about' ? 'mission' : sectionId;
            showAboutTab(tabToShow);
            document.getElementById('about').classList.remove('hidden-section');
            document.getElementById('about').classList.add('active-section');
        } else if (target) {
            target.classList.remove('hidden-section');
            target.classList.add('active-section');
        }
        document.getElementById('mobile-menu').classList.add('hidden');
        lucide.createIcons();
        window.scrollTo(0, 0);
    }

    function toggleMobileMenu() {
        document.getElementById('mobile-menu').classList.toggle('hidden');
    }

    function handleKeydown(event, action) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            action();
        }
    }

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        document.querySelectorAll('[data-i18n-key]').forEach(el => {
            const key = el.getAttribute('data-i18n-key');
            const translation = translations[lang]?.[key];
            if (translation) {
                if (key === 'aboutObjectivesList') {
                    el.innerHTML = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });
        localStorage.setItem('userLanguage', lang);
        document.getElementById('lang-select-nav').value = lang;
    }

    function populatePrayerTimes() {
        const homeList = document.getElementById('home-prayer-list');
        const eventsList = document.getElementById('events-prayer-list');
        const prayerHTML = PRAYER_TIMES.map(p => `<li><span>${p.name}</span> <span>${p.time}</span></li>`).join('');
        if (homeList) homeList.innerHTML = prayerHTML;
        if (eventsList) eventsList.innerHTML = prayerHTML;
    }

    function renderLibrary(langFilter = 'All', mainCatFilter = 'All', subCatFilter = 'All') {
        const container = document.getElementById('library-grid');
        const filtered = BOOKS.filter(book =>
            (langFilter === 'All' || book.lang === langFilter) &&
            (mainCatFilter === 'All' || book.category === mainCatFilter) &&
            (subCatFilter === 'All' || book.subCategory === subCatFilter)
        );

        container.innerHTML = filtered.map(book => `
            <div class="library-item" onclick="loadPdf('${book.url}')" onkeydown="handleKeydown(event, () => loadPdf('${book.url}'))" role="button" tabindex="0" aria-label="Open book: ${book.title}">
                <div class="library-icon" style="background-color: ${book.color};">
                    <i data-lucide="book-open"></i>
                </div>
                <div class="library-details">
                    <h4>${book.title}</h4>
                    <p>${book.subCategory}</p>
                </div>
                <div class="library-meta">
                    <span class="meta-tag category">${book.category}</span>
                    <span class="meta-tag">${book.lang}</span>
                </div>
            </div>
        `).join('');
        lucide.createIcons();
    }
    
    function showModal(title, message, type) {
        const overlay = document.getElementById('modal-overlay');
        const modalTitle = document.getElementById('modal-title');
        const modalMessage = document.getElementById('modal-message');
        if (!overlay || !modalTitle || !modalMessage) {
            // Fallback: use alert if modal markup is missing
            try {
                alert(`${title}\n\n${message}`);
            } catch (e) {
                console.warn('Modal elements missing and alert unavailable');
            }
            return;
        }

        const modalHeader = overlay.querySelector('.modal-header');

        modalTitle.textContent = title;
        modalMessage.textContent = message;

        if (modalHeader) {
            modalHeader.classList.remove('success', 'error', 'info');
            if (type) modalHeader.classList.add(type);
        }

        overlay.classList.add('visible');
    }
    
    // --- Unchanged functions from original script ---
    function setAzkarTab(type) { document.getElementById('azkar-tab-morning').classList.toggle('active', type === 'morning'); document.getElementById('azkar-tab-evening').classList.toggle('active', type === 'evening'); populateAzkar(type); }
    function populateAzkar(type = 'morning') { const container = document.getElementById('azkar-container'); const filteredAzkar = AZKAR_LIST.filter(zikr => zikr.type === type); if (filteredAzkar.length === 0) { container.innerHTML = `<p class="empty-state-message">No Azkar for this time.</p>`; return; } container.innerHTML = filteredAzkar.map((zikr, index) => { const zikrId = `${zikr.text}-${zikr.type}`; azkarState[zikrId] = azkarState[zikrId] || 0; const targetCount = zikr.count > 1 ? `(${zikr.count}x)` : ''; return ` <div class="zikr-item" data-zikr-target="${zikr.count}" data-zikr-id="${index}" onclick="trackZikr('${zikrId}', ${zikr.count}, this)"> ${zikr.text.replace(targetCount, '')} <span class="zikr-count">${azkarState[zikrId]} / ${zikr.count}</span> </div> `; }).join(''); }
    function trackZikr(zikrId, targetCount, itemElement) { let currentCount = azkarState[zikrId] || 0; const countElement = itemElement.querySelector('.zikr-count'); if (currentCount < targetCount) { currentCount++; azkarState[zikrId] = currentCount; countElement.textContent = `${currentCount} / ${targetCount}`; if (currentCount === targetCount) { itemElement.classList.add('completed'); countElement.textContent = 'Done!'; } } }
    function populateUniversities() { const select = document.getElementById('uni-select'); ETHIOPIAN_UNIVERSITIES.forEach(uni => { const option = document.createElement('option'); option.value = uni; option.textContent = uni; select.appendChild(option); }); }
    function setGender(gender) { document.getElementById('tab-male').classList.toggle('active', gender === 'male'); document.getElementById('tab-female').classList.toggle('active', gender === 'female'); const alertBox = document.getElementById('gender-alert'); alertBox.className = `alert-box ${gender}`; alertBox.textContent = `You are registering for the ${gender === 'male' ? "Brothers'" : "Sisters'"} Portal.`; document.getElementById('gender-input').value = gender === 'male' ? 'Male' : 'Female'; }
    function toggleUniversityField() { const level = document.getElementById('edu-level').value; const uniContainer = document.getElementById('uni-dropdown-container'); if (level === 'University') { uniContainer.style.display = 'block'; } else { uniContainer.style.display = 'none'; } }
    function handleSignupSubmit(event) { event.preventDefault(); const form = document.getElementById('signup-form'); const submitButton = form.querySelector('button[type="submit"]'); let isValid = true; form.querySelectorAll('input, select').forEach(input => { if (input.type !== 'submit' && input.type !== 'button' && input.required && !input.value) { isValid = false; } }); if (!isValid) { showModal('Registration Failed', 'Please complete all required fields before submitting.', 'error'); return; } submitButton.textContent = "Registering..."; submitButton.disabled = true; setTimeout(() => { submitButton.textContent = "Register Account"; submitButton.disabled = false; showModal('Registration Successful', 'Jazak Allahu Khair! Your registration is complete. You will receive an email confirmation soon.', 'success'); form.reset(); }, 1500); }
    function setSectorTab(gender) { document.getElementById('sector-tab-male').classList.toggle('active', gender === 'male'); document.getElementById('sector-tab-female').classList.toggle('active', gender === 'female'); renderSectors(gender); }
    function renderSectors(gender) { const container = document.getElementById('sectors-grid'); container.innerHTML = SECTORS.map(s => ` <div class="sector-card ${gender}"> <h3>${s.name}</h3> <p style="color:#666; font-size:0.9rem; margin:10px 0;">Register to volunteer for the ${gender === 'male' ? 'Brothers' : 'Sisters'} team.</p> <button class="btn btn-outline" onclick="showModal('Sector Application', 'You have expressed interest in the ${s.name}. We will contact you soon!', 'success')">Join Team</button> </div> `).join(''); lucide.createIcons(); }
    function renderHalaqat() { const tbody = document.getElementById('halaqat-body'); tbody.innerHTML = HALAQAT_SCHEDULE.map(item => ` <tr> <td><strong>${item.topic}</strong></td> <td class="halaqa-day">${item.day}</td> <td>${item.time}</td> <td>${item.sheikh}</td> <td><button class="btn btn-small" onclick="showModal('Halaqa Enrollment', 'You have expressed interest in the Halaqa: ${item.topic}.', 'success')">Join</button></td> </tr> `).join(''); }
    function showAboutTab(tabName) { document.querySelectorAll('.about-tab').forEach(tab => tab.classList.remove('active')); document.querySelectorAll('.about-content').forEach(content => content.classList.remove('active')); const activeTab = document.getElementById(`tab-${tabName}`); const activeContent = document.getElementById(`content-${tabName}`); if (activeTab) activeTab.classList.add('active'); if (activeContent) activeContent.classList.add('active'); }
    function initBannerRotator() { const quotes = document.querySelectorAll('.banner-quote'); if (quotes.length === 0) return; let currentQuoteIndex = 0; setInterval(() => { quotes[currentQuoteIndex].classList.remove('active'); currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length; quotes[currentQuoteIndex].classList.add('active'); }, 7000); }
    function filterLibrary() { const langFilter = document.getElementById('lib-lang').value; const mainCatFilter = document.getElementById('lib-main-cat').value; const subCatFilter = document.getElementById('lib-sub-cat').value; renderLibrary(langFilter, mainCatFilter, subCatFilter); }

    // --- DOMContentLoaded ---
    document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
        initBannerRotator();
        populateAzkar('morning');
        populatePrayerTimes();
        populateUniversities();
        renderLibrary();
        renderHalaqat();
        renderSectors('male');
        initPdfViewer();
        
        const signupForm = document.getElementById('signup-form');
        if (signupForm) {
            signupForm.addEventListener('submit', handleSignupSubmit);
        }
        
        const userLang = localStorage.getItem('userLanguage') || 'en';
        document.getElementById('lang-select-nav').value = userLang;
        setLanguage(userLang);

        const initialSection = window.location.hash.substring(1) || 'home';
        navigateTo(initialSection);

        window.addEventListener('hashchange', () => {
            navigateTo(window.location.hash.substring(1) || 'home');
        });
    });

    // --- Expose to Window ---
    window.setLanguage = setLanguage;
    window.navigateTo = navigateTo;
    window.toggleMobileMenu = toggleMobileMenu;
    window.handleKeydown = handleKeydown;
    window.setGender = setGender;
    window.toggleUniversityField = toggleUniversityField;
    window.setSectorTab = setSectorTab;
    window.filterLibrary = filterLibrary;
    window.trackZikr = trackZikr;
    window.setAzkarTab = setAzkarTab;
    window.showModal = showModal;
    window.showAboutTab = showAboutTab;
    window.loadPdf = loadPdf;

})();

