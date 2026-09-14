const WA = "255798235670";
const WA_DISPLAY = "+255 798 235 670";
const EMAIL = "makurucrops@gmail.com";

function wa(text) {
  const base = "https://wa.me/" + WA;
  return text ? base + "?text=" + encodeURIComponent(text) : base;
}

const I18N = {
  en: {
    navHome: "Home", navAbout: "About Us", navProducts: "Products", navServices: "Services",
    navGallery: "Gallery", navContact: "Contact",
    heroKicker: "Quality crops. Reliable supply.",
    heroTitle: "Growing quality crops for a better tomorrow",
    heroLead: "Makuru Crops Company produces and distributes maize, beans, cowpeas, and lentils — with farming, irrigation, and farm management support.",
    viewProducts: "View products", orderWhatsapp: "Order on WhatsApp",
    aboutKicker: "About us", harvestFuture: "We harvest the future",
    aboutTitle: "Dedicated to honest farming and dependable produce",
    aboutP1: "Makuru Crops Company is an agricultural enterprise focused on producing, managing, and distributing high-quality crops. We combine field experience with practical systems so farmers and buyers can count on consistent results.",
    aboutP2: "Our team supports clients from land preparation through harvest and delivery — with a preference for methods that protect soil and water.",
    founderKicker: "Leadership", founderRole: "Founder & Chief Executive Officer", founderName: "James Makuru",
    founderQuote: "Good harvests start with honest work, healthy soil, and a promise we keep to every farmer we serve.",
    founderBio: "James Makuru founded Makuru Crops Company in Arusha to connect quality Tanzanian grain with reliable markets. He leads crop production, farm services, and distribution with a practical, field-first approach.",
    productsKicker: "Products", productsTitle: "Crops we deal in",
    productsLead: "Maize, beans, cowpeas, and lentils — selected, graded, and ready for market.",
    maize: "Maize", maizeText: "High-yielding maize for food and feed, available in bulk and retail quantities.",
    beans: "Beans", beansText: "Protein-rich beans, harvested and graded for households, markets, and export.",
    cowpeas: "Cowpeas", cowpeasText: "Drought-tolerant cowpeas (kunde) with strong flavour and nutrition for everyday cooking.",
    lentils: "Lentils", lentilsText: "Clean, well-graded lentils packed with protein and fibre, ready for market.",
    servicesKicker: "Services", servicesTitle: "From field to market",
    cropFarming: "Crop Farming", cropFarmingText: "Land preparation, planting, crop care, and harvesting using practices that protect soil and lift yields.",
    farmMgmt: "Farm Management", farmMgmtText: "Planning, budgeting, labour coordination, and field monitoring so operations stay on track.",
    irrigation: "Irrigation", irrigationText: "Design, installation, and management of water-efficient systems that keep crops consistently supplied.",
    distribution: "Produce Distribution", distributionText: "Collection, storage, and timely delivery of produce to markets, retailers, and processors.",
    galleryKicker: "Gallery", galleryTitle: "Fields and harvests",
    contactKicker: "Contact", contactTitle: "Talk to Makuru Crops",
    contactLead: "Ask about stock, farm services, or a supply partnership. Messages go straight to WhatsApp.",
    location: "Location", locationValue: "Arusha, Tanzania", mapTitle: "Find us in Arusha", mapOpen: "Open live map",
    phone: "Phone / WhatsApp", email: "Email", openWhatsapp: "Open WhatsApp",
    fullName: "Full name", subject: "Subject", message: "Message",
    subGeneral: "General inquiry", subProducts: "Products", subServices: "Services", subPartnership: "Partnership",
    sendWhatsapp: "Send via WhatsApp", sentNote: "WhatsApp should open with your message.",
    footerVisit: "Visit",
    footerBlurb: "Sustainable crop production and reliable distribution of maize, beans, cowpeas, and lentils.",
    rights: "All rights reserved.", chatWhatsapp: "Chat on WhatsApp",
    waHello: "Hello Makuru Crops.",
    waOrder: "Hello Makuru Crops, I would like to place an order.",
    waInquire: "Hello Makuru Crops, I would like to inquire.",
    waFloat: "Hello Makuru Crops, I would like to inquire about your products and services.",
    heroAlt: "Farm tractor working a field at sunset"
  },
  sw: {
    navHome: "Nyumbani", navAbout: "Kuhusu Sisi", navProducts: "Bidhaa", navServices: "Huduma",
    navGallery: "Picha", navContact: "Mawasiliano",
    heroKicker: "Mazao bora. Ugavi wa kuaminika.",
    heroTitle: "Tunakuza mazao bora kwa kesho iliyo bora",
    heroLead: "Makuru Crops Company inazalisha na kusambaza mahindi, maharagwe, kunde, na dengu — pamoja na kilimo, umwagiliaji, na usimamizi wa mashamba.",
    viewProducts: "Tazama bidhaa", orderWhatsapp: "Agiza kwa WhatsApp",
    aboutKicker: "Kuhusu sisi", harvestFuture: "Tunavuna mustakabali",
    aboutTitle: "Tunajitolea kilimo cha uaminifu na mazao ya kutegemewa",
    aboutP1: "Makuru Crops Company ni kampuni ya kilimo inayozalisha, kusimamia, na kusambaza mazao bora. Tunachanganya uzoefu wa shambani na mifumo ya kazi ili wakulima na wanunuzi wapate matokeo thabiti.",
    aboutP2: "Timu yetu inasaidia wateja kuanzia kuandaa ardhi hadi kuvuna na kusafirisha — tukipendelea mbinu zinazolinda udongo na maji.",
    founderKicker: "Uongozi", founderRole: "Mwanzilishi na Mkurugenzi Mtendaji", founderName: "James Makuru",
    founderQuote: "Mavuno mazuri huanza na kazi ya uaminifu, udongo wenye afya, na ahadi tunayoshika kwa kila mkulima tunayemhudumia.",
    founderBio: "James Makuru alianzisha Makuru Crops Company Arusha ili kuunganisha nafaka bora za Tanzania na masoko ya kuaminika. Anaongoza uzalishaji, huduma za shamba, na usambazaji kwa mtazamo wa vitendo kutoka shambani.",
    productsKicker: "Bidhaa", productsTitle: "Mazao tunayoshughulikia",
    productsLead: "Mahindi, maharagwe, kunde, na dengu — yaliyochaguliwa, kupimwa, na kuwa tayari soko.",
    maize: "Mahindi", maizeText: "Mahindi yenye mavuno mengi kwa chakula na malisho, yanapatikana kwa jumla na rejareja.",
    beans: "Maharagwe", beansText: "Maharagwe yenye protini, yaliyovunwa na kupimwa kwa kaya, masoko, na usafirishaji.",
    cowpeas: "Kunde", cowpeasText: "Kunde zinazostahimili ukame, zenye ladha na lishe nzuri kwa mapishi ya kila siku.",
    lentils: "Dengu", lentilsText: "Dengu safi zilizopimwa vizuri, zenye protini na nyuzinyuzi, tayari kwa soko.",
    servicesKicker: "Huduma", servicesTitle: "Kutoka shambani hadi sokoni",
    cropFarming: "Kilimo cha Mazao", cropFarmingText: "Kuandaa ardhi, kupanda, kutunza mimea, na kuvuna kwa mbinu zinazolinda udongo na kuongeza mavuno.",
    farmMgmt: "Usimamizi wa Shamba", farmMgmtText: "Mipango, bajeti, uratibu wa kazi, na ufuatiliaji wa shamba ili kazi ziendelee vizuri.",
    irrigation: "Umwagiliaji", irrigationText: "Kubuni, kufunga, na kusimamia mifumo ya umwagiliaji inayookoa maji na kulisha mazao kwa uthabiti.",
    distribution: "Usambazaji wa Mazao", distributionText: "Kukusanya, kuhifadhi, na kupeleka mazao kwa wakati kwenye masoko, wauzaji, na viwanda.",
    galleryKicker: "Picha", galleryTitle: "Mashamba na mavuno",
    contactKicker: "Mawasiliano", contactTitle: "Wasiliana na Makuru Crops",
    contactLead: "Uliza kuhusu stoki, huduma za shamba, au ushirikiano. Ujumbe unaenda moja kwa moja kwenye WhatsApp.",
    location: "Mahali", locationValue: "Arusha, Tanzania", mapTitle: "Tutafute Arusha", mapOpen: "Fungua ramani hai",
    phone: "Simu / WhatsApp", email: "Barua pepe", openWhatsapp: "Fungua WhatsApp",
    fullName: "Jina kamili", subject: "Mada", message: "Ujumbe",
    subGeneral: "Ulizo la jumla", subProducts: "Bidhaa", subServices: "Huduma", subPartnership: "Ushirikiano",
    sendWhatsapp: "Tuma kwa WhatsApp", sentNote: "WhatsApp inapaswa kufunguka na ujumbe wako.",
    footerVisit: "Tembelea",
    footerBlurb: "Uzaji endelevu wa mazao na usambazaji wa kuaminika wa mahindi, maharagwe, kunde, na dengu.",
    rights: "Haki zote zimehifadhiwa.", chatWhatsapp: "Ongea WhatsApp",
    waHello: "Habari Makuru Crops.",
    waOrder: "Habari Makuru Crops, ninataka kuagiza.",
    waInquire: "Habari Makuru Crops, ninauliza.",
    waFloat: "Habari Makuru Crops, ninataka kuuliza kuhusu bidhaa na huduma zenu.",
    heroAlt: "Trekta ya shamba inafanya kazi wakati wa machweo"
  }
};

