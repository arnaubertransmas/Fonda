export async function validateUser(email: string, password: string) {

  const response = await fetch('http://localhost:3001/api/validateUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    return false;
  }
  
  return true;
}

export async function getBlogs() {
    
    const response = await fetch(`http://localhost:3001/api/blog/getBlogs`);
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
}


export async function getBlog(id:string) {
    const response = await fetch(`http://localhost:3001/api/blog/getBlog/${id}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
    
}

export async function addBlog(blog: FormData) {
  try {
    const response = await fetch('http://localhost:3001/api/blog/addEntry', {
      method: 'POST',
      body: blog,
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Error del servidor:', data);
      throw new Error(data.message || data.error || 'Error al crear el blog');
    }

    return data;
  } catch (error) {
    console.error('Error complet:', error);
    throw error;
  }
}

export const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || null;
  }
  return null;
};