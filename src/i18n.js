import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { home: "Home", about_us: "About Us", gallery: "Gallery", contact: "Contact", menu: "Menu", welcome_message: "Welcome to Our Restaurant", make_a_reservation: "Make a Reservation" }},
    fr: { translation: { home: "Accueil", about_us: "À propos de nous", gallery: "Galerie", contact: "Contact", menu: "Menu", welcome_message: "Bienvenue dans notre restaurant", make_a_reservation: "Faire une réservation" }},
    it: { translation: { home: "Home", about_us: "Chi siamo", gallery: "Galleria", contact: "Contatto", menu: "Menu", welcome_message: "Benvenuti nel nostro ristorante", make_a_reservation: "Effettua una prenotazione" }},
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
