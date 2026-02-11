import axios from '../config/axiosConfig';
import { setAuthToken } from '../config/axiosConfig';

const API_ROUTE = process.env.NEXT_PUBLIC_API_ROUTE;

export async function validateUser(email: string, password: string) {
  try {
    const response = await axios.post(`${API_ROUTE}/validateUser`, {
      email,
      password
    });
    
    if (response.data.token) {
      setAuthToken(response.data.token); 
      document.cookie = "admin=true; path=/; max-age=604800";
    }
    
    return {
      success: true,
      user: response.data.user,
      token: response.data.token
    };
  } catch (error) {
    console.error('Validation error:', error);
    return {
      success: false,
      error: 'Credencials incorrectes'
    };
  }
}

export async function getBlogs() {
  try {
    const response = await axios.get(`${API_ROUTE}/blog/getBlogs`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw new Error(`Failed to fetch blogs: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

export async function getBlog(id: string) {
  try {
    const response = await axios.get(`${API_ROUTE}/blog/getBlog/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blog:', error);
    throw new Error(`Failed to fetch blog: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

export async function addBlog(blog: FormData) {
  try {
    const response = await axios.post(`${API_ROUTE}/blog/addEntry`, blog, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error adding blog:', error);
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.response?.data?.error || 'Error al crear el blog');
    }
    throw error;
  }
}

export async function deleteBlog(id: string): Promise<Record<string, unknown>> {
  try {
    const response = await axios.delete(`${API_ROUTE}/blog/deleteBlog/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting blog:', error);
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.response?.data?.error || 'Error al eliminar el blog');
    }
    throw error;
  }
}