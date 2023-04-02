import { ProjectCard } from "../components/ProjectsCard";
import { Card, Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Cook() {
  return (
    <div className="mt-3 text-center">
      <h1 className="text-success fw-bold ">Add your ingredients</h1>
      <div>
        <h5 className="">List the ingredients you got.</h5>
        <hr />
        <div className="row">
          <div className="d-flex align-items-center mt-3  ">
            <motion.input
              whileHover={{ height: 70 }}
              whileFocus={{ height: 90, scale: 1.03 }}
              type="text"
              placeholder="Tomato, Onion, Salt, Pepper, etc..."
              className={
                "p-3 d-flex bg-success text-white text-center focus-white"
              }
              style={{ width: "100%", borderRadius: "100px" }}
            />
          </div>
        </div>

        <p className="mt-3">Click below to remove</p>
        <div className="d-flex mt-3 justify-content-center align-items-center">
          <span class="btn btn-outline-success btn-sm mx-1">Banana</span>
          <span class="btn btn-outline-success btn-sm mx-1">Banana</span>
          <span class="btn btn-outline-success btn-sm mx-1">Banana</span>
          <span class="btn btn-outline-success btn-sm mx-1">Banana</span>
        </div>
      </div>
    </div>
  );
}
