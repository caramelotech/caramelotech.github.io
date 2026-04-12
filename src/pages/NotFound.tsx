import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("404: rota não encontrada:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Página não encontrada</p>
        <div className="flex flex-col items-center gap-2">
          <a href="/" className="text-primary underline hover:text-primary/90">
            Voltar para o início
          </a>
          <a href="/#sobre" className="text-primary underline hover:text-primary/90">
            Sobre a comunidade
          </a>
          <a href="/#projetos" className="text-primary underline hover:text-primary/90">
            Ver projetos
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
