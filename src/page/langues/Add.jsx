import React, { useState } from "react";
import { Card, CardBody, Col, Row, Container } from "reactstrap";
import axiosIns from "../../plugins/axios";
import { useNavigate } from "react-router-dom";

// Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const LangueForm = () => {
  // Meta title
  document.title = "Add Langue";

  // State for form input
  const [langues, setLangues] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Initialize navigate function

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await axiosIns.post("langues", {
        langues,
      });

      if (response.status === 201) {
        // Navigate to langues list after successful addition
        navigate("/languesList");
      } else {
        setError("Unexpected response from the server.");
      }
    } catch (err) {
      console.error("Error submitting langue:", err);
      setError("Failed to add langue. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Langues" breadcrumbItem="Add Langue" />
          <Col lg={12}>
            <Card>
              <CardBody>
                <h4 className="card-title">Ajouter une langue</h4>
                <br />
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={6}>
                      <div>
                        <label className="form-label">Langue</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter une langue"
                          value={langues}
                          onChange={(e) => setLangues(e.target.value)}
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
                        {isSubmitting ? "Submitting..." : "Add Language"}
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

export default LangueForm;
