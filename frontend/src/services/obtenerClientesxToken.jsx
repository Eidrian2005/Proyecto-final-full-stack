import { decode } from 'jwt-js-decode';

const getClienteId = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const tokenCliente = decode(token);
      console.log("Token decodificado:", tokenCliente);
      return tokenCliente.payload.id;  
    }
    return null;
  };

export default getClienteId;