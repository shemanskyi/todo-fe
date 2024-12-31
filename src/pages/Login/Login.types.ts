export interface LoginData {
  email: string;
  password: string;
}

export type LoginProps = {
  onLogin: (values: LoginData) => void;
};
