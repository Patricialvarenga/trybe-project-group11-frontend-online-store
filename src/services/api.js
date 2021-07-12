export async function getCategories() {
  // "https://api.mercadolibre.com/sites/MLB/categories"
  const fetchCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categoriesJson = await fetchCategories.json();
  return categoriesJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // "https://api.mercadolibre.com/sites/MLB/search?category=MLB1055&q=Motorola"
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const fetchQuery = await fetch(url);
  const queryJson = await fetchQuery.json();
  return queryJson;
}
