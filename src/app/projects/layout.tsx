"use client";

import { useState } from "react";
import { getAllCases } from "@/lib/markdown";
import CaseCard from "@/components/ui/caseCard";

const Layout = ({ children }) => {
  const [cases, setCases] = useState([]);
  const fetchCases = async () => {
    const allCases = await getAllCases();
    setCases(allCases);
  };
  fetchCases();

  return (
    <div style={styles.container}>
      <main style={styles.mainContent}>
        {children}
        {cases.map((caseData, index) => (
          <CaseCard key={index} {...caseData} />
        ))}
      </main>

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
