import React, { Component } from 'react'
import SerachSection from './SearchSection';
import './styles/Card.scss'

export default class Countries extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
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
            return console.error(error)
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
        const countries = country.map((country)=>{
            if(this.state.inputValue !== "" && country.name.toLowerCase().indexOf(this.state.inputValue.toLowerCase())=== -1){
                return null;
            }
            if(this.state.searchRegion !== "All" && this.state.searchRegion !== "" && country.region.toLowerCase().indexOf(this.state.searchRegion.toLowerCase())=== -1){
                return null;
            }
            return <article key={country.numericCode} className="country">
                        <figure className="country__image">
                            <img src={country.flag} alt={country.name} />        
                        </figure>
                        <div className="country__information">
                            <h3 className="country__title">{country.name}</h3>
                            <p>Population: {country.population}</p>
                            <p>Region: {country.region}</p>
                            <p>Capital: {country.capital}</p>
                        </div>
                    </article>
        })
        return (
            <React.Fragment>
                <SerachSection inputValue={this.state.inputValue} handleChangeInput={this.handleChangeInput} handleChangeRegion={this.handleChangeRegion}/>
                <main>
                    {countries}
                </main>
            </React.Fragment>
        )
    }
}