export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" style={{ background: 'linear-gradient(135deg,#001D4A 0%,#003D82 45%,#0057B8 100%)' }}>
      <div className="container-custom py-8">
        <div className="text-center text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
          <p>&copy; {currentYear} COMPANY. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
