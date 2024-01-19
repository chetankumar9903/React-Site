import web from "../images/webdev.jpg";
import app from '../images/appdev.jpg';
import android from '../images/android.jpg';
import digital from '../images/digital.jpg';
import marketing from '../images/marketing.jpg';
import software from '../images/software.jpg';


const Sdata = () => [
    {
      imgsrc: web,
      title: "Web Development",
      desc: "Create responsive and interactive websites using latest web technologies.",
      link: "https://www.w3schools.com/whatis/",
    },
    {
      imgsrc: app,
      title: "App Development",
      desc: "Design and develop cross-platform mobile applications for various devices.",
      link: "https://buildfire.com/become-mobile-app-developer/",
    },
    {
      imgsrc: software,
      title: "Software Development",
      desc: "Build robust and scalable software solutions tailored to your business needs.",
      link: "https://www.ibm.com/topics/software-development",
    },
    {
      imgsrc: digital,
      title: "Digital Marketing",
      desc: "Promote products or services using digital channels to reach potential customers.",
      link: "https://mailchimp.com/marketing-glossary/digital-marketing/",
    },
    {
      imgsrc: android,
      title: "Android Development",
      desc: "Develop Android apps for smartphones, tablets, and other Android-based devices.",
      link: "https://developer.android.com/",
    },
    {
      imgsrc: marketing,
      title: "Marketing",
      desc: "Strategize and implement marketing campaigns to drive business growth and brand awareness.",
      link: "https://builtin.com/marketing",
    },
  ];
  
  export default Sdata;
  