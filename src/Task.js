import axios from "axios";
import Repo from "./Repo";
import React, { useEffect, useState } from "react";

const SEARCH_ENDPOINT = "https://api.github.com/search/repositories?q=react";
class Repolist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repoList: [],
    };
  }
  componentDidMount() {
    this.getRepo();
  }
  getRepo = async () => {
    const data = await axios
      .get(SEARCH_ENDPOINT)
      .then((result) => result.data.items)
      .then((repos) =>
        repos.map(({ forks, name, stargazers_count, html_url }) => ({
          forks,
          name,
          stars: stargazers_count,
          url: html_url,
        }))
      );
    if (data) this.setState({ repoList: data });
  };

  render() {
    const { repoList } = this.state;
    console.log(repoList);
    return <Repo repoList={repoList} />;
  }
}

export default Repolist;
