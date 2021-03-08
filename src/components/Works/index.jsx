import "./style.css";

const About = () => {
  return (
    <div className="works">
      <h1>Experiences</h1>
      <h3 className="workclass">Microsoft</h3>
      <p className="workclass">Role: Software Engineer Intern</p>
      <p className="workclass">Date: June 2020 - Jan 2021</p>
      <p className="workclass">
      •	Focused on developing Cloud Native Applications, Microservices, and on observability stack of UnityClouds’s PaaS
      •	Led development and deployment of an alert management and visualization tool in Python Flask to provide alarm correlation and a single place to visualize multiple alarms
      •	Created an event-logging framework and metric logging framework for various network functions and microservices to log events and metrics to Elastic and Prometheus respectively
      •	Developed REST APIs to perform Kubernetes and Helm commands from client side; developed a chart editor and used Kustomize to patch and overlay on helm charts
      •	Automated deployment of application in a production Kubernetes cluster using Jenkins and Helm Charts, where it received more than 1000 alerts per minute.
      </p>
      <br />
      <h3 className="workclass">RNSIT</h3>
      <p className="workclass">Role: Reaseach Assistant</p>
      <p className="workclass">Date: Jan 2019 - May 2019 </p>
      <p className="workclass">
      •	Assisted Professor in developing an ML application to detected brain tumors in MRI Images with Full Stack Data Science: Data Collection, Data Cleaning, Statistical analysis and Visualization
•	Trained and tested a model by implementing U-Net architecture and increased accuracy to 85%
•	Awarded ‘most innovative project’ by IEEE Project Expo 2019

      </p>
      <br />
      <h3 className="workclass">The ValleyBootCamp</h3>
      <p className="workclass">Role: Mentor/Intern</p>
      <p className="workclass">Date: July 2018 - Sep 2018 </p>
      <p className="workclass">
      •	Liaised with a team of 5 to mentor students in various Web and Machine Learning concepts; collaborated with students to develop real world projects
•	Designed a web-based ML project to automatically detect food images provided by user and display all nearby restaurants selling similar food
•	Built a RESTful API and secured authorization with JWT and increased scalability by 20%
•	Conducted various classroom programs and code review to guide over 100 students in these technologies

      </p>
    </div>
  );
};

export default About;
