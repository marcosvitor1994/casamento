import axios from "axios";

const ApiBase = axios.create({
  baseURL: "https://api-casamento.vercel.app",
});

export default ApiBase;
