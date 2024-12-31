import { HeadersDefaults } from "axios";

export interface AxiosCommonHeaderProperties extends HeadersDefaults {
  "Access-Control-Allow-Headers": string;
  "Access-Control-Allow-Methods": string;
  "Access-Control-Allow-Origin": string;
  "Content-Type": string;
}