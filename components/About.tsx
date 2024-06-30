import React from 'react'

const About = () => {
    return (
      <div className="relative flex flex-col items-center xl:mt-16">
        <h1 className="heading lg:max-w-[45vw] ">
          About <span className="text-purple">Me</span>
        </h1>

        <div className="xl:flex items-center justify-center gap-20 py-10  px-5 ">
          <div className="">
            <img src="/me.jpg" alt="" className="rounded-lg " />
          </div>
          <div>
            <p className="text-white-200 md:mt-10 my-5 text-start">
              I am Charith L. Jayasingha, a 24-year-old software engineer with a
              BSc (Hons) in Information Technology, specializing in Software
              Engineering from SLIIT. With around 1 year experience in tech, I
              have developed strong skills in React, Next.js, TypeScript, and
              JavaScript. I enjoy building responsive and user-friendly web
              applications.
            </p>
            <p className="text-white-200 md:mt-10 my-5 text-start">
              In addition to my web development skills, I have experience with
              DevOps technologies like Docker, Kubernetes, and Terraform. I
              manage CI/CD pipelines using GitHub Actions and have a solid
              understanding of Linux systems. This combination of skills allows
              me to create efficient and secure development
              environments
            </p>
            <p className="text-white-200 md:mt-10 my-5 text-start">
              I am passionate about technology and always strive to stay updated
              with the latest industry trends. I love integrating complex
              backend functionalities with intuitive frontend interfaces to
              provide seamless user experiences. With a commitment to excellence
              and a collaborative mindset, I am ready to contribute to
              innovative projects and drive technological advancements
            </p>
          </div>
        </div>
      </div>
    );
};

export default About;
