export default class BlogPost {
  constructor({
    category,
    content,
    datePublished,
    excerpt,
    header,
    id,
    images,
    slug,
    isValidPage,
  }) {
    this.category = category;
    this.content = content;
    this.datePublished = datePublished;
    this.excerpt = excerpt;
    this.header = header;
    this.id = id;
    this.slug = slug;
    this.images = images;
    this.isValidPage = isValidPage;
  }
}
