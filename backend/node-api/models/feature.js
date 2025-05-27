class Feature {
    constructor({ name, start, end, type, organism }) {
      this.name = name;
      this.start = start;
      this.end = end;
      this.type = type;
      this.organism = organism;
    }
  }
  
  module.exports = Feature;