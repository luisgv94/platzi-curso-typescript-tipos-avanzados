import { BaseModel } from './../base.model';
import { Category } from './../categories/category.model';

export type Size = 'S' | 'M' | 'L' | 'XL';
export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  size?: Size;
  color: string;
  price: number;
  category: Category;
  isNew: boolean;
  tags: string[];
}
