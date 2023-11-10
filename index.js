import express from "express";
import bodyParser from "body-parser";
import { Insult } from "./js/classes/Insult.js";
import { RandomItemInArray, SpecificItemInArray } from "./js/utils/Utilities.js";
import { adjectives, nouns } from "./resources.js";

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

app.get("/adjectives", (req, res) => {
  const severity = parseInt(req.query.severity);
  const filteredAdjectives = adjectives.filter((adjective) => adjective.severity === severity);
  res.json(filteredAdjectives);
});

app.post("/adjectives", (req, res) => {
  const newAdjective = {
    id: 2000 + (adjectives.length + 1),
    text: req.body.text,
    severity: req.body.severity
  };
  nouns.push(newAdjective);
  res.json(newAdjective);
});

app.put("/adjectives/:id", (req, res) => {
  const adjectiveToChange = SpecificItemInArray(adjectives, parseInt(req.params.id));
  adjectiveToChange.text = req.body.text;
  adjectiveToChange.severity = req.body.severity;
  res.json(adjectiveToChange);
});

app.get("/nouns/:id", (req, res) => {
  res.json(SpecificItemInArray(nouns, req.params.id));
});

app.get("/nouns", (req, res) => {
  const severity = parseInt(req.query.severity);
  const filteredAdjectives = nouns.filter((noun) => noun.severity === severity);
  res.json(filteredAdjectives);
});

app.post("/nouns", (req, res) => {
  const newNoun = {
    id: 2000 + (nouns.length + 1),
    text: req.body.text,
    severity: req.body.severity
  };
  nouns.push(newNoun);
  res.json(newNoun);
});

app.put("/nouns/:id", (req, res) => {
  const nounToChange = SpecificItemInArray(nouns, parseInt(req.params.id));
  nounToChange.text = req.body.text;
  nounToChange.severity = req.body.severity;
  res.json(nounToChange);
});

app.listen(port, () => {
  console.log(`Server started on ${port}.`);
});
