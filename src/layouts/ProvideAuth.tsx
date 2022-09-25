import { AuthenContext, useAuth } from "src/hooks/useAuth";
import { useProvideAuth } from "src/hooks/useProvideAuth";

export const ProvideAuth = ({ children }: any) => {
  const auth = useProvideAuth();
  return (
    <AuthenContext.Provider value={auth} > {children} </AuthenContext.Provider>
  );
}