class Article {
  private description: string;
  
  constructor(description: string) {
    this.description = description;
  }
  getDescription(): string {
    return this.description;
  }

  setDescription(value: string) {
    this.description = value;
  }
}
export{Article}
