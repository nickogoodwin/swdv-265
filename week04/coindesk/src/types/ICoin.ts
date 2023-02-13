export interface ICoin {
  time: {
    updated: string;
    updatedISO: string;
    updateduk: string;
  };
  disclaimer: string;
  chartName: string;
  bpi: {
    USD: {
      code: string;
      symbol: string;
      rate: string;
      description: string;
      rate_float: number;
    };
    GBP: {
      code: string;
      symbol: string;
      rate: string;
      description: string;
      rate_float: number;
    };
    EUR: {
      code: string;
      symbol: string;
      rate: string;
      description: string;
      rate_float: number;
    };
  };
}
