import React from 'react';
import _ from 'lodash';


import {Layout} from '../components/index';
import {htmlToReact} from '../utils';
import Img1 from '../../static/images/1.jpg'
import me from '../../static/images/me.jpeg'
import Manu from '../../static/images/manu_brudi.jpeg'
import Thomas from '../../static/images/Thomas.jpg'
import David from '../../static/images/Vij.jpg'
import Vij from '../../static/images/Vij.jpg'


export default class Project extends React.Component {
    render() {
      
        return (
            <Layout {...this.props}>
            <div className="outer">
              <div className="inner">
                <article className="post project post-full">
                  <header className="post-header inner-small">
                    <h1 className="post-title line-top">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                    {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
                    <div className="post-subtitle">
                      {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                    </div>
                    }
                  </header>
                  <section class="card-container">
  
  
  <article className="c-card c-card--center">
    <header className="c-card__header">
      <img src={me} className="c-card__image" alt="Card " />
    </header>
    <div className="c-card__body">
      <h2 className="c-card__title">
       Ray
      </h2>
      <p className="c-card__subtitle">
        CEO
      </p>
      <p className="c-card__intro">
       Entwicklung von Webseiten und mobile Apps. Fan von kreativem Digital-Marketing.
      </p>
    </div>
    <footer className="c-card__footer">
    <a className="ikone" href="https://www.linkedin.com/in/raymond-lotmar-244a3b8b/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
    <a className="ikone" href="https://twitter.com/LotmarRaymond" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
    </footer>
  </article>

    <article className="c-card c-card--center">
    <header className="c-card__header">
      <img src={Img1} className="c-card__image" alt="Card " />
    </header>
    <div className="c-card__body">
      <h2 className="c-card__title">
       David
      </h2>
      <p className="c-card__subtitle">
        Growth Hacker & Consultant
      </p>
      <p className="c-card__intro">
        Arbeit im Bereich Marketing & UX / UI 
      </p>
    </div>
    {/* <footer className="c-card__footer">
    <a className="ikone" href="linkedin.com"><i class="fab fa-linkedin"></i></a>
    <a className="ikone" href="twitter.com"><i class="fab fa-twitter"></i></a>
    </footer> */}
  </article>

  <article className="c-card c-card--center">
    <header className="c-card__header">
      <img src={Thomas} className="c-card__image" alt="Card " />
    </header>
    <div className="c-card__body">
      <h2 className="c-card__title">
       Thomas
      </h2>
      <p className="c-card__subtitle">
        Marketing 
      </p>
      <p className="c-card__intro">
        Freelancer im Bereich Digital Marketing und konventionell Marketing. 
      </p>
    </div>
    {/* <footer className="c-card__footer">
    <a className="ikone" href="linkedin.com"><i class="fab fa-linkedin"></i></a>
    <a className="ikone" href="twitter.com"><i class="fab fa-twitter"></i></a>
    </footer> */}
  </article>

  <article className="c-card c-card--center">
    <header className="c-card__header">
      <img src={Manu} className="c-card__image" alt="Card " />
    </header>
    <div className="c-card__body">
      <h2 className="c-card__title">
       Manuela
      </h2>
      <p className="c-card__subtitle">
        UX & UI 
      </p>
      <p className="c-card__intro">
        Freelancerin im Bereich Marketing & UX / UI. 
      </p>
    </div>
    {/* <footer className="c-card__footer">
    <a className="ikone" href="linkedin.com"><i class="fab fa-linkedin"></i></a>
    <a className="ikone" href="twitter.com"><i class="fab fa-twitter"></i></a>
    </footer> */}
  </article>

  <article className="c-card c-card--center">
    <header className="c-card__header">
      <img src={Vij} className="c-card__image" alt="Card " />
    </header>
    <div className="c-card__body">
      <h2 className="c-card__title">
       Vij
      </h2>
      <p className="c-card__subtitle">
        Entwickler
      </p>
      <p className="c-card__intro">
         Mobile & Web Entwickler. Freelancer mit Flutter und Angular skills.
      </p>
    </div>
    {/* <footer className="c-card__footer">
    <a className="ikone" href="linkedin.com"><i class="fab fa-linkedin"></i></a>
    <a className="ikone" href="twitter.com"><i class="fab fa-twitter"></i></a>
    </footer> */}
  </article>
  
</section>
                 
                </article>
                
              </div>
            </div>
            </Layout>
        );
    }
}