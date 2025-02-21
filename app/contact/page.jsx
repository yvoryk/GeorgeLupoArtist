import { ContactForm } from "../../components/ContactForm";

const Contact = () => (
  <section className="w-full flex flex-col items-center py-0 px-6">
    <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center">
      Contact
    </h1>
    

    
    <p className="text-gray-600 text-center mb-6 max-w-md">
      Have a question or inquiry? Reach out to us, and we will respond as soon as possible.
    </p>

    <div className="w-full max-w-md">
      <ContactForm />
    </div>

    <div className="mt-8 text-center">
      <p className="text-lg">
        <strong>Email:</strong>{" "}
        <a href="mailto:george.lupo.app@gmail.com" className="text-blue-500 hover:underline">
          george.lupo.app@gmail.com
        </a>
      </p>

      <p className="text-lg">
        <strong>Website:</strong>{" "}
        <a
          href="https://georgelupo.com"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          georgelupo.com
        </a>
      </p>

      <p className="text-lg">
        <strong>Phone:</strong>{" "}
        <a href="tel:(561)628-6930" className="text-blue-500 hover:underline">
          (561)628-6930
        </a>
      </p>

      <p className="mt-6 italic text-gray-500 text-sm">
        All paintings include free shipping to anywhere in the continental United States.
      </p>
    </div>
  </section>
);

export default Contact;
