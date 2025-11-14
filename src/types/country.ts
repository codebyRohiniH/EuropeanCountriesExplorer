export type Country = {
  name: { common: string };
  capital: string[];
  population: number;
  area: number;
  flags: {
    png: string;
  };
};
