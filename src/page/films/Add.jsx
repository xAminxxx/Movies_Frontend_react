import React, { useState } from "react";
import { Card, CardBody, Col, Row, Container } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import axiosIns from "../../plugins/axios";

const FilmForm = () => {
  document.title = "Add Film";

  const [formData, setFormData] = useState({
    nom: "",
    description: "",
    date_created: "",
    duree: "",
    prix: "",
    poster: null,
    CategorieID: "", // Use CategorieID instead of id_categorie
    ActeurPID: "", // Use ActeurPID instead of id_acteur_principal
    EditeurID: "", // Use EditeurID instead of id_editeur
    LangueID: "", // Use LangueID instead of id_langue
    RealisateurID: "", // Use RealisateurID instead of id_realisateur
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      poster: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const payload = new FormData();
    for (let key in formData) {
      payload.append(key, formData[key]);
    }

    try {
      const response = await axiosIns.post("film", payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 201) {
        navigate("/filmsListAdmin");
      }
    } catch (err) {
      console.error("Error submitting film:", err);
      setError("Failed to add film. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Forms" breadcrumbItem="Add Film" />
          <Col lg={12}>
            <Card>
              <CardBody>
                <h4 className="card-title">Ajouter un Film</h4>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={6}>
                      <label className="form-label">Nom</label>
                      <input
                        className="form-control"
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleInputChange}
                        required
                      />
                    </Col>
                    <Col lg={6}>
                      <label className="form-label">Description</label>
                      <input
                        className="form-control"
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <label className="form-label">Date Created</label>
                      <input
                        className="form-control"
                        type="date"
                        name="date_created"
                        value={formData.date_created}
                        onChange={handleInputChange}
                        required
                      />
                    </Col>
                    <Col lg={6}>
                      <label className="form-label">Durée</label>
                      <input
                        className="form-control"
                        type="number"
                        name="duree"
                        value={formData.duree}
                        onChange={handleInputChange}
                        required
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <label className="form-label">Prix</label>
                      <input
                        className="form-control"
                        type="number"
                        name="prix"
                        value={formData.prix}
                        onChange={handleInputChange}
                        required
                      />
                    </Col>
                    <Col lg={6}>
                      <label className="form-label">Poster</label>
                      <input
                        className="form-control"
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        onChange={handleFileChange}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <label className="form-label">Catégorie</label>
                      <input
                        className="form-control"
                        type="number"
                        name="CategorieID" // Use CategorieID
                        value={formData.CategorieID}
                        onChange={handleInputChange}
                        required
                      />
                    </Col>
                    <Col lg={6}>
                      <label className="form-label">Acteur Principal</label>
                      <input
                        className="form-control"
                        type="number"
                        name="ActeurPID" // Use ActeurPID
                        value={formData.ActeurPID}
                        onChange={handleInputChange}
                        required
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <label className="form-label">Editeur</label>
                      <input
                        className="form-control"
                        type="number"
                        name="EditeurID" // Use EditeurID
                        value={formData.EditeurID}
                        onChange={handleInputChange}
                        required
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <label className="form-label">Langue</label>
                      <input
                        className="form-control"
                        type="number"
                        name="LangueID" // Use LangueID
                        value={formData.LangueID}
                        onChange={handleInputChange}
                        required
                      />
                    </Col>
                    <Col lg={6}>
                      <label className="form-label">Réalisateur</label>
                      <input
                        className="form-control"
                        type="number"
                        name="RealisateurID" // Use RealisateurID
                        value={formData.RealisateurID}
                        onChange={handleInputChange}
                        required
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Add Film"}
                      </button>
                    </Col>
                  </Row>
                  {error && <div className="text-danger mt-2">{error}</div>}
                </form>
              </CardBody>
            </Card>
          </Col>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default FilmForm;
