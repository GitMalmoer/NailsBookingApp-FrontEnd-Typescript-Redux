import React, { useEffect, useState } from "react";
import "./adminPanel.css";
import { useGetUsersQuery } from "../../API/authApi";
import { errorLogModel, userModel } from "../../Interfaces";
import { useGetErrorLogsQuery } from "../../API/logsApi";
import ErrorDetailsModal from "../../Components/AdminPanel/ErrorDetailsModal";
import withAdminAuth from "../../HOC/withAdminAuth";
import { useGetMessagesQuery } from "../../API/questionApi";
import emailMessageModel from "../../Interfaces/emailMessageModel";

function AdminPanel() {
  const { data, isLoading } = useGetUsersQuery(null);
  const [userList, setUserList] = useState<userModel[]>([]);
  const [errorList, setErrorList] = useState<errorLogModel[]>([]);
  const [messagesList, setMessagesList] = useState<emailMessageModel[]>([]);
  const errorLogsQuery = useGetErrorLogsQuery(null);
  const messagesQuery = useGetMessagesQuery(null);

  useEffect(() => {
    if (data && !isLoading) {
      setUserList(data.result);
    }
  }, [isLoading]);

  useEffect(() => {
    if (errorLogsQuery.data && !errorLogsQuery.isLoading) {
      setErrorList(errorLogsQuery.data.result);
    }
  }, [errorLogsQuery.data]);

  useEffect(() => {
    if (messagesQuery.data && !messagesQuery.isLoading) {
      setMessagesList(messagesQuery.data.result);
    }
  }, [messagesQuery.data]);

  return (
    <div className="admin-panel">
      <div className="container">
        <div className="columns columns-admin">
          <div className="column is-3 ">
            <aside className="menu is-hidden-mobile">
              <p className="menu-label">General</p>
              <ul className="menu-list">
                <li>
                  <a className="is-active">Dashboard</a>
                </li>
              </ul>
              <p className="menu-label">Administration</p>
              <ul className="menu-list">
                <li>
                  <a>To do</a>
                  <ul>
                    <li>
                      <a>To do 1</a>
                    </li>
                    <li>
                      <a>To do 2</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <p className="menu-label">Transactions</p>
              <ul className="menu-list">
                <li>
                  <a>To do 1</a>
                </li>
                <li>
                  <a>To do 2</a>
                </li>
              </ul>
            </aside>
          </div>
          <div className="column is-9">
            <section className="hero is-info welcome is-small">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title">Hello, Admin.</h1>
                  <h2 className="subtitle">
                    I hope you are having a great day!
                  </h2>
                </div>
              </div>
            </section>
            {/* DASHBOARD BEGINING */}
            <section className="info-tiles">
              <div className="tile is-ancestor has-text-centered">
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">{userList && userList.length}</p>
                    <p className="subtitle">Users</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">{errorList?.length}</p>
                    <p className="subtitle">Exceptions</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">{messagesList?.length}</p>
                    <p className="subtitle">Emails</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">0</p>
                    <p className="subtitle">To do</p>
                  </article>
                </div>
              </div>
            </section>
            {/* startcard events */}
            <div className="columns columns-admin">
              <div className="column is-12">
                <div className="card events-card card-admin">
                  <header className="card-header">
                    <p className="card-header-title">Events</p>
                    <a
                      href="#"
                      className="card-header-icon"
                      aria-label="more options"
                    >
                      <span className="icon">
                        <i
                          className="fa-solid fa-angle-down"
                          style={{ textDecoration: "none" }}
                          aria-hidden="true"
                        ></i>
                      </span>
                    </a>
                  </header>
                  <div className="card-table">
                    <div className="content">
                      <table className="table is-fullwidth is-striped">
                        <tbody>
                          {errorList &&
                            errorList.map((error: errorLogModel) => {
                              const time = new Date(
                                error.logged
                              ).toLocaleTimeString();
                              const date = new Date(
                                error.logged
                              ).toLocaleDateString();
                              const formatedDate = time + " " + date;

                              return (
                                <tr key={error.id}>
                                  <td width="5%">
                                    <i className="fa fa-bell-o"></i>
                                  </td>
                                  <td>{error.callsite}</td>
                                  <td>{formatedDate}</td>
                                  <td className="level-right">
                                    <ErrorDetailsModal error={error} />
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <footer className="card-footer d-flex justify-content-center">
                    <button className="btn btn-danger text-center">
                      Clear Logs
                    </button>
                  </footer>
                </div>
              </div>
            </div>
            {/* DASHBOARD END */}
          </div>
        </div>
        {/* start */}
        <div className="row">
          <div className="columns ">
            <div className="column is-12">
              <div className="card events-card card-admin">
                <header className="card-header">
                  <p className="card-header-title">Emails</p>
                </header>
                <div className="card-table">
                  <div className="content">
                    <table className="table is-fullwidth is-striped">
                      <tbody>
                        {messagesList &&
                          messagesList.map((message: emailMessageModel) => {
                            return (
                              <tr key={message.id}>
                                <td width="5%">
                                  <i className="fa fa-envelope"></i>
                                </td>
                                <td>{message.id}</td>
                                <td>{message.name}</td>
                                <td >
                                  {message.email}
                                </td>
                                <td >
                                {message.message}
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <footer className="card-footer d-flex justify-content-center">
                </footer>
              </div>
            </div>
          </div>
        </div>
        {/* end */}
      </div>
    </div>
  );
}

export default withAdminAuth(AdminPanel);

{
  /* <div className="column is-6">
                <div className="card card-admin">
                  <header className="card-header">
                    <p className="card-header-title">Inventory Search</p>
                    <a
                      href="#"
                      className="card-header-icon"
                      aria-label="more options"
                    >
                      <span className="icon">
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </a>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      <div className="control has-icons-left has-icons-right">
                        <input
                          className="input is-large"
                          type="text"
                          placeholder="..."
                        />
                        <span className="icon is-medium is-left">
                          <i className="fa fa-search"></i>
                        </span>
                        <span className="icon is-medium is-right">
                          <i className="fa fa-check"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-admin">
                  <header className="card-header">
                    <p className="card-header-title">User Search</p>
                    <a
                      href="#"
                      className="card-header-icon"
                      aria-label="more options"
                    >
                      <span className="icon">
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </a>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      <div className="control has-icons-left has-icons-right">
                        <input
                          className="input is-large"
                          type="text"
                          placeholder="..."
                        />
                        <span className="icon is-medium is-left">
                          <i className="fa fa-search"></i>
                        </span>
                        <span className="icon is-medium is-right">
                          <i className="fa fa-check"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */
}
