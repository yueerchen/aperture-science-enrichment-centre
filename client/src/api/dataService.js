import axios from "axios";

export function fetchQuestions(token) {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return axios
    .get("/testQuestions", config)
    .then(res => {
      return res.data;
    })
    .catch(error => {
      if (error.response) {
        const errorData = error.response;
        throw new Error(`${errorData.status}: ${errorData.statusText}`);
      }
      throw new Error("Some error occurred");
    });
}

export function addResponse(data) {
  return axios
    .post("/testSubmissions", data)
    .then(res => {
      return true;
    })
    .catch(error => {
      if (error.response) {
        const errorData = error.response;
        throw new Error(`${errorData.status}: ${errorData.statusText}`);
      }
      throw new Error("Some error occurred");
    });
}

export function fetchSubjects(token) {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return axios
    .get("/subjects", config)
    .then(res => {
      return res.data;
    })
    .catch(error => {
      if (error.response) {
        const errorData = error.response;
        throw new Error(`${errorData.status}: ${errorData.statusText}`);
      }
      throw new Error("Some error occurred");
    });
}

export function addSubject(data) {
  return axios.post("/subjects", data);
}

export function getAliveSubjects() {
  return axios
    .get("/subjects?Alive=true")
    .then(res => {
      return res.data.length;
    })
    .catch(error => {
      if (error.response) {
        const errorData = error.response;
        throw new Error(`${errorData.status}: ${errorData.statusText}`);
      }
      throw new Error("Some error occurred");
    });
}
