import React from "react";

interface CaseCardProps {
  title: string;
  description: string;
  date: string;
  technologies: string[];
  link: string;
  contentHtml: string;
}

const CaseCard: React.FC<CaseCardProps> = ({
  title,
  description,
  date,
  technologies,
  link,
  contentHtml,
}) => {
  return (
    <div className="card" style={{ margin: "1rem", border: "1px solid #333" }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{date}</p>
      <ul>
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <a href={link}>Project Link</a>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
};

export default CaseCard;
