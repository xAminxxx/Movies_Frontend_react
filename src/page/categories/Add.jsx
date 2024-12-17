import React, { useState } from "react";
import { Card, CardBody, Col, Row, Container } from "reactstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import axiosIns from "../../plugins/axios";

const FormElements = () => {
  // Meta title
  document.title =
    "Form Elements | Skote - Vite React Admin & Dashboard Template";

  // State for form input
  const [categoryName, setCategoryName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Initialize navigate function

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await axiosIns.post("categories", {
        nom: categoryName,
      });

      if (response.status === 201) {
        // Navigate to categories list after successful addition
        navigate("/categoriesList");
      }
    } catch (err) {
      console.error("Error submitting category:", err);
      setError("Failed to add category. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Forms" breadcrumbItem="Form Elements" />
          <Col lg={12}>
            <Card>
              <CardBody>
                <h4 className="card-title">Ajouter une catégorie d'un film</h4>
                <br />
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={6}>
                      <div>
                        <label className="form-label">Nom du catégorie</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter category name"
                          value={categoryName}
                          onChange={(e) => setCategoryName(e.target.value)}
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
                        {isSubmitting ? "Submitting..." : "Add Category"}
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
