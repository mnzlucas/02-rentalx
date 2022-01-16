import { Category } from '../model/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository';

class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log('name: %s ', name);
    return null;
  }
  list(): Category[] {
    throw new Error('Method not implemented.');
  }
  create({ name, description }: ICreateCategoryDTO): void {
    console.log('name: %s description: %s', name, description);
  }
}

export { PostgresCategoriesRepository };
