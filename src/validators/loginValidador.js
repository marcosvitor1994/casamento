import mensagens from "./mensagens"

const LoginValidator = {
    
    email: {
        required: mensagens.requiredEmail,
        maxLength: {value: 100, message: mensagens.maxLength + ': 100'},
        pattern: {value: /\S+@\S+\.\S+/ , message: mensagens.emailIncorreto}
    },
    senha: {
        required: mensagens.requiredSenha,
        minLength: {value: 8, message: mensagens.minLength + ': 8'}, 
    }
}

export default LoginValidator