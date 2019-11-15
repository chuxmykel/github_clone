import React, { Component } from 'react';
import axios from 'axios';
import { config } from 'dotenv';
import PinnedRepo from '../PinnedRepo';
import ProfileDetails from '../ProfileDetails';
import './Main.css';

config();

const axiosGitHubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GIT_HUB_TOKEN}`, // no permissions
  },
});

class Main extends Component {
  state = {
    pinned: [],
    username: '',
    user: {
      empty: true,
    },
    error: null,
  }

  componentDidMount = () => {
    this.getUserDetails();
  }

  getUserDetails = async () => {
    const query = `{
      repositoryOwner(login: "${this.state.username}") {
        ... on User {
          pinnedRepositories(first: 6) {
            edges {
              node {
                name,
                description,
                url
              }
            }
          }
        }
      }
    }`;
    try {
      const {
        data: {
          data: {
            repositoryOwner: {
              pinnedRepositories: {
                edges,
              },
            },
          },
        },
      } = await axiosGitHubGraphQL.post('', { query });

      const { data } = await axios.get(`https://api.github.com/users/${this.state.username}`);
      
      this.setState({
        pinned: edges,
        user: data,
      });
    } catch(e) {
      if(this.state.username !== '') {
        this.setState({
          error: 404,
          user: {
            empty: true,
          }
        });
      }
    }
  }

  componentDidUpdate = async (prevProps) => {
    const { username } = this.props;
    if(prevProps.username !== username) {
      await this.setState({username});
      await this.getUserDetails()
    }
  }

  render = () => {
    const { user, error, username } = this.state;
    const pinnedRepos = this.state.pinned.map(pin => (<PinnedRepo
      key={pin.node.url}
      title={pin.node.name}
      description={pin.node.description ? pin.node.description.slice(0, 198) + '...': null}
    />));
    return (
      <main>
        <div className="main-content">
          <ProfileDetails
            avatarUrl={user.avatar_url}
            name={user.name}
            username={user.login}
            bio={user.bio}
          />
          <section className="repo-n-nav">
          <nav>
            <ul className="repo-nav">
              <li className="active">Overview</li>
              <li>
                Repositories <span className="stat">{user.public_repos || 0}</span>
              </li>
              <li>
                Projects <span className="stat">0</span>
              </li>
              <li>
                Stars <span className="stat">0</span>
              </li>
              <li>
                Followers <span className="stat">{user.followers || 0}</span>
              </li>
              <li>
                Following <span className="stat">{user.following || 0}</span>
              </li>
            </ul>
          </nav>
          <h3 className="repos-title">Pinned</h3>
          <section className="repositories">
            {error === 404 ? (<h3>{`No user with username: ${username} found`}</h3>) : pinnedRepos}
            {username === '' && user.empty ? (<h3>Enter a username in the search bar to get the user details</h3>) : null}
          </section>
          </section>
        </div>
      </main>
    );
  }
}

export default Main;
