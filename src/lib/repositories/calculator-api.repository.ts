import axios from "../api/axios";

import {
  IAnalyzeImageRequest,
  IAnalyzeImageResponse,
  ICalculateNutrientsRequest,
  ICalculateNutrientsResponse,
  IMealSaveRequest,
  IMealSaveResponse,
} from "../interfaces/requests.interface";

import { API_ROUTES } from "../constants";

class CalculatorAPIRepository {
  constructor() {}

  async analyzeImage({
    file,
  }: IAnalyzeImageRequest): Promise<IAnalyzeImageResponse> {
    const response = await axios.post<IAnalyzeImageResponse>(
      API_ROUTES.MEALS.ANALYZE_IMAGE,
      {
        file,
      }
    );
    const ingredients = response.data;

    return ingredients;
  }

  async calculateNutrients(
    ingredients: ICalculateNutrientsRequest
  ): Promise<ICalculateNutrientsResponse> {
    const response = await axios.post<ICalculateNutrientsResponse>(
      API_ROUTES.MEALS.CALCULATE_NUTRIENTS,
      ingredients
    );
    const nutrients = response.data;

    return nutrients;
  }

  async saveMeal(params: IMealSaveRequest): Promise<IMealSaveResponse> {
    const response = await axios.post<IMealSaveResponse>(
      API_ROUTES.MEALS.ANALYZE_IMAGE,
      params
    );
    const meal = response.data;

    return meal;
  }
}

export { CalculatorAPIRepository };
