import { connect } from 'react-redux'
import { setVisibilityFilter } from '../redux/actions'
import Link from '../component/Link'
import { Dispatch } from 'redux'

interface State {
  visibilityFilter: string;
}

interface StateProps {
  active: boolean;
}

interface DispatchProps {
  onClick(): void;
}

interface OwnProps {
  filter: string;
}

const mapStateToProps = (state: State, ownProps: OwnProps): StateProps => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps): DispatchProps => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)

export default FilterLink
