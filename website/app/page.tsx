export default function Home() {
  return (
    <main
      style={{
        background: "#07111f",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Navigation */}

      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "25px 60px",
          borderBottom: "1px solid #1e293b",
          background: "#07111f",
        }}
      >
        <h2
          style={{
            color: "#38bdf8",
            margin: 0,
          }}
        >
          Prosper Dikachi Anele
        </h2>

        <div
          style={{
            display: "flex",
            gap: "30px",
          }}
        >
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Home
          </a>

          <a href="#projects" style={{ color: "white", textDecoration: "none" }}>
            Projects
          </a>

          <a href="#skills" style={{ color: "white", textDecoration: "none" }}>
            Skills
          </a>

          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}

      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "100px 60px",
          gap: "70px",
        }}
      >
        {/* Left Side */}

        <div>
          <h1
            style={{
              fontSize: "70px",
              color: "#38bdf8",
              marginBottom: "20px",
            }}
          >
            Prosper Dikachi Anele
          </h1>

          <h2
            style={{
              color: "#cbd5e1",
              fontSize: "30px",
            }}
          >
            Cybersecurity Student • Aspiring SOC Analyst
          </h2>

          <p
            style={{
              marginTop: "30px",
              maxWidth: "650px",
              color: "#94a3b8",
              lineHeight: "1.9",
              fontSize: "19px",
            }}
          >
            Cybersecurity student at Birmingham City University,
            documenting my journey towards becoming a SOC Analyst. I am building
            practical cybersecurity projects focused on SOC operations, 
            threat detection, incident response, networking, linux and python automation.
        
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "40px",
            }}
          >
            <button
              style={{
                padding: "16px 38px",
                background: "#38bdf8",
                color: "#07111f",
                border: "none",
                borderRadius: "12px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              View Projects
            </button>

            <button
              style={{
                padding: "16px 38px",
                background: "transparent",
                color: "#38bdf8",
                border: "2px solid #38bdf8",
                borderRadius: "12px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Download CV
            </button>
          </div>
        </div>

        {/* Right Side */}

        <img
          src="/profile.jpg"
          alt="Prosper Anele"
          style={{
            width: "340px",
            height: "340px",
            objectFit: "cover",
            borderRadius: "20px",
            border: "4px solid #38bdf8",
            boxShadow: "0 0 35px rgba(56,189,248,0.35)",
          }}
        />
      </section>
      {/* About Me */}

<section
  style={{
    padding: "90px 60px",
    background: "#081522",
  }}
>
  <h2
    style={{
      color: "#38bdf8",
      fontSize: "42px",
      marginBottom: "35px",
    }}
  >
    About Me
  </h2>

  <p
    style={{
      color: "#cbd5e1",
      lineHeight: "2",
      fontSize: "19px",
      maxWidth: "1100px",
    }}
  >
    I am a Cybersecurity student at Birmingham City University with a strong
    interest in Security Operations (SOC), Blue Teaming and Cloud Security.
    My goal is to build practical skills through real-world projects,
    continuous learning and hands-on laboratories.

    <br /><br />

    I created this portfolio to document my cybersecurity journey,
    showcase the projects I build and demonstrate my technical growth
    as I prepare for internships and graduate opportunities.
  </p>
</section>
      {/* Projects */}
<section
  id="projects"
  style={{
    padding: "100px 60px",
    background: "#0b1728",
  }}
>
  <h2
    style={{
      color: "#38bdf8",
      fontSize: "42px",
      marginBottom: "50px",
      textAlign: "center",
    }}
  >
    Featured Projects
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "30px",
    }}
  >

    <div
  style={{
    background: "#111c2f",
    padding: "30px",
    borderRadius: "16px",
    border: "1px solid #1e3a5f",
    transition: "0.3s",
  }}
>
  <h3
    style={{
      color: "#38bdf8",
      fontSize: "24px",
      marginBottom: "15px",
    }}
  >
    🐍 Python Log Analyzer
  </h3>

  <p
    style={{
      color: "#cbd5e1",
      lineHeight: "1.8",
    }}
  >
    Detects suspicious SSH login attempts from Linux authentication logs using Python automation.
  </p>

  <p style={{ color: "#94a3b8" }}>
    Python • Linux • SOC • Log Analysis
  </p>

  <div
    style={{
      display: "flex",
      gap: "15px",
      marginTop: "25px",
    }}
  >
    <button
      style={{
        padding: "10px 20px",
        background: "#38bdf8",
        color: "#07111f",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      Live Demo
    </button>

    <a
  href="https://github.com/prosper-anele"
  target="_blank"
  style={{
    padding: "10px 20px",
    background: "transparent",
    color: "#38bdf8",
    border: "1px solid #38bdf8",
    borderRadius: "8px",
    textDecoration: "none",
  }}
>
  GitHub
</a>
  
  </div>
</div>

    <div
      style={{
        background: "#111c2f",
        padding: "30px",
        borderRadius: "16px",
        border: "1px solid #1e3a5f",
      }}
    >
      <h3 style={{ color: "#38bdf8" }}>
        SOC Home Lab
      </h3>

      <p style={{ color: "#cbd5e1", lineHeight: "1.8" }}>
        Personal Security Operations Center lab built using Kali Linux and virtual machines.
      </p>

      <p style={{ color: "#94a3b8" }}>
        Kali Linux • Blue Team • SIEM
      </p>
    </div>

    <div
      style={{
        background: "#111c2f",
        padding: "30px",
        borderRadius: "16px",
        border: "1px solid #1e3a5f",
      }}
    >
      <h3 style={{ color: "#38bdf8" }}>
        Port Scanner
      </h3>

      <p style={{ color: "#cbd5e1", lineHeight: "1.8" }}>
        Python-based TCP port scanner for discovering open services on a network.
      </p>

      <p style={{ color: "#94a3b8" }}>
        Python • Networking
      </p>
    </div>

  </div>
</section>
<section
  id="skills"
  style={{
    padding: "100px 60px",
    background: "#071827",
    textAlign: "center",
  }}
>
  <h2
    style={{
      color: "#38bdf8",
      fontSize: "42px",
      marginBottom: "60px",
    }}
  >
    Skills
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "30px",
      maxWidth: "1100px",
      margin: "0 auto",
    }}
  >
    {[
      "Python",
      "Linux",
      "Networking",
      "SOC Analysis",
      "Wireshark",
      "Nmap",
      "Git & GitHub",
      "Cisco Packet Tracer",
      "VirtualBox",
      "HTML",
      "CSS",
      "Next.js",
    ].map((skill) => (
      <div
        key={skill}
        style={{
          background: "#111c2f",
          padding: "25px",
          borderRadius: "16px",
          border: "1px solid #1e3a5f",
          color: "#38bdf8",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        {skill}
      </div>
    ))}
  </div>
</section>

<section
  style={{
    padding: "90px 60px",
    background: "#07111f",
  }}
>
  <h2
    style={{
      textAlign: "center",
      color: "#38bdf8",
      fontSize: "42px",
      marginBottom: "60px",
    }}
  >
    Cybersecurity Journey
  </h2>

  <div
    style={{
      maxWidth: "900px",
      margin: "0 auto",
    }}
  >
    <div style={{ marginBottom: "40px" }}>
      <h3 style={{ color: "#38bdf8" }}>🇬🇧 2025</h3>
      <p style={{ color: "#cbd5e1" }}>
        Moved to the United Kingdom and started studying Cybersecurity at
        Birmingham City University.
      </p>
    </div>

    <div style={{ marginBottom: "40px" }}>
      <h3 style={{ color: "#38bdf8" }}>🐧 Linux</h3>
      <p style={{ color: "#cbd5e1" }}>
        Learned Linux command line, file permissions, networking and log
        analysis.
      </p>
    </div>

    <div style={{ marginBottom: "40px" }}>
      <h3 style={{ color: "#38bdf8" }}>🛡️ SOC Labs</h3>
      <p style={{ color: "#cbd5e1" }}>
        Built home laboratory using Kali Linux and VirtualBox while practising
        defensive security techniques.
      </p>
    </div>

    <div style={{ marginBottom: "40px" }}>
      <h3 style={{ color: "#38bdf8" }}>🐍 Python</h3>
      <p style={{ color: "#cbd5e1" }}>
        Started building cybersecurity automation tools with Python.
      </p>
    </div>

    <div>
      <h3 style={{ color: "#38bdf8" }}>🎯 Current Goal</h3>
      <p style={{ color: "#cbd5e1" }}>
        Preparing for CompTIA Security+, growing my GitHub portfolio and
        working toward a SOC Analyst internship.
      </p>
    </div>
  </div>
</section>
<section
  style={{
    padding: "100px 60px",
    background: "#07111f",
    textAlign: "center",
  }}
>
  <h2
    style={{
      color: "#38bdf8",
      fontSize: "42px",
      marginBottom: "60px",
    }}
  >
    Certifications
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "30px",
      maxWidth: "1100px",
      margin: "0 auto",
    }}
  >
    {[
      {
        title: "CompTIA Security+",
        status: "In Progress",
      },
      {
        title: "Cisco Networking Academy",
        status: "Completed",
      },
      {
        title: "TryHackMe",
        status: "Active Learner",
      },
      {
        title: "Hack The Box",
        status: "Learning",
      },
    ].map((cert) => (
      <div
        key={cert.title}
        style={{
          background: "#111c2f",
          padding: "30px",
          borderRadius: "18px",
          border: "1px solid #1e3a5f",
        }}
      >
        <h3 style={{ color: "#38bdf8" }}>
          {cert.title}
        </h3>

        <p style={{ color: "#94a3b8" }}>
          {cert.status}
        </p>
      </div>
    ))}
  </div>
</section>
<section
  id="contact"
  style={{
    padding: "100px 60px",
    textAlign: "center",
    background: "#071827",
  }}
>
  <h2
    style={{
      color: "#38bdf8",
      fontSize: "42px",
      marginBottom: "30px",
    }}
  >
    Contact Me
  </h2>

  <p
    style={{
      color: "#94a3b8",
      fontSize: "18px",
      marginBottom: "40px",
    }}
  >
    I'm open to internships, SOC analyst opportunities,
    collaborations and networking.
  </p>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "25px",
      flexWrap: "wrap",
    }}
  >
    <a
      href="https://github.com/prosper-anele"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "#38bdf8",
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
        color: "#38bdf8",
        textDecoration: "none",
      }}
    >
      LinkedIn
    </a>

    <a
      href="mailto:prosper.o.anele@gmail.com"
      style={{
        color: "#38bdf8",
        textDecoration: "none",
      }}
    >
      Email
    </a>
  </div>
</section>
    </main>
  );
}