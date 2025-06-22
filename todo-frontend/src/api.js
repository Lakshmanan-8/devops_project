// src/api.js or wherever this lives
import axios from "axios";

export default axios.create({
  baseURL: "http://20.197.8.172:5000/todos", // ✅ use public IP
});
