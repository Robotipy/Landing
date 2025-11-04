// ==================================================================================================================================================================
// BLOG CATEGORIES 🏷️
// ==================================================================================================================================================================

// These slugs are used to generate pages in the /blog/category/[categoryI].js. It's a way to group articles by category.
export const categorySlugs = {
  agricultura: "Agricultura",
  tutoriales: "Tutoriales",
  rpa: "RPA",
};

// All the blog categories data display in the /blog/category/[categoryI].js pages.
export const categories = [
  {
    // The slug to use in the URL, from the categorySlugs object above.
    slug: categorySlugs.rpa,
    // The title to display the category title (h1), the category badge, the category filter, and more. Less than 60 characters.
    title: "RPA",
    // A short version of the title above, display in small components like badges. 1 or 2 words
    titleShort: "RPA",
    // The description of the category to display in the category page. Up to 160 characters.
    description:
      "Automatización Robótica de Procesos y cálculo de ROI en proyectos de automatización",
    // A short version of the description above, only displayed in the <Header /> on mobile. Up to 60 characters.
    descriptionShort:
      "Automatización Robótica de Procesos",
  },
];
