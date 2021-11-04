import axios from "axios";

export default axios.create({
  baseURL: 'https://quote-garden.herokuapp.com/api/v3/quotes',
  headers: {
    "Content-type": "application/json"
  }
});