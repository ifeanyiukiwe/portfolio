import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Ojo Ifeanyi Ukiwe",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-surface border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-bold">Contact</h1>
          <p className="text-xl text-muted max-w-2xl">
            I’m looking for a front-end or full-stack developer role in North
            East England, hybrid or remote. The quickest way to reach me is by
            email.{" "}
            <a
              href="mailto:info@ifeanyiukiwe.com"
              className="underline text-petrol hover:text-petrol-dark"
            >
              info@ifeanyiukiwe.com
            </a>
          </p>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
