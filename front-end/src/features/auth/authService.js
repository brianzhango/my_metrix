import axios from "axios";

const API_URL = `${BASE_URL}/api/users/`
const BASE_URL = process.env.baseURL || "http://localhost:8082"

const logout = () => {
    localStorage.removeItem('user')

}

// Login user
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
  
    return response.data
}

const authService = {
    login,
    logout,
}

export default authService