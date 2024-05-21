import React from "react";
import Image from "next/image";
import office from "../../../public/images/office.jpg";

export const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        alignItems: "center",
      }}
    >
      <div style={{ flex: 1, margin: "10px" }}>
        <h1
          style={{
            fontSize: "25px",
            fontWeight: "bolder",
            wrap: "balance",
            padding: "10px",
          }}
        >
          Agence Digital Juridique
        </h1>
        <p
          style={{
            fontWeight: "lighter",
            padding: "10px",
            wrap: "balance",
            textAlign: "left",
          }}
        >
          Nous sommes une agence de services qui met ses compétences aux
          services de nos clients. Nous les accompagnons juridiquement et les
          suivons tout au long de leur parcours. Sint in amet et veniam fugiat
          aute minim do non. Incididunt veniam reprehenderit veniam ipsum ex
          esse do duis est duis laborum consectetur id. Dolor nostrud nulla
          Lorem elit esse laborum proident. Ut non occaecat non velit nisi enim
          voluptate exercitation culpa non tempor deserunt. Irure esse
          exercitation commodo laborum aute tempor sunt eiusmod incididunt
          voluptate laboris fugiat culpa. Non enim ipsum anim ut occaecat
          proident labore. Ullamco nisi minim labore mollit nulla.
        </p>
        <button
          style={{
            backgroundColor: "#254BBD",
            borderRadius: "7px",
            padding: "10px",
            marginTop: "15px",
            color:"whitesmoke"
          }}
        >
          Pendre rendez-vous
        </button>
      </div>

      <div style={{ textAlign: "center", margin: "40px" }}>
        <Image
          src={office}
          alt="Image de justice"
          width={400}
          height={400}
          style={{ position: "relative" }}
        />
        <p
          style={{
            position: "absolute",
            backgroundColor: "#254BBD",
            padding: "20px",
          }}
        >
          qukcbdskcnvlsdnvndmf,vmd,ùv,df,v;df,vlmdf,vm,dfm,vùmfd,
        </p>
      </div>
    </header>
  );
};
