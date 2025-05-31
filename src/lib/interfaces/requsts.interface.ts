import { IIngredient, INutrient } from "./meal.interface";

interface IAnalyzeImageRequest {
  file: Blob;
}

interface IAnalyzeImageResponse {
  ingredients: IIngredient[];
}

interface ICalculateNutrientsRequest {
  ingredients: IIngredient[];
}

interface ICalculateNutrientsResponse {
  nutrients: INutrient[];
}

interface IMealSaveRequest {}

interface IMealSaveResponse {}

export {
  IAnalyzeImageRequest,
  IAnalyzeImageResponse,
  ICalculateNutrientsRequest,
  ICalculateNutrientsResponse,
  IMealSaveRequest,
  IMealSaveResponse,
};
