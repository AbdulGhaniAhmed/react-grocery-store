import React, { Component } from 'react'

export default class FilterCategory extends Component {
    render() {
        return (
            <div className='filter'>
                <div className="filter-result">{this.props.count} Products</div>
                <div className="filter-size">Category{" "}
                <select value={this.props.size} onChange={this.props.filterProducts}>
                    <option value="">All</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Breakfast">Breakfast</option>
                </select>
                </div>
            </div>
        )
    }
}
