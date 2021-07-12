import React from 'react'   
import './styles/RegionFilter.scss'

export default function RegionFilter(props) {
    return (
        <React.Fragment>
            <select onChange={props.handleChangeRegion} name="Regions" id="Regions" className="region-filter">
                <option defaultValue hidden>Filter by Region</option>
                <option value="All">All</option>    
                <option value="Africa">Africa</option>    
                <option value="America">America</option>    
                <option value="Asia">Asia</option>    
                <option value="Europe">Europe</option>    
                <option value="Oceania">Oceania</option>    
            </select>            
        </React.Fragment>
    )
}
