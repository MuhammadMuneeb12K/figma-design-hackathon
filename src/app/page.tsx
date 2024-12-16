import Image from 'next/image';
import rectangle6 from "@/app/images/Rectangle 6.png";
import rectangle8 from "@/app/images/Rectangle 8.png";
import rectangle10 from "@/app/images/Rectangle 10.png";
import rectangle12 from "@/app/images/Rectangle 12.png";
import rectangle9 from "@/app/images/Rectangle 9.png";
import frame9 from "@/app/images/Frame 9.png";
import frame8 from "@/app/images/Frame 8.png";
import slidenumbers from "@/app/images/slide-numbers.png";
import image15 from "@/app/images/image 15.png";
import image16 from "@/app/images/image 16.png";
import image17 from "@/app/images/image 17.png";
import image18 from "@/app/images/image 18.png";
import image19 from "@/app/images/image 19.png";
import arrow2rightLongBlack from "@/app/images/arrow-2-right-long.png";
import arrow2rightLongWhite from "@/app/images/arrow-2-right-long-white.png";
import ContactForm from '../app/components/contact_form';


export default function Home() {
  return (
    <div className="parent">

      <div className="section1">
        <div className="section1_left">
          <div>
            <h1 className="section1_project">
              PROJECT <br /> 
              <span className="section1_lorum">Lorum</span>
            </h1>
          </div>
          <div className="section1_buttton">
            <Image src={frame9} alt="/" />
            <Image src={frame8} alt="/" />
          </div>
          <Image src={slidenumbers} alt="/" />
        </div>
        <div className='section1_image'>
          <Image src={rectangle6} alt="/" />
          <a className='section1_imagebutton' href="">
            <h1 className='section1_imagebutton_text'>VIEW PROJECT</h1>
            <Image src={arrow2rightLongBlack} alt="/" />
          </a>
        </div>
      </div>

      <div className="about">
            <div className="about-left">
                <Image className="" src={rectangle8} alt="Rectangle 8" />
                <Image className="" src={rectangle10} alt="Rectangle 10" />
            </div>
            <div className="about-middle">
                <Image className="mt-60" src={rectangle9} alt="Rectangle 9" />
            </div>
            <div className="about-right">
              <h1>About</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged.
                </p>
                <a href="" className="read-more-button">
                  <h1>READ MORE</h1>
                      <Image src={arrow2rightLongBlack} alt="Arrow Right" />
                </a>
            </div>
        </div>
        <div className="main-statement-container">
                   <h1 className="mission-title">Main Focus/Mission Statement</h1>
                <div className="statement-wrapper">
                      <div className="statement-block">
                            <h1 className="statement-number">1</h1>
                                   <p className="statement-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
                    </div>
                    <div className="statement-block">
                             <h1 className="statement-number">2</h1>
                             <p className="statement-description long-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.</p>
                    </div>
                </div>
            </div>

            <div className="project-section">
                <h1 className="project-header">Our Projects</h1>
                <div className="project-grid">
                    <div className="project-row">
                        <Image src={rectangle12} alt="Rectangle 12" />
                        <Image src={image15} alt="Image 15" />
                    </div>
                    <div className="project-row">
                   <Image src={image16} alt="Image 16" />
                   <Image src={image17} alt="Image 17" />
                   <Image src={image18} alt="Image 18" />
                    </div>
                    <a href="" className="projects-button">
                       <h1 className="projects-button-text">ALL PROJECTS</h1>
                        <Image src={arrow2rightLongWhite} alt="Arrow Right" />
                    </a>
                </div>
            </div>

            <div className="contact-section">
                <h1 className="contact-header">Contact Us</h1>
              <div className="contact-wrapper">
                    <ContactForm />
                    <Image src={image19} alt="Image 19" />
                </div>
                   <a href="" className="email-button">
                    <h1 className="projects-button-text">SEND EMAIL</h1>
                    <Image src={arrow2rightLongWhite} alt="Arrow Right" />
                   </a>
            </div>

    </div>
  );
}
