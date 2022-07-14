import {env} from "../../support/utils";

export const BASE_URI = env("API_GATEWAY_URL");
export const ADMIN_BASE_URI = env("API_ADMIN_URL");

export const LOGIN = "/login";
export const TOKENS = "/tokens";


