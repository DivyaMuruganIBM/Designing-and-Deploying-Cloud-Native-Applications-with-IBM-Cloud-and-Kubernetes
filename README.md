# eCommerce Web App with IBM Cloud Container Registry and Minikube Deployment

This project demonstrates the development and deployment of an **eCommerce web application** using Node.js, Docker, IBM Cloud Container Registry, and Minikube. The project involves creating a Dockerized application and deploying it on a local Kubernetes cluster managed by Minikube.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Build and Test the Application Locally](#2-build-and-test-the-application-locally)
  - [3. Dockerize the Application](#3-dockerize-the-application)
  - [4. Push Docker Image to IBM Cloud Container Registry](#4-push-docker-image-to-ibm-cloud-container-registry)
  - [5. Deploy Application Using Minikube](#5-deploy-application-using-minikube)
- [Project Architecture](#project-architecture)
- [CI/CD Integration (Optional)](#cicd-integration-optional)
- [License](#license)

---

## Project Overview

This project showcases the process of building a cloud-native eCommerce web application and deploying it locally using Minikube. It leverages IBM Cloud Container Registry (ICR) for container storage and minimizes costs by using a local Kubernetes setup instead of cloud-hosted Kubernetes.

---

## Features

- User-friendly eCommerce web interface.
- Containerized application with Docker.
- Deployment on a local Kubernetes cluster (Minikube).
- Integration with IBM Cloud Container Registry for container management.
- Optional CI/CD pipeline with Jenkins.

---

## Prerequisites

To run this project, you will need the following tools installed on your local system:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Docker](https://www.docker.com/)
- [Minikube](https://minikube.sigs.k8s.io/docs/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [IBM Cloud CLI](https://cloud.ibm.com/docs/cli?topic=cli-getting-started)
- [Git](https://git-scm.com/)

---

