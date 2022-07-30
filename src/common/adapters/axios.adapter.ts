import { Injectable } from "@nestjs/common";
import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "../interfaces/http-adapter-interface";


@Injectable()
export class AxiosAdapter implements HttpAdapter {
    private axios: AxiosInstance = axios;

    async get<T>(url: string): Promise<T> {
        try {
            const resp = await this.axios.get<T>(url);
            return resp.data;
        }
        catch (error) {
            throw error;
        }

    }
}