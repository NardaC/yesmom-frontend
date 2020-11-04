import React from "react";

import ondas from "../../assets/onda-blanca.svg";
import blog1 from "../../assets/blog/blog1.png";

const BlogEspecific = () => {
  return (
    <>
      <div className="box-banner-blog">
        <img src={ondas} alt="ondas" className="ondas" />
        <h4 className="text-title-blog">Detalles de blog</h4>
        <img src={ondas} alt="ondas" className="ondas" />
      </div>
      <div className="box-blog-general">
        <div className="box-autor-blog">
          <figure>
            <img src={blog1} alt="" className="w-100" />
          </figure>
          <div>
            <h5>YesMom</h5>
            <h5>20/04/2020</h5>
          </div>
        </div>
        <div className="box-articulo-blog">
          <figure>
            <img src={blog1} alt="" className="w-100" />
          </figure>
          <h5>&#9733;Tips para tu baby shower &#9733;</h5>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab culpa
            totam itaque corporis quaerat placeat mollitia aspernatur iure sed
            asperiores temporibus voluptatem, excepturi ex earum illo nesciunt
            repellat laboriosam ipsam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Perspiciatis, eum incidunt dolorem asperiores
            libero nemo. Odio laboriosam est accusantium tempora ratione iusto,
            veniam qui eveniet, dolorem unde quidem nulla? Ipsa. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Maiores porro voluptas
            cumque ut dolor doloribus quis reprehenderit? Cum culpa, sapiente
            ipsum officia nihil exercitationem vitae quia corporis omnis,
            aperiam aut.
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogEspecific;
