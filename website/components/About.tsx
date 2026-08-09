export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "30px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(20px, 5vw, 25px)",
          color: "#1595d0",
          marginBottom: "25px",
          textAlign: "center",
        }}
      >
        About me
      </h2>

      <p
        style={{
          color: "#111827",
          fontSize: "18px",
          lineHeight: "1.7",
          maxWidth: "700px",
          margin: "0 auto 35px",
        }}
      >
        I'm a Cybersecurity student at Birmingham City University with a
        passion for Security Operations, Blue Teaming, Python automation,
        Linux, networking and cloud security.

        <br /><br />

        My goal is to become a professional SOC Analyst before progressing
        into Cloud Security Engineering. Every project in this portfolio is
        part of my journey toward mastering cybersecurity through practical,
        hands-on experience.

        <br /><br />

        I believe the best way to learn cybersecurity is by building real
        projects, documenting my progress and continuously improving my
        technical skills.
      </p>
    </section>
  );
}