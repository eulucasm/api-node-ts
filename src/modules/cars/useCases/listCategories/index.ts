import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./listCategoryController";
import { ListCategoriesUseCase } from "./listCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export { listCategoriesController }

