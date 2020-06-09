import axios from "axios";

export default axios.create({
  baseURL: "http://e158aebdcfca.ngrok.io", //needs to be changed every 8 hours
});
