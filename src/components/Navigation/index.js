import React, { useRef } from 'react';
import './style.scss';

export default function(props) {

    const menuItems = useRef();

    const onMenu = (e) => {
        const {checked} = e.target;

        if(checked) {
            // menuItems.current.style.opacity = 1;
            menuItems.current.style.height = '220px';
        }
        else {
            // menuItems.current.style.opacity = 0;
            menuItems.current.style.height = '0px';
        }
    }

    const onSelectItem = (e) => {
        document.getElementById('menu').checked = false;
            // menuItems.current.style.opacity = 0;
            menuItems.current.style.height = '0px';
    }

    return (
    <nav className='navbar' role='navigation'>
        <div className='nav-content'>
            <div className='nav-content-header'>
                <ul className='header-list'>
                    <li className='header-item'>
                        {/* <label class='menu-label'>
                            <i className="fas fa-bars menu-icon"></i>
                        </label> */}
                        <input type='checkbox' id='menu' onChange={onMenu}/>
                        <label for='menu' className='menu-icon'>
                            <div className='menu'></div>
                        </label>
                    </li>
                    <li className='header-item'>
                        <a target='_self' href='#profile' className='outstandingboy' onClick={onSelectItem}>outstandingboy</a>
                    </li>
                    <li className='header-item'>
                        <a target='_blank' href='https://www.github.com/outstanding1301' 
                        className="fab fa-github github"></a>
                    </li>
                </ul>
            </div>
          <ul className='menu-list' ref={menuItems}>
            <li className='menu-item'>
                <a target='_self' className={props.activated === 0 ? 'highlight' : ''} href="#top" onClick={onSelectItem}>outstandingboy</a>
            </li>
            <li className='menu-item'>
                <a target='_self' className={props.activated === 1 ? 'highlight' : ''} href="#projects" onClick={onSelectItem}>Projects</a>
            </li>
            <li className='menu-item'>
                <a target='_self' className={props.activated === 2 ? 'highlight' : ''} href="#skills" onClick={onSelectItem}>Skills</a>
            </li>
            <li className='menu-item'>
                <a target='_self' className={props.activated === 3 ? 'highlight' : ''} href="#about" onClick={onSelectItem}>About</a>
            </li>
            <li className='menu-item'>
                <a target='_self' className={props.activated === 4 ? 'highlight' : ''} href="#contact" onClick={onSelectItem}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}