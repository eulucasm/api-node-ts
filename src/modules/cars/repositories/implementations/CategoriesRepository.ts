import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";
import {getRepository, Repository} from "typeorm";
/*
TODO: usamos o padrão Singleton de projetos para garantir que apenas uma 
      instância de CategoriesRepository seja criada
*/
class CategoriesRepository implements ICategoriesRepository {   
   private repository: Repository<Category>;   

   constructor() {
      this.repository = getRepository(Category);
   }
   
   async create({ description, name }: ICreateCategoryDTO): Promise<void> {
      const category = this.repository.create({
         description,
         name,
      })

      await this.repository.save(category)
   }

   async list(): Promise<Category[]> {
      const categories = await this.repository.find()
      return categories;
   }

   async findByName(name: string): Promise<Category> {
      //select * from categories where name = 'name' limit 1
      const category = await this.repository.findOne({ name })
      return category;
   }
}

export { CategoriesRepository };