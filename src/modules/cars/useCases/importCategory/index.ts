import { ImporteCategoryController } from "./importCategoryController";
import { ImportCategoryUseCase } from "./importCategoryUseCase";

const importCategoryUseCase = new ImportCategoryUseCase();
const importCategoryController = new ImporteCategoryController(importCategoryUseCase);

export { importCategoryController }