import style from "./ComponentContact.module.css";

const ComponentContact = () => {
  return (
    <div className={style.body}>
      <h2 className={style.title}>Meet Our Team</h2>
      <div className={style.row}>
        <div className={style.column}>
          <div className={style.container_img}>
            <img
              src="https://res.cloudinary.com/dkjmugpjj/image/upload/v1677803612/profile-pic_7_akscth.png"
              alt="Ana Lucia  Bulacios Arroyo"
            />
          </div>
          <div className={style.description}>
            <h3 className={style.h3}>Ana Lucia Bulacios Arroyo</h3>
            <p>
              <a target="_blank" href="https://github.com/analubulacios" rel="noreferrer">GitHub</a>
            </p>
            <p>
              <a target="_blank" href="https://www.linkedin.com/in/ana-lucia-bulacios-9592a8255/" rel="noreferrer">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
        <div className={style.column}>
          <div className={style.container_img}>
            <img
              src="https://res.cloudinary.com/dkjmugpjj/image/upload/v1677803612/profile-pic_6_laxlyf.png"
              alt="Andrés Del Fabro"
            />
          </div>
          <div className={style.description}>
            <h3 className={style.h3}>Andrés Del Fabro</h3>
            <p>
              <a target="_blank" href="https://github.com/Secterum" rel="noreferrer">GitHub</a>
            </p>
            <p>
              <a target="_blank" href="https://www.linkedin.com/in/andres-delfabro/" rel="noreferrer">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
        <div className={style.column}>
          <div className={style.container_img}>
            <img
              src="https://res.cloudinary.com/dkjmugpjj/image/upload/v1677803613/profile-pic_4_ynasc6.png"
              alt="Emanuel Jesus Quintanilla"
            />
          </div>
          <div className={style.description}>
            <h3 className={style.h3}>Emanuel Jesus Quintanilla</h3>
            <p>
              <a target="_blank" href="https://github.com/Emanuel85" rel="noreferrer">GitHub</a>
            </p>
            <p>
              <a target="_blank" href="https://www.linkedin.com/in/emanuel-quintanilla-635819181/" rel="noreferrer">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
        <div className={style.column}>
          <div className={style.container_img}>
            <img
              src="https://res.cloudinary.com/dkjmugpjj/image/upload/v1677803613/profile-pic_5_cyhufc.png"
              alt="Federico Gastón Cid"
            />
          </div>
          <div className={style.description}>
            <h3 className={style.h3}>Federico Gastón Cid</h3>
            <p>
              <a target="_blank" href="https://github.com/fede-cid" rel="noreferrer">GitHub</a>
            </p>
            <p>
              <a target="_blank" href="https://www.linkedin.com/in/federico-cid-519421188/" rel="noreferrer">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
        <div className={style.column}>
          <div className={style.container_img}>
            <img
              src="https://res.cloudinary.com/dkjmugpjj/image/upload/v1677803612/profile-pic_11_g1wsve.png"
              alt="Mary Laura Betancourt Sequera"
            />
          </div>
          <div className={style.description}>
            <h3 className={style.h3}>Mary Laura Betancourt S.</h3>
            <p>
              <a target="_blank" href="https://github.com/marylaurab" rel="noreferrer">GitHub</a>
            </p>
            <p>
              <a target="_blank" href="https://www.linkedin.com/in/mary-laura-betancourt-sequera-518ba9207/" rel="noreferrer">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
        <div className={style.column}>
          <div className={style.container_img}>
            <img
              src="https://res.cloudinary.com/dkjmugpjj/image/upload/v1677803612/profile-pic_9_tzik3c.png"
              alt="Mariano Ibarra Testa"
            />
          </div>
          <div className={style.description}>
            <h3 className={style.h3}>Mariano Ibarra Testa</h3>
            <p>
              <a target="_blank" href="https://github.com/MarianoIT1" rel="noreferrer">GitHub</a>
            </p>
            <p>
              <a target="_blank" href="https://www.linkedin.com/in/marianoibarra/" rel="noreferrer">LinkedIn</a>
            </p>
          </div>
        </div>
        <div className={style.column}>
          <div className={style.container_img}>
            <img
              src="https://res.cloudinary.com/dkjmugpjj/image/upload/v1677803613/profile-pic_8_qkeqig.png"
              alt="Nahuel Ismael Alesso"
            />
          </div>
          <div className={style.description}>
            <h3 className={style.h3}>Nahuel Ismael Alesso</h3>
            <p>
              <a target="_blank" href="https://github.com/NatuAls" rel="noreferrer">GitHub</a>
            </p>
            <p>
              <a target="_blank" href="https://www.linkedin.com/in/nahualesso/" rel="noreferrer">LinkedIn</a>
            </p>
          </div>
        </div>
        <div className={style.column}>
          <div className={style.container_img}>
            <img
              src="https://res.cloudinary.com/dkjmugpjj/image/upload/v1677803612/profile-pic_10_ajd921.png"
              alt="Paola Guerra Llerena"
            />
          </div>
          <div className={style.description}>
            <h3 className={style.h3}>Paola Guerra Llerena</h3>
            <p>
              <a target="_blank" href="https://github.com/paolagll" rel="noreferrer">GitHub</a>
            </p>
            <p>
              <a target="_blank" href="https://www.linkedin.com/in/paola-guerra-366702247/" rel="noreferrer">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentContact;
