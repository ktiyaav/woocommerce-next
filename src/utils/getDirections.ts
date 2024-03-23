
const rtlLanguages = ["ar", "he"];

const getDirections = (locale: string | undefined) => {
    if (!locale) return "ltr";
    return rtlLanguages.includes(locale) ? "rtl" : "ltr";
}
  
export default getDirections;