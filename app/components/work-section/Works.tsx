import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Two-Tier-Flask-App",
      gitLink: "https://github.com/Sourabh9125/two-tier-flask-app",
      liveLink: "https://flask-app.com",
      about:
        "Develops a minimalist message board with Flask as the backend and MySQL as the database. The application enables users to post and browse messages through a simple web interface.",
      stack: ["kubernetes", "docker", "python", "jenkins", "Prometheus"],
      img: "/project.png",
    },
    {
      title: "AWS-Serverless-Project",
      gitLink: "https://github.com/Sourabh9125/aws-serverless-project.git",
      liveLink: "https://cloud-native-cicd.example.com",
      about:
        "This template creates a simple HTTP API based on Node.js on AWS Lambda and API Gateway, with the Serverless Framework managing things.It includes a mutiple functions that can be deployed and invoked both remotely and locally.It supports local development with serverless-offline.Once deployed, the API is exposed to the public unless it is protected with an authorizer.",
      stack: ["AWS", "Serverless", "python", "AWS Lambda", "API Gateway"],
      img: "/project.png",
    },
    {
      title: "infrastructure-monitoring-suite",
      gitLink: "https://github.com/your_username/infrastructure-monitoring-suite",
      liveLink: "https://monitoring-suite.example.com",
      about:
        "Comprehensive monitoring solution combining ELK Stack for log aggregation, Prometheus for metrics collection, and custom Grafana dashboards. Features automated alerting, log parsing, and performance analytics.",
      stack: ["elasticsearch", "prometheus", "grafana", "ansible", "python"],
      img: "/project.png",
    },
    {
      title: "container-security-platform",
      gitLink: "https://github.com/your_username/container-security-platform",
      liveLink: "https://security-platform.example.com",
      about:
        "Security-focused container platform implementing vulnerability scanning, secret management with HashiCorp Vault, and automated compliance checks. Includes CI/CD integration and real-time security monitoring.",
      stack: ["docker", "vault", "kubernetes", "python", "bash"],
      img: "/project.png",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      <Timeline />
    </section>
  );
}
