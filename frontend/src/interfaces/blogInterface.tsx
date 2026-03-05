export default interface BlogInterface {
  _id: string;
  name: string;
  description: string;
  url?: string;
  images?: string[];
  links?: { label: string; url: string }[];
  tags?: string[];
}