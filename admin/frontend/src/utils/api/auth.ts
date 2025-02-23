export const API = 'http://localhost:3000/api';

interface LoginCredentials {
  email: string;
  password: string;
}

export const authService = {
  register: async (formData: FormData) => {
    try {
      const response = await fetch(`${API}/user/register`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }

      return await response.json();
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },

  login: async (credentials: LoginCredentials) => {
    try {
      const response = await fetch(`${API}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      return await response.json();
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },
};