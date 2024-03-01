import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThebuttonComponent} from '../thebutton/thebutton.component'

@Component({
  selector: 'app-homepageservices',
  standalone: true,
  imports: [CommonModule,ThebuttonComponent],
  templateUrl: './homepageservices.component.html',
  styleUrl: './homepageservices.component.scss'
})
export class HomepageservicesComponent {
  servicelist = [
    {
      number: "01",
      title: "Modern Application Development",
      text: "Tylextech builds modern applications with a focus on scalability, portability, resiliency, and agility, using diverse technology stacks to prioritize security and API development.",
      imageLight: "/assets/home/serviceLight1.webp",
      url: "/services/modern-application-development",
      buttonText: "Learn more",
    },
    {
      number: "02",
      title: "Cloud Infrastructure",
      text: "As an IT Consulting company, we offer a range of cloud services to improve workload management, network optimization, and workforce wellbeing, including database workload tuning and service management automation.",
      imageLight: "/assets/home/serviceLight2.webp",
      url: "/services/cloud-infrastructure",
      buttonText: "Explore your options",
    },
    {
      number: "03",
      title: "DevOps",
      text: "TylexTech understands the frustrations of manual configurations and inefficient workflows. That's why we don't just offer DevOps services, we have become your strategic partner in building a high-performing cloud ecosystem. Our DevOps architects unlock the full potential of your cloud infrastructure with automation at its core.",
      imageLight: "/assets/home/serviceLight3.webp",
      url: "/services/devops-as-a-service",
      buttonText: "Discover more",
    },
    {
      number: "04",
      title: "Business Process Outsourcing",
      text: "TylexTech uses automation, technology, and data-driven decision-making to transform organizations' operations for better performance, sustainability, and customer experiences. We specialize in managing back-office operations, sales, marketing, and service operations, while helping organizations with compliance, risk management, and employee retention.",
      imageLight: "/assets/home/serviceLight4.webp",
      url: "/services/business-process-outsourcing",
      buttonText: "Learn more",
    },
    {
      number: "05",
      title: "Cyber Security",
      text: "Other than IT consulting and services, our team provides cyber security solutions tailored to businesses, using zero trust principles and centralized tools like Sentinel One to ensure end-to-end protection, cyber resilience, and efficient threat response.",
      imageLight: "/assets/home/serviceLight5.webp",
      url: "/services/cybersecurity-as-a-service",
      buttonText: " Explore our solutions",
    },
    {
      number: "06",
      title: "Dispatch Services",
      text: "At TYLEXTECH SERVICES, we take pride in offering a suite of comprehensive truck dispatch solutions to meet the diverse needs of our clients. Our commitment to excellence is reflected by the efficiency, reliability, and innovation embedded.",
      imageLight: "/assets/home/serviceLight6.webp",
      url: "/services/dispatch-services",
      buttonText: "Dispatch Services",
    },
  ];
}
