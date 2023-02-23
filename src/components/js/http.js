import Vue from 'vue'
import axios from 'axios';


const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          // 'X-Debug-Tag': '_csrf-frontend'
      }
});

Vue.prototype.$http = http

export default http;
