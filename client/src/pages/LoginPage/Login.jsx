import { use, useState } from "react";
import "./login.css"
import {
    Button,
    Input,
    InputGroup,
    InputRightElement,
    Stack
  } from '@chakra-ui/react'

const Login = () => {

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [isLoading,setIsLoading] = useState(false); 

    const data ={
        email,
        password
    }

    const sendData = () =>{
        console.log(data);
    }

  return (
    <div className="login-container">
        <div className="login-header">
            <h1>ClientFlow</h1>
        </div>

        <div className="login-form">
            <Stack spacing={6}>
            <Input type='email' placeholder="Enter Email" size="lg" borderWidth="3px" borderColor="teal" onChange={(e) => setEmail(e.target.value)} />
            
            <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                    size="lg"
                    borderWidth="3px" borderColor="teal"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <InputRightElement width='4.5rem'>
                    <Button h='2rem' size='sm' marginTop={1} onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>

            <Button w="200px" colorScheme="teal" type="submit" onClick={() => sendData()} isLoading = {isLoading}>Submit</Button>
            </Stack>
        </div>
    </div>
  )
}

export default Login