import { useState } from 'react';
import axios from 'axios';

function SignUp() {
    const API_URL = 'http://localhost:7000/admin/register'; // Adjust this to match your backend route if needed

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const registerAdmin = async () => {
        if (!username || !email || !password || !confirmPassword) {
            alert('All fields are required');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const rawInput = {
            username: username,
            email: email,
            password: password,
        };

        console.log('Register Admin Payload:', rawInput);

        try {
            const response = await axios.post(API_URL, rawInput);

            if (response.status === 201) {
                clearInput();
                alert('Admin registered successfully');
            } else {
                alert('Failed to register admin');
            }
        } catch (err) {
            console.error('Error registering admin:', err.response ? err.response.data : err.message);
            alert(`Error: ${err.response ? err.response.data.message : 'An error occurred while registering the admin'}`);
        }
    };

    const clearInput = () => {
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <>
            <h1>Admin Sign Up</h1>
            <table>
                <tbody>
                    <tr>
                        <td><label>Username:</label></td>
                        <td><input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Confirm Password:</td>
                        <td><input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><button onClick={registerAdmin}>Sign Up</button></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default SignUp;
