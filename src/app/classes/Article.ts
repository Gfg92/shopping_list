class Article {
  private description: string;
  constructor ( newDescription: string){
    this.description = newDescription;
  }
  getDescription(): string {
    return this.description;
  }

  setDescription(value: string) {
    this.description = value;
  }
}
export{Article}
