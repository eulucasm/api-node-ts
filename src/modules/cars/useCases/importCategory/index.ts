import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImporteCategoryController } from "./importCategoryController";
import { ImportCategoryUseCase } from "./importCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImporteCategoryController(importCategoryUseCase);

export { importCategoryController }