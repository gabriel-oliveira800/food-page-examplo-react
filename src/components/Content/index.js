import React from 'react';

import ItemCard from '../Item';
import ItemsLists from '../../data';

import Search from '../Search';

import './style.css';

function Content() {
  return (
    <>
      <main>
        <Search />

        <div className="content-box">
          {ItemsLists.map((item, key) => {
            return <ItemCard
              key={key}
              name={item.name}
              url={item.url}
              description={item.description}
              price={item.price}
              rating={item.rating}
            />
          })}
        </div>
      </main>

      <footer>
        <h2>Feito com <span>💜</span> por Gabriel Oliveira</h2>
        <div className="rede-social">
          <a href="https://github.com/gabriel-oliveira800">
            <img src="https://marcas-logos.net/wp-content/uploads/2020/03/GITHUB-LOGO.png" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/gabriel-oliveira-94ab2a17a">
            <img src="https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2017/12/linkedin.png?w=780&h=408&crop=1" alt="Linkedin" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Content;
