import React from "react";
import _ from "lodash";

import { Layout } from "../components/index";
import { htmlToReact } from "../utils";

export default class Project extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <div className="outer">
          <div className="inner">
            <article className="post project post-full">
              <header className="post-header inner-small">
                <h1 className="post-title line-top">
                  {_.get(this.props, "pageContext.frontmatter.title")}
                </h1>
                {_.get(this.props, "pageContext.frontmatter.subtitle") && (
                  <div className="post-subtitle">
                    {htmlToReact(
                      _.get(this.props, "pageContext.frontmatter.subtitle")
                    )}
                  </div>
                )}
              </header>
              <div class="grid">
                <ul id="hexGrid">
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="goo.com">
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://www.worldatlas.com/r/w728-h425-c728x425/upload/82/b5/30/shutterstock-377524567.jpg)`
                          }}
                        ></div>
                        <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p>
                      </a>
                    </div>
                  </li>

                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="goo.com">
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSEn4PM-nKyX-K36zW5wn8DRg_oUT7ZxYo-daMCe4_udbWwIol)`
                          }}
                        ></div>
                        <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="goo.com">
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://www.worldatlas.com/r/w728-h425-c728x425/upload/82/b5/30/shutterstock-377524567.jpg)`
                          }}
                        ></div>
                        <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="goo.com">
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSEn4PM-nKyX-K36zW5wn8DRg_oUT7ZxYo-daMCe4_udbWwIol)`
                          }}
                        ></div>
                        <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="goo.com">
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://www.worldatlas.com/r/w728-h425-c728x425/upload/82/b5/30/shutterstock-377524567.jpg)`
                          }}
                        ></div>
                        <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="goo.com">
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://www.worldatlas.com/r/w728-h425-c728x425/upload/82/b5/30/shutterstock-377524567.jpg)`
                          }}
                        ></div>
                        <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="goo.com">
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSEn4PM-nKyX-K36zW5wn8DRg_oUT7ZxYo-daMCe4_udbWwIol)`
                          }}                        ></div>
                        <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="goo.com">
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://www.worldatlas.com/r/w728-h425-c728x425/upload/82/b5/30/shutterstock-377524567.jpg)`
                          }}                        ></div>
                        <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="goo.com">
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSEn4PM-nKyX-K36zW5wn8DRg_oUT7ZxYo-daMCe4_udbWwIol)`
                          }}                        ></div>
                        <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p>
                      </a>
                    </div>
                  </li>

                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="goo.com">
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://www.worldatlas.com/r/w728-h425-c728x425/upload/82/b5/30/shutterstock-377524567.jpg)`
                          }}                        ></div>
                        <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="goo.com">
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSEn4PM-nKyX-K36zW5wn8DRg_oUT7ZxYo-daMCe4_udbWwIol)`
                          }}                        ></div>
                        <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p>
                      </a>
                    </div>
                  </li>
                  {/* <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="goo.com">
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://www.worldatlas.com/r/w728-h425-c728x425/upload/82/b5/30/shutterstock-377524567.jpg)`
                          }}                        ></div>
                        <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="goo.com">
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://www.worldatlas.com/r/w728-h425-c728x425/upload/82/b5/30/shutterstock-377524567.jpg)`
                          }}                        ></div>
                        <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="goo.com">
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://www.worldatlas.com/r/w728-h425-c728x425/upload/82/b5/30/shutterstock-377524567.jpg)`
                          }}                        ></div>
                        <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p>
                      </a>
                    </div>
                  </li> */}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </Layout>
    );
  }
}
