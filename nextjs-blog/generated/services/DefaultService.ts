/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Login } from '../models/Login';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * ログイン
     * ログインIDとパスワード」
     * @param requestBody
     * @returns any User Created
     * @throws ApiError
     */
    public static postLogin(
        requestBody?: Login,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Missing Required Information`,
                409: `Email Already Taken`,
            },
        });
    }

}