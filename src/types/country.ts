export type Country = {
  subregion: string;
  name: { common: string };
  capital: string[];
  population: number;
  area: number;
  flags: {
    png: string;
  };
};