import React from "react";

const Benefits = () => {
  return (
    <section className="benefits">
      <header>
        <h2>Why Use Our Services</h2>{" "}
        <p>
          Choose our online shopping service for a convenient and diverse
          shopping experience, offering a wide range of high-quality products.
          With dedicated customer support and secure payment options, we
          prioritize your satisfaction and ensure a hassle-free experience.
        </p>
      </header>
      <article>
        <div>
          <section>
            <img src="/svgs/quality.svg" alt="benefits" />
          </section>
          <section>
            <h3>Secure Payments</h3>
            <p>
              Our online shopping service provides secure payment options to
              safeguard your financial information and ensure a worry-free
              shopping experience.
            </p>
          </section>
        </div>
        <div>
          <section>
            <img src="/svgs/bags-1999.svg" alt="" />
          </section>
          <h3>Best Quality</h3>
          <p>
            Our online shopping service offers the best quality products from
            trusted brands, ensuring that you receive top-notch merchandise that
            meets your expectations.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Benefits;
