import Route from '@ember/routing/route';

export default class CartRoute extends Route {
  model() {
    const items = [{ price: 10 }, { price: 15 }];
    return items;
  }
  //overright the setup controller function

  //   setupController(controller, model) {
  //     super.setupController(controller, model);
  //     //subtotal with reduce method
  //     const subtotal = model.reduce((acc, item) => {
  //       return acc + item.price;
  //     }, 0);
  //     //set the controller
  //     controller.set('subtotal', subtotal);
  //   }
}
