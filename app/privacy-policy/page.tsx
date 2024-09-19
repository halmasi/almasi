import BlogBack from "../components/BlogBack";
export default function PrivacyPolicy() {
  return (
    <main>
      <BlogBack>
        <h2 className="font-bold text-2xl pb-5">Privacy Policy</h2>
        <p>
          This Privacy Policy outlines how we collect, use, and protect your
          personal information when you visit Hossein Almasi website.
        </p>

        <h3 className="font-bold text-lg">Information We Collect</h3>
        <p>We may collect the following types of information from you:</p>
        <ul className="list-disc pl-5">
          <li>
            Personal information you provide, such as your name, email address,
            and contact information.
          </li>
          <li>
            Information collected automatically, such as your IP address,
            browser type, and device information.
          </li>
        </ul>

        <h3 className="font-bold text-lg">How We Use Your Information</h3>
        <p>We may use your information for the following purposes:</p>
        <ul className="list-disc pl-5">
          <li>To provide you with the services you request.</li>
          <li>To improve our website and services.</li>
          <li>To communicate with you about our products and services.</li>
          <li>To comply with legal requirements.</li>
        </ul>

        <h3 className="font-bold text-lg">Sharing Your Information</h3>
        <p>We may share your information with third parties:</p>
        <ul className="list-disc pl-5">
          <li>To provide you with services you have requested.</li>
          <li>To comply with legal requirements.</li>
        </ul>

        <h3 className="font-bold text-lg">Your Rights</h3>
        <p>You have the right to:</p>
        <ul className="list-disc pl-5">
          <li>Access your personal information.</li>
          <li>Correct any inaccuracies in your personal information.</li>
          <li>Request the deletion of your personal information.</li>
        </ul>

        <h3 className="font-bold text-lg">Contact Us</h3>
        <p>
          If you have any questions about our Privacy Policy, please contact us
          at info@almasi.info.
        </p>
      </BlogBack>
    </main>
  );
}
