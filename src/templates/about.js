import React from "react";
import _ from "lodash";

import { Layout } from "../components/index";
import { htmlToReact } from "../utils";
// import Img1 from "../../static/images/9.jpg"

export default class Project extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <div className="outer">
          <div className="inner">
            <article className="post project post-full">
              <header className="post-header inner-small">
                {/* <h1 className="post-title line-top">
                  {_.get(this.props, "pageContext.frontmatter.title")}
                </h1> */}
                {_.get(this.props, "pageContext.frontmatter.subtitle") && (
                  <div className="post-subtitle">
                    {htmlToReact(
                      _.get(this.props, "pageContext.frontmatter.subtitle")
                    )}
                  </div>
                )}
              </header>

                                  {/* Grid - Body */}
              <div class="grid">
                <ul id="hexGrid">
                  <li class="hex">
                    <div class="hexIn">
                      {/* <a class="hexLink" href="goo.com">
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
                      </a> */}
                    </div>
                  </li>


                                   {/* 2  href=""   */}
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink"  >
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/495/241/90/acrylic-texture-design-color-wallpaper-preview.jpg)`
                          }}
                        ></div>
                        {/* <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p> */}
                      </a>
                    </div>
                  </li>

                                    {/* 3 */}
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" >
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/106/906/355/pattern-digital-art-triangle-wallpaper-preview.jpg)`
                          }}
                        ></div>
                        {/* <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p> */}
                      </a>
                    </div>
                  </li>
                                    {/* 4 */}
                  <li class="hex">
                    <div class="hexIn">
                      {/* <a class="hexLink" href="goo.com">
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
                      </a> */}
                    </div>
                  </li>

                                    {/* 2 Linie s 1.  */}
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" >
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/246/99/675/texture-digital-art-pattern-artwork-wallpaper-preview.jpg)`
                          }}
                        ></div>
                        {/* <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p> */}
                      </a>
                    </div>
                  </li>

                           {/* 2. Linie s 2.  d Mitti  */}
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="/team">
                        <div
                          class="img"
                          style={{
                            backgroundImage: ``
                          }}
                        ></div>
                        <h1 id="demo1">Team</h1>
                        <p id="demo2">
                          Finden Sie heraus wer wir sind
                        </p>
                      </a>
                    </div>
                  </li>

                                    {/* Linie 2   s 3. href="goo.com"   */}
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" >
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/517/4/59/razer-phone-2-abstract-colorful-hd-wallpaper-preview.jpg)`
                          }}                        ></div>
                        {/* <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p> */}
                      </a>
                    </div>
                  </li>

                            {/*  3. Linie s 1.  */}
                  <li class="hex">
                    <div class="hexIn">
                      {/* <a class="hexLink" href="goo.com">
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
                      </a> */}
                    </div>
                  </li>

                                    {/*  3. Linie s 2.  href="goo.com"  */}
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" >
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/320/160/1019/razer-phone-2-abstract-colorful-hd-wallpaper-preview.jpg)`
                          }}                        ></div>
                        {/* <h1 id="demo1">Titiel unso</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p> */}
                      </a>
                    </div>
                  </li>
                                    {/*  3. Linie s 3. href="goo.com" */}
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" >
                        <div
                          class="img"
                          style={{
                            backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/913/752/910/digital-art-blue-leaves-pattern-wallpaper-preview.jpg)`
                          }}                        ></div>
                        {/* <h1 id="demo1">This is a title</h1>
                        <p id="demo2">
                          Some sample text about the article this hexagon leads
                          to
                        </p> */}
                      </a>
                    </div>
                  </li>

                                      {/*  3. Linie s 4.  */}
                  <li class="hex">
                    <div class="hexIn">
                      {/* <a class="hexLink" href="goo.com">
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
                      </a> */}
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
