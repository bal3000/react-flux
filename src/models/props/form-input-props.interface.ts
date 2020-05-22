export interface IFormInputProps<T extends HTMLElement> {
  id: string;
  label: string;
  name: string;
  options?: string[];
  value?: string;
  error?: string;
  onChange: (event: React.ChangeEvent<T>) => void;
}
