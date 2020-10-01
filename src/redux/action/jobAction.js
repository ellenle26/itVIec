const getJobData = () => async (dispatch) => {
  try {
    let url = `http://localhost:3001/jobs`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    // setJobList(data);
    // setOriginList(data);
    dispatch({ type: "GET_JOB_SUCCESS", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const jobAction = {
  getJobData,
};
