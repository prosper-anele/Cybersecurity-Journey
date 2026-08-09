export default function Hero() { 
    return( 
        <>
         {/* Hero */}

 <section
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "60px",
    padding: "clamp(20px, 6vw, 120px) clamp(24px, 5vw, 60px)",
    maxWidth: "1400px",
    margin: "0 auto",
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
            
          </h1>
          <>
  <p
    style={{
      color: "#111827",
      letterSpacing: "0px",
      marginBottom: "4px",
      textTransform: "small",
    }}
  >
    Hi...
  </p>

  <h1
    style={{
      fontSize: "clamp(20px, 3vw, 72px)",
      lineHeight: "1.1",
      margin: 5,
      color: "#181b21",
      fontWeight: "bold"
    }}
  >
    Prosper Anele
  </h1>
</>

          <h2
            style={{
              color: "#111827",
              fontSize: "clamp(10px, 3vw, 30px)",
              lineHeight:  "1.3",
            }}
          >
            Cybersecurity Student • Aspiring SOC Analyst
          </h2>

          <p
            style={{
              marginTop: "30px",
              maxWidth: "650px",
              color: "#111827",
              lineHeight: "1.5",
              fontSize: "clamp(10px, 4vw, 19px)",
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
                padding: "clamp(10px, 2vw, 16px) clamp(24px, 7vw, 38px)",
                background: "#07111f",
                color: "#ffffff",
                border: "none",
                borderRadius: "12px",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "clamp(10px, 2vw, 16px)",
              }}
            >
            
              View Projects
            </button>

            <button
              style={{
                padding: "clamp(10px, 2vw, 16px) clamp(24px, 7vw, 38px)",
                background: "transparent",
                color: "#07111f",
                border: "2px solid #07111f",
                borderRadius: "12px",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "clamp(10px, 2vw, 16px)",
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
            width: "clamp(260px, 75vw, 340px)",
            height: "clamp(260px, 75vw 340px)",
            objectFit: "cover",
            borderRadius: "20px",
            border: "4px solid #ffffff",
            boxShadow: "0 0 35px rgba(255, 255, 255, 0.95)",
          }}
        />
      </section>
      </>
    );
}

