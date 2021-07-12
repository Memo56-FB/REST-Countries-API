import React from 'react';
import RegionFilter from './RegionFilter';
import './styles/SearchSection.scss';

export default function SearchSection(props) {
    return (
        <React.Fragment>
            <section className="search-section">
                    <div className="search-bar">
                        <ion-icon name="search-sharp"></ion-icon>
                        <input value={props.inputValue} onChange={props.handleChangeInput} placeholder="Search for a country..." type="search"/>
                    </div>
                    <RegionFilter  handleChangeRegion={props.handleChangeRegion}/>
                </section>
        </React.Fragment>
    )
}
