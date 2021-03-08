import "./style.css";

const About = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="content">
        <div>
          <strong>Languages:</strong>
          <li>JavaScript</li>
          <li>Python</li>
          <li>Java</li>
          <li>C++</li>
          <li>GO</li>
        </div>
        <div>
          <strong>Databases:</strong>
          <li>MySQL</li>
          <li>Postgres</li>
          <li>MongoDB</li>
          <li>MariaDB</li>
        </div>
        <div>
          <strong>Web Technologies:</strong>
          <li>React</li>
          <li>Angular</li>
          <li>HTML/CSS</li>
          <li>NodeJS</li>
          <li>Django</li>
          <li>Flask</li>
        </div>
        <div>
          <strong>Cloud Technologies:</strong>
          <li>AWS</li>
          <li>Kubernetes</li>
          <li>Docker</li>
          <li>Helm</li>
          <li>Ansible</li>
        </div>
      </div>
    </div>
  );
};

export default About;
