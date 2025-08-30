import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
  <div className="min-h-screen">
    <Header />
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-red-500 mb-8">Privacy Policy</h1>
        <p className="mb-4 text-muted-foreground">
          Last updated: December 2024
        </p>

        <div className="prose prose-lg max-w-none text-foreground">
          <p className="mb-6 text-lg">
            Techaxis Consulting Private Limited ("Techaxis", "we", "us", or
            "our") is committed to protecting your privacy and ensuring the
            security of your personal information. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when
            you visit our website, use our services, or interact with us in any
            capacity.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            1. Information We Collect
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">
            1.1 Personal Information
          </h3>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li>
              <strong>Contact Information:</strong> Name, email address, phone
              number, company name, job title, and other professional details
            </li>
            <li>
              <strong>Business Information:</strong> Company size, industry,
              project requirements, and business objectives
            </li>
            <li>
              <strong>Communication Data:</strong> Messages, inquiries,
              feedback, and any other information you provide through our
              contact forms or direct communications
            </li>
            <li>
              <strong>Professional Credentials:</strong> Resume, work
              experience, certifications, and skills (for staff augmentation and
              career opportunities)
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">
            1.2 Technical Information
          </h3>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li>
              <strong>Device Information:</strong> IP address, browser type,
              operating system, device identifiers, and mobile network
              information
            </li>
            <li>
              <strong>Usage Data:</strong> Pages visited, time spent on pages,
              links clicked, and other website interaction data
            </li>
            <li>
              <strong>Cookies and Tracking:</strong> We use cookies, web
              beacons, and similar technologies to enhance your experience and
              analyze site usage
            </li>
            <li>
              <strong>Log Files:</strong> Server logs containing information
              about your requests, including timestamps and referring URLs
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li>
              <strong>Service Delivery:</strong> To provide, operate, and
              maintain our IT consulting services, including Oracle ERP
              implementation, digital transformation, cloud solutions, and
              mobile development
            </li>
            <li>
              <strong>Communication:</strong> To respond to your inquiries,
              provide customer support, and send important service updates
            </li>
            <li>
              <strong>Business Development:</strong> To understand your business
              needs and offer relevant solutions and services
            </li>
            <li>
              <strong>Marketing and Outreach:</strong> To send you updates about
              our services, industry insights, and promotional materials (with
              your consent)
            </li>
            <li>
              <strong>Staff Augmentation:</strong> To evaluate candidates for
              placement opportunities and manage client relationships
            </li>
            <li>
              <strong>Legal Compliance:</strong> To comply with applicable laws,
              regulations, and legal processes
            </li>
            <li>
              <strong>Security and Fraud Prevention:</strong> To protect our
              systems, prevent fraud, and ensure the security of our services
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            3. Legal Basis for Processing
          </h2>
          <p className="mb-4">
            We process your personal information based on the following legal
            grounds:
          </p>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li>
              <strong>Contract Performance:</strong> To fulfill our contractual
              obligations when you engage our services
            </li>
            <li>
              <strong>Legitimate Interest:</strong> To provide and improve our
              services, communicate with clients, and conduct business
              operations
            </li>
            <li>
              <strong>Consent:</strong> For marketing communications and other
              purposes where you have provided explicit consent
            </li>
            <li>
              <strong>Legal Obligation:</strong> To comply with applicable laws
              and regulations
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            4. Information Sharing and Disclosure
          </h2>
          <p className="mb-4">
            We are committed to protecting your privacy and do not sell, trade,
            or rent your personal information to third parties. However, we may
            share your information in the following circumstances:
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">
            4.1 Service Providers
          </h3>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li>
              Trusted third-party service providers who assist us in operating
              our business, such as cloud hosting providers, email services, and
              analytics tools
            </li>
            <li>
              These providers are bound by confidentiality agreements and may
              only use your information to provide services to us
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">
            4.2 Business Partners
          </h3>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li>
              Strategic partners and vendors with whom we collaborate to deliver
              services (e.g., Oracle Corporation for ERP implementations)
            </li>
            <li>
              Sharing is limited to information necessary for service delivery
              and is governed by appropriate agreements
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">
            4.3 Legal Requirements
          </h3>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li>When required by law, regulation, or legal process</li>
            <li>
              To protect our rights, property, or safety, or that of our
              clients, employees, or the public
            </li>
            <li>
              In connection with a business transfer, merger, or acquisition
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            5. Data Security and Protection
          </h2>
          <p className="mb-4">
            We implement comprehensive security measures to protect your
            personal information:
          </p>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li>
              <strong>Technical Safeguards:</strong> Encryption in transit and
              at rest, secure servers, and regular security assessments
            </li>
            <li>
              <strong>Administrative Controls:</strong> Access controls,
              employee training, and security policies
            </li>
            <li>
              <strong>Physical Security:</strong> Secure facilities and
              equipment protection
            </li>
            <li>
              <strong>Incident Response:</strong> Procedures for detecting,
              responding to, and recovering from security incidents
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            6. International Data Transfers
          </h2>
          <p className="mb-4">
            Your information may be transferred to and processed in countries
            other than your own. We ensure appropriate safeguards are in place
            for such transfers, including:
          </p>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li>
              Standard contractual clauses approved by relevant data protection
              authorities
            </li>
            <li>Adequacy decisions where applicable</li>
            <li>Other appropriate safeguards as required by applicable law</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            7. Data Retention
          </h2>
          <p className="mb-4">
            We retain your personal information only for as long as necessary to
            fulfill the purposes outlined in this policy, unless a longer
            retention period is required or permitted by law. Retention periods
            vary based on:
          </p>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li>
              The type of information and purpose for which it was collected
            </li>
            <li>Legal and regulatory requirements</li>
            <li>Business needs and contractual obligations</li>
            <li>Your consent and preferences</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            8. Your Rights and Choices
          </h2>
          <p className="mb-4">
            Depending on your location and applicable law, you may have the
            following rights:
          </p>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li>
              <strong>Access:</strong> Request access to your personal
              information and details about how we process it
            </li>
            <li>
              <strong>Correction:</strong> Request correction of inaccurate or
              incomplete information
            </li>
            <li>
              <strong>Deletion:</strong> Request deletion of your personal
              information, subject to legal and business requirements
            </li>
            <li>
              <strong>Portability:</strong> Request a copy of your information
              in a structured, machine-readable format
            </li>
            <li>
              <strong>Restriction:</strong> Request restriction of processing in
              certain circumstances
            </li>
            <li>
              <strong>Objection:</strong> Object to processing based on
              legitimate interests
            </li>
            <li>
              <strong>Withdraw Consent:</strong> Withdraw consent for processing
              based on consent
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            9. Cookies and Tracking Technologies
          </h2>
          <p className="mb-4">
            We use cookies and similar technologies to enhance your experience
            and analyze website usage:
          </p>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li>
              <strong>Essential Cookies:</strong> Required for basic website
              functionality
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us understand how
              visitors use our website
            </li>
            <li>
              <strong>Marketing Cookies:</strong> Used for targeted advertising
              and content personalization
            </li>
            <li>
              <strong>Preference Cookies:</strong> Remember your settings and
              preferences
            </li>
          </ul>
          <p className="mb-4">
            You can control cookie settings through your browser preferences.
            However, disabling certain cookies may affect website functionality.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            10. Third-Party Services and Links
          </h2>
          <p className="mb-4">
            Our website may contain links to third-party websites and integrate
            with third-party services. We are not responsible for the privacy
            practices or content of these third parties. We encourage you to
            review their privacy policies before providing any personal
            information.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            11. Children's Privacy
          </h2>
          <p className="mb-4">
            Our services are not directed to children under 16 years of age. We
            do not knowingly collect personal information from children under
            16. If you believe we have collected information from a child under
            16, please contact us immediately.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            12. Changes to This Privacy Policy
          </h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices, technology, legal requirements, or other
            factors. We will notify you of any material changes by:
          </p>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li>
              Posting the updated policy on our website with a new effective
              date
            </li>
            <li>Sending email notifications for significant changes</li>
            <li>Providing other appropriate notice as required by law</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            13. Contact Information
          </h2>
          <p className="mb-4">
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our data practices, please contact us:
          </p>

          <div className="bg-secondary/20 p-6 rounded-lg border border-border/50 my-6">
            <p className="font-semibold mb-2">
              Techaxis Consulting Private Limited
            </p>
            <p className="mb-2">
              Email:{" "}
              <a
                href="mailto:admin@techaxisconsulting.com"
                className="text-accent underline hover:text-accent/80"
              >
                admin@techaxisconsulting.com
              </a>
            </p>
            <p className="mb-2">
              Phone:{" "}
              <a
                href="tel:+919937033526"
                className="text-accent underline hover:text-accent/80"
              >
                +91 9937033526
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              For privacy-related inquiries, please include "Privacy Policy" in
              your subject line.
            </p>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            14. Governing Law and Jurisdiction
          </h2>
          <p className="mb-4">
            This Privacy Policy is governed by and construed in accordance with
            the laws of India. Any disputes arising from this policy will be
            subject to the exclusive jurisdiction of the courts in India.
          </p>

          <div className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/20">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> This Privacy Policy is effective as of the
              date stated above and supersedes all previous versions. We
              recommend reviewing this policy periodically to stay informed
              about how we protect your information.
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default PrivacyPolicy;
