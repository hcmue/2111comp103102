import { axiosClient } from './axiosClient';
import { authenHeader } from './authenticateApi';

export const loaiApi = () => {
    const endpoint = '/categories';
    const axios = axiosClient();

    const loaiApiObj = {
        getAll: () => {
            return axios.get(endpoint);
        },
        getById: (id) => {
            return axios.get(`${endpoint}/${id}`);
        },
        addItem: (item) => {
            return axios.post(`${endpoint}`, item, {
                headers: authenHeader()
            });
        }
    };

    return loaiApiObj;
};
