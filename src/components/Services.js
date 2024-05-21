import Image from "next/image";

export const Services = () => {
  return (
    <div style={{margin:"20px"}}>
        <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>Nos Services</h2>
      <p>Découvrez notre gamme de services.</p>
      <section
        style={{ display: "flex", flexDirection: "row", margin: "10px" }}
      >
        <div>
          <Image />
          <h3>Conseils juridiques</h3>
          <p style={{ fontWeight: "lighter", padding: "5px" }}>
            Irure ipsum exercitation sunt exercitation. Enim laboris veniam esse
            id esse sit exercitation enim ex ipsum. Esse pariatur excepteur est
            velit nisi do dolor duis do.
          </p>
        </div>
        <div>
          <Image />
          <h3>Accompagnement entreprise</h3>
          <p style={{ fontWeight: "lighter", padding: "5px" }}>
            {" "}
            Irure ipsum exercitation sunt exercitation. Enim laboris veniam esse
            id esse sit exercitation enim ex ipsum. Esse pariatur excepteur est
            velit nisi do dolor duis do.
          </p>
        </div>
        <div>
          <Image />
          <h3>Conseils nen droit sociale</h3>
          <p style={{ fontWeight: "lighter", padding: "5px" }}>
            {" "}
            Irure ipsum exercitation sunt exercitation. Enim laboris veniam esse
            id esse sit exercitation enim ex ipsum. Esse pariatur excepteur est
            velit nisi do dolor duis do.
          </p>
        </div>

        <div>
          <h3>Suivi dossier</h3>
          <Image />
          <p style={{ fontWeight: "lighter", padding: "5px" }}>
            {" "}
            Irure ipsum exercitation sunt exercitation. Enim laboris veniam esse
            id esse sit exercitation enim ex ipsum. Esse pariatur excepteur est
            velit nisi do dolor duis do.
          </p>
        </div>
      </section>
    </div>
  )
}
