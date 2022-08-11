import React, { useEffect, useState } from "react";
import { Alert, Card, Container, Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/Header.js/Header";
import { emailVerifiyAdminUser } from "../../helpers/axiosHelper";

const EmailVerification = () => {
  const [queryParams] = useSearchParams();
  const [isPending, setIsPending] = useState(true);
  const [response, setResponse] = useState({});
  console.log(queryParams.get("e"));
  useEffect(() => {
    const obj = {
      emailValidationCode: queryParams.get("c"),
      email: queryParams.get("e"),
    };
    // call axios to call the server
    (async () => {
      const result = await emailVerifiyAdminUser(obj);
      setResponse(result);
      setIsPending(false);
    })();
  }, [queryParams]);

  return (
    <div>
      <Header />
      <Container className="page-main">
        {isPending && (
          <Card className="mt-5 p-2 m-auto" style={{ width: "20rem" }}>
            <Spinner animation="border" size="sm" />
            <Spinner animation="border" />
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" />
            <h5> Email Verification Process has begin. Please wait...</h5>
          </Card>
        )}
        {response.message && (
          <Alert
            variant={response.status === "success" ? "success" : "danger"}
            className="mt-5 p-2 m-auto"
          >
            {response.message}
          </Alert>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default EmailVerification;
