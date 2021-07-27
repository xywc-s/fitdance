import store from '@/store';
import { getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';

export interface IProductState {
  seo_title: string,
  seo_description: string,
  seo_keywords: string
}

@Module({dynamic: true, store, name: 'product'})
class Product extends VuexModule implements IProductState{
  public seo_title = ''
  public seo_description = ''
  public seo_keywords = ''

  @Mutation
  public SET_SEO({seo_title, seo_description, seo_keywords}: IProductState){
    this.seo_title = seo_title
    this.seo_description = seo_description
    this.seo_keywords = seo_keywords
  }
 
}

export const ProductModule = getModule(Product)
