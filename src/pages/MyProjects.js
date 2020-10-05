import React from 'react'

function MyProjects() {
    return (
        <div className="myprojects">
            <ul className="projects__ul">
                <li className="projects__li">
                    <a className="projects__a" href="https://project2-watchlist.herokuapp.com/">
                        The Watchlist
                    </a>
                </li>
                <li className="projects__li">
                    <a className="projects__a" href="https://codyrhoward.github.io/GA-Project-1/">
                        Track Star
                    </a>
                </li>
                <li className="projects__li">
                    <a className="projects__a" href="https://deals-app-api.herokuapp.com/deals">
                        Deals
                    </a>
                </li>
                <li className="projects__li">
                    <a className="projects__a" href="https://harvard-art-museum.herokuapp.com/">
                        Art Museum
                    </a>
                </li>
                <li className="projects__li">
                    <a className="projects__a" href="https://trendi-8b970.web.app">
                        Trendi
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default MyProjects
