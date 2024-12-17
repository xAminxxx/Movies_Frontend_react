import React, { useState } from "react";
import { Card, CardBody, Col, Row, Container } from "reactstrap";
import axiosIns from "../../plugins/axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const FormElements = () => {
  // Meta title
  document.title =
    "Add Realisateur | Skote - Vite React Admin & Dashboard Template";

  // State for form input
  const [name, setName] = useState(""); // Consistent state name and setter
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Initialize navigate function

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await axiosIns.post("realisateurs", {
        nom: name,
      });

      if (response.status === 201) {
        // Navigate to realisateurs list after successful addition
        navigate("/realisateursList");
      } else {
        setError("Unexpected response from the server.");
      }
    } catch (err) {
      console.error("Error submitting realisateur:", err);
      setError("Failed to add realisateur. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Forms" breadcrumbItem="Add Realisateur" />
          <Col lg={12}>
            <Card>
              <CardBody>
                <h4 className="card-title">Ajouter un réalisateur</h4>
                <br />
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={6}>
                      <div>
                        <label className="form-label">Nom du réalisateur</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Entrez le nom du réalisateur"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
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
                        {isSubmitting ? "Submitting..." : "Add Realisateur"}
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

export default FormElements;
