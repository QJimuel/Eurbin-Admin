
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginAdmin = async () => {
    if (!email || !password) {
        alert('Email and password are required');
        return;
    }

    try {
        const response = await axios.post('http://localhost:7000/admin/login', { email, password });

        if (response.status === 200) {
            localStorage.setItem('token', response.data.token); // Save the token in local storage
            alert('Login successful');
            navigate('/'); // Redirect to the root page
        } else {
            alert('Login failed');
        }
    } catch (err) {
        if (err.response && err.response.status === 401) {
            alert('Invalid credentials');
        } else {
            console.error('Error logging in:', err);
            alert('An error occurred during login');
        }
    }
};

  return (
      <>
          <h1>Admin Login</h1>
          <table>
              <tbody>
                  <tr>
                      <td><label>Email:</label></td>
                      <td><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></td>
                  </tr>
                  <tr>
                      <td>Password:</td>
                      <td><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></td>
                  </tr>
                  <tr>
                      <td><button onClick={loginAdmin}>Login</button></td>
                  </tr>
              </tbody>
          </table>
      </>
  );
    
}
export default Login;