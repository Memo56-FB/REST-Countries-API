import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import SearchSection from './SearchSection';
import './styles/Card.scss'

export default class Countries extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{}],
            inputValue:"",
            searchRegion:""
        }
    }
    componentDidMount(){
        this.getCountries();
    }
    getCountries = async ()=>{
        try{
            const response = await fetch('https://restcountries.eu/rest/v2/all');
            const data = await response.json();
            this.setState({data:data});
        }catch(error){
            this.setState({error})
        }
    }
    handleChangeInput = e =>{
        this.setState({
            inputValue: e.target.value
        })
    }
    handleChangeRegion = e => {
        this.setState({
            searchRegion: e.target.value
        })
    }
    render() {
        const country = this.state.data;
        const countries = country.map((country,index)=>{
            if(this.state.inputValue !== "" && country.name.toLowerCase().indexOf(this.state.inputValue.toLowerCase())=== -1){
                return null;
            }
            if(this.state.searchRegion !== "All" && this.state.searchRegion !== "" && country.region.toLowerCase().indexOf(this.state.searchRegion.toLowerCase())=== -1){
                return null;
            }
            return <article key={index} className="country">
                        {/* the question symbol is important to make the search of the param in the url */}
                        <Link to={`/about/?alphaCode=${country.alpha3Code}`}>
                            <figure className="country__image">
                                
                                    <img src={country.flag} alt={country.name} />
                            </figure>
                        </Link>        
                        <div className="country__information">
                            <h3 className="country__title">{country.name}</h3>
                            <p><span className="bold">Population:</span> {new Intl.NumberFormat('en-EU').format(country.population)}</p>
                            <p><span className="bold">Region:</span> {country.region}</p>
                            <p><span className="bold">Capital:</span> {country.capital}</p>
                        </div>
                    </article>
        })
        return (
            <React.Fragment>
                <SearchSection inputValue={this.state.inputValue} handleChangeInput={this.handleChangeInput} handleChangeRegion={this.handleChangeRegion}/>
                <main className="countries-container">
                    {countries}
                </main>
            </React.Fragment>
        )
    }
}