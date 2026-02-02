import fr from './fr';
import de from './de';

const translations = {
    fr,
    de
};

// Configuration par défaut
const defaultLanguage = 'fr';
const currentLanguage = defaultLanguage;

// Fonction pour obtenir une traduction avec fallback
export const t = (path, lang = currentLanguage) => {
    const keys = path.split('.');
    let value = translations[lang];

    for (const key of keys) {
        if (value && value[key] !== undefined) {
            value = value[key];
        } else {
            // Fallback au français si la traduction n'existe pas
            let fallbackValue = translations[defaultLanguage];
            for (const k of keys) {
                fallbackValue = fallbackValue?.[k];
            }
            return fallbackValue || path;
        }
    }

    return value || path;
};

// Fonction pour changer la langue
export const setLanguage = (lang) => {
    if (translations[lang]) {
        currentLanguage = lang;
        return true;
    }
    return false;
};

// Fonction pour obtenir la langue actuelle
export const getLanguage = () => currentLanguage;

// Fonction pour obtenir toutes les traductions d'une langue
export const getTranslations = (lang = currentLanguage) => translations[lang];

export default translations;