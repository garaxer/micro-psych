const API_SERVER = "http://localhost:8080";

export interface Service {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

export const getServices = () =>
  fetch(`${API_SERVER}/services`).then((res) => res.json());

export const getServiceById = (id) =>
  fetch(`${API_SERVER}/services/${id}`).then((res) => res.json());

export const currency = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
});
