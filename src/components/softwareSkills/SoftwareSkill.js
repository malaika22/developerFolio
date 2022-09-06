import React from "react";
import {TbBrandNextjs} from "react-icons/tb";
import {
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiTypescript,
  SiSass,
  SiHtml5,
  SiCss3
} from "react-icons/si";
import {GrReactjs} from "react-icons/gr";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  const socialLinks = [
    {
      name: "NextJs",
      icon: TbBrandNextjs
    },
    {
      name: "ReactJs",
      icon: GrReactjs
    },
    {
      name: "Javascript",
      icon: SiJavascript
    },
    {
      name: "Typescript",
      icon: SiTypescript
    },
    {
      name: "Firebase",
      icon: SiFirebase
    },
    {
      name: "TailwindCss",
      icon: SiTailwindcss
    },
    {
      name: "Html",
      icon: SiHtml5
    },
    {
      name: "Sass",
      icon: SiSass
    },
    {
      name: "Css",
      icon: SiCss3
    }
  ];

  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {socialLinks.map((skills, i) => {
            const Icon = skills.icon;
            return (
              <li key={i} className="software-skill-inline" name={skills.name}>
                <Icon style={{color: "#868e96"}} />
                <p>{skills.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
