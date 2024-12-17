import React, { useEffect, useState } from "react";
import { Card, CardBody, Col, Row, Container } from "reactstrap";
import axiosIns from "../../plugins/axios";
import { useNavigate, useParams } from "react-router-dom"; // Import useParams for dynamic routing

// Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const EditRealisateur = () => {
  // Meta title
  document.title =
    "Edit Realisateur | Skote - Vite React Admin & Dashboard Template";

  // State for form input
  const [name, setName] = useState(""); // Consistent state name and setter
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state for fetching data

  const navigate = useNavigate(); // Initialize navigate function
  const { id } = useParams(); // Get ID from route parameters

  // Fetch réalisateur data on component load
  useEffect(() => {
    const fetchRealisateur = async () => {
      try {
        const response = await axiosIns.get(`realisateurs/${id}`);
        if (response.status === 200) {
          setName(response.data.nom); // Populate the name field with existing data
        } else {
          setError("Failed to load réalisateur data.");
        }
      } catch (err) {
        console.error("Error fetching réalisateur data:", err);
        setError("An error occurred while fetching the data.");
      } finally {
        setLoading(false);
      }
    };

    fetchRealisateur();
  }, [id]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await axiosIns.put(`realisateurs/${id}`, {
        nom: name,
      });

      if (response.status === 200) {
        // Navigate to realisateurs list after successful update
        navigate("/realisateursList");
      } else {
        setError("Unexpected response from the server.");
      }
    } catch (err) {
      console.error("Error updating realisateur:", err);
      setError("Failed to update realisateur. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Forms" breadcrumbItem="Edit Realisateur" />
          <Col lg={12}>
            <Card>
              <CardBody>
                <h4 className="card-title">Modifier le réalisateur</h4>
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
                        {isSubmitting ? "Updating..." : "Update Realisateur"}
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

export default EditRealisateur;
