const fs = require("fs");
const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");

const server = jsonServer.create();
const router = jsonServer.router("./data.json");
const userdb = JSON.parse(fs.readFileSync("./data.json", "UTF-8"));

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = "123456789";
const expiresIn = "1h";

// Create a token from a payload
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Verify the token
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) =>
    decode !== undefined ? decode : err
  );
}

// Check if the user exists in database
function isSubjectsAuthenticated({ username, password }) {
  return (
    userdb.subjects.findIndex(
      user => user.SubjectId === username && user.Password === password
    ) !== -1
  );
}

function isGLaDOSAuthenticated({ username, password }) {
  return (
    userdb.GLaDOS.SubjectId === username && userdb.GLaDOS.Password === password
  );
}

// Login to one of the users from ./users.json
server.post("/auth/login", (req, res) => {
  console.log("login endpoint called; request body:");
  console.log(req.body);
  const { username, password } = req.body;
  if (
    isGLaDOSAuthenticated({ username, password }) === false &&
    isSubjectsAuthenticated({ username, password }) === false
  ) {
    const status = 401;
    const message = "Incorrect username or password";
    res.status(status).json({ status, message });
    return;
  }
  let role;
  if (isGLaDOSAuthenticated({ username, password })) {
    role = "GLaDOS";
  }
  if (isSubjectsAuthenticated({ username, password })) {
    role = "Subject";
  }
  const access_token = createToken({ username, password, role });
  res.status(200).json({ access_token });
});

server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (
    req.headers.authorization === undefined ||
    req.headers.authorization.split(" ")[0] !== "Bearer"
  ) {
    const status = 401;
    const message = "Error in authorization format";
    res.status(status).json({ status, message });
    return;
  }
  try {
    let verifyTokenResult;
    verifyTokenResult = verifyToken(req.headers.authorization.split(" ")[1]);

    if (verifyTokenResult instanceof Error) {
      const status = 401;
      const message = "Access token not provided";
      res.status(status).json({ status, message });
      return;
    }
    next();
  } catch (err) {
    const status = 401;
    const message = "Error access_token is revoked";
    res.status(status).json({ status, message });
  }
});

server.use(router);

server.listen(8000, () => {
  console.log("Run Auth API Server");
});
