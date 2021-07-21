import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css'

import PageLoad from './PageLoad';
import SearchSection from './SearchSection';
import './styles/Countries.scss'

export default class Countries extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{}],
            inputValue:"",
            searchRegion:"",
            loading:true,
        }
    }
    componentDidMount(){
        this.getCountries();
    }
    getCountries = async ()=>{
        try{
            const response = await fetch('https://restcountries.eu/rest/v2/all');
            const data = await response.json();
            this.setState({data,loading:false});
        }catch(error){
            this.setState({error,loading:false})
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
                                    <LazyLoadImage effect="opacity" className="lazy" loading="lazy" src={country.flag} alt={country.name} />
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
                {this.state.loading && 
                    <PageLoad/>
                }
                    {countries}
                </main>
            </React.Fragment>
        )
    }
}