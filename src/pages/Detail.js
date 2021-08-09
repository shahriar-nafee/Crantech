import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useTheme } from "../components/ThemeContext";
import { useLanguage } from "../components/ThemeContext";

function Detail() {
  const location = useLocation();
  const url = location.state;
  const [data, setData] = useState();
  const theme = useTheme();
  const Language = useLanguage();

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
    color: theme && theme["text-color"],
    backgroundColor: theme && theme["background-color"],
    fontFamily: theme && theme["text-font"],
  };

  const cardStyles = {
    color: theme && theme["card-text-color"],
    backgroundColor: theme && theme["card-background-color"],
    fontFamily: theme && theme["card-text-font"],
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
                      {Language === "en" ? item.title_en : item.title_bn}
                    </Card.Title>
                    <Card.Text>
                      {Language === "en" ? item.value_en : item.value_bn}
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
