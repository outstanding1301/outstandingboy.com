import React from 'react';
import './style.scss';

export default function(props) {
    return (
    <nav className='navbar' role='navigation'>
        <div className='nav-content'>
            <div className='nav-content-header'>
                <ul className='header-list'>
                    <li className='header-item'>
                        {/* <label class='menu-label'>
                            <i className="fas fa-bars menu-icon"></i>
                        </label> */}
                        <input type='checkbox' id='menu'/>
                        <label for='menu' className='menu-icon'>
                            <div className='menu'></div>
                        </label>
                    </li>
                    <li className='header-item'>
                        <a target='_self' href='#profile' className='outstandingboy'>outstandingboy</a>
                    </li>
                    <li className='header-item'>
                        <a target='_blank' href='https://www.github.com/outstanding1301' 
                        className="fab fa-github github"></a>
                    </li>
                </ul>
            </div>
          <ul className='menu-list'>
            <li className='menu-item'>
                <a target='_self' className={props.activated === 0 ? 'highlight' : ''} href="#top">outstandingboy</a>
            </li>
            <li className='menu-item'>
                <a target='_self' className={props.activated === 1 ? 'highlight' : ''} href="#projects">Projects</a>
            </li>
            <li className='menu-item'>
                <a target='_self' className={props.activated === 2 ? 'highlight' : ''} href="#skills">Skills</a>
            </li>
            <li className='menu-item'>
                <a target='_self' className={props.activated === 3 ? 'highlight' : ''} href="#about">About</a>
            </li>
            <li className='menu-item'>
                <a target='_self' className={props.activated === 4 ? 'highlight' : ''} href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}