import ConatctFaq from "../components/contact/ConatctFaq";
import ContactForm from "../components/contact/ContactForm";
import ContactHero from "../components/contact/ContactHero";
import ContactLocation from "../components/contact/ContactLocation";
import ContactMethod from "../components/contact/ContactMethod";


export default function Contact() {


  return (
    <div className="min-h-screen">
    <ContactHero/>
    <ContactMethod/>
    <ContactForm/>
    <ConatctFaq/>
    <ContactLocation/>
    </div>
  );
}