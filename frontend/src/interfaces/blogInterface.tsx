export default interface BlogInterface {
  _id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  images?: string[];
}