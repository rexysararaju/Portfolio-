import profilePic from "../assets/imageme.png";
import resumeFile from "../assets/Rexy_Sara_Raju_WEBAPP.pdf";

const AboutPage = () => {
  return (
    <div className="page-container about-container" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
      <h1>About Me</h1>

      <img
        src={profilePic}
        alt="Profile"
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          objectFit: "cover",
          margin: "20px 0",
          border: "4px solid #1a5c3d"
        }}
      />

      <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#333", marginTop: "10px" }}>
        Hi, I'm Rexy! I am a Web Development student passionate about building
        modern full-stack applications. I enjoy working with React, Node.js,
        MongoDB, and creating beautiful interfaces.
      </p>

      <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#333", marginTop: "10px" }}>
        This portfolio showcases my education, projects, and ways to contact me.
        Feel free to explore the pages and connect!
      </p>

      <a
        href={resumeFile}
        target="_blank"
        className="btn-primary"
        style={{ display: "inline-block", marginTop: "20px" }}
      >
        View My Resume
      </a>
    </div>
  );
};

export default AboutPage;
