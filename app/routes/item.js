import Route from '@ember/routing/route';
import { products } from '../data/product';

export default class ItemRoute extends Route {
  model(params) {
    const { item_id } = params;
    //to get access for the product
    const product = products.find(({ id }) => id === item_id);
    console.log(product);

    return product;
  }
}
