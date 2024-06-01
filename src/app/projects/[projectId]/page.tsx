import React from 'react';

type ProjectPageProps = {
  params: {
    projectId: string;
  };
};

const ProjectPage: React.FC<ProjectPageProps> = ({ params: { projectId } }) => {
  return (
    <div>
      <h1>Project Page</h1>
      <p>Project ID: {projectId}</p>
    </div>
  );
};

export default ProjectPage;
