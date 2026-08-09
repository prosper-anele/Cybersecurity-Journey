export default function Certificates() {
  const certifications = [
    {
      title: "CompTIA Security+",
      provider: "CompTIA",
      status: "In Progress",
      description:
        "Preparing for the CompTIA Security+ certification to strengthen my understanding of core cybersecurity concepts.",
    },
    {
      title: "Cisco Networking Academy",
      provider: "Cisco",
      status: "Completed",
      description:
        "Developed foundational networking knowledge including networking concepts, protocols and network security.",
    },
    {
      title: "TryHackMe",
      provider: "TryHackMe",
      status: "Active Learning",
      description:
        "Practising hands-on cybersecurity skills through guided rooms covering Linux, networking, security and defensive techniques.",
    },
    {
      title: "Hack The Box",
      provider: "Hack The Box",
      status: "Learning",
      description:
        "Developing practical security skills through hands-on labs and cybersecurity challenges.",
    },
  ];

  return (
    <section
      id="certifications"
      style={{
        padding: "100px 60px",
        background: "#ffffff",
      }}
    >
      <h2
        style={{
          color: "#38bdf8",
          fontSize: "25px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Certifications & Learning
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#94a3b8",
          marginBottom: "60px",
          fontSize: "17px",
        }}
      >
        Certifications and platforms supporting my cybersecurity development.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {certifications.map((certification) => (
          <div
            key={certification.title}
            style={{
              background: "#111c2f",
              padding: "30px",
              borderRadius: "16px",
              border: "1px solid #1e3a5f",
            }}
          >
            <p
              style={{
                color: "#38bdf8",
                fontSize: "14px",
                fontWeight: "bold",
                marginBottom: "10px",
                textTransform: "uppercase",
              }}
            >
              {certification.provider}
            </p>

            <h3
              style={{
                color: "white",
                fontSize: "23px",
                marginBottom: "15px",
              }}
            >
              {certification.title}
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.7",
                marginBottom: "20px",
              }}
            >
              {certification.description}
            </p>

            <span
              style={{
                display: "inline-block",
                padding: "8px 14px",
                borderRadius: "20px",
                background: "#0b2438",
                color: "#38bdf8",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              {certification.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}