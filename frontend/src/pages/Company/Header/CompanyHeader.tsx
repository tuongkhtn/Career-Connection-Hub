import React, { useEffect, useState } from "react";
import { Card, Col, Nav, Row, Image } from "react-bootstrap";
import ICompany from "../../../interfaces/interfaces";

interface CompanyHeaderProps {
  myState?: string;
  setMyState?: React.Dispatch<React.SetStateAction<string>>;
  companyData: ICompany | null;
}

const CompanyHeader = ({
  myState,
  setMyState,
  companyData,
}: CompanyHeaderProps) => {
  const myActiveKey = myState || "/snapshot";
  const [companyRating, setCompanyRating] = useState(0);
  const setMyActiveKey = setMyState || (() => {});

  useEffect(() => {
    const sumRating = companyData
      ? companyData.reviews.reduce((acc, review) => acc + review.rating, 0)
      : 0;
    const len = companyData
      ? companyData.reviews.length == 0
        ? 1
        : companyData.reviews.length
      : 1;
    const rating = sumRating / len;

    setCompanyRating(rating);
  }, [companyData]);

  return (
    <div className="bg-cyan py-3 pb-0">
      <div className="container">
        {/* Header Section */}
        <div className="row">
          <Card
            className="col-auto d-flex mb-3 mb-md-0"
            style={{ backgroundColor: "#00000000", border: "none" }}
          >
            <Row>
              <Col xs="auto" className="d-flex justify-content-center">
                <Image
                  src={companyData ? companyData.avatar : "/company-avatar.jpg"} // Đặt đường dẫn tới logo
                  roundedCircle
                  style={{ width: "80px" }}
                />
              </Col>
              <Col className="d-flex flex-column justify-content-center">
                <h5 className="mb-1">
                  {companyData ? companyData.company_name : "Fusodoya Company"}
                </h5>
                <div className="d-flex align-items-center mb-1">
                  <span className="me-2 text-primary fw-bold">
                    {companyRating.toFixed(2)}
                  </span>
                  <div className="text-warning">
                    {"★".repeat(Math.floor(companyRating))}
                    {"☆".repeat(5 - Math.floor(companyRating))}
                  </div>
                  <small className="text-muted ms-2">
                    {companyData ? companyData.reviews.length : 0} reviews
                  </small>
                </div>
                <small className="text-muted">
                  {companyData ? companyData.applicant?.length : 0} others have
                  applied here
                </small>
              </Col>
            </Row>
          </Card>

          <Card
            className="col-auto d-flex justify-content-center ms-md-auto"
            style={{ backgroundColor: "#00000000", border: "none" }}
          >
            <Row className="mb-2">
              <Col xs="auto" className="d-flex justify-content-center">
                <button className="btn btn-primary">Follow</button>
              </Col>
              <Col xs="auto" className="d-flex justify-content-center">
                <button className="btn btn-outline-primary">
                  Write a review
                </button>
              </Col>
            </Row>
            <Row>
              <Col xs="auto" className="d-flex justify-content-center">
                <small className="text-muted">
                  {" "}
                  {companyData ? companyData.followers?.length : 0} followers
                </small>
              </Col>
              <Col xs="auto" className="d-flex justify-content-center">
                <small className="text-muted">
                  {companyData ? companyData.employees?.length : 0} employees{" "}
                </small>
              </Col>
            </Row>
          </Card>
        </div>

        {/* Navbar Section */}
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <Nav
              className="mx-auto"
              variant="underline"
              activeKey={myActiveKey}
              onSelect={(selectedKey) =>
                setMyActiveKey(selectedKey || "/snapshot")
              }
            >
              <Nav.Item className="me-2 me-md-5">
                <Nav.Link
                  eventKey="/snapshot"
                  href="snapshot"
                  className="text-dark fs-5"
                >
                  Snapshot
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="me-2 me-md-5">
                <Nav.Link
                  eventKey="/jobs"
                  href={"jobs"}
                  className="text-dark fs-5"
                >
                  Jobs
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="me-2 me-md-5">
                <Nav.Link
                  eventKey="/reviews"
                  href="reviews"
                  className="text-dark fs-5"
                >
                  Reviews
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="me-2 me-md-5">
                <Nav.Link eventKey="/qa" href="qa" className="text-dark fs-5">
                  Q&A
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyHeader;
