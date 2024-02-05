import PropTypes from 'prop-types'

const Main = ({ children }) => {
	return (
		<main>{children}</main>
	)
}

Main.propTypes = {
	children: PropTypes.node,
}

export default Main