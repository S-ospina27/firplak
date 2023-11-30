import { session } from "../tools/SessionSettings";
const IsAuthenticatedMiddleware = ({ children }) => {
  return session() ? children : <h1>NO TIENES TOKEN DE ACCESO</h1>;
};

export default IsAuthenticatedMiddleware;
