import axios from "axios";
import { Request, Response } from "express";
import md5 from "md5";

class ExternalController {
  static async getCharacters(req: Request, res: Response) {
    try {
      const ts = 1;
      const publicApiKey = process.env.PUBLIC_API_KEY;
      const privateApiKey = process.env.PRIVATE_API_KEY;
      const hash = md5(`${ts}${privateApiKey}${publicApiKey}`);
      const limit = 20;
      const apiUrl = `http://gateway.marvel.com/v1/public/comics?limit=${limit}&ts=${ts}&apikey=${publicApiKey}&hash=${hash}`;
      const response = await axios.get(apiUrl);

      res.json(response.data);
    } catch (error: any) {
      console.error("Error calling external API:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default ExternalController;
