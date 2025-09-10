import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-light mt-5 py-4 text-secondary small">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo (left) */}
        <div>
          <Image
            src="/Logo1.png"
            alt="E-Shop Logo"
            width={80}
            height={60}
            priority
          />
        </div>

        {/* Center text */}
        <div>© 2025 E-Shop. All rights reserved.</div>

        {/* Links (right) */}
        <div>
          <a href="#" className="text-decoration-none text-secondary me-3">
            Privacy Policy
          </a>
          <a href="#" className="text-decoration-none text-secondary">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
