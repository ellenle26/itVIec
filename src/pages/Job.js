import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { jobAction } from "../redux/action/jobAction";
import { Form, Button, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const QUERYSTR_PREFIX = "q";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Job = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let [jobList, setJobList] = useState([]);
  // let [originList, setOriginList] = useState([]);
  let query = useQuery();
  let [keyword, setKeyword] = useState(query.get(QUERYSTR_PREFIX));
  const originList = useSelector((state) => state.job.originList);


  const getJobs = () => {
    dispatch(jobAction.getJobData());
  };

  const goToJobDetail = (index) => {
    history.push(`/detail/${index}`);
  };

  const handleSearch = (e) => {
    let filterJobs = originList;
    if (e) {
      e.preventDefault();
      history.push(`/?${QUERYSTR_PREFIX}=${encodeURIComponent(keyword)}`);
    }
    if (keyword) {
      filterJobs = originList.filter((item) =>
        item.title.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    setJobList(filterJobs);
    // if (!keyword) {
    //   getJobs();
    //   return;
    // }
  };

  useEffect(() => {
    getJobs();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [originList]);

  return (
    <div className="jobList">
      <div className="searchBar">
        <Form inline onSubmit={(e) => handleSearch(e)}>
          <Form.Control
            type="text"
            placeholder="Search something"
            onChange={(e) => setKeyword(e.target.value)}
          />
          &nbsp;
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      {jobList &&
        jobList.map((job) => (
          <div onClick={() => goToJobDetail(job.id)} className="jobPost">
            <div className="jobPostCont">
              <img src={job.img} alt="" className="logoImg" />
            </div>
            <div className="jobPostCont">
              <div>
                <b>{job.title}</b>
              </div>
              <div
                style={{
                  fontWeight: "bold",
                }}
              >
                ${job.salary}
              </div>
              <ul>
                {job.benefits.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
              <div>
                {job.tags.map((item) => (
                  <span style={{ marginRight: "3px" }}>
                    <Badge variant="secondary">{item}</Badge>
                  </span>
                ))}
              </div>
            </div>
            <div className="jobPostCont">
              {job.isHotjob == true ? (
                <Badge variant="warning">Hot Job</Badge>
              ) : (
                <></>
              )}
              <div>
                {job.city}
                <br />
                District {job.district}
              </div>
              <div>{moment(job.time).fromNow()}</div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Job;
