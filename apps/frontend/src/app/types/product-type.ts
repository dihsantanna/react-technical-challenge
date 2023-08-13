import { CategoryType } from "./category-type";
import { ColorType } from "./color-type";
import { ImageType } from "./image-type";

export interface ProductType {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface ProductWithAttributes extends ProductType {
  category: CategoryType;
  image: ImageType;
  color: ColorType;
}

export interface ProductsType {
  data: ProductWithAttributes[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      totalCount: number;
    }
  }
}
