
export class DiagramAttrs {
  readonly title: string;
  readonly author: string;
  readonly company: string;
  readonly region: string;

  constructor(title: string, author: string, company: string, region: string) {
    this.title = title;
    this.author = author;
    this.company = company;
    this.region = region;
  }

  toJSON() {
    return {
      'title': this.title,
      'author': this.author,
      'company': this.company,
      'region': this.region
    }
  }
}
