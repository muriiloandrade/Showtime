export interface Filme {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}
export interface Resultado {
  results: Filme[];
}
