import axios from "axios";

const config = {
  headers: { Authorization: `Bearer ${localStorage.jwt_token}` }
};

export function fetchQuestions() {
  return axios.get("/testQuestions", config).catch(error => {
    if (error.response) {
      const errorData = error.response;
      throw new Error(`${errorData.status}: ${errorData.statusText}`);
    }
    throw new Error("Some error occurred");
  });
}

export function fetchSubjects() {
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
