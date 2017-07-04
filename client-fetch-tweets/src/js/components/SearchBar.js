import React from "react";

const SearchBar = ({ searchQuery, onClickSearch, onChangeSearchQuery, onSearchBarKeyPress }) =>
        <div class="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-8">
                <div class="input-group">
                    <input type="text" name="searchInput"
                           class="form-control"
                           value={searchQuery}
                           onChange={onChangeSearchQuery}
                           onKeyUp={onSearchBarKeyPress}
                           placeholder="Search for..."/>
                    <span class="input-group-btn">
                            <button class="btn btn-primary" onClick={onClickSearch}>
                                <i class="fa fa-twitter"></i>
                            </button>
                        </span>
                </div>
            </div>
        </div>

export default SearchBar