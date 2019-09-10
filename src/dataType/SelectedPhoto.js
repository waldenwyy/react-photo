export class PhotoAttributes {
  constructor(size, text, price) {
    Object.assign(this, { size, text, price });
  }
}

export default class SelectedPhoto {


  static ATTR_SM = new PhotoAttributes("small", "Small", 10);
  static ATTR_MD = new PhotoAttributes("medium", "Medium", 50);
  static ATTR_LG = new PhotoAttributes("large", "Large", 100);
  static ATTR_XL = new PhotoAttributes("x-large", "X-Large", 200);

  // Instance 
  size = undefined;
  price = 0;

  set(values/*: { key: prop }*/) {
    return Object.assign(new SelectedPhoto(), values);
  }
}
