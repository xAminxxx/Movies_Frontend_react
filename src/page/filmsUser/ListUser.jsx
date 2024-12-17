import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  Nav,
  NavItem,
  NavLink,
  Row,
} from "reactstrap";
import classnames from "classnames";
import axiosIns from "../../plugins/axios";

//Import Breadcrumb
import Breadcrumbs from "/src/components/Common/Breadcrumb";

//Import Spinners
import Spinners from "../../components/Common/Spinner";

const FilmsList = () => {
  // Meta title
  document.title = "Films | Skote - Vite React Admin & Dashboard Template";

  const navigate = useNavigate();

  const [films, setFilms] = useState([]);
  const [productList, setProductList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("1");
  const [minCost, setMinCost] = useState(0);
  const [maxCost, setMaxCost] = useState(500);

  // Fetch films using Axios
  const fetchFilms = async () => {
    try {
      const response = await axiosIns.get("film");
      setFilms(response.data);
      setProductList(response.data);
    } catch (error) {
      console.error("Error fetching films:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const handleSearch = (ele) => {
    const query = ele.value.toLowerCase();
    const filteredList = films.filter((film) =>
      film.nom.toLowerCase().includes(query)
    );
    setProductList(filteredList);
  };

  // Filter films based on price range
  const onUpdate = (value) => {
    const filteredData = films.filter(
      (film) => film.description >= value[0] && film.description <= value[1]
    );
    setProductList(filteredData);
    setMinCost(value[0]);
    setMaxCost(value[1]);
  };

  useEffect(() => {
    onUpdate([minCost, maxCost]);
  }, [minCost, maxCost]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Ecommerce" breadcrumbItem="Films" />
          <Row className="mb-3">
            <Col xl={4} sm={6}>
              <div className="mt-2">
                <h5>Films</h5>
              </div>
            </Col>
            <Col lg={8} sm={6}>
              <Form className="mt-4 mt-sm-0 float-sm-end d-sm-flex align-items-center">
                <div className="search-box me-2">
                  <div className="position-relative">
                    <Input
                      type="text"
                      className="border-0"
                      placeholder="Search..."
                      onChange={(e) => handleSearch(e.target)}
                    />
                    <i className="bx bx-search-alt search-icon" />
                  </div>
                </div>
                <Nav
                  className="product-view-nav justify-content-end mt-3 mt-sm-0"
                  pills
                >
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "1" })}
                      onClick={() => {
                        toggleTab("1");
                      }}
                    >
                      <i className="bx bx-grid-alt" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "2" })}
                      onClick={() => {
                        toggleTab("2");
                      }}
                    >
                      <i className="bx bx-list-ul" />
                    </NavLink>
                  </NavItem>
                </Nav>
              </Form>
            </Col>
          </Row>
          {isLoading ? (
            <Spinners setLoading={setLoading} />
          ) : (
            <>
              <Row>
                {productList.map((film, key) => (
                  <Col xl={4} sm={6} key={"_col_" + key}>
                    <Card
                      onClick={() =>
                        navigate(`/ecommerce-product-detail/${film.id}`)
                      }
                    >
                      <CardBody>
                        <div className="product-img position-relative">
                          <img
                            src={film.poster}
                            alt={film.nom}
                            className="img-fluid mx-auto d-block"
                            style={{
                              maxWidth: "100%", // Allow the image to take up full width
                              height: "auto", // Maintain aspect ratio
                              objectFit: "cover", // Optional: Make sure it covers the box if aspect ratio is off
                            }}
                          />
                        </div>
                        <div className="mt-4 text-center">
                          <h5 className="mb-3 text-truncate">
                            <Link
                              to={`/ecommerce-product-detail/${film.id}`}
                              className="text-dark"
                            >
                              {film.nom}
                            </Link>
                          </h5>
                          <h5 className="my-0">
                            <b>{film.description}</b>
                          </h5>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="text-center mt-2 mb-5">
                    <Link to="#" className="text-success">
                      <i className="bx bx-loader bx-spin font-size-18 align-middle me-2"></i>{" "}
                      Load more{" "}
                    </Link>
                  </div>
                </Col>
              </Row>
            </>
          )}
        </Container>
      </div>
    </React.Fragment>
  );
};

FilmsList.propTypes = {
  products: PropTypes.array,
};

export default FilmsList;
