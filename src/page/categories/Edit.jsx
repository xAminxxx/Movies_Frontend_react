import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import axios from "../../plugins/axios";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Label,
  Input,
  Button,
} from "reactstrap"; // Importing UI components
import axiosIns from "../../plugins/axios";

const EditCategory = () => {
  const { id } = useParams(); // Get the category ID from the URL
  const navigate = useNavigate(); // To navigate after submitting the form

  const [category, setCategory] = useState({
    nom: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the category data based on the ID when the component loads
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axiosIns.get(`categories/${id}`);
        setCategory(response.data); // Assuming the API returns a category object
      } catch (error) {
        console.error("Error fetching category data:", error);
        setError("Failed to fetch category data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [id]);

  // Handle form submission to update the category
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosIns.put(`categories/${id}`, category);
      if (response.status === 200) {
        alert("Category updated successfully");
        navigate("/categoriesList"); // Redirect to the categories list page after successful update
      }
    } catch (error) {
      console.error("Error updating category:", error);
      setError("Failed to update category.");
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((prevCategory) => ({
      ...prevCategory,
      [name]: value,
    }));
  };

  // Show loading spinner or error if applicable
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="page-content">
      <Container fluid={true}>
        <Row>
          <Col lg={12}>
            <Card>
              <CardBody>
                <CardTitle className="h4">Edit Category</CardTitle>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label for="nom">Category Name</Label>
                        <Input
                          type="text"
                          id="nom"
                          name="nom"
                          value={category.nom || ""}
                          onChange={handleChange}
                          placeholder="Enter category name"
                        />
                      </div>
                    </Col>
                  </Row>

                  <Button type="submit" color="primary">
                    Save Changes
                  </Button>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EditCategory;
