export class Insult {
  constructor(adjective, noun) {
    this.adjective = adjective;
    this.noun = noun;
  }

  GenerateInsult = function () {
    return `You ${this.adjective.text} ${this.noun.text}`;
  };
}
