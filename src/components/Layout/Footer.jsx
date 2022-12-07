function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-3 bg-gray-700 text-primary-content footer-center">
      <div>
        <p>Copyright &copy; {footerYear}</p>
      </div>
    </footer>
  );
}
export default Footer;
