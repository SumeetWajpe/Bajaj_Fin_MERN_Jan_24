// type ProductModel = {
// id: number;
// title: string;
// price: number;
// rating: number;
// likes: number;
// imageUrl: string;
// description: string;
// };

class ProductModel {
  constructor(
    public id: number = 0,
    public title: string = "",
    public price: number = 0,
    public rating: number = 0,
    public likes: number = 0,
    public imageUrl: string = "",
    public description: string = "",
  ) {}
}
export default ProductModel;
