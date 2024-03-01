import { Component,OnInit } from '@angular/core';
import {ThebuttonComponent} from '../thebutton/thebutton.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-modren-application-development',
  standalone: true,
  imports: [ThebuttonComponent,CommonModule,FormsModule],
  templateUrl: './modren-application-development.component.html',
  styleUrl: './modren-application-development.component.scss'
})
export class ModrenApplicationDevelopmentComponent {
  madtext="See more";
  url="/";
  technology = [
    {
      number: "01",
      title: "Mobile and Web Applications Development",
      text: "Embrace the future of software with our top-notch Modern Application Development Services. Combining the expertise of seasoned veterans and the spark of young talent, we craft customized solutions across mobile, web, and desktop platforms. Our deep understanding of industries like Ecommerce, BI, Education, Health, and Fintech ensures we deliver powerful apps that elevate your brand and drive digital success.",
    },
    {
      number: "02",
      title: "Elevate Your Ecommerce Experience",
      text: "In the dynamic world of Ecommerce, stand out with a platform that thrives. We specialize in modernizing legacy applications and providing services like cloud migration, empowering you with scalable, high-performance solutions. Our team of Ecommerce gurus crafts intuitive interfaces, secure payment gateways, and personalized experiences that captivate customers and maximize conversions. Whether you're a budding startup or a seasoned retailer, TylexTech helps you take your online store to the next level. ",
    },
    {
      number: "03",
      title: "Unleash the Power of Business Intelligence",
      text: "Transform data into actionable insights with our robust Business Intelligence (BI) solutions. We tackle even the most complex legacy systems, utilizing mainframe modernization techniques to unlock the hidden potential of your data assets. Through interactive dashboards, advanced analytics tools, and comprehensive reporting systems, we bridge the gap between raw data and strategic clarity. Empower your organization to make data-driven decisions, optimize operations, and gain a competitive edge in the digital age.",
    },
    {
      number: "04",
      title: "Revolutionize Education Through Technology",
      text: "Tylex shapes the future of learning with its application development and modernization solutions for the education sector. We collaborate with institutions and edtech startups to create immersive learning platforms, virtual classrooms, and engaging mobile apps that empower educators and ignite student curiosity. From personalized e-learning portals to interactive game-based learning tools, we craft experiences that make education accessible, engaging, and effective for all.",
    },
    {
      number: "05",
      title: "Transforming Healthcare, One Solution at a Time",
      text: "The healthcare industry demands modern application development services that are secure, efficient, and patient-centric. At TylexTech, we specialize in application development and modernization, crafting HIPAA-compliant platforms, telemedicine solutions, and electronic health record systems that streamline workflows, enhance patient care, and ensure regulatory compliance. We leverage cloud migration to ensure scalability and accessibility, helping providers deliver the best possible care.",
    },
    {
      number: "06",
      title: "Revitalize the Hospitality Industry",
      text: "We understand the challenges of the restaurant and hotel industry in the digital age. Our modern desktop application development for reservation systems and ordering platforms, along with mobile app solutions, offer streamlined operations, boosted revenue, and exceptional guest experiences. We focus on creating personalized and immersive experiences, setting you apart in the competitive landscape.",
    },
    {
      number: "07",
      title: "Unleash Entertainment's Full Potential",
      text: "Our deep understanding of the entertainment industry fuels our creativity in developing interactive applications and content management systems. We build cutting-edge streaming platforms and ticketing systems to deliver unforgettable experiences. By seamlessly integrating social media platforms, we help you amplify your brand voice and engage audiences on a deeper level.",
    },
    {
      number: "08",
      title: "Leading the Way in Web3 and Fintech Solutions",
      text: "The future is Web3 and Fintech, and we are at the forefront of innovation. Our expert team possesses in-depth knowledge of blockchain technology, decentralized applications (dApps), smart contracts, cryptocurrency exchanges, and digital wallets. Whether you require a revolutionary fintech solution or seek to modernize legacy application development with Web3 capabilities, we are your trusted partner in navigating this exciting terrain.",
    },
  ];
  private _value: string = '';
  inputValue: string = '';

  get value(): string {
    return this._value;
  }

  set value(newValue: string) {
    this._value = newValue.toUpperCase(); // Additional logic applied when setting the value
  }

  setValue() {
    this.value = this.inputValue; // Calls the setter
  }
}
