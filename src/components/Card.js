import profil from "../../public/images/profil.jpg"
import Image from "next/image";

export const Card = () => {
  return (
    <section style={{margin:"20px"}}  >
        
        <div
          className="max-w-[300px]"
          style={{
            display: "flex",
            flexDirection: "column",
            boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
            justifyContent: "center",
            margin:"30px",
            padding:"10px"
          }}
        >
          <div className="relative h-24 w-24 rounded-full overflow-hidden" style={{marginLeft:"80px", }} >
          <Image
            src={profil}
            width={100}
            height={100}
          />
          </div>
         
          <h3 style={{margin:"20px"}}>Juriste droit des affaires</h3>
          <p style={{ fontWeight: "lighter", padding: "5px" ,margin:"1Opx"}}>
            Pariatur commodo aute laboris consequat mollit ea duis quis. Dolore
            qui cupidatat fugiat qui incididunt et quis consectetur adipisicing
            excepteur veniam et sint. 
          </p>
          <button
            style={{
              backgroundColor: "#254BBD",
              borderRadius: "7px",
              padding: "10px",
              margin:"30px",
              color:"white"
            }}
          >
            Réserver votre créneau
          </button>
        </div>
    </section>
  )
}
