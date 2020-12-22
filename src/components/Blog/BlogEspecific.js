import React, { useState, useEffect, Fragment } from "react";
import JoditEditor from "jodit-react";
import ondas from "../../assets/onda-blanca.svg";
import imgAutor from "../../assets/blog/img-autor.png";
import imgPrincipal from "../../assets/blog/img-principal.png";
import nube1 from "../../assets/blog/nube1.png";
import nube2 from "../../assets/blog/nube2.png";
import nube3 from "../../assets/blog/nube3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const BlogEspecific = () => {
  const [config, setConfig] = useState({
    readonly: true,
    toolbar: false,
  });
  const [contenido, setContenido] = useState(
    '<p><span style="font-family: Tahoma, Geneva, sans-serif;">Tu Baby Shower es uno de los momentos más esperados para ti y los miembros de tu familia que han estado al pendiente del nacimiento de tu próximo bebé. Aquí te dejamos unos consejos para celebrar de una mejor manera tu baby shower virtual.</span></p><ul><li><span style="font-family: Tahoma, Geneva, sans-serif;"><strong><span style="font-family: Tahoma, Geneva, sans-serif;"><span style="color: rgb(75, 100, 164); font-family: Tahoma, Geneva, sans-serif;">Rol de anfitriona</span></span></strong></span></li></ul><p><span style="color: rgb(0, 0, 0); font-family: Tahoma, Geneva, sans-serif;">Si es que tú eres la embarazada que quiere invitar a sus amigos a tu baby shower y no quieres saber nada de la organización, debes elegir una amiga o hermana y nombrarla “anfitriona” del evento. Ella será la encargada de la producción y así tú serás realmente la estrella del evento. </span></p><p><span style="color: rgb(0, 0, 0); font-family: Tahoma, Geneva, sans-serif;">Si es que tú eres la organizadora del evento, debes tomar el rol de anfitriona y ser responsable de invitar a las personas y de planear las actividades y juegos. Puedes diseñar invitaciones y enviarlas por correo o a través de Redes Sociales.</span></p><ul><li><span style="font-family: Tahoma, Geneva, sans-serif;"><strong><span style="color: rgb(75, 100, 164); font-family: Tahoma, Geneva, sans-serif;">Elegir un sitio de video chat</span></strong></span></li></ul><p><span style="color: rgb(0, 0, 0); font-family: Tahoma, Geneva, sans-serif; font-size: 1rem;">Ya sea Zoom, HouseParty, Skype o Hangouts, debes elegir una plataforma que soporte a la cantidad de gente que está invitada y que sea accesible para todos ellos. Quizás debas hacer una prueba de conexión con ciertas personas con anticipación. </span></p><p><span style="color: rgb(0, 0, 0); font-family: Tahoma, Geneva, sans-serif; font-size: 1rem;">Otra opción es transmitir el baby shower en vivo: organiza un livestream e invita a tus familiares y amigos a asistir y comentar. Puede ser a través de Instagram y así todos tus seguidores podrán verte abriendo regalos o realizando actividades entretenidas.</span></p><ul><li><span style="color: rgb(0, 0, 0); font-family: Tahoma, Geneva, sans-serif; font-size: 1rem;"><span style="background-color: rgb(255, 255, 255); color: rgb(74, 134, 232);"><strong style=""><span style="color: rgb(75, 100, 164); font-family: Tahoma, Geneva, sans-serif;">Planifica actividades</span></strong></span></span></li></ul><p><span style="color: rgb(0, 0, 0); font-family: Tahoma, Geneva, sans-serif;">Quizás la parte más importante del baby shower: los invitados participarán en los juegos que organices con la embarazada en el centro de todas las actividades.</span></p><ul><li><span style="color: rgb(75, 100, 164);"><strong><span style="font-family: Tahoma, Geneva, sans-serif;">Hora de los regalos</span></strong></span></li></ul><p><span style="color: rgb(0, 0, 0); font-family: Tahoma, Geneva, sans-serif;">Lo más probable es que la fiesta termine con que la futura mamá abra los regalos. Esto solo es posible si los invitados envían su regalo con anticipación. Una buena idea es que la festejada no sepa quién envió qué, y los vaya abriendo frente la cámara y adivine quién es la dueña de cada regalo. La otra opción es que los invitados abran los regalos y luego se lo envíen por correo. </span></p><p><span style="color: rgb(0, 0, 0); font-family: Tahoma, Geneva, sans-serif;">Si soñabas con tu baby shower, ¡aún puedes planear tu baby shower virtual! Además, es una buena oportunidad para pasar momentos agradables junto a tu familia y amigos.</span></p><p><br></p>'
  );
  return (
    <div className="fade-in animated">
      <div className="box-banner-blog">
        <img src={ondas} alt="ondas" className="ondas" />
        <h4 className="text-title-blog">Detalles de blog</h4>
        <img src={ondas} alt="ondas" className="ondas" />
      </div>
      <div className="box-blog-especifico">
        <img src={nube1} alt="nube yesmom" className="nube1 heartbeat" />
        <img src={nube2} alt="nube yesmom" className="nube2 heartbeat" />
        <img src={nube3} alt="nube yesmom" className="nube3 heartbeat" />
        <div className="box-autor-blog">
          <figure>
            <img src={imgAutor} alt="" className="w-100" />
          </figure>
          <div className="box-autor-text-blog">
            <h5 className="text-autor">YesMom</h5>
            <h5 className="text-fecha">20/04/2020</h5>
          </div>
        </div>
        <div className="box-articulo-blog">
          <figure className="box-articulo-img-principal-blog">
            <img src={imgPrincipal} alt="" className="w-100" />
          </figure>
          <div className="box-articulo-title-blog">
            <FontAwesomeIcon
              icon={faStar}
              className="star-blog heartbeat"
            ></FontAwesomeIcon>
            <h2> Tips para tu baby shower virtual</h2>
            <FontAwesomeIcon
              icon={faStar}
              className="star-blog heartbeat"
            ></FontAwesomeIcon>
          </div>
          <JoditEditor
            config={config}
            value={contenido}
            name="contenido"
            // onBlur={handleBlurAreaChange}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogEspecific;
