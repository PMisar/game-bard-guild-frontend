// src/components/ArticleCard.jsx

import { Link } from "react-router-dom";

export default function ArticleCard({ title, description, _id }) {
  return (
    <div className="ArticleCard card d-flex flex-column align-items-center justify-content-center"
    style={{ backgroundColor: "#BCD6E5" }}
    >
      <Link
        to={`/articles/${_id}`}
        style={{
          maxWidth: "90%",
          paddingTop: "20px",
          paddingBottom: "20px",
          textDecoration: "none",
          // color: "inherit", 
        }}
      >
        <h3 className="text-center" style={{ listStyle: "none" }}>
          {title}
        </h3>
      </Link>
      <p
        className="text-center"
        style={{ maxWidth: "80%", paddingBottom: "20px" }}
      >
        {description}
      </p>
    </div>
  );
}
// export default function ArticleCard({ title, description, _id }) {
//   return (
//     <div className="ArticleCard card d-flex flex-column align-items-center justify-content-center" >
//       <Link to={`/articles/${_id}`} style={{ maxWidth: "90%", paddingTop: "20px", paddingBottom: "20px" }}>
//         <h3 className="text-center">{title}</h3>
//       </Link>
//       <p className="text-center" style={{ maxWidth: "80%", paddingBottom: "20px" }}>
//         {description}
//       </p>
//     </div>
//   );
// }