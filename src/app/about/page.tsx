

export default function AboutPage() {
  return (
    <div className="container my-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">About Us</h1>
        <p className="lead text-muted">
          We are a modern e-commerce store dedicated to bringing you high-quality products at the best prices.
        </p>
      </div>

      {/* Mission Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src="/Mission.jpg"
            alt="Our Mission"
            className="img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">Our Mission</h2>
          <p className="text-muted">
            Our mission is to make online shopping seamless, reliable, and enjoyable. We carefully curate products to ensure quality, value, and convenience for our customers.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="row align-items-center mb-5 flex-md-row-reverse">
        <div className="col-md-6">
          <img
            src="/vision.jpg"
            alt="Our Vision"
            className="img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">Our Vision</h2>
          <p className="text-muted">
            We aim to become the go-to online destination for customers worldwide, providing exceptional products, fast delivery, and outstanding customer service.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="text-center mb-5">
        <h2 className="fw-bold mb-4">Our Values</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="fw-bold mb-2">Customer First</h5>
              <p className="text-muted">
                We prioritize our customers in everything we do, ensuring satisfaction and trust.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="fw-bold mb-2">Quality Products</h5>
              <p className="text-muted">
                Every product is carefully selected to meet high standards of quality and reliability.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="fw-bold mb-2">Innovation</h5>
              <p className="text-muted">
                We constantly innovate to improve the shopping experience and stay ahead in e-commerce trends.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="fw-bold mb-3">Join Us on Our Journey</h3>
        <p className="text-muted mb-4">
          Experience the best online shopping experience with us. Explore, discover, and shop your favorite products today!
        </p>
        <a href="/products" className="btn btn-primary btn-lg">
          Shop Now
        </a>
      </div>
    </div>
  );
}
