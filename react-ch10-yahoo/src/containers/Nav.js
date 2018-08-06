import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Nav from '../components/Nav';

const mapStateToProps = state => ({
  categories: state.shopping.categories
});

const mapDispatchToProps = dispatch => ({
  onClick (path){
    dispatch(push(path));
  }
})

export default connect(mapStateToProps)(Nav);
