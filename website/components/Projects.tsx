export default function Projects() {
  const projects = [
    {
      title: "🐍 Python Log Analyzer",
      description:
        "A Python-based security log analysis tool that detects suspicious SSH login attempts from Linux authentication logs.",
      technologies: "Python • Linux • SOC • Log Analysis",
    },
    {
      title: "🛡️ SOC Home Lab",
      description:
        "A personal Security Operations Center lab built using Kali Linux and virtual machines to practise monitoring, investigation and threat detection.",
      technologies: "Kali Linux • Blue Team • SIEM • VirtualBox",
    },
    {
      title: "🔎 Port Scanner",
      description:
        "A Python-based TCP port scanner designed to identify open network services and strengthen understanding of network reconnaissance.",
      technologies: "Python • Networking • TCP/IP • Nmap",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "100px 60px",
        background: "#ffffff",
      }}
    >
      <h2
        style={{
          color: "#38bdf8",
          fontSize: "clamp(20px, 5vw, 52px)",
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        Featured Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.title}
            style={{
              background: "#111c2f",
              padding: "26px",
              borderRadius: "16px",
              border: "1px solid #1e3a5f",
              transition: "0.3s",
            }}
          >
            <h3
              style={{
                color: "#38bdf8",
                fontSize: "22px",
                marginBottom: "15px",
              }}
            >
              {project.title}
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
                marginBottom: "20px",
              }}
            >
              {project.description}
            </p>

            <p
              style={{
                color: "#94a3b8",
                marginBottom: "25px",
              }}
            >
              {project.technologies}
            </p>

            <a
              href="https://github.com/prosper-anele"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                background: "#38bdf8",
                color: "#071827",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}