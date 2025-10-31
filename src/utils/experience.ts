export default function getExperience() {
  const godineIskustva = new Date().getFullYear() - 2016;
  const brojKlijenata = godineIskustva * 40; // Pretpostavka: 40 klijenata godišnje

  return { godineIskustva, brojKlijenata };
}
