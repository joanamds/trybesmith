// fonte: exercício do conteúdo do dia 3 - express com typescript - seção 8 - modulo backend
interface IToken {
  payload: {
    id: number;
    username: string;
    vocation: string;
    level: number;
    password: string;
  };
  iat: number;
  exp: number;
}

export default IToken;