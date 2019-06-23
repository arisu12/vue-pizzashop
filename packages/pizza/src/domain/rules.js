export const pizzaRules = {
  name: [(v) => !!v || 'Name is required'],
  price: [
    (v) => !!v || 'Price is required',
    (v) =>
      (Number(v) >= 5 && Number(v) <= 15) || 'Price must be between 5 and 15',
  ],
  image: [(v) => !!v || 'Image is required'],
};
