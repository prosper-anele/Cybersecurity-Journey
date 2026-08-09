export default function Footer() {
  return (
    <footer
      style={{
        background: "#020617",
        borderTop: "1px solid #1e293b",
        padding: "50px 30px 30px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "25px",
        }}
      >
        <div>
          <h3
            style={{
              color: "#38bdf8",
              margin: "0 0 8px",
              fontSize: "24px",
            }}
          >
            
          </h3>

          <p
            style={{
              color: "#94a3b8",
              margin: 0,
            }}
          >
            Cybersecurity Student • Aspiring SOC Analyst
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://github.com/prosper-anele"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#cbd5e1",
              textDecoration: "none",
            }}
          >
            GitHub
          </a>

          <a
            href="https://uk.linkedin.com/in/prosper-anele"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#cbd5e1",
              textDecoration: "none",
            }}
          >
            LinkedIn
          </a>

          <a
            href="mailto:prosper.o.anele@gmail.com"
            style={{
              color: "#cbd5e1",
              textDecoration: "none",
            }}
          >
            Email
          </a>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1100px",
          margin: "35px auto 0",
          paddingTop: "20px",
          borderTop: "1px solid #1e293b",
          textAlign: "center",
          color: "#64748b",
          fontSize: "14px",
        }}
      >
        ©️ {new Date().getFullYear()} Prosper Anele. 
      </div>
    </footer>
  );
}