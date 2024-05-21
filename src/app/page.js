import React from "react";
import Image from "next/image";
import { Footer } from "../components/ui/Footer";
import { Header } from "../components/ui/Header";
import { Card } from "../components/Card";
import { Services } from "../components/Services";
import { Tarif } from "../components/Tarif";
import { Contacts } from "@/components/Contacts";

export default function Home() {
  return (
    <main style={{overflow:"clip"}}>
      <Header />
      <div
        style={{
          padding: "70px",
          backgroundColor: "#eff3f1",
          marginTop: "50px",
        }}
      ></div>
      <Services />
      <div style={{ margin: "20px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
          Nos professionnels
        </h2>
        <p>Voici quelques-uns de nos clients satisfaits.</p>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div style={{ margin: "20px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>Nos Tarifs</h2>
        <p>Des tarifs abordables et transparents.</p>
        <Tarif />
      </div>
      <div style={{ margin: "20px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
          Formulaire de Contact
        </h2>
        <Contacts />
        <Footer />
      </div>
    </main>
  );
}
