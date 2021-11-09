import { axiosClient } from './axiosClient';
import { authenHeader } from './authenticateApi';

export const loaiApi = () => {
    const endpoint = '/Loai';
    const axiosClient = axiosClient();

    const loaiApiObj = {
        getAll: () => {
            return axiosClient.get(endpoint);
        },
        getById: (id) => {
            return axiosClient.get(`${endpoint}/${id}`);
        },
        addItem: (item) => {
            return axiosClient.post(`${endpoint}`, item, {
                headers: authenHeader()
            });
        }
    };

    return loaiApiObj;
};
