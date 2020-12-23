import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange}) => {
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);
}