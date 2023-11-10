import express from "express";
import bodyParser from "body-parser";
import { Insult } from "./js/classes/Insult.js";
import { RandomItemInArray, SpecificItemInArray } from "./js/utils/Utilities.js";
import { adjectives, nouns } from "./adjectives.js";

const app = express();
const port = 3000;
const masterKey = "qeAJtSn93a7skP#N";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/random", (req, res) => {
  const randomInsult = new Insult(
    RandomItemInArray(adjectives),
    RandomItemInArray(nouns)
  );

  res.json({
    adjective: randomInsult.adjective,
    noun: randomInsult.noun,
    insult: randomInsult.GenerateInsult(),
  });
});

app.get("/adjectives/:id", (req, res) => {
  res.json(SpecificItemInArray(adjectives, req.params.id));
});

app.get("/nouns/:id", (req, res) => {
  res.json(SpecificItemInArray(nouns, req.params.id));
});

app.listen(port, () => {
  console.log(`Server started on ${port}.`);
});
