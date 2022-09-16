import React, { useEffect, useState } from "react";
const Repos = (props) => {
  const { repoList } = props;
  return (
    <div>
      <table
        style={{ width: "60%", borderCollapse: "separate", fontSize: "large" }}
      >
        <tr>
          <th
            style={{
              border: "1px solid #222",
              paddingLeft: "1%",
              paddingRight: "1%",
            }}
          >
            Repo Name
          </th>
          <th
            style={{
              border: "1px solid #222",
              paddingLeft: "1%",
              paddingRight: "1%",
            }}
          >
            Stars
          </th>
          <th
            style={{
              border: "1px solid #222",
              paddingLeft: "1%",
              paddingRight: "1%",
            }}
          >
            Forks
          </th>
        </tr>
        {repoList.map((repo) => (
          <tr>
            <td
              style={{
                border: "1px solid #222",
                paddingLeft: "1%",
                paddingRight: "1%",
              }}
            >
              {repo.name}
            </td>
            <td
              style={{
                border: "1px solid #222",
                paddingLeft: "1%",
                paddingRight: "1%",
              }}
            >
              {repo.stars}
            </td>
            <td
              style={{
                border: "1px solid #222",
                paddingLeft: "1%",
                paddingRight: "1%",
              }}
            >
              {repo.forks}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

//high order component that adds expand option
function tableWithExpand(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showLess: true,
      };
    }
    handleClick() {
      console.log("a");
      this.setState((prevState) => {
        const { showLess } = prevState;
        return { showLess: !showLess };
      });
    }
    render() {
      const { repoList } = this.props;
      const { showLess } = this.state;
      return (
        <div>
          <WrappedComponent
            {...this.props}
            repoList={showLess ? repoList.slice(0, 4) : repoList}
          />
          <button
            style={{
              backgroundColor: "#555555",
              border: "none",
              color: "white",
              padding: "15px 32px",
              textAlign: "center",
              textDecoration: "none",
              display: "inlineBlock",
              fontSize: "16px",
              marginTop: "10px",
            }}
            onClick={() => this.handleClick()}
          >
            {showLess ? "Show More" : "Show Less"}
          </button>
        </div>
      );
    }
  };
}

export default tableWithExpand(Repos);
