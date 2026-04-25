
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase 
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress } from "react-icons/si";
import "./skills.css"

const Skills = () => {
  return (
    <div className="skills container py-5">
      <h2 className="text-center mb-5">My Skills</h2>

      <div className="row text-center">

        <div className="col-md-3 skill-card">
          <FaHtml5 size={40} />
          <p>HTML</p>
        </div>

        <div className="col-md-3 skill-card">
          <FaCss3Alt size={40} />
          <p>CSS</p>
        </div>

        <div className="col-md-3 skill-card">
          <FaJs size={40} />
          <p>JavaScript</p>
        </div>

        <div className="col-md-3 skill-card">
          <FaReact size={40} />
          <p>React</p>
        </div>

        <div className="col-md-3 skill-card">
          <FaNodeJs size={40} />
          <p>Node.js</p>
        </div>

        <div className="col-md-3 skill-card">
          <SiExpress size={40} />
          <p>Express.js</p>
        </div>

        <div className="col-md-3 skill-card">
          <SiMongodb size={40} />
          <p>MongoDB</p>
        </div>

        <div className="col-md-3 skill-card">
          <SiMysql size={40} />
          <p>MySQL</p>
        </div>

      </div>
    </div>
  );
};

export default Skills;