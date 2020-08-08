import React from 'react';
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import { Link } from 'react-router-dom';

import './styles.css';

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return(
          <header className="page-header">
              <div className="top-bar-container">
                  <Link to="/">
                        <img src={backIcon} alt="Voltar"/>

                  </Link>

                  <img src={logoImg} alt="Logo"/>
              </div>

              <div className="header-content">
              <strong>{props.title}</strong>
              </div>

              {props.children}
          </header>
    );
}

export default PageHeader;