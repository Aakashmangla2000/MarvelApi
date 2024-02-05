import axios from "axios";
import { Request, Response } from "express";
import md5 from "md5";

class ExternalController {
  static async getCharacters(req: Request, res: Response) {
    try {
      const name: string | undefined = req.query.name as string | undefined;

      const ts = 1;
      const publicApiKey = process.env.PUBLIC_API_KEY;
      const privateApiKey = process.env.PRIVATE_API_KEY;
      const hash = md5(`${ts}${privateApiKey}${publicApiKey}`);
      const limit = 20;
      let apiUrl = `http://gateway.marvel.com/v1/public/characters?limit=${limit}&ts=${ts}&apikey=${publicApiKey}&hash=${hash}`;
      if (name) {
        apiUrl += `&nameStartsWith=${name}`;
      }
      const response = await axios.get(apiUrl);
      const result = response.data.data.results;
      const characterNames = result.map(({ name }: { name: string }) => name);
      res.json(characterNames);
    } catch (error: any) {
      console.error("Error calling external API:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default ExternalController;
