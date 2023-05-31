import { writable } from 'svelte/store';

export const api_host = "http://34.175.63.88:8080";
export const acp_name = writable({"name": "João"});