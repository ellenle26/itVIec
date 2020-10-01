import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { Button, Badge } from "react-bootstrap";
import "../App.css";

const JobDetail = () => {
  const { id } = useParams();
  let [jobPostDetail, setJobPostDetail] = useState();

  const getJobDetail = async () => {
    try {
      let url = `https://my-json-server.typicode.com/ellenle26/itVIec/jobs/${id}`;
      let response = await fetch(url);
      let data = await response.json();
      console.log("data", data);
      setJobPostDetail(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getJobDetail();
  }, []);

  return !jobPostDetail ? (
    <div>Loading</div>
  ) : (
    <div className="detailPage">
      {console.log(jobPostDetail)}
      <h1>Job detail Page</h1>
      <div className="postDetail">
        <div>
          <img src={jobPostDetail.img} alt="" className="logoImg" />
          <h3>{jobPostDetail.title}</h3>
        </div>
        <div>
          {jobPostDetail.tags.map((item) => (
            <span style={{ marginRight: "3px" }}>
              <Badge variant="secondary">{item}</Badge>
            </span>
          ))}
          {jobPostDetail.isHotjob == true ? (
            <Badge variant="warning">Hot Job</Badge>
          ) : (
            <></>
          )}
        </div>
        <div
          style={{ fontSize: "20px", fontWeight: "bold", color: "darkorange" }}
        >
          ${jobPostDetail.salary}
        </div>
        <div>
          {jobPostDetail.city} - District {jobPostDetail.district}
        </div>
        <div>{moment(jobPostDetail.time).fromNow()}</div>
        <h4>
          <u>Benefit</u>
        </h4>
        <ul>
          {jobPostDetail.benefits.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <h4>
          <u>Description</u>
        </h4>
        <div>{jobPostDetail.description}</div>
        <br />
        <Button variant="success" type="submit">
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default JobDetail;
