import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const masterKey = "qeAJtSn93a7skP#N";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/random", (req, res) => {
  const randomInsult = new Insult(RandomItemInArray(adjectives), RandomItemInArray(nouns));

  res.json({
    "adjective": randomInsult.adjective,
    "noun": randomInsult.noun,
    "text": randomInsult.text()
  });
});

app.listen(port, () => {
  console.log(`Server started on ${port}.`);
});

class Insult {
  constructor(adjective, noun) {
    this.adjective = adjective;
    this.noun = noun;
  }

  text = function() { return `You ${this.adjective.text} ${this.noun.text}`};
}

function RandomItemInArray(array) {
  return array[Math.floor(Math.random() * (array.length - 0) + 0)];
}

const adjectives = [
  {
    id: 1001,
    text: "badgering",
  },
  {
    id: 1002,
    text: "belligerent",
  },
  {
    id: 1003,
    text: "bellicose",
  },
  {
    id: 1004,
    text: "malignant",
  },
  {
    id: 1005,
    text: "murky",
  },
  {
    id: 1006,
    text: "manipulative",
  },
  {
    id: 1007,
    text: "machiavellian",
  },
  {
    id: 1008,
    text: "idiotic",
  },
  {
    id: 1009,
    text: "sycophantic",
  },
  {
    id: 1010,
    text: "frantic",
  },
  {
    id: 1011,
    text: "flabbering",
  },
];

const nouns = [
  {
    id: 2001,
    text: "buffoon",
  },
  {
    id: 2002,
    text: "blaggard",
  },
  {
    id: 2003,
    text: "blot",
  },
  {
    id: 2004,
    text: "badger",
  },
  {
    id: 2005,
    text: "manape",
  },
  {
    id: 2006,
    text: "mollusc",
  },
  {
    id: 2007,
    text: "morsel",
  },
  {
    id: 2008,
    text: "fob",
  },
  {
    id: 2009,
    text: "fool",
  },
  {
    id: 2010,
    text: "fanatic",
  },
  {
    id: 2011,
    text: "poltergeist",
  },
];
