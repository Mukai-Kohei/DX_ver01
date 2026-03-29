export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark text-white" id="footer">
      <div className="container-custom py-8">
        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-400">
          <p>&copy; {currentYear} COMPANY. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
