export default function Skills() {
  const skillGroups = [
    {
      title: "Security Operations",
      skills: ["SOC Analysis", "Threat Detection", "Incident Response", "Wireshark"],
    },
    {
      title: "Networking & Systems",
      skills: ["Networking", "Linux", "Nmap", "Cisco Packet Tracer"],
    },
    {
      title: "Security Tools",
      skills: ["SIEM", "VirtualBox", "Git & GitHub"],
    },
    {
      title: "Programming & Web",
      skills: ["Python", "HTML", "CSS", "Next.js"],
    },
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "80px 20px",
        background: "#ffffff",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#38bdf8",
          fontSize: "25px",
          marginBottom: "50px",
        }}
      >
        Skills
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "25px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {skillGroups.map((group) => (
          <div
            key={group.title}
            style={{
              background: "#0f172a",
              border: "1px solid #1e3a5f",
              borderRadius: "16px",
              padding: "25px",
            }}
          >
            <h3
              style={{
                color: "#38bdf8",
                fontSize: "22px",
                marginBottom: "20px",
              }}
            >
              {group.title}
            </h3>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    background: "#111c2f",
                    border: "1px solid #1e3a5f",
                    borderRadius: "8px",
                    padding: "9px 12px",
                    color: "#cbd5e1",
                    fontSize: "14px",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}