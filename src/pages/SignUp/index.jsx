import React, { useCallback, useState } from 'react';
import { api } from '../../services/api';

import { Container, Input, Button } from './styles';

function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [hasError, setHasError] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()

    const user = {
      name,
      email,
      password
    }

    api.post('users', user)
  }, [name, email, password])

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input 
          placeholder="Nome" 
          type="text"
          onChange={event => setName(event.target.value)} 
        />
        <Input error={hasError} placeholder="E-mail" type="text" onChange={event => setEmail(event.target.value)} />
        <Input placeholder="Senha" type="password" onChange={event => setPassword(event.target.value)} />

        <Button type="submit">Cadastrar</Button>
        <Button type="submit" color="secondary" onClick={() => setHasError(!hasError)}>Trocar estado</Button>
      </form>
    </Container>
  )
}

export default SignUp;