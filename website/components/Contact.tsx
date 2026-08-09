export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "80px 20px",
        background: "#ffffff",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "#38bdf8",
          fontSize: "25px",
          marginBottom: "20px",
        }}
      >
        Let's Connect
      </h2>

      <p
        style={{
          color: "#cbd5e1",
          maxWidth: "600px",
          margin: "0 auto 40px",
          lineHeight: "1.7",
          fontSize: "17px",
        }}
      >
        interested in connecting with cybersecurity professionals.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="mailto:prosper.o.anele@gmail.com"
          style={{
            display: "inline-block",
            padding: "12px 22px",
            background: "#071827",
            color: "#38bdf8",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Email Me
        </a>

        <a
          href="https://github.com/prosper-anele"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "12px 22px",
            border: "1px solid #071827",
            color: "#38bdf8",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          GitHub
        </a>

        <a
          href="https://uk.linkedin.com/in/prosper-anele"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "12px 22px",
            border: "1px solid #071827",
            color: "#38bdf8",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}