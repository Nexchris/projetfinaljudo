import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { FIREBASE_AUTH } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import styled from 'styled-components';
import Backgroundimage from './image/adminbackground.png'

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); 
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);

        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);

            navigate('/backoffice');
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Background>
        <Container>
            <Content>
                <Title>Connectez Vous </Title>
                <Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                {loading ? (
                    <Loading>Loading...</Loading>
                ) : (
                    <Button onClick={signIn}>Sign In</Button>
                )}
            </Content>
        </Container>
        </Background>
    );
};

export default LoginScreen;

const Background = styled.div`
background-image: url(${Backgroundimage});
height: 100vh;
background-size: cover;
background-color: black;
`


const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
`;

const Content = styled.div`
    background-color: #f0f0f0;
    border-radius: 10px;
    padding: 20px;
    width: 300px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
    font-family: 'Inter';
    font-weight: 600;
`;


const Input = styled.input`
    padding: 10px;
    margin: 5px;
    border: 1px solid #ccc;
    border-radius: 15px; /* Modification ici */
    width: 100%;
    font-size: 16px;
    box-sizing: border-box;
    background-color: gray;
    color:black;
`;

const Button = styled.button`
    padding: 10px 20px;
    margin: 5px;
    background-color: gray;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;

    &:hover{
        background-color:black
    }
`;

const Loading = styled.div`
    margin-top: 10px;
    font-size: 16px;
    color: gray;
`;