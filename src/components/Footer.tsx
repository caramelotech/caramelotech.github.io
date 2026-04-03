const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          Feito com 💛 pela comunidade{" "}
          <a
            href="https://github.com/caramelotech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-semibold"
          >
            Caramelo Tech
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
