const MEALS = {
  ANALYZE_IMAGE: "/meals/analyze-image",
  CALCULATE_NUTRIENTS: "/meals/calculate-nutrients",
  SAVE_FOOD: "/meals/save",
} as const;

const API_ROUTES = { MEALS } as const;

export { API_ROUTES };
