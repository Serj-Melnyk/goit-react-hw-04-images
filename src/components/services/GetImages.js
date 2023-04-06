import PropTypes from 'prop-types';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '33044303-65522754c62b78f0dd1b4ed57';

export const getImages = (searchText, page) => {
  return fetch(
    `${BASE_URL}?q=${searchText}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
};

getImages.propTypes = {
  searchText: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

// `https://pixabay.com/api/?q=${searchText}&page=${page}&key=33044303-65522754c62b78f0dd1b4ed57&image_type=photo&orientation=horizontal&per_page=12`
