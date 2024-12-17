import React, { useEffect, useState } from "react";
import { Card, CardBody, Col, Row, Container } from "reactstrap";
import axiosIns from "../../plugins/axios";
import { useNavigate, useParams } from "react-router-dom";

// Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const EditLangue = () => {
  // Meta title
  document.title = "Edit Langue";

  // State for form input and loading state
  const [langues, setLangues] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams(); // Get the ID from the route parameters

  // Fetch data when the component is mounted
  useEffect(() => {
    const fetchLangue = async () => {
      try {
        const response = await axiosIns.get(`langues/${id}`);
        if (response.status === 200) {
          setLangues(response.data.langues); // Assuming the API returns an object with 'langues'
        } else {
          setError("Failed to load langue data.");
        }
      } catch (err) {
        console.error("Error fetching langue data:", err);
        setError("Failed to load langue data. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchLangue();
  }, [id]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await axiosIns.put(`langues/${id}`, {
        langues,
      });

      if (response.status === 200) {
        // Navigate to the langues list after a successful update
        navigate("/languesList");
      } else {
        setError("Unexpected response from the server.");
      }
    } catch (err) {
      console.error("Error updating langue:", err);
      setError("Failed to update langue. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading message while data is being fetched
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Langues" breadcrumbItem="Edit Langue" />
          <Col lg={12}>
            <Card>
              <CardBody>
                <h4 className="card-title">Modifier une langue</h4>
                <br />
                {error && <div className="text-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={6}>
                      <div>
                        <label className="form-label">Langue</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Modifier une langue"
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
                        {isSubmitting ? "Saving..." : "Save Changes"}
                      </button>
                    </Col>
                  </Row>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default EditLangue;
