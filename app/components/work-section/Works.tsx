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
      title: "E-Commerce-Platform",
      gitLink: "https://github.com/Sourabh9125/tws-e-commerce-app/tree/production",
      liveLink: "https://easyshop.deployit.shop",
      about:
        "Deployed a scalable e-commerce app on AWS EKS using Terraform and Kubernetes, reducing manual intervention and boosting automation. Implemented CI pipelines in Jenkins with shared libraries and GitHub webhooks, streamlining integration and cutting deployment time by 40%. Adopted ArgoCD GitOps-based CD for auto-update of Kubernetes clusters with new Docker images, increased scalability. Applied DevSecOps best practices—non-root Docker users and multi-stage builds—to enhance security and reliability. Configured NGINX Ingress with SSL/TLS via cert-manager and custom domain mapping for secure, scalable access.",
      stack: ["Terraform", "AWS",  "EKS", "Kubernetes", "Jenkins", "ArgoCD", "GitHub Webhooks", "Docker", "NGINX Ingress", "Cert-Manager", "SSL/TLS", "Jenkins Shared Library", "Ubuntu", "DevSecOps", "Prometheus", "Grafana" ],
      img: "/easyshop.png",
    },
    {
      title: "Two-Tier-Flask-App",
      gitLink: "https://github.com/Sourabh9125/two-tier-flask-app",
      liveLink: "https://flask-app.com",
      about:
        "Develops a minimalist message board with Flask as the backend and MySQL as the database. The application enables users to post and browse messages through a simple web interface.",
      stack: ["Kubernetes", "Docker", "Python", "Jenkins", "Prometheus", "Grafana","DevSecops"],
      img: "/project.png",
    },
    {
      title: "AWS-Serverless-Project",
      gitLink: "https://github.com/Sourabh9125/aws-serverless-project.git",
      liveLink: "https://cloud-native-cicd.example.com",
      about:
        "This template creates a simple HTTP API based on Node.js on AWS Lambda and API Gateway, with the Serverless Framework managing things.It includes a mutiple functions that can be deployed and invoked both remotely and locally.It supports local development with serverless-offline.Once deployed, the API is exposed to the public unless it is protected with an authorizer.",
      stack: ["AWS", "Serverless", "Python", "AWS Lambda", "API Gateway"],
      img: "/serverless.png",
    },
    {
      title: "infrastructure-monitoring-suite",
      gitLink: "https://github.com/your_username/infrastructure-monitoring-suite",
      liveLink: "https://monitoring-suite.example.com",
      about:
        "Comprehensive monitoring solution combining ELK Stack for log aggregation, Prometheus for metrics collection, and custom Grafana dashboards. Features automated alerting, log parsing, and performance analytics.",
      stack: [ "Prometheus", "Grafana", "Ansible", "Python"],
      img: "/infra.PNG",
    },
    {
      title: "Full-stack-chat-application",
      gitLink: "https://github.com/Sourabh9125/full_stack-chat-app.git",
      liveLink: "#",
      about:
        "This is a full-stack real-time chat application built with Node.js, React, and Socket.io, designed for scalability and performance. The app is fully Dockerized and leverages DevOps practices to reduce deployment time, ensure environment consistency, and enable easier debugging. With plans for CI/CD integration and Kubernetes orchestration, it’s optimized for future scalability, observability, and efficient infrastructure management. Real-time security monitoring.",
      stack: ["Docker", "MongoDB", "Kubernetes", "React",  "Jenkins", "Prometheus","DevSecops"],
      img: "/chat-app.PNG",
    },
    {
      title: "Node-todo-cicd",
      gitLink: "https://github.com/Sourabh9125/node-todo-cicd/tree/dev",
      liveLink: "#",
      about:
        "This is a Node.js Todo application integrated with a complete CI/CD pipeline using Docker, Docker Compose, and Jenkins. It follows modern DevOps practices to automate building, testing, and deploying the app in containerized environments.Security-focused container platform implementing vulnerability scanning, secret management with HashiCorp Vault, and automated compliance checks. Includes CI/CD integration and real-time security monitoring.",
      stack: ["Docker", "Kubernetes", "React",  "Jenkins", "Prometheus","DevSecops"],
      img: "/node-todo.png",
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
