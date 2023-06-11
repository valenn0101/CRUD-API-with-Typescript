interface Brands {
  Name: string;
  Description: string;
  logo_url: any;
}

interface Products {
  Name: string;
  Description: string;
  Image_url: any;
  price: number;
  discounted: boolean;
  discountedPercentage?: number;
  stock: number;
  brand?: number;
}

export type { Brands, Products };
