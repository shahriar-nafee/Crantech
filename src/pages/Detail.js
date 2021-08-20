import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useTheme } from "../components/ThemeContext";

function Detail() {
  const location = useLocation();
  const url = location.state;
  const [data, setData] = useState();
  const { themes, language } = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(url)
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => {
          console.log(`err`, err);
        });
    };
    fetchData();
  }, []);

  const styles = {
    color: themes && themes["text-color"],
    backgroundColor: themes && themes["background-color"],
    fontFamily: themes && themes["text-font"],
  };

  const cardStyles = {
    color: themes && themes["card-text-color"],
    backgroundColor: themes && themes["card-background-color"],
    fontFamily: themes && themes["card-text-font"],
  };

  return (
    <div style={styles} className="jumbotron">
      <div className="container container-fluid">
        <div className="mt-5 text-center">
          <h3>Product Details</h3>
        </div>
        <div className="row mt-2">
          {data &&
            data.cards.map((item, index) => (
              <div className="col-md-4 col-sm-6 mt-3" key={index}>
                <Card style={cardStyles}>
                  <Card.Img variant="top" src={item.photo} />
                  <Card.Body>
                    <Card.Title>
                      {language === "en" ? item.title_en : item.title_bn}
                    </Card.Title>
                    <Card.Text>
                      {language === "en" ? item.value_en : item.value_bn}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Detail;
