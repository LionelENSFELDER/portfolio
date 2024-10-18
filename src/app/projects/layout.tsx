import React from "react";

const Layout = ({ children }) => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <a href="#home">Home</a>
            </li>
            <li style={styles.navItem}>
              <a href="#about">About</a>
            </li>
            <li style={styles.navItem}>
              <a href="#services">Services</a>
            </li>
            <li style={styles.navItem}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main style={styles.mainContent}>{children}</main>

      <footer style={styles.footer}>
        <p>© 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  header: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "1rem",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "1rem",
  },
  navItem: {
    textDecoration: "none",
  },
  mainContent: {
    flex: "1",
    padding: "2rem",
    backgroundColor: "#f4f4f4",
  },
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "1rem",
  },
};

export default Layout;
