import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { Button } from "react-bootstrap";
import { fetchSubjects } from "../../api/dataService";
import { isLogin } from "../../api/auth";

const { SearchBar } = Search;

let idFilter;
let usernameFilter;
let chamberFilter;
let birthFilter;
let scoreFilter;
let aliveFilter;

const ClearButton = props => {
  const handleClick = () => {
    props.onSearch("");
    props.clearAllFilter();
  };
  return (
    <Button
      variant="secondary"
      onClick={handleClick}
      style={{
        fontSize: "16px",
        padding: "5px",
        margin: "10px",
        height: "40px"
      }}
    >
      Clear
    </Button>
  );
};

class SubjectsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subjects: [], isLoading: true };
  }

  columns = [
    {
      dataField: "SubjectId",
      text: "Subject ID",
      filter: textFilter({
        getFilter: filter => {
          idFilter = filter;
        }
      })
    },
    {
      dataField: "Username",
      text: "Username",
      filter: textFilter({
        getFilter: filter => {
          usernameFilter = filter;
        }
      }),
      sort: true
    },
    {
      dataField: "TestChamber",
      text: "Test Chamber",
      filter: textFilter({
        getFilter: filter => {
          chamberFilter = filter;
        }
      })
    },
    {
      dataField: "DateOfBirth",
      text: "Date of Birth",
      filter: textFilter({
        getFilter: filter => {
          birthFilter = filter;
        }
      })
    },
    {
      dataField: "TotalScore",
      text: "Score",
      filter: textFilter({
        getFilter: filter => {
          scoreFilter = filter;
        }
      })
    },
    {
      dataField: "Alive",
      text: "Alive",
      filter: textFilter({
        getFilter: filter => {
          aliveFilter = filter;
        }
      })
    }
  ];

  clearAllFilter() {
    idFilter("");
    usernameFilter("");
    chamberFilter("");
    birthFilter("");
    scoreFilter("");
    aliveFilter("");
  }

  componentWillMount() {
    if (!isLogin()) {
      return;
    }
    fetchSubjects(localStorage.jwt_token)
      .then(subjects => this.setState({ isLoading: false, subjects }))
      .catch(error => this.setState({ isLoading: false, error: error }));
  }

  render() {
    if (this.state.isLoading) {
      return null;
    }
    return (
      <div>
        <h1>All test subjects data</h1>
        <ToolkitProvider
          bootstrap4
          keyField="name"
          data={this.state.subjects}
          columns={this.columns}
          search
        >
          {props => (
            <div>
              <SearchBar
                {...props.searchProps}
                style={{ width: "400px", height: "40px" }}
              />
              <ClearButton
                {...props.searchProps}
                clearAllFilter={this.clearAllFilter}
              />
              <Button
                variant="primary"
                href="/newSubject"
                style={{
                  fontSize: "16px",
                  padding: "5px",
                  margin: "10px",
                  height: "40px"
                }}
              >
                Register new subject
              </Button>
              <BootstrapTable
                {...props.baseProps}
                filter={filterFactory()}
                noDataIndication="There is no solution"
                striped
                hover
                condensed
              />
            </div>
          )}
        </ToolkitProvider>
      </div>
    );
  }
}

export default SubjectsView;
