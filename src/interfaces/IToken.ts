// fonte: exercício do conteúdo do dia 3 - express com typescript - seção 8 - modulo backend
interface IToken {
  payload: {
    id: number;
    name: string;
    email: string;
    password: string;
  };
  iat: number;
  exp: number;
}

export default IToken;