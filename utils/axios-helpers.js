
import axios from "axios";

export const clientAxios = axios.create();

export const getClientAxios = async (req) => {

   clientAxios.defaults.headers.common.Authorization = `Bearer eyJraWQiOiIxIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOjg5LCJ1dHlwaWQiOjIsImlhdCI6MTcxOTk5Mjc5MSwiZXhwIjoxNzIwNTk3NTkxfQ.Yo_akd-IWLpbWSRlBrl1qwaLUyKcY2_B8cMeHiP-vmQ`;

   return clientAxios;
}
