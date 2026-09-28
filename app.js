const I18N = {
en: {
  "nav.services": "Services",
  "nav.products": "Products",
  "nav.gallery": "Gallery",
  "nav.why": "Why us",
  "nav.faq": "FAQ",
  "nav.reviews": "Reviews",
  "nav.contact": "Contact",
  "nav.call": "303 341-4640",
  "hero.kicker": "Aurora, Colorado · Honest work, fair prices",
  "hero.title": "Auto repair<br>you can trust.",
  "hero.sub": "4.7-star rated on Birdeye (169 reviews): owner Kevin is praised for honesty and trustworthy service — the shop Aurora drivers recommend.",
  "hero.cta1": "Book now",
  "hero.cta2": "See services",
  "stats.hoursNum": "Mon – Fri",
  "stats.hours": "Open weekdays 8 – 5",
  "stats.makesNum": "4.7",
  "stats.makes": "Birdeye · 169 reviews",
  "stats.diagNum": "Honest",
  "stats.diag": "owner-run shop",
  "stats.quoteNum": "All makes",
  "stats.quote": "cars & trucks",
  "services.kicker": "What we do",
  "services.title": "Honest auto care",
  "services.s1t": "Brake service & repair",
  "services.s1d": "Pads, rotors and full brake system service — stop with confidence.",
  "services.s2t": "Engine diagnostics",
  "services.s2d": "Accurate check-engine diagnosis — no guessing, no upsells.",
  "services.s3t": "Oil changes & maintenance",
  "services.s3d": "Oil, filters and fluids — maintenance that protects your car.",
  "services.s4t": "Tires & alignment",
  "services.s4d": "Tire service, rotation and alignment for even wear and safe handling.",
  "services.s5t": "A/C & heating",
  "services.s5d": "Heating and A/C repair for Colorado's hottest and coldest days.",
  "services.s6t": "General auto repair",
  "services.s6d": "From tune-ups to bigger jobs — honest work at fair prices.",
  "walkin.w1t": "Owner-run",
  "walkin.w1d": "Kevin knows your car",
  "walkin.w2t": "4.7 rated",
  "walkin.w2d": "169 Birdeye reviews",
  "walkin.w3t": "Honest advice",
  "walkin.w3d": "Only the work you need",
  "makes.kicker": "All makes and models",
  "makes.title": "Your car is welcome here",
  "makes.sub": "Cars, SUVs and light trucks — domestic and import, we service them all.",
  "why.kicker": "Why choose us",
  "why.title": "Why Aurora trusts Ace",
  "why.intro": "A shop where the owner's name comes up in reviews again and again — because Kevin treats customers the way he'd want to be treated.",
  "why.l1t": "Owner Kevin's integrity",
  "why.l1d": "Customers praise his honesty by name, review after review.",
  "why.l2t": "4.7 from 169 reviews",
  "why.l2d": "A deep track record of satisfied Aurora drivers.",
  "why.l3t": "Fair prices",
  "why.l3d": "Quality work without the dealership markup.",
  "why.l4t": "Clear explanations",
  "why.l4d": "You'll understand what was done and why.",
  "products.kicker": "We install",
  "products.title": "Quality parts we trust",
  "products.sub": "The same quality parts we install every day — ask us what's right for your car.",
  "products.p1t": "Brake pads & rotors",
  "products.p1d": "Quality brake components for every make — installed right.",
  "products.p2t": "Car batteries",
  "products.p2d": "Reliable batteries tested and installed while you wait.",
  "products.p3t": "Tires",
  "products.p3d": "All sizes, mounting and balancing on site.",
  "products.note": "Call us to check availability for your vehicle.",
  "products.cta": "Call to ask",
  "gallery.kicker": "The shop in action",
  "gallery.title": "Friendly, honest service",
  "gallery.c1": "Friendly, honest service",
  "gallery.c2": "Clean, careful oil service",
  "gallery.c3": "Professional under-hood inspection",
  "reviews.kicker": "Word on the street",
  "reviews.title": "4.7 stars from 169 reviews",
  "reviews.more": "<strong>4.7 rating · 169 Birdeye reviews</strong> &mdash; see what customers say",
  "faq.kicker": "Good to know",
  "faq.title": "Frequently asked questions",
  "faq.q1": "Do I need an appointment?",
  "faq.a1": "Call (303) 341-4640 — appointments get priority and we'll fit you in fast.",
  "faq.q2": "Who is Kevin?",
  "faq.a2": "The owner — customers praise his honesty and trustworthy service by name.",
  "faq.q3": "Do you work on my make?",
  "faq.a3": "Yes — cars, SUVs and trucks of all makes.",
  "faq.q4": "What are your hours?",
  "faq.a4": "Monday to Friday, 8:00 AM to 5:00 PM. Closed weekends.",
  "contact.kicker": "Come see us",
  "contact.title": "Book your visit",
  "contact.addr": "Address",
  "contact.phone": "Phone",
  "contact.hours": "Hours",
  "contact.hoursVal": "Mon – Fri: 8:00 AM – 5:00 PM<br>Sat – Sun: closed",
  "contact.cta": "Call now to book",
  "promo.kicker": "Owner Kevin",
  "promo.title": "The honest mechanic Aurora trusts",
  "promo.text": "Customers call Kevin honest and trustworthy by name. Clear explanations, fair prices, and work that stays fixed.",
  "promo.cta": "Call Kevin today",
  "footer.tag": "Honest auto repair · Aurora, Colorado"
}
};

let lang = "en";

function applyLang(l) {
  lang = l;
  localStorage.setItem("demo-lang", l);
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N[l][key];
    if (val !== undefined) el.innerHTML = val;
  });
}

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

applyLang(lang);
