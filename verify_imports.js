const { articles } = require('./app/blog/_assets/content.js');

console.log('Articles length:', articles.length);
articles.forEach((article, index) => {
  if (!article) {
    console.error(`Article at index ${index} is undefined!`);
  } else {
    console.log(`Article ${index}: ${article.slug}`);
  }
});
