import React, { useState } from "react";
import { Card, CardBody, Col, Row, Container } from "reactstrap";
import axiosIns from "../../plugins/axios";

import { useNavigate } from "react-router-dom"; // Import useNavigate

// Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const ActeurForm = () => {
  // Meta title
  document.title = "Add Acteur";

  // State for form input
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [nationalite, setNationalite] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Initialize navigate function

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await axiosIns.post("editeurs", {
        nom,
        prenom,
        nationalite,
        date_naissance: dateNaissance, // Send date as a formatted string
      });

      if (response.status === 201) {
        // Navigate to acteurs list after successful addition
        navigate("/editeursList");
      }
    } catch (err) {
      console.error("Error submitting editeur:", err);
      setError("Failed to add editeur. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Forms" breadcrumbItem="Add Editeur" />
          <Col lg={12}>
            <Card>
              <CardBody>
                <h4 className="card-title">Ajouter un editeur</h4>
                <br />
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={6}>
                      <div>
                        <label className="form-label">Nom</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter editor's last name"
                          value={nom}
                          onChange={(e) => setNom(e.target.value)}
                          required
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div>
                        <label className="form-label">Prénom</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter editor's first name"
                          value={prenom}
                          onChange={(e) => setPrenom(e.target.value)}
                          required
                        />
                      </div>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col lg={6}>
                      <div>
                        <label className="form-label">Nationalité</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter editor's nationality"
                          value={nationalite}
                          onChange={(e) => setNationalite(e.target.value)}
                          required
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div>
                        <label className="form-label">Date de naissance</label>
                        <input
                          className="form-control"
                          type="date"
                          value={dateNaissance}
                          onChange={(e) => setDateNaissance(e.target.value)}
                          required
                        />
                      </div>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col lg={6}>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Add Acteur"}
                      </button>
                    </Col>
                  </Row>
                  <br />
                  {error && <div className="text-danger">{error}</div>}
                </form>
              </CardBody>
            </Card>
          </Col>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ActeurForm;
