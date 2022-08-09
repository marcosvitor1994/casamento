import mensagens from "./mensagens"

const LoginValidator = {
    
    email: {
        required: mensagens.requiredEmail,
        maxLength: {value: 100, message: mensagens.maxLength + ': 100'},
        pattern: {value: /\S+@\S+\.\S+/ , message: mensagens.emailIncorreto}
    },
    senha: {
        required: mensagens.requiredSenha,
        minLength: {value: 9, message: mensagens.minLength + ': 9'}, 
        pattern: {value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{9,20}$/, message: mensagens.senhaIncorreta},
    }
}

export default LoginValidator