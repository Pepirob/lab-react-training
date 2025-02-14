function Greetings({ lang, children }) {
  return (
    <div>
      {lang === 'de' ? (
        <p>Hallo {children}</p>
      ) : lang === 'en' ? (
        <p>Hello {children}</p>
      ) : lang === 'es' ? (
        <p>Hola {children}</p>
      ) : lang === 'fr' ? (
        <p>Bonjour {children}</p>
      ) : null}
    </div>
  );
}

export default Greetings;
