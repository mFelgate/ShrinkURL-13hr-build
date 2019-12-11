export class TinyURL {
  tinyUrl: string;
  fullUrl: string;
  constructor(tinyUrl: string, fullUrl: string) {
    this.fullUrl = fullUrl;
    this.tinyUrl = tinyUrl;
  }
}
