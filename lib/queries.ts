export const productsQuery = `
*[_type == "product"] | order(_createdAt desc){
  _id,
  name,
  slug,
  category,
  description,
  image
}
`;