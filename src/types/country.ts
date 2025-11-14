export type Country = {
  name: { common: string };
  capital: string[];
  population: number;
  area: number;
  flag: {
    png: string;
  };
};