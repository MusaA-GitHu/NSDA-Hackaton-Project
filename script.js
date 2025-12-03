// script.js

document.addEventListener("DOMContentLoaded", () => {

  // ==============================
  // Page Navigation
  // ==============================
  const navOverlay = document.querySelector('.nav-overlay');
  const pages = document.querySelectorAll(".page");
  const navLinks = document.querySelectorAll("[data-target]");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  function showPage(targetId) {
    pages.forEach(page => { page.classList.remove("active-page"); page.classList.add("hidden-page"); });
    const targetPage = document.getElementById(targetId);
    if (targetPage) { targetPage.classList.add("active-page"); targetPage.classList.remove("hidden-page"); }
    if (mobileMenu) mobileMenu.classList.remove("is-open");
    if (navOverlay) navOverlay.classList.remove("is-open");
    if (mobileMenuBtn) mobileMenuBtn.setAttribute("aria-expanded", "false");
    // Re-apply language translation every time a page is shown
    setLanguage(localStorage.getItem('language') || 'en');
  }

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("data-target");
      showPage(target); // Allow navigation to all pages
    });
  });

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.contains("is-open");
      mobileMenu.classList.toggle("is-open");
      navOverlay?.classList.toggle("is-open");
      mobileMenuBtn.setAttribute("aria-expanded", String(!isOpen));
    });
    navOverlay?.addEventListener('click', () => {
        mobileMenu.classList.remove("is-open");
        navOverlay.classList.remove("is-open");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
    });
  }

  // ==============================
  // Dark Mode Toggle
  // ==============================
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const htmlElement = document.documentElement;

  const applyTheme = (theme) => {
    htmlElement.setAttribute('data-theme', theme);
    darkModeToggle?.setAttribute('aria-pressed', theme === 'dark');
    localStorage.setItem('theme', theme);
  };

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  applyTheme(initialTheme);

  darkModeToggle?.addEventListener('click', () => {
    const newTheme = htmlElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  });

  // ==============================
  // Multi-language Support
  // ==============================
  const translations = {
    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_library: "Library",
      nav_halaqat: "Halaqat",
      nav_events: "Events",
      nav_sectors: "Sectors",
      nav_join: "Join",
      nav_login: "Login",
      nav_prayer: "Prayer & Azkar",
      nav_student_portal: "Student Portal",
      nav_contact: "Contact",
      logout: "Logout",
      home_title: "Welcome to the Muslim Student Jema'a Portal",
      home_subtitle: "Your hub for prayer times, community events, Islamic learning, and student engagement.",
      home_join_button: "Join the Jema'a",
      home_events_button: "See Upcoming Events",
    },
    ar: {
      nav_home: "الرئيسية",
      nav_about: "من نحن",
      nav_library: "المكتبة",
      nav_halaqat: "الحلقات",
      nav_events: "الفعاليات",
      nav_sectors: "القطاعات",
      nav_join: "انضم",
      nav_login: "دخول",
      nav_prayer: "الصلاة والأذكار",
      nav_student_portal: "بوابة الطالب",
      nav_contact: "اتصل بنا",
      logout: "خروج",
      home_title: "مرحبا بكم في بوابة جماعة الطلاب المسلمين",
      home_subtitle: "مركزك لأوقات الصلاة، فعاليات المجتمع، التعلم الإسلامي، ومشاركة الطلاب.",
      home_join_button: "انضم للجماعة",
      home_events_button: "شاهد الفعاليات القادمة",
    },
    am: {
      nav_home: "ዋና ገጽ",
      nav_about: "ስለ እኛ",
      nav_library: "ቤተ-መጽሐፍት",
      nav_halaqat: "ሀለቃዎች",
      nav_events: "ክስተቶች",
      nav_sectors: "ዘርፎች",
      nav_join: "ይቀላቀሉ",
      nav_login: "ይግቡ",
      nav_prayer: "ሶላት እና አዝካር",
      nav_student_portal: "የተማሪዎች መግቢያ",
      nav_contact: "ያግኙን",
      logout: "ውጣ",
      home_title: "ወደ ሙስሊም ተማሪዎች ጀመዓ ፖርታል እንኳን በደህና መጡ",
      home_subtitle: "የሶላት ጊዜ፣ የማህበረሰብ ዝግጅቶች፣ ኢስላማዊ ትምህርት እና የተማሪ ተሳትፎ ማዕከልዎ።",
      home_join_button: "ጀመዓውን ይቀላቀሉ",
      home_events_button: "መጪ ዝግጅቶችን ይመልከቱ",
    },
    om: {
      nav_home: "Fuula Jalqabaa",
      nav_about: "Waa'ee Keenya",
      nav_library: "Mana Kitaabaa",
      nav_halaqat: "Halaqaa",
      nav_events: "Tattaaffiiwwan",
      nav_sectors: "Dameewwan",
      nav_join: "Dabalamaa",
      nav_login: "Seeni",
      nav_prayer: "Salaataa fi Azkaar",
      nav_student_portal: "Gola Barattootaa",
      nav_contact: "Nu Qunnamaa",
      logout: "Bahi",
      home_title: "Gara Gola Barattoota Muslimaa Jama'aatti Nagaan Dhuftan",
      home_subtitle: "Handhuura keessan yeroo salaataa, sagantaalee hawaasaa, barumsa Islaamaa fi hirmaannaa barattootaaf.",
      home_join_button: "Jama'aatti Dabalamaa",
      home_events_button: "Tattaaffiiwwan Dhufan Ilaalaa",
    },
  };

  const languageSelect = document.getElementById('language-select');

  function setLanguage(lang) {
    if (!lang || !translations[lang]) lang = 'en'; // Fallback to English
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-lang-key]').forEach(el => {
      const key = el.getAttribute('data-lang-key');
      el.textContent = translations[lang]?.[key] || translations['en'][key];
    });
    localStorage.setItem('language', lang);
  }

  languageSelect?.addEventListener('change', (e) => setLanguage(e.target.value));

  // Set initial language
  const savedLang = localStorage.getItem('language') || 'en';
  if (languageSelect) languageSelect.value = savedLang;
  setLanguage(savedLang);

  // ==============================
  // Mock Login/Auth
  // ==============================
  const loginForm = document.getElementById("login-form");
  const logoutBtn = document.getElementById("logout-btn");
  const userActionsLoggedIn = document.getElementById("user-actions-logged-in");
  const authLinks = document.querySelectorAll(".nav-auth-link");

  function updateUIForLoginState(isLoggedIn) {
    if (isLoggedIn) {
      // User is logged in
      userActionsLoggedIn.classList.remove("hidden");
      authLinks.forEach(link => link.classList.add("hidden"));
    } else {
      // User is logged out
      userActionsLoggedIn.classList.add("hidden");
      authLinks.forEach(link => link.classList.remove("hidden"));
    }
  }

  loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // --- IMPORTANT ---
    // This is a MOCK login. In a real application, you would send this
    // to a server for secure authentication. Do NOT use this in production.
    if (email === "student@msj.com" && password === "password123") {
      alert("Login successful! Welcome.");
      sessionStorage.setItem("isLoggedIn", "true"); // Use sessionStorage to keep user logged in for the session
      updateUIForLoginState(true);
      showPage("student"); // Redirect to student portal after login
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });

  logoutBtn?.addEventListener("click", () => {
    sessionStorage.removeItem("isLoggedIn");
    updateUIForLoginState(false);
    showPage("home"); // Redirect to home page after logout
    alert("You have been logged out.");
  });

  // Check login state on page load
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
  updateUIForLoginState(isLoggedIn);

  // ==============================
  // About Tabs
  // ==============================
  const aboutTabs = document.querySelectorAll(".about-tab");
  const aboutContents = document.querySelectorAll(".about-content");
  aboutTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      aboutTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const targetId = tab.getAttribute("data-tab");
      aboutContents.forEach(c => c.classList.add("hidden"));
      document.getElementById(targetId)?.classList.remove("hidden");
    });
  });

  // ==============================
  // Signup Gender & University Fields
  // ==============================
  const genderTabs = document.querySelectorAll(".gender-tab");
  const genderInput = document.getElementById("gender-input");
  const universityFields = document.getElementById("university-fields");

  genderTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      genderTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const gender = tab.getAttribute("data-gender"); // 'male' or 'female'
      if (genderInput) { // Add null check for genderInput
        genderInput.value = gender === "male" ? "Male" : "Female";
      }
    });
  });

  const educationLevel = document.getElementById("education-level");
  educationLevel?.addEventListener("change", (e) => {
    if (e.target.value === "university") {
      universityFields?.classList.remove("hidden");
    } else {
      universityFields?.classList.add("hidden");
    }
  });

  const signupForm = document.getElementById("signup-form");
  signupForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    const password = e.target.password.value;
    const confirmPassword = e.target.confirm_password.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return; // Stop the function
    }

    // In a real application, you would send this data to a server.
    // For this mock-up, we'll just show a success message.
    alert("Registration successful! This is a demo. Please log in using the test account: student@msj.com");

    // Reset the form and redirect to the login page
    signupForm.reset(); // Resetting the form
    universityFields?.classList.add("hidden"); // Also hide the university fields, with null check
    showPage('login');
  });

  // ==============================
  // Library Books Data
  // ==============================
  let books = [
    { title: "Quran", author: "Allah", language: "Arabic", description: "Holy Quran", link: "#" },
    { title: "Hadith Collection", author: "Imam Bukhari", language: "Arabic", description: "Sahih Bukhari Hadiths", link: "#" },
    { title: "Islamic History", author: "Martin Lings", language: "English", description: "Biography and history of Islam", link: "#" },
    { title: "Fiqh Basics", author: "Oromo Scholar", language: "Oromic", description: "Fundamentals of Islamic law", link: "#" },
    { title: "Amharic Islamic Guide", author: "Ethiopian Scholar", language: "Amharic", description: "Introduction to Islam", link: "#" },
    { title: "Salah Guide", author: "Islamic Scholar", language: "English", description: "Prayer guide", link: "#" },
    { title: "Arabic Grammar", author: "Al-Kitab", language: "Arabic", description: "Learn Arabic grammar", link: "#" },
    { title: "Islamic Ethics", author: "Muslim Thinker", language: "English", description: "Manners and ethics in Islam", link: "#" },
    { title: "Oromo Islamic Stories", author: "Oromo Author", language: "Oromic", description: "Stories and teachings", link: "#" },
    { title: "Amharic Quran Translation", author: "Amharic Scholar", language: "Amharic", description: "Quran translation in Amharic", link: "#" },
    // --- 50 New Books Below ---
    { title: "The Sealed Nectar", author: "Safiu-Rahman Mubarakpuri", language: "English", description: "Biography of Prophet Muhammad (PBUH)", link: "#" },
    { title: "Riyad-us Saliheen", author: "Imam An-Nawawi", language: "English", description: "Gardens of the Righteous - Hadith Collection", link: "#" },
    { title: "Don't Be Sad", author: "Aaidh ibn Abdullah al-Qarni", language: "English", description: "Inspirational Islamic self-help book", link: "#" },
    { title: "Towards Understanding Islam", author: "Abul A'la Maududi", language: "English", description: "Comprehensive introduction to Islam", link: "#" },
    { title: "Islam and the Modern World", author: "Various", language: "English", description: "Essays on contemporary Islamic issues", link: "#" },
    { title: "The Quran: A New Translation", author: "M.A.S. Abdel Haleem", language: "English", description: "Modern English translation of the Quran", link: "#" },
    { title: "Al-Adab Al-Mufrad", author: "Imam Bukhari", language: "English", description: "Book on Islamic manners and morals", link: "#" },
    { title: "Purification of the Heart", author: "Hamza Yusuf", language: "English", description: "Spiritual insights from Imam al-Mawlud's poem", link: "#" },
    { title: "Inner Dimensions of Islamic Worship", author: "Imam Al-Ghazali", language: "English", description: "Understanding the spiritual aspects of worship", link: "#" },
    { title: "The Productive Muslim", author: "Mohammed Faris", language: "English", description: "Practical guide to productivity in Islam", link: "#" },
    { title: "Arabic for Beginners", author: "Various", language: "English", description: "Basic Arabic language learning", link: "#" },
    { title: "Learn Arabic in 30 Days", author: "Arabic Language Institute", language: "English", description: "Quick guide to conversational Arabic", link: "#" },
    { title: "Oromo Grammar Guide", author: "Oromo Linguist", language: "Oromic", description: "Comprehensive Oromo grammar rules", link: "#" },
    { title: "Seenaa Islaamaa", author: "Oromo Historian", language: "Oromic", description: "Islamic history in Oromic", link: "#" },
    { title: "Qur'aana Hiikkaa Afaan Oromoo", author: "Oromo Translators", language: "Oromic", description: "Quran translation in Oromic", link: "#" },
    { title: "Amharic Fiqh", author: "Amharic Ulema", language: "Amharic", description: "Islamic jurisprudence in Amharic", link: "#" },
    { title: "Hadisoch", author: "Amharic Scholar", language: "Amharic", description: "Collection of Hadith in Amharic", link: "#" },
    { title: "Tarikh al-Islam", author: "Various", language: "Arabic", description: "Comprehensive Islamic History", link: "#" },
    { title: "Fatawa Islamiyyah", author: "Various Scholars", language: "Arabic", description: "Collection of Islamic Rulings", link: "#" },
    { title: "Tafsir Ibn Kathir", author: "Imam Ibn Kathir", language: "Arabic", description: "Exegesis of the Holy Quran", link: "#" },
    { title: "Al-Muwatta", author: "Imam Malik", language: "Arabic", description: "Early Hadith and Fiqh compilation", link: "#" },
    { title: "Kitab al-Umm", author: "Imam Shafi'i", language: "Arabic", description: "Foundational work of Shafi'i Fiqh", link: "#" },
    { title: "Al-Risala", author: "Imam Shafi'i", language: "Arabic", description: "Treatise on the principles of Islamic jurisprudence", link: "#" },
    { title: "Sahih Muslim", author: "Imam Muslim", language: "Arabic", description: "Authentic Hadith Collection", link: "#" },
    { title: "Sunan Abu Dawud", author: "Imam Abu Dawud", language: "Arabic", description: "Hadith Collection focusing on legal traditions", link: "#" },
    { title: "Jami' at-Tirmidhi", author: "Imam at-Tirmidhi", language: "Arabic", description: "Hadith Collection with legal and ethical content", link: "#" },
    { title: "Sunan an-Nasa'i", author: "Imam an-Nasa'i", language: "Arabic", description: "Hadith Collection", link: "#" },
    { title: "Sunan Ibn Majah", author: "Imam Ibn Majah", language: "Arabic", description: "Hadith Collection", link: "#" },
    { title: "Al-Ghunyah li-Talibi Tariq al-Haqq", author: "Abdul Qadir Gilani", language: "Arabic", description: "Sufi treatise on spiritual path", link: "#" },
    { title: "Ihya' 'Ulum al-Din", author: "Imam Al-Ghazali", language: "Arabic", description: "Revival of the Religious Sciences", link: "#" },
    { title: "Minhaj al-Qasidin", author: "Ibn al-Jawzi", language: "Arabic", description: "Path of the Seekers", link: "#" },
    { title: "The History of the Quran", author: "Theodor Nöldeke", language: "German", description: "Critical study of the Quran's compilation", link: "#" },
    { title: "Le Coran", author: "Denise Masson", language: "French", description: "French translation of the Quran", link: "#" },
    { title: "L'Islam et la Raison", author: "Tariq Ramadan", language: "French", description: "Islam and Reason", link: "#" },
    { title: "Die Botschaft des Koran", author: "Muhammad Asad", language: "German", description: "The Message of the Quran (German translation)", link: "#" },
    { title: "Islam: Glaube, Praxis, Geschichte", author: "Annemarie Schimmel", language: "German", description: "Islam: Faith, Practice, History", link: "#" },
    { title: "Urdu Quran Translation", author: "Ahmed Raza Khan", language: "Urdu", description: "Kanzul Iman - Urdu Quran Translation", link: "#" },
    { title: "Hayat-e-Sahaba", author: "Muhammad Yusuf Kandhlawi", language: "Urdu", description: "Lives of the Companions", link: "#" },
    { title: "Turkish Islamic Art", author: "Various", language: "Turkish", description: "History and forms of Turkish Islamic art", link: "#" },
    { title: "Islam ve Bilim", author: "Fuat Sezgin", language: "Turkish", description: "Islam and Science", link: "#" },
    { title: "The Art of War", author: "Sun Tzu", language: "English", description: "Ancient Chinese military treatise", link: "#" },
    { title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", language: "English", description: "Exploration of human history", link: "#" },
    { title: "Cosmos", author: "Carl Sagan", language: "English", description: "Journey through space and time", link: "#" },
    { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", language: "English", description: "Insights into human decision-making", link: "#" },
    { title: "Atomic Habits", author: "James Clear", language: "English", description: "Easy & Proven Way to Build Good Habits & Break Bad Ones", link: "#" },
    { title: "The 7 Habits of Highly Effective People", author: "Stephen Covey", language: "English", description: "Classic self-help book on effectiveness", link: "#" },
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", language: "English", description: "Personal finance classic", link: "#" },
    { title: "The Power of Habit", author: "Charles Duhigg", language: "English", description: "Why We Do What We Do in Life and Business", link: "#" },
    { title: "Educated", author: "Tara Westover", language: "English", description: "Memoir about overcoming a difficult upbringing", link: "#" },
    { title: "Factfulness", author: "Hans Rosling", language: "English", description: "Ten Reasons We're Wrong About the World – and Why Things Are Better Than You Think", link: "#" }
  ];

  // ==============================
  // Library Rendering & Search
  // ==============================
  const libraryGrid = document.getElementById("library-grid");
  const librarySearch = document.getElementById("library-search");
  const langFilter = document.getElementById("lang-filter");

  function updateLanguageFilter() {
    const currentLang = langFilter.value;
    langFilter.innerHTML = '<option value="">All Languages</option>'; // Reset
    const languages = [...new Set(books.map(b => b.language))].sort();
    languages.forEach(lang => {
      const opt = document.createElement("option");
      opt.value = lang;
      opt.textContent = lang;
      langFilter.appendChild(opt);
    });
    // Preserve selected language if it still exists
    if (languages.includes(currentLang)) {
      langFilter.value = currentLang;
    }
  }

  function renderLibrary(filter = "", lang = "") {
    libraryGrid.innerHTML = "";
    const filtered = books.filter(b => 
      (b.title.toLowerCase().includes(filter.toLowerCase()) || b.author.toLowerCase().includes(filter.toLowerCase())) &&
      (lang === "" || b.language === lang)
    );
    filtered.forEach(b => {
      const card = document.createElement("div");
      card.className = "library-card";
      card.innerHTML = `
        <h4>${b.title}</h4>
        <p><strong>${b.author}</strong></p>
        <p>${b.language}</p>
        <button class="btn view-book-btn">View Details</button>
      `;
      const btn = card.querySelector(".view-book-btn");
      btn.addEventListener("click", () => openBookModal(b));
      libraryGrid.appendChild(card);
    });
  }

  librarySearch?.addEventListener("input", (e) => renderLibrary(e.target.value, langFilter.value));
  langFilter?.addEventListener("change", (e) => renderLibrary(librarySearch.value, e.target.value));

  updateLanguageFilter();
  renderLibrary();

  // ==============================
  // Book Modal
  // ==============================
  const bookModal = document.getElementById("book-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalBookTitle = document.getElementById("modal-book-title");
  const modalBookAuthor = document.getElementById("modal-book-author");
  const modalBookDescription = document.getElementById("modal-book-description");
  const modalBookLink = document.getElementById("modal-book-link");

  function openBookModal(book) {
    modalBookTitle.textContent = book.title;
    modalBookAuthor.textContent = `by ${book.author}`;
    modalBookDescription.textContent = book.description;
    modalBookLink.href = book.link;
    bookModal.classList.remove("hidden");
  }

  modalCloseBtn?.addEventListener("click", () => bookModal.classList.add("hidden"));
  bookModal?.addEventListener("click", (e) => {
    if (e.target === bookModal) bookModal.classList.add("hidden");
  });

  // ==============================
  // Add Book Modal & Form
  // ==============================
  const addBookBtn = document.getElementById("add-book-btn");
  const addBookModal = document.getElementById("add-book-modal");
  const addBookModalCloseBtn = document.getElementById("add-book-modal-close-btn");
  const addBookForm = document.getElementById("add-book-form");

  addBookBtn?.addEventListener("click", () => {
    addBookModal.classList.remove("hidden");
  });

  addBookModalCloseBtn?.addEventListener("click", () => {
    addBookModal.classList.add("hidden");
  });

  addBookModal?.addEventListener("click", (e) => {
    if (e.target === addBookModal) addBookModal.classList.add("hidden");
  });

  addBookForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const newBook = {
      title: e.target.title.value,
      author: e.target.author.value,
      language: e.target.language.value,
      description: `${e.target.title.value} by ${e.target.author.value}`, // Auto-generate description
      link: "#"
    };
    books.unshift(newBook); // Add to the beginning of the array
    addBookForm.reset();
    addBookModal.classList.add("hidden");
    updateLanguageFilter(); // Update language dropdown with new language if any
    renderLibrary(librarySearch.value, langFilter.value); // Re-render the library
  });

  // ==============================
  // Halaqat Schedule
  // ==============================
  const halaqatData = [
    { topic: "Tafsir of Quran", day: "Monday", time: "17:00", instructor: "Sheikh Ali" },
    { topic: "Fiqh Basics", day: "Wednesday", time: "18:00", instructor: "Ustaz Omar" },
    { topic: "Hadith Study", day: "Friday", time: "16:30", instructor: "Sheikh Ahmed" }
  ];

  const halaqatBody = document.getElementById("halaqat-body");
  if (halaqatBody) {
    halaqatData.forEach(h => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${h.topic}</td>
        <td>${h.day}</td>
        <td>${h.time}</td>
        <td>${h.instructor}</td>
        <td><button class="btn btn-primary join-btn">Join</button></td>
      `;
      row.querySelector(".join-btn").addEventListener("click", () => {
        const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
        if (isLoggedIn) {
          alert(`Your request to join the "${h.topic}" halaqah has been submitted.`);
        } else {
          alert("You must be logged in to join a halaqah. Please log in first.");
          showPage('login'); // Redirect to the login page
        }
      });
      halaqatBody.appendChild(row);
    });
  }

  // ==============================
  // Sectors Data & Rendering
  // ==============================
  const sectorsData = [
    { name: "Dawah Sector", description: "Focuses on outreach and spreading Islamic knowledge.", type: "male" },
    { name: "Tarbiyah Sector", description: "Deals with spiritual and personal development.", type: "male" },
    { name: "Social Affairs Sector", description: "Organizes community service and social events.", type: "male" },
    { name: "Sisters' Dawah", description: "Outreach and knowledge sharing for sisters.", type: "female" },
    { name: "Sisters' Tarbiyah", description: "Spiritual development programs for sisters.", type: "female" },
    { name: "Family Affairs", description: "Focuses on family-related topics and support.", type: "female" }
  ];

  const sectorTabs = document.querySelectorAll(".sector-tab");
  const sectorsGrid = document.getElementById("sectors-grid");

  function renderSectors(sectorType) {
    // This function is now defined inside DOMContentLoaded and has access to showPage
    if (!sectorsGrid) return;
    sectorsGrid.innerHTML = "";
    const filteredSectors = sectorsData.filter(sector => sector.type === sectorType);

    filteredSectors.forEach(sector => {
      const card = document.createElement("div");
      card.className = "card"; // Using a generic card style
      card.innerHTML = `
        <h3>${sector.name}</h3>
        <p>${sector.description}</p>
        <button class="btn btn-primary join-sector-btn">Join Sector</button>
      `;

      card.querySelector('.join-sector-btn').addEventListener('click', () => {
        const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
        if (isLoggedIn) {
          alert(`Thank you for your interest! Your request to join the "${sector.name}" has been submitted for review.`);
        } else {
          alert("You must be logged in to join a sector. Please log in first.");
          showPage('login'); // Redirect to the login page
        }
      });

      sectorsGrid.appendChild(card);
    });
  }

  sectorTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      sectorTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const sectorType = tab.getAttribute("data-sector");
      renderSectors(sectorType);
    });
  });

  // Initial render for the default active tab
  const initialSectorTab = document.querySelector(".sector-tab.active");
  if (initialSectorTab) {
    renderSectors(initialSectorTab.getAttribute("data-sector"));
  }

  // ==============================
  // Events Data & Rendering
  // ==============================
  const eventsData = [
    { title: "Annual Islamic Conference", date: "2025-11-15", description: "Join us for a day of inspiring lectures and community building.", bannerText: "Conference" },
    { title: "Community Iftar", date: "2026-03-25", description: "Break your fast with the community during Ramadan.", bannerText: "Iftar" },
    { title: "Sisters' Halaqah", date: "Weekly", description: "A weekly gathering for sisters to learn and connect.", bannerText: "Halaqah" },
    { title: "Youth Football Tournament", date: "2025-12-05", description: "A friendly competition for the youth.", bannerText: "Sports" },
    { title: "Islamic Calligraphy Workshop", date: "2025-11-22", description: "Learn the basics of beautiful Arabic calligraphy from a master artist.", bannerText: "Workshop" },
    { title: "Winter Clothing Drive", date: "2025-12-01", description: "Donate warm clothes for those in need this winter season.", bannerText: "Charity" }
  ];

  function renderEvents() {
    const eventsGrid = document.getElementById("events-grid");
    if (!eventsGrid) return;
    eventsGrid.innerHTML = "";
    eventsData.forEach(event => {
      const card = document.createElement("div");
      card.className = "event-card";
      card.innerHTML = `
        <div class="event-card-banner">${event.bannerText}</div>
        <div class="event-card-date">${event.date}</div>
        <div class="event-card-content">
          <h3>${event.title}</h3>
          <p>${event.description}</p>
        </div>
      `;
      eventsGrid.appendChild(card);
    });
  }
  renderEvents();

  // ==============================
  // Student Portal Courses
  // ==============================
  const courses = [
    { title: "Islamic Studies 101", description: "Introduction to Islam", instructor: "Sheikh Ali" },
    { title: "Quran Recitation", description: "Learn proper recitation", instructor: "Sheikh Omar" },
    { title: "Arabic Language", description: "Basics of Arabic grammar", instructor: "Ustaz Ahmed" },
    { title: "Fiqh of Worship", description: "Detailed study of Salah, Zakat, Sawm, and Hajj.", instructor: "Sheikh Ali" },
    { title: "Islamic History: The Rightly Guided Caliphs", description: "A study of the era of the Khulafa al-Rashidun.", instructor: "Ustaz Omar" }
  ];

  const coursesGrid = document.getElementById("courses-grid");
  const courseSearch = document.getElementById("course-search");

  function renderCourses(filter = "") {
    coursesGrid.innerHTML = "";
    const filtered = courses.filter(c => c.title.toLowerCase().includes(filter.toLowerCase()));
    filtered.forEach(c => {
      const card = document.createElement("div");
      card.className = "course-card";
      card.innerHTML = `
        <h4>${c.title}</h4>
        <p>${c.description}</p>
        <p><strong>${c.instructor}</strong></p>
        <button class="btn btn-primary enroll-btn" style="margin-top: auto;">Request to Enroll</button>
      `;
      card.querySelector(".enroll-btn").addEventListener("click", () => {
        const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
        if (isLoggedIn) {
          alert(`Your request to enroll in "${c.title}" has been submitted for review.`);
        } else {
          alert("You must be logged in to enroll in a course. Please log in first.");
          showPage('login'); // Redirect to the login page
        }
      });
      coursesGrid.appendChild(card);
    });
  }

  courseSearch?.addEventListener("input", (e) => renderCourses(e.target.value));
  renderCourses();

  // ==============================
  // Student Portal Tabs
  // ==============================
  const portalTabs = document.querySelectorAll(".portal-tab");
  const studentContents = document.querySelectorAll(".student-content");

  portalTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      portalTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const panel = tab.getAttribute("data-panel");
      studentContents.forEach(c => c.classList.add("hidden"));
      document.getElementById(panel)?.classList.remove("hidden");
    });
  });

  // ==============================
  // Quizzes & Exams Data
  // ==============================
  const quizzesData = [
    { title: "Quiz 1: Seerah of the Prophet", course: "Islamic Studies 101", dueDate: "2025-10-26", questions: 10 },
    { title: "Quiz 1: Tajweed Rules", course: "Quran Recitation", dueDate: "2025-10-28", questions: 15 },
    { title: "Vocabulary Test", course: "Arabic Language", dueDate: "2025-11-01", questions: 20 },
    { title: "Quiz 2: Pillars of Iman", course: "Islamic Studies 101", dueDate: "2025-11-10", questions: 12 },
    { title: "Grammar Quiz", course: "Arabic Language", dueDate: "2025-11-12", questions: 25 }
  ];

  const examsData = [
    { title: "Midterm Exam", course: "Islamic Studies 101", date: "2025-11-15", time: "10:00 AM", duration: "2 hours" },
    { title: "Final Oral Exam", course: "Quran Recitation", date: "2025-12-10", time: "09:00 AM", duration: "15 mins per student" },
    { title: "Final Written Exam", course: "Arabic Language", date: "2025-12-18", time: "02:00 PM", duration: "90 minutes" }
  ];

  function renderQuizzes() {
    const container = document.getElementById("quiz");
    if (!container) return;
    container.innerHTML = `<div class="quiz-grid"></div>`;
    const grid = container.querySelector('.quiz-grid');

    quizzesData.forEach(quiz => {
      const card = document.createElement("div");
      card.className = "quiz-card";
      card.innerHTML = `
        <h4>${quiz.title}</h4>
        <p><strong>Course:</strong> ${quiz.course}</p>
        <p><strong>Due Date:</strong> ${quiz.dueDate}</p>
        <p><strong>Questions:</strong> ${quiz.questions}</p>
        <button class="btn btn-primary" style="margin-top: 1rem;">Start Quiz</button>
      `;
      card.querySelector('button').addEventListener('click', () => {
        alert(`Starting "${quiz.title}"... This is a placeholder.`);
      });
      grid.appendChild(card);
    });
  }

  function renderExams() {
    const container = document.getElementById("exam");
    if (!container) return;
    container.innerHTML = `<div class="exam-grid"></div>`;
    const grid = container.querySelector('.exam-grid');

    examsData.forEach(exam => {
      const card = document.createElement("div");
      card.className = "exam-card";
      card.innerHTML = `
        <h4>${exam.title}</h4>
        <p><strong>Course:</strong> ${exam.course}</p>
        <p><strong>Date:</strong> ${exam.date} at ${exam.time}</p>
        <p><strong>Duration:</strong> ${exam.duration}</p>
        <button class="btn btn-outline-large" style="margin-top: 1rem;">View Details</button>
      `;
      grid.appendChild(card);
    });
  }

  renderQuizzes();
  renderExams();

  // ==============================
  // Prayer & Azkar Tabs
  // ==============================
  const azkarTabs = document.querySelectorAll(".azkar-tab");
  const azkarContents = document.querySelectorAll(".azkar-content");

  azkarTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      azkarTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const panel = tab.getAttribute("data-azkar");
      azkarContents.forEach(c => c.classList.add("hidden"));
      document.getElementById(`${panel}-azkar`)?.classList.remove("hidden");
    });
  });

  // ==============================
  // Prayer Times & Azkar Data
  // ==============================
  const morningAzkarData = [
    { arabic: "آيَةُ الْكُرْسِيِّ", translation: "Ayat al-Kursi (Al-Baqarah 2:255)", count: "1 time" },
    { arabic: "سُورَةُ الْإِخْلَاصِ، الْفَلَقِ، النَّاسِ", translation: "Surah Al-Ikhlas, Al-Falaq, An-Nas", count: "3 times" },
    { arabic: "سُبْحَانَ اللهِ وَبِحَمْدِهِ", translation: "Glory is to Allah and praise is to Him.", count: "100 times" },
    { arabic: "أَسْتَغْفِرُ اللهَ وَأَتُوبُ إِلَيْهِ", translation: "I seek the forgiveness of Allah and repent to Him.", count: "100 times" },
    { arabic: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ", translation: "O Allah, we ask for your peace and blessings upon our Prophet Muhammad.", count: "10 times" }
  ];

  const eveningAzkarData = [
    { arabic: "آيَةُ الْكُرْسِيِّ", translation: "Ayat al-Kursi (Al-Baqarah 2:255)", count: "1 time" },
    { arabic: "سُورَةُ الْإِخْلَاصِ، الْفَلَقِ، النَّاسِ", translation: "Surah Al-Ikhlas, Al-Falaq, An-Nas", count: "3 times" },
    { arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ", translation: "We have reached the evening and at this very time all sovereignty belongs to Allah.", count: "1 time" },
    { arabic: "بِسْمِ اللهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّmِيعُ الْعَلِيمُ", translation: "In the name of Allah with whose name nothing is harmed on earth nor in the heavens and He is The All-Seeing, The All-Knowing.", count: "3 times" }
  ];

  const prayerTimesData = [
    { name: "Fajr", time: "05:15 AM" },
    { name: "Sunrise", time: "06:30 AM" },
    { name: "Dhuhr", time: "12:30 PM" },
    { name: "Asr", time: "03:45 PM" },
    { name: "Maghrib", time: "06:40 PM" },
    { name: "Isha", time: "08:00 PM" }
  ];

  function renderPrayerTimes() {
    const container = document.getElementById("prayer-times-container");
    if (!container) return;
    container.innerHTML = "";
    prayerTimesData.forEach(prayer => {
      const card = document.createElement("div");
      card.className = "prayer-time-card";
      card.innerHTML = `
        <h4>${prayer.name}</h4>
        <p>${prayer.time}</p>
      `;
      container.appendChild(card);
    });
  }

  function renderAzkar() {
    const morningContainer = document.getElementById("morning-azkar");
    const eveningContainer = document.getElementById("evening-azkar");

    const createAzkarHTML = (data) => {
      return data.map(azkar => `
        <div class="azkar-item">
          <p class="azkar-arabic">${azkar.arabic}</p>
          <p class="azkar-translation"><em>${azkar.translation}</em></p>
          <p class="azkar-count"><strong>Recite:</strong> ${azkar.count}</p>
        </div>
      `).join('');
    };

    if (morningContainer) morningContainer.innerHTML = createAzkarHTML(morningAzkarData);
    if (eveningContainer) eveningContainer.innerHTML = createAzkarHTML(eveningAzkarData);
  }

  renderPrayerTimes();

  // Azan Player Logic
  const playAzanBtn = document.getElementById('play-azan-btn');
  const playAzanText = document.getElementById('play-azan-text');
  const azanAudio = document.getElementById('azan-audio');

  playAzanBtn?.addEventListener('click', () => {
    if (azanAudio.paused) {
      azanAudio.play();
      playAzanText.textContent = 'Pause Azan';
      playAzanBtn.querySelector('i').setAttribute('data-lucide', 'pause');
    } else {
      azanAudio.pause();
      playAzanText.textContent = 'Play Azan';
      playAzanBtn.querySelector('i').setAttribute('data-lucide', 'play');
    }
    lucide.createIcons(); // Re-render the icon to show play/pause
  });

  azanAudio?.addEventListener('ended', () => {
    playAzanText.textContent = 'Play Azan';
    playAzanBtn.querySelector('i').setAttribute('data-lucide', 'play');
    lucide.createIcons(); // Re-render the icon when audio finishes
  });

  renderAzkar();

  // Render all Lucide icons
  lucide.createIcons();

});
