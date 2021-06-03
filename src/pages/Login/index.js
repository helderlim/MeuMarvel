import React from 'react';
import {Route} from 'react-router-dom'
import { Container, Title, InputLogin, InputPassword, ButtonLogin, Box, Form, Label } from './styles';

const Login = () => {
    return (
        <Container>
            <Box>
                <Form>
                    <Title>MeuMarvel.com</Title>
                    <Label>Login</Label>
                    <InputLogin />
                    <Label>Senha</Label>
                    <InputPassword type="password"/>
                </Form>
               
                <Route render={({ history}) => ( <ButtonLogin onClick={() => { history.push('/homepage') }}>Logar</ButtonLogin>
                )} />
            </Box>

        </Container>

    )
}

export default Login;