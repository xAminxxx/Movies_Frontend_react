import React, { useState } from "react";
import { Card, CardBody, Col, Row, Container } from "reactstrap";
import axiosIns from "../../plugins/axios";
import { useNavigate } from "react-router-dom";

// Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UserForm = () => {
  document.title = "Add User";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    type: false, // Default to regular user (false)
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, type, checked, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value, // Correctly update the state for checkbox
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    console.log("Form Data: ", formData); // Log the form data before submitting

    try {
      const response = await axiosIns.post("adduser", formData);
      if (response.status === 201) {
        navigate("/usersList");
      } else {
        setError("Unexpected response from the server.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to add user. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="User" breadcrumbItem="Add User" />
          <Col lg={12}>
            <Card>
              <CardBody>
                <h4 className="card-title">Add User</h4>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={6}>
                      <div>
                        <label className="form-label">Name</label>
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="Enter name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div>
                        <label className="form-label">Email</label>
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          placeholder="Enter email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <div>
                        <label className="form-label">Password</label>
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          placeholder="Enter password"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div>
                        <label className="form-label">Admin</label>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="type"
                            value={formData.type} // Ensure checkbox reflects formData.type
                            onChange={handleInputChange} // Ensure checkbox toggle updates formData
                          />
                          <label className="form-check-label">Admin User</label>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Add User"}
                      </button>
                    </Col>
                  </Row>
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

export default UserForm;
