import React, { useState, useEffect } from "react";
import { Card, CardBody, Col, Row, Container } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom"; // Import useNavigate and useParams
import axiosIns from "../../plugins/axios";

// Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const EditActeurForm = () => {
  const { id } = useParams(); // Get actor ID from the URL parameter
  const navigate = useNavigate(); // Initialize navigate function

  // State for form input
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [nationalite, setNationalite] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Fetch actor data when the component mounts
  useEffect(() => {
    const fetchActorData = async () => {
      try {
        const response = await axiosIns.get(`acteurs/${id}`);
        const { nom, prenom, nationalite, date_naissance } = response.data;
        setNom(nom);
        setPrenom(prenom);
        setNationalite(nationalite);
        setDateNaissance(date_naissance);
      } catch (err) {
        console.error("Error fetching acteur data:", err);
        setError("Failed to load actor data.");
      }
    };

    fetchActorData();
  }, [id]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await axiosIns.put(`acteurs/${id}`, {
        nom,
        prenom,
        nationalite,
        date_naissance: dateNaissance,
      });

      if (response.status === 200) {
        // Navigate to the acteur list after successful update
        navigate("/acteursList");
      }
    } catch (err) {
      console.error("Error updating acteur:", err);
      setError("Failed to update acteur. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Forms" breadcrumbItem="Edit Acteur" />
          <Col lg={12}>
            <Card>
              <CardBody>
                <h4 className="card-title">Editer un acteur</h4>
                <br />
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={6}>
                      <div>
                        <label className="form-label">Nom</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter actor's last name"
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
                          placeholder="Enter actor's first name"
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
                          placeholder="Enter actor's nationality"
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
                        {isSubmitting ? "Updating..." : "Update Acteur"}
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

export default EditActeurForm;
