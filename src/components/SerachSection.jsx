import React from 'react';
import './styles/SearchSection.scss';

export default function SerachSection(props) {
    return (
        <React.Fragment>
            <section className="search-section">
                    <div className="search-bar">
                        <ion-icon name="search-sharp"></ion-icon>
                        <input value={props.inputValue} onChange={props.countryFilterOnChange} placeholder="Search for a country..." type="search"/>
                    </div>
                    <div className="region-filter">
                        hola cara de nalga
                    </div>
                </section>
        </React.Fragment>
    )
}
