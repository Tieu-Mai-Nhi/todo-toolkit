import axiosClient from "./axiosClient";

const todoApi = {
    getAll(params) {
        const url = "/list"
        return axiosClient.get(url, { params })
    },
    get(id) {
        const url = `/list/${id}`;
        return axiosClient.get(url)

    },
    add(data) {
        const url = '/list';
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = `/list/${data.id}`;
        return axiosClient.patch(url, data);
    },
    remove(id) {
        const url = `/list/${id}`;
        return axiosClient.delete(url)
    }
}

export default todoApi;