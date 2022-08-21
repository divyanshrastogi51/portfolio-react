import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <section
      id="footer"
      className="absolute bottom-0 left-0 right-0 margin-x-auto text-center px-5 pb-3 text-black font-bold "
    >
      <div>
        © {year} - Design &amp; Developed by{" "}
        <span className="hover:text-white">Divyansh Rastogi</span>
      </div>
    </section>
  );
}
