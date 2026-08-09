export default function Timeline() {
  const milestones = [
    {
      year: "2025",
      title: "Started Cybersecurity Journey",
      description:
        "Began developing my cybersecurity knowledge through university study, networking fundamentals and hands-on technical learning.",
    },
    {
      year: "2026",
      title: "Built Practical Security Projects",
      description:
        "Started building practical projects involving Python, Linux, networking, log analysis and security operations.",
    },
    {
      year: "Now",
      title: "Developing SOC Analyst Skills",
      description:
        "Focused on Security Operations, threat detection, incident response, SIEM concepts and blue-team techniques.",
    },
    {
      year: "Next",
      title: "Cloud Security Engineering",
      description:
        "Planning to progress from SOC operations into cloud security, automation and security engineering.",
    },
  ];

  return (
    <section
      id="timeline"
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
        My Journey
      </h2>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "25px",
        }}
      >
        {milestones.map((milestone) => (
          <div
            key={milestone.title}
            style={{
              background: "#0f172a",
              border: "1px solid #1e3a5f",
              borderRadius: "16px",
              padding: "25px",
            }}
          >
            <div
              style={{
                color: "#38bdf8",
                fontSize: "16px",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
            >
              {milestone.year}
            </div>

            <h3
              style={{
                color: "#ffffff",
                fontSize: "22px",
                marginBottom: "12px",
              }}
            >
              {milestone.title}
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.7",
                margin: 0,
              }}
            >
              {milestone.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}