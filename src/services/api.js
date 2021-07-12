export async function getCategories() {
  // "https://api.mercadolibre.com/sites/MLB/categories"
  const fetchCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categoriesJson = await fetchCategories.json();
  return categoriesJson;
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
