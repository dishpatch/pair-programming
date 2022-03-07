export const testCleanedProducts = (cleanedProducts) => {
  const testResults = cleanedProducts.map(
    (p) =>
      !!(
        p.title &&
        typeof p.title === "string" &&
        p.handle &&
        typeof p.handle === "string" &&
        p.description &&
        typeof p.description === "string" &&
        p.vendor &&
        typeof p.vendor === "string" &&
        p.serves &&
        typeof p.serves === "number" &&
        p.imageUrl &&
        typeof p.imageUrl === "string" &&
        p.allergens &&
        Array.isArray(p.allergens) &&
        p.dietaries &&
        typeof p.dietaries.vegetarian === "boolean" &&
        typeof p.dietaries.vegan === "boolean"
      )
  );
  console.log(
    cleanedProducts.length,
    testResults.findIndex((r) => !r) > -1 ? "FAILED" : "PASSED"
  );
};
