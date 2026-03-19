const ContactMap = () => {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-6 h-[500px] md:h-[600px]">

        <iframe
          src="https://www.google.com/maps?q=Karshi%20Stadion&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>

      </div>
    </section>
  );
};

export default ContactMap;