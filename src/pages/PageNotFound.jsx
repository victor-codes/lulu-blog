import React from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router";
import Button from "../components/Button";

const PageNotFound = () => {
  const history = useHistory();
  return (
    <>
      <Helmet>
        <title> Page not found - Lulu Nwenyi</title>
      </Helmet>
      <div className="absolute"></div>
      <main className="not_found">
        
        <div>
          <h2>Oops! Something’s wrong :(</h2>
          <p>
            Sorryyyyyy! The page you’re looking for does not exist. Consider
            checking the URL for typos or continue your search by going back.
          </p>
          <Button
            startIcon={true}
            onClick={() => {
              history.goBack();
            }}
          >
            GO BACK
          </Button>
        </div>
      </main>
    </>
  );
};

export default PageNotFound;
