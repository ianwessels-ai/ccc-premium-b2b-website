"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const translations = {
  en: {
    // Navigation
    "nav.experiences": "Experiences",
    "nav.whyCCC": "Why CCC",
    "nav.contact": "Contact",
    "nav.startPlanning": "Book your experience",

    // Hero
    "hero.brand": "Corporate Cricket Collective",
    "hero.lineOne": "More Than A Game.",
    "hero.lineTwo": "A Stronger Workplace.",
    "hero.description":
      "Premium corporate cricket experiences designed to bring teams together through connection, competition and unforgettable shared moments.",
    "hero.explore": "Explore Experiences",
    "hero.startPlanning": "Book your experience",

    // Hero benefits
    "hero.strengthenTeams": "Strengthen Teams",
    "hero.buildCulture": "Build Culture",
    "hero.engageEmployees": "Engage Employees",
    "hero.createMemories": "Create Lasting Memories",

    // Experience Cards
    "experiences.eyebrow": "Find Your Perfect Experience",
    "experiences.title": "Three experiences. One unforgettable outcome.",
    "experiences.description":
      "Whether you're bringing together 12 colleagues or an entire company, Corporate Cricket Collective has an experience designed to strengthen teams, build workplace culture and create lasting memories.",

    // Corporate Cricket Challenge
    "experiences.challenge.name": "Corporate Cricket Challenge",
    "experiences.challenge.label": "Small Team Experience",
    "experiences.challenge.badge": "Best for small teams",
    "experiences.challenge.participants": "Up to 20",
    "experiences.challenge.duration": "3–4 hours",
    "experiences.challenge.format": "Gamified team challenge",
    "experiences.challenge.description":
      "Built for smaller teams who want connection, energy and a memorable team-building experience.",

    // Corporate Cricket Challenge Plus
    "experiences.challengePlus.name": "Corporate Cricket Challenge Plus",
    "experiences.challengePlus.label": "Department Experience",
    "experiences.challengePlus.badge": "Best balance",
    "experiences.challengePlus.participants": "21–35",
    "experiences.challengePlus.duration": "5–6 hours",
    "experiences.challengePlus.format": "Challenges + mini tournament",
    "experiences.challengePlus.description":
      "Designed for departments wanting friendly competition, collaboration and stronger workplace relationships.",

    // Corporate Cricket Championship
    "experiences.championship.name": "Corporate Cricket Championship",
    "experiences.championship.label": "Company Experience",
    "experiences.championship.badge": "Ultimate experience",
    "experiences.championship.participants": "36–60",
    "experiences.championship.duration": "6–8 hours",
    "experiences.championship.format": "Full championship format",
    "experiences.championship.description":
      "A flagship corporate cricket tournament that turns larger groups into one unforgettable shared experience.",

    // Shared Experience Card text
    "experiences.participants": "participants",
    "experiences.premium": "Premium team experience",

    // Comparison Table
    "comparison.eyebrow": "Compare Experiences",
    "comparison.title": "Choose the right format with confidence.",
    "comparison.description":
      "Each experience follows the same premium CCC standard, scaled to fit your team size, available time and event goals.",

    "comparison.feature": "Feature",
    "comparison.challenge": "Challenge",
    "comparison.challengePlus": "Challenge Plus",
    "comparison.championship": "Championship",

    "comparison.participants": "Participants",
    "comparison.duration": "Duration",
    "comparison.experienceType": "Experience Type",
    "comparison.format": "Format",
    "comparison.bestFor": "Best For",

    "comparison.upTo20": "Up to 20",
    "comparison.21to35": "21–35",
    "comparison.36to60": "36–60",

    "comparison.3to4Hours": "3–4 hours",
    "comparison.5to6Hours": "5–6 hours",
    "comparison.6to8Hours": "6–8 hours",

    "comparison.smallTeamChallenge": "Small team challenge",
    "comparison.departmentExperience": "Department experience",
    "comparison.companyChampionship": "Company championship",

    "comparison.skillStations": "Skill stations + mini games",
    "comparison.challengesTournament": "Challenges + mini tournament",
    "comparison.fullTournament": "Full tournament experience",

    "comparison.smallTeams": "Small teams",
    "comparison.departments": "Departments",
    "comparison.largeTeams": "Large teams / company events",

    // Why CCC
    "whyCCC.eyebrow": "Why CCC",
    "whyCCC.title":
      "Built for culture, connection and unforgettable team moments.",
    "whyCCC.description":
      "Cricket is the medium. Stronger workplace relationships are the outcome.",

    "whyCCC.buildTeams.title": "Build Stronger Teams",
    "whyCCC.buildTeams.text":
      "Shared challenges create trust, communication and stronger working relationships that extend beyond the event.",

    "whyCCC.engageEmployees.title": "Engage Every Employee",
    "whyCCC.engageEmployees.text":
      "Designed so everyone can participate and contribute, regardless of cricket experience or sporting ability.",

    "whyCCC.strengthenCulture.title": "Strengthen Workplace Culture",
    "whyCCC.strengthenCulture.text":
      "Create memorable moments that boost morale, celebrate success and bring people together.",

    "whyCCC.professionallyManaged.title": "Professionally Managed",
    "whyCCC.professionallyManaged.text":
      "From planning through to delivery, CCC manages every detail so your team can simply enjoy the experience.",

    "whyCCC.premiumExperience.title": "Premium Corporate Experience",
    "whyCCC.premiumExperience.text":
      "More than a game—an event your employees will remember and your organisation will be proud to host.",

    "whyCCC.tailored.title": "Tailored to Your Business",
    "whyCCC.tailored.text":
      "Every experience is adapted to your team size, objectives, venue and company culture.",

    // How It Works
    "howItWorks.eyebrow": "How It Works",
    "howItWorks.title": "We make it simple from start to finish.",
    "howItWorks.description":
      "From the first conversation to the final award presentation, we take care of everything so you can focus on your people.",

    "howItWorks.discovery.title": "Discovery Call",
    "howItWorks.discovery.text":
      "We learn about your team, objectives and preferred event format.",

    "howItWorks.choose.title": "Choose Your Experience",
    "howItWorks.choose.text":
      "Select the package that best fits your participant numbers and goals.",

    "howItWorks.plan.title": "We Plan Everything",
    "howItWorks.plan.text":
      "CCC coordinates the logistics, equipment, schedule and event management.",

    "howItWorks.eventDay.title": "Event Day",
    "howItWorks.eventDay.text":
      "Your team enjoys a professionally facilitated cricket experience from start to finish.",

    "howItWorks.celebrate.title": "Celebrate Together",
    "howItWorks.celebrate.text":
      "Finish with awards, recognition and memories that strengthen workplace culture.",

    // Final CTA
    "finalCTA.eyebrow": "Ready To Build A Stronger Workplace?",
    "finalCTA.title": "Let's Create An Experience",
    "finalCTA.titleHighlight": "Your Team Will Never Forget.",
    "finalCTA.description":
      "Whether you're planning a team-building session, department event or company championship, Corporate Cricket Collective will deliver a professionally managed experience that strengthens relationships, builds workplace culture and leaves a lasting impression.",
    "finalCTA.button": "Start Planning",
    "finalCTA.facilitated": "Professionally Facilitated",
    "finalCTA.tailored": "Tailored To Your Team",
    "finalCTA.premium": "Premium Corporate Experience",

    // Contact / Proposal Page
    "contact.title": "Request A Proposal",
    "contact.description":
      "Tell us what you are planning, and we’ll design a cricket-based corporate experience tailored to your company, goals, and group size.",
    "contact.nextTitle": "What Happens Next?",
    "contact.next1": "1. We review your request",
    "contact.next2": "2. We contact you for key details",
    "contact.next3": "3. We prepare a tailored proposal",
    "contact.next4": "4. You approve the concept and date",

    // Proposal Form
    "proposal.fullName": "Full Name",
    "proposal.companyName": "Company Name",
    "proposal.jobTitle": "Job Title",
    "proposal.email": "Email Address",
    "proposal.phone": "Phone Number",
    "proposal.participants": "Number of Participants",
    "proposal.location": "Preferred Location",
    "proposal.date": "Preferred Date",
    "proposal.serviceInterest": "Service Interest",
    "proposal.budget": "Estimated Budget",
    "proposal.message": "Message",

    "proposal.serviceTeamBuilding":
      "Corporate Experience / Team Building",
    "proposal.serviceTournament": "Corporate Cricket Tournament",
    "proposal.serviceNetworking": "Executive Networking",

    "proposal.sending": "Sending Request...",
    "proposal.submit": "Request My Proposal",

    "proposal.errorSubmit": "Your request could not be submitted.",
    "proposal.errorGeneral":
      "Something went wrong while submitting your request. Please refresh the page and try again.",

    // Thank You Page
    "thankYou.title": "Proposal Request Received",
    "thankYou.description":
      "Thank you for contacting Corporate Cricket Collective. A member of our team will review your requirements and contact you within 1 business day to discuss your objectives and next steps.",
    "thankYou.nextTitle": "What Happens Next?",
    "thankYou.next1":
      "We review your company details and objectives",
    "thankYou.next2":
      "We assess the most suitable experience format",
    "thankYou.next3":
      "We confirm event requirements and logistics",
    "thankYou.next4":
      "We prepare a tailored proposal for your organisation",
    "thankYou.anotherProposal": "Request Another Proposal",
    "thankYou.backHome": "Back To Homepage",

    // Footer
    "footer.tagline": "More Than A Game. A Stronger Workplace.",
    "footer.description":
      "Premium corporate cricket experiences designed to strengthen teams, build workplace culture and create unforgettable memories.",
    "footer.quickLinks": "Quick Links",
    "footer.home": "Home",
    "footer.experiences": "Experiences",
    "footer.contact": "Contact",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms",
    "footer.location": "Amsterdam, The Netherlands",
    "footer.registered": "Registered in the Netherlands",
    "footer.rights": "All rights reserved.",
  },

  nl: {
    // Navigation
    "nav.experiences": "Ervaringen",
    "nav.whyCCC": "Waarom CCC",
    "nav.contact": "Contact",
    "nav.startPlanning": "Boek uw ervaring",

    // Hero
    "hero.brand": "Corporate Cricket Collective",
    "hero.lineOne": "Meer dan een spel.",
    "hero.lineTwo": "Een sterkere werkplek.",
    "hero.description":
      "Premium zakelijke cricketervaringen die teams samenbrengen door verbinding, competitie en onvergetelijke gedeelde momenten.",
    "hero.explore": "Bekijk ervaringen",
    "hero.startPlanning": "Boek uw ervaring",

    // Hero benefits
    "hero.strengthenTeams": "Versterk teams",
    "hero.buildCulture": "Bouw aan cultuur",
    "hero.engageEmployees": "Betrek medewerkers",
    "hero.createMemories": "Creëer blijvende herinneringen",

    // Experience Cards
    "experiences.eyebrow": "Vind uw perfecte ervaring",
    "experiences.title": "Drie ervaringen. Eén onvergetelijk resultaat.",
    "experiences.description":
      "Of u nu 12 collega's of een volledig bedrijf samenbrengt, Corporate Cricket Collective heeft een ervaring die is ontworpen om teams te versterken, de werkcultuur te verbeteren en blijvende herinneringen te creëren.",

    // Corporate Cricket Challenge
    "experiences.challenge.name": "Corporate Cricket Challenge",
    "experiences.challenge.label": "Ervaring voor kleine teams",
    "experiences.challenge.badge": "Het beste voor kleine teams",
    "experiences.challenge.participants": "Tot 20",
    "experiences.challenge.duration": "3–4 uur",
    "experiences.challenge.format": "Gegamificeerde teamchallenge",
    "experiences.challenge.description":
      "Ontworpen voor kleinere teams die verbinding, energie en een onvergetelijke teambuildingervaring willen.",

    // Corporate Cricket Challenge Plus
    "experiences.challengePlus.name": "Corporate Cricket Challenge Plus",
    "experiences.challengePlus.label": "Ervaring voor afdelingen",
    "experiences.challengePlus.badge": "Beste balans",
    "experiences.challengePlus.participants": "21–35",
    "experiences.challengePlus.duration": "5–6 uur",
    "experiences.challengePlus.format": "Challenges + minitoernooi",
    "experiences.challengePlus.description":
      "Ontworpen voor afdelingen die vriendelijke competitie, samenwerking en sterkere werkrelaties willen.",

    // Corporate Cricket Championship
    "experiences.championship.name": "Corporate Cricket Championship",
    "experiences.championship.label": "Bedrijfservaring",
    "experiences.championship.badge": "Ultieme ervaring",
    "experiences.championship.participants": "36–60",
    "experiences.championship.duration": "6–8 uur",
    "experiences.championship.format": "Volledig kampioenschapsformat",
    "experiences.championship.description":
      "Een vlaggenschip corporate crickettoernooi dat grotere groepen samenbrengt in één onvergetelijke gedeelde ervaring.",

    // Shared Experience Card text
    "experiences.participants": "deelnemers",
    "experiences.premium": "Premium teamervaring",

    // Comparison Table
    "comparison.eyebrow": "Vergelijk ervaringen",
    "comparison.title": "Kies met vertrouwen het juiste format.",
    "comparison.description":
      "Elke ervaring volgt dezelfde premium CCC-standaard, afgestemd op de grootte van uw team, de beschikbare tijd en de doelen van uw evenement.",

    "comparison.feature": "Kenmerk",
    "comparison.challenge": "Challenge",
    "comparison.challengePlus": "Challenge Plus",
    "comparison.championship": "Championship",

    "comparison.participants": "Deelnemers",
    "comparison.duration": "Duur",
    "comparison.experienceType": "Type ervaring",
    "comparison.format": "Format",
    "comparison.bestFor": "Ideaal voor",

    "comparison.upTo20": "Tot 20",
    "comparison.21to35": "21–35",
    "comparison.36to60": "36–60",

    "comparison.3to4Hours": "3–4 uur",
    "comparison.5to6Hours": "5–6 uur",
    "comparison.6to8Hours": "6–8 uur",

    "comparison.smallTeamChallenge": "Challenge voor kleine teams",
    "comparison.departmentExperience": "Ervaring voor afdelingen",
    "comparison.companyChampionship": "Bedrijfskampioenschap",

    "comparison.skillStations": "Vaardigheidsstations + minigames",
    "comparison.challengesTournament": "Challenges + minitoernooi",
    "comparison.fullTournament": "Volledige toernooiervaring",

    "comparison.smallTeams": "Kleine teams",
    "comparison.departments": "Afdelingen",
    "comparison.largeTeams": "Grote teams / bedrijfsevenementen",

    // Why CCC
    "whyCCC.eyebrow": "Waarom CCC",
    "whyCCC.title":
      "Ontworpen voor cultuur, verbinding en onvergetelijke teammomenten.",
    "whyCCC.description":
      "Cricket is het middel. Sterkere relaties op de werkvloer zijn het resultaat.",

    "whyCCC.buildTeams.title": "Bouw sterkere teams",
    "whyCCC.buildTeams.text":
      "Gedeelde uitdagingen creëren vertrouwen, communicatie en sterkere werkrelaties die verder gaan dan het evenement.",

    "whyCCC.engageEmployees.title": "Betrek iedere medewerker",
    "whyCCC.engageEmployees.text":
      "Zo ontworpen dat iedereen kan deelnemen en bijdragen, ongeacht cricketervaring of sportief vermogen.",

    "whyCCC.strengthenCulture.title": "Versterk de werkcultuur",
    "whyCCC.strengthenCulture.text":
      "Creëer memorabele momenten die het moreel versterken, successen vieren en mensen samenbrengen.",

    "whyCCC.professionallyManaged.title": "Professioneel georganiseerd",
    "whyCCC.professionallyManaged.text":
      "Van planning tot uitvoering beheert CCC elk detail, zodat uw team simpelweg van de ervaring kan genieten.",

    "whyCCC.premiumExperience.title": "Premium bedrijfservaring",
    "whyCCC.premiumExperience.text":
      "Meer dan een spel—een evenement dat uw medewerkers zullen onthouden en waar uw organisatie trots op kan zijn.",

    "whyCCC.tailored.title": "Afgestemd op uw bedrijf",
    "whyCCC.tailored.text":
      "Elke ervaring wordt aangepast aan uw teamgrootte, doelstellingen, locatie en bedrijfscultuur.",

    // How It Works
    "howItWorks.eyebrow": "Hoe het werkt",
    "howItWorks.title": "Wij maken het eenvoudig van begin tot eind.",
    "howItWorks.description":
      "Van het eerste gesprek tot de laatste prijsuitreiking regelen wij alles, zodat u zich op uw mensen kunt richten.",

    "howItWorks.discovery.title": "Kennismakingsgesprek",
    "howItWorks.discovery.text":
      "We leren uw team, doelstellingen en gewenste evenementformat kennen.",

    "howItWorks.choose.title": "Kies uw ervaring",
    "howItWorks.choose.text":
      "Selecteer het pakket dat het beste past bij uw aantal deelnemers en doelstellingen.",

    "howItWorks.plan.title": "Wij plannen alles",
    "howItWorks.plan.text":
      "CCC coördineert de logistiek, materialen, planning en het evenementmanagement.",

    "howItWorks.eventDay.title": "Evenementdag",
    "howItWorks.eventDay.text":
      "Uw team geniet van begin tot eind van een professioneel begeleide cricketervaring.",

    "howItWorks.celebrate.title": "Vier het samen",
    "howItWorks.celebrate.text":
      "Sluit af met prijzen, erkenning en herinneringen die de werkcultuur versterken.",

    // Final CTA
    "finalCTA.eyebrow": "Klaar om een sterkere werkplek te creëren?",
    "finalCTA.title": "Laten we een ervaring creëren",
    "finalCTA.titleHighlight": "Die uw team nooit zal vergeten.",
    "finalCTA.description":
      "Of u nu een teambuildingsessie, afdelingsevenement of bedrijfskampioenschap plant, Corporate Cricket Collective levert een professioneel georganiseerde ervaring die relaties versterkt, de werkcultuur verbetert en een blijvende indruk achterlaat.",
    "finalCTA.button": "Begin met plannen",
    "finalCTA.facilitated": "Professioneel begeleid",
    "finalCTA.tailored": "Afgestemd op uw team",
    "finalCTA.premium": "Premium bedrijfservaring",

    // Contact / Proposal Page
    "contact.title": "Vraag een voorstel aan",
    "contact.description":
      "Vertel ons wat u plant, dan ontwerpen wij een cricketgerichte bedrijfservaring die is afgestemd op uw organisatie, doelstellingen en groepsgrootte.",
    "contact.nextTitle": "Wat gebeurt er daarna?",
    "contact.next1": "1. Wij beoordelen uw aanvraag",
    "contact.next2":
      "2. Wij nemen contact met u op voor de belangrijkste details",
    "contact.next3": "3. Wij stellen een voorstel op maat op",
    "contact.next4": "4. U keurt het concept en de datum goed",

    // Proposal Form
    "proposal.fullName": "Volledige naam",
    "proposal.companyName": "Bedrijfsnaam",
    "proposal.jobTitle": "Functietitel",
    "proposal.email": "E-mailadres",
    "proposal.phone": "Telefoonnummer",
    "proposal.participants": "Aantal deelnemers",
    "proposal.location": "Gewenste locatie",
    "proposal.date": "Gewenste datum",
    "proposal.serviceInterest": "Interesse in dienst",
    "proposal.budget": "Geschat budget",
    "proposal.message": "Bericht",

    "proposal.serviceTeamBuilding":
      "Bedrijfservaring / Teambuilding",
    "proposal.serviceTournament": "Corporate crickettoernooi",
    "proposal.serviceNetworking": "Executive networking",

    "proposal.sending": "Aanvraag wordt verzonden...",
    "proposal.submit": "Vraag mijn voorstel aan",

    "proposal.errorSubmit": "Uw aanvraag kon niet worden verzonden.",
    "proposal.errorGeneral":
      "Er is iets misgegaan bij het verzenden van uw aanvraag. Vernieuw de pagina en probeer het opnieuw.",

    // Thank You Page
    "thankYou.title": "Aanvraag voor voorstel ontvangen",
    "thankYou.description":
      "Bedankt dat u contact heeft opgenomen met Corporate Cricket Collective. Een lid van ons team beoordeelt uw wensen en neemt binnen 1 werkdag contact met u op om uw doelstellingen en de volgende stappen te bespreken.",
    "thankYou.nextTitle": "Wat gebeurt er daarna?",
    "thankYou.next1":
      "Wij beoordelen uw bedrijfsgegevens en doelstellingen",
    "thankYou.next2":
      "Wij bepalen welke ervaring het meest geschikt is",
    "thankYou.next3":
      "Wij bevestigen de vereisten en logistiek van het evenement",
    "thankYou.next4":
      "Wij stellen een voorstel op maat voor uw organisatie op",
    "thankYou.anotherProposal": "Nog een voorstel aanvragen",
    "thankYou.backHome": "Terug naar homepage",

    // Footer
    "footer.tagline": "Meer dan een spel. Een sterkere werkplek.",
    "footer.description":
      "Premium zakelijke cricketervaringen ontworpen om teams te versterken, de werkcultuur te verbeteren en onvergetelijke herinneringen te creëren.",
    "footer.quickLinks": "Snelle links",
    "footer.home": "Home",
    "footer.experiences": "Ervaringen",
    "footer.contact": "Contact",
    "footer.privacy": "Privacybeleid",
    "footer.terms": "Voorwaarden",
    "footer.location": "Amsterdam, Nederland",
    "footer.registered": "Geregistreerd in Nederland",
    "footer.rights": "Alle rechten voorbehouden.",
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const STORAGE_KEY = "ccc-language";

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem(STORAGE_KEY);

    if (savedLanguage === "en" || savedLanguage === "nl") {
      setLanguageState(savedLanguage);
      document.documentElement.lang = savedLanguage;
    } else {
      document.documentElement.lang = "en";
    }
  }, []);

  function setLanguage(newLanguage: Language) {
    setLanguageState(newLanguage);
    localStorage.setItem(STORAGE_KEY, newLanguage);
    document.documentElement.lang = newLanguage;
  }

  function t(key: TranslationKey): string {
    return translations[language][key];
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside a LanguageProvider"
    );
  }

  return context;
}