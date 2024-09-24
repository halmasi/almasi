import Link from "next/link";
import BlogBack from "@/components/BlogBack";

export default function TermsAndConditions() {
  return (
    <main>
      <BlogBack>
        <h2 className="font-bold text-2xl pb-5">Terms and Conditions</h2>
        <p>
          Welcome to Hossein Almasi website! Please read these Terms and
          Conditions carefully before using our website.
        </p>

        <h3 className="font-bold text-lg">Copyright</h3>
        <p>
          All content on this website, including text, images, and logos, is
          protected by copyright laws. You may not reproduce, distribute, or
          modify any content without our prior written consent.
        </p>

        <h3 className="font-bold text-lg">User Conduct</h3>
        <p>
          You agree to use our website in a manner that complies with all
          applicable laws and regulations. You may not use our website for any
          unlawful purpose, including but not limited to:
        </p>
        <ol className="list-disc pl-5">
          <li>Harassing or threatening others</li>
          <li>Posting spam or unsolicited messages</li>
          <li>Violating the intellectual property rights of others</li>
        </ol>

        <h3 className="font-bold text-lg">Disclaimer</h3>
        <p>
          We make no representations or warranties about the accuracy,
          completeness, or reliability of the content on this website. We are
          not responsible for any errors or omissions.
        </p>

        <h3 className="font-bold text-lg">Privacy Policy</h3>
        <p>
          Please refer to our <Link href="/privacy-policy">Privacy Policy</Link>{" "}
          for information on how we collect and use your personal information.
        </p>
      </BlogBack>
    </main>
  );
}
