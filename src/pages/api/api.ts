const SHEET_ID = process.env.SHEET_ID!; // Remplacez par l'ID de votre Google Sheet
const API_KEY = process.env.GOOGLE_API_KEY!; // Remplacez par votre clé API Google

import { PlantData } from "@/components/types";

// Fonction pour générer l'URL des images à partir de Google Drive
function getDriveImageURL(fileName: string): string {
  if (!fileName) return "/images/placeholder-image.webp"; // Image par défaut
  return `https://drive.google.com/uc?id=${fileName}`;
}

export async function fetchPlantsData(): Promise<PlantData[]> {
  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Plantes!A1:H?key=${API_KEY}`
  );
  const data = await res.json();

  if (!data.values || data.error) {
    console.warn(
      "Erreur ou aucune donnée trouvée :",
      data.error || "Plage vide."
    );
    return [];
  }

  const rows = data.values;
  const [headers, ...entries] = rows as string[][];

  if (!entries || entries.length === 0) {
    console.warn("Aucune entrée trouvée dans les données.");
    return [];
  }

  return entries.map((entry) => {
    const plant = headers.reduce((acc, header, i) => {
      acc[header.toLowerCase()] = entry[i] || ""; // Valeur par défaut
      return acc;
    }, {} as Record<string, string>);

    return {
      name: plant["nom latin"] || "Plante sans nom", // Nom
      subtitle: plant["nom commun"] || "Aucun sous-titre disponible.", // Sous titre
      sunlight: plant.ensoleillement || "Ensoleillement non spécifié.", // Ensoleillement
      watering: plant.arrosage || "Pas d'informations d'arrosage.", // Arrosage
      blooming: plant.floraison || "Pas de détails sur la floraison.", // Floraison
      tips: plant.conseils || "Aucun conseil fourni.", // Conseils
      image: getDriveImageURL(plant.image || ""), // Image1
    };
  });
}
