export interface RegisterData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type RegisterProps = {
  onRegister: (values: RegisterData) => void;
};
