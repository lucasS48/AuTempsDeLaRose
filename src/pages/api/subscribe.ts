import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
const MAILCHIMP_API_URL = `https://us11.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;

const subscribeHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const { email_address, status } = req.body;

  try {
    console.log("Données envoyées à Mailchimp :", { email_address, status });
    const response = await axios.post(
      MAILCHIMP_API_URL,
      { email_address, status },
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `any:${MAILCHIMP_API_KEY}`
          ).toString("base64")}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json({ message: "Succès", data: response.data });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorData = error.response?.data;

      // Gérer l'erreur "Member Exists"
      if (errorData?.title === "Member Exists") {
        return res.status(400).json({
          message: "Vous êtes déjà abonné à cette liste.",
        });
      }

      // Autres erreurs Axios
      console.error("Erreur Axios :", errorData || error.message);
      return res.status(400).json({
        message: "Erreur lors de l'inscription.",
        error: errorData || error.message,
      });
    }

    // Erreurs inconnues
    console.error("Erreur inconnue :", error);
    res.status(500).json({ message: "Erreur inconnue", error: String(error) });
  }
};

export default subscribeHandler;
