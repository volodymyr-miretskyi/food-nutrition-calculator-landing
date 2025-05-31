import { IIngredient, INutrient } from "./meal.interface";

interface IAnalyzeImageRequest {
  file: Blob;
}

interface IAnalyzeImageResponse {
  imageId: string;
  ingredients: IIngredient[];
}

interface ICalculateNutrientsRequest {
  ingredients: IIngredient[];
}

interface ICalculateNutrientsResponse {
  nutrients: INutrient[];
}

type Rate = 1 | 2 | 3 | 4 | 5;

interface IMealSaveRequest {
  imageId: string;
  name: string;
  ingredients: IIngredient[];
  nutrients: INutrient[];
  rate: Rate;
  nickname?: string;
  feedback?: string;
}

interface IMealSaveResponse {
  imageId: string;
  name: string;
  ingredients: IIngredient[];
  nutrients: INutrient[];
  rate: Rate;
  nickname?: string;
  feedback?: string;
}

export {
  Rate,
  IAnalyzeImageRequest,
  IAnalyzeImageResponse,
  ICalculateNutrientsRequest,
  ICalculateNutrientsResponse,
  IMealSaveRequest,
  IMealSaveResponse,
};