function applyLang(lang) {
  const t = I18N[lang] || I18N.en;
  document.documentElement.lang = lang === "sw" ? "sw" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] != null) el.textContent = t[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key] != null) el.setAttribute("placeholder", t[key]);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (t[key] != null) el.setAttribute("alt", t[key]);
  });
  document.querySelectorAll(".lang button").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
  document.querySelectorAll("[data-wa]").forEach((a) => {
    const key = a.getAttribute("data-wa");
    a.href = wa(t[key] || "");
  });
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("makuru-lang");
  const lang = saved === "sw" ? "sw" : "en";
  applyLang(lang);

  document.querySelectorAll(".lang button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = btn.dataset.lang;
      localStorage.setItem("makuru-lang", next);
      applyLang(next);
    });
  });

  const menuBtn = document.getElementById("menuBtn");
  const mobile = document.getElementById("mobileNav");
  menuBtn.addEventListener("click", () => mobile.classList.toggle("open"));
  mobile.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => mobile.classList.remove("open")));

  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const t = I18N[localStorage.getItem("makuru-lang") === "sw" ? "sw" : "en"];
    const fd = new FormData(e.currentTarget);
    const body = langPrefix(t, fd);
    window.open(wa(body), "_blank", "noopener,noreferrer");
    document.getElementById("sentNote").classList.add("show");
    e.currentTarget.reset();
  });
});

function langPrefix(t, fd) {
  const name = fd.get("name") || "";
  const subject = fd.get("subject") || "";
  const message = fd.get("message") || "";
  if (document.documentElement.lang === "sw") {
    return "Habari Makuru Crops, jina langu ni " + name + ". Mada: " + subject + ". " + message;
  }
  return "Hello Makuru Crops, my name is " + name + ". Subject: " + subject + ". " + message;
}
