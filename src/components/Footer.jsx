export default function Footer() {
  return (
    <footer className="footer fade-in">
      <div className="container" style={{ textAlign: "center" }}>
        <p>Contact: <a href="mailto:info@taskflow.app">info@taskflow.app</a></p>
        <div style={{ marginTop: 12 }}>
          <a href="#" style={{ marginRight: 12 }}>Twitter</a>
          <a href="#" style={{ marginRight: 12 }}>LinkedIn</a>
          <a href="#">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
