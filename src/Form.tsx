import React, { useState } from 'react';

const LoginForm: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const postData = new FormData();

        postData.append('username', formData.email);
        postData.append('password', formData.password);

        fetch('/api/v1/auth/login', {
            method: 'POST',
            // @ts-ignore
            body: new URLSearchParams( postData ),
            headers: {
                'Accept': 'application/json',
                /*'Content-Type': 'application/x-www-form-urlencoded'*/
            },
            credentials: 'same-origin',
            mode: 'cors',
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
            </label>
            <label>
                Password:
                <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default LoginForm;

